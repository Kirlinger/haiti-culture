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
      '.card, .feature-card, .destination-card, .person-card, .stat-item, .nation-card, .lwa-preview-card, .lwa-nav-item'
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
    { title: 'À propos de l\'auteur', url: 'about.html', section: 'Projet', keywords: 'auteur kirlinger jeune projet recherche méthodologie sources haïtiennes' },
    { title: 'Culture & Identité', url: 'culture-identite.html', section: 'Culture', keywords: 'haïti peuple identité culture langue créole musique art cuisine vodou' },
    { title: 'Histoire d\'Haïti', url: 'history.html', section: '', keywords: 'histoire haïti révolution indépendance 1804 taïno' },
    { title: 'Tourisme', url: 'tourism.html', section: '', keywords: 'tourisme haïti plages citadelle labadée voyage' },
    { title: 'Vodou Haïtien', url: 'vodou.html', section: '', keywords: 'vodou voodoo haïti religion spiritualité afrique lwa spirits' },
    { title: 'Les Lwa', url: 'lwa.html', section: '', keywords: 'lwa loa esprits vodou haïti spirits dieux' },
    // Vodou sections
    { title: 'Origines Africaines du Vodou', url: 'vodou.html#origines', section: 'Vodou', keywords: 'origines afrique fon yoruba kongo dahomey nigeria vodou esclavage saint-domingue' },
    { title: 'Bondye : Le Créateur', url: 'vodou.html#bondye', section: 'Vodou', keywords: 'bondye dieu créateur suprême vodou cosmologie' },
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
    { title: 'Musique Haïtienne', url: 'musique-histoire.html', section: 'Culture', keywords: 'kompa rara rasin musique haïti tambours folklore' },
    { title: 'Art Haïtien', url: 'artistes.html', section: 'Culture', keywords: 'art haïtien naïf peinture sculpture vèvè drapo vodou' },
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
    // Nouvelles pages — Histoire & Politique
    { title: 'Profils des Présidents d\'Haïti', url: 'presidents.html', section: 'Histoire', keywords: 'présidents haïti dessalines christophe pétion boyer duvalier aristide préval martelly moïse henry pascal-trouillot lescot estimé magloire geffrard soulouque fondateurs' },
    { title: 'Guerres de l’Indépendance d’Haïti (1791–1804)', url: 'revolution-batailles.html', section: 'Histoire', keywords: 'guerres indépendance haïti révolution 1791 1804 batailles bois caïman vertières crête-à-pierrot louverture dessalines tactiques france espagne grande-bretagne leclerc rochambeau' },
    { title: 'Les Relations Internationales d\'Haïti', url: 'relations-internationales.html', section: 'Histoire', keywords: 'relations internationales france dette rançon 150 millions états-unis occupation 1915 marine dominicaine massacre persil trujillo cuba coopération médicale minustah choléra diaspora remises caricom' },
    // Nouvelles pages — Culture
    { title: 'Histoire de la Musique Haïtienne', url: 'musique-histoire.html', section: 'Culture', keywords: 'musique haïtienne rara kompa compas nemours jean-baptiste rasin boukman eksperyans ram troubadour coupé cloué wyclef fugees tambours vodou méringue' },
    // Nouvelles pages — Géographie
    { title: 'Les 10 Départements d\'Haïti', url: 'departements.html', section: 'Géographie', keywords: 'départements haïti ouest artibonite nord nord-est nord-ouest centre sud sud-est grande-anse nippes port-au-prince cap-haïtien gonaïves jérémie les cayes jacmel miragoâne fort-liberté' },
    { title: 'Département de l\'Ouest', url: 'departements.html#ouest', section: 'Géographie', keywords: 'ouest port-au-prince pétionville péligre kenscoff léogâne artibonite' },
    { title: 'Département du Nord', url: 'departements.html#nord', section: 'Géographie', keywords: 'nord cap-haïtien citadelle laferrière sans-souci bois caïman milot labadée' },
    { title: 'Département de la Grande-Anse', url: 'departements.html#grande-anse', section: 'Géographie', keywords: 'grande-anse jérémie poètes alexandre dumas cacao hurrican matthew' },
    { title: 'Géographie Physique d\'Haïti', url: 'geographie.html', section: 'Géographie', keywords: 'géographie physique haïti montagnes massif selle hotte nord relief plaines artibonite cul-de-sac côtes golfe gonâve péninsules rivières lacs climat cyclones géologie failles tectoniques' },
    { title: 'Massif de la Selle : Point Culminant', url: 'geographie.html#massif-de-la-selle', section: 'Géographie', keywords: 'massif selle pic la selle 2680 mètres sommet altitude forêt pins haïti' },
    { title: 'Environnement d\'Haïti', url: 'environnement.html', section: 'Géographie', keywords: 'environnement haïti déforestation forêts biodiversité reboisement charbon bois erosion sols eau parc macaya mangroves étang saumâtre espèces endémiques conservation écologie' },
    { title: 'Catastrophes Naturelles en Haïti', url: 'catastrophes-naturelles.html', section: 'Géographie', keywords: 'catastrophes naturelles haïti séisme 2010 2021 ouragan matthew flora jeanne sandy inondations glissements terrain sécheresse résilience protection civile konbit solidarité' },
    { title: 'Séisme du 12 janvier 2010', url: 'catastrophes-naturelles.html#seisme-2010', section: 'Géographie', keywords: 'séisme 2010 port-au-prince magnitude 7.0 220000 morts reconstruction choléra MINUSTAH faille enriquillo' },
    { title: 'Frontière Haïti – République Dominicaine', url: 'frontiere-haiti-rd.html', section: 'Géographie', keywords: 'frontière haïti république dominicaine hispaniola ouanaminthe dajabón rivière massacre traité 1929 1874 commerce bilatéral marchés migrations expulsions mur séparation canal eaux boyer trujillo massacre 1937 caracol' },
    // Nouvelles pages — Langue & Culture
    { title: 'La Langue Créole Haïtienne', url: 'creole.html', section: 'Culture', keywords: 'créole kreyòl haïtien langue formation africaine grammaire tma marqueurs proverbes degraf valdman ipa phonologie' },
    { title: 'Proverbes Haïtiens', url: 'creole.html#proverbes', section: 'Culture', keywords: 'proverbes haïtiens dèyè mòn gen mòn sak vid pa kanpe bay kou bliye konstitisyon se papye' },
    { title: 'Les Symboles Nationaux d\'Haïti', url: 'symboles-nationaux.html', section: 'Culture', keywords: 'symboles nationaux drapeau armoiries hymne dessalinienne catherine flon arcahaie bleu rouge liberté lhérisson geffrard palmiste' },
    { title: 'La Dessalinienne : Hymne National', url: 'symboles-nationaux.html#hymne', section: 'Culture', keywords: 'dessalinienne hymne national lhérisson geffrard ancêtres pays marchons unis' },
    { title: 'Glossaire du Créole Haïtien', url: 'glossaire-creole.html', section: 'Culture', keywords: 'glossaire créole vocabulaire mots expressions traduction français anglais salutations bonjou mèsi madan sara konbit sòl lakou' },
    // Nouvelles pages — Portail
    { title: 'Quiz : Connaissez-vous Haïti ?', url: 'quiz.html', section: 'Portail', keywords: 'quiz haïti connaissances questions histoire culture géographie société test éducation interactif' },
    // Nouvelles pages — Batch 3
    { title: 'La Déclaration d\'Indépendance de 1804', url: 'declaration-independance.html', section: 'Histoire', keywords: 'déclaration indépendance 1804 gonaïves boisrond-tonnerre dessalines texte intégral analyse document fondateur liberté haïti' },
    { title: 'Le Marronnage en Haïti', url: 'marronnage.html', section: 'Histoire', keywords: 'marronnage marrons esclaves fugitifs résistance makandal montagnes communautés liberté révolution fouchard fick bois caïman' },
    { title: 'Le Tap-Tap : L\'Art Mobile d\'Haïti', url: 'tap-tap.html', section: 'Culture', keywords: 'tap-tap transport art mobile peinture bus camion couleurs religion vodou créativité populaire haïti brooklyn smithsonian' },
    { title: 'Les Origines Africaines d\'Haïti', url: 'origines-africaines.html', section: 'Histoire', keywords: 'origines africaines fon ewe yoruba kongo bantou igbo wolof dahomey bénin nigeria angola sénégal ginen vodou créole thornton fouchard traite négrière' },
    { title: 'Les Drapo Vodou : Art Sacré', url: 'drapo-vodou.html', section: 'Culture', keywords: 'drapo vodou drapeaux vodou sequins perles vèvè lwa reine drapo bazile jean-louis oleyant art sacré cérémonie brooklyn smithsonian' },
    { title: 'Jacmel : Capitale Culturelle du Sud', url: 'jacmel.html', section: 'Culture', keywords: 'jacmel ville art carnaval papier-mâché préfète duffaut gingerbread architecture café jaficine festival film cinéma bolívar pétion sud-est' },
    // Nouvelles pages — créées pour corriger liens manquants
    { title: 'Les Artistes Visuels Haïtiens', url: 'artistes.html', section: 'Culture', keywords: 'artistes visuels peinture sculpture hyppolite obin bigaud benoit bazile liautaud croix-des-bouquets metal centre art naïf vodou' },
    { title: 'La Littérature Haïtienne', url: 'litterature.html', section: 'Culture', keywords: 'littérature haïtienne roumain gouverneurs rosée frankétienne danticat durand price-mars indigénistes négritude créole spiralisme diaspora' },
    { title: 'Faits Méconnus sur Haïti', url: 'faits-meconnus.html', section: 'Portail', keywords: 'faits méconnus haïti dette indépendance france bolívar occupation américaine drapeau déforestation pic la selle révolution esclave' },
    { title: 'L\'Agriculture en Haïti', url: 'agriculture.html', section: 'Enjeux', keywords: 'agriculture haïti café mango francisque cacao canne clairin madan sara paysans morcellement foncier déforestation' },
    { title: 'L\'Aide Internationale en Haïti', url: 'aide-internationale.html', section: 'Enjeux', keywords: 'aide internationale haïti ong séisme 2010 reconstruction croix-rouge diaspora transferts dépendance collier' },
    { title: 'L\'Économie Informelle en Haïti', url: 'economie-informelle.html', section: 'Enjeux', keywords: 'économie informelle haïti madan sara sol tontine marchés transferts diaspora remittances formalisation' },
    { title: 'L\'Éducation en Haïti', url: 'education-haiti.html', section: 'Société', keywords: 'éducation haïti écoles privées réforme bernard créole lycée pétion université analphabétisme diaspora bourses' },
    { title: 'Femmes d\'Haïti', url: 'femmes-haiti.html', section: 'Société', keywords: 'femmes haïti histoire rôle révolution paysannes madan sara politique droit égalité' },
    { title: 'Fort-Liberté : Cité Coloniale du Nord-Est', url: 'fort-liberte.html', section: 'Tourisme', keywords: 'fort-liberté fort-dauphin nord-est architecture coloniale fortification baie mangrove révolution dessalines massacre' },
    { title: 'Miragoâne : Capitale des Nippes', url: 'miragoane.html', section: 'Tourisme', keywords: 'miragoâne nippes péninsule méridionale café bois port déforestation séisme 2021 cacao' },
  ];

  function initSearch() {
    var toggle = document.querySelector('.search-toggle');
    var overlay = document.getElementById('searchOverlay');
    var input = document.getElementById('searchInput');
    var results = document.getElementById('searchResults');
    var closeBtn = document.querySelector('.search-close') || document.getElementById('searchClose');

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
    if (closeBtn) {
      closeBtn.addEventListener('click', closeSearch);
    }

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
        if (!targetId) return;
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

  /* ── Language Switcher ──────────────────────────────── */
  function initLangSwitcher() {
    var sw = document.getElementById('langSwitcher');
    if (!sw) return;
    sw.remove();
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
    initLangSwitcher();
  });
})();
