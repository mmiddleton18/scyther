const BASE = {
  factions: {
    POLANIA: {
      label: 'Polania Republic',
      shortName: 'Polania',
      location: 1,
      className: 'polania',
      boardCombos: [
        {label: 'Industrial', tier: "B"},
        {label: 'Engineering', tier: "C"},
        {label: 'Patriotic', tier: "B"},
        {label: 'Mechanical', tier: "B"},
        {label: 'Agricultural', tier: "B"},
        {label: 'Militant', tier: "A"},
        {label: 'Innovative', tier: "S"},
      ]
    },
    SAXONY: {
      label: 'Saxony Empire',
      shortName: 'Saxony',
      location: 2,
      className: 'saxony',
      boardCombos: [
        {label: 'Industrial', tier: "A"},
        {label: 'Engineering', tier: "F"},
        {label: 'Patriotic', tier: "B"},
        {label: 'Mechanical', tier: "B"},
        {label: 'Agricultural', tier: "D"},
        {label: 'Militant', tier: "B"},
        {label: 'Innovative', tier: "S"},
      ]
    },
    CRIMEA: {
      label: 'Crimean Khanate',
      shortName: 'Crimea',
      location: 3,
      className: 'crimea',
      boardCombos: [
        {label: 'Industrial', tier: "A"},
        {label: 'Engineering', tier: "A"},
        {label: 'Patriotic', tier: "SS"},
        {label: 'Mechanical', tier: "S"},
        {label: 'Agricultural', tier: "A"},
        {label: 'Militant', tier: "SS"},
        {label: 'Innovative', tier: "SS"},
      ]
    },
    RUSVIET: {
      label: 'Rusviet Union',
      shortName: 'Rusviet',
      location: 5,
      className: 'rusviet',
      boardCombos: [
        {label: 'Industrial', tier: "S"},
        {label: 'Engineering', tier: "A"},
        {label: 'Patriotic', tier: "A"},
        {label: 'Mechanical', tier: "S"},
        {label: 'Agricultural', tier: "A"},
        {label: 'Militant', tier: "SS"},
        {label: 'Innovative', tier: "SS"},
      ]
    },
    NORDIC: {
      label: 'Nordic Kingdom',
      shortName: 'Nordic',
      location: 6,
      className: 'nordic',
      boardCombos: [
        {label: 'Industrial', tier: "B"},
        {label: 'Engineering', tier: "B"},
        {label: 'Patriotic', tier: "C"},
        {label: 'Mechanical', tier: "B"},
        {label: 'Agricultural', tier: "C"},
        {label: 'Militant', tier: "C"},
        {label: 'Innovative', tier: "B"},
      ]
    },
  },

  playerBoards: {
    INDUSTRIAL: {label: 'Industrial'},
    ENGINEERING: {label: 'Engineering'},
    PATRIOTIC: {label: 'Patriotic'},
    MECHANICAL: {label: 'Mechanical'},
    AGRICULTURAL: {label: 'Agricultural'},
  },

  buildingBonuses: [
    'Adjacent Tunnels',
    'Adjacent Lakes',
    'Adjacent Encounters',
    'On Tunnels',
    'In a Row',
    'On Farms and Tundras',
  ],
};

const INVADERS_FROM_AFAR = {
  factions: {
    TOGAWA: {
      label: 'Togawa Shogunate',
      shortName: 'Togawa',
      location: 4,
      className: 'togawa',
      boardCombos: [
        {label: 'Industrial', tier: "D"},
        {label: 'Engineering', tier: "C"},
        {label: 'Patriotic', tier: "C"},
        {label: 'Mechanical', tier: "F"},
        {label: 'Agricultural', tier: "B"},
        {label: 'Militant', tier: "C"},
        {label: 'Innovative', tier: "B"},
      ]
    },
    ALBION: {
      label: 'Clan Albion',
      shortName: 'Albion',
      location: 7,
      className: 'albion',
      boardCombos: [
        {label: 'Industrial', tier: "F"},
        {label: 'Engineering', tier: "D"},
        {label: 'Patriotic', tier: "C"},
        {label: 'Mechanical', tier: "D"},
        {label: 'Agricultural', tier: "C"},
        {label: 'Militant', tier: "B"},
        {label: 'Innovative', tier: "C"},
      ]
    },
  },

  playerBoards: {
    MILITANT: {label: 'Militant'},
    INNOVATIVE: {label: 'Innovative'},
  },
};

const WIND_GAMBIT = {
  resolutions: [
    'Spoils of War',
    'Land Rush',
    'Deja Vu',
    'Factory Explosion',
    'Doomsday Clock',
    'Mission Possible',
    'King of the Hill',
    'Backup Plan',
  ],

  airshipAbilities: {
    aggressive: [
      {label: 'Bombard', supportedByAutoma: true},
      {label: 'Bounty', supportedByAutoma: true},
      {label: 'Siege Engine', supportedByAutoma: true},
      {label: 'Distract', supportedByAutoma: true},
      {label: 'Espionage', supportedByAutoma: true},
      {label: 'Blitzkrieg', supportedByAutoma: true},
      {label: 'Toll', supportedByAutoma: false},
      {label: 'War Correspondent', supportedByAutoma: true},
    ],

    passive: [
      'Ferry',
      'Boost',
      'Drill',
      'Hero',
      'Safe Haven',
      'Reap',
      'Craft',
      'Negotiate',
    ],
  },
};

const RISE_OF_FENRIS = {
  mechMods: {
    generic: [
      'Armor',
      'Entrenched',
      'Feint',
      'Foothold',
      'Pontoons',
      'Regroup',
      'Reinforce',
      'Stealth',
      'Tactics',
    ],
    factionSpecific: {
      Artillery: BASE.factions.NORDIC,
      Camaraderie: BASE.factions.POLANIA,
      Scout: BASE.factions.CRIMEA,
      Suiton: INVADERS_FROM_AFAR.factions.TOGAWA,
      Sword: INVADERS_FROM_AFAR.factions.ALBION,
      Township: BASE.factions.RUSVIET,
      Underpass: BASE.factions.SAXONY,
    },
  },

  infrastructureMods: [
    {label: 'Assembly Line', supportedByAutoma: true},
    {label: 'Automachines', supportedByAutoma: true},
    {label: 'Cavalry', supportedByAutoma: true},
    {label: 'Construction', supportedByAutoma: true},
    {label: 'Machinery', supportedByAutoma: true},
    {label: 'Propaganda', supportedByAutoma: true},
    {label: 'Recruitment Office', supportedByAutoma: true},
    {label: 'Spy', supportedByAutoma: false},
  ],

  triumphTracks: {
    REGULAR: {
      name: 'Regular Track',
      className: 'regularTrack',
      layout: [
        'Upgrades',
        'Mechs',
        'Structures',
        'Recruits',
        'Workers',
        'Objective',
        'Combat Victory',
        'Combat Victory',
        'Popularity',
        'Power',
      ],
    },
    WAR: {
      name: 'War Track',
      className: 'warTrack',
      layout: [
        // Page 16
        'Upgrades/Structures',
        'Mechs',
        'Recruits',
        'Objective',
        'Combat Victory',
        'Combat Victory',
        'Combat Victory',
        'Combat Victory',
        'Power',
        'Combat Cards',
      ],
    },
    PEACE: {
      name: 'Peace Track',
      className: 'peaceTrack',
      layout: [
        // Page 18
        'Upgrades',
        'Structures',
        'Mechs/Recruits',
        'Workers',
        'Objective',
        'Objective',
        'Popularity',
        'Encounters',
        'Factory',
        'Resources',
      ],
    },
    RANDOM: {
      tiles: [
        // Dont sort these, the order is important for display
        'Upgrades',
        'Mechs',
        'Structures',
        'Recruits',
        'Workers',
        'Objective',
        'Combat Victory',
        'Combat Victory',
        'Combat Victory',
        'Combat Victory',
        'Popularity',
        'Power',
        'Combat Cards',
        'Encounters',
        'Factory',
        'Resources',
      ],
    },
  },

  factions: {
    VESNA: {
      label: 'Vesna',
      shortName: 'Vesna',
      className: 'vesna',
      mechAbilities: [
        'Artillery',
        'Camaraderie',
        'Disarm',
        'Feint',
        'Regroup',
        'Ronin',
        'Scout',
        'Seaworthy',
        'Shield',
        'Stealth',
        'Submerge',
        'Suiton',
        'Sword',
        'Tactics',
        'Township',
        'Underpass',
        'Wayfare',
        "People's Army",
      ],
    },
    FENRIS: {
      label: 'Fenris',
      shortName: 'Fenris',
      className: 'fenris',
    },
  },
};

BAD_COMBOS = [
  {faction: BASE.factions.RUSVIET, playerBoard: BASE.playerBoards.INDUSTRIAL},
  {faction: BASE.factions.CRIMEA, playerBoard: BASE.playerBoards.PATRIOTIC},
];
