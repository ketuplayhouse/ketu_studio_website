// Centralized Language & News System for KeTu Playhouse
const translations = {
  es: {
    // Navigation
    "nav-overview": "Overview",
    "nav-features": "Características",
    "nav-news": "Noticias",
    "nav-support": "Soporte",

    // Overview Hero
    "hero-tag": "🎮 PUBLICADO EN GOOGLE PLAY",
    "hero-title-main": "Keyboard Escape: Speed Up",
    "hero-subtitle-main": "¡Acción Arcade de Ritmo Ultra Rápido! Demuestra tus reflejos saltando de tecla en tecla antes del colapso cibernético.",

    // Features Section
    "features-tag": "🎮 DETALLES DE JUGABILIDAD",
    "features-title": "Características del Juego",
    "feat1-title": "Acción Arcade Ultra Rápida",
    "feat1-desc": "Pon a prueba tus reflejos con saltos precisos y velocidad extrema.",
    "feat2-title": "Power-Ups Eléctricos",
    "feat2-desc": "Utiliza impulsos cibernéticos para superar las zonas más difíciles.",
    "feat3-title": "Desafío Contra el Reloj",
    "feat3-desc": "Compite por la puntuación más alta antes del colapso total.",

    // News Section
    "news-title": "Novedades & Anuncios",
    "news-subtitle": "Notas del parche, actualizaciones y noticias de KeTu Playhouse",
    "news-tab-all": "Todas",
    "news-tab-announcements": "Anuncios",
    "news-tab-releases": "Lanzamientos",
    "news-tab-community": "Comunidad",
    "news-more": "Ver Comunidad en Discord →",

    // Chillyroom Style Slim Footer
    "footer-tagline": "Somos <strong>KeTu Playhouse</strong>, un estudio independiente de videojuegos móviles creador de Keyboard Escape: Speed Up.",
    "footer-support-label": "Soporte:",
    "link-privacy": "Política de Privacidad",
    "link-terms": "Términos de Uso",
    "footer-copy": "© 2026 KeTu Playhouse. Todos los derechos reservados."
  },
  en: {
    // Navigation
    "nav-overview": "Overview",
    "nav-features": "Game Features",
    "nav-news": "News",
    "nav-support": "Support",

    // Overview Hero
    "hero-tag": "🎮 PUBLISHED ON GOOGLE PLAY",
    "hero-title-main": "Keyboard Escape: Speed Up",
    "hero-subtitle-main": "Ultra-fast pace arcade action! Test your reaction speed jumping key to key before the cybernetic collapse.",

    // Features Section
    "features-tag": "🎮 GAMEPLAY DETAILS",
    "features-title": "Game Features",
    "feat1-title": "Ultra-Fast Arcade Action",
    "feat1-desc": "Test your reflexes with precise jumps and extreme speed.",
    "feat2-title": "Electric Power-Ups",
    "feat2-desc": "Use cybernetic boosts to overcome the hardest obstacle zones.",
    "feat3-title": "Time Trial Challenge",
    "feat3-desc": "Compete for the highest score before total collapse.",

    // News Section
    "news-title": "News & Announcements",
    "news-subtitle": "Patch notes, dev updates, and milestones from KeTu Playhouse",
    "news-tab-all": "All",
    "news-tab-announcements": "Announcements",
    "news-tab-releases": "Releases",
    "news-tab-community": "Community",
    "news-more": "Join Discord Community →",

    // Chillyroom Style Slim Footer
    "footer-tagline": "We're <strong>KeTu Playhouse</strong>, an indie game studio creator of Keyboard Escape: Speed Up.",
    "footer-support-label": "Support:",
    "link-privacy": "Privacy Policy",
    "link-terms": "Terms of Use",
    "footer-copy": "© 2026 KeTu Playhouse. All rights reserved."
  }
};

const fallbackNewsData = [
  {
    id: "ego-ball-teaser",
    category: "announcement",
    date: "27 JUL 2026",
    title_es: "⚡ Proyecto KeTu2: EGO BALL en Desarrollo Temprano",
    title_en: "⚡ Project KeTu2: EGO BALL in Early Development",
    summary_es: "Iniciamos la fase de prototipado en Unity 3D para nuestro segundo título: una arena multijugador arcade de deflexión con espadas coleccionables y ritmo Phonk.",
    summary_en: "We started early Unity 3D prototyping for our second title: an arcade multiplayer deflection arena with collectible swords and Phonk music.",
    badge_es: "En Desarrollo",
    badge_en: "In Dev",
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
    summary_es: "Únete a nuestro servidor de Discord para estar al tanto de los avances del estudio y chatear directamente con el desarrollador.",
    summary_en: "Join our Discord server to follow studio progress and chat directly with the developer.",
    badge_es: "Comunidad",
    badge_en: "Community",
    image: "assets/banner.png"
  }
];

let globalNews = fallbackNewsData;
let activeNewsCategory = "all";

function updateContent(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key] !== undefined) {
      if (element.tagName === "A" && (key === "link-privacy" || key === "link-terms")) {
        element.innerHTML = dictionary[key];
      } else if (dictionary[key].includes("<span") || dictionary[key].includes("<strong") || dictionary[key].includes("<a")) {
        element.innerHTML = dictionary[key];
      } else {
        element.textContent = dictionary[key];
      }
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(element => {
    const key = element.getAttribute("data-i18n-alt");
    if (dictionary[key] !== undefined) {
      element.setAttribute("alt", dictionary[key]);
    }
  });

  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`lang-btn-${lang}`);
  if (activeBtn) activeBtn.classList.add("active");

  document.documentElement.setAttribute("lang", lang);
  renderNewsBoard(activeNewsCategory);
}

async function loadNewsData() {
  try {
    const response = await fetch('data/news.json');
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) globalNews = data;
    }
  } catch (err) {
    console.warn("Using fallback news data:", err);
  }
  renderNewsBoard('all');
}

function renderNewsBoard(category = 'all') {
  activeNewsCategory = category;
  const container = document.getElementById('news-board-content');
  if (!container) return;

  const currentLang = localStorage.getItem('ketu_lang') || 'es';
  const filtered = category === 'all' ? globalNews : globalNews.filter(item => item.category === category);

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--text-muted)">${currentLang === 'es' ? 'No hay noticias en esta categoría.' : 'No news found.'}</div>`;
    return;
  }

  const activeItem = filtered[0];
  const title = activeItem[`title_${currentLang}`] || activeItem.title_es;
  const summary = activeItem[`summary_${currentLang}`] || activeItem.summary_es;
  const badge = activeItem[`badge_${currentLang}`] || activeItem.badge_es;

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

  let rightListHTML = '<ul class="news-list">';
  filtered.forEach((item, index) => {
    const itemTitle = item[`title_${currentLang}`] || item.title_es;
    const itemBadge = item[`badge_${currentLang}`] || item.badge_es;
    rightListHTML += `
      <li class="news-item ${index === 0 ? 'active' : ''}" onclick="selectFeaturedNews('${item.id}')">
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

  document.querySelectorAll('.news-item').forEach(el => el.classList.remove('active'));
  event?.currentTarget?.classList?.add('active');
}

function changeLanguage(lang) {
  if (lang !== "es" && lang !== "en") return;
  localStorage.setItem("ketu_lang", lang);
  updateContent(lang);
}

function openYouTubeTrailer() {
  const videoId = "5XQYpU8MBPI";
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

  if (isMobile) {
    window.location.href = `https://youtu.be/${videoId}`;
  } else {
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

document.addEventListener("DOMContentLoaded", () => {
  let savedLang = localStorage.getItem("ketu_lang");
  if (!savedLang) {
    const browserLang = navigator.language || navigator.userLanguage;
    savedLang = browserLang.startsWith("es") ? "es" : "en";
  }
  loadNewsData();
  updateContent(savedLang);
});
