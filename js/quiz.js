(function () {
  'use strict';

  var QUESTIONS_PER_RUN = 20;

  var QUESTION_BANK = [
    {
      category: 'Histoire',
      question: 'Qui a proclamé l\'indépendance d\'Haïti à Gonaïves ?',
      choices: ['Toussaint Louverture', 'Henri Christophe', 'Jean-Jacques Dessalines', 'Alexandre Pétion'],
      correct: 2,
      explanation: 'Jean-Jacques Dessalines proclame l\'indépendance le 1er janvier 1804 à Gonaïves.'
    },
    {
      category: 'Histoire',
      question: 'Quelle cérémonie de 1791 est présentée comme le déclencheur de la Révolution haïtienne ?',
      choices: ['Le Congrès d\'Arcahaie', 'La cérémonie du Bois Caïman', 'Le traité de Bâle', 'Le serment du Jeu de Paume'],
      correct: 1,
      explanation: 'La cérémonie du Bois Caïman est souvent présentée comme l\'acte fondateur du soulèvement de 1791.'
    },
    {
      category: 'Histoire',
      question: 'Quelle bataille est décrite comme la victoire finale de la guerre d\'indépendance ?',
      choices: ['Crête-à-Pierrot', 'Vertières', 'Ravine-à-Couleuvres', 'Péligre'],
      correct: 1,
      explanation: 'La bataille de Vertières (novembre 1803) est la victoire décisive qui précède l\'indépendance.'
    },
    {
      category: 'Histoire',
      question: 'Quel dirigeant a signé en 1825 l\'ordonnance imposant l\'indemnité à la France ?',
      choices: ['Henri Christophe', 'Alexandre Pétion', 'Jean-Pierre Boyer', 'Faustin Soulouque'],
      correct: 2,
      explanation: 'Jean-Pierre Boyer accepte l\'ordonnance de Charles X en 1825.'
    },
    {
      category: 'Histoire',
      question: 'Quel montant initial de l\'indemnité est mentionné pour 1825 ?',
      choices: ['50 millions de francs-or', '90 millions de francs-or', '120 millions de francs-or', '150 millions de francs-or'],
      correct: 3,
      explanation: 'Le montant initial est 150 millions de francs-or, ensuite réduit à 90 millions en 1838.'
    },
    {
      category: 'Histoire',
      question: 'Quelle période correspond à l\'occupation américaine d\'Haïti ?',
      choices: ['1898–1912', '1915–1934', '1939–1945', '1957–1971'],
      correct: 1,
      explanation: 'L\'occupation américaine est généralement située de 1915 à 1934.'
    },
    {
      category: 'Histoire',
      question: 'En quelle année la dette liée à l\'indemnité d\'indépendance est-elle indiquée comme entièrement remboursée ?',
      choices: ['1904', '1915', '1947', '1964'],
      correct: 2,
      explanation: 'Le remboursement complet est indiqué en 1947.'
    },
    {
      category: 'Histoire',
      question: 'Quelles deux grandes constructions sont associées à Henri Christophe ?',
      choices: ['Palais National et MUPANAH', 'Citadelle Laferrière et Palais Sans-Souci', 'Fort Jacques et Fort Alexandre', 'Cathédrale de Cap-Haïtien et Môle Saint-Nicolas'],
      correct: 1,
      explanation: 'Henri Christophe est associé à la Citadelle Laferrière et au Palais Sans-Souci.'
    },
    {
      category: 'Culture',
      question: 'Dans quel cadre est né le premier drapeau haïtien (bleu et rouge) ?',
      choices: ['Le Congrès d\'Arcahaie', 'La bataille de Vertières', 'Le traité de Paris', 'Le Code Henri'],
      correct: 0,
      explanation: 'La création du drapeau est associée au Congrès d\'Arcahaie en 1803.'
    },
    {
      category: 'Culture',
      question: 'Quel est l\'hymne national d\'Haïti ?',
      choices: ['La Dessalinienne', 'L\'Indépendance', 'La Gonaïvienne', 'La République'],
      correct: 0,
      explanation: 'L\'hymne national est La Dessalinienne.'
    },
    {
      category: 'Culture',
      question: 'Le Vodou haïtien est décrit comme :',
      choices: ['Une religion fondée par un seul prophète', 'Une synthèse de traditions africaines recréée à Saint-Domingue', 'Une invention du XIXe siècle en Europe', 'Une branche officielle du catholicisme romain'],
      correct: 1,
      explanation: 'Le Vodou haïtien est une synthèse de traditions africaines recréées dans le contexte local.'
    },
    {
      category: 'Culture',
      question: 'Quelle nation est présentée comme la plus ancienne et fondamentale du panthéon Vodou ?',
      choices: ['Petro', 'Ibo', 'Rada', 'Gede'],
      correct: 2,
      explanation: 'La nation Rada est souvent présentée comme la base historique du panthéon.'
    },
    {
      category: 'Culture',
      question: 'Quelle nation Vodou est dite « née en Haïti » et associée aux Lwa « chauds » ?',
      choices: ['Nago', 'Petro', 'Kongo', 'Ibo'],
      correct: 1,
      explanation: 'La nation Petro est présentée comme née en Haïti.'
    },
    {
      category: 'Culture',
      question: 'Quel est le premier niveau d\'initiation mentionné dans le Kanzo ?',
      choices: ['Asogwe', 'Lave Tèt', 'Hounsi Bossal', 'Dessounin'],
      correct: 1,
      explanation: 'Le parcours d\'initiation commence par le Lave Tèt.'
    },
    {
      category: 'Culture',
      question: 'À quoi servent principalement les vèvè dans une cérémonie Vodou ?',
      choices: ['Décorer les murs du temple', 'Mesurer le temps rituel', 'Invoquer et appeler un Lwa précis', 'Noter les chants sacrés'],
      correct: 2,
      explanation: 'Les vèvè servent d\'invocation pour appeler un Lwa spécifique.'
    },
    {
      category: 'Culture',
      question: 'Quelle description correspond au vèvè de Damballah ?',
      choices: ['Un bateau et une ancre', 'Deux serpents entrelacés', 'Un cercueil et une tête de mort', 'Un cœur couronné et une épée'],
      correct: 1,
      explanation: 'Le vèvè de Damballah est associé à deux serpents entrelacés.'
    },
    {
      category: 'Géographie',
      question: 'Quelle ville est la capitale d\'Haïti ?',
      choices: ['Cap-Haïtien', 'Port-au-Prince', 'Gonaïves', 'Jacmel'],
      correct: 1,
      explanation: 'Port-au-Prince est la capitale du pays.'
    },
    {
      category: 'Géographie',
      question: 'Combien de départements compte Haïti selon son découpage actuel ?',
      choices: ['8', '9', '10', '12'],
      correct: 2,
      explanation: 'Haïti compte 10 départements.'
    },
    {
      category: 'Géographie',
      question: 'Dans quel département se trouve la Citadelle Laferrière ?',
      choices: ['Nord', 'Ouest', 'Sud-Est', 'Centre'],
      correct: 0,
      explanation: 'La Citadelle Laferrière se situe dans le département du Nord.'
    },
    {
      category: 'Géographie',
      question: 'Quel est le plus long fleuve d\'Haïti ?',
      choices: ['Massacre', 'Artibonite', 'Grise', 'Momance'],
      correct: 1,
      explanation: 'Le fleuve Artibonite est le plus long du pays.'
    },
    {
      category: 'Géographie',
      question: 'Quel est le chef-lieu du Nord-Ouest ?',
      choices: ['Port-de-Paix', 'Saint-Marc', 'Fort-Liberté', 'Môle Saint-Nicolas'],
      correct: 0,
      explanation: 'Le chef-lieu du Nord-Ouest est Port-de-Paix.'
    },
    {
      category: 'Géographie',
      question: 'Quel est le chef-lieu du département du Centre ?',
      choices: ['Mirebalais', 'Belladère', 'Hinche', 'Thomonde'],
      correct: 2,
      explanation: 'Hinche est le chef-lieu du département du Centre.'
    },
    {
      category: 'Géographie',
      question: 'Quel est le chef-lieu du Sud-Est ?',
      choices: ['Jacmel', 'Marigot', 'Les Cayes', 'Jérémie'],
      correct: 0,
      explanation: 'Jacmel est le chef-lieu du Sud-Est.'
    },
    {
      category: 'Société',
      question: 'Quelle constitution reconnaît officiellement le créole comme langue de la République au même titre que le français ?',
      choices: ['Constitution de 1805', 'Constitution de 1843', 'Constitution de 1987', 'Constitution de 2012'],
      correct: 2,
      explanation: 'La Constitution de 1987 officialise ce statut.'
    },
    {
      category: 'Société',
      question: 'Quelle proportion de la population est souvent indiquée comme ne parlant que le créole pendant longtemps ?',
      choices: ['Environ 30 %', 'Environ 55 %', 'Environ 75 %', 'Environ 95 %'],
      correct: 3,
      explanation: 'On cite souvent environ 95 % de créolophones monolingues.'
    },
    {
      category: 'Société',
      question: 'En quelle année l\'orthographe standardisée du créole est-elle officiellement adoptée par l\'IPN ?',
      choices: ['1968', '1979', '1987', '1995'],
      correct: 1,
      explanation: 'La standardisation est datée de 1979.'
    },
    {
      category: 'Société',
      question: 'Quelle station est citée comme pionnière de l\'information en créole ?',
      choices: ['Radio Caraïbes', 'Radio Kiskeya', 'Signal FM', 'Radio Haïti-Inter'],
      correct: 3,
      explanation: 'Radio Haïti-Inter est souvent citée comme pionnière.'
    },
    {
      category: 'Société',
      question: 'Qui est identifiée comme première femme cheffe d\'État en Haïti ?',
      choices: ['Michaëlle Jean', 'Ertha Pascal-Trouillot', 'Suzy Castor', 'Myrlande Manigat'],
      correct: 1,
      explanation: 'Ertha Pascal-Trouillot dirige la transition de 1990-1991.'
    },
    {
      category: 'Société',
      question: 'Comment appelle-t-on le réseau de commerçantes itinérantes essentiel à la distribution alimentaire ?',
      choices: ['Madan Sara', 'Fanm Solèy', 'Ti Machann Leta', 'Mache Nasyonal'],
      correct: 0,
      explanation: 'Le réseau des Madan Sara relie les marchés à travers le pays.'
    },
    {
      category: 'Société',
      question: 'Quel écrivain haïtien a écrit « Gouverneurs de la rosée » ?',
      choices: ['Jacques Roumain', 'Frankétienne', 'René Depestre', 'Jean Price-Mars'],
      correct: 0,
      explanation: '« Gouverneurs de la rosée » est de Jacques Roumain.'
    },

    /* Pool additionnel pour variabilité */
    {
      category: 'Histoire',
      question: 'En quelle année l\'indépendance d\'Haïti est-elle proclamée ?',
      choices: ['1791', '1802', '1804', '1818'],
      correct: 2,
      explanation: 'L\'indépendance est proclamée en 1804.'
    },
    {
      category: 'Histoire',
      question: 'Quel document est proclamé le 1er janvier 1804 à Gonaïves ?',
      choices: ['Le Code rural', 'L\'Acte de l\'Indépendance', 'La Constitution de 1843', 'Le Concordat'],
      correct: 1,
      explanation: 'L\'Acte de l\'Indépendance est proclamé à Gonaïves.'
    },
    {
      category: 'Culture',
      question: 'Quel rythme est particulièrement lié aux fanfares de rue en Haïti ?',
      choices: ['Rara', 'Tango', 'Fado', 'Flamenco'],
      correct: 0,
      explanation: 'Le Rara est emblématique des fanfares et processions populaires.'
    },
    {
      category: 'Culture',
      question: 'Dans le contexte haïtien, le terme « lakou » renvoie surtout à :',
      choices: ['Un mode d\'organisation communautaire', 'Une danse urbaine', 'Un parti politique', 'Un instrument de musique'],
      correct: 0,
      explanation: 'Le lakou désigne un espace social et communautaire structurant.'
    },
    {
      category: 'Géographie',
      question: 'Quel massif domine la péninsule du Sud ?',
      choices: ['Massif de la Selle', 'Massif du Nord', 'Massif de Terre-Neuve', 'Massif de la Hotte'],
      correct: 3,
      explanation: 'Le Massif de la Hotte est un relief majeur de la péninsule sud.'
    },
    {
      category: 'Géographie',
      question: 'Quel département inclut la ville des Gonaïves ?',
      choices: ['Artibonite', 'Nord', 'Ouest', 'Centre'],
      correct: 0,
      explanation: 'Les Gonaïves se trouvent dans le département de l\'Artibonite.'
    },
    {
      category: 'Société',
      question: 'Quel est un enjeu social récurrent souvent souligné en Haïti ?',
      choices: ['L\'accès aux services essentiels', 'La surproduction industrielle', 'La baisse du tourisme spatial', 'La désertification urbaine totale'],
      correct: 0,
      explanation: 'L\'accès aux services essentiels reste un enjeu social central.'
    },
    {
      category: 'Société',
      question: 'La diaspora haïtienne est surtout reconnue pour :',
      choices: ['Son rôle économique et ses transferts', 'La gestion des ports nationaux', 'L\'administration des écoles publiques', 'Le monopole de la monnaie'],
      correct: 0,
      explanation: 'La diaspora joue un rôle majeur par les transferts et l\'engagement économique.'
    }
  ];

  var currentIndex = 0;
  var score = 0;
  var points = 0;
  var streak = 0;
  var bestStreakValue = 0;
  var selectedChoice = null;
  var answered = false;
  var runQuestions = [];
  var categoryKeys = ['Histoire', 'Culture', 'Géographie', 'Société'];
  var catScores = { Histoire: 0, Culture: 0, Géographie: 0, Société: 0 };
  var categoryTotals = { Histoire: 0, Culture: 0, Géographie: 0, Société: 0 };
  var lastRunSignature = '';

  var sectionTitle = document.querySelector('.section-title');
  var progressBar = document.getElementById('progressBar');
  var progressTrack = document.getElementById('progressTrack');
  var progressPercent = document.getElementById('progressPercent');
  var questionCounter = document.getElementById('questionCounter');
  var scoreBadge = document.getElementById('scoreBadge');
  var pointsBadge = document.getElementById('pointsBadge');
  var streakBadge = document.getElementById('streakBadge');
  var questionCategory = document.getElementById('questionCategory');
  var questionText = document.getElementById('questionText');
  var choicesList = document.getElementById('choicesList');
  var selectionHint = document.getElementById('selectionHint');
  var feedbackBadge = document.getElementById('feedbackBadge');
  var explanationBox = document.getElementById('explanationBox');
  var submitBtn = document.getElementById('submitBtn');
  var nextBtn = document.getElementById('nextBtn');
  var quizCard = document.getElementById('quizCard');
  var resultsScreen = document.getElementById('resultsScreen');
  var progressWrap = document.getElementById('progressWrap');
  var quizMeta = document.getElementById('quizMeta');
  var quizIntro = document.getElementById('quizIntro');
  var startQuizBtn = document.getElementById('startQuizBtn');
  var finalScore = document.getElementById('finalScore');
  var finalTotal = document.getElementById('finalTotal');
  var finalPercent = document.getElementById('finalPercent');
  var quizTotalTitle = document.getElementById('quizTotalTitle');
  var resultMessage = document.getElementById('resultMessage');
  var resultSub = document.getElementById('resultSub');
  var correctCount = document.getElementById('correctCount');
  var wrongCount = document.getElementById('wrongCount');
  var bestStreak = document.getElementById('bestStreak');
  var restartBtn = document.getElementById('restartBtn');
  var scoreEls = {
    Histoire: document.getElementById('scoreHistoire'),
    Culture: document.getElementById('scoreCulture'),
    Géographie: document.getElementById('scoreGeographie'),
    Société: document.getElementById('scoreSociete')
  };
  var fillEls = {
    Histoire: document.getElementById('fillHistoire'),
    Culture: document.getElementById('fillCulture'),
    Géographie: document.getElementById('fillGeographie'),
    Société: document.getElementById('fillSociete')
  };

  if (!progressBar || !progressTrack || !progressPercent || !questionCounter || !scoreBadge || !pointsBadge || !streakBadge || !questionCategory || !questionText || !choicesList || !selectionHint || !feedbackBadge || !explanationBox || !submitBtn || !nextBtn || !quizCard || !resultsScreen || !progressWrap || !quizMeta || !quizIntro || !startQuizBtn || !restartBtn) {
    return;
  }

  var totalQuestions = Math.min(QUESTIONS_PER_RUN, QUESTION_BANK.length);
  if (quizTotalTitle) quizTotalTitle.textContent = totalQuestions;

  function randomInt(maxExclusive) {
    if (!maxExclusive || maxExclusive < 1) return 0;
    var cryptoObj = window.crypto || window.msCrypto;
    if (cryptoObj && cryptoObj.getRandomValues) {
      var arr = new Uint32Array(1);
      var limit = Math.floor(4294967296 / maxExclusive) * maxExclusive;
      var value;
      do {
        cryptoObj.getRandomValues(arr);
        value = arr[0];
      } while (value >= limit);
      return value % maxExclusive;
    }
    return Math.floor(Math.random() * maxExclusive);
  }

  function shuffle(array) {
    var copy = array.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = randomInt(i + 1);
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function makeQuestionVariant(base) {
    var indexedChoices = base.choices.map(function (choice, idx) {
      return { text: choice, originalIndex: idx };
    });
    var shuffledChoices = shuffle(indexedChoices);
    var newCorrect = shuffledChoices.findIndex(function (item) {
      return item.originalIndex === base.correct;
    });
    return {
      category: base.category,
      question: base.question,
      explanation: base.explanation,
      choices: shuffledChoices.map(function (item) { return item.text; }),
      correct: newCorrect
    };
  }

  function getRunSignature(items) {
    return items.map(function (q) {
      return q.question;
    }).join('###');
  }

  function pickRandomIndices(poolSize, take) {
    var idx = [];
    for (var i = 0; i < poolSize; i++) idx.push(i);
    for (var j = idx.length - 1; j > 0; j--) {
      var k = randomInt(j + 1);
      var tmp = idx[j];
      idx[j] = idx[k];
      idx[k] = tmp;
    }
    return idx.slice(0, take);
  }

  function buildRunQuestions() {
    var selectedIndices;
    var selectedBase;
    var signature = '';
    var attempts = 0;
    do {
      selectedIndices = pickRandomIndices(QUESTION_BANK.length, totalQuestions);
      selectedBase = selectedIndices.map(function (index) {
        return QUESTION_BANK[index];
      });
      signature = getRunSignature(selectedBase);
      attempts += 1;
    } while (lastRunSignature && signature === lastRunSignature && attempts < 5);
    lastRunSignature = signature;
    return selectedBase.map(makeQuestionVariant);
  }

  function updateMeta() {
    scoreBadge.textContent = 'Score : ' + score;
    pointsBadge.textContent = 'Points : ' + points;
    streakBadge.textContent = 'Série : ' + streak;
    questionCounter.textContent = 'Question ' + (currentIndex + 1) + ' / ' + totalQuestions;
  }

  function calculatePercentage(completed, total) {
    if (total <= 0) return 0;
    return Math.round((completed / total) * 100);
  }

  function computeEarnedPoints(currentStreak) {
    return 10 + Math.min(currentStreak * 2, 20);
  }

  function updateProgress(completedCount) {
    var clampedCount = Math.max(0, Math.min(completedCount || 0, totalQuestions));
    var pct = calculatePercentage(clampedCount, totalQuestions);
    progressBar.style.width = pct + '%';
    progressPercent.textContent = pct + '%';
    progressTrack.setAttribute('aria-valuenow', String(pct));
    progressTrack.setAttribute('aria-valuetext', pct + '%');
  }

  function updateCategoryRows() {
    categoryKeys.forEach(function (key) {
      if (!scoreEls[key]) return;
      scoreEls[key].textContent = catScores[key] + ' / ' + categoryTotals[key];
      if (fillEls[key]) {
        var total = categoryTotals[key];
        var ratio = calculatePercentage(catScores[key], total);
        fillEls[key].style.width = ratio + '%';
      }
    });
  }

  function setFeedback(type, text) {
    if (!feedbackBadge) return;
    var hasContent = Boolean(type && text);
    feedbackBadge.className = hasContent
      ? 'quiz-feedback visible ' + (type === 'ok' ? 'quiz-feedback--ok' : 'quiz-feedback--ko')
      : 'quiz-feedback';
    feedbackBadge.textContent = hasContent ? text : '';
  }

  function setStartState() {
    quizIntro.style.display = '';
    progressWrap.style.display = 'none';
    quizMeta.style.display = 'none';
    quizCard.style.display = 'none';
    resultsScreen.className = 'quiz-results quiz-card';
    submitBtn.disabled = true;
    submitBtn.style.display = '';
    nextBtn.className = 'quiz-next-btn';
    nextBtn.disabled = true;
    setFeedback('', '');
  }

  function startQuiz() {
    runQuestions = buildRunQuestions();
    currentIndex = 0;
    score = 0;
    points = 0;
    streak = 0;
    bestStreakValue = 0;
    selectedChoice = null;
    answered = false;
    categoryKeys.forEach(function (k) {
      catScores[k] = 0;
      categoryTotals[k] = 0;
    });
    runQuestions.forEach(function (q) {
      categoryTotals[q.category] += 1;
    });
    quizIntro.style.display = 'none';
    progressWrap.style.display = '';
    quizMeta.style.display = '';
    quizCard.style.display = '';
    resultsScreen.className = 'quiz-results quiz-card';
    renderQuestion();
  }

  function renderQuestion() {
    quizCard.classList.add('is-transitioning');
    answered = false;
    selectedChoice = null;
    var q = runQuestions[currentIndex];
    if (!q) {
      showResults();
      return;
    }

    updateProgress(currentIndex);
    updateMeta();

    questionCategory.textContent = q.category;
    questionText.textContent = q.question;
    choicesList.innerHTML = '';

    ['A', 'B', 'C', 'D'].forEach(function (letter, idx) {
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.className = 'quiz-choice-btn';
      btn.type = 'button';
      btn.textContent = letter + ') ' + q.choices[idx];
      btn.addEventListener('click', function () {
        if (answered) return;
        selectedChoice = idx;
        choicesList.querySelectorAll('.quiz-choice-btn').forEach(function (b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
        submitBtn.disabled = false;
        selectionHint.textContent = 'Réponse ' + letter + ' sélectionnée. Cliquez sur « Valider la réponse ».';
        setFeedback('', '');
      });
      li.appendChild(btn);
      choicesList.appendChild(li);
    });

    setFeedback('', '');
    selectionHint.textContent = '';
    explanationBox.textContent = '';
    explanationBox.className = 'quiz-explanation';
    submitBtn.disabled = true;
    submitBtn.style.display = '';
    nextBtn.className = 'quiz-next-btn';
    nextBtn.disabled = true;
    nextBtn.textContent = (currentIndex === totalQuestions - 1) ? 'Voir mes résultats →' : 'Question suivante →';
    window.requestAnimationFrame(function () {
      quizCard.classList.remove('is-transitioning');
    });
  }

  function submitAnswer() {
    if (answered || selectedChoice === null) return;
    answered = true;

    var q = runQuestions[currentIndex];
    var allBtns = choicesList.querySelectorAll('.quiz-choice-btn');
    allBtns.forEach(function (btn) { btn.disabled = true; });
    submitBtn.style.display = 'none';
    selectionHint.textContent = '';

    if (selectedChoice === q.correct) {
      score += 1;
      streak += 1;
      bestStreakValue = Math.max(bestStreakValue, streak);
      var earnedPoints = computeEarnedPoints(streak);
      points += earnedPoints;
      catScores[q.category] += 1;
      allBtns[selectedChoice].classList.remove('selected');
      allBtns[selectedChoice].classList.add('correct');
      explanationBox.className = 'quiz-explanation visible';
      explanationBox.textContent = '';
      var okPrefix = document.createTextNode('✓ ');
      var okText = document.createTextNode(q.explanation);
      explanationBox.appendChild(okPrefix);
      explanationBox.appendChild(okText);
      setFeedback('ok', 'Bonne réponse ! +' + earnedPoints + ' points');
    } else {
      streak = 0;
      allBtns[selectedChoice].classList.remove('selected');
      allBtns[selectedChoice].classList.add('wrong');
      allBtns[q.correct].classList.add('correct');
      explanationBox.className = 'quiz-explanation wrong-explain visible';
      explanationBox.textContent = '';
      var prefix = document.createTextNode('✗ La bonne réponse était : ');
      var strongNode = document.createElement('strong');
      strongNode.textContent = ['A', 'B', 'C', 'D'][q.correct] + ') ' + q.choices[q.correct];
      var suffix = document.createTextNode('. ' + q.explanation);
      explanationBox.appendChild(prefix);
      explanationBox.appendChild(strongNode);
      explanationBox.appendChild(suffix);
      setFeedback('ko', 'Réponse incorrecte. La série repart à 0.');
    }

    updateProgress(currentIndex + 1);
    updateMeta();
    updateCategoryRows();
    nextBtn.className = 'quiz-next-btn visible';
    nextBtn.disabled = false;
  }

  function getResultCopy(percent) {
    if (percent >= 90) return { msg: 'Félicitations ! Vous êtes un(e) véritable expert(e) d\'Haïti !', sub: 'Un score exceptionnel ! Votre connaissance de l\'histoire, de la culture, de la géographie et de la société haïtiennes est remarquable.' };
    if (percent >= 70) return { msg: 'Très bien ! Vous connaissez bien Haïti.', sub: 'Excellent résultat ! Continuez à explorer les pages thématiques pour aller encore plus loin.' };
    if (percent >= 50) return { msg: 'Pas mal ! Continuez à explorer ce site pour en apprendre davantage.', sub: 'Bonne base de connaissances ! Plongez dans nos sections Histoire, Culture et Géographie pour progresser encore.' };
    if (percent >= 30) return { msg: 'Vous avez encore beaucoup à découvrir sur Haïti. Ce site est là pour vous !', sub: 'Ne vous découragez pas — chaque page de ce site est une invitation à mieux connaître la première République noire du monde.' };
    return { msg: 'Ne vous découragez pas — explorez nos pages pour tout apprendre sur Haïti !', sub: 'Le voyage commence ici ! Ce site rassemble des centaines de pages sur l\'histoire, la culture et la société haïtiennes.' };
  }

  function showResults() {
    quizCard.style.display = 'none';
    progressWrap.style.display = 'none';
    quizMeta.style.display = 'none';
    nextBtn.className = 'quiz-next-btn';
    nextBtn.disabled = true;
    submitBtn.style.display = '';

    var percent = Math.round((score / totalQuestions) * 100);
    var wrong = totalQuestions - score;
    var copy = getResultCopy(percent);

    if (finalScore) finalScore.textContent = String(score);
    if (finalTotal) finalTotal.textContent = '/ ' + totalQuestions;
    if (finalPercent) finalPercent.textContent = percent + '%';
    if (resultMessage) resultMessage.textContent = copy.msg;
    if (resultSub) resultSub.textContent = copy.sub;
    if (correctCount) correctCount.textContent = String(score);
    if (wrongCount) wrongCount.textContent = String(wrong);
    if (bestStreak) bestStreak.textContent = String(bestStreakValue);

    updateCategoryRows();
    setFeedback('', '');
    resultsScreen.className = 'quiz-results quiz-card visible';
  }

  function nextQuestion() {
    if (!answered) return;
    currentIndex += 1;
    if (currentIndex >= totalQuestions) {
      showResults();
      return;
    }
    renderQuestion();
  }

  startQuizBtn.addEventListener('click', startQuiz);
  restartBtn.addEventListener('click', startQuiz);
  submitBtn.addEventListener('click', submitAnswer);
  nextBtn.addEventListener('click', nextQuestion);

  setStartState();
}());
