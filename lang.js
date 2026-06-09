// Centralized Language Translation System for KeTu Playhouse Website
const translations = {
  es: {
    // Navigation
    "nav-home": "Inicio",
    "nav-games": "Juegos",
    "nav-devlog": "Devlog",
    "nav-about": "Nosotros",
    "nav-support": "Soporte",
    "nav-presskit": "Presskit",

    // Hero Section
    "hero-title": "Creamos mundos <span class=\"gradient-text\">rápidos</span>, dinámicos y <span class=\"gradient-text\">divertidos</span>",
    "hero-subtitle": "KeTu Playhouse es un estudio independiente dedicado a diseñar experiencias de juego móviles únicas y electrizantes directamente en tu bolsillo.",
    "hero-btn": "Ver Nuestros Juegos",

    // Games Section
    "section-games-title": "Nuestros Lanzamientos",
    "section-games-subtitle": "Explora los juegos creados por KeTu Playhouse",
    "game-studio-label": "KeTu Playhouse",
    "game-desc": "¡Pon a prueba tus reflejos y velocidad de escritura! En <strong>Keyboard Escape: Speed Up</strong>, asumes el control de una pequeña tecla fugitiva atrapada en un teclado cibernético que se derrumba. Deberás esquivar obstáculos, saltar de tecla en tecla y utilizar potenciadores eléctricos para correr contra el tiempo. ¿Lograrás escapar del teclado antes del colapso total?",
    "game-feat-1": "Acción arcade de ritmo ultra rápido",
    "game-feat-2": "Diseño visual vibrante tipo dulce de neón",
    "game-feat-3": "Niveles desafiantes que pondrán a prueba tus reflejos",
    "game-feat-4": "Banda sonora retro synth-wave inmersiva",
    "gallery-title": "Capturas de Pantalla",
    "badge-alt": "Disponible en Google Play",
    "cta-testing-web": "Unirse a la Prueba Abierta (Web)",

    // About Section
    "about-title": "Sobre el Estudio",
    "about-text": "Nacimos con la pasión de llevar diversión directa, mecánica pulida y estilos artísticos vibrantes a los teléfonos móviles de todo el mundo. Creemos que los mejores juegos son aquellos que capturan tu atención al instante, ofreciendo desafíos gratificantes que puedes disfrutar en cualquier lugar.",
    "stat-1-lbl": "Juegos Publicados",
    "stat-2-lbl": "Año de Fundación",
    "stat-3-lbl": "Desarrollo Indie",

    // Contact Section
    "contact-title": "¿Tienes preguntas o comentarios?",
    "contact-desc": "Estamos siempre listos para escuchar a nuestra comunidad. Si tienes sugerencias, reportes de fallos o consultas comerciales, envíanos un correo electrónico.",

    // Privacy Policy Link & Footer
    "link-privacy": "Política de Privacidad",
    "footer-copy": "&copy; 2026 KeTu Playhouse. Todos los derechos reservados.",

    // Privacy Policy Page specific strings
    "back-btn-text": "Volver al Inicio",
    "privacy-header": "Política de Privacidad",
    "privacy-last-updated": "Última actualización: 8 de Junio, 2026",
    "privacy-intro": "En <strong>KeTu Playhouse</strong>, valoramos tu privacidad. Esta Política de Privacidad explica cómo se recopila, utiliza y divulga la información cuando utilizas nuestro juego móvil <strong>Keyboard Escape: Speed Up</strong> y cualquier otro servicio relacionado.",
    "privacy-sec1-title": "1. Recopilación de Información",
    "privacy-sec1-p1": "Nuestras aplicaciones están diseñadas para no recopilar información de identificación personal directamente de los usuarios. No solicitamos registros de cuentas, nombres, correos electrónicos ni números de teléfono para jugar.",
    "privacy-sec1-p2": "Sin embargo, para monetizar y mantener nuestros servicios gratuitos, integramos herramientas de terceros que sí recopilan información técnica de manera automática.",
    "privacy-sec2-title": "2. Servicios de Terceros (Publicidad y Monetización)",
    "privacy-sec2-p1": "Este juego utiliza <strong>Google AdMob</strong> para mostrar anuncios. AdMob puede recopilar y procesar información sobre ti de forma automática. Esta información incluye, entre otros:",
    "privacy-sec2-li1": "Identificadores únicos de publicidad del dispositivo (como el ID de publicidad de Google o el IDFA de Apple).",
    "privacy-sec2-li2": "Datos sobre el dispositivo (fabricante, modelo, sistema operativo, idioma y resolución de pantalla).",
    "privacy-sec2-li3": "Datos sobre la interacción con los anuncios (clics, impresiones y visualizaciones).",
    "privacy-sec2-li4": "Información de diagnóstico del sistema (informes de fallos o crash logs, rendimiento de la app y uso de memoria).",
    "privacy-sec2-li5": "Ubicación aproximada (a nivel de ciudad o país) derivada de la dirección IP.",
    "privacy-sec2-p2": "Puedes consultar la política de privacidad de Google relacionada con la publicidad en el siguiente enlace: <a href=\"https://policies.google.com/technologies/ads\" target=\"_blank\" rel=\"noopener noreferrer\">Políticas y Principios de Publicidad de Google</a>.",
    "privacy-sec3-title": "3. Uso de la Información",
    "privacy-sec3-p1": "La información técnica recopilada automáticamente se utiliza únicamente para:",
    "privacy-sec3-li1": "Mostrar anuncios personalizados o no personalizados según corresponda y lo permita tu configuración.",
    "privacy-sec3-li2": "Prevenir fraudes y actividades maliciosas dentro del sistema de publicidad.",
    "privacy-sec3-li3": "Analizar el rendimiento de las campañas publicitarias.",
    "privacy-sec3-li4": "Diagnosticar problemas técnicos, corregir fallos del sistema y optimizar la experiencia de juego.",
    "privacy-sec4-title": "4. Opciones de Privacidad del Usuario",
    "privacy-sec4-p1": "Si deseas limitar la publicidad personalizada en tu dispositivo móvil, puedes ajustar la configuración en tu teléfono:",
    "privacy-sec4-li1": "<strong>En Android:</strong> Abre Ajustes > Privacidad > Anuncios y selecciona \"Restablecer ID de publicidad\" o \"Inhabilitar personalización de anuncios\".",
    "privacy-sec4-li2": "<strong>En iOS:</strong> Ve a Ajustes > Privacidad > Rastreo y desactiva la opción de permitir que las aplicaciones soliciten rastrearte.",
    "privacy-sec5-title": "5. Privacidad de los Niños",
    "privacy-sec5-p1": "Nuestros juegos no están dirigidos intencionalmente a niños menores de 13 años. No recopilamos conscientemente información personal de niños. Si eres padre o tutor y crees que hemos recopilado información sin tu consentimiento, por favor contáctanos de inmediato.",
    "privacy-sec6-title": "6. Cambios en esta Política",
    "privacy-sec6-p1": "Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.",
    "privacy-sec7-title": "7. Contacto",
    "privacy-sec7-p1": "Si tienes alguna pregunta sobre esta Política de Privacidad o el tratamiento de tus datos, puedes ponerte en contacto con nosotros a través del correo electrónico:",

    // Devlog & Newsletter
    "section-devlog-title": "Bitácora de Desarrollo",
    "section-devlog-subtitle": "Notas del parche y actualizaciones de Keyboard Escape",
    "devlog-post1-title": "Prueba Cerrada Iniciada",
    "devlog-post1-text": "¡Hemos comenzado la fase de prueba cerrada con 12 testers! Esta actualización incluye optimizaciones en los controles de salto y correcciones en la renderización de la interfaz en dispositivos móviles.",
    "devlog-post2-title": "Primer Lanzamiento en Google Play",
    "devlog-post2-text": "La versión de Keyboard Escape: Speed Up ya está compilada y subida a la consola de desarrolladores. Todo listo para invitar a los testers y pulir los detalles finales de velocidad de escritura y mecánicas.",
    "newsletter-title": "¡Únete a nuestra lista de correo!",
    "newsletter-desc": "Recibe boletines de desarrollo, ofertas exclusivas de temporada y entérate antes que nadie de nuestros futuros lanzamientos.",
    "newsletter-placeholder": "Tu correo electrónico",
    "newsletter-btn": "Suscribirse",

    // Press Kit specific translations
    "pk-menu-factsheet": "Ficha Técnica",
    "pk-menu-desc": "Descripción",
    "pk-menu-history": "Historia",
    "pk-menu-images": "Logos e Imágenes",
    "pk-menu-contact": "Contacto",
    "pk-title": "Press Kit / Kit de Prensa",
    "pk-intro": "Aquí encontrarás todos los materiales promocionales, ficha técnica e información oficial de KeTu Playhouse y de nuestro juego <strong>Keyboard Escape: Speed Up</strong>.",
    "pk-factsheet-title": "Ficha Técnica",
    "pk-tbl-dev": "Desarrollador:",
    "pk-tbl-date": "Fecha de lanzamiento:",
    "pk-tbl-platforms": "Plataformas:",
    "pk-tbl-website": "Sitio Web:",
    "pk-tbl-price": "Precio:",
    "pk-tbl-price-val": "Gratuito (Con anuncios de AdMob)",
    "pk-tbl-contact": "Contacto:",
    "pk-desc-title": "Descripción del Juego",
    "pk-desc-p1": "<strong>Keyboard Escape: Speed Up</strong> es un frenético juego arcade para móviles donde controlas a una tecla rebelde que intenta escapar de un teclado que se desmorona a gran velocidad. El jugador debe saltar, esquivar obstáculos de voltaje eléctrico y correr contra el tiempo, requiriendo reflejos rápidos y precisión.",
    "pk-hist-title": "Historia del Estudio",
    "pk-hist-p1": "<strong>KeTu Playhouse</strong> se fundó en 2026 como un estudio de desarrollo de videojuegos indie enfocado en móviles. Su misión es crear mecánicas de juego rápidas, divertidas, inmersivas y con un estilo visual llamativo basado en neones, ofreciendo experiencias gratificantes y adictivas de calidad premium para jugar sobre la marcha.",
    "pk-img-title": "Logotipos y Capturas de Pantalla",
    "pk-img-desc": "Puedes descargar todas las imágenes oficiales del estudio y el juego. Incluye iconos, banners promocionales y capturas en alta resolución.",
    "pk-btn-logo": "Descargar Logo Oficial",
    "pk-btn-icon": "Descargar Icono (512x512)",
    "pk-btn-banner": "Descargar Banner",
    "pk-contact-title": "Contacto de Prensa",
    "pk-contact-desc": "Para consultas sobre reseñas, entrevistas o solicitudes comerciales, puedes escribir directamente a nuestro correo oficial:"
  },
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-games": "Games",
    "nav-devlog": "Devlog",
    "nav-about": "About Us",
    "nav-support": "Support",
    "nav-presskit": "Presskit",

    // Hero Section
    "hero-title": "We build <span class=\"gradient-text\">fast</span>, dynamic and <span class=\"gradient-text\">fun</span> worlds",
    "hero-subtitle": "KeTu Playhouse is an independent studio dedicated to designing unique and electrifying mobile gaming experiences right in your pocket.",
    "hero-btn": "View Our Games",

    // Games Section
    "section-games-title": "Our Releases",
    "section-games-subtitle": "Explore the games created by KeTu Playhouse",
    "game-studio-label": "KeTu Playhouse",
    "game-desc": "Test your reflexes and typing speed! In <strong>Keyboard Escape: Speed Up</strong>, you control a small runaway key trapped inside a collapsing cybernetic keyboard. You must dodge obstacles, jump from key to key, and use electric power-ups to race against the clock. Can you escape the keyboard before it completely collapses?",
    "game-feat-1": "Ultra-fast-paced arcade action",
    "game-feat-2": "Vibrant neon-candy visual design",
    "game-feat-3": "Challenging levels to test your reflexes",
    "game-feat-4": "Immersive retro synth-wave soundtrack",
    "gallery-title": "Screenshots",
    "badge-alt": "Get it on Google Play",
    "cta-testing-web": "Join Open Testing (Web)",

    // About Section
    "about-title": "About the Studio",
    "about-text": "We were born with the passion to bring instant fun, polished mechanics, and vibrant art styles to mobile phones worldwide. We believe the best games are those that capture your attention instantly, offering rewarding challenges you can enjoy anywhere.",
    "stat-1-lbl": "Published Games",
    "stat-2-lbl": "Founding Year",
    "stat-3-lbl": "Indie Development",

    // Contact Section
    "contact-title": "Got questions or feedback?",
    "contact-desc": "We are always ready to listen to our community. If you have suggestions, bug reports, or business inquiries, send us an email.",

    // Privacy Policy Link & Footer
    "link-privacy": "Privacy Policy",
    "footer-copy": "&copy; 2026 KeTu Playhouse. All rights reserved.",

    // Privacy Policy Page specific strings
    "back-btn-text": "Back to Home",
    "privacy-header": "Privacy Policy",
    "privacy-last-updated": "Last updated: June 8, 2026",
    "privacy-intro": "At <strong>KeTu Playhouse</strong>, we value your privacy. This Privacy Policy explains how information is collected, used, and disclosed when you use our mobile game <strong>Keyboard Escape: Speed Up</strong> and any other related services.",
    "privacy-sec1-title": "1. Information Collection",
    "privacy-sec1-p1": "Our applications are designed not to collect personally identifiable information directly from users. We do not require account registration, names, emails, or phone numbers to play.",
    "privacy-sec1-p2": "However, to monetize and keep our services free, we integrate third-party tools that do collect technical information automatically.",
    "privacy-sec2-title": "2. Third-Party Services (Advertising & Monetization)",
    "privacy-sec2-p1": "This game uses <strong>Google AdMob</strong> to display advertisements. AdMob may collect and process information about you automatically. This information includes, but is not limited to:",
    "privacy-sec2-li1": "Unique device advertising identifiers (such as Google Advertising ID or Apple IDFA).",
    "privacy-sec2-li2": "Device data (manufacturer, model, operating system, language, and screen resolution).",
    "privacy-sec2-li3": "Ad interaction data (clicks, impressions, and views).",
    "privacy-sec2-li4": "System diagnostic information (crash logs, app performance, and memory usage).",
    "privacy-sec2-li5": "Approximate location (city or country level) derived from the IP address.",
    "privacy-sec2-p2": "You can consult Google's privacy policy related to advertising at the following link: <a href=\"https://policies.google.com/technologies/ads\" target=\"_blank\" rel=\"noopener noreferrer\">Google's Advertising Policies and Principles</a>.",
    "privacy-sec3-title": "3. Use of Information",
    "privacy-sec3-p1": "The technical information automatically collected is used solely to:",
    "privacy-sec3-li1": "Display personalized or non-personalized ads as appropriate and allowed by your settings.",
    "privacy-sec3-li2": "Prevent fraud and malicious activity within the advertising system.",
    "privacy-sec3-li3": "Analyze ad campaign performance.",
    "privacy-sec3-li4": "Diagnose technical issues, fix system crashes, and optimize the gaming experience.",
    "privacy-sec4-title": "4. User Privacy Choices",
    "privacy-sec4-p1": "If you wish to limit personalized advertising on your mobile device, you can adjust the settings on your phone:",
    "privacy-sec4-li1": "<strong>On Android:</strong> Open Settings > Privacy > Ads and select \"Reset advertising ID\" or \"Opt out of Ads Personalization\".",
    "privacy-sec4-li2": "<strong>On iOS:</strong> Go to Settings > Privacy > Tracking and disable the option to allow apps to request to track you.",
    "privacy-sec5-title": "5. Children's Privacy",
    "privacy-sec5-p1": "Our games are not intentionally targeted at children under 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe we have collected information without your consent, please contact us immediately.",
    "privacy-sec6-title": "6. Changes to this Policy",
    "privacy-sec6-p1": "We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page with the corresponding update date.",
    "privacy-sec7-title": "7. Contact",
    "privacy-sec7-p1": "If you have any questions about this Privacy Policy or the processing of your data, you can contact us via email:",

    // Devlog & Newsletter
    "section-devlog-title": "Development Log",
    "section-devlog-subtitle": "Patch notes and updates for Keyboard Escape",
    "devlog-post1-title": "Closed Testing Started",
    "devlog-post1-text": "We have started the closed testing phase with 12 testers! This update includes optimizations for jump controls and fixes for UI rendering on mobile devices.",
    "devlog-post2-title": "First Launch on Google Play",
    "devlog-post2-text": "The version of Keyboard Escape: Speed Up is compiled and uploaded to the developer console. Everything is ready to invite testers and polish the final typing speed and mechanics.",
    "newsletter-title": "Join our mailing list!",
    "newsletter-desc": "Receive development logs, exclusive seasonal offers, and find out about our future releases before anyone else.",
    "newsletter-placeholder": "Your email address",
    "newsletter-btn": "Subscribe",

    // Press Kit specific translations
    "pk-menu-factsheet": "Fact Sheet",
    "pk-menu-desc": "Description",
    "pk-menu-history": "History",
    "pk-menu-images": "Logos & Images",
    "pk-menu-contact": "Contact",
    "pk-title": "Press Kit",
    "pk-intro": "Here you will find all the promotional materials, fact sheet, and official information of KeTu Playhouse and our game <strong>Keyboard Escape: Speed Up</strong>.",
    "pk-factsheet-title": "Fact Sheet",
    "pk-tbl-dev": "Developer:",
    "pk-tbl-date": "Release Date:",
    "pk-tbl-platforms": "Platforms:",
    "pk-tbl-website": "Website:",
    "pk-tbl-price": "Price:",
    "pk-tbl-price-val": "Free (With AdMob Ads)",
    "pk-tbl-contact": "Contact:",
    "pk-desc-title": "Game Description",
    "pk-desc-p1": "<strong>Keyboard Escape: Speed Up</strong> is a fast-paced mobile arcade game where you control a rebel key trying to escape a rapidly collapsing keyboard. The player must jump, dodge voltage obstacles, and race against the clock, requiring quick reflexes and precision.",
    "pk-hist-title": "Studio History",
    "pk-hist-p1": "<strong>KeTu Playhouse</strong> was founded in 2026 as an indie mobile game development studio. Its mission is to create fast, fun, immersive mechanics with an eye-catching neon visual style, offering premium-quality addictive experiences to play on the go.",
    "pk-img-title": "Logos & Screenshots",
    "pk-img-desc": "You can download all the official images of the studio and the game. Includes icons, promotional banners, and high-resolution screenshots.",
    "pk-btn-logo": "Download Official Logo",
    "pk-btn-icon": "Download Icon (512x512)",
    "pk-btn-banner": "Download Banner",
    "pk-contact-title": "Press Contact",
    "pk-contact-desc": "For inquiries regarding reviews, interviews, or business requests, you can write directly to our official email:"
  }
};

// Main function to update UI strings based on the active language
function updateContent(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  // Update elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key] !== undefined) {
      // Check if tag requires setting HTML or text
      if (element.tagName === "A" && key === "link-privacy") {
        element.innerHTML = dictionary[key];
      } else if (dictionary[key].includes("<span") || dictionary[key].includes("<strong") || dictionary[key].includes("<a")) {
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

  // Update input placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (dictionary[key] !== undefined) {
      element.setAttribute("placeholder", dictionary[key]);
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
}

// Set active language and save to local storage
function changeLanguage(lang) {
  if (lang !== "es" && lang !== "en") return;
  localStorage.setItem("ketu_lang", lang);
  updateContent(lang);
}

// Auto-detect browser language or load from cache
document.addEventListener("DOMContentLoaded", () => {
  let savedLang = localStorage.getItem("ketu_lang");
  
  if (!savedLang) {
    // Detect system/browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith("es")) {
      savedLang = "es";
    } else {
      savedLang = "en"; // Default to English for other locales
    }
  }

  // Apply language
  updateContent(savedLang);
});
