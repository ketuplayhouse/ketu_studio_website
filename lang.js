// Centralized Language & News Management System for KeTu Playhouse Website
const translations = {
  es: {
    // Navigation
    "nav-home": "Inicio",
    "nav-games": "Juegos",
    "nav-egoball": "EGO BALL",
    "nav-news": "Noticias",
    "nav-about": "Nosotros",

    // Hero Section
    "hero-title": "Creamos mundos <span class=\"gradient-text\">rápidos</span>, dinámicos y <span class=\"gradient-text\">divertidos</span>",
    "hero-subtitle": "KeTu Playhouse es un estudio independiente dedicado a diseñar experiencias móviles arcade únicas directamente en tu bolsillo.",
    "hero-btn": "Explorar Lanzamientos",

    // Keyboard Escape Section
    "game1-status": "🎮 PUBLICADO EN GOOGLE PLAY",
    "game1-title": "Keyboard Escape: Speed Up",
    "game1-desc": "¡Pon a prueba tus reflejos y velocidad de reacción! En <strong>Keyboard Escape: Speed Up</strong>, asumes el control de una pequeña tecla fugitiva atrapada en un teclado cibernético que se derrumba. Esqueva obstáculos, salta de tecla en tecla y utiliza potenciadores eléctricos para escapar.",
    "game1-feat-1": "Acción arcade de ritmo ultra rápido",
    "game1-feat-2": "Diseño visual Candy Neon & Synthwave",
    "game1-feat-3": "Niveles desafiantes y tablas de velocidad",
    "game1-feat-4": "100% Optimizado para celulares Android",
    "game1-trailer-btn": "▶ Ver Tráiler Oficial (YouTube)",
    "gallery-title": "Capturas de Pantalla",
    "badge-alt": "Disponible en Google Play Store",

    // EGO BALL Section (Reveal)
    "egoball-status": "⚡ EN DESARROLLO TEMPRANO (UNITY 3D)",
    "egoball-title": "EGO BALL",
    "egoball-subtitle": "Arena Multijugador Arcade de Deflexión & Poderes Anime",
    "egoball-desc": "Enfrenta la pelota teledirigida en duelos electrizantes de alta velocidad. Calcula el timing perfecto para devolver (deflect) los ataques con espadas coleccionables y desata auras neón al ritmo de música Phonk.",
    "egoball-feat1-title": "Deflexión de Alta Velocidad",
    "egoball-feat1-desc": "Mecánica estilo Dodgeball / Blade Ball con aceleración progresiva.",
    "egoball-feat2-title": "Vibe Anime & Blue Lock",
    "egoball-feat2-desc": "Superpoderes, auras de combate neón e intensidad competitiva.",
    "egoball-feat3-title": "Colección de Espadas",
    "egoball-feat3-desc": "Rarezas desde armas Comunes hasta SSS+ Heavenly Sick.",
    "egoball-feat4-title": "PVP 3 Vidas & Co-op Boss Raid",
    "egoball-feat4-desc": "Modos de eliminación directa y batallas cooperativas contra jefes.",
    "egoball-cta": "👾 Unirse a la Alpha Privada (Discord)",

    // News Section
    "news-title": "Novedades & Anuncios",
    "news-subtitle": "Notas del parche, actualizaciones y noticias de KeTu Playhouse",
    "news-tab-all": "Todas",
    "news-tab-announcements": "Anuncios",
    "news-tab-releases": "Lanzamientos",
    "news-tab-community": "Comunidad",
    "news-more": "Ver Comunidad en Discord",

    // Footer & Support
    "about-title": "Sobre el Estudio",
    "about-text": "Nacimos con la pasión de llevar diversión directa, mecánica pulida y estilos artísticos vibrantes a los teléfonos móviles de todo el mundo. Creemos en juegos que capturan tu atención al instante con desafíos gratificantes.",
    "stat-1-lbl": "Juegos Publicados",
    "stat-2-lbl": "En Desarrollo",
    "stat-3-lbl": "Desarrollo Indie",
    "footer-support": "Soporte Técnico & Consultas:",
    "link-privacy": "Política de Privacidad",
    "link-terms": "Términos de Uso",
    "footer-copy": "© 2026 KeTu Playhouse. Todos los derechos reservados."
  },
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-games": "Games",
    "nav-egoball": "EGO BALL",
    "nav-news": "News",
    "nav-about": "About Us",

    // Hero Section
    "hero-title": "We build <span class=\"gradient-text\">fast</span>, dynamic and <span class=\"gradient-text\">fun</span> worlds",
    "hero-subtitle": "KeTu Playhouse is an independent studio dedicated to designing unique mobile arcade experiences right in your pocket.",
    "hero-btn": "Explore Releases",

    // Keyboard Escape Section
    "game1-status": "🎮 PUBLISHED ON GOOGLE PLAY",
    "game1-title": "Keyboard Escape: Speed Up",
    "game1-desc": "Test your reflexes and reaction speed! In <strong>Keyboard Escape: Speed Up</strong>, you control a runaway key trapped inside a collapsing cybernetic keyboard. Dodge obstacles, jump from key to key, and use electric power-ups to race against time.",
    "game1-feat-1": "Ultra-fast-paced arcade action",
    "game1-feat-2": "Vibrant Candy Neon & Synthwave style",
    "game1-feat-3": "Challenging speed run levels",
    "game1-feat-4": "100% Optimized for Android mobile",
    "game1-trailer-btn": "▶ Watch Official Trailer (YouTube)",
    "gallery-title": "Screenshots",
    "badge-alt": "Get it on Google Play Store",

    // EGO BALL Section (Reveal)
    "egoball-status": "⚡ EARLY DEVELOPMENT (UNITY 3D)",
    "egoball-title": "EGO BALL",
    "egoball-subtitle": "Multiplayer Arcade Deflection Arena & Anime Powers",
    "egoball-desc": "Face the homing ball in electrifying high-speed duels. Master precision timing to deflect attacks using collectible swords and unleash neon auras to Phonk beats.",
    "egoball-feat1-title": "High-Speed Deflection",
    "egoball-feat1-desc": "Dodgeball / Blade Ball mechanics with progressive speed.",
    "egoball-feat2-title": "Anime & Blue Lock Vibe",
    "egoball-feat2-desc": "Superpowers, neon aura effects, and fierce competition.",
    "egoball-feat3-title": "Sword Collection",
    "egoball-feat3-desc": "Rarities ranging from Common weapons to SSS+ Heavenly Sick.",
    "egoball-feat4-title": "PVP 3 Lives & Co-op Boss Raid",
    "egoball-feat4-desc": "Direct elimination arena modes and cooperative boss battles.",
    "egoball-cta": "👾 Join Alpha Testing (Discord)",

    // News Section
    "news-title": "News & Announcements",
    "news-subtitle": "Patch notes, dev updates, and milestones from KeTu Playhouse",
    "news-tab-all": "All",
    "news-tab-announcements": "Announcements",
    "news-tab-releases": "Releases",
    "news-tab-community": "Community",
    "news-more": "Join Discord Community",

    // Footer & Support
    "about-title": "About the Studio",
    "about-text": "We were born with the passion to bring instant fun, polished mechanics, and vibrant art styles to mobile phones worldwide. We believe in games that capture your attention instantly with rewarding challenges.",
    "stat-1-lbl": "Published Games",
    "stat-2-lbl": "In Development",
    "stat-3-lbl": "Indie Development",
    "footer-support": "Technical Support & Inquiries:",
    "link-privacy": "Privacy Policy",
    "link-terms": "Terms of Use",
    "footer-copy": "© 2026 KeTu Playhouse. All rights reserved."
  }
};

// Fallback News Data in case news.json cannot be fetched
const fallbackNewsData = [
  {
    id: "ego-ball-reveal",
    category: "announcement",
    date: "27 JUL 2026",
    title_es: "⚡ ¡REVELADO EGO BALL! Nuestro segundo proyecto en desarrollo",
    title_en: "⚡ EGO BALL REVEALED! Our second project in development",
    summary_es: "Arena multijugador arcade de deflexión con espadas coleccionables (desde Común hasta SSS+ Heavenly Sick), auras neón y ritmo Phonk al estilo Blue Lock.",
    summary_en: "Arcade multiplayer deflection arena with collectible swords (Common to SSS+ Heavenly Sick), neon auras, and Phonk music in Blue Lock style.",
    badge_es: "Novedad",
    badge_en: "New",
    image: "assets/banner.png"
  },
  {
    id: "keyboard-escape-launch",
    category: "release",
    date: "30 JUN 2026",
    title_es: "🎮 Keyboard Escape: Speed Up ya disponible en Google Play Store",
    title_en: "🎮 Keyboard Escape: Speed Up now available on Google Play Store",
    summary_es: "¡Descarga la versión completa 0.1.5! Demuestra tu velocidad de reacción escapando del teclado cibernético.",
    summary_en: "Download full version 0.1.5! Test your reaction speed escaping the cybernetic keyboard.",
    badge_es: "Lanzamiento",
    badge_en: "Release",
    image: "assets/banner.png"
  },
  {
    id: "discord-community-open",
    category: "community",
    date: "16 JUN 2026",
    title_es: "👾 Comunidad KeTu Playhouse en Discord Oficial",
    title_en: "👾 KeTu Playhouse Official Discord Community",
    summary_es: "Únete a nuestro servidor de Discord para participar en pruebas alfa de EGO BALL y chatear directamente con los desarrolladores.",
    summary_en: "Join our Discord server to participate in EGO BALL alpha testing and chat directly with developers.",
    badge_es: "Comunidad",
    badge_en: "Community",
    image: "assets/banner.png"
  }
];

let globalNews = fallbackNewsData;
let activeNewsCategory = "all";

// Main function to update UI strings based on the active language
function updateContent(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  // Update elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key] !== undefined) {
      if (element.tagName === "A" && (key === "link-privacy" || key === "link-terms")) {
        element.innerHTML = dictionary[key];
      } else if (dictionary[key].includes("<span") || dictionary[key].includes("<strong") || dictionary[key].includes("<a") || dictionary[key].includes("<code")) {
        element.innerHTML = dictionary[key];
      } else {
        element.textContent = dictionary[key];
      }
    }
  });

  // Update specific images alt texts if any
  document.querySelectorAll("[data-i18n-alt]").forEach(element => {
    const key = element.getAttribute("data-i18n-alt");
    if (dictionary[key] !== undefined) {
      element.setAttribute("alt", dictionary[key]);
    }
  });

  // Highlight active button in language selector
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  const activeBtn = document.getElementById(`lang-btn-${lang}`);
  if (activeBtn) {
    activeBtn.classList.add("active");
  }

  // Update HTML lang attribute
  document.documentElement.setAttribute("lang", lang);

  // Re-render News Board with the active language
  renderNewsBoard(activeNewsCategory);
}

// Fetch News Data from JSON with fallback protection
async function loadNewsData() {
  try {
    const response = await fetch('data/news.json');
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        globalNews = data;
      }
    }
  } catch (err) {
    console.warn("Using fallback news data due to network or CORS restriction:", err);
  }
  const currentLang = localStorage.getItem('ketu_lang') || 'es';
  renderNewsBoard('all');
}

// Render News Board Component (ChillyRoom style 2-Column layout)
function renderNewsBoard(category = 'all') {
  activeNewsCategory = category;
  const container = document.getElementById('news-board-content');
  if (!container) return;

  const currentLang = localStorage.getItem('ketu_lang') || 'es';

  // Filter items
  const filtered = category === 'all' 
    ? globalNews 
    : globalNews.filter(item => item.category === category);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="news-empty">${currentLang === 'es' ? 'No hay noticias en esta categoría.' : 'No news found in this category.'}</div>`;
    return;
  }

  const activeItem = filtered[0]; // Featured item on left
  const title = activeItem[`title_${currentLang}`] || activeItem.title_es;
  const summary = activeItem[`summary_${currentLang}`] || activeItem.summary_es;
  const badge = activeItem[`badge_${currentLang}`] || activeItem.badge_es;

  // Build Left Banner View
  const leftHTML = `
    <div class="news-featured-card">
      <div class="news-banner-wrapper">
        <img src="${activeItem.image}" alt="${title}" class="news-featured-img">
        <span class="news-badge">${badge}</span>
      </div>
      <div class="news-featured-info">
        <span class="news-date">${activeItem.date}</span>
        <h4 class="news-featured-title">${title}</h4>
        <p class="news-featured-summary">${summary}</p>
      </div>
    </div>
  `;

  // Build Right Items List
  let rightListHTML = '<ul class="news-list">';
  filtered.forEach((item, index) => {
    const itemTitle = item[`title_${currentLang}`] || item.title_es;
    const itemBadge = item[`badge_${currentLang}`] || item.badge_es;
    const isActiveClass = index === 0 ? 'active' : '';
    rightListHTML += `
      <li class="news-item ${isActiveClass}" onclick="selectFeaturedNews('${item.id}')">
        <div class="news-item-meta">
          <span class="news-item-badge">${itemBadge}</span>
          <span class="news-item-date">${item.date}</span>
        </div>
        <div class="news-item-title">${itemTitle}</div>
      </li>
    `;
  });
  rightListHTML += '</ul>';

  container.innerHTML = `
    <div class="news-board-grid">
      <div class="news-col-left">${leftHTML}</div>
      <div class="news-col-right">${rightListHTML}</div>
    </div>
  `;
}

// Select a specific news item to showcase on the left banner
function selectFeaturedNews(newsId) {
  const item = globalNews.find(n => n.id === newsId);
  if (!item) return;

  const currentLang = localStorage.getItem('ketu_lang') || 'es';
  const title = item[`title_${currentLang}`] || item.title_es;
  const summary = item[`summary_${currentLang}`] || item.summary_es;
  const badge = item[`badge_${currentLang}`] || item.badge_es;

  const leftCol = document.querySelector('.news-col-left');
  if (leftCol) {
    leftCol.innerHTML = `
      <div class="news-featured-card">
        <div class="news-banner-wrapper">
          <img src="${item.image}" alt="${title}" class="news-featured-img">
          <span class="news-badge">${badge}</span>
        </div>
        <div class="news-featured-info">
          <span class="news-date">${item.date}</span>
          <h4 class="news-featured-title">${title}</h4>
          <p class="news-featured-summary">${summary}</p>
        </div>
      </div>
    `;
  }

  // Highlight active item in list
  document.querySelectorAll('.news-item').forEach(el => el.classList.remove('active'));
  event?.currentTarget?.classList?.add('active');
}

// Set active language and save to local storage
function changeLanguage(lang) {
  if (lang !== "es" && lang !== "en") return;
  localStorage.setItem("ketu_lang", lang);
  updateContent(lang);
}

// Hybrid YouTube Video Player Handler (PC Embed / Mobile App Deep Link)
function openYouTubeTrailer() {
  const videoId = "5XQYpU8MBPI";
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

  if (isMobile) {
    // Try opening native YouTube App via Deep Link or web URL
    window.location.href = `https://youtu.be/${videoId}`;
  } else {
    // Open slick Lightbox Modal on Desktop
    let modal = document.getElementById('youtube-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'youtube-modal';
      modal.className = 'video-modal-overlay';
      modal.innerHTML = `
        <div class="video-modal-card">
          <button class="video-modal-close" onclick="closeYouTubeTrailer()">&times;</button>
          <div class="video-iframe-wrapper">
            <iframe id="youtube-iframe" src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    } else {
      const iframe = document.getElementById('youtube-iframe');
      if (iframe) iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      modal.style.display = 'flex';
    }
  }
}

function closeYouTubeTrailer() {
  const modal = document.getElementById('youtube-modal');
  if (modal) {
    modal.style.display = 'none';
    const iframe = document.getElementById('youtube-iframe');
    if (iframe) iframe.src = '';
  }
}

// Auto-detect browser language & initialize
document.addEventListener("DOMContentLoaded", () => {
  let savedLang = localStorage.getItem("ketu_lang");
  
  if (!savedLang) {
    const browserLang = navigator.language || navigator.userLanguage;
    savedLang = browserLang.startsWith("es") ? "es" : "en";
  }

  // Load news data & apply language
  loadNewsData();
  updateContent(savedLang);
});
