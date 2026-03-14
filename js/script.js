/* =====================================================
   🇭🇹 Haïti 🇭🇹 : Main JavaScript
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
      var successText = btn.dataset.success || '✓ Message Envoyé !';
      btn.textContent = successText;
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
        var duration = 1800;
        var startTime = null;

        function easeOutQuart(t) {
          return 1 - Math.pow(1 - t, 4);
        }

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var elapsed = timestamp - startTime;
          var progress = Math.min(elapsed / duration, 1);
          var current = Math.round(easeOutQuart(progress) * target);
          el.textContent = current.toLocaleString('fr-FR') + suffix;
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = target.toLocaleString('fr-FR') + suffix;
          }
        }

        requestAnimationFrame(step);
        observer.unobserve(el);
      });
    }, { threshold: 0.3 });

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
    { title: 'Bondye, Le Créateur', url: 'vodou.html#bondye', section: 'Vodou', keywords: 'bondye dieu créateur suprême vodou cosmologie' },
    { title: 'Les Nations du Vodou', url: 'vodou.html#nations', section: 'Vodou', keywords: 'nations rada petro gede nago ibo kongo vodou' },
    { title: 'Nation Rada', url: 'vodou.html#nations', section: 'Vodou', keywords: 'rada lwa doux bienveillant fon dahomey blanc bleu' },
    { title: 'Nation Petro', url: 'vodou.html#nations', section: 'Vodou', keywords: 'petro lwa ardent feu résistance esclavage rouge noir don pedro' },
    { title: 'Nation Gede', url: 'vodou.html#nations', section: 'Vodou', keywords: 'gede mort cimetière baron samedi gran brigitte ancêtres' },
    { title: 'Nation Nago', url: 'vodou.html#nations', section: 'Vodou', keywords: 'nago yoruba ogou guerrier nigeria' },
    { title: 'Nation Ibo', url: 'vodou.html#nations', section: 'Vodou', keywords: 'ibo igbo mystérieux mélancolique eau résistance' },
    { title: 'Nation Kongo', url: 'vodou.html#nations', section: 'Vodou', keywords: 'kongo simbi magie transformation eau bakongo afrique centrale' },
    { title: 'Cérémonies Vodou', url: 'vodou.html#ceremonies', section: 'Vodou', keywords: 'cérémonies fête kanzo initiation possession transe monte bain rituel' },
    { title: 'Les Vèvè : Symboles Sacrés', url: 'vodou.html#veve', section: 'Vodou', keywords: 'vèvè veve symboles sacrés vodou art géométrie rituel farine' },
    { title: 'Tambours et Musique Sacrée', url: 'vodou.html#musique', section: 'Vodou', keywords: 'tambours musique sacrée rada petro rara danse chants cantiques ason' },
    { title: 'Houngan et Mambo', url: 'vodou.html#pretres', section: 'Vodou', keywords: 'houngan mambo prêtre prêtresse hounfor temple ason initiation guérisseur' },
    { title: 'Bwa Kayiman : La Révolution', url: 'vodou.html#origines', section: 'Vodou', keywords: 'bwa kayiman boukman révolution 1791 liberté cérémonie' },
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
    // Nouvelles pages
    { title: 'Constitution d\'Haïti', url: 'constitution.html', section: 'Histoire', keywords: 'constitution haïti loi droits libertés état démocratie 1987 toussaint dessalines' },
    { title: 'Chronologie d\'Haïti', url: 'timeline.html', section: 'Histoire', keywords: 'chronologie haïti histoire dates événements taïno 1804 indépendance révolution duvalier occupation américaine' },
    { title: 'Catastrophes et Crises', url: 'timeline.html#catastrophes', section: 'Histoire', keywords: 'catastrophes séisme 2010 ouragan matthew choléra inondations gangs crise sécuritaire violence politique' },
    { title: 'Leaders d\'Haïti', url: 'leaders.html', section: 'Histoire', keywords: 'leaders chefs état présidents haïti toussaint louverture dessalines christophe pétion boyer duvalier aristide préval martelly moïse' },
    { title: 'Héros Nationaux', url: 'heroes.html', section: 'Histoire', keywords: 'héros révolution toussaint louverture dessalines christophe pétion sanité belair capois' },
    { title: 'Jours Fériés en Haïti', url: 'holidays.html', section: 'Culture', keywords: 'jours fériés fêtes haïti indépendance carnaval drapeau vertières noël toussaint' },
    { title: 'Culture Haïtienne', url: 'culture.html', section: 'Culture', keywords: 'culture haïti art musique danse littérature carnaval kompa rara kreyòl' },
    { title: 'Gastronomie Haïtienne', url: 'gastronomy.html', section: 'Culture', keywords: 'gastronomie cuisine haïti griyo diri pikliz soup joumou bannann akra legim' },
    { title: 'Archives Historiques', url: 'archives.html', section: 'Portail', keywords: 'archives documents constitution 1804 indépendance déclaration boisrond discours' },
    { title: 'Encyclopédie d\'Haïti', url: 'encyclopedia.html', section: 'Portail', keywords: 'encyclopédie haïti artibonite bois caïman carnaval dessalines vodou citadelle' },
    // Société
    { title: 'Culture Vivante d\'Haïti', url: 'culture-vivante.html', section: 'Société', keywords: 'culture vivante haïti musique danse art traditions quotidien créativité expression populaire' },
    { title: 'Créativité Populaire', url: 'creativite-populaire.html', section: 'Société', keywords: 'créativité populaire art haïtien fer recyclé peintures naïves artisanat sculpture internationalement reconnu' },
    { title: 'Diaspora Engagée', url: 'diaspora-engagee.html', section: 'Société', keywords: 'diaspora haïtienne remises milliards états-unis canada france engagement culturel économique réseau' },
    { title: 'Jeunesse & Potentiel', url: 'jeunesse-potentiel.html', section: 'Société', keywords: 'jeunesse haïtienne potentiel éducation avenir 25 ans développement renouveau formation' },
    { title: 'Mémoire Universelle', url: 'memoire-universelle.html', section: 'Société', keywords: 'mémoire universelle révolution haïtienne inspiration libération humanité 1804 héritage mondial' },
    { title: 'Patrimoine National', url: 'patrimoine-national.html', section: 'Société', keywords: 'patrimoine national haïti citadelle laferrière sans-souci unesco mondial culture héritage' },
    // Enjeux
    { title: 'Fragilité Économique', url: 'fragilite-economique.html', section: 'Enjeux', keywords: 'fragilité économique haïti pib pauvreté dons internationaux remises diaspora développement' },
    { title: 'Inégalités Sociales', url: 'inegalites-sociales.html', section: 'Enjeux', keywords: 'inégalités sociales haïti élite pauvreté fossé classes sociales précarité répartition richesses' },
    { title: 'Instabilité Politique', url: 'instabilite-politique.html', section: 'Enjeux', keywords: 'instabilité politique haïti coups état crises gouvernance démocratie présidents assassinat' },
    { title: 'Pressions Sécuritaires', url: 'pressions-securitaires.html', section: 'Enjeux', keywords: 'sécurité haïti gangs armés insécurité violence port-au-prince quartiers crise humanitaire' },
    { title: 'Services Essentiels', url: 'services-essentiels.html', section: 'Enjeux', keywords: 'services essentiels haïti eau potable santé éducation électricité hôpitaux écoles accès' },
    { title: 'Capacité d\'Adaptation', url: 'capacite-adaptation.html', section: 'Enjeux', keywords: 'résilience adaptation haïti séisme 2010 konbit sòl solidarité survie reconstruction communautaire' },
    { title: 'Reconstruction Durable', url: 'reconstruction-durable.html', section: 'Enjeux', keywords: 'reconstruction durable haïti développement institutions investissements responsables avenir solutions' },
    // Bibliographie
    { title: 'Bibliographie & Sources', url: 'bibliography.html', section: 'Portail', keywords: 'bibliographie sources références historiens haïtiens madiou ardouin trouillot price-mars fouchard casimir hurbon léger castor académique archives' },
    // Légal
    { title: 'Legal & License', url: 'license.html', section: 'Portail', keywords: 'license licence mit copyright all rights reserved legal mentions légales intellectual property code source kirlinger jeune' },
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

  /* ── Dropdown menus ─────────────────────────────────── */
  function initDropdowns() {
    document.querySelectorAll('.nav-dropdown').forEach(function(dropdown) {
      var btn = dropdown.querySelector('.nav-dropdown__btn');
      if (!btn) return;
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var isOpen = dropdown.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
        document.querySelectorAll('.nav-dropdown').forEach(function(other) {
          if (other !== dropdown) {
            other.classList.remove('open');
            var otherBtn = other.querySelector('.nav-dropdown__btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });
    document.addEventListener('click', function() {
      document.querySelectorAll('.nav-dropdown').forEach(function(dropdown) {
        dropdown.classList.remove('open');
        var btn = dropdown.querySelector('.nav-dropdown__btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Language Toggle (FR / Kreyòl) ─────────────────── */
  function initLangToggle() {
    var btn = document.getElementById('langToggle');
    if (!btn) return;

    var LANGS = ['fr', 'kr'];
    var stored = localStorage.getItem('ht-lang') || 'fr';
    var current = LANGS.includes(stored) ? stored : 'fr';

    function applyLang(lang) {
      current = lang;
      document.documentElement.setAttribute('data-lang-mode', lang);
      localStorage.setItem('ht-lang', lang);

      // Update button labels
      var frLabel = btn.querySelector('.lang-toggle__fr');
      var krLabel = btn.querySelector('.lang-toggle__kr');
      if (frLabel && krLabel) {
        frLabel.classList.toggle('lang-toggle__active', lang === 'fr');
        krLabel.classList.toggle('lang-toggle__active', lang === 'kr');
      }

      // Swap data-kr text content
      document.querySelectorAll('[data-kr]').forEach(function(el) {
        if (lang === 'kr') {
          if (!el.dataset.fr) el.dataset.fr = el.innerHTML;
          el.innerHTML = el.dataset.kr;
        } else {
          if (el.dataset.fr) el.innerHTML = el.dataset.fr;
        }
      });
    }

    btn.addEventListener('click', function() {
      applyLang(current === 'fr' ? 'kr' : 'fr');
    });

    // Apply stored preference on load
    applyLang(current);
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
    initDropdowns();
    initLangToggle();
  });
})();
