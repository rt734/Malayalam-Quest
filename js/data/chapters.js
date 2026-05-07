export const chapters = [
  {
    id: 1,
    title: 'The Vowel Kingdom',
    icon: '⚔️',
    themeColor: '#4a90d9',
    lore: 'In the beginning there were vowels — the breath of Malayalam. Master them and the kingdom opens.',
    badge: { id: 'vowel-master', name: 'Vowel Master', icon: '🏆' },
    lessons: [
      {
        id: 1, title: 'First Vowels',
        letters: [
          { char: 'അ', romanized: 'a',  ipa: '/a/',   audio: 'audio/vowels/a.mp3',   meaning: 'Short a — like "fun"' },
          { char: 'ആ', romanized: 'aa', ipa: '/aː/',  audio: 'audio/vowels/aa.mp3',  meaning: 'Long aa — like "father"' },
          { char: 'ഇ', romanized: 'i',  ipa: '/i/',   audio: 'audio/vowels/i.mp3',   meaning: 'Short i — like "bit"' },
          { char: 'ഈ', romanized: 'ii', ipa: '/iː/',  audio: 'audio/vowels/ii.mp3',  meaning: 'Long ii — like "feet"' },
        ]
      },
      {
        id: 2, title: 'More Vowels',
        letters: [
          { char: 'ഉ', romanized: 'u',  ipa: '/u/',   audio: 'audio/vowels/u.mp3',   meaning: 'Short u — like "put"' },
          { char: 'ഊ', romanized: 'uu', ipa: '/uː/',  audio: 'audio/vowels/uu.mp3',  meaning: 'Long uu — like "food"' },
          { char: 'എ', romanized: 'e',  ipa: '/e/',   audio: 'audio/vowels/e.mp3',   meaning: 'Short e — like "bed"' },
          { char: 'ഏ', romanized: 'ee', ipa: '/eː/',  audio: 'audio/vowels/ee.mp3',  meaning: 'Long ee — like "day"' },
        ]
      },
      {
        id: 3, title: 'Final Vowels',
        letters: [
          { char: 'ഐ', romanized: 'ai', ipa: '/ai/',  audio: 'audio/vowels/ai.mp3',  meaning: 'Diphthong — like "eye"' },
          { char: 'ഒ', romanized: 'o',  ipa: '/o/',   audio: 'audio/vowels/o.mp3',   meaning: 'Short o — like "go"' },
          { char: 'ഓ', romanized: 'oo', ipa: '/oː/',  audio: 'audio/vowels/oo.mp3',  meaning: 'Long oo — like "door"' },
          { char: 'ഔ', romanized: 'au', ipa: '/au/',  audio: 'audio/vowels/au.mp3',  meaning: 'Diphthong — like "out"' },
          { char: 'ം', romanized: 'm',  ipa: '/m/',   audio: 'audio/vowels/am.mp3',  meaning: 'Anusvara — nasal sound' },
        ]
      },
    ]
  },
  {
    id: 2,
    title: 'The Consonant Forest I',
    icon: '🌿',
    themeColor: '#5ba85a',
    lore: 'Deep in the forest grow the first consonants — grouped like trees of the same kind.',
    badge: { id: 'forest-scout', name: 'Forest Scout', icon: '🌿' },
    lessons: [
      {
        id: 1, title: 'Ka Group',
        letters: [
          { char: 'ക', romanized: 'ka',  ipa: '/ka/',  audio: 'audio/consonants/ka.mp3',  meaning: 'Voiceless velar stop' },
          { char: 'ഖ', romanized: 'kha', ipa: '/kʰa/', audio: 'audio/consonants/kha.mp3', meaning: 'Aspirated ka' },
          { char: 'ഗ', romanized: 'ga',  ipa: '/ɡa/',  audio: 'audio/consonants/ga.mp3',  meaning: 'Voiced velar stop' },
          { char: 'ഘ', romanized: 'gha', ipa: '/ɡʰa/', audio: 'audio/consonants/gha.mp3', meaning: 'Aspirated ga' },
          { char: 'ങ', romanized: 'nga', ipa: '/ŋa/',  audio: 'audio/consonants/nga.mp3', meaning: 'Velar nasal' },
        ]
      },
      {
        id: 2, title: 'Cha Group',
        letters: [
          { char: 'ച', romanized: 'cha',  ipa: '/tʃa/',  audio: 'audio/consonants/cha.mp3',  meaning: 'Palatal affricate' },
          { char: 'ഛ', romanized: 'chha', ipa: '/tʃʰa/', audio: 'audio/consonants/chha.mp3', meaning: 'Aspirated cha' },
          { char: 'ജ', romanized: 'ja',   ipa: '/dʒa/',  audio: 'audio/consonants/ja.mp3',   meaning: 'Voiced palatal' },
          { char: 'ഝ', romanized: 'jha',  ipa: '/dʒʰa/', audio: 'audio/consonants/jha.mp3',  meaning: 'Aspirated ja' },
          { char: 'ഞ', romanized: 'nya',  ipa: '/ɲa/',   audio: 'audio/consonants/nya.mp3',  meaning: 'Palatal nasal' },
        ]
      },
      {
        id: 3, title: 'Retroflex Ta Group',
        letters: [
          { char: 'ട', romanized: 'ta',  ipa: '/ʈa/',  audio: 'audio/consonants/rta.mp3',  meaning: 'Retroflex stop' },
          { char: 'ഠ', romanized: 'tha', ipa: '/ʈʰa/', audio: 'audio/consonants/rtha.mp3', meaning: 'Aspirated retroflex' },
          { char: 'ഡ', romanized: 'da',  ipa: '/ɖa/',  audio: 'audio/consonants/rda.mp3',  meaning: 'Voiced retroflex' },
          { char: 'ഢ', romanized: 'dha', ipa: '/ɖʰa/', audio: 'audio/consonants/rdha.mp3', meaning: 'Aspirated retroflex d' },
          { char: 'ണ', romanized: 'na',  ipa: '/ɳa/',  audio: 'audio/consonants/rna.mp3',  meaning: 'Retroflex nasal' },
        ]
      },
    ]
  },
  {
    id: 3,
    title: 'The Consonant Cave II',
    icon: '🔮',
    themeColor: '#8e6bbf',
    lore: 'The cave holds the remaining consonants — dentals, labials, and the sonorants that sing.',
    badge: { id: 'cave-explorer', name: 'Cave Explorer', icon: '🔮' },
    lessons: [
      {
        id: 1, title: 'Dental Ta Group',
        letters: [
          { char: 'ത', romanized: 'tha',  ipa: '/t̪a/',  audio: 'audio/consonants/tha.mp3',  meaning: 'Dental t (soft)' },
          { char: 'ഥ', romanized: 'thha', ipa: '/t̪ʰa/', audio: 'audio/consonants/thha.mp3', meaning: 'Aspirated dental t' },
          { char: 'ദ', romanized: 'dha',  ipa: '/d̪a/',  audio: 'audio/consonants/dha.mp3',  meaning: 'Dental d' },
          { char: 'ധ', romanized: 'dhha', ipa: '/d̪ʰa/', audio: 'audio/consonants/dhha.mp3', meaning: 'Aspirated dental d' },
          { char: 'ന', romanized: 'na',   ipa: '/n̪a/',  audio: 'audio/consonants/na.mp3',   meaning: 'Dental nasal' },
        ]
      },
      {
        id: 2, title: 'Pa Group',
        letters: [
          { char: 'പ', romanized: 'pa',  ipa: '/pa/',  audio: 'audio/consonants/pa.mp3',  meaning: 'Labial stop' },
          { char: 'ഫ', romanized: 'pha', ipa: '/pʰa/', audio: 'audio/consonants/pha.mp3', meaning: 'Aspirated pa' },
          { char: 'ബ', romanized: 'ba',  ipa: '/ba/',  audio: 'audio/consonants/ba.mp3',  meaning: 'Voiced labial' },
          { char: 'ഭ', romanized: 'bha', ipa: '/bʰa/', audio: 'audio/consonants/bha.mp3', meaning: 'Aspirated ba' },
          { char: 'മ', romanized: 'ma',  ipa: '/ma/',  audio: 'audio/consonants/ma.mp3',  meaning: 'Labial nasal' },
        ]
      },
      {
        id: 3, title: 'Sonorants & Sibilants',
        letters: [
          { char: 'യ', romanized: 'ya',  ipa: '/ja/',  audio: 'audio/consonants/ya.mp3',   meaning: 'Palatal approximant' },
          { char: 'ര', romanized: 'ra',  ipa: '/ra/',  audio: 'audio/consonants/ra.mp3',   meaning: 'Trill r' },
          { char: 'ല', romanized: 'la',  ipa: '/la/',  audio: 'audio/consonants/la.mp3',   meaning: 'Lateral l' },
          { char: 'വ', romanized: 'va',  ipa: '/ʋa/',  audio: 'audio/consonants/va.mp3',   meaning: 'Labiodental v' },
          { char: 'ശ', romanized: 'sha', ipa: '/ɕa/',  audio: 'audio/consonants/sha.mp3',  meaning: 'Palatal sibilant' },
          { char: 'ഷ', romanized: 'sha', ipa: '/ʂa/',  audio: 'audio/consonants/rsha.mp3', meaning: 'Retroflex sibilant' },
          { char: 'സ', romanized: 'sa',  ipa: '/sa/',  audio: 'audio/consonants/sa.mp3',   meaning: 'Dental sibilant' },
          { char: 'ഹ', romanized: 'ha',  ipa: '/ha/',  audio: 'audio/consonants/ha.mp3',   meaning: 'Glottal h' },
          { char: 'ള', romanized: 'la',  ipa: '/ɭa/',  audio: 'audio/consonants/lla.mp3',  meaning: 'Retroflex lateral' },
          { char: 'ഴ', romanized: 'zha', ipa: '/ɻa/',  audio: 'audio/consonants/zha.mp3',  meaning: 'Unique Malayalam zh' },
          { char: 'റ', romanized: 'ra',  ipa: '/ra/',  audio: 'audio/consonants/rra.mp3',  meaning: 'Tapped r' },
        ]
      },
    ]
  },
  {
    id: 4,
    title: 'The Matra Citadel',
    icon: '🏰',
    themeColor: '#c0773a',
    lore: 'Vowel signs attach to consonants like banners to a fortress wall. Learn them and words come alive.',
    badge: { id: 'matra-keeper', name: 'Matra Keeper', icon: '🏰' },
    lessons: [
      {
        id: 1, title: 'Short Vowel Signs',
        letters: [
          { char: 'കാ', romanized: 'kaa', ipa: '/kaː/', audio: 'audio/matras/kaa.mp3', meaning: 'ക + ാ (aa sign)' },
          { char: 'കി', romanized: 'ki',  ipa: '/ki/',  audio: 'audio/matras/ki.mp3',  meaning: 'ക + ി (i sign)' },
          { char: 'കീ', romanized: 'kii', ipa: '/kiː/', audio: 'audio/matras/kii.mp3', meaning: 'ക + ീ (ii sign)' },
          { char: 'കു', romanized: 'ku',  ipa: '/ku/',  audio: 'audio/matras/ku.mp3',  meaning: 'ക + ു (u sign)' },
          { char: 'കൂ', romanized: 'kuu', ipa: '/kuː/', audio: 'audio/matras/kuu.mp3', meaning: 'ക + ൂ (uu sign)' },
        ]
      },
      {
        id: 2, title: 'Long Vowel Signs',
        letters: [
          { char: 'കെ', romanized: 'ke',  ipa: '/ke/',  audio: 'audio/matras/ke.mp3',  meaning: 'ക + െ (e sign)' },
          { char: 'കേ', romanized: 'kee', ipa: '/keː/', audio: 'audio/matras/kee.mp3', meaning: 'ക + േ (ee sign)' },
          { char: 'കൈ', romanized: 'kai', ipa: '/kai/', audio: 'audio/matras/kai.mp3', meaning: 'ക + ൈ (ai sign)' },
          { char: 'കൊ', romanized: 'ko',  ipa: '/ko/',  audio: 'audio/matras/ko.mp3',  meaning: 'ക + ൊ (o sign)' },
          { char: 'കോ', romanized: 'koo', ipa: '/koː/', audio: 'audio/matras/koo.mp3', meaning: 'ക + ോ (oo sign)' },
          { char: 'കൌ', romanized: 'kau', ipa: '/kau/', audio: 'audio/matras/kau.mp3', meaning: 'ക + ൌ (au sign)' },
        ]
      },
    ]
  },
  {
    id: 5,
    title: 'The Chillu Chamber',
    icon: '👑',
    themeColor: '#c94040',
    lore: 'The Chillu letters are pure consonants — they stand alone, silent at the end of words.',
    badge: { id: 'chillu-champion', name: 'Chillu Champion', icon: '👑' },
    lessons: [
      {
        id: 1, title: 'Chillu Letters',
        letters: [
          { char: 'ൻ', romanized: 'n',  ipa: '/n/',  audio: 'audio/matras/chillu-n.mp3',  meaning: 'Chillu n (final nasal)' },
          { char: 'ർ', romanized: 'r',  ipa: '/r/',  audio: 'audio/matras/chillu-r.mp3',  meaning: 'Chillu r (final trill)' },
          { char: 'ൽ', romanized: 'l',  ipa: '/l/',  audio: 'audio/matras/chillu-l.mp3',  meaning: 'Chillu l (final lateral)' },
          { char: 'ൾ', romanized: 'll', ipa: '/ɭ/',  audio: 'audio/matras/chillu-ll.mp3', meaning: 'Chillu ll (retroflex)' },
          { char: 'ൺ', romanized: 'n',  ipa: '/ɳ/',  audio: 'audio/matras/chillu-nn.mp3', meaning: 'Chillu nn (retroflex nasal)' },
          { char: 'ഃ', romanized: 'h',  ipa: '/h/',  audio: 'audio/matras/visarga.mp3',   meaning: 'Visarga (aspirate)' },
        ]
      },
    ]
  },
  {
    id: 6,
    title: 'The Number Shore',
    icon: '🌊',
    themeColor: '#2d7d9a',
    lore: 'The shore counts its waves in Malayalam numerals. Learn to count and name the colours of the sea.',
    badge: { id: 'shore-walker', name: 'Shore Walker', icon: '🌊' },
    lessons: [
      {
        id: 1, title: 'Numerals 0–9',
        letters: [
          { char: '൦', romanized: 'poojyam',  ipa: '', audio: 'audio/words/zero.mp3',   meaning: 'Zero (0)' },
          { char: '൧', romanized: 'onnu',     ipa: '', audio: 'audio/words/one.mp3',    meaning: 'One (1)' },
          { char: '൨', romanized: 'randu',    ipa: '', audio: 'audio/words/two.mp3',    meaning: 'Two (2)' },
          { char: '൩', romanized: 'moonu',    ipa: '', audio: 'audio/words/three.mp3',  meaning: 'Three (3)' },
          { char: '൪', romanized: 'naalu',    ipa: '', audio: 'audio/words/four.mp3',   meaning: 'Four (4)' },
          { char: '൫', romanized: 'anju',     ipa: '', audio: 'audio/words/five.mp3',   meaning: 'Five (5)' },
          { char: '൬', romanized: 'aaru',     ipa: '', audio: 'audio/words/six.mp3',    meaning: 'Six (6)' },
          { char: '൭', romanized: 'ezhu',     ipa: '', audio: 'audio/words/seven.mp3',  meaning: 'Seven (7)' },
          { char: '൮', romanized: 'ettu',     ipa: '', audio: 'audio/words/eight.mp3',  meaning: 'Eight (8)' },
          { char: '൯', romanized: 'ombathu',  ipa: '', audio: 'audio/words/nine.mp3',   meaning: 'Nine (9)' },
        ]
      },
      {
        id: 2, title: 'Colours',
        letters: [
          { char: 'ചുവപ്പ്', romanized: 'chuvapp', ipa: '', audio: 'audio/words/red.mp3',    meaning: 'Red' },
          { char: 'നീല',     romanized: 'neela',   ipa: '', audio: 'audio/words/blue.mp3',   meaning: 'Blue' },
          { char: 'പച്ച',    romanized: 'pacha',   ipa: '', audio: 'audio/words/green.mp3',  meaning: 'Green' },
          { char: 'മഞ്ഞ',    romanized: 'manja',   ipa: '', audio: 'audio/words/yellow.mp3', meaning: 'Yellow' },
          { char: 'വെള്ള',   romanized: 'vella',   ipa: '', audio: 'audio/words/white.mp3',  meaning: 'White' },
          { char: 'കറുപ്പ്', romanized: 'karupp',  ipa: '', audio: 'audio/words/black.mp3',  meaning: 'Black' },
        ]
      },
    ]
  },
  {
    id: 7,
    title: 'The Greeting Grove',
    icon: '🌾',
    themeColor: '#6b6b3a',
    lore: 'In the grove, travellers greet each other. Learn the words that open every door.',
    badge: { id: 'grove-greeter', name: 'Grove Greeter', icon: '🌾' },
    lessons: [
      {
        id: 1, title: 'Greetings',
        letters: [
          { char: 'നമസ്കാരം',   romanized: 'namaskaram',  ipa: '', audio: 'audio/words/namaskaram.mp3',  meaning: 'Hello / Greetings' },
          { char: 'സുഖമാണോ',   romanized: 'sukhamaano',  ipa: '', audio: 'audio/words/sukhamaano.mp3',  meaning: 'Are you well?' },
          { char: 'സുഖമാണ്',   romanized: 'sukhamaan',   ipa: '', audio: 'audio/words/sukhamaan.mp3',   meaning: 'I am well' },
          { char: 'നന്ദി',     romanized: 'nandi',        ipa: '', audio: 'audio/words/nandi.mp3',       meaning: 'Thank you' },
          { char: 'ക്ഷമിക്കൂ', romanized: 'kshamikkoo',  ipa: '', audio: 'audio/words/kshamikkoo.mp3',  meaning: 'Sorry / Excuse me' },
        ]
      },
      {
        id: 2, title: 'Family Words',
        letters: [
          { char: 'അമ്മ',     romanized: 'amma',    ipa: '', audio: 'audio/words/amma.mp3',    meaning: 'Mother' },
          { char: 'അച്ഛൻ',   romanized: 'acchan',  ipa: '', audio: 'audio/words/acchan.mp3',  meaning: 'Father' },
          { char: 'ചേട്ടൻ',  romanized: 'chettan', ipa: '', audio: 'audio/words/chettan.mp3', meaning: 'Elder brother' },
          { char: 'ചേച്ചി',  romanized: 'chechi',  ipa: '', audio: 'audio/words/chechi.mp3',  meaning: 'Elder sister' },
          { char: 'കൂട്ടുകാരൻ', romanized: 'koottukaran', ipa: '', audio: 'audio/words/koottukaran.mp3', meaning: 'Friend (m)' },
        ]
      },
    ]
  },
  {
    id: 8,
    title: 'The Sentence Garden',
    icon: '🌸',
    themeColor: '#7a3a6b',
    lore: 'Words bloom into sentences in the garden. Malayalam is Subject-Object-Verb — the verb comes last.',
    badge: { id: 'garden-speaker', name: 'Garden Speaker', icon: '🌸' },
    lessons: [
      {
        id: 1, title: '"This is a ___"',
        letters: [
          { char: 'ഇത് ഒരു പുസ്തകം ആണ്',  romanized: 'ithu oru pusthakam aanu', ipa: '', audio: 'audio/words/this-is-a-book.mp3',  meaning: 'This is a book' },
          { char: 'ഇത് ഒരു വീട് ആണ്',     romanized: 'ithu oru veedu aanu',     ipa: '', audio: 'audio/words/this-is-a-house.mp3', meaning: 'This is a house' },
          { char: 'ഇത് ഒരു മരം ആണ്',     romanized: 'ithu oru maram aanu',     ipa: '', audio: 'audio/words/this-is-a-tree.mp3',  meaning: 'This is a tree' },
        ]
      },
      {
        id: 2, title: '"I am ___"',
        letters: [
          { char: 'ഞാൻ ___ ആണ്',          romanized: 'njaan ___ aanu',           ipa: '', audio: 'audio/words/i-am.mp3',        meaning: 'I am ___' },
          { char: 'ഞാൻ ഇവിടെ ആണ്',        romanized: 'njaan ivide aanu',         ipa: '', audio: 'audio/words/i-am-here.mp3',   meaning: 'I am here' },
          { char: 'ഞാൻ ഭക്ഷണം കഴിക്കുന്നു', romanized: 'njaan bhakshanam kazhikkunnu', ipa: '', audio: 'audio/words/i-am-eating.mp3', meaning: 'I am eating' },
        ]
      },
    ]
  },
  {
    id: 9,
    title: 'The Grammar Summit',
    icon: '🏔️',
    themeColor: '#3a6b3a',
    lore: 'At the summit, the structure of Malayalam reveals itself. Tense and postpositions complete your tools.',
    badge: { id: 'summit-climber', name: 'Summit Climber', icon: '🏔️' },
    lessons: [
      {
        id: 1, title: 'Present & Past Tense',
        letters: [
          { char: 'ഞാൻ കഴിക്കുന്നു', romanized: 'njaan kazhikkunnu', ipa: '', audio: 'audio/words/i-eat-present.mp3', meaning: 'I eat (present)' },
          { char: 'ഞാൻ കഴിച്ചു',    romanized: 'njaan kazhichu',    ipa: '', audio: 'audio/words/i-ate-past.mp3',    meaning: 'I ate (past)' },
          { char: 'ഞാൻ കഴിക്കും',   romanized: 'njaan kazhikkum',   ipa: '', audio: 'audio/words/i-will-eat.mp3',   meaning: 'I will eat (future)' },
        ]
      },
      {
        id: 2, title: 'Postpositions',
        letters: [
          { char: 'വീടിൽ',     romanized: 'veedil',    ipa: '', audio: 'audio/words/in-the-house.mp3',  meaning: 'In the house (ൽ = in)' },
          { char: 'മേശയ്ക്ക്', romanized: 'meshaykku', ipa: '', audio: 'audio/words/to-the-table.mp3', meaning: 'To the table (ക്ക് = to/for)' },
          { char: 'ആണ്',      romanized: 'aanu',       ipa: '', audio: 'audio/words/is.mp3',            meaning: '"Is" / to be' },
        ]
      },
    ]
  },
  {
    id: 10,
    title: 'The Reading Citadel',
    icon: '🔥',
    themeColor: '#c94040',
    lore: 'The final citadel: real Malayalam passages await. Read them aloud, understand them, become a Language Champion.',
    badge: { id: 'language-champion', name: 'Language Champion', icon: '🔥' },
    lessons: [
      {
        id: 1, title: 'Short Passage — Introduction',
        letters: [
          { char: 'എന്റെ പേര് രാജ് ആണ്',    romanized: 'ente peru raaj aanu',        ipa: '', audio: 'audio/words/my-name-is.mp3',   meaning: 'My name is Raj' },
          { char: 'ഞാൻ കേരളത്തിൽ നിന്നാണ്', romanized: 'njaan keralathil ninnaanu', ipa: '', audio: 'audio/words/i-am-from.mp3',   meaning: 'I am from Kerala' },
          { char: 'മലയാളം പഠിക്കുന്നു',      romanized: 'malayalam padikkunnu',       ipa: '', audio: 'audio/words/learning-ml.mp3', meaning: 'Learning Malayalam' },
        ]
      },
      {
        id: 2, title: 'Final Review',
        letters: [
          { char: 'അ',         romanized: 'a',          ipa: '/a/',  audio: 'audio/vowels/a.mp3',          meaning: 'First vowel' },
          { char: 'ക',         romanized: 'ka',         ipa: '/ka/', audio: 'audio/consonants/ka.mp3',     meaning: 'First consonant' },
          { char: 'കാ',        romanized: 'kaa',        ipa: '/kaː/',audio: 'audio/matras/kaa.mp3',        meaning: 'Consonant + matra' },
          { char: 'നമസ്കാരം', romanized: 'namaskaram', ipa: '',     audio: 'audio/words/namaskaram.mp3',  meaning: 'Hello' },
        ]
      },
    ]
  },
];
