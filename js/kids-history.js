/* =====================================================
   Histoire pour Enfants — Video learning interactions
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
      scriptOutline: [
        'Présenter Toussaint comme un ami du peuple.',
        'Montrer qu\'il voulait la liberté pour tous.',
        'Raconter qu\'il parlait avec calme et courage.',
        'Expliquer qu\'il organisait les gens pour se protéger.',
        'Terminer avec son message : rester debout et unis.'
      ],
      narrationScript: [
        'Il y a longtemps, dans le pays appelé Haïti, vivait un homme nommé Toussaint Louverture.',
        'Il regardait les familles et il voyait leur grande douleur.',
        'Alors, il a dit : « Nous méritons la liberté. »',
        'Il parlait doucement, mais son cœur était très fort.',
        'Il aidait les gens à rester unis, comme une grande famille.',
        'Il montrait qu\'on peut être intelligent et courageux en même temps.',
        'Grâce à son exemple, beaucoup de personnes ont gardé l\'espoir.',
        'Aujourd\'hui, on se souvient de Toussaint comme d\'un guide de lumière.'
      ],
      narrationTips: [
        'Voix douce et rassurante.',
        'Faire une petite pause après chaque phrase.',
        'Sourire dans la voix quand on dit « espoir ».',
        'Utiliser un ton calme pour donner confiance.'
      ],
      scenes: [
        {
          visual: '🌅',
          title: 'Un matin sur l\'île',
          narration: 'Le soleil se lève. Un petit garçon voit Toussaint marcher avec confiance.',
          imagePrompt: 'Illustration cartoon, matin doux en Haïti, collines vertes, style maternelle, couleurs pastel, ambiance rassurante.'
        },
        {
          visual: '🧑🏾‍🌾',
          title: 'Il écoute le peuple',
          narration: 'Toussaint écoute les familles. Il comprend leur tristesse et leur fatigue.',
          imagePrompt: 'Cartoon enfants, homme bienveillant qui écoute des familles, style livre jeunesse, visages gentils, lumière chaude.'
        },
        {
          visual: '🕊️',
          title: 'Le mot liberté',
          narration: 'Il dit un mot important : liberté. Ce mot donne du courage.',
          imagePrompt: 'Mot liberté en lettres douces, colombes blanches, enfants souriants, style éducatif coloré.'
        },
        {
          visual: '🤝',
          title: 'Rester unis',
          narration: 'Les gens se tiennent la main. Ensemble, ils deviennent plus forts.',
          imagePrompt: 'Groupe uni main dans la main, diversité haïtienne, style cartoon rond, fond coloré joyeux.'
        },
        {
          visual: '⭐',
          title: 'Un héros dans les cœurs',
          narration: 'Toussaint devient un symbole de courage pour les enfants et les adultes.',
          imagePrompt: 'Portrait héroïque doux de Toussaint Louverture, étoiles et drapeau haïtien, style illustration enfantine.'
        }
      ],
      closing: 'Toi aussi, tu peux être courageux et gentil chaque jour.'
    },
    {
      id: 'haiti-liberte',
      featured: true,
      icon: '🗽',
      cardTitle: 'La liberté d\'Haïti',
      question: 'Comment Haïti est devenue libre ?',
      summary: 'Le peuple d\'Haïti s\'est levé ensemble. Avec beaucoup de courage, il a gagné sa liberté.',
      scriptOutline: [
        'Montrer que le peuple voulait vivre libre.',
        'Expliquer que beaucoup de personnes ont aidé.',
        'Dire que la route était difficile.',
        'Présenter la date du 1er janvier 1804 simplement.',
        'Insister sur la joie de la liberté partagée.'
      ],
      narrationScript: [
        'Il y a longtemps, des familles en Haïti rêvaient d\'une vie libre.',
        'Elles ont décidé de se lever ensemble, sans abandonner.',
        'Le chemin était long et parfois très dur.',
        'Mais le courage du peuple grandissait chaque jour.',
        'Des femmes et des hommes ont avancé main dans la main.',
        'Puis, un grand jour est arrivé : le 1er janvier 1804.',
        'Ce jour-là, Haïti est devenue libre.',
        'Depuis ce moment, cette liberté brille comme une grande lumière.'
      ],
      narrationTips: [
        'Parler comme une histoire du soir.',
        'Accentuer la date « 1er janvier 1804 » lentement.',
        'Garder une voix joyeuse à la fin.',
        'Utiliser un rythme régulier pour rassurer les enfants.'
      ],
      scenes: [
        {
          visual: '🌱',
          title: 'Un rêve dans les cœurs',
          narration: 'Les familles regardent le ciel et rêvent de vivre libres.',
          imagePrompt: 'Familles haïtiennes cartoon regardant le ciel, ambiance d\'espoir, style maternelle, couleurs douces.'
        },
        {
          visual: '🔥',
          title: 'Le courage grandit',
          narration: 'Le courage devient une grande flamme de solidarité.',
          imagePrompt: 'Flamme symbolique non violente, peuple uni en cercle, style jeunesse éducative, couleurs chaudes.'
        },
        {
          visual: '🥁',
          title: 'Le peuple avance',
          narration: 'Les pas et les tambours donnent de la force à tous.',
          imagePrompt: 'Tambours traditionnels, marche collective joyeuse, cartoon simple, environnement tropical.'
        },
        {
          visual: '📜',
          title: 'Le grand jour',
          narration: 'Le 1er janvier 1804, Haïti annonce sa liberté.',
          imagePrompt: 'Parchemin annonçant la liberté, drapeau haïtien, foule heureuse, style enfant.'
        },
        {
          visual: '🎉',
          title: 'Une joie partagée',
          narration: 'Les familles chantent et remercient ce moment historique.',
          imagePrompt: 'Célébration familiale en Haïti, confettis doux, style cartoon éducatif, visages souriants.'
        }
      ],
      closing: 'La liberté est un trésor. On la protège avec respect et amour.'
    },
    {
      id: 'bois-caiman',
      featured: true,
      icon: '🌳',
      cardTitle: 'Bois Caïman, un moment d\'union',
      question: 'Que s\'est-il passé à Bois Caïman ?',
      summary: 'À Bois Caïman, des personnes se sont réunies. Elles ont promis de rester unies pour la liberté.',
      scriptOutline: [
        'Présenter un lieu appelé Bois Caïman.',
        'Montrer une réunion de courage et d\'espoir.',
        'Expliquer la promesse d\'être unis.',
        'Dire que ce moment a donné de la force au peuple.',
        'Terminer sur l\'idée de solidarité.'
      ],
      narrationScript: [
        'Une nuit, dans un lieu appelé Bois Caïman, des personnes se sont réunies.',
        'Elles avaient peur, mais elles avaient aussi beaucoup d\'espoir.',
        'Ensemble, elles ont parlé de liberté.',
        'Elles ont fait une promesse : rester unies.',
        'Cette promesse a donné du courage à beaucoup de familles.',
        'Le peuple a compris qu\'il n\'était pas seul.',
        'Bois Caïman est devenu un symbole d\'union.',
        'Quand on est unis, on peut avancer vers des jours meilleurs.'
      ],
      narrationTips: [
        'Commencer avec une voix douce, comme un secret.',
        'Monter un peu la voix sur « rester unies ».',
        'Garder un ton chaleureux et protecteur.',
        'Finir lentement pour laisser une émotion positive.'
      ],
      scenes: [
        {
          visual: '🌙',
          title: 'Une nuit importante',
          narration: 'La lune éclaire la forêt. Des familles arrivent en silence.',
          imagePrompt: 'Nuit calme en forêt tropicale, lune douce, personnages cartoon bienveillants, style conte pour enfants.'
        },
        {
          visual: '🫶',
          title: 'Des cœurs rassemblés',
          narration: 'Des personnes se rapprochent et se soutiennent.',
          imagePrompt: 'Groupe uni en cercle, mains proches, style enfant simple, ambiance chaleureuse.'
        },
        {
          visual: '💬',
          title: 'Parler de liberté',
          narration: 'Ils partagent un message clair : tout le monde mérite la liberté.',
          imagePrompt: 'Bulles de dialogue avec mot liberté, style pédagogique maternelle, couleurs propres.'
        },
        {
          visual: '🤲',
          title: 'Une promesse commune',
          narration: 'Ils promettent de rester ensemble dans les moments difficiles.',
          imagePrompt: 'Mains réunies, promesse symbolique, forêt douce, style animation jeunesse.'
        },
        {
          visual: '💡',
          title: 'Une lumière pour la suite',
          narration: 'Cette réunion devient une lumière pour continuer le chemin.',
          imagePrompt: 'Lumière chaude dans la nuit, silhouettes souriantes, style cartoon éducatif.'
        }
      ],
      closing: 'En famille et entre amis, l\'union donne de la force.'
    },
    {
      id: 'dessalines',
      featured: false,
      icon: '🛡️',
      cardTitle: 'Dessalines, protecteur de la liberté',
      question: 'Qui était Jean-Jacques Dessalines ?',
      summary: 'Jean-Jacques Dessalines était un grand chef. Il a aidé Haïti à devenir un pays libre.',
      scriptOutline: [
        'Présenter Dessalines comme un chef déterminé.',
        'Montrer son rôle pour protéger le peuple.',
        'Expliquer qu\'il croyait en la liberté totale.',
        'Rappeler qu\'il a participé au grand jour de 1804.',
        'Souligner sa place dans la mémoire d\'Haïti.'
      ],
      narrationScript: [
        'Jean-Jacques Dessalines était un chef très déterminé.',
        'Il voulait un pays où les familles vivent libres et dignes.',
        'Il avançait avec force pour protéger son peuple.',
        'Il travaillait avec d\'autres héros pour gagner la liberté.',
        'Le 1er janvier 1804, Haïti devient libre.',
        'Dessalines est l\'un des grands visages de ce moment.',
        'Son nom rappelle le courage et la responsabilité.',
        'Aujourd\'hui encore, on lui dit merci pour ce combat.'
      ],
      narrationTips: [
        'Voix ferme mais douce.',
        'Bien articuler le nom « Jean-Jacques Dessalines ».',
        'Utiliser une émotion fière à la fin.',
        'Rester simple et rassurant pour les petits.'
      ],
      scenes: [
        {
          visual: '🏞️',
          title: 'Un chef sur le chemin',
          narration: 'Dessalines marche avec son peuple vers un futur libre.',
          imagePrompt: 'Chef haïtien cartoon marchant avec familles, paysage haïtien, style livre pour enfants.'
        },
        {
          visual: '🧑🏾‍🤝‍🧑🏽',
          title: 'Protéger les familles',
          narration: 'Il encourage chacun à rester fort et uni.',
          imagePrompt: 'Familles protégées, ambiance positive, couleurs vives propres, style animation douce.'
        },
        {
          visual: '🏁',
          title: 'Ne pas abandonner',
          narration: 'Même quand c\'est difficile, il garde le cap.',
          imagePrompt: 'Symbole de persévérance, route et drapeau haïtien, cartoon minimaliste.'
        },
        {
          visual: '📅',
          title: 'Le grand moment',
          narration: 'Il participe à l\'annonce de l\'indépendance d\'Haïti.',
          imagePrompt: 'Calendrier 1er janvier 1804, foule joyeuse, style pédagogique enfants.'
        },
        {
          visual: '❤️',
          title: 'Un nom dans la mémoire',
          narration: 'Les enfants apprennent son nom avec respect.',
          imagePrompt: 'Classe enfantine avec portrait de Dessalines, ambiance joyeuse et éducative.'
        }
      ],
      closing: 'Le courage, c\'est aussi protéger les autres avec un grand cœur.'
    },
    {
      id: 'haiti-monde',
      featured: false,
      icon: '🌍',
      cardTitle: 'Pourquoi Haïti compte pour le monde',
      question: 'Pourquoi Haïti est importante dans l\'histoire du monde ?',
      summary: 'Haïti a montré au monde que la liberté est possible. Son histoire donne de l\'espoir à beaucoup de peuples.',
      scriptOutline: [
        'Dire qu\'Haïti est petite par la taille mais grande par son message.',
        'Rappeler que la liberté d\'Haïti a inspiré le monde.',
        'Montrer l\'idée de dignité pour tous les humains.',
        'Expliquer que cette histoire continue aujourd\'hui.',
        'Inviter les enfants à être fiers et respectueux.'
      ],
      narrationScript: [
        'Haïti est une île, mais son histoire voyage partout.',
        'Quand Haïti devient libre, beaucoup de peuples écoutent ce message.',
        'Ce message dit : chaque personne mérite la dignité.',
        'Des hommes et des femmes dans d\'autres pays trouvent du courage.',
        'L\'histoire d\'Haïti montre que l\'espoir peut grandir même dans les moments durs.',
        'Elle nous apprend à respecter la liberté de chacun.',
        'Elle nous rappelle la force de l\'union et de la solidarité.',
        'C\'est pour cela que Haïti est importante pour le monde entier.'
      ],
      narrationTips: [
        'Ton inspirant et lumineux.',
        'Parler lentement sur « monde entier ».',
        'Garder des phrases courtes et claires.',
        'Terminer avec un sourire audible.'
      ],
      scenes: [
        {
          visual: '🏝️',
          title: 'Une île, un grand message',
          narration: 'Haïti est une île magnifique avec une grande histoire.',
          imagePrompt: 'Île d\'Haïti cartoon vue du ciel, couleurs vives propres, style éducatif enfant.'
        },
        {
          visual: '📣',
          title: 'Le message voyage',
          narration: 'Le message de liberté part d\'Haïti et traverse le monde.',
          imagePrompt: 'Carte du monde ludique avec lignes lumineuses partant d\'Haïti, style maternelle.'
        },
        {
          visual: '🫂',
          title: 'Inspirer les peuples',
          narration: 'D\'autres peuples trouvent du courage grâce à cet exemple.',
          imagePrompt: 'Enfants de différentes cultures se tenant la main, style cartoon doux.'
        },
        {
          visual: '⚖️',
          title: 'Respect et dignité',
          narration: 'Tous les humains méritent le respect et la dignité.',
          imagePrompt: 'Symbole de justice simplifié pour enfants, couleurs chaudes, ambiance positive.'
        },
        {
          visual: '🌟',
          title: 'Une lumière pour demain',
          narration: 'L\'histoire d\'Haïti continue d\'inspirer les nouvelles générations.',
          imagePrompt: 'Enfants regardant étoiles au-dessus du drapeau haïtien, style poétique jeunesse.'
        }
      ],
      closing: 'Ton histoire compte aussi. Ta voix peut apporter de la lumière.'
    }
  ];

  function createEpisodeCard(episode, isFeatured) {
    var card = document.createElement('article');
    card.className = 'kids-episode-card';
    card.setAttribute('data-episode-id', episode.id);

    var featuredBadge = isFeatured ? '<span class="kids-episode-card__featured">Épisode vedette</span>' : '';

    card.innerHTML = ''
      + '<div class="kids-episode-card__thumb" aria-hidden="true">'
      + '  <span>' + episode.icon + '</span>'
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

    var sceneVisual = document.getElementById('sceneVisual');
    var sceneMeta = document.getElementById('sceneMeta');
    var sceneTitle = document.getElementById('sceneTitle');
    var sceneNarration = document.getElementById('sceneNarration');

    var scriptOutlineList = document.getElementById('scriptOutlineList');
    var fullNarration = document.getElementById('fullNarration');
    var sceneBreakdown = document.getElementById('sceneBreakdown');
    var imagePromptsList = document.getElementById('imagePromptsList');
    var narrationTipsList = document.getElementById('narrationTipsList');
    var closingMessage = document.getElementById('closingMessage');

    var playSceneBtn = document.getElementById('playSceneBtn');
    var prevSceneBtn = document.getElementById('prevSceneBtn');
    var nextSceneBtn = document.getElementById('nextSceneBtn');
    var nextEpisodeBtn = document.getElementById('nextEpisodeBtn');

    var selectedEpisodeIndex = 0;
    var selectedSceneIndex = 0;
    var autoplayTimer = null;

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
      playSceneBtn.textContent = '▶ Lire la scène';
    }

    function renderScene() {
      var episode = episodes[selectedEpisodeIndex];
      var scene = episode.scenes[selectedSceneIndex];

      sceneVisual.textContent = scene.visual;
      sceneMeta.textContent = 'Scène ' + (selectedSceneIndex + 1) + ' / ' + episode.scenes.length;
      sceneTitle.textContent = scene.title;
      sceneNarration.textContent = scene.narration;
    }

    function renderDetails() {
      var episode = episodes[selectedEpisodeIndex];

      episodeBadge.textContent = 'Épisode ' + (selectedEpisodeIndex + 1);
      episodeTitle.textContent = episode.cardTitle;
      episodeSummary.textContent = episode.summary;

      scriptOutlineList.innerHTML = episode.scriptOutline
        .map(function (item) { return '<li>' + item + '</li>'; })
        .join('');

      fullNarration.innerHTML = episode.narrationScript
        .map(function (line) { return '<p>' + line + '</p>'; })
        .join('');

      sceneBreakdown.innerHTML = episode.scenes
        .map(function (scene, index) {
          return ''
            + '<article class="kids-scene-breakdown-card">'
            + '  <p class="kids-scene-breakdown-card__meta">Scène ' + (index + 1) + '</p>'
            + '  <h5>' + scene.title + '</h5>'
            + '  <p><strong>Narration :</strong> ' + scene.narration + '</p>'
            + '  <p><strong>Visuel :</strong> ' + scene.visual + ' Illustration douce pour enfants.</p>'
            + '</article>';
        })
        .join('');

      imagePromptsList.innerHTML = episode.scenes
        .map(function (scene) { return '<li>' + scene.imagePrompt + '</li>'; })
        .join('');

      narrationTipsList.innerHTML = episode.narrationTips
        .map(function (tip) { return '<li>' + tip + '</li>'; })
        .join('');

      closingMessage.textContent = episode.closing;
    }

    function setActiveEpisodeCard() {
      document.querySelectorAll('.kids-episode-card').forEach(function (card) {
        card.classList.toggle('is-active', card.getAttribute('data-episode-id') === episodes[selectedEpisodeIndex].id);
      });
    }

    function openEpisode(index, shouldScroll) {
      selectedEpisodeIndex = index;
      selectedSceneIndex = 0;
      stopAutoplay();
      renderDetails();
      renderScene();
      setActiveEpisodeCard();

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
        if (index !== -1) openEpisode(index, true);
      });
    });

    playSceneBtn.addEventListener('click', function () {
      if (autoplayTimer) {
        stopAutoplay();
        return;
      }

      playSceneBtn.textContent = '⏸ Pause';
      autoplayTimer = setInterval(function () {
        selectedSceneIndex = (selectedSceneIndex + 1) % episodes[selectedEpisodeIndex].scenes.length;
        renderScene();
      }, 4500);
    });

    prevSceneBtn.addEventListener('click', function () {
      stopAutoplay();
      var total = episodes[selectedEpisodeIndex].scenes.length;
      selectedSceneIndex = (selectedSceneIndex - 1 + total) % total;
      renderScene();
    });

    nextSceneBtn.addEventListener('click', function () {
      stopAutoplay();
      selectedSceneIndex = (selectedSceneIndex + 1) % episodes[selectedEpisodeIndex].scenes.length;
      renderScene();
    });

    nextEpisodeBtn.addEventListener('click', function () {
      var nextIndex = (selectedEpisodeIndex + 1) % episodes.length;
      openEpisode(nextIndex, true);
    });

    openEpisode(0, false);
  }

  document.addEventListener('DOMContentLoaded', initKidsHistory);
})();
