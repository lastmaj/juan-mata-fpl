const leagues = [
  {
    name: '5 Frich',
    ids: [2178291, 2403316, 1082636, 1340762, 1637361],
  },
  { name: 'Arabesque', ids: [1906393, 61646, 80854, 1336536, 48756] },
  {
    name: 'Ba3bech',
    ids: [2622949, 1638142, 1182791, 77466, 133905],
  },
  {
    name: 'Bahlous team',
    ids: [2216779, 2218178, 426253, 2217031, 787569],
  },
  {
    name: 'Beb sui9a FPL',
    ids: [3056463, 3312360, 943629, 6453021, 2289689],
  },
  {
    name: 'Belote&Rebelote',
    ids: [432952, 2204611, 1763888, 2017875, 177666],
  },
  {
    name: 'Bianco Rosso',
    ids: [1213646, 93309, 469619, 1919172, 2480507],
  },
  {
    name: 'Bringa',
    ids: [2680808, 2079530, 1772286, 2108637, 1603621],
  },
  {
    name: 'Brunek_De_Bruyne',
    ids: [702119, 41206, 1630903, 668005, 146651],
  },
  { name: 'Club 97', ids: [781534, 82434, 364428, 980604, 2202880] },
  {
    name: 'Cote el macanicien 🛒🛒',
    ids: [2427051, 7168750, 3070720, 603435, 1943123],
  },
  {
    name: 'Cuba 🇨🇺',
    ids: [960568, 2283275, 1155251, 765818, 2211543],
  },
  {
    name: 'Death team',
    ids: [1655927, 214627, 249857, 1544149, 711436],
  },
  {
    name: 'DJERBA FC',
    ids: [107236, 117785, 2621861, 114877, 103987],
  },
  {
    name: 'El bazzou3a squad',
    ids: [344896, 52290, 1376940, 79469, 1366521],
  },
  {
    name: 'EL MANHÜIEN CUP',
    ids: [790037, 466377, 441013, 442414, 441340],
  },
  {
    name: 'Fallega FC',
    ids: [355283, 188476, 269145, 337776, 2178051],
  },
  {
    name: 'Fanatics 03',
    ids: [389861, 129113, 2267586, 386591, 894350],
  },
  {
    name: 'Fantastic Five',
    ids: [1335918, 1785380, 343570, 454066, 3002430],
  },
  {
    name: 'Fantasytic 4',
    ids: [3120493, 74257, 150403, 138250, 260383],
  },
  { name: 'FC CHRAB', ids: [2870870, 72964, 206891, 50438, 166290] },
  { name: 'FC Enit', ids: [684504, 867978, 35795, 150613, 1765066] },
  {
    name: "FC M'saken",
    ids: [409097, 220201, 2528664, 461755, 2529203],
  },
  {
    name: 'Five stars',
    ids: [256744, 534117, 262131, 1359831, 657217],
  },
  {
    name: 'Glory FC',
    ids: [83493, 126650, 5916833, 2532034, 2277108],
  },
  {
    name: 'Karmousa FC',
    ids: [1778790, 1290151, 382552, 503427, 1926192],
  },
  {
    name: 'Les cinq pitié',
    ids: [160369, 832090, 115245, 2522066, 713442],
  },
  {
    name: 'Los Pollos Hermanos',
    ids: [1932793, 151113, 2903734, 541868, 1158972],
  },
  {
    name: 'maamriya',
    ids: [2415484, 2254579, 1047144, 2308613, 2344652],
  },
  {
    name: 'Family League "Mabrouka 2023"',
    ids: [909277, 78835, 135622, 75666, 816066],
  },
  {
    name: 'manech mraw7in',
    ids: [348616, 1614843, 4002080, 2482320, 683979],
  },
  {
    name: 'Miladi cousin',
    ids: [3992501, 1256507, 4281038, 1132250, 350560],
  },
  {
    name: 'PL fantasy ras zebi',
    ids: [3772470, 750949, 6609070, 364022, 37169],
  },
  {
    name: 'Regency fc',
    ids: [117347, 435572, 739172, 157836, 432528],
  },
  { name: 'Sahyt', ids: [4265520, 475239, 35839, 1203788, 747215] },
  {
    name: 'Sou7ab maguire',
    ids: [172240, 2280437, 1787533, 119021, 911368],
  },
  {
    name: 'Stranger mings',
    ids: [2253368, 119036, 34106, 1661091, 65309],
  },
  {
    name: 'Suda amaricana',
    ids: [2826935, 2962197, 3077882, 3083290, 2848773],
  },
  {
    name: 'Tbafteek Team',
    ids: [1476778, 2106530, 1365367, 1312020, 1714024],
  },
  {
    name: 'Team 7000 ⛔',
    ids: [1953933, 730048, 35122, 1372239, 1202257],
  },
  {
    name: 'TeamFC',
    ids: [5453658, 567030, 614694, 2763150, 4291349],
  },
  {
    name: 'THE GOATS',
    ids: [780904, 201882, 60308, 713840, 1858575],
  },
  {
    name: 'TheKadries',
    ids: [2329591, 3197710, 3195476, 3152553, 1290724],
  },
  {
    name: 'TOXIC MAFIA',
    ids: [2531219, 2050404, 256994, 458705, 287429],
  },
  {
    name: 'Tunisiano pl',
    ids: [2347918, 450362, 1093614, 15767, 2014062],
  },
  {
    name: 'Vegas msaken',
    ids: [69567, 2783555, 6691132, 3492134, 368078],
  },
  {
    name: 'VENI VIDI VICI',
    ids: [14954, 789535, 2286114, 2370032, 2291098],
  },
  { name: 'VIKINGS', ids: [962728, 1648975, 664857, 26747, 40133] },
  {
    name: 'Warriors',
    ids: [6795310, 4718658, 106152, 293751, 62506],
  },
  {
    name: 'Zbandaq team',
    ids: [1424911, 2423696, 70395, 2425662, 378065],
  },
  {
    name: 'اتحاد الكرم',
    ids: [3821164, 3792078, 3785541, 780753, 1564462],
  },
  {
    name: '🪵الخشبات الخمسة',
    ids: [1560281, 2730110, 2092126, 2696575, 271068],
  },
  {
    name: 'الزبراطة',
    ids: [3224004, 5854619, 3099456, 1563695, 129100],
  },
  {
    name: 'الصعاليك',
    ids: [1547247, 7070295, 218584, 103455, 1513016],
  },
  {
    name: 'العوق للفنتازيات😂',
    ids: [1974910, 322648, 2218212, 470040, 2612824],
  },
  {
    name: 'المدربين الخمسة',
    ids: [2633474, 2634213, 2633641, 2635598, 385199],
  },
  {
    name: 'المستقبل الرياضي للبطالة',
    ids: [84186, 145384, 2793309, 753274, 257434],
  },
  {
    name: 'حومة الرعب',
    ids: [2282975, 222065, 114958, 457884, 2033494],
  },
  {
    name: 'خربڨة عربي',
    ids: [2572829, 3015656, 2295572, 137382, 5107248],
  },
  {
    name: 'دوري النخبة',
    ids: [921894, 1689901, 2941209, 899147, 324855],
  },
  {
    name: 'زخرفونة city',
    ids: [1278790, 21118, 2002837, 786602, 401030],
  },
  {
    name: 'شرمفشلاوخ يونايتد',
    ids: [2285026, 21892, 260464, 33084, 619014],
  },
  {
    name: 'شنقومة',
    ids: [2398269, 1155292, 1450976, 104913, 440679],
  },
  {
    name: 'صحيت صحيت',
    ids: [2744339, 924997, 2708868, 2728558, 2736258],
  },
  {
    name: 'صقور الجديان',
    ids: [2299672, 2422897, 2556399, 457884, 2557183],
  },
  {
    name: 'عشوائيات 🔥',
    ids: [2228438, 1811097, 1343239, 726720, 488147],
  },
  {
    name: 'ڨلوب الصنوبر',
    ids: [47274, 1426342, 621883, 1871577, 441644],
  },
  {
    name: 'قوافل قفصة غول افريقيا',
    ids: [785973, 1948116, 2027162, 1358168, 170236],
  },
  { name: 'كورة و حجر', ids: [565171, 4766, 15723, 1974280, 500475] },
  {
    name: 'ميكانسيون لكن مثقفون',
    ids: [4746410, 438112, 2660259, 474943, 130015],
  },
  {
    name: 'وخر راهي بالزفارة',
    ids: [2634155, 2468707, 3132877, 3135842, 3139208],
  },
  {
    name: 'وذارفة يا تريڤيل',
    ids: [63968, 1093181, 141309, 507826, 169723],
  },
  {
    name: 'يا نورة هات الكوموند',
    ids: [309452, 173564, 2434260, 56143, 503463],
  },
  {
    name: 'Mjarma',
    ids: [1198664, 925572, 416985, 1986966, 134443],
  },
]

module.exports = leagues
