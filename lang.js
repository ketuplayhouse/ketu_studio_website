// Centralized Language & Coverflow Controller for KeTu Playhouse
const translations = {
  es: {
    // Navigation
    "nav-home": "Inicio",
    "nav-support": "Soporte",
    "nav-about": "Sobre Nosotros",
    "back-btn-text": "← Volver al Inicio",

    // Games Data
    "game1-tag": "🎮 PUBLICADO EN GOOGLE PLAY",
    "game1-title": "Keyboard Escape: Speed Up",
    "game1-trailer-btn": "▶ Ver Tráiler Oficial (YouTube)",
    "badge-alt": "Disponible en Google Play",

    "game2-tag": "⚡ EN DESARROLLO TEMPRANO (UNITY 3D)",
    "game2-title": "EGO BALL",
    "game2-discord-btn": "👾 Comunidad Discord (Alpha)",

    // About Us Page
    "about-page-title": "Sobre KeTu Playhouse",
    "about-page-subtitle": "Estudio Independiente de Videojuegos Móviles",
    "about-page-p1": "En KeTu Playhouse, nacimos con la visión de diseñar experiencias móviles independientes que sean ultrarrápidas, dinámicas y adictivas directamente en la palma de tu mano.",
    "about-page-h2-1": "Nuestra Filosofía",
    "about-page-p2": "Creemos en el gameplay ágil, en controles pulidos al milisegundo y en estéticas visuales vibrantes (Candy Neón, Synthwave y Anime). Queremos que cada segundo que pases en nuestros juegos sea electrizante.",
    "about-page-h2-2": "Nuestros Proyectos",
    "about-page-h2-3": "Contacto & Soporte",
    "about-page-p3": "Si deseas reportar un error, hacernos consultas o enviarnos tus comentarios, escríbenos directamente a nuestro correo oficial de soporte:",

    // Footer
    "footer-developer": "Developer: KeTu Playhouse Inc.",
    "link-privacy": "Política de Privacidad",
    "link-terms": "Términos de Uso",
    "footer-copy": "© 2026 KeTu Playhouse Inc. Todos los derechos reservados."
  },
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-support": "Support",
    "nav-about": "About Us",
    "back-btn-text": "← Back to Home",

    // Games Data
    "game1-tag": "🎮 PUBLISHED ON GOOGLE PLAY",
    "game1-title": "Keyboard Escape: Speed Up",
    "game1-trailer-btn": "▶ Watch Official Trailer (YouTube)",
    "badge-alt": "Get it on Google Play",

    "game2-tag": "⚡ IN EARLY DEV (UNITY 3D)",
    "game2-title": "EGO BALL",
    "game2-discord-btn": "👾 Discord Community (Alpha)",

    // About Us Page
    "about-page-title": "About KeTu Playhouse",
    "about-page-subtitle": "Indie Mobile Game Development Studio",
    "about-page-p1": "At KeTu Playhouse, we were born with the vision of designing independent mobile experiences that are ultra-fast, dynamic, and addictive right in the palm of your hand.",
    "about-page-h2-1": "Our Philosophy",
    "about-page-p2": "We believe in agile gameplay, millisecond-polished controls, and vibrant visual aesthetics (Candy Neon, Synthwave, and Anime). We want every second you spend in our games to be thrilling.",
    "about-page-h2-2": "Our Projects",
    "about-page-h2-3": "Contact & Support",
    "about-page-p3": "If you want to report a bug, ask us questions, or send us your feedback, write to us directly at our official support email:",

    // Footer
    "footer-developer": "Developer: KeTu Playhouse Inc.",
    "link-privacy": "Privacy Policy",
    "link-terms": "Terms of Service",
    "footer-copy": "© 2026 KeTu Playhouse Inc. All rights reserved."
  }
};

function updateContent(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key] !== undefined) {
      if (element.tagName === "A" && (key === "link-privacy" || key === "link-terms" || key === "nav-about")) {
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
  updateContent(savedLang);
});
