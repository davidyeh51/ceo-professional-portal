/* ==========================================================================
   執行長專業入口網站 (CEO Professional Portal) — 全域圖書目錄與關鍵字深度檢索資料庫 (portal-data.js)
   未來新增第 2～50 本書籍時，僅需於 BOOKS_CATALOG 與 GLOBAL_SEARCH_INDEX 擴充條目即可自動納入全域搜尋
   ========================================================================== */

window.BOOKS_CATALOG = [
  {
    id: "book-01",
    num: "BOOK #01",
    title: "《張忠謀談策略與領導：台積電 30 年經營戰略——一舉就要讓對手絕望！》",
    subtitle: "數位時代・經理人 會員限定專刊（27頁 / 7大篇章完整精讀）",
    author: "張忠謀 主講 ／ 吳美欣、簡永昌、高敬原、周頌宜、陳芳毓 整理撰文",
    publisher: "BusinessNext 數位時代・MANAGER today 經理人（首發核心教材）",
    domain: "S1",
    domainName: "S1｜商業模式與競爭戰略",
    status: "ready",
    statusLabel: "🔥 首發精讀・16頁互動簡報已上線",
    icon: "👑",
    gradient: "linear-gradient(135deg, #DC2626, #B45309)",
    quote: "「台積電的商業模式是以『客戶是誰』為定，不是以『產品是什麼』為定；策略比基礎能力更高一層——一舉就要讓對手絕望！而把 Who、What、When 三個 W 訂好，就可以回家睡午覺了。」",
    highlights: [
      "<strong>鎮館之寶：1998 年唯一手寫機密策略手稿</strong>：滿足客戶 6 大需求、取得 First & Last Look、全員銷售文化、創造 >20% ROE 與 2010 年 130 億美元營收實績",
      "<strong>60 年總經理 6 大基本功</strong>：技術鑽研、述你所知簡報、商品 vs. 客製品、CEO 訂價能力抵 1000 個工程師、開會專注傾聽不記筆記、從不帶老班底",
      "<strong>創新與雙首長治理</strong>：獎賞賺錢創新、不罰虧本創新（直通 CEO 上訴機制）；董事長（劉德音）護航董事會 vs. 總裁（魏哲家）拿生意與規劃每年 3,000 億資本投資",
      "<strong>國際觀、人才循環與 3 大學習祕訣</strong>：別把讀台大當 18 歲人生巔峰！美國 36 年帶回『世界觀』與『謙虛 (Modesty)』、Training by Circulation、每天閱讀 2-4 小時"
    ],
    tags: ["商業模式", "1998手寫策略", "一舉讓對手絕望", "3W原則", "訂價抵1000工程師", "傾聽不記筆記", "不帶老班底", "雙首長制", "世界觀與謙虛", "人才循環", "三大學習祕訣"],
    slideUrl: "book-morris-chang-strategy-leadership.html",
    summaryAnchor: "#book01-summary-section",
    insightAnchor: "#book01-insights-section",
    memoAnchor: "#book01-memo-section",
    qaAnchor: "#book01-qa-section"
  },
  {
    id: "book-02",
    num: "BOOK #02",
    title: "《CEO 時間管理與 5–10 倍槓桿配置哲學》",
    subtitle: "HBR 27 位執行長 6 萬小時追蹤調查 ＆ 大亞集團沈尚弘轉型實戰",
    author: "哈佛商業評論 (HBR) ／ 經理人月刊專題（知識庫已建檔於 A1.2.2.1）",
    publisher: "大衛雲 2.0 高階教練知識庫連動教材",
    domain: "S4",
    domainName: "S4｜公司治理與資本配置",
    status: "kb",
    statusLabel: "📘 知識庫已建檔（跨館連動）",
    icon: "⏱️",
    gradient: "linear-gradient(135deg, #0F766E, #14B8A6)",
    quote: "「時間效率不是把事做快，而是先確定做對的事（划船朝同一方向）。CEO 親自參與會議與專案的唯一判準：『非我不可』且『我做有 5–10 倍槓桿效果』！」",
    highlights: [
      "<strong>HBR 27位 CEO 實證</strong>：日均工作 9.7 小時、3 小時陪家人；巴菲特『空白行事曆』vs. 多西『主題工作日（週一管理/週二產品…）』",
      "<strong>大亞沈尚弘槓桿準則</strong>：耗時半年與一級主管凝聚轉型共識（從電線傳輸能源跨入太陽能 70 座電廠與儲能，貢獻 15.75% 獲利）",
      "<strong>與張忠謀高度呼應</strong>：戴蒙清晨 5 點閱讀產業與客戶資訊、沈尚弘日讀 2–3 小時，完全印證張忠謀『每天花 2–4 小時有紀律閱讀』"
    ],
    tags: ["CEO時間管理", "5-10倍槓桿", "主題工作日", "空白行事曆", "非我不可", "策略共識", "大亞沈尚弘"],
    slideUrl: "#book01-playbook-section"
  },
  {
    id: "book-03",
    num: "BOOK #03",
    title: "《破框能力：突破專業陷阱，像領導者一樣行動》",
    subtitle: "Act Like a Leader, Think Like a Leader（簡體版譯《能力陷阱》）",
    author: "艾米妮亞・伊貝拉 (Herminia Ibarra)（知識庫已建檔於 A1.2.2.3）",
    publisher: "天下雜誌 ／ 機械工業出版社",
    domain: "S2",
    domainName: "S2｜總經理養成與領導心法",
    status: "kb",
    statusLabel: "📘 知識庫已建檔（跨館連動）",
    icon: "🚀",
    gradient: "linear-gradient(135deg, #1E3A8A, #3B82F6)",
    quote: "「把你帶到目前位置的能力，不能把你帶到下一個位置（79%高管共識）。突破『能力陷阱』唯一的方法是『先行動後思考（由外而內 Outsight）』——從軸心型轉向橋梁型領導者！」",
    highlights: [
      "<strong>三大陷阱診斷</strong>：能力陷阱（技術主管只顧研發而忽略業務行銷）、人際網路陷阱（同溫層小圈子）、真實性陷阱",
      "<strong>與張忠謀高度呼應</strong>：張忠謀指出『CEO 最大的責任是把外面的世界搬到公司裡面來，做公司內外最重要的連結』，正是伊貝拉所稱的『橋梁型領導者』"
    ],
    tags: ["破框能力", "能力陷阱", "由外而內Outsight", "橋梁型領導者", "BCDs人脈指標", "真實性陷阱"],
    slideUrl: "#book01-insights-section"
  },
  {
    id: "book-04",
    num: "BOOK #04",
    title: "《高績效教練（原書第5版）》＆《廣行解讀》",
    subtitle: "Coaching for Performance — 商業教練聖經與 GROW 模型實戰",
    author: "【英】約翰・惠特默爵士 (Sir John Whitmore)（互動簡報已建檔於 A1.2.2.3）",
    publisher: "機械工業出版社・華章圖文",
    domain: "S2",
    domainName: "S2｜總經理養成與領導心法",
    status: "kb",
    statusLabel: "🔥 姊妹館 18 頁簡報已建檔",
    icon: "🏆",
    gradient: "linear-gradient(135deg, #D97706, #B45309)",
    quote: "「績效＝潛能－干擾（P = p - i）。透過提問觸發『覺察』與『責任感』兩大開關，落實聽說比 2:1 的積極傾聽與 GROW 四步模型。」",
    highlights: [
      "<strong>與張忠謀傾聽哲學共鳴</strong>：張忠謀開會『專注看對方講話、從不寫筆記、觀察肢體語言與動機』，完美印證《高績效教練》第 8 章深度傾聽與肢體語言判讀",
      "<strong>與張忠謀 3W 原則互補</strong>：GROW 模型的 Will（做什麼 What、何時做 When、誰負責 Who）與張忠謀策略執行 3W 原則完全同構"
    ],
    tags: ["GROW模型", "覺察與責任感", "積極傾聽", "肢體語言", "高管教練手冊"],
    slideUrl: "#book01-playbook-section"
  },
  {
    id: "book-05",
    num: "BOOK #05",
    title: "《張忠謀自傳（上冊 1931–1964 ＆ 下冊 1964–2018）》",
    subtitle: "親筆撰寫 87 年人生與德州儀器、工研院、台積電完整史詩",
    author: "張忠謀 (Morris Chang)",
    publisher: "規劃收錄教材｜天下文化（S1 商業模式與競爭戰略）",
    domain: "S1",
    domainName: "S1｜商業模式與競爭戰略",
    status: "planned",
    statusLabel: "⏳ 規劃收錄教材",
    icon: "📜",
    gradient: "linear-gradient(135deg, #475569, #64748B)",
    quote: "「做一個器識宏大、嚴謹紀律、終身學習的世界級領導者。從戰亂少年、MIT 落榜轉折、德州儀器封王，到 55 歲開創晶圓代工盛世。」",
    highlights: [
      "深度補強本專刊：完整還原 1964–1983 德州儀器事業部總經理戰役與 1987 台積電創立決策全貌",
      "張忠謀親述公司治理、董事會運作、接班人佈局與地緣政治下的半導體戰略"
    ],
    tags: ["張忠謀自傳", "德州儀器", "晶圓代工", "公司治理", "半導體戰略"]
  },
  {
    id: "book-06",
    num: "BOOK #06",
    title: "《卓有成效的管理者 (The Effective Executive)》",
    subtitle: "管理學之父彼得・杜拉克給 CEO 的五項修練與三年式主題學習",
    author: "彼得・杜拉克 (Peter Drucker)",
    publisher: "規劃收錄教材｜S6 終身學習與自我迭代",
    domain: "S6",
    domainName: "S6｜終身學習與自我迭代",
    status: "planned",
    statusLabel: "⏳ 規劃收錄教材",
    icon: "🧭",
    gradient: "linear-gradient(135deg, #475569, #64748B)",
    quote: "「效率是把事情做對（Do things right），卓有成效是做對的事情（Do the right things）。杜拉克一生 39 本著作有四分之三完成於 60 歲之後，秘訣正是持續 60 年的『三年式主題學習』。」",
    highlights: [
      "直接呼應本專刊第 07 篇：杜拉克 60 歲後高產出 vs. 張忠謀 55 歲創台積電的終身學習心法",
      "五大卓有成效習慣：善用時間、重視貢獻、發揮長處、要事優先、有效決策"
    ],
    tags: ["彼得杜拉克", "卓有成效", "三年式主題學習", "有效決策", "時間管理"]
  },
  {
    id: "book-07",
    num: "BOOK #07",
    title: "《競爭策略 (Competitive Strategy) ＆ 競爭優勢》",
    subtitle: "哈佛大學麥可・波特教授：五力分析、商品 vs. 客製品差異化戰略",
    author: "麥可・波特 (Michael Porter)",
    publisher: "規劃收錄教材｜S1 商業模式與競爭戰略",
    domain: "S1",
    domainName: "S1｜商業模式與競爭戰略",
    status: "planned",
    statusLabel: "⏳ 規劃收錄教材",
    icon: "♟️",
    gradient: "linear-gradient(135deg, #475569, #64748B)",
    quote: "「只要兩家公司製作相似的東西，就是商品（Commodity），價格由市場與對手決定；唯有差異化與客製品才能創造超額定價權。」",
    highlights: [
      "直接呼應本專刊第 01、07 篇：張忠謀延攬麥可・波特出任台積電獨立董事，並引用波特對『商品 vs. 客製品』的定義",
      "三大一般性策略：成本領導（學習曲線降價讓對手絕望）、差異化、集中化策略"
    ],
    tags: ["麥可波特", "競爭策略", "五力分析", "商品與客製品", "台積電獨立董事"]
  },
  {
    id: "book-08",
    num: "BOOK #08",
    title: "《贏 (Winning)：傑克・威爾許的經營法則》",
    subtitle: "奇異 (GE) 傳奇執行長：數一數二戰略、學習曲線與坦誠文化",
    author: "傑克・威爾許 (Jack Welch)",
    publisher: "規劃收錄教材｜S1 商業模式與競爭戰略",
    domain: "S1",
    domainName: "S1｜商業模式與競爭戰略",
    status: "planned",
    statusLabel: "⏳ 規劃收錄教材",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #475569, #64748B)",
    quote: "「如果底下的事業單位不能在 5 年內取得業界前一大或前二大（No.1 or No.2），乾脆整頓、出售或關閉事業！」",
    highlights: [
      "直接呼應本專刊第 01 篇（第 7 頁）：張忠謀於演講中引用威爾許信奉『學習曲線』與『5 年內前兩大否則停止事業』的戰略鐵律",
      "CEO 如何配置資本、考核事業部總經理與建立無邊界組織"
    ],
    tags: ["傑克威爾許", "數一數二原則", "學習曲線", "事業部考核", "資本配置"]
  },
  {
    id: "book-09",
    num: "BOOK #09",
    title: "《高產出管理 (High Output Management) ＆ 唯偏執狂得以倖存》",
    subtitle: "英特爾傳奇 CEO 安迪・葛洛夫：10 倍速變化點 (Strategic Inflection Point) 與管理槓桿",
    author: "安迪・葛洛夫 (Andrew S. Grove)",
    publisher: "規劃收錄教材｜S2 總經理養成與領導心法",
    domain: "S2",
    domainName: "S2｜總經理養成與領導心法",
    status: "planned",
    statusLabel: "⏳ 規劃收錄教材",
    icon: "🔬",
    gradient: "linear-gradient(135deg, #475569, #64748B)",
    quote: "「經理人的產出＝他直接管轄部門的產出＋他所影響周邊組織的產出。面對 10 倍速戰略轉折點，唯有跨越死亡之谷才能重生。」",
    highlights: [
      "半導體業雙巨頭對照：葛洛夫帶領 Intel 放棄記憶體轉進微處理器 vs. 張忠謀開創純晶圓代工商業模式",
      "OKR 目標管理源頭、一對一會議與高槓桿率活動設計"
    ],
    tags: ["安迪葛洛夫", "高產出管理", "戰略轉折點", "管理槓桿", "半導體經營"]
  },
  {
    id: "book-10",
    num: "BOOK #10",
    title: "《定價思考術：揭開隱藏在價格背後的獲利關鍵 (Confessions of the Pricing Man)》",
    subtitle: "全球定價權威赫曼・西蒙：價值定價法與 B2B 客製品議價實戰",
    author: "赫曼・西蒙 (Hermann Simon)",
    publisher: "規劃收錄教材｜S3 業務行銷與價值訂價",
    domain: "S3",
    domainName: "S3｜業務行銷與價值訂價",
    status: "planned",
    statusLabel: "⏳ 規劃收錄教材",
    icon: "💎",
    gradient: "linear-gradient(135deg, #475569, #64748B)",
    quote: "「執行長的訂價能力，可抵 1,000 個工程師！高價格只是高價值（High Value）的結果，真正有意義的價格是客戶願意承擔並買單的價值。」",
    highlights: [
      "直接呼應本專刊第 01、02、04 篇：張忠謀『直到退休前最感興趣的題目就是訂價（Pricing）』",
      "如何評估成本、客戶需求急迫度與客戶可承擔金額（如 IBM 案例），擺脫標準品殺價紅海"
    ],
    tags: ["價值定價", "訂價能力", "高價值產品", "客製化定價", "利潤槓桿"]
  },
  {
    id: "book-11",
    num: "BOOK #11",
    title: "《從 A 到 A+ (Good to Great) ＆ 基業長青》",
    subtitle: "第五級領導人（謙遜＋專業意志）、先找對人上車再決定方向",
    author: "吉姆・柯林斯 (Jim Collins)",
    publisher: "規劃收錄教材｜S2 總經理養成與領導心法",
    domain: "S2",
    domainName: "S2｜總經理養成與領導心法",
    status: "planned",
    statusLabel: "⏳ 規劃收錄教材",
    icon: "🏛️",
    gradient: "linear-gradient(135deg, #475569, #64748B)",
    quote: "「第五級領導人融合了極度的個人謙遜（Modesty）與強烈的專業意志（Professional Will）。新官上任先凝聚對的團隊、搞懂現況，再制定飛輪策略。」",
    highlights: [
      "直接呼應張忠謀兩大核心觀點：1. 美國 36 年學到最重要的『謙虛 (Modesty)』；2. 新上任總經理『先別談策略，先凝聚團隊並了解體制』",
      "刺蝟原則三圓交集、飛輪效應與紀律文化"
    ],
    tags: ["從A到A+", "第五級領導", "謙虛與意志", "刺蝟原則", "飛輪效應"]
  },
  {
    id: "book-12",
    num: "BOOK #12",
    title: "《局外人 CEO (The Outsiders)：八位非典型執行長的資本配置之道》",
    subtitle: "巴菲特盛讚必讀：CEO 最核心的工作是資本配置與長期股東權益報酬率 (ROE)",
    author: "威廉・索恩ダイ克 (William N. Thorndike)",
    publisher: "規劃收錄教材｜S4 公司治理與資本配置",
    domain: "S4",
    domainName: "S4｜公司治理與資本配置",
    status: "planned",
    statusLabel: "⏳ 規劃收錄教材",
    icon: "📈",
    gradient: "linear-gradient(135deg, #475569, #64748B)",
    quote: "「台積電最重要的事是資本投資（每年 3,000 多億元）！策略的終極財務檢驗是創造長期超過 20% 的 ROE（股東權益報酬率）。」",
    highlights: [
      "直接呼應本專刊第 01 篇（20歲從 50 股 IBM 學本益比 P/E、股價淨值比 P/B，1998 策略目標 >20% ROE）與第 03 篇（每年 3,000 億資本支出與董事會治理）",
      "解析世界級 CEO 如何運用五種資本配置工具創造超越標普 20 倍的長期回報"
    ],
    tags: ["資本配置", "ROE股東權益報酬率", "本益比PE", "股價淨值比PB", "董事會治理"]
  }
];

/* 未來 36 本執行長專業參考簡報教材課程地圖（供學員預覽完整 CEO 知識體系） */
window.CURRICULUM_ROADMAP_36 = [
  { code: "#01", domain: "S1 商業模式與戰略", title: "《張忠謀談策略與領導：台積電 30 年經營戰略》", author: "張忠謀（數位時代・經理人專刊）", status: "🔥 已上線簡報 (16頁)" },
  { code: "#02", domain: "S4 公司治理與資本", title: "《CEO 時間管理與 5–10 倍槓桿配置哲學》", author: "HBR / 大亞沈尚弘", status: "📘 已建檔知識庫" },
  { code: "#03", domain: "S2 總經理領導心法", title: "《破框能力：突破專業陷阱，像領導者一樣行動》", author: "Herminia Ibarra", status: "📘 已建檔知識庫" },
  { code: "#04", domain: "S2 總經理領導心法", title: "《高績效教練（原書第5版）》", author: "Sir John Whitmore", status: "🔥 姊妹館已上線 (18頁)" },
  { code: "#05", domain: "S1 商業模式與戰略", title: "《張忠謀自傳（上・下冊）》", author: "張忠謀", status: "⏳ 規劃收錄" },
  { code: "#06", domain: "S6 終身學習與迭代", title: "《卓有成效的管理者 (The Effective Executive)》", author: "Peter Drucker", status: "⏳ 規劃收錄" },
  { code: "#07", domain: "S1 商業模式與戰略", title: "《競爭策略 (Competitive Strategy) ＆ 競爭優勢》", author: "Michael Porter", status: "⏳ 規劃收錄" },
  { code: "#08", domain: "S1 商業模式與戰略", title: "《贏 (Winning)：奇異數一數二與學習曲線戰略》", author: "Jack Welch", status: "⏳ 規劃收錄" },
  { code: "#09", domain: "S2 總經理領導心法", title: "《高產出管理 ＆ 唯偏執狂得以倖存》", author: "Andrew Grove", status: "⏳ 規劃收錄" },
  { code: "#10", domain: "S3 業務行銷與訂價", title: "《定價思考術 (Confessions of the Pricing Man)》", author: "Hermann Simon", status: "⏳ 規劃收錄" },
  { code: "#11", domain: "S2 總經理領導心法", title: "《從 A 到 A+ (Good to Great) ＆ 基業長青》", author: "Jim Collins", status: "⏳ 規劃收錄" },
  { code: "#12", domain: "S4 公司治理與資本", title: "《局外人 CEO (The Outsiders)：卓越資本配置》", author: "William Thorndike", status: "⏳ 規劃收錄" },
  { code: "#13", domain: "S1 商業模式與戰略", title: "《創新的兩難 (The Innovator's Dilemma)》", author: "Clayton Christensen", status: "⏳ 規劃收錄" },
  { code: "#14", domain: "S1 商業模式與戰略", title: "《好策略・壞策略 (Good Strategy Bad Strategy)》", author: "Richard Rumelt", status: "⏳ 規劃收錄" },
  { code: "#15", domain: "S1 商業模式與戰略", title: "《藍海策略 (Blue Ocean Strategy)：開創無人競爭市場》", author: "W. Chan Kim", status: "⏳ 規劃收錄" },
  { code: "#16", domain: "S1 商業模式與戰略", title: "《獲利世代：商業模式設計 (Business Model Generation)》", author: "Alexander Osterwalder", status: "⏳ 規劃收錄" },
  { code: "#17", domain: "S1 商業模式與戰略", title: "《從 0 到 1 (Zero to One)：壟斷與秘密》", author: "Peter Thiel", status: "⏳ 規劃收錄" },
  { code: "#18", domain: "S2 總經理領導心法", title: "《創業維艱 (The Hard Thing About Hard Things)》", author: "Ben Horowitz", status: "⏳ 規劃收錄" },
  { code: "#19", domain: "S2 總經理領導心法", title: "《領導梯隊：事業部總經理與集團高管轉型》", author: "Ram Charan", status: "⏳ 規劃收錄" },
  { code: "#20", domain: "S2 總經理領導心法", title: "《成功渡過前 90 天 (The First 90 Days)》", author: "Michael Watkins", status: "⏳ 規劃收錄" },
  { code: "#21", domain: "S3 業務行銷與訂價", title: "《將心注入 (Pour Your Heart Into It)：星巴克體驗經濟》", author: "Howard Schultz", status: "⏳ 規劃收錄" },
  { code: "#22", domain: "S3 業務行銷與訂價", title: "《MEDDIC 世界一流 B2B 顧問式銷售技術》", author: "范永銀 / Jack Napoli", status: "🔥 跨館已上線 (A2.6.3.2)" },
  { code: "#23", domain: "S3 業務行銷與訂價", title: "《跨越鴻溝 (Crossing the Chasm)：高科技行銷聖經》", author: "Geoffrey Moore", status: "⏳ 規劃收錄" },
  { code: "#24", domain: "S3 業務行銷與訂價", title: "《精準定價 (Monetizing Innovation)》", author: "Madhavan Ramanujam", status: "⏳ 規劃收錄" },
  { code: "#25", domain: "S4 公司治理與資本", title: "《原則：生活與工作 (Principles)》", author: "Ray Dalio", status: "⏳ 規劃收錄" },
  { code: "#26", domain: "S4 公司治理與資本", title: "《巴菲特寫給股東的信：企業治理與內在價值》", author: "Warren Buffett", status: "⏳ 規劃收錄" },
  { code: "#27", domain: "S4 公司治理與資本", title: "《執行力 (Execution)：沒有執行力就沒有競爭力》", author: "Larry Bossidy & Ram Charan", status: "⏳ 規劃收錄" },
  { code: "#28", domain: "S4 公司治理與資本", title: "《稻盛和夫：經營為什麼需要哲學 ＆ 阿米巴經營》", author: "稻盛和夫", status: "⏳ 規劃收錄" },
  { code: "#29", domain: "S5 國際視野與人才", title: "《不規則與零規則 (No Rules Rules)：Netflix 人才密度》", author: "Reed Hastings", status: "⏳ 規劃收錄" },
  { code: "#30", domain: "S5 國際視野與人才", title: "《重新定義公司 (How Google Works)》", author: "Eric Schmidt", status: "⏳ 規劃收錄" },
  { code: "#31", domain: "S5 國際視野與人才", title: "《晶片戰爭 (Chip War)：全球半導體地緣戰略》", author: "Chris Miller", status: "⏳ 規劃收錄" },
  { code: "#32", domain: "S5 國際視野與人才", title: "《聯盟 (The Alliance)：新時代人才流動與任期制》", author: "Reid Hoffman", status: "⏳ 規劃收錄" },
  { code: "#33", domain: "S6 終身學習與迭代", title: "《刷新未來 (Hit Refresh)：微軟文化重塑與同理心》", author: "Satya Nadella", status: "⏳ 規劃收錄" },
  { code: "#34", domain: "S6 終身學習與迭代", title: "《一生之重 (The Ride of a Lifetime)：迪士尼 CEO 十五年功課》", author: "Robert Iger", status: "⏳ 規劃收錄" },
  { code: "#35", domain: "S6 終身學習與迭代", title: "《快思慢想 ＆ 雜訊：高階決策偏誤防範》", author: "Daniel Kahneman", status: "⏳ 規劃收錄" },
  { code: "#36", domain: "S6 終身學習與迭代", title: "《窮查理的普通常識：多元思維模型》", author: "Charlie Munger", status: "⏳ 規劃收錄" }
];

/* 全域深度關鍵字索引：涵蓋張忠謀專刊 7 大篇章、16 頁簡報、核心概念、案例、QA 與跨館知識庫 */
window.GLOBAL_SEARCH_INDEX = [
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "全書總覽＆生涯軸",
    title: "Slide 01–02｜60 年總經理學習長河：從 50 股 IBM 股票到 5 萬人台積電帝國",
    snippet: "20歲在 MIT 獲父親贈 50 股 IBM 股票（每股約100美元），學會看財報、P/E（本益比）、P/B（股價淨值比），幽默反駁王建煊「手上有股票、心中無股價」。24歲入 Sylvania，27歲成德州儀器（TI）首位華裔員工並公費讀史丹佛博士（2.5年畢業），33-52歲掌管 TI 事業部（3,000人擴至4萬人），54歲創台積電（120人擴至5萬人）。",
    keywords: "張忠謀 50股 IBM 股票 MIT 麻省理工 財務報告 本益比 PE 股價淨值比 PB 王建煊 Sylvania 德州儀器 TI 史丹佛博士 3000人 4萬人 5萬人 玉山科技協會 清大演講",
    url: "book-morris-chang-strategy-leadership.html#slide-career-timeline",
    portalAnchor: "#book01-summary-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "經營金字塔架構",
    title: "Slide 03｜張忠謀經營金字塔：商業模式 ＞ 策略 ＞ 六大經營基本功",
    snippet: "張忠謀將 60 年功力分層：底層是六大基本功（技術、簡報、商品vs客製品、行銷與訂價、傾聽、團隊與領導）；往上一層是「策略（一舉讓對手絕望、3W原則）」；最高層是「商業模式（從客戶是誰定義，必須是創始人 Founder 才有辦法創造或從舊模式創新）」。",
    keywords: "經營金字塔 商業模式 策略 基本功 創始人 Founder 層級 架構",
    url: "book-morris-chang-strategy-leadership.html#slide-pyramid",
    portalAnchor: "#book01-summary-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "基本功 1：技術與簡報",
    title: "Slide 04｜科技事業 CEO 要持續鑽研技術 ＆「述你所知」的有說服力簡報",
    snippet: "科技事業中 CEO 最好技術出身並持續鑽研技術。以 Intel 執行長基辛格（Pat Gelsinger，2015年在 VMware 時用 15 分鐘向張忠謀解釋清楚 VMware 是什麼）為例。簡報有說服力的訣竅：你自己要相信你在簡報什麼！牢記老闆建議：Talk about something you know / It's important to talk about what you know（述你所知，連張淑芬演講也用這招）。",
    keywords: "技術 科技事業 英特爾 Intel 基辛格 Pat Gelsinger VMware 15分鐘 簡報 說服力 Talk about something you know 述你所知 張淑芬 太太",
    url: "book-morris-chang-strategy-leadership.html#slide-tech-presentation",
    portalAnchor: "#book01-insights-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "基本功 2：商品與客製品",
    title: "Slide 05｜商品 vs. 客製品：一個競爭者就夠難應付，不如做只有你一家的生意",
    snippet: "引用哈佛教授麥可・波特（Michael Porter）：只要兩家公司製作相似的東西，就是「商品（標準型產品）」，價格由市場與對手決定，定價自由極少。但「客製品」只有你一家，必須常常看消費者與客戶，擁有相當棒的定價自由。",
    keywords: "商品 客製品 標準型產品 客製化產品 麥可波特 Michael Porter 競爭者 定價自由 消費者",
    url: "book-morris-chang-strategy-leadership.html#slide-commodity-custom",
    portalAnchor: "#book01-insights-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "基本功 3：行銷與訂價",
    title: "Slide 06｜行銷是最高任務（First Priority）＆ CEO 訂價能力可抵 1000 個工程師",
    snippet: "台灣科技公司常輕視業務行銷，誤以為「只要產品技術好，客人就會自己來」，但沒有業務就沒生意、根本活不了！張忠謀一當主管就把 Sales & Marketing 當最高任務，1964 年首創「百萬美元業績獎勵 10 美元綠郵票（當時三口之家一週伙食費約50美元）」，跑遍美國 48 州拜訪客戶。CEO 薪水是普通工程師 50 倍、作業員 400 倍；訂價看成本、客戶需求程度、客戶可承擔數字（如 IBM 出得起價錢），高價格是高價值（High Value）與高品質（Quality）的結果，連魏哲家（CC）都知道張忠謀直到退休最感興趣的就是訂價！",
    keywords: "行銷 業務 Sales Marketing 最高任務 First Priority 訂價 定價 Pricing 1000個工程師 50倍 400倍 綠郵票 100萬美元 48個州 IBM 高價格 高價值 High Value 品質 Quality 魏哲家 CC",
    url: "book-morris-chang-strategy-leadership.html#slide-marketing-pricing",
    portalAnchor: "#book01-insights-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "基本功 4：深度傾聽",
    title: "Slide 07｜傾聽：專注「看」對方講話、別做筆記，讀懂動機與肢體語言",
    snippet: "張忠謀開會從來不寫筆記（除非怕會後忘記要做什麼事，才頂多寫兩個字）。因為不寫筆記、真正專注「看」那個人講話，才有時間去想：他為什麼用這幾個字？為什麼講這個話？他的動機是什麼？他想要我做什麼？同時觀察對方肢體語言透露的訊息。",
    keywords: "傾聽 聆聽 不做筆記 不寫筆記 兩個字 肢體語言 動機 為什麼用這幾個字 熱情",
    url: "book-morris-chang-strategy-leadership.html#slide-listening",
    portalAnchor: "#book01-insights-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "基本功 5：團隊與領導",
    title: "Slide 08｜團隊與領導：老班底只會局限你！嚴格但公平無私，掌握方向贏得追隨",
    snippet: "張忠謀在 TI 換事業部只帶祕書、回台灣創台積電也沒帶任何舊部（婉拒想跟隨的 TI 華裔同事）。因為有班底帶來帶去都是小圈子，要包容、再建一個大圈子！對同仁可以嚴格，但一定要公平、不用私人、不能有私心。領導人的兩大定義：1. 有人願意跟隨你（凝聚團隊）；2. 你要知道往哪個方向走（若方向不成功，原本追隨的人也不會永遠跟隨）。1964 年初掌 TI 3,000 人部門（2,500 名德州作業員恐慌華人當總經理），以流利帶文學氣質的英文展現「對研發工程自信＋對行銷財務謙虛」穩定軍心。",
    keywords: "團隊 領導 老班底 小圈子 包容 祕書 公平 私心 私人 嚴格 方向 跟隨 1964年 德州人 恐慌 文學氣質英文 謙虛與自信 2500人作業員",
    url: "book-morris-chang-strategy-leadership.html#slide-leadership-team",
    portalAnchor: "#book01-insights-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "策略鐵律 1：競爭戰略",
    title: "Slide 09｜策略：一舉就要讓對手絕望！1974 年 TI 持續降價 TTL 與學習曲線",
    snippet: "策略比基本功更高一層。1974 年報紙標題「TI continue cutting prices on TTL: Chang」（張忠謀帶領下德州儀器持續降低電晶體邏輯價格）。半導體業通常要 50% 以上毛利做 RD，為何降價？因為運用「學習曲線」擴大市占讓對手絕望！奇異（GE）前執行長傑克・威爾許（Jack Welch）也信奉學習曲線：若事業單位 5 年內不能取得業界前一大或前二大，乾脆停止事業。",
    keywords: "策略 一舉就要讓對手絕望 1974年 TTL 電晶體邏輯 降價 50%毛利 RD 研發 學習曲線 奇異 GE 傑克威爾許 Jack Welch 前一大前二大",
    url: "book-morris-chang-strategy-leadership.html#slide-strategy-despair",
    portalAnchor: "#book01-summary-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "策略鐵律 2：3W 原則",
    title: "Slide 10｜新官上任先別談策略！掌握 3W 原則（Who・What・When）就能回家睡午覺",
    snippet: "新上任總經理千萬別急著談策略，必須先凝聚團隊、了解整個公司與體制後再談策略。好策略依循 3W 原則：第一個 Who（找出主要負責的人）、第二個 What（清楚做什麼事）、第三個 When（訂下目標達成時間）——「公司的事情通通把這三個 W 訂好，就可以回家睡午覺了！」CEO 最大責任是把外面的世界搬到公司裡面來，做公司內外最重要的連結。",
    keywords: "3W原則 Who What When 回家睡午覺 新上任總經理 先別談策略 外面的世界 內外連結 三三會",
    url: "book-morris-chang-strategy-leadership.html#slide-strategy-3w",
    portalAnchor: "#book01-insights-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "商業模式革命",
    title: "Slide 11｜商業模式：從「客戶是誰」定義，而非「產品是什麼」（星巴克、Google、台積電）",
    snippet: "台積電最重要的革新是商業模式：不以產品為定，而是以「客戶是誰」為定！若是一般半導體公司，客戶是電腦公司；但台積電是「半導體製造服務（專業晶圓代工）」，客戶是別的半導體公司，當時沒有競爭者但也沒有市場，挑戰是「創造市場」。張忠謀在 90 年代最崇拜星巴克（把 3-4 毛錢咖啡賣到 2.5 美元，客戶不是隨便喝咖啡的人，而是懂得享受生活的人）；而 Google、臉書的用戶不是客戶而是工具，廣告主才是客戶。",
    keywords: "商業模式 客戶是誰 產品是什麼 半導體製造服務 專業晶圓代工 創造市場 如入無人之境 星巴克 2.5美元 享受生活 Google 臉書 廣告",
    url: "book-morris-chang-strategy-leadership.html#slide-business-model",
    portalAnchor: "#book01-memo-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "鎮館機密：1998手稿",
    title: "Slide 12｜解密張忠謀藏 20 年唯一手寫機密策略手稿：First & Last Look 與 >20% ROE",
    snippet: "1998 年張忠謀在台積電唯一手寫策略投影片（曾列公司治理機密）：策略第一是「滿足客戶需求（Satisfying Customer Needs）」，涵蓋：(1) 提供客戶超越或匹敵對手的技術與設計、(2) 靈活回應需求 (Flexibility)、(3) 低價 (Low price)、(4) 縮短量產時程 (Short cycle time from tapeout to finished wafers)、(5) 品質可靠 (Quality & reliability)、(6) 設計服務與一站式 Turn-key 服務、(7) 無縫溝通。除了低價外其他領域都要超越對手，取得「優先及最終採購洽談權（First and Last Look）」，建立全員銷售文化（每位工程師、會計師也是 Sales person）。目標：>20% ROE、世界最大晶圓代工廠、2010 年營收 100 億美元（實際達成 130 億美元，唯一不滿意的是我老婆）！",
    keywords: "1998年 手稿 手寫策略 機密 滿足客戶需求 Satisfying Customer Needs 縮短量產時程 Tapeout 品質可靠 無縫溝通 一站式 Turn-key First and Last Look 優先及最終採購洽談權 銷售員 Sales person 20% ROE 股東權益報酬率 100億美元 130億美元 老婆",
    url: "book-morris-chang-strategy-leadership.html#slide-handwritten-1998",
    portalAnchor: "#book01-memo-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "創新與雙首長治理",
    title: "Slide 13｜創新上訴機制（獎賞賺錢創新、不罰虧本創新）＆ 台積電雙首長平行領導制",
    snippet: "南開中學校訓「日新月異」就是創新，創新不能只有 IDEA，要實際執行。台積電獎賞成功賺錢的創新，但不懲罰虧本的創新；員工創新想法若被層層回絕，最高可申訴（上訴）到張忠謀這邊准許！建言行政院長林全：「創新、就業、分配」口號缺少「成長」，因為鼓勵創新須給高獎勵，與分配有衝突，有成長才能解決就業。退休交棒採「雙首長制」：台灣把 CEO 翻成執行長是誤解（執行只是一半，還要管策略）；董事長（劉德音）對外代表公司、在董事會為每年 3,000 多億資本投資（每次提 700-800 億）護航；總裁（魏哲家）面對客戶供應商拿生意、擬定每年 3,000 億投資計畫，兩人合作如同一間辦公室。",
    keywords: "創新 日新月異 南開中學 IDEA 執行 獎賞 懲罰 申訴 上訴 林全 創新就業分配 成長 雙首長制 平行領導 劉德音 魏哲家 董事長 總裁 Co-CEO 資本投資 3000億 700億 800億 董事會 護航",
    url: "book-morris-chang-strategy-leadership.html#slide-innovation-governance",
    portalAnchor: "#book01-summary-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "國際觀與人才循環",
    title: "Slide 14｜別再把「讀台大」視為 18 歲人生巔峰！世界觀、謙虛（Modesty）與人才循環",
    snippet: "TCA 人才循環大聯盟高峰會與美國 ATD 演講：台灣很多人考上台大就以為 18 歲達到人生巔峰，50-60 歲還在講「我在台大的時候」；但在美國從沒聽過 50-60 歲的人把哈佛、耶魯、MIT 掛嘴邊，這就是謙虛（Modesty）！張忠謀回台灣接工研院院長與創台積電，帶回來的不是技術（老早不搞技術了），而是「世界觀」與「謙虛」。企業訓練人才最好的方法是「以人才循環訓練人才（Training by Circulation）」：台積電前 3 任總經理皆為美國人（回美後分別當創投、創辦公司、做專業經理人），20 幾位副總以上至少一半是「台灣大學教育 ➔ 美國留學工作 ➔ 回台積電從基層工程師、經理一步步升上副總」。財務、會計、人資較易循環，技術人員因跟實驗室較難循環。",
    keywords: "讀台大 人生巔峰 18歲 哈佛 耶魯 MIT 美國36年 世界觀 國際觀 謙虛 Modesty 工研院院長 智慧財產 人才循環 Training by Circulation 美國總經理 副總 財務會計 實驗室 TCA ATD",
    url: "book-morris-chang-strategy-leadership.html#slide-global-talent",
    portalAnchor: "#book01-insights-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "領袖終身學習",
    title: "Slide 15｜張忠謀 3 個學習祕訣：跟上產業目標、每天讀 2–4 小時有紀律內化、結交大師",
    snippet: "對標杜拉克 60 歲後完成 3/4 著作（39本）的「三年式主題學習」，張忠謀引領台積電走在尖端的 3 大學習祕訣：1. 有目標：一定要跟上所屬行業發展（研究所剛畢業時沒聽過電晶體 Transistor，不與時俱進 10-15 年內必失業）；2. 有紀律：學習不是消遣而是嚴肅的事，每天花 2-4 小時閱讀，讀客戶資訊一定記筆記並每兩周/每月溫習，讀一般書則主題式專注研讀（如康熙皇朝、全球經濟情勢）；3. 有計畫：先打好專業知識與獨立思考基礎，再結交專業人士（唯一與諾貝爾經濟學家克魯曼 Paul Krugman 對談的台灣經營者、邀麥可・波特任台積電獨董）。",
    keywords: "學習祕訣 終身學習 彼得杜拉克 三年式主題學習 電晶體 Transistor 失業危機 每天2到4小時 閱讀 客戶筆記 溫習 康熙皇朝 全球經濟 獨立思考 克魯曼 Paul Krugman 麥可波特 獨立董事",
    url: "book-morris-chang-strategy-leadership.html#slide-learning-secrets",
    portalAnchor: "#book01-insights-section"
  },
  {
    book: "Book #01《張忠謀談策略與領導》",
    category: "清大演講 4 大 QA",
    title: "Slide 16｜清大演講會後 4 大 QA 完整實錄：業務升總經理、跨領域斜槓(90% vs 10%)、台灣 MBA 差距",
    snippet: "Q1 業務行銷出身升總經理要學什麼？答：要學技術，不必做技術專家，但至少要懂得跟隨技術方向（CEO 出身無定論，如 Intel 也有財務出身 CEO，但最難的其實是技術）。Q2 跨領域斜槓學習是否重要？答：90% 大學生應念廣一點跨領域學習，但約 5%~10% 想終身投入特別領域的人還是不要太廣。Q3 如何穩定或提高價格？答：我要的是高價值（High Value），高價格只是結果（如張淑芬的畫），取決於客戶能出多少與承擔多少。Q4 台灣與美國 MBA 最大差距原因？答：台灣理工教育（台大、清大電機）與 MIT 差距不大，但台灣沒有太多世界級企業，不太需要世界級商學院，兩者互相將程度往下拉（從演講提問深度即可看出差距）。",
    keywords: "會後QA Q1 Q2 Q3 Q4 業務出身 總經理 跨領域學習 斜槓 90% 5% 10% 高價值 畫 台灣MBA 美國MBA 商學院 清大 台大電機 世界級企業 提問深度",
    url: "book-morris-chang-strategy-leadership.html#slide-qa-action",
    portalAnchor: "#book01-qa-section"
  },
  {
    book: "Book #02《CEO 時間與槓桿管理》",
    category: "跨館知識庫連動",
    title: "CEO 時間分配哲學：非我不可 ＋ 5–10 倍槓桿準則（HBR ＆ 大亞沈尚弘）",
    snippet: "HBR 27位執行長調查與大亞董座沈尚弘實戰：巴菲特空白行事曆 vs 多西主題工作日。CEO 參與會議與專案的篩子：「非我來做不可」且「我來做有 5–10 倍槓桿效果」，花半年凝聚一級主管轉型共識，每日 2-3 小時閱讀。",
    keywords: "CEO時間管理 沈尚弘 大亞 5-10倍槓桿 非我不可 主題工作日 巴菲特 傑克多西 戴蒙 盧英德 留白",
    url: "#library-section",
    portalAnchor: "#library-section"
  },
  {
    book: "Book #03《破框能力／能力陷阱》",
    category: "跨館知識庫連動",
    title: "由外而內（Outsight）突破能力陷阱、橋梁型領導者與 BCDs 人脈",
    snippet: "伊貝拉研究：79%管理者同意把你帶到現在位置的能力無法帶你去下一階段。先行動後思考（弄假直到成真），從內部軸心轉向連結內外部的「橋梁型領導者」，與張忠謀「把外面的世界搬進公司」完全一致。",
    keywords: "破框能力 能力陷阱 伊貝拉 Outsight 先行動後思考 橋梁型領導者 BCDs 真實性陷阱",
    url: "#library-section",
    portalAnchor: "#library-section"
  }
];
