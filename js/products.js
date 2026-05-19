// Nintendo Merchandise Store - Product Database and Shared Scripts

const products = [
  {
    id: "mario-hoodie",
    name: "超級瑪利歐 刺繡連帽衛衣",
    engName: "Super Mario Embroidered Hoodie",
    category: "clothing",
    price: 1890,
    image: "images/clothing_mario_hoodie.svg",
    description: "採用高品質純棉面料，胸口精緻的瑪利歐經典刺繡，搭配紅白拼接抽繩，保暖舒適且具時尚感。不論是日常穿搭還是遊戲聚會都非常適合。",
    specs: ["材質: 100% 純棉", "版型: 寬鬆休閒 (男女通用)", "產地: 台灣設計製造", "洗滌說明: 建議反面放入洗衣袋冷水慢速洗滌，勿烘乾"],
    rating: 4.9,
    reviews: 124
  },
  {
    id: "zelda-tshirt",
    name: "薩爾達傳說 三角神力 印花T-Shirt",
    engName: "The Legend of Zelda Triforce T-Shirt",
    category: "clothing",
    price: 790,
    image: "images/clothing_zelda_tshirt.svg",
    description: "以海拉魯皇家紋章及金色三角神力為設計靈感，極簡黑色底色凸顯燙金質感。柔軟透氣吸汗，是薩爾達玩家必備的經典穿搭單品。",
    specs: ["材質: 80% 棉 + 20% 聚酯纖維", "顏色: 經典黑 / 金色印花", "尺碼: S - XXL", "洗滌說明: 勿烘乾，建議低溫反面熨燙"],
    rating: 4.8,
    reviews: 98
  },
  {
    id: "pikachu-cap",
    name: "皮卡丘 刺繡亮黃棒球帽",
    engName: "Pikachu Yellow Baseball Cap",
    category: "clothing",
    price: 650,
    image: "images/clothing_pikachu_cap.svg",
    description: "亮黃色棒球帽，正面繡有超可愛的皮卡丘側臉，背面點綴皮卡丘尾巴刺繡。可調整式帽圍設計，適合各種頭型，為您的日常穿搭增添亮點。",
    specs: ["材質: 100% 舒適斜紋棉布", "帽圍: 54-60cm (可調節式金屬扣)", "特點: 細緻刺繡工藝，透氣孔設計"],
    rating: 4.7,
    reviews: 85
  },
  {
    id: "yoshi-plush",
    name: "耀西 經典綠色毛絨玩偶 (30cm)",
    engName: "Yoshi Classic Green Plush Toy",
    category: "plushies",
    price: 890,
    image: "images/plush_yoshi.svg",
    description: "瑪利歐系列中最受歡迎的夥伴「耀西」，以極致柔軟的超細纖維毛絨製成，抱起來非常舒適。精緻的做工完美還原遊戲中的可愛神態，手感紮實。",
    specs: ["尺寸: 高度約 30cm", "材質: 聚酯纖維、超細短毛絨、高彈力PP棉", "適合年齡: 3歲以上"],
    rating: 4.9,
    reviews: 156
  },
  {
    id: "kirby-plush",
    name: "星之卡比 圓滾滾粉紅毛絨玩偶 (25cm)",
    engName: "Kirby Round Pink Plush Toy",
    category: "plushies",
    price: 750,
    image: "images/plush_kirby.svg",
    description: "擁有超高人氣的星之卡比！粉紅圓滾滾的Q彈身體，手感極佳，抱著它就感到被治癒。精緻電繡五官，擺在床上或沙發都超級可愛。",
    specs: ["尺寸: 直徑約 25cm", "材質: 彈力超柔面料、無毒羽絨棉填充", "安全認證: 通過玩具安全檢驗，無刺激味"],
    rating: 5.0,
    reviews: 210
  },
  {
    id: "pikachu-plush",
    name: "寶可夢 皮卡丘 經典表情抱偶 (35cm)",
    engName: "Pokemon Pikachu Soft Hugging Plush",
    category: "plushies",
    price: 990,
    image: "images/plush_pikachu.svg",
    description: "正版授權皮卡丘玩偶，標誌性的紅臉頰與閃電尾巴，使用親膚短毛絨材質，飽滿填充不易變形。無論是自己收藏還是送禮都是第一選擇！",
    specs: ["尺寸: 高度約 35cm (含耳朵)", "材質: 高彈力PP棉、短毛絨", "洗滌方式: 建議表面濕擦乾淨後自然陰乾"],
    rating: 4.8,
    reviews: 142
  },
  {
    id: "pokeball-keychain",
    name: "精靈球 精緻金屬鑰匙圈吊飾",
    engName: "Poke Ball Premium Metal Keychain",
    category: "keychains",
    price: 350,
    image: "images/keychain_pokeball.svg",
    description: "高質感立體半實心精靈球金屬吊飾，烤漆均勻，拿在手上份量感十足。配有防鏽金屬扣與鑰匙圈，可扣於鑰匙、背包或車鑰匙上，低調展現訓練師身份。",
    specs: ["材質: 高強度鋅合金、防鏽琺瑯烤漆", "尺寸: 精靈球直徑約 3cm，全長約 8.5cm", "重量: 約 45g"],
    rating: 4.7,
    reviews: 64
  },
  {
    id: "triforce-keychain",
    name: "薩爾達傳說 金色三角神力吊飾",
    engName: "The Legend of Zelda Gold Triforce Keychain",
    category: "keychains",
    price: 390,
    image: "images/keychain_triforce.svg",
    description: "經典黃金三角神力浮雕金屬鑰匙圈，邊緣光滑、拉絲工藝精湛。象徵勇氣、智慧與力量的符號，給喜愛海拉魯冒險的你無限能量。",
    specs: ["材質: 黃銅合金、18K金色電鍍", "尺寸: 三角形邊長約 4cm，總長約 9.5cm", "特色: 耐刮防氧化處理"],
    rating: 4.9,
    reviews: 78
  },
  {
    id: "ac-leaf-keychain",
    name: "動物森友會 經典綠葉膠感吊飾",
    engName: "Animal Crossing Leaf Rubber Charm",
    category: "keychains",
    price: 250,
    image: "images/keychain_ac_leaf.svg",
    description: "以《集合啦！動物森友會》中代表家具與物品的經典綠葉為造型。使用高品質軟膠製成，輕巧防摔，帶有清新的森系風格，極具辨識度。",
    specs: ["材質: 環保防敏 PVC 軟膠、不鏽鋼圈", "尺寸: 綠葉長度約 5cm，總長約 10.5cm", "重量: 約 15g"],
    rating: 4.6,
    reviews: 52
  },
  {
    id: "figure-link",
    name: "薩爾達傳說 曠野之息 林克 收藏模型",
    engName: "Zelda: Breath of the Wild Link Figurine",
    category: "figures",
    price: 2680,
    image: "images/figure_link.svg",
    description: "精細還原《曠野之息》中林克拉弓射擊的經典英姿！細節雕刻生動，從古代兵裝弓、希卡石到衣服褶皺，皆展現了極高的製作水準，極具收藏與陳列價值。",
    specs: ["高度: 約 20cm (含專屬希卡石雕花底座)", "材質: 高強度 PVC / ABS", "包裝: 彩色精裝櫥窗盒"],
    rating: 4.9,
    reviews: 112
  },
  {
    id: "figure-mario",
    name: "超級瑪利歐 經典姿勢 可動公仔",
    engName: "Super Mario Classic Pose Action Figure",
    category: "figures",
    price: 1480,
    image: "images/figure_mario.svg",
    description: "瑪利歐經典站姿公仔，頭部、手臂及雙腿多處關節可動，可擺出多種動作姿勢。隨附綠色水管底座與超級蘑菇、問號磚塊等可拆卸配件，重現關卡場景！",
    specs: ["高度: 約 12cm", "材質: 環保防摔 ABS/PVC", "配件: 瑪利歐本體、水管底座、超級蘑菇、問號磚塊"],
    rating: 4.8,
    reviews: 89
  },
  {
    id: "figure-samus",
    name: "銀河戰士 薩姆斯·阿蘭 金屬塗裝模型",
    engName: "Metroid Samus Aran Metallic Armor Figure",
    category: "figures",
    price: 2980,
    image: "images/figure_samus.svg",
    description: "《銀河戰士》主角薩姆斯·阿蘭身穿經典動力服（Power Suit）的模型。採用特殊金屬質感烤漆，光澤感極佳，重現高科技機甲的冰冷與強悍，細節刻線清晰。",
    specs: ["高度: 約 22cm", "材質: PVC/ABS/POM", "特點: 金屬漆感塗裝，專屬科幻感底座"],
    rating: 4.9,
    reviews: 73
  },
  {
    id: "other-switch-case",
    name: "任天堂Switch 漆彈大作戰主題 收納包",
    engName: "Nintendo Switch Splatoon Edition Case",
    category: "others",
    price: 680,
    image: "images/other_switch_case.svg",
    description: "專為任天堂Switch/Switch OLED設計的硬殼防護收納包，滿版噴漆潑墨圖案。內襯防刮防衝擊，可收納10張遊戲卡帶，防震防潑水，出門攜帶更安心。",
    specs: ["適用型號: Switch 全系列主機適用", "材質: EVA硬殼、防刮超細纖維、防水尼龍", "收納量: 主機*1、卡帶*10、充電線網袋*1"],
    rating: 4.8,
    reviews: 110
  },
  {
    id: "other-mario-light",
    name: "超級瑪利歐 問號磚塊 趣味小夜燈",
    engName: "Super Mario Question Block Night Light",
    category: "others",
    price: 850,
    image: "images/other_mario_light.svg",
    description: "敲擊即可發光或關閉的問號磚塊小夜燈！每一次敲擊還會發出經典的「叮—」獲取金幣音效，兼具實用性與滿滿的情懷，USB充電超便利。",
    specs: ["尺寸: 10cm x 10cm x 11cm", "供電方式: Micro USB 充電 / 內建可充電鋰電池", "音效: 原版金幣音效 (底部設有靜音開關)"],
    rating: 4.9,
    reviews: 165
  },
  {
    id: "other-zelda-mug",
    name: "薩爾達傳說 海拉魯之盾 立體陶瓷馬克杯",
    engName: "Zelda Hylian Shield Ceramic Mug",
    category: "others",
    price: 490,
    image: "images/other_zelda_mug.svg",
    description: "以經典的「海拉魯之盾」為杯身浮雕設計的陶瓷馬克杯。立體感十足，手工上釉，杯把舒適好握。無論盛裝溫熱飲品或做為辦公桌擺飾，都十分吸睛。",
    specs: ["容量: 400ml", "材質: 耐高溫強化陶瓷", "使用注意: 適用微波爐，不建議使用洗碗機與鋼絲刷洗"],
    rating: 4.7,
    reviews: 67
  },
  {
    id: "other-stickers",
    name: "動物森友會 裝飾防水貼紙超值組 (50張)",
    engName: "Animal Crossing Waterproof Sticker Pack (50pcs)",
    category: "others",
    price: 190,
    image: "images/other_stickers.svg",
    description: "精選 50 張不重複《動物森友會》島民與標誌的超萌防水貼紙！採用高品質 PVC 材質，防曬不褪色，撕下不留殘膠，適合貼在筆電、行李箱或Switch主機上。",
    specs: ["數量: 50張不重複", "材質: PVC防曬防水膜、無毒背膠", "單張尺寸: 約 4 - 7 cm不等"],
    rating: 4.5,
    reviews: 43
  }
];

// Initialize Cart Count from LocalStorage
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

// Dynamic Header & Footer Templates
const headerTemplate = `
  <header class="navbar-container">
    <div class="navbar-content">
      <a href="index.html" class="logo-area">
        <img src="images/logo.png" alt="Nintendo Fan Store Logo" class="brand-logo" onerror="this.src='images/clothing_mario_hoodie.svg'">
        <span class="brand-name">NINTENDO <span class="accent-red">FAN</span> STORE</span>
      </a>
      
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle Navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav-links" id="nav-links">
        <a href="index.html" id="nav-home">首頁</a>
        <a href="clothing.html" id="nav-clothing">休閒服飾</a>
        <a href="plushies.html" id="nav-plushies">玩偶專區</a>
        <a href="keychains.html" id="nav-keychains">隨身吊飾</a>
        <a href="figures.html" id="nav-figures">收藏公仔</a>
        <a href="others.html" id="nav-others">其它配件</a>
        <a href="about.html" id="nav-about">關於我們</a>
        <a href="contact.html" id="nav-contact">聯絡我們</a>
      </nav>

      <div class="nav-actions">
        <div class="cart-icon-container" id="cart-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <span class="cart-badge" id="cart-badge">${cartCount}</span>
        </div>
      </div>
    </div>
  </header>
`;

const footerTemplate = `
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-section brand-desc">
        <h3>NINTENDO <span class="accent-red">FAN</span> STORE</h3>
        <p>我們致力於為所有任天堂玩家提供最高品質、最精緻的官方授權設計周邊商品。無論是超級瑪利歐、薩爾達傳說、精靈寶可夢或動物森友會，這裡都是訓練家與勇者們的補給站。</p>
        <div class="social-icons">
          <span class="social-icon">FB</span>
          <span class="social-icon">IG</span>
          <span class="social-icon">YT</span>
        </div>
      </div>
      
      <div class="footer-section footer-links">
        <h4>快速連結</h4>
        <ul>
          <li><a href="index.html">商店首頁</a></li>
          <li><a href="about.html">關於我們</a></li>
          <li><a href="contact.html">聯絡我們</a></li>
          <li><a href="clothing.html">休閒服飾</a></li>
        </ul>
      </div>

      <div class="footer-section footer-links">
        <h4>顧客服務</h4>
        <ul>
          <li><a href="#">購物流程</a></li>
          <li><a href="#">退換貨政策</a></li>
          <li><a href="#">隱私權聲明</a></li>
          <li><a href="#">常見問題</a></li>
        </ul>
      </div>

      <div class="footer-section footer-contact">
        <h4>聯絡資訊</h4>
        <p><strong>客服電話：</strong>02-2345-6789</p>
        <p><strong>服務時間：</strong>週一至週五 09:00 - 18:00</p>
        <p><strong>電子信箱：</strong>support@nintendofanstore.com</p>
        <p><strong>概念門市：</strong>台北市信義區忠孝東路五段 100 號</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Nintendo Fan Store. 本網站僅為學術/作品集展示使用，版權所有歸任天堂官方所有。</p>
    </div>
  </footer>
`;

// Helper to update active nav link highlights
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  let activeId = '';
  
  if (currentPath === 'index.html' || currentPath === '') activeId = 'nav-home';
  else if (currentPath === 'clothing.html') activeId = 'nav-clothing';
  else if (currentPath === 'plushies.html') activeId = 'nav-plushies';
  else if (currentPath === 'keychains.html') activeId = 'nav-keychains';
  else if (currentPath === 'figures.html') activeId = 'nav-figures';
  else if (currentPath === 'others.html') activeId = 'nav-others';
  else if (currentPath === 'about.html') activeId = 'nav-about';
  else if (currentPath === 'contact.html') activeId = 'nav-contact';
  
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) el.classList.add('active');
  }
}

// Function to inject Header and Footer
function loadHeaderFooter() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerTemplate;
    
    // Setup Mobile Menu Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('show');
      });
    }
    
    // Setup Cart Button Animation / Reset
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
      cartBtn.addEventListener('click', () => {
        alert('此為展示用網站，感謝您的點擊！目前購物車內共有 ' + cartCount + ' 件商品。');
      });
    }
    
    highlightActiveNav();
  }
  
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerTemplate;
  }
}

// Render Products Grid
function renderProductGrid(containerId, category = 'all') {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  
  grid.innerHTML = '';
  
  // Filter products
  const filtered = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);
    
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-products">尚無此分類商品。</div>';
    return;
  }
  
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
        <div class="product-badge">${p.rating} ★</div>
      </div>
      <div class="product-info">
        <h3 class="product-title" title="${p.name}">${p.name}</h3>
        <p class="product-eng-title">${p.engName}</p>
        <div class="product-footer">
          <span class="product-price">NT$ ${p.price.toLocaleString()}</span>
          <a href="product.html?id=${p.id}" class="view-detail-btn">查看商品</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render Product Detail page
function renderProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  const mainContent = document.getElementById('product-detail-container');
  if (!mainContent) return;
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    mainContent.innerHTML = `
      <div class="error-container">
        <h2>未找到商品</h2>
        <p>很抱歉，您所尋找的任天堂周邊商品不存在或已下架。</p>
        <a href="index.html" class="primary-btn">返回商店首頁</a>
      </div>
    `;
    return;
  }
  
  // Populate Breadcrumb
  const breadcrumbCategory = document.getElementById('breadcrumb-category');
  const breadcrumbCurrent = document.getElementById('breadcrumb-current');
  
  const catNames = {
    'clothing': { name: '休閒服飾', url: 'clothing.html' },
    'plushies': { name: '玩偶專區', url: 'plushies.html' },
    'keychains': { name: '隨身吊飾', url: 'keychains.html' },
    'figures': { name: '收藏公仔', url: 'figures.html' },
    'others': { name: '其它配件', url: 'others.html' }
  };
  
  if (breadcrumbCategory && catNames[product.category]) {
    breadcrumbCategory.innerText = catNames[product.category].name;
    breadcrumbCategory.href = catNames[product.category].url;
  }
  if (breadcrumbCurrent) {
    breadcrumbCurrent.innerText = product.name;
  }
  
  // Populate Details
  mainContent.innerHTML = `
    <div class="product-detail-layout">
      <div class="detail-gallery">
        <div class="main-image-card">
          <img src="${product.image}" alt="${product.name}" id="main-product-img">
        </div>
      </div>
      
      <div class="detail-content">
        <span class="detail-category-tag">${catNames[product.category]?.name || '任天堂周邊'}</span>
        <h1 class="detail-title">${product.name}</h1>
        <p class="detail-eng-title">${product.engName}</p>
        
        <div class="detail-meta">
          <div class="rating-stars">
            ${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))} 
            <span class="score">${product.rating}</span>
          </div>
          <span class="divider">|</span>
          <span class="reviews-count">${product.reviews} 則玩家評論</span>
        </div>
        
        <div class="detail-price-box">
          <span class="currency">NT$</span>
          <span class="price-val">${product.price.toLocaleString()}</span>
          <span class="tax-tag">含稅 / 享免運優惠</span>
        </div>
        
        <p class="detail-desc">${product.description}</p>
        
        <div class="detail-action-section">
          <div class="qty-selector">
            <button class="qty-btn" id="qty-minus">-</button>
            <input type="number" class="qty-input" id="qty-input" value="1" min="1" max="10">
            <button class="qty-btn" id="qty-plus">+</button>
          </div>
          <button class="primary-btn add-to-cart-btn" id="add-to-cart-action">加入購物車</button>
        </div>

        <div class="specs-box">
          <h3>商品規格與細節</h3>
          <ul>
            ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Customer Reviews Section -->
    <div class="reviews-section">
      <h2 class="section-title">玩家評價 (${product.reviews})</h2>
      <div class="review-summary-card">
        <div class="avg-score-box">
          <span class="big-score">${product.rating}</span>
          <div class="stars">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}</div>
          <p>高達 98% 的玩家推薦此商品</p>
        </div>
        <div class="score-bars">
          <div class="score-bar-row"><span>5 星</span><div class="progress-bar"><div class="bar-fill" style="width: 88%"></div></div><span>88%</span></div>
          <div class="score-bar-row"><span>4 星</span><div class="progress-bar"><div class="bar-fill" style="width: 9%"></div></div><span>9%</span></div>
          <div class="score-bar-row"><span>3 星</span><div class="progress-bar"><div class="bar-fill" style="width: 3%"></div></div><span>3%</span></div>
          <div class="score-bar-row"><span>2 星</span><div class="progress-bar"><div class="bar-fill" style="width: 0%"></div></div><span>0%</span></div>
          <div class="score-bar-row"><span>1 星</span><div class="progress-bar"><div class="bar-fill" style="width: 0%"></div></div><span>0%</span></div>
        </div>
      </div>
      
      <div class="reviews-list">
        <div class="review-item">
          <div class="review-header">
            <span class="user">Mario_Lover_99</span>
            <span class="rating">★★★★★ 5.0</span>
            <span class="date">2026-05-10</span>
          </div>
          <p class="review-text">超讚的質感！出貨速度也很快，比想像中的還要精緻，細節做得非常好，滿分推薦！</p>
        </div>
        <div class="review-item">
          <div class="review-header">
            <span class="user">ZeldaFanatic</span>
            <span class="rating">★★★★☆ 4.0</span>
            <span class="date">2026-05-02</span>
          </div>
          <p class="review-text">非常精美，整體擺設起來很有氣勢。美中不足是外盒運送時有一點點擠壓到，但裡面商品完全沒事，還是給五星好評。</p>
        </div>
      </div>
    </div>
  `;
  
  // Set up detail page events
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyInput = document.getElementById('qty-input');
  
  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value);
      if (val > 1) qtyInput.value = val - 1;
    });
    qtyPlus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value);
      if (val < 10) qtyInput.value = val + 1;
    });
  }
  
  const addToCartAction = document.getElementById('add-to-cart-action');
  if (addToCartAction) {
    addToCartAction.addEventListener('click', () => {
      const qty = parseInt(qtyInput.value) || 1;
      cartCount += qty;
      localStorage.setItem('cartCount', cartCount);
      
      const badge = document.getElementById('cart-badge');
      if (badge) {
        badge.innerText = cartCount;
        badge.classList.add('pulse-animation');
        setTimeout(() => badge.classList.remove('pulse-animation'), 600);
      }
      
      alert(`成功將 ${qty} 件「${product.name}」加入購物車！`);
    });
  }
}

// Injects base header/footer automatically when page loads
document.addEventListener('DOMContentLoaded', () => {
  loadHeaderFooter();
  
  // Run appropriate render depending on current page placeholders
  if (document.getElementById('home-products-grid')) {
    renderProductGrid('home-products-grid', 'all');
  }
  if (document.getElementById('clothing-grid')) {
    renderProductGrid('clothing-grid', 'clothing');
  }
  if (document.getElementById('plushies-grid')) {
    renderProductGrid('plushies-grid', 'plushies');
  }
  if (document.getElementById('keychains-grid')) {
    renderProductGrid('keychains-grid', 'keychains');
  }
  if (document.getElementById('figures-grid')) {
    renderProductGrid('figures-grid', 'figures');
  }
  if (document.getElementById('others-grid')) {
    renderProductGrid('others-grid', 'others');
  }
  if (document.getElementById('product-detail-container')) {
    renderProductDetail();
  }
});
