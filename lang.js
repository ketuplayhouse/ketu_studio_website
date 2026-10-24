// Centralized Language & Studio Controller for KeTu Playhouse
const translations = {
  es: {
    // Navigation
    "nav-home": "Inicio",
    "nav-support": "Soporte",
    "nav-about": "Sobre Nosotros",
    "back-btn-text": "← Volver al Inicio",
    "hub-sr-h1": "KeTu Playhouse - Estudio Independiente de Videojuegos Móviles (Keyboard Escape: Speed Up & EGO BALL)",

    // 404 Page
    "err404-title": "Nivel No Encontrado",
    "err404-subtitle": "Te saliste del teclado a demasiada velocidad",
    "err404-desc": "La página o ruta que buscas no existe o fue movida. Regresa a la vitrina principal de KeTu Playhouse para seguir jugando.",
    "err404-btn": "Volver a la Vitrina de Juegos",
    "err404-esc-hint": "Presiona ESC o ENTER para escapar al inicio",

    // Games Data
    "game1-tag": "PUBLICADO EN GOOGLE PLAY",
    "game1-title": "Keyboard Escape: Speed Up",
    "game1-trailer-btn": "Ver Tráiler Oficial",
    "badge-alt": "Disponible en Google Play",

    "game2-tag": "EN DESARROLLO (FASE TEMPRANA)",
    "game2-title": "EGO BALL",
    "game2-discord-btn": "Comunidad de Discord",

    "game3-tag": "PROYECTO NO REVELADO",
    "game3-title": "Próximamente...",
    "game3-discord-btn": "Comunidad de Discord",

    // About Us Page
    "about-page-title": "Sobre KeTu Playhouse",
    "about-page-subtitle": "Estudio Independiente de Videojuegos Móviles",
    "about-page-p1": "En <strong>KeTu Playhouse</strong>, nacimos con la visión de diseñar experiencias móviles independientes que sean ultrarrápidas, dinámicas y adictivas directamente en la palma de tu mano.",
    "about-page-h2-1": "Nuestra Filosofía",
    "about-page-p2": "Creemos en el gameplay ágil, en controles pulidos al milisegundo y en estéticas visuales vibrantes (Candy Neón, Synthwave y Anime). Queremos que cada segundo que pases en nuestros juegos sea electrizante.",
    "about-page-h2-2": "Nuestros Proyectos",
    "about-proj-1": "<strong style='color:var(--ketu-blue)'>Keyboard Escape: Speed Up:</strong> Nuestro primer título publicado en Google Play Store. Un juego arcade contra el reloj donde debes escapar de un teclado cibernético a velocidad extrema.",
    "about-proj-2": "<strong style='color:var(--ketu-pink)'>EGO BALL:</strong> Actualmente en etapa temprana de prototipado en Unity 3D. Una arena multijugador arcade de deflexión de pelota con espadas coleccionables y auras neón.",
    "about-page-h2-3": "Contacto & Soporte",
    "about-page-p3": "Si deseas reportar un error, hacernos consultas o enviarnos tus comentarios, escríbenos directamente a nuestro correo oficial de soporte:",

    // Privacy Policy
    "privacy-header": "Política de Privacidad",
    "privacy-last-updated": "Última actualización: 21 de Octubre, 2026",
    "privacy-intro": "En <strong>KeTu Playhouse</strong>, valoramos tu privacidad. Esta Política de Privacidad explica cómo se recopila, utiliza y divulga la información cuando utilizas nuestro juego móvil <strong>Keyboard Escape: Speed Up</strong> y cualquier otro servicio relacionado.",
    "privacy-sec1-title": "1. Recopilación de Información",
    "privacy-sec1-p1": "Nuestras aplicaciones están diseñadas para no recopilar información de identificación personal directamente de los usuarios. No solicitamos registros de cuentas, nombres, correos electrónicos ni números de teléfono para jugar.",
    "privacy-sec1-p2": "Sin embargo, para monetizar y mantener nuestros servicios gratuitos, integramos herramientas de terceros que sí recopilan información técnica de manera automática.",
    "privacy-sec2-title": "2. Servicios de Terceros (Publicidad y Monetización)",
    "privacy-sec2-p1": "Este juego utiliza plataformas de publicidad móvil e integrada en el juego (In-Play™), incluyendo <strong>Google AdMob</strong>, <strong>Adverty AB (publ)</strong>, <strong>Odeeo</strong> y socios de demanda programática certificados, para mostrar anuncios. Estos proveedores pueden recopilar y procesar información técnica de forma automática, entre otros:",
    "privacy-sec2-li1": "Identificadores únicos de publicidad del dispositivo (como el ID de publicidad de Google / GAID o el IDFA de Apple).",
    "privacy-sec2-li2": "Datos técnicos sobre el dispositivo (fabricante, modelo, sistema operativo, idioma y resolución de pantalla).",
    "privacy-sec2-li3": "Datos sobre la interacción y visibilidad de los anuncios (clics, impresiones, tiempo en pantalla y métricas de visualización de vallas integradas en el entorno 3D).",
    "privacy-sec2-li4": "Información de diagnóstico del sistema (informes de fallos o crash logs, rendimiento de la app y uso de memoria).",
    "privacy-sec2-li5": "Ubicación aproximada (a nivel de ciudad o país) derivada de la dirección IP.",
    "privacy-sec2-p2": "Puedes consultar las políticas de privacidad oficiales de nuestros principales socios publicitarios en los siguientes enlaces: <a href='https://policies.google.com/technologies/ads' target='_blank' rel='noopener noreferrer'>Políticas de Publicidad de Google</a> y <a href='https://adverty.com/privacy-policy/' target='_blank' rel='noopener noreferrer'>Política de Privacidad de Adverty AB (publ)</a>.",
    "privacy-sec3-title": "3. Uso de la Información",
    "privacy-sec3-p1": "La información técnica recopilada automáticamente se utiliza únicamente para:",
    "privacy-sec3-li1": "Mostrar anuncios personalizados o contextuales (incluyendo vallas In-Play™ dentro de la partida) según tu consentimiento y configuración.",
    "privacy-sec3-li2": "Prevenir fraudes y actividades maliciosas dentro del sistema de publicidad.",
    "privacy-sec3-li3": "Medir la visibilidad y analizar el rendimiento de las campañas publicitarias.",
    "privacy-sec3-li4": "Diagnosticar problemas técnicos, corregir fallos del sistema y optimizar la experiencia de juego.",
    "privacy-sec4-title": "4. Consentimiento Europeo (RGPD / IAB TCF) y Opciones de Privacidad",
    "privacy-sec4-p0": "Si te encuentras en el <strong>Espacio Económico Europeo (EEE), el Reino Unido o Suiza</strong>, cumplimos con el Reglamento General de Protección de Datos (RGPD) utilizando una Plataforma de Gestión del Consentimiento (CMP) certificada por Google bajo el marco <strong>IAB Europe Transparency &amp; Consent Framework (TCF v2.2)</strong>. Al iniciar el juego, se te presentará un formulario donde podrás otorgar, personalizar o rechazar el consentimiento para el tratamiento de tus datos por parte de nuestros socios (incluidos Google AdMob y Adverty AB, ID IAB: 822). Tus preferencias se transmiten mediante la cadena oficial de consentimiento (TC String) y tienes derecho a acceder, rectificar, suprimir tus datos o retirar tu consentimiento en cualquier momento.",
    "privacy-sec4-p1": "Además, si deseas limitar la publicidad personalizada a nivel de sistema en tu dispositivo móvil, puedes ajustar la configuración de tu teléfono:",
    "privacy-sec4-li1": "<strong>En Android:</strong> Abre Ajustes > Privacidad > Anuncios y selecciona 'Restablecer ID de publicidad' o 'Borrar ID de publicidad'.",
    "privacy-sec4-li2": "<strong>En iOS:</strong> Ve a Ajustes > Privacidad y seguridad > Rastreo y desactiva la opción de permitir que las aplicaciones soliciten rastrearte.",
    "privacy-sec5-title": "5. Privacidad de los Niños",
    "privacy-sec5-p1": "Nuestros juegos no están dirigidos intencionalmente a niños menores de 13 años. No recopilamos conscientemente información personal de niños. Si eres padre o tutor y crees que hemos recopilado información sin tu consentimiento, por favor contáctanos de inmediato.",
    "privacy-sec6-title": "6. Cambios en esta Política",
    "privacy-sec6-p1": "Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.",
    "privacy-sec7-title": "7. Contacto",
    "privacy-sec7-p1": "Si tienes alguna pregunta sobre esta Política de Privacidad o el tratamiento de tus datos, puedes ponerte en contacto con nosotros a través del correo electrónico:",

    // Terms of Service
    "terms-header": "Términos y Condiciones de Uso",
    "terms-last-updated": "Última actualización: 21 de Octubre, 2026",
    "terms-intro": "Al acceder, descargar, instalar o utilizar los videojuegos (incluyendo <strong>Keyboard Escape: Speed Up</strong>), sitios web, servidores de comunidad (como Discord) y servicios de <strong>KeTu Playhouse</strong>, aceptas cumplir y quedar sujeto a estos Términos y Condiciones de Uso.",
    "terms-sec1-title": "1. Licencia de Uso Limitada",
    "terms-sec1-p1": "KeTu Playhouse te concede una licencia personal, limitada, no exclusiva, no transferible, no sublicenciable y revocable para descargar, instalar y utilizar nuestros juegos y servicios únicamente para tu entretenimiento personal.",
    "terms-sec2-title": "2. Propiedad Intelectual",
    "terms-sec2-p1": "Todos los derechos, títulos e intereses relacionados con nuestros juegos y servicios, incluyendo código fuente, gráficos, música, personajes y logotipos, son propiedad exclusiva de <strong>KeTu Playhouse</strong>.",
    "terms-sec3-title": "3. Restricciones y Código de Conducta",
    "terms-sec3-p1": "Al utilizar nuestros servicios, te comprometes a no realizar ni intentar realizar las siguientes acciones:",
    "terms-sec3-li1": "Modificar, descompilar, realizar ingeniería inversa o desensamblar el código fuente.",
    "terms-sec3-li2": "Utilizar trampas (cheats), bots, hacks o software de terceros no autorizado.",
    "terms-sec3-li3": "Utilizar lenguaje ofensivo, abusivo o acosador en nuestros canales de comunidad oficial.",
    "terms-sec4-title": "4. Cuentas de Usuario y KeTu ID",
    "terms-sec4-p1": "En futuras actualizaciones, es posible que puedas crear una cuenta de usuario o utilizar un KeTu ID para guardar tu progreso en línea.",
    "terms-sec5-title": "5. Compras Integradas y Moneda Virtual",
    "terms-sec5-p1": "Nuestros juegos pueden incluir compras dentro de la aplicación procesadas de forma segura por la tienda correspondiente (como Google Play Store).",
    "terms-sec5-p2": "Todas las compras son licencias de uso digital intangibles sin valor en el mundo real y no son reembolsables salvo mandato de ley.",
    "terms-sec6-title": "6. Anuncios y Servicios de Terceros",
    "terms-sec6-p1": "Nuestros juegos gratuitos pueden contener publicidad tradicional e integrada en la partida (In-Play™) gestionada a través de Google AdMob, Adverty AB (publ), Odeeo y socios publicitarios certificados. No nos hacemos responsables del contenido de los anuncios de terceros ni de los sitios o productos que promocionen.",
    "terms-sec7-title": "7. Limitación de Responsabilidad",
    "terms-sec7-p1": "Nuestros juegos y servicios se proporcionan 'tal cual'. KeTu Playhouse no se hace responsable de la pérdida de datos por desinstalación o fallos de hardware.",
    "terms-sec8-title": "8. Soporte Técnico y Contacto",
    "terms-sec8-p1": "Para consultas legales, informes de fallos o soporte técnico, contáctanos a:",

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
    "hub-sr-h1": "KeTu Playhouse - Indie Mobile Game Development Studio (Keyboard Escape: Speed Up & EGO BALL)",

    // 404 Page
    "err404-title": "Stage Not Found",
    "err404-subtitle": "You went off-keyboard at extreme speed",
    "err404-desc": "The page or route you are looking for doesn't exist or has been moved. Return to the main KeTu Playhouse showcase to keep playing.",
    "err404-btn": "Back to Game Showcase",
    "err404-esc-hint": "Press ESC or ENTER to escape back home",

    // Games Data
    "game1-tag": "PUBLISHED ON GOOGLE PLAY",
    "game1-title": "Keyboard Escape: Speed Up",
    "game1-trailer-btn": "Watch Official Trailer",
    "badge-alt": "Get it on Google Play",

    "game2-tag": "IN EARLY DEVELOPMENT",
    "game2-title": "EGO BALL",
    "game2-discord-btn": "Discord Community",

    "game3-tag": "UNANNOUNCED PROJECT",
    "game3-title": "Coming Soon...",
    "game3-discord-btn": "Discord Community",

    // About Us Page
    "about-page-title": "About KeTu Playhouse",
    "about-page-subtitle": "Indie Mobile Game Development Studio",
    "about-page-p1": "At <strong>KeTu Playhouse</strong>, we were born with the vision of crafting indie mobile gaming experiences that are ultra-fast, dynamic, and endlessly engaging right in the palm of your hand.",
    "about-page-h2-1": "Our Philosophy",
    "about-page-p2": "We believe in agile gameplay, controls tuned to the millisecond, and vibrant visual aesthetics (Candy Neon, Synthwave, and Anime). We want every second you spend in our games to be truly electrifying.",
    "about-page-h2-2": "Our Projects",
    "about-proj-1": "<strong style='color:var(--ketu-blue)'>Keyboard Escape: Speed Up:</strong> Our debut title published on Google Play Store. A high-speed arcade runner where every second increases your speed across a cybernetic keyboard.",
    "about-proj-2": "<strong style='color:var(--ketu-pink)'>EGO BALL:</strong> Currently in early 3D prototyping in Unity. A fast-paced multiplayer deflection arena featuring collectible blades and neon anime auras.",
    "about-page-h2-3": "Contact & Support",
    "about-page-p3": "If you want to report a bug, ask questions, or send us your feedback, write directly to our official support email:",

    // Privacy Policy
    "privacy-header": "Privacy Policy",
    "privacy-last-updated": "Last updated: October 21, 2026",
    "privacy-intro": "At <strong>KeTu Playhouse</strong>, we value your privacy. This Privacy Policy explains how information is collected, used, and disclosed when you use our mobile game <strong>Keyboard Escape: Speed Up</strong> and any related services.",
    "privacy-sec1-title": "1. Information Collection",
    "privacy-sec1-p1": "Our applications are designed not to collect personally identifiable information directly from users. We do not require account registration, names, email addresses, or phone numbers to play.",
    "privacy-sec1-p2": "However, to monetize and keep our services free, we integrate third-party services that automatically collect technical data.",
    "privacy-sec2-title": "2. Third-Party Services (Advertising & Monetization)",
    "privacy-sec2-p1": "This game integrates mobile and in-game (In-Play™) advertising platforms, including <strong>Google AdMob</strong>, <strong>Adverty AB (publ)</strong>, <strong>Odeeo</strong>, and certified programmatic demand partners, to display advertisements. These providers may automatically collect and process technical information, including:",
    "privacy-sec2-li1": "Unique device advertising identifiers (such as Google Advertising ID / GAID or Apple IDFA).",
    "privacy-sec2-li2": "Device technical data (manufacturer, model, operating system version, language, and screen resolution).",
    "privacy-sec2-li3": "Ad interaction and viewability data (clicks, impressions, screen time, and 3D in-game billboard visibility metrics).",
    "privacy-sec2-li4": "System diagnostic information (crash logs, app performance metrics, and memory usage).",
    "privacy-sec2-li5": "Approximate location (city or country level) derived from IP address.",
    "privacy-sec2-p2": "You can review the official privacy policies of our primary advertising partners at: <a href='https://policies.google.com/technologies/ads' target='_blank' rel='noopener noreferrer'>Google Advertising Policies</a> and <a href='https://adverty.com/privacy-policy/' target='_blank' rel='noopener noreferrer'>Adverty AB (publ) Privacy Policy</a>.",
    "privacy-sec3-title": "3. Use of Information",
    "privacy-sec3-p1": "The automatically collected technical data is solely used to:",
    "privacy-sec3-li1": "Deliver personalized or contextual advertisements (including in-game In-Play™ placements) in accordance with your consent and settings.",
    "privacy-sec3-li2": "Detect and prevent fraud and malicious activity within the advertising ecosystem.",
    "privacy-sec3-li3": "Measure ad viewability and analyze the performance of ad campaigns.",
    "privacy-sec3-li4": "Diagnose technical issues, resolve system crashes, and optimize game performance.",
    "privacy-sec4-title": "4. European Consent (GDPR / IAB TCF) & User Privacy Choices",
    "privacy-sec4-p0": "If you are located in the <strong>European Economic Area (EEA), the United Kingdom, or Switzerland</strong>, we comply with the General Data Protection Regulation (GDPR) using a Google-certified Consent Management Platform (CMP) integrated with the <strong>IAB Europe Transparency &amp; Consent Framework (TCF v2.2)</strong>. Upon launching the game, you will be presented with a consent dialog where you can grant, customize, or decline consent for data processing by our advertising partners (including Google AdMob and Adverty AB, IAB Vendor ID: 822). Your preferences are communicated via the standardized TC String, and you have the right to access, rectify, erase your data, or withdraw your consent at any time.",
    "privacy-sec4-p1": "Additionally, if you wish to limit personalized ads at the system level on your mobile device, you can configure your settings:",
    "privacy-sec4-li1": "<strong>On Android:</strong> Open Settings > Privacy > Ads and select 'Reset advertising ID' or 'Delete advertising ID'.",
    "privacy-sec4-li2": "<strong>On iOS:</strong> Go to Settings > Privacy & Security > Tracking and disable allow apps to request to track.",
    "privacy-sec5-title": "5. Children's Privacy",
    "privacy-sec5-p1": "Our games are not intentionally directed to children under 13. We do not knowingly collect personal information from children. If you believe your child has provided us with personal information, please contact us immediately.",
    "privacy-sec6-title": "6. Policy Changes",
    "privacy-sec6-p1": "We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with the updated revision date.",
    "privacy-sec7-title": "7. Contact Us",
    "privacy-sec7-p1": "If you have any questions regarding this Privacy Policy or our data practices, please reach out to us at:",

    // Terms of Service
    "terms-header": "Terms of Service",
    "terms-last-updated": "Last updated: October 21, 2026",
    "terms-intro": "By accessing, downloading, installing, or using games (including <strong>Keyboard Escape: Speed Up</strong>), websites, community servers (such as Discord), and services operated by <strong>KeTu Playhouse</strong>, you agree to be bound by these Terms of Service.",
    "terms-sec1-title": "1. Limited License",
    "terms-sec1-p1": "KeTu Playhouse grants you a personal, limited, non-exclusive, non-transferable, revocable license to download and play our games solely for personal, non-commercial entertainment.",
    "terms-sec2-title": "2. Intellectual Property",
    "terms-sec2-p1": "All rights, titles, and interests in and to our games and services, including source code, graphics, music, characters, and logos, are the exclusive property of <strong>KeTu Playhouse</strong>.",
    "terms-sec3-title": "3. Prohibited Conduct",
    "terms-sec3-p1": "You agree not to modify, reverse engineer, decompile, distribute cheats, bots, hacks, or engage in abusive behavior in official community channels.",
    "terms-sec4-title": "4. User Accounts & KeTu ID",
    "terms-sec4-p1": "In future updates, you may be able to register a user profile or KeTu ID to store your progress and rankings securely in the cloud.",
    "terms-sec5-title": "5. In-App Purchases & Virtual Currency",
    "terms-sec5-p1": "Our games may offer optional in-app purchases processed through official app stores (such as Google Play). Virtual items hold no real-world monetary value.",
    "terms-sec6-title": "6. Third-Party Services & Ads",
    "terms-sec6-p1": "Our free games may include traditional and in-game (In-Play™) third-party advertising managed via Google AdMob, Adverty AB (publ), Odeeo, and certified advertising partners. We are not responsible for third-party ad content or external products.",
    "terms-sec7-title": "7. Limitation of Liability",
    "terms-sec7-p1": "Our games and services are provided 'as is'. KeTu Playhouse is not responsible for loss of progress or data due to uninstallation or hardware failure.",
    "terms-sec8-title": "8. Technical Support and Contact",
    "terms-sec8-p1": "For legal inquiries, bug reports, or technical support, contact us at:",

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
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(element => {
    const key = element.getAttribute("data-i18n-alt");
    if (dictionary[key] !== undefined) {
      element.setAttribute("alt", dictionary[key]);
    }
  });

  // Update dropdown label if present
  const currentLangLabel = document.getElementById("currentLangLabel");
  if (currentLangLabel) {
    currentLangLabel.textContent = lang === "es" ? "Español" : "English";
  }

  // Update dynamic actions bar if carousel function exists
  if (typeof renderActiveActions === "function" && typeof activeIndex !== "undefined") {
    renderActiveActions(activeIndex);
  }

  // Update page <title> dynamically by current route while keeping unique titles per page
  const path = window.location.pathname.toLowerCase();
  if (path.endsWith("about.html")) {
    document.title = lang === "es" ? "Sobre Nosotros - KeTu Playhouse" : "About Us - KeTu Playhouse";
  } else if (path.endsWith("privacy-policy.html")) {
    document.title = lang === "es" ? "Política de Privacidad - KeTu Playhouse" : "Privacy Policy - KeTu Playhouse";
  } else if (path.endsWith("terms-of-service.html")) {
    document.title = lang === "es" ? "Términos de Uso - KeTu Playhouse" : "Terms of Service - KeTu Playhouse";
  } else if (document.querySelector("[data-i18n='err404-title']")) {
    document.title = lang === "es" ? "404 — Nivel No Encontrado | KeTu Playhouse" : "404 — Stage Not Found | KeTu Playhouse";
  } else {
    document.title = lang === "es"
      ? "KeTu Playhouse - Estudio de Videojuegos Móviles"
      : "KeTu Playhouse - Indie Mobile Game Studio";
  }

  document.documentElement.setAttribute("lang", lang);
}

function changeLanguage(lang) {
  if (lang !== "es" && lang !== "en") return;
  localStorage.setItem("ketu_lang", lang);
  updateContent(lang);

  const menu = document.getElementById("langDropdownMenu");
  const btn = document.getElementById("langDropdownBtn");
  if (menu) menu.classList.remove("show");
  if (btn) btn.setAttribute("aria-expanded", "false");
}

document.addEventListener("DOMContentLoaded", () => {
  // Clean /index.html from browser URL bar automatically for a clean studio URL
  if (window.location.pathname.endsWith("/index.html")) {
    const cleanPath = window.location.pathname.replace(/\/index\.html$/, "/") || "/";
    window.history.replaceState(null, "", cleanPath + window.location.search + window.location.hash);
  }

  let savedLang = localStorage.getItem("ketu_lang");
  if (!savedLang) {
    const browserLang = navigator.language || navigator.userLanguage;
    savedLang = browserLang && browserLang.startsWith("es") ? "es" : "en";
  }
  updateContent(savedLang);
});
