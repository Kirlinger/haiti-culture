/* =====================================================
   Histoire pour Enfants — Real video playback module
   ===================================================== */

(function () {
  'use strict';

  var episodes = [
    {
      id: 'toussaint-louverture',
      featured: true,
      icon: '🧭',
      cardTitle: 'Toussaint Louverture, un guide courageux',
      question: 'Qui était Toussaint Louverture ?',
      summary: 'Toussaint était un homme très courageux. Il a aidé son peuple à marcher vers la liberté.',
      videoSrc: '/media/kids/videos/toussaint-louverture.mp4',
      poster: '/media/kids/posters/toussaint-louverture.jpg',
      scriptOutline: [
        'Présenter Toussaint avec des mots doux.',
        'Montrer son courage pour la liberté.',
        'Expliquer qu\'il aidait les familles.',
        'Finir avec un message d\'espoir.'
      ],
      narrationScript: [
        'Il y a longtemps, dans le pays appelé Haïti, vivait un homme nommé Toussaint Louverture.',
        'Il voyait la souffrance des familles.',
        'Il a dit : nous méritons la liberté.',
        'Son courage a donné de l\'espoir à tout le monde.'
      ],
      scenes: [
        { visual: '🌅', title: 'Le début', narration: 'Le soleil se lève sur Haïti.', imagePrompt: 'Illustration douce de matinée en Haïti.' },
        { visual: '🤝', title: 'L\'union', narration: 'Toussaint aide les familles à rester unies.', imagePrompt: 'Familles unies, style maternelle.' },
        { visual: '🕊️', title: 'La liberté', narration: 'Le mot liberté donne de la force.', imagePrompt: 'Colombe et couleurs chaudes.' }
      ],
      narrationTips: ['Voix calme.', 'Phrases courtes.', 'Ton rassurant.'],
      closing: 'Toi aussi, tu peux aider les autres avec ton cœur.'
    },
    {
      id: 'haiti-liberte',
      featured: true,
      icon: '🗽',
      cardTitle: 'La liberté d\'Haïti',
      question: 'Comment Haïti est devenue libre ?',
      summary: 'Le peuple d\'Haïti s\'est levé ensemble. Avec courage, il a gagné sa liberté.',
      videoSrc: '/media/kids/videos/haiti-liberte.mp4',
      poster: '/media/kids/posters/haiti-liberte.jpg',
      scriptOutline: ['Le rêve de liberté.', 'Le courage du peuple.', 'Le grand jour de 1804.', 'La joie partagée.'],
      narrationScript: [
        'Des familles en Haïti rêvaient d\'une vie libre.',
        'Elles sont restées unies.',
        'Le 1er janvier 1804, Haïti est devenue libre.'
      ],
      scenes: [
        { visual: '🌱', title: 'Le rêve', narration: 'Les familles rêvent de vivre libres.', imagePrompt: 'Familles regardant le ciel.' },
        { visual: '🔥', title: 'Le courage', narration: 'Le courage grandit chaque jour.', imagePrompt: 'Flamme symbolique douce.' },
        { visual: '🎉', title: 'La fête', narration: 'La liberté apporte une grande joie.', imagePrompt: 'Scène de fête familiale.' }
      ],
      narrationTips: ['Parler lentement.', 'Sourire dans la voix.'],
      closing: 'La liberté est un trésor à protéger.'
    },
    {
      id: 'bois-caiman',
      featured: true,
      icon: '🌳',
      cardTitle: 'Bois Caïman, un moment d\'union',
      question: 'Que s\'est-il passé à Bois Caïman ?',
      summary: 'À Bois Caïman, des personnes se sont réunies et ont promis de rester unies.',
      videoSrc: '/media/kids/videos/bois-caiman.mp4',
      poster: '/media/kids/posters/bois-caiman.jpg',
      scriptOutline: ['Présenter le lieu.', 'Montrer la réunion.', 'Expliquer la promesse.', 'Conclure avec l\'union.'],
      narrationScript: ['Une nuit, des personnes se sont réunies à Bois Caïman.', 'Elles ont promis de rester unies pour la liberté.'],
      scenes: [
        { visual: '🌙', title: 'La nuit', narration: 'La forêt est calme.', imagePrompt: 'Nuit douce en forêt tropicale.' },
        { visual: '🤲', title: 'La promesse', narration: 'Les mains se rejoignent.', imagePrompt: 'Mains réunies en cercle.' },
        { visual: '💡', title: 'La lumière', narration: 'L\'espoir grandit dans les cœurs.', imagePrompt: 'Lumière chaude et rassurante.' }
      ],
      narrationTips: ['Commencer doucement.', 'Garder un ton chaleureux.'],
      closing: 'Ensemble, on devient plus fort.'
    },
    {
      id: 'dessalines',
      featured: false,
      icon: '🛡️',
      cardTitle: 'Dessalines, protecteur de la liberté',
      question: 'Qui était Jean-Jacques Dessalines ?',
      summary: 'Jean-Jacques Dessalines a aidé Haïti à devenir un pays libre.',
      videoSrc: '/media/kids/videos/dessalines.mp4',
      poster: '/media/kids/posters/dessalines.jpg',
      scriptOutline: ['Présenter Dessalines.', 'Montrer son courage.', 'Expliquer sa protection du peuple.', 'Terminer avec la responsabilité.'],
      narrationScript: [
        'Jean-Jacques Dessalines aimait profondément Haïti.',
        'Il avançait avec courage pour protéger son peuple.',
        'Avec d’autres leaders, il a défendu la liberté.',
        'Son histoire nous apprend à être forts et justes.'
      ],
      scenes: [
        { visual: '🛡️', title: 'Le protecteur', narration: 'Dessalines veille sur les familles.', imagePrompt: 'Chef protecteur, style dessin animé maternelle.' },
        { visual: '⚔️', title: 'Le courage', narration: 'Il garde son calme dans les moments difficiles.', imagePrompt: 'Action courageuse douce, sans violence graphique.' },
        { visual: '🇭🇹', title: 'La liberté', narration: 'Le peuple avance vers la liberté.', imagePrompt: 'Foule unie, couleurs d’Haïti lumineuses.' },
        { visual: '✨', title: 'La leçon', narration: 'Protéger les autres est une belle mission.', imagePrompt: 'Scène finale chaleureuse et inspirante.' }
      ],
      narrationTips: ['Voix posée.', 'Accent sur la protection.', 'Ton rassurant.'],
      closing: 'Le vrai courage protège toujours les autres.'
    },
    {
      id: 'haiti-monde',
      featured: false,
      icon: '🌍',
      cardTitle: 'Pourquoi Haïti compte pour le monde',
      question: 'Pourquoi Haïti est importante dans l\'histoire du monde ?',
      summary: 'Haïti a montré au monde que la liberté est possible.',
      videoSrc: '/media/kids/videos/haiti-monde.mp4',
      poster: '/media/kids/posters/haiti-monde.jpg',
      scriptOutline: ['Expliquer le message d’Haïti.', 'Montrer son influence.', 'Illustrer le partage entre peuples.', 'Conclure avec l’espoir mondial.'],
      narrationScript: [
        'L’histoire d’Haïti voyage dans de nombreux pays.',
        'Elle montre que la liberté peut grandir partout.',
        'Des peuples ont trouvé du courage grâce à cet exemple.',
        'Haïti partage une lumière qui inspire le monde.'
      ],
      scenes: [
        { visual: '🌍', title: 'Le message voyage', narration: 'Le message d’Haïti traverse les mers.', imagePrompt: 'Globe lumineux, routes de lumière.' },
        { visual: '🕊️', title: 'L’idée de liberté', narration: 'La liberté devient un rêve possible pour tous.', imagePrompt: 'Enfants de plusieurs pays, ambiance douce.' },
        { visual: '🤲', title: 'Le partage', narration: 'Les peuples s’encouragent mutuellement.', imagePrompt: 'Mains qui se rejoignent entre continents.' },
        { visual: '💫', title: 'L’inspiration', narration: 'Haïti reste une étoile d’espoir.', imagePrompt: 'Ciel étoilé, rayons chaleureux.' }
      ],
      narrationTips: ['Parler avec émerveillement.', 'Rythme régulier.', 'Ton positif.'],
      closing: 'Les grandes idées peuvent illuminer toute la planète.'
    },
    {
      id: 'anacaona',
      featured: false,
      icon: '👑',
      cardTitle: 'Anacaona, une reine brave',
      question: 'Qui était Anacaona ?',
      summary: 'Anacaona était une reine taïno courageuse et respectée.',
      videoSrc: '/media/kids/videos/anacaona.mp4',
      poster: '/media/kids/posters/anacaona.jpg',
      scriptOutline: ['Présenter Anacaona.', 'Montrer sa sagesse.', 'Parler de son peuple.', 'Finir avec dignité et paix.'],
      narrationScript: [
        'Anacaona était une reine taïno pleine de sagesse.',
        'Elle écoutait son peuple avec beaucoup de respect.',
        'Son courage brillait avec douceur et dignité.',
        'Sa mémoire nous apprend la paix et la bonté.'
      ],
      scenes: [
        { visual: '👑', title: 'La reine', narration: 'Anacaona apparaît avec grâce.', imagePrompt: 'Reine enfantine stylisée, palette dorée et rose.' },
        { visual: '🌺', title: 'La sagesse', narration: 'Elle écoute et conseille son peuple.', imagePrompt: 'Conseil paisible sous des fleurs tropicales.' },
        { visual: '💗', title: 'Le courage doux', narration: 'Le courage peut aussi être bienveillant.', imagePrompt: 'Expression confiante et calme.' },
        { visual: '🕊️', title: 'La paix', narration: 'Son héritage parle de dignité et de paix.', imagePrompt: 'Lumière douce, fin inspirante.' }
      ],
      narrationTips: ['Voix tendre.', 'Bien articuler le prénom Anacaona.', 'Ton paisible.'],
      closing: 'La sagesse et la bonté rendent le monde plus beau.'
    },
    {
      id: 'capois',
      featured: false,
      icon: '⚔️',
      cardTitle: 'Capois-la-Mort, le courage en action',
      question: 'Pourquoi Capois est connu ?',
      summary: 'Capois-la-Mort est connu pour son très grand courage.',
      videoSrc: '/media/kids/videos/capois.mp4',
      poster: '/media/kids/posters/capois.jpg',
      scriptOutline: ['Présenter Capois.', 'Montrer un moment difficile.', 'Souligner sa persévérance.', 'Conclure sur la confiance.'],
      narrationScript: [
        'Capois avançait malgré les obstacles.',
        'Même quand le chemin devenait difficile, il ne reculait pas.',
        'Son courage donnait de la force à ceux qui l’entouraient.',
        'Son histoire enseigne la persévérance.'
      ],
      scenes: [
        { visual: '🏇', title: 'En avant', narration: 'Capois avance avec détermination.', imagePrompt: 'Héros en mouvement, style doux pour enfants.' },
        { visual: '🌧️', title: 'Les obstacles', narration: 'Le chemin devient compliqué.', imagePrompt: 'Nuages et terrain difficile symbolique.' },
        { visual: '🔥', title: 'La persévérance', narration: 'Il continue avec courage.', imagePrompt: 'Lumière forte au milieu des défis.' },
        { visual: '🌟', title: 'La confiance', narration: 'Son exemple inspire les enfants.', imagePrompt: 'Final lumineux et motivant.' }
      ],
      narrationTips: ['Ton énergique mais doux.', 'Mettre l’accent sur “continuer”.', 'Rester rassurant.'],
      closing: 'Quand on persévère, on devient plus fort.'
    },
    {
      id: 'catherine-flon',
      featured: false,
      icon: '🪡',
      cardTitle: 'Catherine Flon et le drapeau',
      question: 'Qui a cousu un drapeau symbole d\'union ?',
      summary: 'Catherine Flon a cousu un drapeau symbole d\'union.',
      videoSrc: '/media/kids/videos/catherine-flon.mp4',
      poster: '/media/kids/posters/catherine-flon.jpg',
      scriptOutline: ['Présenter Catherine Flon.', 'Montrer la couture.', 'Expliquer le symbole d’union.', 'Conclure avec fierté.'],
      narrationScript: [
        'Catherine Flon cousait avec attention et espoir.',
        'Le drapeau qu’elle a cousu représentait l’union.',
        'Chaque point racontait l’amour du pays.',
        'Ce symbole rassemble encore les familles aujourd’hui.'
      ],
      scenes: [
        { visual: '🪡', title: 'La couture', narration: 'Catherine prépare fil et tissu.', imagePrompt: 'Atelier doux, table de couture colorée.' },
        { visual: '🧵', title: 'Les points', narration: 'Les mains cousent avec soin.', imagePrompt: 'Plan rapproché couture style animé.' },
        { visual: '🇭🇹', title: 'Le drapeau', narration: 'Le drapeau apparaît comme symbole d’union.', imagePrompt: 'Drapeau lumineux, enfants émerveillés.' },
        { visual: '💙', title: 'La fierté', narration: 'Les familles se rassemblent avec fierté.', imagePrompt: 'Scène familiale chaleureuse.' }
      ],
      narrationTips: ['Voix délicate.', 'Tempo lent.', 'Insister sur l’union.'],
      closing: 'Les petits gestes peuvent créer de grands symboles.'
    },
    {
      id: 'petion-bolivar',
      featured: false,
      icon: '🤲',
      cardTitle: 'Haïti aide Bolívar',
      question: 'Comment Haïti a aidé d\'autres peuples ?',
      summary: 'Haïti a aidé Simón Bolívar dans son combat pour la liberté.',
      videoSrc: '/media/kids/videos/petion-bolivar.mp4',
      poster: '/media/kids/posters/petion-bolivar.jpg',
      scriptOutline: ['Présenter Pétion et Bolívar.', 'Montrer l’aide offerte.', 'Parler de solidarité.', 'Finir avec le partage de liberté.'],
      narrationScript: [
        'Le président Pétion a tendu la main à Bolívar.',
        'Haïti a offert de l’aide pour la liberté.',
        'Ce geste montrait une grande solidarité entre peuples.',
        'Partager l’espoir peut changer l’histoire.'
      ],
      scenes: [
        { visual: '🤲', title: 'La main tendue', narration: 'Pétion accueille Bolívar.', imagePrompt: 'Deux leaders se serrent la main, style enfantin.' },
        { visual: '⛵', title: 'Le voyage', narration: 'L’aide traverse la mer.', imagePrompt: 'Bateau doux sur mer calme.' },
        { visual: '🤝', title: 'La solidarité', narration: 'Les peuples s’entraident.', imagePrompt: 'Groupe uni, ambiance de coopération.' },
        { visual: '✨', title: 'L’espoir partagé', narration: 'La liberté se partage.', imagePrompt: 'Lueur d’espoir entre deux horizons.' }
      ],
      narrationTips: ['Ton chaleureux.', 'Souligner la solidarité.', 'Voix calme et confiante.'],
      closing: 'Aider les autres est une grande force.'
    },
    {
      id: 'citadelle',
      featured: false,
      icon: '🏰',
      cardTitle: 'La Citadelle, grand château d\'Haïti',
      question: 'Qu\'est-ce que la Citadelle ?',
      summary: 'La Citadelle est un grand symbole de protection et de fierté.',
      videoSrc: '/media/kids/videos/citadelle.mp4',
      poster: '/media/kids/posters/citadelle.jpg',
      scriptOutline: ['Montrer la montagne.', 'Présenter la Citadelle.', 'Expliquer la protection.', 'Conclure avec la fierté nationale.'],
      narrationScript: [
        'Très haut dans les montagnes se trouve la Citadelle.',
        'Ce grand château symbolise la protection du pays.',
        'Il rappelle la force et la préparation du peuple.',
        'Aujourd’hui, il rend les enfants fiers de leur histoire.'
      ],
      scenes: [
        { visual: '⛰️', title: 'La montagne', narration: 'On découvre la montagne au lever du soleil.', imagePrompt: 'Paysage montagneux coloré, lumière matinale.' },
        { visual: '🏰', title: 'La Citadelle', narration: 'Le château apparaît majestueux.', imagePrompt: 'Citadelle stylisée, perspective héroïque douce.' },
        { visual: '🛡️', title: 'La protection', narration: 'La Citadelle protège le peuple.', imagePrompt: 'Bouclier symbolique et familles en sécurité.' },
        { visual: '🎖️', title: 'La fierté', narration: 'Les enfants admirent ce patrimoine.', imagePrompt: 'Enfants souriants devant la Citadelle.' }
      ],
      narrationTips: ['Voix admirative.', 'Débit régulier.', 'Ton inspirant.'],
      closing: 'Connaître son patrimoine donne de la confiance.'
    },
    {
      id: 'culture-rara',
      featured: false,
      icon: '🥁',
      cardTitle: 'Rara, musique du cœur',
      question: 'Qu\'est-ce que le rara ?',
      summary: 'Le rara est une musique joyeuse qui rassemble les gens.',
      videoSrc: '/media/kids/videos/culture-rara.mp4',
      poster: '/media/kids/posters/culture-rara.jpg',
      scriptOutline: ['Présenter le rara.', 'Montrer les instruments.', 'Illustrer la fête.', 'Conclure avec la culture vivante.'],
      narrationScript: [
        'Le rara est une musique joyeuse d’Haïti.',
        'Les tambours et les sons font danser les cœurs.',
        'Les familles marchent et chantent ensemble.',
        'Cette musique garde la culture bien vivante.'
      ],
      scenes: [
        { visual: '🥁', title: 'Le rythme', narration: 'Les tambours commencent doucement.', imagePrompt: 'Tambours colorés en mouvement.' },
        { visual: '🎺', title: 'Les instruments', narration: 'Les sons se répondent avec joie.', imagePrompt: 'Parade musicale enfantine.' },
        { visual: '💃', title: 'La fête', narration: 'Les familles dansent ensemble.', imagePrompt: 'Danse collective douce et festive.' },
        { visual: '🎶', title: 'La culture vivante', narration: 'Le rara transmet la mémoire du peuple.', imagePrompt: 'Notes musicales lumineuses, scène finale.' }
      ],
      narrationTips: ['Voix souriante.', 'Rythme un peu vivant.', 'Garder la douceur.'],
      closing: 'La musique unit les cœurs.'
    },
    {
      id: 'kreyol',
      featured: false,
      icon: '🗣️',
      cardTitle: 'Le créole, langue de tous',
      question: 'Pourquoi le créole est important ?',
      summary: 'Le créole haïtien aide tout le monde à se comprendre.',
      videoSrc: '/media/kids/videos/kreyol.mp4',
      poster: '/media/kids/posters/kreyol.jpg',
      scriptOutline: ['Présenter le créole.', 'Montrer la communication quotidienne.', 'Illustrer l’apprentissage des enfants.', 'Conclure avec l’unité.'],
      narrationScript: [
        'Le créole haïtien est la langue du partage.',
        'Avec cette langue, les familles se comprennent mieux.',
        'Les enfants apprennent, jouent et racontent des histoires.',
        'Le créole unit les cœurs dans tout le pays.'
      ],
      scenes: [
        { visual: '🗣️', title: 'La parole', narration: 'Des voix échangent avec douceur.', imagePrompt: 'Bulles de dialogue colorées.' },
        { visual: '👨‍👩‍👧‍👦', title: 'Les familles', narration: 'La langue rapproche les générations.', imagePrompt: 'Famille qui discute et sourit.' },
        { visual: '📚', title: 'Les enfants apprennent', narration: 'Les enfants lisent et racontent.', imagePrompt: 'Classe joyeuse style maternelle.' },
        { visual: '💞', title: 'L’unité', narration: 'Le créole relie tout le monde.', imagePrompt: 'Cœurs et mains liées, fin lumineuse.' }
      ],
      narrationTips: ['Voix chaleureuse.', 'Prononciation claire.', 'Ton affectueux.'],
      closing: 'Parler ensemble construit l’unité.'
    }
  ];

  function fallbackOutline(ep) {
    return [
      'Présenter le thème avec des mots simples.',
      'Raconter le moment important comme une histoire.',
      'Montrer une valeur positive pour les enfants.',
      'Finir avec un message doux et inspirant.'
    ];
  }

  function fallbackScenes(ep) {
    return [
      { visual: ep.icon || '🎬', title: 'Découverte', narration: ep.summary, imagePrompt: 'Illustration enfantine du thème.' },
      { visual: '✨', title: 'Message clé', narration: 'Cette histoire nous apprend le courage et l\'union.', imagePrompt: 'Scène lumineuse et chaleureuse.' }
    ];
  }

  function createEpisodeCard(episode, isFeatured) {
    var card = document.createElement('article');
    card.className = 'kids-episode-card';
    card.setAttribute('data-episode-id', episode.id);

    var featuredBadge = isFeatured ? '<span class="kids-episode-card__featured">Épisode vedette</span>' : '';
    var thumb = episode.poster ? ('style="background-image:url(\'' + episode.poster + '\')"') : '';

    card.innerHTML = ''
      + '<div class="kids-episode-card__thumb kids-episode-card__thumb--image" ' + thumb + ' aria-hidden="true">'
      + '  <span>' + (episode.icon || '🎬') + '</span>'
      + '</div>'
      + '<div class="kids-episode-card__content">'
      + featuredBadge
      + '  <p class="kids-episode-card__question">' + episode.question + '</p>'
      + '  <h3>' + episode.cardTitle + '</h3>'
      + '  <p>' + episode.summary + '</p>'
      + '  <button type="button" class="btn kids-btn-primary kids-play-episode">▶ Regarder</button>'
      + '</div>';

    return card;
  }

  function initKidsHistory() {
    var app = document.getElementById('kidsHistoryApp');
    if (!app) return;

    var featuredContainer = document.getElementById('featuredEpisodes');
    var allContainer = document.getElementById('allEpisodes');

    var episodeBadge = document.getElementById('episodeBadge');
    var episodeTitle = document.getElementById('episodeTitle');
    var episodeSummary = document.getElementById('episodeSummary');
    var videoNowPlaying = document.getElementById('videoNowPlaying');

    var kidsVideoPlayer = document.getElementById('kidsVideoPlayer');

    var scriptOutlineList = document.getElementById('scriptOutlineList');
    var fullNarration = document.getElementById('fullNarration');
    var sceneBreakdown = document.getElementById('sceneBreakdown');
    var imagePromptsList = document.getElementById('imagePromptsList');
    var narrationTipsList = document.getElementById('narrationTipsList');
    var closingMessage = document.getElementById('closingMessage');

    var playVideoBtn = document.getElementById('playVideoBtn');
    var replayVideoBtn = document.getElementById('replayVideoBtn');
    var pauseVideoBtn = document.getElementById('pauseVideoBtn');
    var nextEpisodeBtn = document.getElementById('nextEpisodeBtn');

    var selectedEpisodeIndex = 0;

    function renderDetails() {
      var episode = episodes[selectedEpisodeIndex];
      var outline = episode.scriptOutline || fallbackOutline(episode);
      var narration = episode.narrationScript || [episode.summary];
      var scenes = episode.scenes || fallbackScenes(episode);
      var narrationTips = episode.narrationTips || ['Voix douce.', 'Phrases courtes.', 'Ton chaleureux.'];

      episodeBadge.textContent = 'Épisode ' + (selectedEpisodeIndex + 1);
      episodeTitle.textContent = episode.cardTitle;
      episodeSummary.textContent = episode.summary;
      videoNowPlaying.textContent = 'Vidéo active : ' + episode.cardTitle;

      scriptOutlineList.innerHTML = outline
        .map(function (item) { return '<li>' + item + '</li>'; })
        .join('');

      fullNarration.innerHTML = narration
        .map(function (line) { return '<p>' + line + '</p>'; })
        .join('');

      sceneBreakdown.innerHTML = scenes
        .map(function (scene, index) {
          return ''
            + '<article class="kids-scene-breakdown-card">'
            + '  <p class="kids-scene-breakdown-card__meta">Scène ' + (index + 1) + '</p>'
            + '  <h5>' + scene.title + '</h5>'
            + '  <p><strong>Narration :</strong> ' + scene.narration + '</p>'
            + '  <p><strong>Visuel :</strong> ' + scene.visual + ' Illustration enfantine.</p>'
            + '</article>';
        })
        .join('');

      imagePromptsList.innerHTML = scenes
        .map(function (scene) { return '<li>' + scene.imagePrompt + '</li>'; })
        .join('');

      narrationTipsList.innerHTML = narrationTips
        .map(function (tip) { return '<li>' + tip + '</li>'; })
        .join('');

      closingMessage.textContent = episode.closing || 'Bravo, petit héros. Continue à apprendre avec joie.';
    }

    function setActiveEpisodeCard() {
      document.querySelectorAll('.kids-episode-card').forEach(function (card) {
        card.classList.toggle('is-active', card.getAttribute('data-episode-id') === episodes[selectedEpisodeIndex].id);
      });
    }

    function playCurrentVideo() {
      if (!kidsVideoPlayer) return;
      var currentSrc = (kidsVideoPlayer.currentSrc || '').trim();
      var fallbackSrc = (kidsVideoPlayer.src || '').trim();
      if (!currentSrc && !fallbackSrc) {
        videoNowPlaying.textContent = 'Oups ! Cette vidéo n’est pas prête.';
        return;
      }
      kidsVideoPlayer.muted = false;
      var promise = kidsVideoPlayer.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(function (error) {
          console.error('Lecture vidéo impossible:', error);
          videoNowPlaying.textContent = 'Oups ! Demande de l’aide à un adulte pour lancer la vidéo.';
        });
      }
    }

    function loadEpisodeVideo(autoplay) {
      var episode = episodes[selectedEpisodeIndex];
      if (!episode.videoSrc || !episode.videoSrc.trim()) {
        videoNowPlaying.textContent = 'Oups ! Cette vidéo n’est pas disponible.';
        return;
      }
      kidsVideoPlayer.pause();
      kidsVideoPlayer.src = episode.videoSrc;
      kidsVideoPlayer.poster = episode.poster || '';
      kidsVideoPlayer.load();
      if (autoplay) playCurrentVideo();
    }

    function openEpisode(index, shouldScroll, autoplay) {
      selectedEpisodeIndex = index;
      renderDetails();
      setActiveEpisodeCard();
      loadEpisodeVideo(autoplay);

      if (shouldScroll) {
        var playerSection = document.getElementById('player');
        if (playerSection) playerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    episodes.filter(function (episode) { return episode.featured; }).forEach(function (episode) {
      featuredContainer.appendChild(createEpisodeCard(episode, true));
    });

    episodes.forEach(function (episode) {
      allContainer.appendChild(createEpisodeCard(episode, false));
    });

    document.querySelectorAll('.kids-episode-card').forEach(function (card) {
      card.querySelector('.kids-play-episode').addEventListener('click', function () {
        var id = card.getAttribute('data-episode-id');
        var index = episodes.findIndex(function (episode) { return episode.id === id; });
        if (index !== -1) {
          openEpisode(index, true, true);
        } else {
          console.warn('Épisode introuvable:', id);
          videoNowPlaying.textContent = 'Oups ! Cette vidéo n’est pas disponible. Essaie une autre histoire.';
        }
      });
    });

    playVideoBtn.addEventListener('click', function () {
      playCurrentVideo();
    });

    replayVideoBtn.addEventListener('click', function () {
      kidsVideoPlayer.currentTime = 0;
      playCurrentVideo();
    });

    pauseVideoBtn.addEventListener('click', function () {
      kidsVideoPlayer.pause();
    });

    nextEpisodeBtn.addEventListener('click', function () {
      var nextIndex = (selectedEpisodeIndex + 1) % episodes.length;
      var isWrapAround = nextIndex === 0 && selectedEpisodeIndex === episodes.length - 1;
      openEpisode(nextIndex, true, true);
      if (isWrapAround) {
        videoNowPlaying.textContent = 'On recommence depuis le début de la série.';
      }
    });

    kidsVideoPlayer.addEventListener('ended', function () {
      videoNowPlaying.textContent = 'Vidéo terminée. Clique sur « Voir l\'épisode suivant ».';
    });

    kidsVideoPlayer.addEventListener('error', function () {
      var mediaError = kidsVideoPlayer.error;
      console.error('Erreur média HTML5:', mediaError);
      videoNowPlaying.textContent = 'Oups ! Cette vidéo ne fonctionne pas. Demande de l’aide à un adulte.';
    });

    openEpisode(0, false, false);
  }

  document.addEventListener('DOMContentLoaded', initKidsHistory);
})();
