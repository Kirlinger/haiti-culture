(function () {
  'use strict';

  const QUESTIONS = [
    /* ── HISTOIRE (1-8) ── */
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
      explanation: 'La cérémonie du Bois Caïman (Bwa Kayiman) est indiquée comme l\'acte fondateur du soulèvement de 1791.'
    },
    {
      category: 'Histoire',
      question: 'Quelle bataille est décrite comme la victoire finale de la guerre d\'indépendance ?',
      choices: ['Crête-à-Pierrot', 'Vertières', 'Ravine-à-Couleuvres', 'Péligre'],
      correct: 1,
      explanation: 'La bataille de Vertières (novembre 1803), près de Cap-Haïtien, est présentée comme la victoire décisive.'
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
      explanation: 'Le montant initial cité est 150 millions de francs-or, réduit ensuite à 90 millions en 1838.'
    },
    {
      category: 'Histoire',
      question: 'Quelle période correspond à l\'occupation américaine d\'Haïti ?',
      choices: ['1898–1912', '1915–1934', '1939–1945', '1957–1971'],
      correct: 1,
      explanation: 'Le site situe l\'occupation américaine de 1915 à 1934.'
    },
    {
      category: 'Histoire',
      question: 'En quelle année la dette liée à l\'indemnité d\'indépendance est-elle indiquée comme entièrement remboursée ?',
      choices: ['1904', '1915', '1947', '1964'],
      correct: 2,
      explanation: 'La page Histoire précise un remboursement achevé en 1947.'
    },
    {
      category: 'Histoire',
      question: 'Quelles deux grandes constructions sont associées à Henri Christophe ?',
      choices: ['Palais National et MUPANAH', 'Citadelle Laferrière et Palais Sans-Souci', 'Fort Jacques et Fort Alexandre', 'Cathédrale de Cap-Haïtien et Môle Saint-Nicolas'],
      correct: 1,
      explanation: 'Henri Christophe est lié à la Citadelle Laferrière et au Palais Sans-Souci.'
    },

    /* ── CULTURE (9-16) ── */
    {
      category: 'Culture',
      question: 'Dans quel cadre est né le premier drapeau haïtien (bleu et rouge) selon le site ?',
      choices: ['Le Congrès d\'Arcahaie', 'La bataille de Vertières', 'Le traité de Paris', 'Le Code Henri'],
      correct: 0,
      explanation: 'Le site associe la création du drapeau au Congrès d\'Arcahaie (1803).'
    },
    {
      category: 'Culture',
      question: 'Quel est l\'hymne national d\'Haïti ?',
      choices: ['La Dessalinienne', 'L\'Indépendance', 'La Gonaïvienne', 'La République'],
      correct: 0,
      explanation: 'L\'hymne national présenté est La Dessalinienne.'
    },
    {
      category: 'Culture',
      question: 'Le Vodou haïtien est décrit comme :',
      choices: ['Une religion fondée par un seul prophète', 'Une synthèse de traditions africaines recréée à Saint-Domingue', 'Une invention du XIXe siècle en Europe', 'Une branche officielle du catholicisme romain'],
      correct: 1,
      explanation: 'Le site décrit le Vodou comme une synthèse de traditions africaines transformées en Haïti.'
    },
    {
      category: 'Culture',
      question: 'Quelle nation est présentée comme la plus ancienne et fondamentale du panthéon Vodou ?',
      choices: ['Petro', 'Ibo', 'Rada', 'Gede'],
      correct: 2,
      explanation: 'La nation Rada est explicitement décrite comme la base historique du panthéon.'
    },
    {
      category: 'Culture',
      question: 'Quelle nation Vodou est dite « née en Haïti » et associée aux Lwa « chauds » ?',
      choices: ['Nago', 'Petro', 'Kongo', 'Ibo'],
      correct: 1,
      explanation: 'La page Vodou présente la nation Petro comme née en Haïti.'
    },
    {
      category: 'Culture',
      question: 'Quel est le premier niveau d\'initiation mentionné dans le Kanzo ?',
      choices: ['Asogwe', 'Lave Tèt', 'Hounsi Bossal', 'Dessounin'],
      correct: 1,
      explanation: 'Le Kanzo inclut d\'abord Lave Tèt, puis Hounsi Bossal, puis Houngan/Mambo Asogwe.'
    },
    {
      category: 'Culture',
      question: 'À quoi servent principalement les vèvè dans une cérémonie Vodou ?',
      choices: ['Décorer les murs du temple', 'Mesurer le temps rituel', 'Invoquer et appeler un Lwa précis', 'Noter les chants sacrés'],
      correct: 2,
      explanation: 'Les vèvè sont des symboles d\'invocation, tracés pour appeler le Lwa concerné.'
    },
    {
      category: 'Culture',
      question: 'Quelle description correspond au vèvè de Damballah ?',
      choices: ['Un bateau et une ancre', 'Deux serpents entrelacés', 'Un cercueil et une tête de mort', 'Un cœur couronné et une épée'],
      correct: 1,
      explanation: 'Le site donne pour Damballah le motif de deux serpents entrelacés.'
    },

    /* ── GÉOGRAPHIE (17-23) ── */
    {
      category: 'Géographie',
      question: 'Quelle ville est la capitale d\'Haïti ?',
      choices: ['Cap-Haïtien', 'Port-au-Prince', 'Gonaïves', 'Jacmel'],
      correct: 1,
      explanation: 'Port-au-Prince est la capitale politique et économique du pays.'
    },
    {
      category: 'Géographie',
      question: 'Combien de départements compte Haïti selon son découpage actuel ?',
      choices: ['8', '9', '10', '12'],
      correct: 2,
      explanation: 'Le pays est présenté comme divisé en 10 départements.'
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
      question: 'Quel est le plus long fleuve d\'Haïti d\'après la page des départements ?',
      choices: ['Massacre', 'Artibonite', 'Grise', 'Momance'],
      correct: 1,
      explanation: 'La rivière Artibonite est indiquée comme le plus long cours d\'eau du pays.'
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
      explanation: 'Le département du Centre a pour chef-lieu Hinche.'
    },
    {
      category: 'Géographie',
      question: 'Quel est le chef-lieu du Sud-Est ?',
      choices: ['Jacmel', 'Marigot', 'Les Cayes', 'Jérémie'],
      correct: 0,
      explanation: 'Jacmel est le chef-lieu du département du Sud-Est.'
    },

    /* ── SOCIÉTÉ (24-30) ── */
    {
      category: 'Société',
      question: 'Quelle constitution reconnaît officiellement le créole comme langue de la République au même titre que le français ?',
      choices: ['Constitution de 1805', 'Constitution de 1843', 'Constitution de 1987', 'Constitution de 2012'],
      correct: 2,
      explanation: 'La Constitution de 1987 marque ce tournant linguistique majeur.'
    },
    {
      category: 'Société',
      question: 'Quelle proportion de la population est indiquée comme ne parlant que le créole pendant longtemps ?',
      choices: ['Environ 30 %', 'Environ 55 %', 'Environ 75 %', 'Environ 95 %'],
      correct: 3,
      explanation: 'La page Créole évoque environ 95 % de créolophones monolingues.'
    },
    {
      category: 'Société',
      question: 'En quelle année l\'orthographe standardisée du créole est-elle officiellement adoptée par l\'IPN ?',
      choices: ['1968', '1979', '1987', '1995'],
      correct: 1,
      explanation: 'La normalisation orthographique est datée de 1979 par l\'Institut Pédagogique National.'
    },
    {
      category: 'Société',
      question: 'Quelle station est citée comme pionnière de l\'information en créole ?',
      choices: ['Radio Caraïbes', 'Radio Kiskeya', 'Signal FM', 'Radio Haïti-Inter'],
      correct: 3,
      explanation: 'Radio Haïti-Inter est mentionnée comme pionnière dans l\'usage médiatique du créole.'
    },
    {
      category: 'Société',
      question: 'Qui est identifié comme première femme cheffe d\'État en Haïti ?',
      choices: ['Michaëlle Jean', 'Ertha Pascal-Trouillot', 'Suzy Castor', 'Myrlande Manigat'],
      correct: 1,
      explanation: 'Ertha Pascal-Trouillot a dirigé la transition présidentielle en 1990-1991.'
    },
    {
      category: 'Société',
      question: 'Comment appelle-t-on le réseau de commerçantes itinérantes essentiel à la distribution alimentaire ?',
      choices: ['Madan Sara', 'Fanm Solèy', 'Ti Machann Leta', 'Mache Nasyonal'],
      correct: 0,
      explanation: 'Le réseau des Madan Sara relie marchés ruraux et urbains à travers le pays.'
    },
    {
      category: 'Société',
      question: 'Quel écrivain haïtien a écrit « Gouverneurs de la rosée » ?',
      choices: ['Jacques Roumain', 'Frankétienne', 'René Depestre', 'Jean Price-Mars'],
      correct: 0,
      explanation: '« Gouverneurs de la rosée » (1944) est de Jacques Roumain.'
    }
  ];

  let currentIndex = 0;
  let score = 0;
  let answered = false;
  const catScores = { Histoire: 0, Culture: 0, Géographie: 0, Société: 0 };

  const progressBar = document.getElementById('progressBar');
  const questionCounter = document.getElementById('questionCounter');
  const scoreBadge = document.getElementById('scoreBadge');
  const questionCategory = document.getElementById('questionCategory');
  const questionText = document.getElementById('questionText');
  const choicesList = document.getElementById('choicesList');
  const explanationBox = document.getElementById('explanationBox');
  const nextBtn = document.getElementById('nextBtn');
  const quizCard = document.getElementById('quizCard');
  const resultsScreen = document.getElementById('resultsScreen');
  const progressWrap = document.getElementById('progressWrap');
  const quizMeta = document.getElementById('quizMeta');
  const quizIntro = document.getElementById('quizIntro');
  const startQuizBtn = document.getElementById('startQuizBtn');
  const finalTotal = document.getElementById('finalTotal');
  const quizTotalTitle = document.getElementById('quizTotalTitle');
  const restartBtn = document.getElementById('restartBtn');

  if (!progressBar || !questionCounter || !scoreBadge || !questionCategory || !questionText || !choicesList || !explanationBox || !nextBtn || !quizCard || !resultsScreen || !progressWrap || !quizMeta || !quizIntro || !startQuizBtn || !restartBtn) {
    return;
  }

  const totalQuestions = QUESTIONS.length;
  const categoryTotals = QUESTIONS.reduce(function (acc, q) {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {});
  if (quizTotalTitle) quizTotalTitle.textContent = totalQuestions;

  function enterStartState() {
    quizIntro.style.display = '';
    progressWrap.style.display = 'none';
    quizMeta.style.display = 'none';
    quizCard.style.display = 'none';
  }

  function startQuiz() {
    currentIndex = 0;
    score = 0;
    answered = false;
    Object.keys(catScores).forEach(function (k) { catScores[k] = 0; });
    scoreBadge.textContent = 'Score : 0';
    if (finalTotal) finalTotal.textContent = '/ ' + totalQuestions;
    quizIntro.style.display = 'none';
    progressWrap.style.display = '';
    quizMeta.style.display = '';
    quizCard.style.display = '';
    resultsScreen.className = 'quiz-results quiz-card';
    explanationBox.textContent = '';
    explanationBox.className = 'quiz-explanation';
    choicesList.innerHTML = '';
    nextBtn.className = 'quiz-next-btn';
    nextBtn.disabled = true;
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    const q = QUESTIONS[currentIndex];
    if (!q) {
      showResults();
      return;
    }

    const pct = Math.round((currentIndex / QUESTIONS.length) * 100);
    progressBar.style.width = Math.max(pct, 5) + '%';
    questionCounter.textContent = 'Question ' + (currentIndex + 1) + ' / ' + QUESTIONS.length;

    questionCategory.textContent = q.category;
    questionText.textContent = q.question;

    choicesList.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    q.choices.forEach(function (choice, i) {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'quiz-choice-btn';
      btn.textContent = labels[i] + ')  ' + choice;
      btn.addEventListener('click', function () { handleChoice(i, btn); });
      li.appendChild(btn);
      choicesList.appendChild(li);
    });

    explanationBox.textContent = '';
    explanationBox.className = 'quiz-explanation';
    nextBtn.className = 'quiz-next-btn';
    nextBtn.disabled = true;
  }

  function handleChoice(index, clickedBtn) {
    if (answered) return;
    answered = true;

    const q = QUESTIONS[currentIndex];
    const allBtns = choicesList.querySelectorAll('.quiz-choice-btn');
    allBtns.forEach(function (b) { b.disabled = true; });

    if (index === q.correct) {
      score++;
      catScores[q.category]++;
      clickedBtn.classList.add('correct');
      explanationBox.className = 'quiz-explanation visible';
      explanationBox.innerHTML = '✓ &nbsp;' + q.explanation;
    } else {
      clickedBtn.classList.add('wrong');
      allBtns[q.correct].classList.add('correct');
      explanationBox.className = 'quiz-explanation wrong-explain visible';
      explanationBox.innerHTML = '✗ &nbsp;La bonne réponse était : <strong>' + ['A', 'B', 'C', 'D'][q.correct] + ')&nbsp;' + q.choices[q.correct] + '</strong>. ' + q.explanation;
    }

    scoreBadge.textContent = 'Score : ' + score;
    nextBtn.className = 'quiz-next-btn visible';
    nextBtn.disabled = false;
  }

  function showResults() {
    quizCard.style.display = 'none';
    progressWrap.style.display = 'none';
    quizMeta.style.display = 'none';
    choicesList.innerHTML = '';
    nextBtn.className = 'quiz-next-btn';
    nextBtn.disabled = true;

    const finalScore = document.getElementById('finalScore');
    if (finalScore) finalScore.textContent = score;
    if (finalTotal) finalTotal.textContent = '/ ' + totalQuestions;

    let msg;
    let sub;
    const pct = score / totalQuestions;
    if (pct >= 0.9) {
      msg = 'Félicitations ! Vous êtes un(e) véritable expert(e) d\'Haïti !';
      sub = 'Un score exceptionnel ! Votre connaissance de l\'histoire, de la culture, de la géographie et de la société haïtiennes est remarquable.';
    } else if (pct >= 0.7) {
      msg = 'Très bien ! Vous connaissez bien Haïti.';
      sub = 'Excellent résultat ! Quelques pages de ce site vous permettront d\'atteindre la maîtrise complète.';
    } else if (pct >= 0.5) {
      msg = 'Pas mal ! Continuez à explorer ce site pour en apprendre davantage.';
      sub = 'Bonne base de connaissances ! Plongez dans nos sections Histoire, Culture et Géographie pour progresser encore.';
    } else if (pct >= 0.3) {
      msg = 'Vous avez encore beaucoup à découvrir sur Haïti. Ce site est là pour vous !';
      sub = 'Ne vous découragez pas — chaque page de ce site est une invitation à mieux connaître la première République noire du monde.';
    } else {
      msg = 'Ne vous découragez pas — explorez nos pages pour tout apprendre sur Haïti !';
      sub = 'Le voyage commence ici ! Ce site rassemble des centaines de pages sur l\'histoire, la culture et la société haïtiennes.';
    }

    const resultMessage = document.getElementById('resultMessage');
    const resultSub = document.getElementById('resultSub');
    const scoreHistoire = document.getElementById('scoreHistoire');
    const scoreCulture = document.getElementById('scoreCulture');
    const scoreGeographie = document.getElementById('scoreGeographie');
    const scoreSociete = document.getElementById('scoreSociete');

    if (resultMessage) resultMessage.textContent = msg;
    if (resultSub) resultSub.textContent = sub;
    if (scoreHistoire) scoreHistoire.textContent = catScores.Histoire + ' / ' + categoryTotals.Histoire;
    if (scoreCulture) scoreCulture.textContent = catScores.Culture + ' / ' + categoryTotals.Culture;
    if (scoreGeographie) scoreGeographie.textContent = catScores.Géographie + ' / ' + categoryTotals.Géographie;
    if (scoreSociete) scoreSociete.textContent = catScores.Société + ' / ' + categoryTotals.Société;

    resultsScreen.className = 'quiz-results quiz-card visible';
  }

  nextBtn.addEventListener('click', function () {
    if (!answered) return;
    currentIndex++;
    if (currentIndex < QUESTIONS.length) {
      renderQuestion();
    } else {
      showResults();
    }
  });

  startQuizBtn.addEventListener('click', startQuiz);
  restartBtn.addEventListener('click', startQuiz);

  enterStartState();
}());
