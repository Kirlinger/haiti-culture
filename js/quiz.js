(function () {
  'use strict';

  var QUESTIONS = [
    { category: 'history', key: 'q1', correct: 2 },
    { category: 'history', key: 'q2', correct: 1 },
    { category: 'history', key: 'q3', correct: 1 },
    { category: 'history', key: 'q4', correct: 2 },
    { category: 'history', key: 'q5', correct: 3 },
    { category: 'history', key: 'q6', correct: 1 },
    { category: 'history', key: 'q7', correct: 2 },
    { category: 'history', key: 'q8', correct: 1 },
    { category: 'culture', key: 'q9', correct: 0 },
    { category: 'culture', key: 'q10', correct: 0 },
    { category: 'culture', key: 'q11', correct: 1 },
    { category: 'culture', key: 'q12', correct: 2 },
    { category: 'culture', key: 'q13', correct: 1 },
    { category: 'culture', key: 'q14', correct: 1 },
    { category: 'culture', key: 'q15', correct: 2 },
    { category: 'culture', key: 'q16', correct: 1 },
    { category: 'geography', key: 'q17', correct: 1 },
    { category: 'geography', key: 'q18', correct: 2 },
    { category: 'geography', key: 'q19', correct: 0 },
    { category: 'geography', key: 'q20', correct: 1 },
    { category: 'geography', key: 'q21', correct: 0 },
    { category: 'geography', key: 'q22', correct: 2 },
    { category: 'geography', key: 'q23', correct: 0 },
    { category: 'society', key: 'q24', correct: 2 },
    { category: 'society', key: 'q25', correct: 3 },
    { category: 'society', key: 'q26', correct: 1 },
    { category: 'society', key: 'q27', correct: 3 },
    { category: 'society', key: 'q28', correct: 1 },
    { category: 'society', key: 'q29', correct: 0 },
    { category: 'society', key: 'q30', correct: 0 }
  ];

  var QUESTION_BANK = {
    q1: {
      fr: { question: 'Qui a proclamé l\'indépendance d\'Haïti à Gonaïves ?', choices: ['Toussaint Louverture', 'Henri Christophe', 'Jean-Jacques Dessalines', 'Alexandre Pétion'], explanation: 'Jean-Jacques Dessalines proclame l\'indépendance le 1er janvier 1804 à Gonaïves.' },
      en: { question: 'Who proclaimed Haiti\'s independence in Gonaïves?', choices: ['Toussaint Louverture', 'Henri Christophe', 'Jean-Jacques Dessalines', 'Alexandre Pétion'], explanation: 'Jean-Jacques Dessalines proclaimed independence on January 1, 1804 in Gonaïves.' },
      ht: { question: 'Kilès ki te pwoklame endepandans Ayiti nan Gonayiv?', choices: ['Toussaint Louverture', 'Henri Christophe', 'Jean-Jacques Dessalines', 'Alexandre Pétion'], explanation: 'Jean-Jacques Dessalines te pwoklame endepandans lan 1ye janvye 1804 nan Gonayiv.' }
    },
    q2: {
      fr: { question: 'Quelle cérémonie de 1791 est présentée comme le déclencheur de la Révolution haïtienne ?', choices: ['Le Congrès d\'Arcahaie', 'La cérémonie du Bois Caïman', 'Le traité de Bâle', 'Le serment du Jeu de Paume'], explanation: 'La cérémonie du Bois Caïman (Bwa Kayiman) est indiquée comme l\'acte fondateur du soulèvement de 1791.' },
      en: { question: 'Which 1791 ceremony is presented as the trigger of the Haitian Revolution?', choices: ['Congress of Arcahaie', 'Bois Caïman ceremony', 'Treaty of Basel', 'Tennis Court Oath'], explanation: 'The Bois Caïman (Bwa Kayiman) ceremony is presented as the founding act of the 1791 uprising.' },
      ht: { question: 'Ki seremoni an 1791 yo prezante kòm demaraj Revolisyon ayisyèn nan?', choices: ['Kongrè Akayè', 'Seremoni Bwa Kayiman', 'Trete Bazèl', 'Sèman JwètdePom'], explanation: 'Seremoni Bwa Kayiman an prezante kòm zak fondatè leve kanpe 1791 la.' }
    },
    q3: {
      fr: { question: 'Quelle bataille est décrite comme la victoire finale de la guerre d\'indépendance ?', choices: ['Crête-à-Pierrot', 'Vertières', 'Ravine-à-Couleuvres', 'Péligre'], explanation: 'La bataille de Vertières (novembre 1803), près de Cap-Haïtien, est présentée comme la victoire décisive.' },
      en: { question: 'Which battle is described as the final victory of the independence war?', choices: ['Crête-à-Pierrot', 'Vertières', 'Ravine-à-Couleuvres', 'Péligre'], explanation: 'The Battle of Vertières (November 1803), near Cap-Haïtien, is presented as the decisive victory.' },
      ht: { question: 'Ki batay yo dekri kòm viktwa final lagè endepandans lan?', choices: ['Krèt-a-Pyèwo', 'Vètyè', 'Ravin-a-Koulèv', 'Pelig'], explanation: 'Batay Vètyè a (novanm 1803), toupre Kap Ayisyen, se viktwa desizif la.' }
    },
    q4: {
      fr: { question: 'Quel dirigeant a signé en 1825 l\'ordonnance imposant l\'indemnité à la France ?', choices: ['Henri Christophe', 'Alexandre Pétion', 'Jean-Pierre Boyer', 'Faustin Soulouque'], explanation: 'Jean-Pierre Boyer accepte l\'ordonnance de Charles X en 1825.' },
      en: { question: 'Which leader signed the 1825 ordinance imposing indemnity to France?', choices: ['Henri Christophe', 'Alexandre Pétion', 'Jean-Pierre Boyer', 'Faustin Soulouque'], explanation: 'Jean-Pierre Boyer accepted Charles X\'s ordinance in 1825.' },
      ht: { question: 'Ki dirijan ki te siyen òdonans 1825 la ki te enpoze endemnizasyon pou Lafrans?', choices: ['Henri Christophe', 'Alexandre Pétion', 'Jean-Pierre Boyer', 'Faustin Soulouque'], explanation: 'Jean-Pierre Boyer te aksepte òdonans Charles X la an 1825.' }
    },
    q5: {
      fr: { question: 'Quel montant initial de l\'indemnité est mentionné pour 1825 ?', choices: ['50 millions de francs-or', '90 millions de francs-or', '120 millions de francs-or', '150 millions de francs-or'], explanation: 'Le montant initial cité est 150 millions de francs-or, réduit ensuite à 90 millions en 1838.' },
      en: { question: 'What initial indemnity amount is mentioned for 1825?', choices: ['50 million gold francs', '90 million gold francs', '120 million gold francs', '150 million gold francs'], explanation: 'The initial amount mentioned is 150 million gold francs, later reduced to 90 million in 1838.' },
      ht: { question: 'Ki kantite lajan inisyal endemnizasyon an yo site pou 1825?', choices: ['50 milyon fran lò', '90 milyon fran lò', '120 milyon fran lò', '150 milyon fran lò'], explanation: 'Kantite inisyal la se 150 milyon fran lò, epi li desann a 90 milyon an 1838.' }
    },
    q6: {
      fr: { question: 'Quelle période correspond à l\'occupation américaine d\'Haïti ?', choices: ['1898–1912', '1915–1934', '1939–1945', '1957–1971'], explanation: 'Le site situe l\'occupation américaine de 1915 à 1934.' },
      en: { question: 'Which period matches the U.S. occupation of Haiti?', choices: ['1898–1912', '1915–1934', '1939–1945', '1957–1971'], explanation: 'The site places the U.S. occupation from 1915 to 1934.' },
      ht: { question: 'Ki peryòd ki koresponn ak okipasyon ameriken an Ayiti?', choices: ['1898–1912', '1915–1934', '1939–1945', '1957–1971'], explanation: 'Sou sit la, okipasyon ameriken an se soti 1915 rive 1934.' }
    },
    q7: {
      fr: { question: 'En quelle année la dette liée à l\'indemnité d\'indépendance est-elle indiquée comme entièrement remboursée ?', choices: ['1904', '1915', '1947', '1964'], explanation: 'La page Histoire précise un remboursement achevé en 1947.' },
      en: { question: 'In what year is the debt linked to the independence indemnity said to be fully repaid?', choices: ['1904', '1915', '1947', '1964'], explanation: 'The History page states repayment was completed in 1947.' },
      ht: { question: 'Nan ki ane yo di dèt ki lye ak endemnizasyon endepandans lan te fin peye nèt?', choices: ['1904', '1915', '1947', '1964'], explanation: 'Paj Istwa a presize ranbousman an te fini an 1947.' }
    },
    q8: {
      fr: { question: 'Quelles deux grandes constructions sont associées à Henri Christophe ?', choices: ['Palais National et MUPANAH', 'Citadelle Laferrière et Palais Sans-Souci', 'Fort Jacques et Fort Alexandre', 'Cathédrale de Cap-Haïtien et Môle Saint-Nicolas'], explanation: 'Henri Christophe est lié à la Citadelle Laferrière et au Palais Sans-Souci.' },
      en: { question: 'Which two major constructions are associated with Henri Christophe?', choices: ['National Palace and MUPANAH', 'Citadelle Laferrière and Sans-Souci Palace', 'Fort Jacques and Fort Alexandre', 'Cap-Haïtien Cathedral and Môle Saint-Nicolas'], explanation: 'Henri Christophe is associated with Citadelle Laferrière and Sans-Souci Palace.' },
      ht: { question: 'Ki de gwo konstriksyon yo asosye ak Henri Christophe?', choices: ['Palè Nasyonal ak MUPANAH', 'Sitadèl Laferrière ak Palè Sans-Souci', 'Fò Jak ak Fò Aleksann', 'Katedral Kap Ayisyen ak Mòl Sen Nikola'], explanation: 'Henri Christophe lye ak Sitadèl Laferrière ak Palè Sans-Souci.' }
    },
    q9: {
      fr: { question: 'Dans quel cadre est né le premier drapeau haïtien (bleu et rouge) selon le site ?', choices: ['Le Congrès d\'Arcahaie', 'La bataille de Vertières', 'Le traité de Paris', 'Le Code Henri'], explanation: 'Le site associe la création du drapeau au Congrès d\'Arcahaie (1803).' },
      en: { question: 'According to the site, in which context was the first Haitian flag (blue and red) created?', choices: ['Congress of Arcahaie', 'Battle of Vertières', 'Treaty of Paris', 'Code Henri'], explanation: 'The site links the flag\'s creation to the Congress of Arcahaie (1803).' },
      ht: { question: 'Dapre sit la, nan ki kontèks premye drapo ayisyen an (ble ak wouj) te fèt?', choices: ['Kongrè Akayè', 'Batay Vètyè', 'Trete Pari', 'Kòd Anri'], explanation: 'Sit la asosye kreyasyon drapo a ak Kongrè Akayè (1803).' }
    },
    q10: {
      fr: { question: 'Quel est l\'hymne national d\'Haïti ?', choices: ['La Dessalinienne', 'L\'Indépendance', 'La Gonaïvienne', 'La République'], explanation: 'L\'hymne national présenté est La Dessalinienne.' },
      en: { question: 'What is Haiti\'s national anthem?', choices: ['La Dessalinienne', 'L\'Indépendance', 'La Gonaïvienne', 'La République'], explanation: 'The national anthem presented is La Dessalinienne.' },
      ht: { question: 'Ki im nasyonal Ayiti?', choices: ['La Dessalinienne', 'L\'Indépendance', 'La Gonaïvienne', 'La République'], explanation: 'Im nasyonal la prezante kòm La Dessalinienne.' }
    },
    q11: {
      fr: { question: 'Le Vodou haïtien est décrit comme :', choices: ['Une religion fondée par un seul prophète', 'Une synthèse de traditions africaines recréée à Saint-Domingue', 'Une invention du XIXe siècle en Europe', 'Une branche officielle du catholicisme romain'], explanation: 'Le site décrit le Vodou comme une synthèse de traditions africaines transformées en Haïti.' },
      en: { question: 'Haitian Vodou is described as:', choices: ['A religion founded by one prophet', 'A synthesis of African traditions recreated in Saint-Domingue', 'A 19th-century European invention', 'An official branch of Roman Catholicism'], explanation: 'The site describes Vodou as a synthesis of African traditions transformed in Haiti.' },
      ht: { question: 'Yo dekri Vodou ayisyen an kòm:', choices: ['Yon relijyon yon sèl pwofèt te fonde', 'Yon sentèz tradisyon afriken yo rebati nan Sen Domeng', 'Yon envansyon Ewòp nan 19yèm syèk', 'Yon branch ofisyèl katolik womenn'], explanation: 'Sit la dekri Vodou kòm yon sentèz tradisyon afriken ki transfòme ann Ayiti.' }
    },
    q12: {
      fr: { question: 'Quelle nation est présentée comme la plus ancienne et fondamentale du panthéon Vodou ?', choices: ['Petro', 'Ibo', 'Rada', 'Gede'], explanation: 'La nation Rada est explicitement décrite comme la base historique du panthéon.' },
      en: { question: 'Which nation is presented as the oldest and foundational in the Vodou pantheon?', choices: ['Petro', 'Ibo', 'Rada', 'Gede'], explanation: 'The Rada nation is explicitly described as the pantheon\'s historical base.' },
      ht: { question: 'Ki nasyon yo prezante kòm pi ansyen e ki fondamantal nan panteyon Vodou a?', choices: ['Petwo', 'Ibo', 'Rada', 'Gede'], explanation: 'Nasyon Rada a dekri klèman kòm baz istorik panteyon an.' }
    },
    q13: {
      fr: { question: 'Quelle nation Vodou est dite « née en Haïti » et associée aux Lwa « chauds » ?', choices: ['Nago', 'Petro', 'Kongo', 'Ibo'], explanation: 'La page Vodou présente la nation Petro comme née en Haïti.' },
      en: { question: 'Which Vodou nation is said to be "born in Haiti" and associated with "hot" Lwa?', choices: ['Nago', 'Petro', 'Kongo', 'Ibo'], explanation: 'The Vodou page presents the Petro nation as born in Haiti.' },
      ht: { question: 'Ki nasyon Vodou yo di ki “fèt ann Ayiti” e ki asosye ak Lwa “cho” yo?', choices: ['Nago', 'Petwo', 'Kongo', 'Ibo'], explanation: 'Paj Vodou a prezante nasyon Petwo a kòm yon nasyon ki fèt ann Ayiti.' }
    },
    q14: {
      fr: { question: 'Quel est le premier niveau d\'initiation mentionné dans le Kanzo ?', choices: ['Asogwe', 'Lave Tèt', 'Hounsi Bossal', 'Dessounin'], explanation: 'Le Kanzo inclut d\'abord Lave Tèt, puis Hounsi Bossal, puis Houngan/Mambo Asogwe.' },
      en: { question: 'What is the first initiation level mentioned in Kanzo?', choices: ['Asogwe', 'Lave Tèt', 'Hounsi Bossal', 'Dessounin'], explanation: 'Kanzo includes Lave Tèt first, then Hounsi Bossal, then Houngan/Mambo Asogwe.' },
      ht: { question: 'Ki premye nivo inisyasyon yo mansyone nan Kanzo?', choices: ['Asogwe', 'Lave Tèt', 'Hounsi Bossal', 'Dessounin'], explanation: 'Nan Kanzo, gen Lave Tèt an premye, apre sa Hounsi Bossal, epi Houngan/Mambo Asogwe.' }
    },
    q15: {
      fr: { question: 'À quoi servent principalement les vèvè dans une cérémonie Vodou ?', choices: ['Décorer les murs du temple', 'Mesurer le temps rituel', 'Invoquer et appeler un Lwa précis', 'Noter les chants sacrés'], explanation: 'Les vèvè sont des symboles d\'invocation, tracés pour appeler le Lwa concerné.' },
      en: { question: 'What are vèvè mainly used for in a Vodou ceremony?', choices: ['Decorating temple walls', 'Measuring ritual time', 'Invoking and calling a specific Lwa', 'Writing sacred songs'], explanation: 'Vèvè are invocation symbols drawn to call the relevant Lwa.' },
      ht: { question: 'Pou ki sa vèvè yo sèvi sitou nan yon seremoni Vodou?', choices: ['Dekore mi tanp lan', 'Mezi tan rit la', 'Envoke epi rele yon Lwa presi', 'Ekri chante sakre yo'], explanation: 'Vèvè yo se senbòl envokasyon yo trase pou rele Lwa ki konsène a.' }
    },
    q16: {
      fr: { question: 'Quelle description correspond au vèvè de Damballah ?', choices: ['Un bateau et une ancre', 'Deux serpents entrelacés', 'Un cercueil et une tête de mort', 'Un cœur couronné et une épée'], explanation: 'Le site donne pour Damballah le motif de deux serpents entrelacés.' },
      en: { question: 'Which description matches Damballah\'s vèvè?', choices: ['A boat and an anchor', 'Two intertwined snakes', 'A coffin and skull', 'A crowned heart and sword'], explanation: 'The site gives two intertwined snakes as Damballah\'s symbol.' },
      ht: { question: 'Ki deskripsyon ki koresponn ak vèvè Damballah?', choices: ['Yon bato ak yon lank', 'De sèpan mare ansanm', 'Yon sèkèy ak yon tèt mò', 'Yon kè kouwone ak yon nepe'], explanation: 'Sou sit la, Damballah gen motif de sèpan ki mare ansanm.' }
    },
    q17: {
      fr: { question: 'Quelle ville est la capitale d\'Haïti ?', choices: ['Cap-Haïtien', 'Port-au-Prince', 'Gonaïves', 'Jacmel'], explanation: 'Port-au-Prince est la capitale politique et économique du pays.' },
      en: { question: 'Which city is Haiti\'s capital?', choices: ['Cap-Haïtien', 'Port-au-Prince', 'Gonaïves', 'Jacmel'], explanation: 'Port-au-Prince is the country\'s political and economic capital.' },
      ht: { question: 'Ki vil ki kapital Ayiti?', choices: ['Kap Ayisyen', 'Pòtoprens', 'Gonayiv', 'Jakmèl'], explanation: 'Pòtoprens se kapital politik ak ekonomik peyi a.' }
    },
    q18: {
      fr: { question: 'Combien de départements compte Haïti selon son découpage actuel ?', choices: ['8', '9', '10', '12'], explanation: 'Le pays est présenté comme divisé en 10 départements.' },
      en: { question: 'How many departments does Haiti currently have?', choices: ['8', '9', '10', '12'], explanation: 'The country is presented as divided into 10 departments.' },
      ht: { question: 'Konbyen depatman Ayiti genyen dapre divizyon aktyèl la?', choices: ['8', '9', '10', '12'], explanation: 'Peyi a prezante kòm yon peyi ki divize an 10 depatman.' }
    },
    q19: {
      fr: { question: 'Dans quel département se trouve la Citadelle Laferrière ?', choices: ['Nord', 'Ouest', 'Sud-Est', 'Centre'], explanation: 'La Citadelle Laferrière se situe dans le département du Nord.' },
      en: { question: 'In which department is Citadelle Laferrière located?', choices: ['North', 'West', 'South-East', 'Centre'], explanation: 'Citadelle Laferrière is located in the North department.' },
      ht: { question: 'Nan ki depatman Sitadèl Laferrière ye?', choices: ['Nò', 'Lwès', 'Sidès', 'Sant'], explanation: 'Sitadèl Laferrière chita nan depatman Nò.' }
    },
    q20: {
      fr: { question: 'Quel est le plus long fleuve d\'Haïti d\'après la page des départements ?', choices: ['Massacre', 'Artibonite', 'Grise', 'Momance'], explanation: 'La rivière Artibonite est indiquée comme le plus long cours d\'eau du pays.' },
      en: { question: 'According to the departments page, what is Haiti\'s longest river?', choices: ['Massacre', 'Artibonite', 'Grise', 'Momance'], explanation: 'The Artibonite River is indicated as the country\'s longest watercourse.' },
      ht: { question: 'Dapre paj depatman yo, ki pi long rivyè Ayiti?', choices: ['Masak', 'Latibonit', 'Griz', 'Momans'], explanation: 'Rivyè Latibonit prezante kòm pi long kou dlo peyi a.' }
    },
    q21: {
      fr: { question: 'Quel est le chef-lieu du Nord-Ouest ?', choices: ['Port-de-Paix', 'Saint-Marc', 'Fort-Liberté', 'Môle Saint-Nicolas'], explanation: 'Le chef-lieu du Nord-Ouest est Port-de-Paix.' },
      en: { question: 'What is the capital city of the North-West department?', choices: ['Port-de-Paix', 'Saint-Marc', 'Fort-Liberté', 'Môle Saint-Nicolas'], explanation: 'Port-de-Paix is the capital of the North-West.' },
      ht: { question: 'Ki chef-lieu depatman Nòdwès la?', choices: ['Pòdpè', 'Sen Mak', 'Fòlibète', 'Mòl Sen Nikola'], explanation: 'Chef-lieu Nòdwès la se Pòdpè.' }
    },
    q22: {
      fr: { question: 'Quel est le chef-lieu du département du Centre ?', choices: ['Mirebalais', 'Belladère', 'Hinche', 'Thomonde'], explanation: 'Le département du Centre a pour chef-lieu Hinche.' },
      en: { question: 'What is the capital city of the Centre department?', choices: ['Mirebalais', 'Belladère', 'Hinche', 'Thomonde'], explanation: 'The Centre department\'s capital is Hinche.' },
      ht: { question: 'Ki chef-lieu depatman Sant la?', choices: ['Mibalè', 'Beladè', 'Ench', 'Tomond'], explanation: 'Depatman Sant la gen Ench kòm chef-lieu.' }
    },
    q23: {
      fr: { question: 'Quel est le chef-lieu du Sud-Est ?', choices: ['Jacmel', 'Marigot', 'Les Cayes', 'Jérémie'], explanation: 'Jacmel est le chef-lieu du département du Sud-Est.' },
      en: { question: 'What is the capital city of the South-East department?', choices: ['Jacmel', 'Marigot', 'Les Cayes', 'Jérémie'], explanation: 'Jacmel is the capital of the South-East department.' },
      ht: { question: 'Ki chef-lieu depatman Sidès la?', choices: ['Jakmèl', 'Marigo', 'Okay', 'Jeremi'], explanation: 'Jakmèl se chef-lieu depatman Sidès la.' }
    },
    q24: {
      fr: { question: 'Quelle constitution reconnaît officiellement le créole comme langue de la République au même titre que le français ?', choices: ['Constitution de 1805', 'Constitution de 1843', 'Constitution de 1987', 'Constitution de 2012'], explanation: 'La Constitution de 1987 marque ce tournant linguistique majeur.' },
      en: { question: 'Which constitution officially recognizes Creole as a language of the Republic alongside French?', choices: ['1805 Constitution', '1843 Constitution', '1987 Constitution', '2012 Constitution'], explanation: 'The 1987 Constitution marks this major linguistic turning point.' },
      ht: { question: 'Ki konstitisyon ki rekonèt ofisyèlman kreyòl kòm lang Repiblik la ansanm ak franse?', choices: ['Konstitisyon 1805', 'Konstitisyon 1843', 'Konstitisyon 1987', 'Konstitisyon 2012'], explanation: 'Konstitisyon 1987 la make gwo chanjman lengwistik sa a.' }
    },
    q25: {
      fr: { question: 'Quelle proportion de la population est indiquée comme ne parlant que le créole pendant longtemps ?', choices: ['Environ 30 %', 'Environ 55 %', 'Environ 75 %', 'Environ 95 %'], explanation: 'La page Créole évoque environ 95 % de créolophones monolingues.' },
      en: { question: 'What proportion of the population is said to have spoken only Creole for a long time?', choices: ['About 30%', 'About 55%', 'About 75%', 'About 95%'], explanation: 'The Creole page mentions about 95% monolingual Creole speakers.' },
      ht: { question: 'Ki pwopòsyon popilasyon an yo di ki te pale sèlman kreyòl pandan lontan?', choices: ['Apeprè 30 %', 'Apeprè 55 %', 'Apeprè 75 %', 'Apeprè 95 %'], explanation: 'Paj Kreyòl la mansyone apeprè 95 % moun ki pale kreyòl sèlman.' }
    },
    q26: {
      fr: { question: 'En quelle année l\'orthographe standardisée du créole est-elle officiellement adoptée par l\'IPN ?', choices: ['1968', '1979', '1987', '1995'], explanation: 'La normalisation orthographique est datée de 1979 par l\'Institut Pédagogique National.' },
      en: { question: 'In what year was standardized Creole spelling officially adopted by the IPN?', choices: ['1968', '1979', '1987', '1995'], explanation: 'Orthographic standardization is dated to 1979 by the National Pedagogical Institute.' },
      ht: { question: 'Nan ki ane òtograf estandadize kreyòl la te ofisyèlman adopte pa IPN?', choices: ['1968', '1979', '1987', '1995'], explanation: 'Nòmalizasyon òtograf la date 1979 dapre Enstiti Pedagojik Nasyonal la.' }
    },
    q27: {
      fr: { question: 'Quelle station est citée comme pionnière de l\'information en créole ?', choices: ['Radio Caraïbes', 'Radio Kiskeya', 'Signal FM', 'Radio Haïti-Inter'], explanation: 'Radio Haïti-Inter est mentionnée comme pionnière dans l\'usage médiatique du créole.' },
      en: { question: 'Which station is cited as a pioneer for news in Creole?', choices: ['Radio Caraïbes', 'Radio Kiskeya', 'Signal FM', 'Radio Haïti-Inter'], explanation: 'Radio Haïti-Inter is cited as a pioneer in media use of Creole.' },
      ht: { question: 'Ki estasyon yo site kòm pyonye enfòmasyon an kreyòl?', choices: ['Radyo Karayib', 'Radyo Kiskeya', 'Signal FM', 'Radyo Ayiti-Entè'], explanation: 'Radyo Ayiti-Entè mansyone kòm pyonye nan itilizasyon kreyòl nan medya.' }
    },
    q28: {
      fr: { question: 'Qui est identifié comme première femme cheffe d\'État en Haïti ?', choices: ['Michaëlle Jean', 'Ertha Pascal-Trouillot', 'Suzy Castor', 'Myrlande Manigat'], explanation: 'Ertha Pascal-Trouillot a dirigé la transition présidentielle en 1990-1991.' },
      en: { question: 'Who is identified as Haiti\'s first woman head of state?', choices: ['Michaëlle Jean', 'Ertha Pascal-Trouillot', 'Suzy Castor', 'Myrlande Manigat'], explanation: 'Ertha Pascal-Trouillot led the presidential transition in 1990–1991.' },
      ht: { question: 'Kilès yo idantifye kòm premye fanm chèf Leta ann Ayiti?', choices: ['Michaëlle Jean', 'Ertha Pascal-Trouillot', 'Suzy Castor', 'Myrlande Manigat'], explanation: 'Ertha Pascal-Trouillot te dirije tranzisyon prezidansyèl la an 1990–1991.' }
    },
    q29: {
      fr: { question: 'Comment appelle-t-on le réseau de commerçantes itinérantes essentiel à la distribution alimentaire ?', choices: ['Madan Sara', 'Fanm Solèy', 'Ti Machann Leta', 'Mache Nasyonal'], explanation: 'Le réseau des Madan Sara relie marchés ruraux et urbains à travers le pays.' },
      en: { question: 'What is the network of traveling women traders essential for food distribution called?', choices: ['Madan Sara', 'Fanm Solèy', 'Ti Machann Leta', 'Mache Nasyonal'], explanation: 'The Madan Sara network connects rural and urban markets across the country.' },
      ht: { question: 'Kijan yo rele rezo machann fanm k ap vwayaje ki enpòtan pou distribisyon manje a?', choices: ['Madan Sara', 'Fanm Solèy', 'Ti Machann Leta', 'Mache Nasyonal'], explanation: 'Rezo Madan Sara a konekte mache riral ak mache iben atravè peyi a.' }
    },
    q30: {
      fr: { question: 'Quel écrivain haïtien a écrit « Gouverneurs de la rosée » ?', choices: ['Jacques Roumain', 'Frankétienne', 'René Depestre', 'Jean Price-Mars'], explanation: '« Gouverneurs de la rosée » (1944) est de Jacques Roumain.' },
      en: { question: 'Which Haitian writer authored "Masters of the Dew"?', choices: ['Jacques Roumain', 'Frankétienne', 'René Depestre', 'Jean Price-Mars'], explanation: '"Gouverneurs de la rosée" (1944) was written by Jacques Roumain.' },
      ht: { question: 'Ki ekriven ayisyen ki te ekri « Gouverneurs de la rosée »?', choices: ['Jacques Roumain', 'Frankétienne', 'René Depestre', 'Jean Price-Mars'], explanation: '« Gouverneurs de la rosée » (1944) se zèv Jacques Roumain.' }
    }
  };

  var UI_TEXT = {
    fr: {
      title: 'Questions sur Haïti',
      subtitle: 'Histoire • Culture • Géographie • Société — une question à la fois.',
      introTitle: 'Prêt(e) à commencer ?',
      introText: 'Cliquez sur le bouton ci-dessous pour lancer le quiz et afficher la première question.',
      start: 'Commencer le quiz',
      submit: 'Valider',
      next: 'Question suivante →',
      finalNext: 'Soumettre le quiz',
      restart: '↺ Recommencer',
      scorePrefix: 'Score : ',
      question: 'Question',
      correctLabel: 'Correctes',
      wrongLabel: 'Incorrectes',
      breakdown: 'Résultats par catégorie',
      category: { history: 'Histoire', culture: 'Culture', geography: 'Géographie', society: 'Société' },
      feedbackPrefix: '✓ ',
      feedbackWrongPrefix: '✗ La bonne réponse était : ',
      feedbackSep: '. ',
      messages: {
        excellent: 'Félicitations ! Vous êtes un(e) véritable expert(e) d\'Haïti !',
        excellentSub: 'Un score exceptionnel ! Votre connaissance de l\'histoire, de la culture, de la géographie et de la société haïtiennes est remarquable.',
        veryGood: 'Très bien ! Vous connaissez bien Haïti.',
        veryGoodSub: 'Excellent résultat ! Quelques pages de ce site vous permettront d\'atteindre la maîtrise complète.',
        good: 'Pas mal ! Continuez à explorer ce site pour en apprendre davantage.',
        goodSub: 'Bonne base de connaissances ! Plongez dans nos sections Histoire, Culture et Géographie pour progresser encore.',
        low: 'Vous avez encore beaucoup à découvrir sur Haïti. Ce site est là pour vous !',
        lowSub: 'Ne vous découragez pas — chaque page de ce site est une invitation à mieux connaître la première République noire du monde.',
        veryLow: 'Ne vous découragez pas — explorez nos pages pour tout apprendre sur Haïti !',
        veryLowSub: 'Le voyage commence ici ! Ce site rassemble des centaines de pages sur l\'histoire, la culture et la société haïtiennes.'
      }
    },
    en: {
      title: 'Questions about Haiti',
      subtitle: 'History • Culture • Geography • Society — one question at a time.',
      introTitle: 'Ready to begin?',
      introText: 'Click the button below to start the quiz and display the first question.',
      start: 'Start quiz',
      submit: 'Submit answer',
      next: 'Next question →',
      finalNext: 'Submit quiz',
      restart: '↺ Restart',
      scorePrefix: 'Score: ',
      question: 'Question',
      correctLabel: 'Correct',
      wrongLabel: 'Incorrect',
      breakdown: 'Results by category',
      category: { history: 'History', culture: 'Culture', geography: 'Geography', society: 'Society' },
      feedbackPrefix: '✓ ',
      feedbackWrongPrefix: '✗ Correct answer: ',
      feedbackSep: '. ',
      messages: {
        excellent: 'Congratulations! You are a true Haiti expert!',
        excellentSub: 'Outstanding score! Your knowledge of Haitian history, culture, geography, and society is impressive.',
        veryGood: 'Great job! You know Haiti very well.',
        veryGoodSub: 'Excellent result! A few more pages on this site will take you to full mastery.',
        good: 'Nice work! Keep exploring this site to learn even more.',
        goodSub: 'Strong foundation! Dive deeper into our History, Culture, and Geography sections.',
        low: 'You still have a lot to discover about Haiti, and this site is here for you.',
        lowSub: 'Do not give up—every page here is an invitation to better understand the first Black republic in the world.',
        veryLow: 'Do not be discouraged—explore our pages to learn all about Haiti!',
        veryLowSub: 'Your journey starts here. This site gathers hundreds of pages on Haitian history, culture, and society.'
      }
    },
    ht: {
      title: 'Kesyon sou Ayiti',
      subtitle: 'Istwa • Kilti • Jewografi • Sosyete — yon kesyon chak fwa.',
      introTitle: 'Ou pare pou kòmanse?',
      introText: 'Klike sou bouton ki anba a pou lanse quiz la epi montre premye kesyon an.',
      start: 'Kòmanse quiz la',
      submit: 'Valide repons',
      next: 'Kesyon swivan →',
      finalNext: 'Soumèt quiz la',
      restart: '↺ Rekòmanse',
      scorePrefix: 'Nòt: ',
      question: 'Kesyon',
      correctLabel: 'Bon repons',
      wrongLabel: 'Move repons',
      breakdown: 'Rezilta pa kategori',
      category: { history: 'Istwa', culture: 'Kilti', geography: 'Jewografi', society: 'Sosyete' },
      feedbackPrefix: '✓ ',
      feedbackWrongPrefix: '✗ Bon repons lan se: ',
      feedbackSep: '. ',
      messages: {
        excellent: 'Felisitasyon! Ou se yon vrè ekspè sou Ayiti!',
        excellentSub: 'Ekselan nòt! Konesans ou sou istwa, kilti, jewografi ak sosyete ayisyèn nan remakab.',
        veryGood: 'Trè byen! Ou byen konnen Ayiti.',
        veryGoodSub: 'Trè bon rezilta! Kèk lòt paj sou sit la ap mennen ou nan metriz total.',
        good: 'Pa mal! Kontinye eksplore sit la pou aprann plis toujou.',
        goodSub: 'Ou deja gen bon baz. Antre pi fon nan seksyon Istwa, Kilti ak Jewografi yo.',
        low: 'Ou gen anpil bagay pou dekouvri sou Ayiti, e sit sa la pou ede ou.',
        lowSub: 'Pa dekouraje — chak paj sou sit la envite ou konprann premye repiblik nwa nan mond lan miyò.',
        veryLow: 'Pa dekouraje — eksplore paj nou yo pou aprann tout bagay sou Ayiti!',
        veryLowSub: 'Vwayaj ou a kòmanse isit. Sit sa rasanble plizyè santèn paj sou istwa, kilti ak sosyete ayisyèn nan.'
      }
    }
  };

  var currentLang = 'fr';
  var currentIndex = 0;
  var score = 0;
  var selectedChoice = null;
  var answered = false;
  var categoryKeys = ['history', 'culture', 'geography', 'society'];
  var catScores = { history: 0, culture: 0, geography: 0, society: 0 };

  var sectionTitle = document.querySelector('.section-title');
  var sectionSubtitle = document.querySelector('.section-subtitle');
  var progressBar = document.getElementById('progressBar');
  var questionCounter = document.getElementById('questionCounter');
  var scoreBadge = document.getElementById('scoreBadge');
  var questionCategory = document.getElementById('questionCategory');
  var questionText = document.getElementById('questionText');
  var choicesList = document.getElementById('choicesList');
  var explanationBox = document.getElementById('explanationBox');
  var submitBtn = document.getElementById('submitBtn');
  var nextBtn = document.getElementById('nextBtn');
  var quizCard = document.getElementById('quizCard');
  var resultsScreen = document.getElementById('resultsScreen');
  var progressWrap = document.getElementById('progressWrap');
  var quizMeta = document.getElementById('quizMeta');
  var quizIntro = document.getElementById('quizIntro');
  var introTitle = document.getElementById('introTitle');
  var introText = document.getElementById('introText');
  var startQuizBtn = document.getElementById('startQuizBtn');
  var finalScore = document.getElementById('finalScore');
  var finalTotal = document.getElementById('finalTotal');
  var finalPercent = document.getElementById('finalPercent');
  var quizTotalTitle = document.getElementById('quizTotalTitle');
  var resultMessage = document.getElementById('resultMessage');
  var resultSub = document.getElementById('resultSub');
  var correctLabel = document.getElementById('correctLabel');
  var wrongLabel = document.getElementById('wrongLabel');
  var correctCount = document.getElementById('correctCount');
  var wrongCount = document.getElementById('wrongCount');
  var breakdownTitle = document.getElementById('breakdownTitle');
  var restartBtn = document.getElementById('restartBtn');
  var langWrap = document.getElementById('quizLangSwitcher');
  var scoreEls = {
    history: document.getElementById('scoreHistoire'),
    culture: document.getElementById('scoreCulture'),
    geography: document.getElementById('scoreGeographie'),
    society: document.getElementById('scoreSociete')
  };

  if (!progressBar || !questionCounter || !scoreBadge || !questionCategory || !questionText || !choicesList || !explanationBox || !submitBtn || !nextBtn || !quizCard || !resultsScreen || !progressWrap || !quizMeta || !quizIntro || !startQuizBtn || !restartBtn || !langWrap) {
    return;
  }

  var totalQuestions = QUESTIONS.length;
  var categoryTotals = QUESTIONS.reduce(function (acc, q) {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {});

  if (quizTotalTitle) quizTotalTitle.textContent = totalQuestions;

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function t() {
    return UI_TEXT[currentLang] || UI_TEXT.fr;
  }

  function getQuestionData(questionKey) {
    var item = QUESTION_BANK[questionKey] || {};
    return item[currentLang] || item.fr;
  }

  function updateLanguageUI() {
    var text = t();
    if (sectionTitle) {
      sectionTitle.innerHTML = '<span id="quizTotalTitle">' + totalQuestions + '</span> ' + escapeHtml(text.title);
      quizTotalTitle = document.getElementById('quizTotalTitle');
    }
    if (sectionSubtitle) sectionSubtitle.textContent = text.subtitle;
    if (introTitle) introTitle.textContent = text.introTitle;
    if (introText) introText.textContent = text.introText;
    startQuizBtn.textContent = text.start;
    submitBtn.textContent = text.submit;
    restartBtn.textContent = text.restart;
    if (breakdownTitle) breakdownTitle.textContent = text.breakdown;
    if (correctLabel) correctLabel.textContent = text.correctLabel;
    if (wrongLabel) wrongLabel.textContent = text.wrongLabel;
    updateMeta();
    updateCategoryRows();
    updateLangButtons();
  }

  function updateLangButtons() {
    var btns = langWrap.querySelectorAll('[data-quiz-lang]');
    btns.forEach(function (btn) {
      var isActive = btn.getAttribute('data-quiz-lang') === currentLang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function updateMeta() {
    var text = t();
    scoreBadge.textContent = text.scorePrefix + score;
    questionCounter.textContent = text.question + ' ' + (currentIndex + 1) + ' / ' + totalQuestions;
  }

  function updateCategoryRows() {
    categoryKeys.forEach(function (key) {
      var row = scoreEls[key];
      if (!row) return;
      var labelEl = row.parentElement ? row.parentElement.querySelector('.cat-label') : null;
      if (labelEl) labelEl.textContent = t().category[key];
      row.textContent = catScores[key] + ' / ' + (categoryTotals[key] || 0);
    });
  }

  function setStartState() {
    quizIntro.style.display = '';
    progressWrap.style.display = 'none';
    quizMeta.style.display = 'none';
    quizCard.style.display = 'none';
    resultsScreen.className = 'quiz-results quiz-card';
    submitBtn.disabled = true;
    nextBtn.className = 'quiz-next-btn';
    nextBtn.disabled = true;
  }

  function startQuiz() {
    currentIndex = 0;
    score = 0;
    selectedChoice = null;
    answered = false;
    categoryKeys.forEach(function (key) { catScores[key] = 0; });
    quizIntro.style.display = 'none';
    progressWrap.style.display = '';
    quizMeta.style.display = '';
    quizCard.style.display = '';
    resultsScreen.className = 'quiz-results quiz-card';
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    selectedChoice = null;
    var q = QUESTIONS[currentIndex];
    if (!q) {
      showResults();
      return;
    }
    var text = t();
    var qData = getQuestionData(q.key);
    var pct = Math.round((currentIndex / totalQuestions) * 100);
    progressBar.style.width = Math.max(pct, 5) + '%';

    updateMeta();
    questionCategory.textContent = text.category[q.category];
    questionText.textContent = qData.question;
    choicesList.innerHTML = '';

    ['A', 'B', 'C', 'D'].forEach(function (letter, idx) {
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.className = 'quiz-choice-btn';
      btn.type = 'button';
      btn.setAttribute('data-choice-index', String(idx));
      btn.textContent = letter + ') ' + qData.choices[idx];
      btn.addEventListener('click', function () {
        if (answered) return;
        selectedChoice = idx;
        choicesList.querySelectorAll('.quiz-choice-btn').forEach(function (b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
        submitBtn.disabled = false;
      });
      li.appendChild(btn);
      choicesList.appendChild(li);
    });

    explanationBox.textContent = '';
    explanationBox.className = 'quiz-explanation';
    submitBtn.disabled = true;
    submitBtn.style.display = '';
    nextBtn.className = 'quiz-next-btn';
    nextBtn.disabled = true;
    nextBtn.textContent = (currentIndex === totalQuestions - 1) ? text.finalNext : text.next;
  }

  function submitAnswer() {
    if (answered || selectedChoice === null) return;
    answered = true;
    var q = QUESTIONS[currentIndex];
    var text = t();
    var qData = getQuestionData(q.key);
    var allBtns = choicesList.querySelectorAll('.quiz-choice-btn');
    allBtns.forEach(function (btn) { btn.disabled = true; });
    submitBtn.style.display = 'none';

    if (selectedChoice === q.correct) {
      score += 1;
      catScores[q.category] += 1;
      allBtns[selectedChoice].classList.remove('selected');
      allBtns[selectedChoice].classList.add('correct');
      explanationBox.className = 'quiz-explanation visible';
      explanationBox.textContent = text.feedbackPrefix + qData.explanation;
    } else {
      allBtns[selectedChoice].classList.remove('selected');
      allBtns[selectedChoice].classList.add('wrong');
      allBtns[q.correct].classList.add('correct');
      explanationBox.className = 'quiz-explanation wrong-explain visible';
      explanationBox.innerHTML = text.feedbackWrongPrefix + '<strong>' + ['A', 'B', 'C', 'D'][q.correct] + ') ' + escapeHtml(qData.choices[q.correct]) + '</strong>' + text.feedbackSep + escapeHtml(qData.explanation);
    }

    updateMeta();
    updateCategoryRows();
    nextBtn.className = 'quiz-next-btn visible';
    nextBtn.disabled = false;
  }

  function getResultCopy(percent) {
    var msgs = t().messages;
    if (percent >= 90) return { msg: msgs.excellent, sub: msgs.excellentSub };
    if (percent >= 70) return { msg: msgs.veryGood, sub: msgs.veryGoodSub };
    if (percent >= 50) return { msg: msgs.good, sub: msgs.goodSub };
    if (percent >= 30) return { msg: msgs.low, sub: msgs.lowSub };
    return { msg: msgs.veryLow, sub: msgs.veryLowSub };
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

    updateCategoryRows();
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

  function setLanguage(lang) {
    if (!UI_TEXT[lang] || currentLang === lang) return;
    currentLang = lang;
    try { window.localStorage.setItem('quizLang', lang); } catch (e) {}
    updateLanguageUI();
    if (quizIntro.style.display !== 'none') return;
    if (resultsScreen.classList.contains('visible')) {
      showResults();
      return;
    }
    renderQuestion();
  }

  function initLanguageFromStorage() {
    var stored = null;
    try { stored = window.localStorage.getItem('quizLang'); } catch (e) {}
    if (stored && UI_TEXT[stored]) currentLang = stored;
  }

  function bindEvents() {
    startQuizBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', startQuiz);
    submitBtn.addEventListener('click', submitAnswer);
    nextBtn.addEventListener('click', nextQuestion);
    langWrap.querySelectorAll('[data-quiz-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-quiz-lang');
        setLanguage(lang);
      });
    });
  }

  initLanguageFromStorage();
  updateLanguageUI();
  bindEvents();
  setStartState();
}());
