/* =====================================================
   🇭🇹 Haïti 🇭🇹 — Main JavaScript
   ===================================================== */

(function () {
  'use strict';

  /* ── Mobile Navigation Toggle ──────────────────────── */
  function initMobileNav() {
    const toggle = document.querySelector('.navbar__toggle');
    const nav = document.querySelector('.navbar__nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close nav when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Active Nav Link ────────────────────────────────── */
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar__nav a');
    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ── Scroll-reveal animation ─────────────────────────── */
  function initScrollReveal() {
    const elements = document.querySelectorAll(
      '.card, .feature-card, .destination-card, .timeline-card, .person-card, .stat-item, .nation-card, .lwa-preview-card, .lwa-nav-item'
    );

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  /* ── Sticky header shadow on scroll ─────────────────── */
  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10
        ? '0 4px 24px rgba(0,0,0,0.28)'
        : '0 4px 20px rgba(0,0,0,0.2)';
    }, { passive: true });
  }

  /* ── Contact form feedback ───────────────────────────── */
  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('[type="submit"]');
      var original = btn.textContent;
      btn.textContent = '✓ Message Envoyé !';
      btn.disabled = true;
      btn.style.background = '#056835';

      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 3500);
    });
  }

  /* ── Animated counters (stats strip) ────────────────── */
  function animateCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.dataset.count, 10);
        var suffix = el.dataset.suffix || '';
        var duration = 1600;
        var step = Math.ceil(target / (duration / 16));
        var current = 0;

        var timer = setInterval(function () {
          current = Math.min(current + step, target);
          el.textContent = current.toLocaleString() + suffix;
          if (current >= target) clearInterval(timer);
        }, 16);

        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── Search ─────────────────────────────────────────── */
  var SEARCH_INDEX = [
    // Pages principales
    { title: 'Accueil', url: 'index.html', section: '', keywords: 'haïti accueil haiti perle antilles' },
    { title: 'À propos d\'Haïti', url: 'about.html', section: '', keywords: 'haïti culture peuple identité langue créole musique art cuisine' },
    { title: 'Histoire d\'Haïti', url: 'history.html', section: '', keywords: 'histoire haïti révolution indépendance 1804 taïno' },
    { title: 'Tourisme', url: 'tourism.html', section: '', keywords: 'tourisme haïti plages citadelle labadée voyage' },
    { title: 'Vodou Haïtien', url: 'vodou.html', section: '', keywords: 'vodou voodoo haïti religion spiritualité afrique lwa spirits' },
    { title: 'Les Lwa', url: 'lwa.html', section: '', keywords: 'lwa loa esprits vodou haïti spirits dieux' },
    // Vodou sections
    { title: 'Origines Africaines du Vodou', url: 'vodou.html#origines', section: 'Vodou', keywords: 'origines afrique fon yoruba kongo dahomey nigeria vodou esclavage saint-domingue' },
    { title: 'Bondye — Le Créateur', url: 'vodou.html#bondye', section: 'Vodou', keywords: 'bondye dieu créateur suprême vodou cosmologie' },
    { title: 'Les Nations du Vodou', url: 'vodou.html#nations', section: 'Vodou', keywords: 'nations rada petro gede nago ibo kongo vodou' },
    { title: 'Nation Rada', url: 'vodou.html#nations', section: 'Vodou', keywords: 'rada lwa doux bienveillant fon dahomey blanc bleu' },
    { title: 'Nation Petro', url: 'vodou.html#nations', section: 'Vodou', keywords: 'petro lwa ardent feu résistance esclavage rouge noir don pedro' },
    { title: 'Nation Gede', url: 'vodou.html#nations', section: 'Vodou', keywords: 'gede mort cimetière baron samedi gran brigitte ancêtres' },
    { title: 'Nation Nago', url: 'vodou.html#nations', section: 'Vodou', keywords: 'nago yoruba ogou guerrier nigeria' },
    { title: 'Nation Ibo', url: 'vodou.html#nations', section: 'Vodou', keywords: 'ibo igbo mystérieux mélancolique eau résistance' },
    { title: 'Nation Kongo', url: 'vodou.html#nations', section: 'Vodou', keywords: 'kongo simbi magie transformation eau bakongo afrique centrale' },
    { title: 'Cérémonies Vodou', url: 'vodou.html#ceremonies', section: 'Vodou', keywords: 'cérémonies fête kanzo initiation possession transe monte bain rituel' },
    { title: 'Les Vèvè — Symboles Sacrés', url: 'vodou.html#veve', section: 'Vodou', keywords: 'vèvè veve symboles sacrés vodou art géométrie rituel farine' },
    { title: 'Tambours et Musique Sacrée', url: 'vodou.html#musique', section: 'Vodou', keywords: 'tambours musique sacrée rada petro rara danse chants cantiques ason' },
    { title: 'Houngan et Mambo', url: 'vodou.html#pretres', section: 'Vodou', keywords: 'houngan mambo prêtre prêtresse hounfor temple ason initiation guérisseur' },
    { title: 'Bwa Kayiman — La Révolution', url: 'vodou.html#origines', section: 'Vodou', keywords: 'bwa kayiman boukman révolution 1791 liberté cérémonie' },
    // Lwa individuels
    { title: 'Papa Legba', url: 'lwa.html#legba', section: 'Les Lwa', keywords: 'legba papa carrefour portes communications saint pierre rada bâton vieux' },
    { title: 'Damballah Wedo', url: 'lwa.html#damballah', section: 'Les Lwa', keywords: 'damballah wedo serpent céleste blanc pureté sagesse père rada saint patrick' },
    { title: 'Ayida Wedo', url: 'lwa.html#ayida', section: 'Les Lwa', keywords: 'ayida wedo arc-en-ciel épouse damballah ciel pureté fertilité' },
    { title: 'Ogou Feray', url: 'lwa.html#ogou', section: 'Les Lwa', keywords: 'ogou ogun guerre fer soldats révolution haïtienne rouge nago petro saint-jacques' },
    { title: 'Erzulie Freda', url: 'lwa.html#erzulie-freda', section: 'Les Lwa', keywords: 'erzulie freda amour beauté luxe vierge marie rada rose champagne cœur' },
    { title: 'Erzulie Dantor', url: 'lwa.html#erzulie-dantor', section: 'Les Lwa', keywords: 'erzulie dantor mère guerrière protection enfants femmes petro vierge noire bwa kayiman' },
    { title: 'Baron Samedi', url: 'lwa.html#baron', section: 'Les Lwa', keywords: 'baron samedi mort cimetière chapeau cigare rhum gede squelette guérison' },
    { title: 'Gran Brigitte', url: 'lwa.html#gran-brigitte', section: 'Les Lwa', keywords: 'gran brigitte maman brigitte épouse baron gede mort ossements cimetière irlande' },
    { title: 'Azaka Mede', url: 'lwa.html#azaka', section: 'Les Lwa', keywords: 'azaka zaka agriculture paysans terre récolte haïti rural paysan' },
    { title: 'Agwe Tawoyo', url: 'lwa.html#agwe', section: 'Les Lwa', keywords: 'agwe mer océan marins pêcheurs bateau sirène diaspora rada' },
    // Histoire sections
    { title: 'Révolution Haïtienne', url: 'history.html#revolution', section: 'Histoire', keywords: 'révolution haïtienne 1791 1804 liberté esclavage toussaint dessalines' },
    { title: 'Indépendance 1804', url: 'history.html#independence', section: 'Histoire', keywords: 'indépendance 1804 première république noire janvier' },
    // Culture
    { title: 'Musique Haïtienne', url: 'about.html', section: 'Culture', keywords: 'kompa rara rasin musique haïti tambours folklore' },
    { title: 'Art Haïtien', url: 'about.html', section: 'Culture', keywords: 'art haïtien naïf peinture sculpture vèvè drapo vodou' },
  ];

  function initSearch() {
    var toggle = document.querySelector('.search-toggle');
    var overlay = document.getElementById('searchOverlay');
    var input = document.getElementById('searchInput');
    var results = document.getElementById('searchResults');
    var closeBtn = document.querySelector('.search-close');

    if (!toggle || !overlay || !input || !results) return;

    function openSearch() {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(function () { input.focus(); }, 100);
    }

    function closeSearch() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      input.value = '';
      results.innerHTML = '';
    }

    toggle.addEventListener('click', openSearch);
    closeBtn.addEventListener('click', closeSearch);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeSearch();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSearch();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (overlay.classList.contains('open')) closeSearch();
        else openSearch();
      }
    });

    input.addEventListener('input', function () {
      var query = input.value.trim().toLowerCase();
      if (query.length < 2) {
        results.innerHTML = '<p class="search-results__hint">Tapez au moins 2 caractères pour rechercher…</p>';
        return;
      }

      var matches = SEARCH_INDEX.filter(function (item) {
        return item.title.toLowerCase().includes(query) ||
               item.keywords.toLowerCase().includes(query) ||
               item.section.toLowerCase().includes(query);
      });

      if (!matches.length) {
        results.innerHTML = '<p class="search-results__empty">Aucun résultat pour « ' + escapeHtml(input.value.trim()) + ' »</p>';
        return;
      }

      var html = '<ul class="search-results__list">';
      matches.forEach(function (item) {
        var sectionTag = item.section
          ? '<span class="search-result__section">' + escapeHtml(item.section) + '</span>'
          : '';
        html += '<li class="search-result">'
          + '<a href="' + item.url + '" class="search-result__link">'
          + '<span class="search-result__title">' + escapeHtml(item.title) + '</span>'
          + sectionTag
          + '</a>'
          + '</li>';
      });
      html += '</ul>';
      results.innerHTML = html;
    });
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  /* ── Smooth scroll for in-page anchors ──────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = anchor.getAttribute('href').slice(1);
        var target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ── Content Protection (deterrent) ─────────────────── */
  function initContentProtection() {
    // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      return false;
    });

    // Disable copy and cut outside of form fields
    function isFormField(el) {
      var tag = (el && el.tagName) ? el.tagName.toLowerCase() : '';
      return tag === 'input' || tag === 'textarea' || tag === 'select';
    }

    document.addEventListener('copy', function (e) {
      if (!isFormField(e.target)) { e.preventDefault(); return false; }
    });

    document.addEventListener('cut', function (e) {
      if (!isFormField(e.target)) { e.preventDefault(); return false; }
    });

    // Disable text selection outside of form fields
    document.addEventListener('selectstart', function (e) {
      if (!isFormField(e.target)) { e.preventDefault(); return false; }
    });

    // Disable image/link drag
    document.addEventListener('dragstart', function (e) {
      e.preventDefault();
      return false;
    });

    // Block dev-tool and view-source keyboard shortcuts
    document.addEventListener('keydown', function (e) {
      var ctrl = e.ctrlKey || e.metaKey;
      // F12 — DevTools
      if (e.key === 'F12') { e.preventDefault(); return false; }
      // Ctrl/Cmd+U — View Source
      if (ctrl && e.key.toLowerCase() === 'u') { e.preventDefault(); return false; }
      // Ctrl/Cmd+S — Save Page
      if (ctrl && e.key.toLowerCase() === 's') { e.preventDefault(); return false; }
      // Ctrl/Cmd+Shift+I — Inspector
      if (ctrl && e.shiftKey && e.key.toLowerCase() === 'i') { e.preventDefault(); return false; }
      // Ctrl/Cmd+Shift+J — Console
      if (ctrl && e.shiftKey && e.key.toLowerCase() === 'j') { e.preventDefault(); return false; }
      // Ctrl/Cmd+Shift+C — Element picker
      if (ctrl && e.shiftKey && e.key.toLowerCase() === 'c') { e.preventDefault(); return false; }
    });
  }

  /* ── Init ───────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    setActiveNavLink();
    initScrollReveal();
    initStickyHeader();
    initContactForm();
    animateCounters();
    initSearch();
    initSmoothScroll();
    initContentProtection();
  });
})();
