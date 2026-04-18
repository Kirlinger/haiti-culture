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
      videoSrc: 'media/kids/videos/toussaint-louverture.mp4',
      poster: 'media/kids/posters/toussaint-louverture.jpg',
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
      videoSrc: 'media/kids/videos/haiti-liberte.mp4',
      poster: 'media/kids/posters/haiti-liberte.jpg',
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
      videoSrc: 'media/kids/videos/bois-caiman.mp4',
      poster: 'media/kids/posters/bois-caiman.jpg',
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
      videoSrc: 'media/kids/videos/dessalines.mp4',
      poster: 'media/kids/posters/dessalines.jpg'
    },
    {
      id: 'haiti-monde',
      featured: false,
      icon: '🌍',
      cardTitle: 'Pourquoi Haïti compte pour le monde',
      question: 'Pourquoi Haïti est importante dans l\'histoire du monde ?',
      summary: 'Haïti a montré au monde que la liberté est possible.',
      videoSrc: 'media/kids/videos/haiti-monde.mp4',
      poster: 'media/kids/posters/haiti-monde.jpg'
    },
    {
      id: 'anacaona',
      featured: false,
      icon: '👑',
      cardTitle: 'Anacaona, une reine brave',
      question: 'Qui était Anacaona ?',
      summary: 'Anacaona était une reine taïno courageuse et respectée.',
      videoSrc: 'media/kids/videos/anacaona.mp4',
      poster: 'media/kids/posters/anacaona.jpg'
    },
    {
      id: 'capois',
      featured: false,
      icon: '⚔️',
      cardTitle: 'Capois-la-Mort, le courage en action',
      question: 'Pourquoi Capois est connu ?',
      summary: 'Capois-la-Mort est connu pour son très grand courage.',
      videoSrc: 'media/kids/videos/capois.mp4',
      poster: 'media/kids/posters/capois.jpg'
    },
    {
      id: 'catherine-flon',
      featured: false,
      icon: '🪡',
      cardTitle: 'Catherine Flon et le drapeau',
      question: 'Qui a cousu un drapeau symbole d\'union ?',
      summary: 'Catherine Flon a cousu un drapeau symbole d\'union.',
      videoSrc: 'media/kids/videos/catherine-flon.mp4',
      poster: 'media/kids/posters/catherine-flon.jpg'
    },
    {
      id: 'petion-bolivar',
      featured: false,
      icon: '🤲',
      cardTitle: 'Haïti aide Bolívar',
      question: 'Comment Haïti a aidé d\'autres peuples ?',
      summary: 'Haïti a aidé Simón Bolívar dans son combat pour la liberté.',
      videoSrc: 'media/kids/videos/petion-bolivar.mp4',
      poster: 'media/kids/posters/petion-bolivar.jpg'
    },
    {
      id: 'citadelle',
      featured: false,
      icon: '🏰',
      cardTitle: 'La Citadelle, grand château d\'Haïti',
      question: 'Qu\'est-ce que la Citadelle ?',
      summary: 'La Citadelle est un grand symbole de protection et de fierté.',
      videoSrc: 'media/kids/videos/citadelle.mp4',
      poster: 'media/kids/posters/citadelle.jpg'
    },
    {
      id: 'culture-rara',
      featured: false,
      icon: '🥁',
      cardTitle: 'Rara, musique du cœur',
      question: 'Qu\'est-ce que le rara ?',
      summary: 'Le rara est une musique joyeuse qui rassemble les gens.',
      videoSrc: 'media/kids/videos/culture-rara.mp4',
      poster: 'media/kids/posters/culture-rara.jpg'
    },
    {
      id: 'kreyol',
      featured: false,
      icon: '🗣️',
      cardTitle: 'Le créole, langue de tous',
      question: 'Pourquoi le créole est important ?',
      summary: 'Le créole haïtien aide tout le monde à se comprendre.',
      videoSrc: 'media/kids/videos/kreyol.mp4',
      poster: 'media/kids/posters/kreyol.jpg'
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
      if (!kidsVideoPlayer || !kidsVideoPlayer.src) return;
      kidsVideoPlayer.muted = false;
      var promise = kidsVideoPlayer.play();
      if (promise && typeof promise.catch === 'function') {
        promise.catch(function () {
          videoNowPlaying.textContent = 'Clique sur ▶ Lire la vidéo pour lancer le son.';
        });
      }
    }

    function loadEpisodeVideo(autoplay) {
      var episode = episodes[selectedEpisodeIndex];
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
        if (index !== -1) openEpisode(index, true, true);
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
      openEpisode(nextIndex, true, true);
    });

    kidsVideoPlayer.addEventListener('ended', function () {
      videoNowPlaying.textContent = 'Vidéo terminée. Clique sur « Voir l\'épisode suivant ».';
    });

    kidsVideoPlayer.addEventListener('error', function () {
      videoNowPlaying.textContent = 'Erreur de lecture vidéo. Vérifie les fichiers média.';
    });

    openEpisode(0, false, false);
  }

  document.addEventListener('DOMContentLoaded', initKidsHistory);
})();
