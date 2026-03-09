/* =====================================================
   Haiti Administrative Structure Data
   10 départements · 42 arrondissements · 146 communes
   ===================================================== */

var HAITI_ADMIN = [
  /* ═══════════════════════════════ 1. OUEST ══════════════════════════════ */
  {
    id: 'ouest', name: 'Ouest', capital: 'Port-au-Prince',
    area: '4 983 km²', population: '~4,6 millions',
    color: '#00209F',
    description: 'Le département le plus peuplé d\'Haïti. Il comprend la capitale nationale et la zone métropolitaine de Port-au-Prince, la plaine du Cul-de-Sac et l\'île de la Gonâve.',
    arrondissements: [
      {
        id: 'arr-pap', name: 'Port-au-Prince', capital: 'Port-au-Prince',
        communes: [
          {
            id: 'com-pap', name: 'Port-au-Prince',
            department: 'Ouest', arrondissement: 'Port-au-Prince',
            chefLieuDepartement: true, chefLieuArrondissement: true,
            population: '~1 000 000 hab. (zone métro ~2,8 millions)',
            description: 'Capitale et plus grande ville d\'Haïti, au bord du golfe de la Gonâve. Centre politique, économique et culturel du pays.',
            characteristics: 'Siège du gouvernement, Palais National, cathédrale Notre-Dame, Champs-de-Mars, marché du Fer.',
            sections: ['Bel-Air', 'Centre-Ville', 'Bourdon', 'Pacot', 'Morne-Hôpital', 'Nan-Sablière', 'Bas-Peu-de-Choses']
          },
          {
            id: 'com-carrefour', name: 'Carrefour',
            department: 'Ouest', arrondissement: 'Port-au-Prince',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~480 000 hab.',
            description: 'Grande commune urbaine au sud-ouest de Port-au-Prince, sur la côte du golfe de la Gonâve.',
            characteristics: 'Zone résidentielle et commerciale dense ; Diquini, Mariani. Fortement touchée par le séisme de 2010.',
            sections: ['Diquini', 'Mariani', 'Thor', 'Duvivier', 'Bizoton']
          },
          {
            id: 'com-delmas', name: 'Delmas',
            department: 'Ouest', arrondissement: 'Port-au-Prince',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~440 000 hab.',
            description: 'Commune résidentielle et commerciale au nord de Port-au-Prince, une des plus densément peuplées d\'Haïti.',
            characteristics: 'Nombreux quartiers numérotés (Delmas 3 à 105), centre commercial important, zones industrielles.',
            sections: ['Delmas 3-33', 'Delmas 33-60', 'Delmas 60-75', 'Delmas 75-105']
          },
          {
            id: 'com-petion-ville', name: 'Pétion-Ville',
            department: 'Ouest', arrondissement: 'Port-au-Prince',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~400 000 hab.',
            description: 'Commune en altitude au sud-est de Port-au-Prince, réputée pour ses quartiers résidentiels aisés et sa vie culturelle.',
            characteristics: 'Restaurants, hôtels, galeries d\'art, marché Salomon, centre touristique et diplomatique.',
            sections: ['Morne-à-Chandelle', 'Musseau', 'Dupuy', 'Centre de Pétion-Ville']
          },
          {
            id: 'com-kenscoff', name: 'Kenscoff',
            department: 'Ouest', arrondissement: 'Port-au-Prince',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~68 000 hab.',
            description: 'Commune de montagne à ~1 500 m d\'altitude, dans les montagnes de la Selle au sud-est de Port-au-Prince.',
            characteristics: 'Climat frais, jardins maraîchers, Furcy, panoramas exceptionnels, tourisme montagnard.',
            sections: ['Décayette', 'Sourcematelas', 'Lizon']
          },
          {
            id: 'com-cite-soleil', name: 'Cité Soleil',
            department: 'Ouest', arrondissement: 'Port-au-Prince',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~300 000 hab.',
            description: 'Commune urbaine au bord de mer, au nord de Port-au-Prince. L\'une des zones les plus densément peuplées des Caraïbes.',
            characteristics: 'Zone industrielle, port de pêche artisanale, défis socioéconomiques importants.',
            sections: ['Boston', 'Drouillard', 'Centre-Cité', 'Fort-Mercredi']
          },
          {
            id: 'com-tabarre', name: 'Tabarre',
            department: 'Ouest', arrondissement: 'Port-au-Prince',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~185 000 hab.',
            description: 'Commune péri-urbaine au nord-est de Port-au-Prince, sur la plaine du Cul-de-Sac.',
            characteristics: 'Zone résidentielle en développement, siège de nombreuses ONG et ambassades, accès à l\'aéroport.',
            sections: ['Tabarre-Issa', 'Tabarre-Carrefour', 'Centre-Tabarre']
          }
        ]
      },
      {
        id: 'arr-arcahaie', name: 'Arcahaie', capital: 'Arcahaie',
        communes: [
          {
            id: 'com-arcahaie', name: 'Arcahaie',
            department: 'Ouest', arrondissement: 'Arcahaie',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~80 000 hab.',
            description: 'Commune côtière sur le golfe de la Gonâve, au nord de Port-au-Prince. Renommée pour son festival du drapeau haïtien (18 mai).',
            characteristics: 'Festival du drapeau, plages, pêche artisanale, plaine agricole fertile.',
            sections: ['Arcahaie-Centre', 'Mouillage', 'Côte-de-Fer', 'Fond-des-Blancs']
          },
          {
            id: 'com-montrouis', name: 'Montrouis',
            department: 'Ouest', arrondissement: 'Arcahaie',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~65 000 hab.',
            description: 'Commune côtière au nord de l\'arrondissement d\'Arcahaie, avec une belle baie sur le golfe de la Gonâve.',
            characteristics: 'Station balnéaire (Club Indigo), plages, tourisme côtier.',
            sections: ['Montrouis-Centre', 'Deux-Riches', 'Petite-Montagne']
          },
          {
            id: 'com-cabaret', name: 'Cabaret',
            department: 'Ouest', arrondissement: 'Arcahaie',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~110 000 hab.',
            description: 'Commune côtière entre Arcahaie et Port-au-Prince, comprenant la localité de Titanyen.',
            characteristics: 'Zone côtière, Titanyen, plaine agricole, accès à la Nationale 1.',
            sections: ['Titanyen', 'Cabaret-Centre', 'La Côte']
          }
        ]
      },
      {
        id: 'arr-croix-bouquets', name: 'Croix-des-Bouquets', capital: 'Croix-des-Bouquets',
        communes: [
          {
            id: 'com-croix-bouquets', name: 'Croix-des-Bouquets',
            department: 'Ouest', arrondissement: 'Croix-des-Bouquets',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~220 000 hab.',
            description: 'Commune sur la plaine du Cul-de-Sac, mondialement connue pour son artisanat en métal découpé (Village Noailles).',
            characteristics: 'Artisanat en fer découpé reconnu mondialement, plaine agricole, proximité de Port-au-Prince.',
            sections: ['Fond-Parisien', 'Noailles', 'Pernier', 'Centre']
          },
          {
            id: 'com-thomazeau', name: 'Thomazeau',
            department: 'Ouest', arrondissement: 'Croix-des-Bouquets',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~62 000 hab.',
            description: 'Commune au bord du lac Azuéi (Étang Saumâtre), dans la plaine du Cul-de-Sac orientale.',
            characteristics: 'Lac Azuéi, flamants roses, crocodiles américains, pêche, agriculture.',
            sections: ['Thomazeau-Centre', 'Bras-Gauche', 'Savane-Diane']
          },
          {
            id: 'com-ganthier', name: 'Ganthier',
            department: 'Ouest', arrondissement: 'Croix-des-Bouquets',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~58 000 hab.',
            description: 'Commune à l\'est de la plaine du Cul-de-Sac, frontalière avec le département du Centre.',
            characteristics: 'Plaine semi-aride, agriculture irriguée, accès à la frontière dominicaine via Malpasse.',
            sections: ['Ganthier-Centre', 'Bodarie', 'Charbonnières']
          },
          {
            id: 'com-cornillon', name: 'Cornillon/Grand-Bois',
            department: 'Ouest', arrondissement: 'Croix-des-Bouquets',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~47 000 hab.',
            description: 'Commune à l\'est de l\'arrondissement, connue localement sous le nom de Grand-Bois.',
            characteristics: 'Zone montagneuse et agricole, café, bois, forêts tropicales.',
            sections: ['Grand-Bois', 'Cornillon-Centre', '3ème Section']
          },
          {
            id: 'com-fonds-verrettes', name: 'Fonds-Verrettes',
            department: 'Ouest', arrondissement: 'Croix-des-Bouquets',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~38 000 hab.',
            description: 'Commune montagneuse à l\'est du département, sur les contreforts du Massif de la Selle.',
            characteristics: 'Zone forestière, agriculture de montagne, accès difficile.',
            sections: ['Fonds-Verrettes-Centre', 'Les Orangers', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-leogane', name: 'Léogâne', capital: 'Léogâne',
        communes: [
          {
            id: 'com-leogane', name: 'Léogâne',
            department: 'Ouest', arrondissement: 'Léogâne',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~200 000 hab.',
            description: 'Ville historique au sud-ouest de Port-au-Prince, surnommée « Cité des lamentations ». Épicentre du séisme du 12 janvier 2010.',
            characteristics: 'Carnaval, histoire coloniale, canne à sucre, reconstruction post-séisme, plages.',
            sections: ['Grand-Boucan', 'Dupont', 'Fond-Baptiste', 'Orangers', 'Nan-Cafard']
          },
          {
            id: 'com-grand-goave', name: 'Grand-Goâve',
            department: 'Ouest', arrondissement: 'Léogâne',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~100 000 hab.',
            description: 'Commune côtière sur la route nationale 2, entre Port-au-Prince et Les Cayes.',
            characteristics: 'Pêche artisanale, agriculture, plages, marché local.',
            sections: ['Grand-Goâve-Centre', 'Nan-Madras', 'Montagne-Noire', 'Bord-de-Mer']
          },
          {
            id: 'com-petit-goave', name: 'Petit-Goâve',
            department: 'Ouest', arrondissement: 'Léogâne',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~90 000 hab.',
            description: 'Ville côtière au sud-ouest, au bord de la baie de Petit-Goâve. Lieu de naissance du poète René Depestre.',
            characteristics: 'Plages, pêche, café, histoire coloniale, tourisme côtier.',
            sections: ['Petit-Goâve-Centre', 'Bizoton', 'Source-Froide', 'Nan-Chaumette']
          },
          {
            id: 'com-gressier', name: 'Gressier',
            department: 'Ouest', arrondissement: 'Léogâne',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~62 000 hab.',
            description: 'Commune côtière entre Carrefour et Léogâne, avec de belles plages sur le golfe de la Gonâve.',
            characteristics: 'Plages, tourisme côtier, pêche, agriculture.',
            sections: ['Gressier-Centre', 'Marine', 'Ti-Mouillage', 'Gérard']
          }
        ]
      },
      {
        id: 'arr-pointe-raquettes', name: 'Pointe-à-Raquettes', capital: 'Anse-à-Galets',
        communes: [
          {
            id: 'com-anse-galets', name: 'Anse-à-Galets',
            department: 'Ouest', arrondissement: 'Pointe-à-Raquettes',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~100 000 hab.',
            description: 'Principale ville de l\'île de la Gonâve, grande île du golfe de la Gonâve, face à Port-au-Prince.',
            characteristics: 'Île de la Gonâve, pêche, artisanat, tourisme naissant, isolement relatif.',
            sections: ['Anse-à-Galets-Centre', 'Petite-Rivière-Gonâve', 'Pointe-à-Raquettes-Comm.']
          },
          {
            id: 'com-pointe-raquettes', name: 'Pointe-à-Raquettes',
            department: 'Ouest', arrondissement: 'Pointe-à-Raquettes',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~45 000 hab.',
            description: 'Commune sur l\'île de la Gonâve, dans la partie sud-est de l\'île.',
            characteristics: 'Pêche artisanale, agriculture, mangroves, ressources marines.',
            sections: ['Pointe-à-Raquettes-Centre', '2ème Section', '3ème Section']
          }
        ]
      }
    ]
  },

  /* ════════════════════════════════ 2. NORD ═══════════════════════════════ */
  {
    id: 'nord', name: 'Nord', capital: 'Cap-Haïtien',
    area: '2 115 km²', population: '~1,1 million',
    color: '#006400',
    description: 'Berceau historique de la Révolution haïtienne, le département du Nord abrite la Citadelle Laferrière et le Palais Sans-Souci (UNESCO), ainsi que Cap-Haïtien, la deuxième ville du pays.',
    arrondissements: [
      {
        id: 'arr-cap-haitien', name: 'Cap-Haïtien', capital: 'Cap-Haïtien',
        communes: [
          {
            id: 'com-cap-haitien', name: 'Cap-Haïtien',
            department: 'Nord', arrondissement: 'Cap-Haïtien',
            chefLieuDepartement: true, chefLieuArrondissement: true,
            population: '~350 000 hab.',
            description: 'Deuxième ville d\'Haïti, ancienne capitale coloniale « Cap Français ». Porte d\'entrée vers la Citadelle Laferrière et le Palais Sans-Souci.',
            characteristics: 'Architecture coloniale, Citadelle Laferrière (UNESCO), Palais Sans-Souci (Milot), plage de Labadie, université.',
            sections: ['Bas-du-Cap', 'Haut-du-Cap', 'Centre-Ville', 'Vertières', 'Nan-Palmis', 'Bord-de-Mer']
          },
          {
            id: 'com-acul-nord', name: 'Acul-du-Nord',
            department: 'Nord', arrondissement: 'Cap-Haïtien',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~55 000 hab.',
            description: 'Commune au sud-ouest de Cap-Haïtien, dans la plaine du Nord. Lieu historique de la Révolution haïtienne.',
            characteristics: 'Plaine du Nord, agriculture, proximité du site de Bois-Caïman.',
            sections: ['Acul-du-Nord-Centre', 'Bord-de-Mer', 'Rivière-Massacrée', 'Haut-Acul']
          },
          {
            id: 'com-plaine-nord', name: 'Plaine-du-Nord',
            department: 'Nord', arrondissement: 'Cap-Haïtien',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~42 000 hab.',
            description: 'Commune dans la plaine du Nord, connue pour son pèlerinage syncrétique vodou-catholique en l\'honneur de Saint-Jacques Majeur / Ogou (fin juillet).',
            characteristics: 'Pèlerinage annuel, mare aux cochons, agriculture, histoire révolutionnaire.',
            sections: ['Plaine-du-Nord-Centre', 'Section Bas', '3ème Section', '4ème Section']
          },
          {
            id: 'com-limonade', name: 'Limonade',
            department: 'Nord', arrondissement: 'Cap-Haïtien',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~48 000 hab.',
            description: 'Commune côtière au nord-est de Cap-Haïtien, site de fouilles archéologiques de La Navidad — première colonie européenne en Amérique (1492).',
            characteristics: 'Site archéologique de La Navidad, Université Roi Henri Christophe, parc industriel, plages.',
            sections: ['Limonade-Centre', 'Bord-de-Mer', 'Haut-Limonade', '3ème Section']
          },
          {
            id: 'com-quartier-morin', name: 'Quartier-Morin',
            department: 'Nord', arrondissement: 'Cap-Haïtien',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~38 000 hab.',
            description: 'Commune dans la plaine du Nord, au sud-est de Cap-Haïtien.',
            characteristics: 'Agriculture, pêche, proximité de Cap-Haïtien.',
            sections: ['Quartier-Morin-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-milot', name: 'Milot',
            department: 'Nord', arrondissement: 'Cap-Haïtien',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~33 000 hab.',
            description: 'Commune au pied des montagnes du Nord, site de la Citadelle Laferrière et du Palais Sans-Souci, classés au patrimoine mondial de l\'UNESCO.',
            characteristics: 'Citadelle Laferrière (2 900 m d\'altitude), Palais Sans-Souci, Parc national historique, tourisme majeur.',
            sections: ['Milot-Centre', 'Sans-Souci', 'Pied-du-Cap', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-grande-riviere-nord', name: 'Grande-Rivière-du-Nord', capital: 'Grande-Rivière-du-Nord',
        communes: [
          {
            id: 'com-grande-riviere-nord', name: 'Grande-Rivière-du-Nord',
            department: 'Nord', arrondissement: 'Grande-Rivière-du-Nord',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~60 000 hab.',
            description: 'Commune au centre du département du Nord, traversée par la Grande Rivière du Nord.',
            characteristics: 'Commerce, agriculture, artisanat, carrefour routier.',
            sections: ['Grande-Rivière-Centre', 'Bord-Rivière', 'Haut-Grande-Rivière', '3ème Section']
          },
          {
            id: 'com-dondon', name: 'Dondon',
            department: 'Nord', arrondissement: 'Grande-Rivière-du-Nord',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~45 000 hab.',
            description: 'Commune montagneuse au sud du département du Nord.',
            characteristics: 'Agriculture de montagne, café, cacao, accès difficile.',
            sections: ['Dondon-Centre', 'Haut-Dondon', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-borgne', name: 'Borgne', capital: 'Borgne',
        communes: [
          {
            id: 'com-borgne', name: 'Borgne',
            department: 'Nord', arrondissement: 'Borgne',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~55 000 hab.',
            description: 'Commune côtière au nord-ouest du département, accessible principalement par la mer.',
            characteristics: 'Pêche, isolement géographique, plages, bateaux locaux.',
            sections: ['Borgne-Centre', 'Bord-de-Mer', 'Bas-Borgne', '3ème Section']
          },
          {
            id: 'com-port-margot', name: 'Port-Margot',
            department: 'Nord', arrondissement: 'Borgne',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~42 000 hab.',
            description: 'Commune côtière entre Borgne et Cap-Haïtien.',
            characteristics: 'Pêche, plages, agriculture.',
            sections: ['Port-Margot-Centre', 'Bord-de-Mer', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-plaisance', name: 'Plaisance', capital: 'Plaisance',
        communes: [
          {
            id: 'com-plaisance', name: 'Plaisance',
            department: 'Nord', arrondissement: 'Plaisance',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~60 000 hab.',
            description: 'Commune dans les montagnes du département du Nord, centre commercial pour les zones rurales environnantes.',
            characteristics: 'Commerce, café, cacao, agriculture de montagne.',
            sections: ['Plaisance-Centre', 'Haut-Plaisance', 'Rivière-Bouyaha', '3ème Section']
          },
          {
            id: 'com-pilate', name: 'Pilate',
            department: 'Nord', arrondissement: 'Plaisance',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~48 000 hab.',
            description: 'Commune montagneuse dans l\'arrondissement de Plaisance.',
            characteristics: 'Agriculture de montagne, café, cacao, forêts.',
            sections: ['Pilate-Centre', 'Haut-Pilate', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-pignon', name: 'Pignon', capital: 'Pignon',
        communes: [
          {
            id: 'com-pignon', name: 'Pignon',
            department: 'Nord', arrondissement: 'Pignon',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~85 000 hab.',
            description: 'Commune dans le sud du département du Nord, centre commercial important desservant les zones rurales environnantes.',
            characteristics: 'Commerce agricole, marché hebdomadaire important, accès au plateau central.',
            sections: ['Pignon-Centre', 'Nan-Baptiste', 'Bas-Pignon', 'Haut-Pignon', '5ème Section']
          },
          {
            id: 'com-saint-raphael', name: 'Saint-Raphaël',
            department: 'Nord', arrondissement: 'Pignon',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~70 000 hab.',
            description: 'Commune dans le sud du département du Nord, traversée par la Grande Rivière du Nord.',
            characteristics: 'Agriculture, élevage, marché local.',
            sections: ['Saint-Raphaël-Centre', 'Bord-Rivière', 'Haut-Saint-Raphaël', '3ème Section']
          },
          {
            id: 'com-la-victoire', name: 'La Victoire',
            department: 'Nord', arrondissement: 'Pignon',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~32 000 hab.',
            description: 'Commune rurale dans le sud du département du Nord.',
            characteristics: 'Agriculture, élevage, zones forestières.',
            sections: ['La-Victoire-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-bahon', name: 'Bahon',
            department: 'Nord', arrondissement: 'Pignon',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~28 000 hab.',
            description: 'Petite commune rurale dans l\'arrondissement de Pignon.',
            characteristics: 'Agriculture, isolement, subsistance.',
            sections: ['Bahon-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-ranquitte', name: 'Ranquitte',
            department: 'Nord', arrondissement: 'Pignon',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~27 000 hab.',
            description: 'Commune montagneuse dans le sud du département du Nord.',
            characteristics: 'Agriculture de montagne, café, accès difficile.',
            sections: ['Ranquitte-Centre', '2ème Section', '3ème Section']
          }
        ]
      }
    ]
  },

  /* ══════════════════════════════ 3. NORD-EST ═════════════════════════════ */
  {
    id: 'nord-est', name: 'Nord-Est', capital: 'Fort-Liberté',
    area: '1 622 km²', population: '~400 000',
    color: '#8B4513',
    description: 'Département frontalier avec la République dominicaine. Connu pour la baie de Fort-Liberté et le marché transfrontalier de Ouanaminthe/Dajabón. Région agricole en plein développement.',
    arrondissements: [
      {
        id: 'arr-fort-liberte', name: 'Fort-Liberté', capital: 'Fort-Liberté',
        communes: [
          {
            id: 'com-fort-liberte', name: 'Fort-Liberté',
            department: 'Nord-Est', arrondissement: 'Fort-Liberté',
            chefLieuDepartement: true, chefLieuArrondissement: true,
            population: '~70 000 hab.',
            description: 'Chef-lieu du département du Nord-Est, situé sur la baie de Fort-Liberté. Ancienne fortification coloniale française (Fort Dauphin).',
            characteristics: 'Fort colonial, baie protégée, port de pêche, histoire coloniale.',
            sections: ['Fort-Liberté-Centre', 'Bord-de-Mer', 'Derrière-Fort', '3ème Section', '4ème Section']
          },
          {
            id: 'com-terrier-rouge', name: 'Terrier-Rouge',
            department: 'Nord-Est', arrondissement: 'Fort-Liberté',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~55 000 hab.',
            description: 'Commune dans la plaine du Nord-Est, zone agricole importante.',
            characteristics: 'Agriculture, élevage, accès à la frontière dominicaine.',
            sections: ['Terrier-Rouge-Centre', 'Plaine-de-Terrier', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-perches', name: 'Perches',
            department: 'Nord-Est', arrondissement: 'Fort-Liberté',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~30 000 hab.',
            description: 'Commune montagneuse dans le département du Nord-Est.',
            characteristics: 'Agriculture de montagne, café.',
            sections: ['Perches-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-ferrier', name: 'Ferrier',
            department: 'Nord-Est', arrondissement: 'Fort-Liberté',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~38 000 hab.',
            description: 'Commune côtière dans le Nord-Est, avec accès à la baie de Fort-Liberté.',
            characteristics: 'Pêche, agriculture, plages.',
            sections: ['Ferrier-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-mont-organise', name: 'Mont-Organisé',
            department: 'Nord-Est', arrondissement: 'Fort-Liberté',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~32 000 hab.',
            description: 'Commune dans le département du Nord-Est, en zone montagneuse.',
            characteristics: 'Agriculture, forêt, café.',
            sections: ['Mont-Organisé-Centre', '2ème Section', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-trou-nord', name: 'Trou-du-Nord', capital: 'Trou-du-Nord',
        communes: [
          {
            id: 'com-trou-nord', name: 'Trou-du-Nord',
            department: 'Nord-Est', arrondissement: 'Trou-du-Nord',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~75 000 hab.',
            description: 'Commune dans l\'arrondissement de Trou-du-Nord, centre commercial de la région.',
            characteristics: 'Commerce, agriculture, marché, riziculture.',
            sections: ['Trou-du-Nord-Centre', 'Plaine-Trou', 'Haut-Trou', '3ème Section']
          },
          {
            id: 'com-vallieres', name: 'Vallières',
            department: 'Nord-Est', arrondissement: 'Trou-du-Nord',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~40 000 hab.',
            description: 'Commune montagneuse dans l\'arrondissement de Trou-du-Nord.',
            characteristics: 'Agriculture de montagne, café, forêts.',
            sections: ['Vallières-Centre', 'Haut-Vallières', '3ème Section']
          },
          {
            id: 'com-carice', name: 'Carice',
            department: 'Nord-Est', arrondissement: 'Trou-du-Nord',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~25 000 hab.',
            description: 'Petite commune dans le Nord-Est.',
            characteristics: 'Agriculture, élevage, subsistance.',
            sections: ['Carice-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-sainte-suzanne', name: 'Sainte-Suzanne',
            department: 'Nord-Est', arrondissement: 'Trou-du-Nord',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~33 000 hab.',
            description: 'Commune dans le département du Nord-Est.',
            characteristics: 'Agriculture, banane, canne à sucre.',
            sections: ['Sainte-Suzanne-Centre', '2ème Section', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-ouanaminthe', name: 'Ouanaminthe', capital: 'Ouanaminthe',
        communes: [
          {
            id: 'com-ouanaminthe', name: 'Ouanaminthe',
            department: 'Nord-Est', arrondissement: 'Ouanaminthe',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~120 000 hab.',
            description: 'Ville frontalière face à Dajabón (RD), l\'un des plus importants postes-frontières d\'Haïti. Marché binational le lundi.',
            characteristics: 'Marché frontalier, commerce transfrontalier, zones franches, pont international.',
            sections: ['Ouanaminthe-Centre', 'Bord-Rivière-Massacre', 'Haut-Ouanaminthe', '3ème Section']
          },
          {
            id: 'com-capotille', name: 'Capotille',
            department: 'Nord-Est', arrondissement: 'Ouanaminthe',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~28 000 hab.',
            description: 'Commune rurale frontalière dans le Nord-Est.',
            characteristics: 'Agriculture, élevage, accès à la frontière dominicaine.',
            sections: ['Capotille-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-mombin-crochu', name: 'Mombin-Crochu',
            department: 'Nord-Est', arrondissement: 'Ouanaminthe',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~22 000 hab.',
            description: 'Petite commune dans l\'arrondissement de Ouanaminthe.',
            characteristics: 'Agriculture, forêts, zones montagneuses.',
            sections: ['Mombin-Crochu-Centre', '2ème Section', '3ème Section']
          }
        ]
      }
    ]
  },

  /* ══════════════════════════════ 4. NORD-OUEST ═══════════════════════════ */
  {
    id: 'nord-ouest', name: 'Nord-Ouest', capital: 'Port-de-Paix',
    area: '2 103 km²', population: '~700 000',
    color: '#4B0082',
    description: 'Département au nord-ouest, bordé par le canal du Vent. Comprend l\'île de la Tortue, base historique des pirates. Région agricole et de pêche.',
    arrondissements: [
      {
        id: 'arr-port-de-paix', name: 'Port-de-Paix', capital: 'Port-de-Paix',
        communes: [
          {
            id: 'com-port-de-paix', name: 'Port-de-Paix',
            department: 'Nord-Ouest', arrondissement: 'Port-de-Paix',
            chefLieuDepartement: true, chefLieuArrondissement: true,
            population: '~250 000 hab.',
            description: 'Chef-lieu du département du Nord-Ouest, port sur le canal du Vent face à l\'île de la Tortue.',
            characteristics: 'Port de pêche, commerce, accès à l\'île de la Tortue, marché local.',
            sections: ['Port-de-Paix-Centre', 'Bord-de-Mer', 'Haut-Port-de-Paix', '3ème Section', '4ème Section']
          },
          {
            id: 'com-saint-louis-nord', name: 'Saint-Louis-du-Nord',
            department: 'Nord-Ouest', arrondissement: 'Port-de-Paix',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~95 000 hab.',
            description: 'Commune côtière au nord-est de Port-de-Paix, sur le canal du Vent.',
            characteristics: 'Pêche, agriculture, plages.',
            sections: ['Saint-Louis-du-Nord-Centre', 'Bord-de-Mer', 'Haut-Saint-Louis', '3ème Section']
          },
          {
            id: 'com-chansolme', name: 'Chansolme',
            department: 'Nord-Ouest', arrondissement: 'Port-de-Paix',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~48 000 hab.',
            description: 'Commune dans l\'arrondissement de Port-de-Paix.',
            characteristics: 'Agriculture, pêche artisanale.',
            sections: ['Chansolme-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-bassin-bleu', name: 'Bassin-Bleu',
            department: 'Nord-Ouest', arrondissement: 'Port-de-Paix',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~52 000 hab.',
            description: 'Commune dans l\'intérieur du département du Nord-Ouest.',
            characteristics: 'Agriculture de montagne, café, accès difficile.',
            sections: ['Bassin-Bleu-Centre', 'Haut-Bassin', '3ème Section']
          },
          {
            id: 'com-ile-tortue', name: "L'Île-de-la-Tortue",
            department: 'Nord-Ouest', arrondissement: 'Port-de-Paix',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~28 000 hab.',
            description: 'Commune sur l\'île de la Tortue, au large de Port-de-Paix. Historiquement célèbre comme base des flibustiers et boucaniers aux XVII–XVIIIe siècles.',
            characteristics: 'Histoire de la piraterie, pêche, plages, isolement insulaire.',
            sections: ['Palmiste-à-Vin', 'Cayonne', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-jean-rabel', name: 'Jean-Rabel', capital: 'Jean-Rabel',
        communes: [
          {
            id: 'com-jean-rabel', name: 'Jean-Rabel',
            department: 'Nord-Ouest', arrondissement: 'Jean-Rabel',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~180 000 hab.',
            description: 'Commune dans le nord-ouest, zone semi-aride connue pour l\'élevage et la production de sel.',
            characteristics: 'Élevage, sel, sisal, zone semi-aride.',
            sections: ['Jean-Rabel-Centre', 'Haut-Jean-Rabel', 'Bas-Jean-Rabel', '3ème Section', '4ème Section']
          },
          {
            id: 'com-baie-henne', name: 'Baie-de-Henne',
            department: 'Nord-Ouest', arrondissement: 'Jean-Rabel',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~45 000 hab.',
            description: 'Commune côtière au nord-ouest, sur la baie de Henne.',
            characteristics: 'Pêche, sel, côte sauvage.',
            sections: ['Baie-de-Henne-Centre', 'Bord-de-Mer', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-bombardopolis', name: 'Bombardopolis', capital: 'Bombardopolis',
        communes: [
          {
            id: 'com-bombardopolis', name: 'Bombardopolis',
            department: 'Nord-Ouest', arrondissement: 'Bombardopolis',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~65 000 hab.',
            description: 'Commune dans le nord-ouest, zone semi-aride à l\'extrémité nord-ouest de la presqu\'île.',
            characteristics: 'Zone semi-aride, élevage, sel, paysages désertiques.',
            sections: ['Bombardopolis-Centre', 'Haut-Bombardopolis', '3ème Section']
          },
          {
            id: 'com-anse-foleur', name: 'Anse-à-Foleur',
            department: 'Nord-Ouest', arrondissement: 'Bombardopolis',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~38 000 hab.',
            description: 'Commune côtière dans l\'arrondissement de Bombardopolis.',
            characteristics: 'Pêche, plages, agriculture.',
            sections: ['Anse-à-Foleur-Centre', 'Bord-de-Mer', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-mole-saint-nicolas', name: 'Môle-Saint-Nicolas', capital: 'Môle-Saint-Nicolas',
        communes: [
          {
            id: 'com-mole-saint-nicolas', name: 'Môle-Saint-Nicolas',
            department: 'Nord-Ouest', arrondissement: 'Môle-Saint-Nicolas',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~55 000 hab.',
            description: 'Commune à l\'extrémité nord-ouest d\'Haïti, premier lieu où Christophe Colomb débarqua sur l\'île d\'Hispaniola (décembre 1492). Baie naturelle exceptionnelle.',
            characteristics: 'Site historique (débarquement de Colomb), baie naturelle, plages, pêche, phare.',
            sections: ['Môle-Centre', 'Bord-de-Mer', 'Haut-Môle', '3ème Section']
          }
        ]
      }
    ]
  },

  /* ══════════════════════════════ 5. ARTIBONITE ════════════════════════════ */
  {
    id: 'artibonite', name: 'Artibonite', capital: 'Gonaïves',
    area: '4 887 km²', population: '~1,8 million',
    color: '#228B22',
    description: 'Le plus grand département d\'Haïti et « grenier à riz » du pays grâce à la plaine de l\'Artibonite et au barrage de Péligre. Gonaïves est la « Cité de l\'Indépendance ».',
    arrondissements: [
      {
        id: 'arr-gonaives', name: 'Gonaïves', capital: 'Gonaïves',
        communes: [
          {
            id: 'com-gonaives', name: 'Gonaïves',
            department: 'Artibonite', arrondissement: 'Gonaïves',
            chefLieuDepartement: true, chefLieuArrondissement: true,
            population: '~350 000 hab.',
            description: '« Cité de l\'Indépendance » : c\'est ici que Jean-Jacques Dessalines proclama l\'indépendance d\'Haïti le 1er janvier 1804. Troisième ville du pays.',
            characteristics: 'Place de l\'Indépendance, musée historique, port, plaine agricole, zone vulnérable aux cyclones.',
            sections: ['Gonaïves-Centre', 'Raboteau', 'Jubilé', 'Bord-de-Mer', 'La Savane', '6ème Section']
          },
          {
            id: 'com-lestere', name: "L'Estère",
            department: 'Artibonite', arrondissement: 'Gonaïves',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~75 000 hab.',
            description: 'Commune dans la plaine de l\'Artibonite, zone rizicole importante.',
            characteristics: 'Riziculture, agriculture irriguée, plaine alluviale.',
            sections: ["L'Estère-Centre", 'Plaine-Estère', '3ème Section']
          },
          {
            id: 'com-ennery', name: 'Ennery',
            department: 'Artibonite', arrondissement: 'Gonaïves',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~55 000 hab.',
            description: 'Commune dans l\'arrondissement de Gonaïves, zone agricole.',
            characteristics: 'Agriculture, élevage, maraîchage.',
            sections: ['Ennery-Centre', 'Haut-Ennery', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-saint-marc', name: 'Saint-Marc', capital: 'Saint-Marc',
        communes: [
          {
            id: 'com-saint-marc', name: 'Saint-Marc',
            department: 'Artibonite', arrondissement: 'Saint-Marc',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~250 000 hab.',
            description: 'Deuxième ville de l\'Artibonite, port industriel sur le golfe de la Gonâve. Centre commercial et industriel important.',
            characteristics: 'Port, industrie, commerce, baie de Saint-Marc, plages.',
            sections: ['Saint-Marc-Centre', 'Bord-de-Mer', 'La-Montagne', 'Haut-Saint-Marc', '4ème Section']
          },
          {
            id: 'com-verrettes', name: 'Verrettes',
            department: 'Artibonite', arrondissement: 'Saint-Marc',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~110 000 hab.',
            description: 'Commune dans la plaine de l\'Artibonite, importante zone agricole.',
            characteristics: 'Riziculture, canne à sucre, maïs, plaine irriguée.',
            sections: ['Verrettes-Centre', 'Plaine-Verrettes', 'Haut-Verrettes', '3ème Section']
          },
          {
            id: 'com-la-chapelle', name: 'La Chapelle',
            department: 'Artibonite', arrondissement: 'Saint-Marc',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~55 000 hab.',
            description: 'Commune dans l\'arrondissement de Saint-Marc.',
            characteristics: 'Agriculture, maraîchage.',
            sections: ['La-Chapelle-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-desdunes', name: 'Desdunes',
            department: 'Artibonite', arrondissement: 'Saint-Marc',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~48 000 hab.',
            description: 'Commune dans la plaine de l\'Artibonite, zone agricole.',
            characteristics: 'Agriculture, riziculture, plaine alluviale.',
            sections: ['Desdunes-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-liancourt', name: 'Liancourt',
            department: 'Artibonite', arrondissement: 'Saint-Marc',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~40 000 hab.',
            description: 'Commune dans la plaine de l\'Artibonite, zone agricole.',
            characteristics: 'Agriculture, élevage.',
            sections: ['Liancourt-Centre', '2ème Section', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-gros-morne', name: 'Gros-Morne', capital: 'Gros-Morne',
        communes: [
          {
            id: 'com-gros-morne', name: 'Gros-Morne',
            department: 'Artibonite', arrondissement: 'Gros-Morne',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~130 000 hab.',
            description: 'Commune dans les montagnes de l\'Artibonite.',
            characteristics: 'Agriculture de montagne, café, élevage, marché.',
            sections: ['Gros-Morne-Centre', 'Haut-Gros-Morne', 'Plaine-Gros-Morne', '3ème Section']
          },
          {
            id: 'com-anse-rouge', name: 'Anse-Rouge',
            department: 'Artibonite', arrondissement: 'Gros-Morne',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~48 000 hab.',
            description: 'Commune côtière dans l\'arrondissement de Gros-Morne, sur la côte nord de l\'Artibonite.',
            characteristics: 'Pêche, sel, côte aride, plages.',
            sections: ['Anse-Rouge-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-terre-neuve', name: 'Terre-Neuve',
            department: 'Artibonite', arrondissement: 'Gros-Morne',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~42 000 hab.',
            description: 'Commune dans l\'arrondissement de Gros-Morne.',
            characteristics: 'Agriculture, élevage.',
            sections: ['Terre-Neuve-Centre', '2ème Section', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-dessalines', name: 'Dessalines', capital: 'Dessalines',
        communes: [
          {
            id: 'com-dessalines', name: 'Dessalines (Marchand-Dessalines)',
            department: 'Artibonite', arrondissement: 'Dessalines',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~95 000 hab.',
            description: 'Commune nommée en l\'honneur de Jean-Jacques Dessalines, héros de l\'indépendance. Dans la plaine de l\'Artibonite.',
            characteristics: 'Agriculture, riziculture, mémoire de Dessalines, carnaval régional.',
            sections: ['Dessalines-Centre', 'Plaine-Dessalines', 'Haut-Dessalines', '3ème Section', '4ème Section']
          },
          {
            id: 'com-grande-saline', name: 'Grande-Saline',
            department: 'Artibonite', arrondissement: 'Dessalines',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~55 000 hab.',
            description: 'Commune côtière sur le golfe de la Gonâve, connue pour la production de sel.',
            characteristics: 'Production de sel, pêche, marais salants.',
            sections: ['Grande-Saline-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-petite-riviere-artibonite', name: "Petite-Rivière-de-l'Artibonite",
            department: 'Artibonite', arrondissement: 'Dessalines',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~72 000 hab.',
            description: 'Commune historique dans la plaine de l\'Artibonite, site de la bataille de la Crête-à-Pierrot (1802).',
            characteristics: 'Fort de la Crête-à-Pierrot, histoire révolutionnaire, agriculture.',
            sections: ['Petite-Rivière-Centre', 'Savane-Désolée', 'Bord-Artibonite', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-marmelade', name: 'Marmelade', capital: 'Marmelade',
        communes: [
          {
            id: 'com-marmelade', name: 'Marmelade',
            department: 'Artibonite', arrondissement: 'Marmelade',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~60 000 hab.',
            description: 'Commune montagneuse dans l\'Artibonite, aux confins du département du Nord.',
            characteristics: 'Agriculture de montagne, café, cacao.',
            sections: ['Marmelade-Centre', 'Haut-Marmelade', '3ème Section']
          },
          {
            id: 'com-saint-michel-attalaye', name: "Saint-Michel-de-l'Attalaye",
            department: 'Artibonite', arrondissement: 'Marmelade',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~75 000 hab.',
            description: 'Commune dans la région montagneuse de l\'Artibonite.',
            characteristics: 'Agriculture, élevage, café.',
            sections: ['Saint-Michel-Centre', '2ème Section', '3ème Section', '4ème Section']
          },
          {
            id: 'com-poteau', name: 'Poteau',
            department: 'Artibonite', arrondissement: 'Marmelade',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~30 000 hab.',
            description: 'Petite commune dans l\'arrondissement de Marmelade.',
            characteristics: 'Agriculture rurale.',
            sections: ['Poteau-Centre', '2ème Section', '3ème Section']
          }
        ]
      }
    ]
  },

  /* ════════════════════════════════ 6. CENTRE ═════════════════════════════ */
  {
    id: 'centre', name: 'Centre', capital: 'Hinche',
    area: '3 487 km²', population: '~750 000',
    color: '#8B6914',
    description: 'Région centrale d\'Haïti sur le plateau central, traversée par le fleuve Artibonite. Important pour l\'agriculture, l\'élevage et le barrage hydroélectrique de Péligre.',
    arrondissements: [
      {
        id: 'arr-hinche', name: 'Hinche', capital: 'Hinche',
        communes: [
          {
            id: 'com-hinche', name: 'Hinche',
            department: 'Centre', arrondissement: 'Hinche',
            chefLieuDepartement: true, chefLieuArrondissement: true,
            population: '~180 000 hab.',
            description: 'Chef-lieu du département du Centre, situé sur le plateau central. Centre administratif et commercial de la région.',
            characteristics: 'Plateau central, élevage, agriculture, université Notre-Dame d\'Haïti.',
            sections: ['Hinche-Centre', 'Plaine-Hinche', 'Bord-Artibonite', '3ème Section', '4ème Section']
          },
          {
            id: 'com-maissade', name: 'Maïssade',
            department: 'Centre', arrondissement: 'Hinche',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~65 000 hab.',
            description: 'Commune dans l\'arrondissement de Hinche, sur le plateau central.',
            characteristics: 'Agriculture, élevage, cultures vivrières.',
            sections: ['Maïssade-Centre', 'Haut-Maïssade', '3ème Section']
          },
          {
            id: 'com-cerca-la-source', name: 'Cerca-la-Source',
            department: 'Centre', arrondissement: 'Hinche',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~55 000 hab.',
            description: 'Commune dans le Centre, près de la frontière avec la République dominicaine.',
            characteristics: 'Agriculture, élevage, zone frontalière.',
            sections: ['Cerca-la-Source-Centre', '2ème Section', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-thomonde', name: 'Thomonde', capital: 'Thomonde',
        communes: [
          {
            id: 'com-thomonde', name: 'Thomonde',
            department: 'Centre', arrondissement: 'Thomonde',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~45 000 hab.',
            description: 'Commune sur le plateau central haïtien.',
            characteristics: 'Élevage, agriculture, isolement relatif.',
            sections: ['Thomonde-Centre', 'Haut-Thomonde', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-mirebalais', name: 'Mirebalais', capital: 'Mirebalais',
        communes: [
          {
            id: 'com-mirebalais', name: 'Mirebalais',
            department: 'Centre', arrondissement: 'Mirebalais',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~130 000 hab.',
            description: 'Deuxième ville du département du Centre. Site de l\'Hôpital Universitaire de Mirebalais (HUM), le plus grand hôpital d\'Haïti, et du barrage de Péligre.',
            characteristics: 'Hôpital HUM (PIH), lac de Péligre (hydroélectricité), marché régional.',
            sections: ['Mirebalais-Centre', 'Bord-Artibonite', 'Savane-Zombi', '3ème Section', '4ème Section']
          },
          {
            id: 'com-boucan-carre', name: 'Boucan-Carré',
            department: 'Centre', arrondissement: 'Mirebalais',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~60 000 hab.',
            description: 'Commune dans l\'arrondissement de Mirebalais, sur les rives du lac de Péligre.',
            characteristics: 'Lac de Péligre, pêche, agriculture, hydroélectricité.',
            sections: ['Boucan-Carré-Centre', 'Bord-Péligre', '3ème Section']
          },
          {
            id: 'com-saut-eau', name: "Saut-d'Eau",
            department: 'Centre', arrondissement: 'Mirebalais',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~48 000 hab.',
            description: 'Commune connue pour la cascade de Saut-d\'Eau (Sodo), lieu de pèlerinage syncrétique vodou-catholique, fréquenté notamment le 16 juillet (Notre-Dame du Carmel / Erzulie Dantor).',
            characteristics: 'Cascade de Saut-d\'Eau, pèlerinage annuel (16 juillet), tourisme religieux, nature.',
            sections: ["Saut-d'Eau-Centre", 'Bord-Cascade', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-lascahobas', name: 'Lascahobas', capital: 'Lascahobas',
        communes: [
          {
            id: 'com-lascahobas', name: 'Lascahobas',
            department: 'Centre', arrondissement: 'Lascahobas',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~75 000 hab.',
            description: 'Commune frontalière dans le Centre, carrefour commercial transfrontalier.',
            characteristics: 'Marché frontalier, élevage, agriculture.',
            sections: ['Lascahobas-Centre', 'Haut-Lascahobas', '3ème Section']
          },
          {
            id: 'com-savanette', name: 'Savanette',
            department: 'Centre', arrondissement: 'Lascahobas',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~40 000 hab.',
            description: 'Commune dans l\'arrondissement de Lascahobas.',
            characteristics: 'Agriculture, élevage.',
            sections: ['Savanette-Centre', '2ème Section', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-belladere', name: 'Belladère', capital: 'Belladère',
        communes: [
          {
            id: 'com-belladere', name: 'Belladère',
            department: 'Centre', arrondissement: 'Belladère',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~65 000 hab.',
            description: 'Commune frontalière stratégique dans le Centre, face à Comendador (RD). Poste-frontière important entre Haïti et la République dominicaine.',
            characteristics: 'Poste-frontière Belladère/Comendador, commerce transfrontalier, élevage.',
            sections: ['Belladère-Centre', 'Bord-Frontière', '3ème Section']
          },
          {
            id: 'com-cerca-carvajal', name: 'Cerca-Carvajal',
            department: 'Centre', arrondissement: 'Belladère',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~30 000 hab.',
            description: 'Petite commune dans l\'arrondissement de Belladère.',
            characteristics: 'Agriculture, élevage, zone frontalière.',
            sections: ['Cerca-Carvajal-Centre', '2ème Section', '3ème Section']
          }
        ]
      }
    ]
  },

  /* ══════════════════════════════ 7. SUD-EST ══════════════════════════════ */
  {
    id: 'sud-est', name: 'Sud-Est', capital: 'Jacmel',
    area: '2 023 km²', population: '~600 000',
    color: '#FF6347',
    description: 'Département côtier du sud. Jacmel est réputée pour son architecture coloniale préservée, son carnaval de papier maché unique et ses plages.',
    arrondissements: [
      {
        id: 'arr-jacmel', name: 'Jacmel', capital: 'Jacmel',
        communes: [
          {
            id: 'com-jacmel', name: 'Jacmel',
            department: 'Sud-Est', arrondissement: 'Jacmel',
            chefLieuDepartement: true, chefLieuArrondissement: true,
            population: '~170 000 hab.',
            description: 'Chef-lieu du Sud-Est, surnommée « Cité d\'art et de culture ». Connue pour son carnaval de papier maché, son architecture coloniale protégée et ses plages.',
            characteristics: 'Carnaval unique (papier maché), maisons victoriennes, plage de Ti-Mouillage, festival JazJacmel, port colonial.',
            sections: ['Jacmel-Centre', 'Bord-de-Mer', 'Ti-Mouillage', 'Cap-Rouge', 'Cabaret', '6ème Section']
          },
          {
            id: 'com-cayes-jacmel', name: 'Cayes-Jacmel',
            department: 'Sud-Est', arrondissement: 'Jacmel',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~55 000 hab.',
            description: 'Commune côtière dans l\'arrondissement de Jacmel.',
            characteristics: 'Plages, pêche, agriculture côtière.',
            sections: ['Cayes-Jacmel-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-vallee-jacmel', name: 'La Vallée-de-Jacmel',
            department: 'Sud-Est', arrondissement: 'Jacmel',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~62 000 hab.',
            description: 'Commune dans les montagnes autour de Jacmel.',
            characteristics: 'Agriculture de montagne, café, forêts, paysages.',
            sections: ['La-Vallée-Centre', 'Haut-Vallée', '3ème Section']
          },
          {
            id: 'com-marigot', name: 'Marigot',
            department: 'Sud-Est', arrondissement: 'Jacmel',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~58 000 hab.',
            description: 'Commune côtière dans le sud-est, à l\'est de Jacmel.',
            characteristics: 'Pêche, agriculture, plages, accès par la côte.',
            sections: ['Marigot-Centre', 'Bord-de-Mer', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-bainet', name: 'Bainet', capital: 'Bainet',
        communes: [
          {
            id: 'com-bainet', name: 'Bainet',
            department: 'Sud-Est', arrondissement: 'Bainet',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~80 000 hab.',
            description: 'Commune côtière dans le sud-est, entre Jacmel et Belle-Anse.',
            characteristics: 'Pêche, agriculture, plages, tourisme naissant.',
            sections: ['Bainet-Centre', 'Bord-de-Mer', 'Haut-Bainet', '3ème Section']
          },
          {
            id: 'com-cotes-de-fer', name: 'Côtes-de-Fer',
            department: 'Sud-Est', arrondissement: 'Bainet',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~45 000 hab.',
            description: 'Commune côtière dans l\'arrondissement de Bainet.',
            characteristics: 'Pêche artisanale, plages, agriculture.',
            sections: ['Côtes-de-Fer-Centre', 'Bord-de-Mer', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-belle-anse', name: 'Belle-Anse', capital: 'Belle-Anse',
        communes: [
          {
            id: 'com-belle-anse', name: 'Belle-Anse',
            department: 'Sud-Est', arrondissement: 'Belle-Anse',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~70 000 hab.',
            description: 'Commune dans l\'est du département du Sud-Est, frontalière avec la République dominicaine.',
            characteristics: 'Agriculture, pêche, accès à la frontière dominicaine.',
            sections: ['Belle-Anse-Centre', 'Bord-de-Mer', 'Haut-Belle-Anse', '3ème Section']
          },
          {
            id: 'com-anse-pitre', name: 'Anse-à-Pitre',
            department: 'Sud-Est', arrondissement: 'Belle-Anse',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~30 000 hab.',
            description: 'Commune côtière frontalière à l\'extrémité est du département, face à Pedernales (RD).',
            characteristics: 'Frontière Anse-à-Pitre/Pedernales, pêche, commerce transfrontalier.',
            sections: ['Anse-à-Pitre-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-grand-gosier', name: 'Grand-Gosier',
            department: 'Sud-Est', arrondissement: 'Belle-Anse',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~38 000 hab.',
            description: 'Commune dans l\'arrondissement de Belle-Anse.',
            characteristics: 'Agriculture, pêche.',
            sections: ['Grand-Gosier-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-thiotte', name: 'Thiotte',
            department: 'Sud-Est', arrondissement: 'Belle-Anse',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~35 000 hab.',
            description: 'Commune montagneuse dans le département du Sud-Est.',
            characteristics: 'Agriculture de montagne, forêts, café.',
            sections: ['Thiotte-Centre', 'Haut-Thiotte', '3ème Section']
          }
        ]
      }
    ]
  },

  /* ═══════════════════════════════ 8. SUD ═════════════════════════════════ */
  {
    id: 'sud', name: 'Sud', capital: 'Les Cayes',
    area: '2 654 km²', population: '~900 000',
    color: '#FF8C00',
    description: 'Département du sud sur la péninsule méridionale. Les Cayes est un port important. L\'île-à-Vache et Port-Salut sont des destinations touristiques très prisées.',
    arrondissements: [
      {
        id: 'arr-les-cayes', name: 'Les Cayes', capital: 'Les Cayes',
        communes: [
          {
            id: 'com-les-cayes', name: 'Les Cayes',
            department: 'Sud', arrondissement: 'Les Cayes',
            chefLieuDepartement: true, chefLieuArrondissement: true,
            population: '~300 000 hab.',
            description: 'Chef-lieu du département du Sud, port principal de la péninsule méridionale. Surnommée « Cité des Cayes ».',
            characteristics: 'Port maritime, accès à l\'île-à-Vache, tourisme, commerce, université.',
            sections: ['Les-Cayes-Centre', 'Bord-de-Mer', 'Nan-Zòt', '3ème Section', '4ème Section', '5ème Section']
          },
          {
            id: 'com-torbeck', name: 'Torbeck',
            department: 'Sud', arrondissement: 'Les Cayes',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~60 000 hab.',
            description: 'Commune dans la plaine des Cayes, zone agricole prospère.',
            characteristics: 'Agriculture, canne à sucre, café, plaine fertile.',
            sections: ['Torbeck-Centre', 'Plaine-Torbeck', '3ème Section']
          },
          {
            id: 'com-camp-perrin', name: 'Camp-Perrin',
            department: 'Sud', arrondissement: 'Les Cayes',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~65 000 hab.',
            description: 'Commune dans les montagnes derrière Les Cayes, réputée pour ses chutes d\'eau et ses paysages.',
            characteristics: 'Chutes du Saut-Baril, tourisme nature, agriculture de montagne.',
            sections: ['Camp-Perrin-Centre', 'Haut-Camp-Perrin', 'Bas-Camp-Perrin', '3ème Section']
          },
          {
            id: 'com-maniche', name: 'Maniche',
            department: 'Sud', arrondissement: 'Les Cayes',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~38 000 hab.',
            description: 'Commune rurale dans l\'arrondissement des Cayes, au pied des massifs du Sud.',
            characteristics: 'Agriculture, café, forêts tropicales, rivières.',
            sections: ['Maniche-Centre', 'Haut-Maniche', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-aquin', name: 'Aquin', capital: 'Aquin',
        communes: [
          {
            id: 'com-aquin', name: 'Aquin',
            department: 'Sud', arrondissement: 'Aquin',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~115 000 hab.',
            description: 'Commune côtière sur la côte nord de la péninsule méridionale, entre Les Cayes et Jacmel.',
            characteristics: 'Pêche, plages, sel, élevage, sisal.',
            sections: ['Aquin-Centre', 'Bord-de-Mer', 'Haut-Aquin', '3ème Section']
          },
          {
            id: 'com-saint-louis-sud', name: 'Saint-Louis-du-Sud',
            department: 'Sud', arrondissement: 'Aquin',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~55 000 hab.',
            description: 'Commune côtière dans l\'arrondissement d\'Aquin.',
            characteristics: 'Pêche, agriculture, plages.',
            sections: ['Saint-Louis-du-Sud-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-cavaillon', name: 'Cavaillon',
            department: 'Sud', arrondissement: 'Aquin',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~70 000 hab.',
            description: 'Commune dans l\'arrondissement d\'Aquin.',
            characteristics: 'Agriculture de montagne, café, forêts.',
            sections: ['Cavaillon-Centre', 'Haut-Cavaillon', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-chardonnieres', name: 'Chardonnières', capital: 'Chardonnières',
        communes: [
          {
            id: 'com-chardonnieres', name: 'Chardonnières',
            department: 'Sud', arrondissement: 'Chardonnières',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~55 000 hab.',
            description: 'Commune côtière à l\'extrémité sud de la péninsule méridionale.',
            characteristics: 'Pêche, plages, agriculture côtière.',
            sections: ['Chardonnières-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-tiburon', name: 'Tiburon',
            department: 'Sud', arrondissement: 'Chardonnières',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~55 000 hab.',
            description: 'Commune côtière à l\'extrême pointe de la péninsule du Sud, point le plus proche de Cuba.',
            characteristics: 'Pêche, plages, isolement, plongée sous-marine.',
            sections: ['Tiburon-Centre', 'Bord-de-Mer', 'Haut-Tiburon', '3ème Section']
          },
          {
            id: 'com-les-anglais', name: 'Les Anglais',
            department: 'Sud', arrondissement: 'Chardonnières',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~45 000 hab.',
            description: 'Commune côtière dans le département du Sud.',
            characteristics: 'Pêche, agriculture, plages.',
            sections: ['Les-Anglais-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-roche-bateau', name: 'Roche-à-Bateau',
            department: 'Sud', arrondissement: 'Chardonnières',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~38 000 hab.',
            description: 'Commune côtière dans le département du Sud.',
            characteristics: 'Pêche artisanale, agriculture.',
            sections: ['Roche-à-Bateau-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-coteaux', name: 'Côteaux',
            department: 'Sud', arrondissement: 'Chardonnières',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~42 000 hab.',
            description: 'Commune dans la zone méridionale du département du Sud.',
            characteristics: 'Agriculture, pêche, côte méridionale.',
            sections: ['Côteaux-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-chantal', name: 'Chantal',
            department: 'Sud', arrondissement: 'Chardonnières',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~32 000 hab.',
            description: 'Commune dans le département du Sud, zone rurale montagneuse.',
            characteristics: 'Agriculture de montagne, café, zones forestières.',
            sections: ['Chantal-Centre', '2ème Section', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-port-salut', name: 'Port-Salut', capital: 'Port-Salut',
        communes: [
          {
            id: 'com-port-salut', name: 'Port-Salut',
            department: 'Sud', arrondissement: 'Port-Salut',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~80 000 hab.',
            description: 'Commune touristique célèbre pour ses magnifiques plages de sable blanc, parmi les plus belles des Caraïbes.',
            characteristics: 'Plages exceptionnelles, tourisme balnéaire, pêche, cocotiers.',
            sections: ['Port-Salut-Centre', 'Bord-de-Mer', 'Haut-Port-Salut', '3ème Section']
          },
          {
            id: 'com-arniquet', name: 'Arniquet',
            department: 'Sud', arrondissement: 'Port-Salut',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~35 000 hab.',
            description: 'Commune dans l\'arrondissement de Port-Salut.',
            characteristics: 'Agriculture, pêche.',
            sections: ['Arniquet-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-ile-vache', name: "Île-à-Vache",
            department: 'Sud', arrondissement: 'Port-Salut',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~14 000 hab.',
            description: 'Île au large des Cayes, destination touristique avec ses plages et son lagon. Ancienne base du pirate Henry Morgan.',
            characteristics: 'Tourisme, plages, snorkeling, hôtels, vie marine, histoire de la piraterie.',
            sections: ['Madame-Bernard', 'Kay-Kok', '3ème Section']
          },
          {
            id: 'com-port-a-piment', name: 'Port-à-Piment',
            department: 'Sud', arrondissement: 'Port-Salut',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~35 000 hab.',
            description: 'Commune côtière dans l\'arrondissement de Port-Salut, au bord de la mer des Caraïbes.',
            characteristics: 'Pêche, plages, agriculture côtière.',
            sections: ['Port-à-Piment-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-saint-jean-sud', name: 'Saint-Jean-du-Sud',
            department: 'Sud', arrondissement: 'Port-Salut',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~40 000 hab.',
            description: 'Commune côtière dans l\'arrondissement de Port-Salut.',
            characteristics: 'Pêche, agriculture, plages.',
            sections: ['Saint-Jean-du-Sud-Centre', 'Bord-de-Mer', '3ème Section']
          }
        ]
      }
    ]
  },

  /* ══════════════════════════════ 9. GRANDE-ANSE ═══════════════════════════ */
  {
    id: 'grande-anse', name: 'Grande-Anse', capital: 'Jérémie',
    area: '1 912 km²', population: '~500 000',
    color: '#2E8B57',
    description: 'Département à l\'extrémité ouest de la péninsule méridionale. Jérémie est surnommée « Cité des Poètes ». Forêts tropicales, plages sauvages et biodiversité exceptionnelle.',
    arrondissements: [
      {
        id: 'arr-jeremie', name: 'Jérémie', capital: 'Jérémie',
        communes: [
          {
            id: 'com-jeremie', name: 'Jérémie',
            department: 'Grande-Anse', arrondissement: 'Jérémie',
            chefLieuDepartement: true, chefLieuArrondissement: true,
            population: '~180 000 hab.',
            description: '« Cité des Poètes » — a donné naissance à de nombreux écrivains haïtiens célèbres (Georges Sylvain, Émile Roumer). Ville à l\'extrémité ouest de la péninsule.',
            characteristics: 'Littérature, culture, plages sauvages, forêts tropicales, aéroport.',
            sections: ['Jérémie-Centre', 'Bord-de-Mer', 'Nan-Morin', '3ème Section', '4ème Section', '5ème Section']
          },
          {
            id: 'com-abricots', name: 'Abricots',
            department: 'Grande-Anse', arrondissement: 'Jérémie',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~45 000 hab.',
            description: 'Commune côtière à l\'ouest de Jérémie, accessible principalement par la mer.',
            characteristics: 'Pêche, plages isolées, forêts tropicales.',
            sections: ['Abricots-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-roseaux', name: 'Roseaux',
            department: 'Grande-Anse', arrondissement: 'Jérémie',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~38 000 hab.',
            description: 'Commune dans l\'arrondissement de Jérémie.',
            characteristics: 'Agriculture, forêt, pêche côtière.',
            sections: ['Roseaux-Centre', '2ème Section', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-moron', name: 'Moron', capital: 'Moron',
        communes: [
          {
            id: 'com-moron', name: 'Moron',
            department: 'Grande-Anse', arrondissement: 'Moron',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~55 000 hab.',
            description: 'Commune dans le département de la Grande-Anse.',
            characteristics: 'Agriculture de montagne, café, cacao, forêts.',
            sections: ['Moron-Centre', 'Haut-Moron', '3ème Section']
          },
          {
            id: 'com-bonbon', name: 'Bonbon',
            department: 'Grande-Anse', arrondissement: 'Moron',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~35 000 hab.',
            description: 'Commune dans l\'arrondissement de Moron.',
            characteristics: 'Agriculture, café, zones de montagne.',
            sections: ['Bonbon-Centre', '2ème Section', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-anse-hainault', name: "Anse-d'Hainault", capital: "Anse-d'Hainault",
        communes: [
          {
            id: 'com-anse-hainault', name: "Anse-d'Hainault",
            department: 'Grande-Anse', arrondissement: "Anse-d'Hainault",
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~85 000 hab.',
            description: 'Commune à l\'extrémité sud-ouest de la péninsule, face à l\'île de la Navase.',
            characteristics: 'Pêche, plages sauvages, forêts, isolement.',
            sections: ["Anse-d'Hainault-Centre", 'Bord-de-Mer', 'Haut-Anse', '3ème Section']
          },
          {
            id: 'com-dame-marie', name: 'Dame-Marie',
            department: 'Grande-Anse', arrondissement: "Anse-d'Hainault",
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~62 000 hab.',
            description: 'Commune côtière dans la Grande-Anse, reconnue pour ses plages et sa biodiversité marine.',
            characteristics: 'Plages, pêche, tourisme naissant, forêts côtières.',
            sections: ['Dame-Marie-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-les-irois', name: 'Les Irois',
            department: 'Grande-Anse', arrondissement: "Anse-d'Hainault",
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~30 000 hab.',
            description: 'Commune à l\'extrémité sud-ouest de la péninsule du Sud.',
            characteristics: 'Pêche, isolement, plages vierges.',
            sections: ['Les-Irois-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-beaumont', name: 'Beaumont',
            department: 'Grande-Anse', arrondissement: "Anse-d'Hainault",
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~45 000 hab.',
            description: 'Commune dans le massif de la Hotte, grande zone de biodiversité haïtienne.',
            characteristics: 'Biodiversité, espèces endémiques, Parc national Macaya, forêt tropicale.',
            sections: ['Beaumont-Centre', 'Haut-Beaumont', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-corail', name: 'Corail', capital: 'Corail',
        communes: [
          {
            id: 'com-corail', name: 'Corail',
            department: 'Grande-Anse', arrondissement: 'Corail',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~85 000 hab.',
            description: 'Commune dans la zone centrale de la péninsule méridionale, carrefour routier.',
            characteristics: 'Agriculture, commerce, carrefour routier.',
            sections: ['Corail-Centre', 'Haut-Corail', '3ème Section', '4ème Section']
          },
          {
            id: 'com-pestel', name: 'Pestel',
            department: 'Grande-Anse', arrondissement: 'Corail',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~55 000 hab.',
            description: 'Commune côtière avec des criques et baies pittoresques.',
            characteristics: 'Pêche, plages, mangroves, tourisme naissant.',
            sections: ['Pestel-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-carrefour-charles', name: 'Carrefour-Charles',
            department: 'Grande-Anse', arrondissement: 'Corail',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~30 000 hab.',
            description: 'Commune dans l\'arrondissement de Corail.',
            characteristics: 'Agriculture, forêts.',
            sections: ['Carrefour-Charles-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-chambellan', name: 'Chambellan',
            department: 'Grande-Anse', arrondissement: 'Corail',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~28 000 hab.',
            description: 'Petite commune dans l\'arrondissement de Corail.',
            characteristics: 'Agriculture, forêts tropicales.',
            sections: ['Chambellan-Centre', '2ème Section', '3ème Section']
          }
        ]
      }
    ]
  },

  /* ══════════════════════════════ 10. NIPPES ══════════════════════════════ */
  {
    id: 'nippes', name: 'Nippes', capital: 'Miragoâne',
    area: '1 267 km²', population: '~350 000',
    color: '#9932CC',
    description: 'Le plus jeune département d\'Haïti, créé en 2003 à partir de parties de l\'Artibonite et de la Grande-Anse. Situé sur la péninsule méridionale.',
    arrondissements: [
      {
        id: 'arr-miragoane', name: 'Miragoâne', capital: 'Miragoâne',
        communes: [
          {
            id: 'com-miragoane', name: 'Miragoâne',
            department: 'Nippes', arrondissement: 'Miragoâne',
            chefLieuDepartement: true, chefLieuArrondissement: true,
            population: '~115 000 hab.',
            description: 'Chef-lieu du département des Nippes, port sur la côte nord de la péninsule méridionale.',
            characteristics: 'Port, lac Miragoâne, commerce, pêche, ancienne exploitation de bauxite.',
            sections: ['Miragoâne-Centre', 'Bord-de-Mer', 'Nan-Sonson', '3ème Section', '4ème Section']
          },
          {
            id: 'com-paillant', name: 'Paillant',
            department: 'Nippes', arrondissement: 'Miragoâne',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~55 000 hab.',
            description: 'Commune dans les montagnes du département des Nippes.',
            characteristics: 'Agriculture de montagne, café, cacao.',
            sections: ['Paillant-Centre', 'Haut-Paillant', '3ème Section']
          },
          {
            id: 'com-petit-trou-nippes', name: 'Petit-Trou-de-Nippes',
            department: 'Nippes', arrondissement: 'Miragoâne',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~45 000 hab.',
            description: 'Commune côtière dans le département des Nippes.',
            characteristics: 'Pêche, plages, agriculture.',
            sections: ['Petit-Trou-Centre', 'Bord-de-Mer', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-baraderes', name: 'Baradères', capital: 'Baradères',
        communes: [
          {
            id: 'com-baraderes', name: 'Baradères',
            department: 'Nippes', arrondissement: 'Baradères',
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~65 000 hab.',
            description: 'Commune côtière sur la baie de Baradères, dans le département des Nippes.',
            characteristics: 'Pêche, plages, baie protégée, agriculture.',
            sections: ['Baradères-Centre', 'Bord-de-Mer', '3ème Section']
          },
          {
            id: 'com-grand-boucan', name: 'Grand-Boucan',
            department: 'Nippes', arrondissement: 'Baradères',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~40 000 hab.',
            description: 'Commune dans l\'arrondissement de Baradères.',
            characteristics: 'Agriculture, forêts, zones de montagne.',
            sections: ['Grand-Boucan-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-petite-riviere-nippes', name: 'Petite-Rivière-de-Nippes',
            department: 'Nippes', arrondissement: 'Baradères',
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~35 000 hab.',
            description: 'Commune dans l\'arrondissement de Baradères.',
            characteristics: 'Agriculture, rivière, zones rurales.',
            sections: ['Petite-Rivière-Nippes-Centre', '2ème Section', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-anse-veau', name: "L'Anse-à-Veau", capital: "Anse-à-Veau",
        communes: [
          {
            id: 'com-anse-veau', name: "Anse-à-Veau",
            department: 'Nippes', arrondissement: "L'Anse-à-Veau",
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~70 000 hab.',
            description: 'Commune côtière dans le département des Nippes, sur le golfe de la Gonâve.',
            characteristics: 'Pêche, commerce local, plages, agriculture.',
            sections: ["Anse-à-Veau-Centre", 'Bord-de-Mer', '3ème Section', '4ème Section']
          },
          {
            id: 'com-arnaud', name: 'Arnaud',
            department: 'Nippes', arrondissement: "L'Anse-à-Veau",
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~30 000 hab.',
            description: 'Commune dans l\'arrondissement de L\'Anse-à-Veau.',
            characteristics: 'Agriculture, zones rurales.',
            sections: ['Arnaud-Centre', '2ème Section', '3ème Section']
          },
          {
            id: 'com-plaisance-sud', name: 'Plaisance-du-Sud',
            department: 'Nippes', arrondissement: "L'Anse-à-Veau",
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~28 000 hab.',
            description: 'Petite commune dans l\'arrondissement de L\'Anse-à-Veau.',
            characteristics: 'Agriculture, élevage, zones côtières.',
            sections: ['Plaisance-du-Sud-Centre', '2ème Section', '3ème Section']
          }
        ]
      },
      {
        id: 'arr-l-asile', name: "L'Asile", capital: "L'Asile",
        communes: [
          {
            id: 'com-l-asile', name: "L'Asile",
            department: 'Nippes', arrondissement: "L'Asile",
            chefLieuDepartement: false, chefLieuArrondissement: true,
            population: '~55 000 hab.',
            description: 'Commune dans l\'arrondissement de L\'Asile, dans les montagnes des Nippes.',
            characteristics: 'Agriculture de montagne, café, cacao, forêts.',
            sections: ["L'Asile-Centre", 'Haut-Asile', '3ème Section']
          },
          {
            id: 'com-fond-des-negres', name: 'Fond-des-Nègres',
            department: 'Nippes', arrondissement: "L'Asile",
            chefLieuDepartement: false, chefLieuArrondissement: false,
            population: '~45 000 hab.',
            description: 'Commune dans le département des Nippes.',
            characteristics: 'Agriculture, élevage.',
            sections: ['Fond-des-Nègres-Centre', '2ème Section', '3ème Section']
          }
        ]
      }
    ]
  }
];
