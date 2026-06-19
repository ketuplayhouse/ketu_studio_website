// Centralized Language Translation System for KeTu Playhouse Website
const translations = {
  es: {
    // Navigation
    "nav-home": "Inicio",
    "nav-games": "Juegos",
    "nav-devlog": "Devlog",
    "nav-about": "Nosotros",
    "nav-support": "Soporte",

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
    "footer-copy": "© 2026 KeTu Playhouse. Todos los derechos reservados.",

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

    // Terms and Conditions Page specific strings (es)
    "link-terms": "Términos de Uso",
    "terms-header": "Términos y Condiciones de Uso",
    "terms-last-updated": "Última actualización: 15 de Junio, 2026",
    "terms-intro": "Al acceder, descargar, instalar o utilizar los videojuegos (incluyendo <strong>Keyboard Escape: Speed Up</strong>), sitios web, servidores de comunidad (como Discord) y servicios de <strong>KeTu Playhouse</strong>, aceptas cumplir y quedar sujeto a estos Términos y Condiciones de Uso. Si no estás de acuerdo con estos términos, no utilices ni accedas a nuestros servicios.",
    "terms-sec1-title": "1. Licencia de Uso Limitada",
    "terms-sec1-p1": "KeTu Playhouse te concede una licencia personal, limitada, no exclusiva, no transferible, no sublicenciable y revocable para descargar, instalar y utilizar nuestros juegos y servicios únicamente para tu entretenimiento personal y no comercial en dispositivos compatibles de tu propiedad.",
    "terms-sec2-title": "2. Propiedad Intelectual",
    "terms-sec2-p1": "Todos los derechos, títulos e intereses relacionados con nuestros juegos y servicios, incluyendo el código fuente, gráficos, diseños, música, efectos de sonido, personajes, diálogos, nombres, logotipos y marcas comerciales, son propiedad exclusiva de <strong>KeTu Playhouse</strong>. Está prohibida la copia, reproducción o distribución no autorizada de cualquier recurso de nuestra propiedad.",
    "terms-sec3-title": "3. Restricciones y Código de Conducta",
    "terms-sec3-p1": "Al utilizar nuestros servicios, te comprometes a no realizar ni intentar realizar las siguientes acciones:",
    "terms-sec3-li1": "Modificar, descompilar, realizar ingeniería inversa, desensamblar o intentar extraer el código fuente de los juegos o servicios.",
    "terms-sec3-li2": "Utilizar trampas (cheats), automatizaciones (bots), hacks, mods o cualquier software de terceros no autorizado para alterar o influir en la experiencia de juego.",
    "terms-sec3-li3": "Utilizar lenguaje ofensivo, abusivo, acosador o inapropiado en nuestros canales de comunidad oficial (como Discord) o sistemas de nombres en el juego.",
    "terms-sec4-title": "4. Cuentas de Usuario y KeTu ID",
    "terms-sec4-p1": "En futuras actualizaciones, es posible que puedas crear una cuenta de usuario o utilizar un identificador global (KeTu ID) para guardar tu progreso en línea. Eres el único responsable de mantener la seguridad y confidencialidad de tus credenciales de acceso. KeTu Playhouse no se hace responsable de pérdidas resultantes del acceso no autorizado a tu cuenta.",
    "terms-sec5-title": "5. Compras Integradas y Moneda Virtual",
    "terms-sec5-p1": "Nuestros juegos pueden incluir compras dentro de la aplicación (in-app purchases) utilizando dinero real para adquirir monedas virtuales, cosméticos u objetos digitales. Todas las transacciones son procesadas de forma segura por la tienda de aplicaciones correspondiente (como Google Play Store).",
    "terms-sec5-p2": "Todos los artículos y monedas virtuales son licencias de uso digital intangibles, no tienen valor monetario en el mundo real y no son transferibles ni canjeables por dinero real. A menos que lo exija la ley local o las políticas de la tienda de aplicaciones, todas las compras son definitivas y no reembolsables.",
    "terms-sec6-title": "6. Anuncios y Servicios de Terceros",
    "terms-sec6-p1": "Nuestros juegos gratuitos pueden contener publicidad integrada gestionada a través de Google AdMob. Estos anuncios pueden interactuar con tu dispositivo según se detalla en nuestra Política de Privacidad. KeTu Playhouse no respalda ni se hace responsable del contenido, productos o servicios ofrecidos por anunciantes externos.",
    "terms-sec7-title": "7. Limitación de Responsabilidad",
    "terms-sec7-p1": "Nuestros juegos y servicios se proporcionan 'tal cual' y 'según disponibilidad'. En modos de juego sin conexión (offline), tu progreso se almacena localmente en tu dispositivo. KeTu Playhouse no se hace responsable de la pérdida de progreso, datos o compras si desinstalas la aplicación, borras la memoria caché, formateas tu dispositivo o si este sufre fallos de hardware.",
    "terms-sec8-title": "8. Soporte Técnico y Contacto",
    "terms-sec8-p1": "Para consultas legales, informes de fallos (bugs), comentarios o solicitudes de soporte técnico, puedes escribirnos directamente a nuestro correo oficial de atención al cliente:",


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
    "newsletter-btn": "Suscribirse"
  },
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-games": "Games",
    "nav-devlog": "Devlog",
    "nav-about": "About Us",
    "nav-support": "Support",

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
    "footer-copy": "© 2026 KeTu Playhouse. All rights reserved.",

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

    // Terms and Conditions Page specific strings (en)
    "link-terms": "Terms of Use",
    "terms-header": "Terms and Conditions of Use",
    "terms-last-updated": "Last updated: June 15, 2026",
    "terms-intro": "By accessing, downloading, installing, or using the video games (including <strong>Keyboard Escape: Speed Up</strong>), websites, community servers (such as Discord), and services of <strong>KeTu Playhouse</strong>, you agree to comply with and be bound by these Terms and Conditions of Use. If you do not agree to these terms, please do not use or access our services.",
    "terms-sec1-title": "1. Limited License",
    "terms-sec1-p1": "KeTu Playhouse grants you a personal, limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to download, install, and use our games and services solely for your personal, non-commercial entertainment on compatible devices owned by you.",
    "terms-sec2-title": "2. Intellectual Property",
    "terms-sec2-p1": "All rights, titles, and interests related to our games and services, including source code, graphics, designs, music, sound effects, characters, dialogues, names, logos, and trademarks, are the exclusive property of <strong>KeTu Playhouse</strong>. Unauthorized copying, reproduction, or distribution of any of our resources is strictly prohibited.",
    "terms-sec3-title": "3. Restrictions and Code of Conduct",
    "terms-sec3-p1": "When using our services, you agree not to perform or attempt to perform any of the following actions:",
    "terms-sec3-li1": "Modify, decompile, reverse engineer, disassemble, or attempt to extract the source code of the games or services.",
    "terms-sec3-li2": "Use cheats, bots, hacks, mods, or any unauthorized third-party software to alter or influence the gaming experience.",
    "terms-sec3-li3": "Use offensive, abusive, harassing, or inappropriate language in our official community channels (such as Discord) or in-game naming systems.",
    "terms-sec4-title": "4. User Accounts and KeTu ID",
    "terms-sec4-p1": "In future updates, you may be able to create a user account or use a global identifier (KeTu ID) to save your progress online. You are solely responsible for maintaining the security and confidentiality of your login credentials. KeTu Playhouse is not responsible for any losses resulting from unauthorized access to your account.",
    "terms-sec5-title": "5. In-App Purchases and Virtual Currency",
    "terms-sec5-p1": "Our games may include in-app purchases using real money to acquire virtual currency, cosmetics, or digital items. All transactions are securely processed by the corresponding application store (such as Google Play Store).",
    "terms-sec5-p2": "All virtual items and currencies are intangible digital licenses, have no real-world monetary value, and are non-transferable and non-exchangeable for real money. Unless required by local law or application store policies, all purchases are final and non-refundable.",
    "terms-sec6-title": "6. Advertisements and Third-Party Services",
    "terms-sec6-p1": "Our free games may contain integrated advertising managed through Google AdMob. These advertisements may interact with your device as detailed in our Privacy Policy. KeTu Playhouse does not endorse and is not responsible for the content, products, or services offered by external advertisers.",
    "terms-sec7-title": "7. Limitation of Liability",
    "terms-sec7-p1": "Our games and services are provided 'as is' and 'as available'. In offline game modes, your progress is stored locally on your device. KeTu Playhouse is not responsible for the loss of progress, data, or purchases if you uninstall the application, clear the cache, format your device, or if your device suffers a hardware failure.",
    "terms-sec8-title": "8. Technical Support and Contact",
    "terms-sec8-p1": "For legal inquiries, bug reports, feedback, or technical support requests, you can write to us directly at our official customer support email:",


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
    "newsletter-btn": "Subscribe"
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
