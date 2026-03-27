/* ══════════════════════════════════════
   SAHIAM ESTEBAN — PORTAFOLIO
   script.js — Interactividad & i18n
══════════════════════════════════════ */

/* ── CORTINA (INTRO) ── */
(function () {
  const intro       = document.getElementById('intro');
  const mainContent = document.getElementById('main-content');
  if (!intro || !mainContent) return;

  let opened = false;

  function openCurtain() {
    if (opened) return;
    opened = true;

    // Fase 1: fade-out del texto
    const content = intro.querySelector('.intro-content');
    if (content) {
      content.style.transition = 'opacity 0.5s ease';
      content.style.opacity    = '0';
    }

    // Fase 2: abrir cortinas
    setTimeout(() => intro.classList.add('open'), 500);

    // Fase 3: mostrar contenido principal
    setTimeout(() => {
      intro.style.display     = 'none';
      intro.style.pointerEvents = 'none';
      mainContent.classList.add('show');
    }, 1950);
  }

  window.addEventListener('wheel',      openCurtain, { once: true });
  window.addEventListener('touchstart', openCurtain, { once: true });
  window.addEventListener('keydown', function handler(e) {
    if (['Space','ArrowDown','Enter'].includes(e.code)) {
      openCurtain();
      window.removeEventListener('keydown', handler);
    }
  });
  intro.addEventListener('click', openCurtain);
})();

/* ── CORTINA ── */
(function () {
  const intro   = document.getElementById('intro');
  const main    = document.getElementById('main-content');
  const content = intro ? intro.querySelector('.intro-content') : null;
  let opened = false;

  function openCurtain() {
    if (opened || !intro) return;
    opened = true;

    // Fase 1: desvanece el texto
    if (content) {
      content.style.transition = 'opacity 0.5s ease';
      content.style.opacity    = '0';
    }

    // Fase 2: abre las cortinas
    setTimeout(() => intro.classList.add('open'), 500);

    // Fase 3: muestra el contenido y quita el intro
    setTimeout(() => {
      intro.style.display = 'none';
      if (main) main.classList.add('show');
    }, 1950);
  }

  if (intro) {
    window.addEventListener('wheel',      openCurtain, { once: true });
    window.addEventListener('touchstart', openCurtain, { once: true });
    window.addEventListener('keydown', e => {
      if (['Space','ArrowDown','Enter'].includes(e.code)) openCurtain();
    }, { once: true });
    intro.addEventListener('click', openCurtain);
  }
})();

/* ── TRANSLATIONS ── */
const translations = {
  es: {
    "nav.about":        "Sobre mí",
    "nav.offer":        "Qué ofrezco",
    "nav.projects":     "Proyectos",
    "nav.mission":      "Misión",
    "nav.contact":      "Contacto",

    "hero.greeting":    "Hola, soy",
    "hero.role":        "Desarrolladora de Software",
    "hero.tagline":     "Creo soluciones que generan impacto.",
    "hero.cta.projects": "Ver mis proyectos",
    "hero.cta.contact":  "Contáctame",
    "hero.scroll":       "Explorar",
    "avatar.badge":      "Disponible",

    "about.tag":    "Quién soy",
    "about.title":  "Más que código,<br>una historia de reinvención",
    "about.p1":     "Soy una persona comprometida, persistente y con una mentalidad de crecimiento constante. Mi camino profesional no comenzó en la tecnología, pero tomé la decisión de reinventarme y enfocarme en el desarrollo de software.",
    "about.p2":     "Esa valentía para asumir cambios me da una perspectiva única: entiendo lo que significa aprender desde cero, adaptarme a nuevos entornos y construir con determinación.",
    "about.story_btn": "Conoce mi historia profesional →",
    "about.v1.title": "Adaptabilidad",
    "about.v1.desc":  "Me ajusto rápidamente a nuevos entornos, herramientas y equipos.",
    "about.v2.title": "Disciplina",
    "about.v2.desc":  "Enfrento desafíos con responsabilidad y determinación constante.",
    "about.v3.title": "Aprendizaje",
    "about.v3.desc":  "Siempre en actualización para aportar mayor valor a los proyectos.",
    "about.tech":      "Tecnologías que manejo",

    "offer.tag":    "Qué ofrezco",
    "offer.title":  "Lo que puedo hacer<br>por tu equipo",
    "offer.s1.title": "Desarrollo",
    "offer.s1.desc":  "Creación de soluciones funcionales y aplicaciones enfocadas en resolver necesidades reales.",
    "offer.s2.title": "Bases de datos",
    "offer.s2.desc":  "Diseño y gestión de bases de datos para organizar y optimizar la información.",
    "offer.s3.title": "Software y lógica",
    "offer.s3.desc":  "Resolución de problemas mediante lógica de programación y desarrollo eficiente.",
    "offer.s4.title": "Trabajo en equipo",
    "offer.s4.desc":  "Colaboración efectiva en entornos de desarrollo, aportando soluciones y aprendizaje constante.",

    "projects.tag":   "Proyectos",
    "projects.title": "Mi trabajo en acción",
    "proj1.title":    "Sistema de Gestión Inmobiliaria",
    "proj1.desc":     "Base de datos relacional para gestionar el portafolio de propiedades, clientes, contratos y pagos de una inmobiliaria. Diseñada con seguridad por roles, automatización mediante triggers y eventos, y optimización mediante índices y particionamiento.",
    "proj2.title":    "Proyecto de Desarrollo de un LMS",
    "proj2.desc":     "Plataforma educativa que permite gestionar docentes, cursos, módulos, lecciones y administrativos. Los datos se almacenan en localStorage, sin necesidad de servidor.",
    "proj3.title":    "Sistema de Gestión de Cuentas Bancarias",
    "proj3.desc":     "Este proyecto implementa un sistema de gestión de cuentas bancarias en Python, con almacenamiento de datos en formato JSON. Permite crear cuentas, realizar depósitos, retiros, solicitar créditos, pagar cuotas y cancelar productos o cuentas completas.",
    "proj.live":      "Ver proyecto →",

    "mission.tag":   "Propósito",
    "mission.title": "Misión & Visión",
    "mission.m.title": "Misión",
    "mission.m.text":  "Crear soluciones tecnológicas que aporten valor real a las organizaciones. Crecer constantemente mientras genero impacto positivo en los equipos con los que trabajo, aplicando disciplina, adaptabilidad y compromiso.",
    "mission.v.title": "Visión",
    "mission.v.text":  "Consolidarme como desarrolladora destacada en una empresa referente del sector tecnológico, asumir responsabilidades crecientes y contribuir a construir entornos de trabajo basados en colaboración, respeto y crecimiento profesional.",
    "mission.diff.label": "Lo que me diferencia",
    "mission.diff.1": "Valentía para reinventarme",
    "mission.diff.2": "Mentalidad de crecimiento",
    "mission.diff.3": "Disciplina constante",
    "mission.diff.4": "Compromiso real",

    "contact.tag":    "Contacto",
    "contact.title":  "Hablemos",
    "contact.subtitle": "¿Buscas una desarrolladora comprometida y con ganas de crecer? Estoy disponible.",
    "contact.email.label": "Correo",
    "contact.cv.label": "Hoja de vida",
    "contact.cv.value": "Ver CV",

    "footer.copy": "© 2026 Sahiam Valentina Esteban. Diseñado y desarrollado con 🩶"
  },

  en: {
    "nav.about":        "About me",
    "nav.offer":        "What I offer",
    "nav.projects":     "Projects",
    "nav.mission":      "Mission",
    "nav.contact":      "Contact",

    "hero.greeting":    "Hi, I'm",
    "hero.role":        "Software Developer",
    "hero.tagline":     "I build solutions that create impact.",
    "hero.cta.projects": "See my projects",
    "hero.cta.contact":  "Contact me",
    "hero.scroll":       "Explore",
    "avatar.badge":      "Available",

    "about.tag":    "Who I am",
    "about.title":  "More than code,<br>a story of reinvention",
    "about.p1":     "I'm a committed, persistent person with a constant growth mindset. My professional path didn't start in technology, but I made the decision to reinvent myself and focus on software development.",
    "about.p2":     "That courage to embrace change gives me a unique perspective: I understand what it means to learn from scratch, adapt to new environments, and build with determination.",
    "about.story_btn": "Discover my professional story →",
    "about.v1.title": "Adaptability",
    "about.v1.desc":  "I adjust quickly to new environments, tools, and teams.",
    "about.v2.title": "Discipline",
    "about.v2.desc":  "I face challenges with responsibility and constant determination.",
    "about.v3.title": "Learning",
    "about.v3.desc":  "Always updating my skills to bring greater value to projects.",
    "about.tech":      "Technologies I work with",

    "offer.tag":    "What I offer",
    "offer.title":  "What I can do<br>for your team",
    "offer.s1.title": "Development",
    "offer.s1.desc":  "Creation of functional solutions and applications focused on solving real needs.",
    "offer.s2.title": "Databases",
    "offer.s2.desc":  "Design and management of databases to organize and optimize information.",
    "offer.s3.title": "Software and Logic",
    "offer.s3.desc":  "Problem solving through programming logic and efficient development.",
    "offer.s4.title": "Teamwork",
    "offer.s4.desc":  "Effective collaboration in development environments, contributing solutions and continuous learning.",

    "projects.tag":   "Projects",
    "projects.title": "My work in action",
    "proj1.title":    "Real Estate Management System",
    "proj1.desc":     "Relational database designed to manage a real estate portfolio, including properties, clients, contracts, and payments. Built with role-based security, automation through triggers and events, and optimized using indexes and partitioning.",
    "proj2.title":    "LMS Development Project",
    "proj2.desc":     "Educational platform that allows management of teachers, courses, modules, lessons, and administrators. Data is stored in localStorage, without the need for a server.",
    "proj3.title":    "Bank Account Management System",
    "proj3.desc":     "This project implements a bank account management system in Python, with data stored in JSON format. It allows creating accounts, making deposits and withdrawals, requesting loans, paying installments, and canceling products or entire accounts.",
    "proj.live":      "View project →",

    "mission.tag":   "Purpose",
    "mission.title": "Mission & Vision",
    "mission.m.title": "Mission",
    "mission.m.text":  "Create technological solutions that bring real value to organizations. Grow constantly while generating a positive impact on the teams I work with, applying discipline, adaptability and commitment.",
    "mission.v.title": "Vision",
    "mission.v.text":  "Establish myself as a leading developer in a recognized company in the tech sector, take on growing responsibilities and contribute to building work environments based on collaboration, respect and professional growth.",
    "mission.diff.label": "What sets me apart",
    "mission.diff.1": "Courage to reinvent myself",
    "mission.diff.2": "Growth mindset",
    "mission.diff.3": "Constant discipline",
    "mission.diff.4": "Real commitment",

    "contact.tag":    "Contact",
    "contact.title":  "Let's talk",
    "contact.subtitle": "Looking for a committed developer eager to grow? I'm available.",
    "contact.email.label": "Email",
    "contact.cv.label": "Resume",
    "contact.cv.value": "View CV",

    "footer.copy": "© 2026 Sahiam Valentina Esteban. Designed & developed with 🩶"
  }
};

/* ── STATE ── */
let currentLang = localStorage.getItem('sve-lang') || 'es';

/* ── TRANSLATE ── */
function applyTranslations(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (key.includes('title') || key.includes('tagline') || key.includes('p1') || key.includes('p2')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update page title & meta
  document.title = lang === 'es'
    ? 'Sahiam Esteban | Desarrolladora de Software'
    : 'Sahiam Esteban | Software Developer';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = lang === 'es'
      ? 'Sahiam Valentina Esteban — Desarrolladora de Software. Creo soluciones tecnológicas eficientes con HTML, CSS y JavaScript.'
      : 'Sahiam Valentina Esteban — Software Developer. I build efficient tech solutions with HTML, CSS and JavaScript.';
  }

  // Update lang toggle UI
  document.querySelector('.lang-es').classList.toggle('active', lang === 'es');
  document.querySelector('.lang-en').classList.toggle('active', lang === 'en');

  localStorage.setItem('sve-lang', lang);
  currentLang = lang;
}

/* ── NAV MOBILE ── */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }
  });
}

/* ── ACTIVE NAV LINK on scroll ── */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── LANG TOGGLE ── */
function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = currentLang === 'es' ? 'en' : 'es';
    applyTranslations(next);
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  // AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    });
  }

  initNav();
  initScrollSpy();
  initLangToggle();
  applyTranslations(currentLang);

  console.log('%c💚 SVE Portfolio cargado', 'color:#4ade80;font-weight:bold;font-size:14px');
});