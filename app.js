/* ==========================================================================
   執行長專業參考簡報教材引擎 (app.js)
   支援：簡報授課模式 (Slide Mode) / 講義長圖模式 (Scroll Mode) / 講師備忘錄切換 / 關鍵字即時過濾 / 鍵盤導覽
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide-card');
  const navItems = document.querySelectorAll('.nav-item');
  const progressBar = document.getElementById('progressBar');
  const slideCounter = document.getElementById('slideCounter');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnModeSlide = document.getElementById('btnModeSlide');
  const btnModeScroll = document.getElementById('btnModeScroll');
  const btnToggleNotes = document.getElementById('btnToggleNotes');
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.tag-btn');

  let currentIndex = 0;
  let isSlideMode = true;
  let showNotes = true;

  function updateUI() {
    slides.forEach((slide, idx) => {
      if (isSlideMode) {
        slide.classList.toggle('active-slide', idx === currentIndex);
      } else {
        slide.classList.add('active-slide');
      }
    });

    navItems.forEach((item) => {
      const targetId = item.getAttribute('data-target');
      const slideId = slides[currentIndex]?.id;
      item.classList.toggle('active', isSlideMode && targetId === slideId);
    });

    const total = slides.length;
    const progress = total > 1 ? (currentIndex / (total - 1)) * 100 : 100;
    if (progressBar) progressBar.style.width = `${progress}%`;

    if (slideCounter) {
      slideCounter.textContent = `${currentIndex + 1} / ${total}`;
    }

    if (isSlideMode && slides[currentIndex]) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= slides.length) index = slides.length - 1;
    currentIndex = index;
    if (slides[currentIndex]?.id) {
      history.replaceState(null, '', '#' + slides[currentIndex].id);
    }
    updateUI();
  }

  function nextSlide() {
    if (currentIndex < slides.length - 1) {
      goToSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  }

  if (btnModeSlide && btnModeScroll) {
    btnModeSlide.addEventListener('click', () => {
      isSlideMode = true;
      document.body.classList.add('mode-slide');
      btnModeSlide.classList.add('active');
      btnModeScroll.classList.remove('active');
      slides.forEach(s => { s.style.display = ''; });
      updateUI();
    });

    btnModeScroll.addEventListener('click', () => {
      isSlideMode = false;
      document.body.classList.remove('mode-slide');
      btnModeScroll.classList.add('active');
      btnModeSlide.classList.remove('active');
      updateUI();
    });
  }

  if (btnToggleNotes) {
    btnToggleNotes.addEventListener('click', () => {
      showNotes = !showNotes;
      btnToggleNotes.classList.toggle('active', showNotes);
      document.querySelectorAll('.speaker-notes').forEach(note => {
        note.style.display = showNotes ? 'block' : 'none';
      });
    });
  }

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('data-target');
      const targetIndex = Array.from(slides).findIndex(s => s.id === targetId);
      if (targetIndex !== -1) {
        if (!isSlideMode) {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          goToSlide(targetIndex);
        }
      }
    });
  });

  if (btnPrev) btnPrev.addEventListener('click', prevSlide);
  if (btnNext) btnNext.addEventListener('click', nextSlide);

  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput?.focus();
      return;
    }
    if (isSlideMode) {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    }
  });

  // In-deck keyword search: automatically switches to Scroll Mode when searching so all matching slides appear
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (query && isSlideMode) {
        isSlideMode = false;
        document.body.classList.remove('mode-slide');
        btnModeScroll?.classList.add('active');
        btnModeSlide?.classList.remove('active');
      }

      slides.forEach((slide) => {
        const text = slide.textContent.toLowerCase();
        const matches = !query || text.includes(query);
        slide.style.display = matches ? 'block' : 'none';

        const correspondingNav = document.querySelector(`.nav-item[data-target="${slide.id}"]`);
        if (correspondingNav) {
          correspondingNav.style.display = matches ? 'flex' : 'none';
        }
      });
    });
  }

  // Category / Priority filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      navItems.forEach(item => {
        const priority = item.getAttribute('data-priority');
        if (filter === 'all' || priority === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Handle URL Hash on Load (e.g. #slide-handwritten-1998)
  if (window.location.hash) {
    const hashId = window.location.hash.substring(1);
    const targetIdx = Array.from(slides).findIndex(s => s.id === hashId);
    if (targetIdx !== -1) {
      currentIndex = targetIdx;
    }
  }

  document.body.classList.add('mode-slide');
  updateUI();
});
