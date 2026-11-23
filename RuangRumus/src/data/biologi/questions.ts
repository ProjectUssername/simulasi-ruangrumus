import type { Question, Level } from '../../lib/types'

function pg(
  id: number,
  topic: number,
  level: Level,
  prompt: string,
  options: string[],
  key: number,
  solution: string[],
  svgDiagram?: string,
): Question {
  return { id, topic, type: 'pg', level, prompt, options, key, solution, svgDiagram }
}

function esai(
  id: number,
  topic: number,
  level: Level,
  prompt: string,
  model: string,
  solution: string[],
  rubric: string[],
): Question {
  return { id, topic, type: 'esai', level, prompt, model, solution, rubric }
}

export const EXAM_MINUTES = 90

// Diagrams for Biologi questions
const DIAGRAM_PLANT_CELL = `<svg viewBox="0 0 320 200" width="100%" height="160" style="max-width:320px;margin:8px auto;display:block" aria-label="Diagram Sel Tumbuhan">
  <rect x="20" y="20" width="280" height="160" rx="20" fill="#e8f5e9" stroke="#2e7d32" stroke-width="4"/>
  <rect x="28" y="28" width="264" height="144" rx="14" fill="#f1f8e9" stroke="#66bb6a" stroke-width="2"/>
  <!-- (1) Dinding Sel -->
  <line x1="20" y1="40" x2="2" y2="40" stroke="#1b5e20" stroke-width="1.5"/>
  <text x="6" y="36" font-size="11" font-weight="bold" fill="#1b5e20">(1)</text>
  <!-- (3) Vakuola Sentral -->
  <path d="M120 60 Q210 50 220 110 Q210 150 130 140 Q100 130 100 90 Z" fill="#b3e5fc" stroke="#0288d1" stroke-width="1.5"/>
  <text x="150" y="105" font-size="11" font-weight="bold" fill="#01579b">(3)</text>
  <!-- (5) Nukleus -->
  <circle cx="70" cy="100" r="28" fill="#ffe082" stroke="#f57f17" stroke-width="2"/>
  <circle cx="70" cy="100" r="10" fill="#ffb300"/>
  <text x="66" y="80" font-size="11" font-weight="bold" fill="#b71c1c">(5)</text>
  <!-- (2) Kloroplas -->
  <ellipse cx="230" cy="55" rx="22" ry="14" fill="#81c784" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="225" y="58" font-size="11" font-weight="bold" fill="#1b5e20">(2)</text>
  <!-- (4) Mitokondria -->
  <ellipse cx="230" cy="145" rx="20" ry="12" fill="#ffab91" stroke="#d84315" stroke-width="1.5"/>
  <path d="M216 145 Q223 138 230 145 T244 145" fill="none" stroke="#bf360c" stroke-width="1.5"/>
  <text x="225" y="148" font-size="11" font-weight="bold" fill="#bf360c">(4)</text>
</svg>`

const DIAGRAM_LEAF = `<svg viewBox="0 0 320 180" width="100%" height="150" style="max-width:320px;margin:8px auto;display:block" aria-label="Penampang Melintang Daun">
  <!-- Kutikula & Epidermis Atas -->
  <rect x="20" y="20" width="280" height="12" fill="#c8e6c9" stroke="#388e3c" stroke-width="1"/>
  <text x="30" y="30" font-size="9" fill="#1b5e20">Epidermis Atas</text>
  <!-- (X) Jaringan Palisade / Tiang -->
  <g fill="#81c784" stroke="#2e7d32" stroke-width="1">
    <rect x="25" y="34" width="16" height="50" rx="3"/>
    <rect x="44" y="34" width="16" height="50" rx="3"/>
    <rect x="63" y="34" width="16" height="50" rx="3"/>
    <rect x="82" y="34" width="16" height="50" rx="3"/>
    <rect x="101" y="34" width="16" height="50" rx="3"/>
    <rect x="120" y="34" width="16" height="50" rx="3"/>
    <rect x="139" y="34" width="16" height="50" rx="3"/>
    <rect x="158" y="34" width="16" height="50" rx="3"/>
    <rect x="177" y="34" width="16" height="50" rx="3"/>
    <rect x="196" y="34" width="16" height="50" rx="3"/>
    <rect x="215" y="34" width="16" height="50" rx="3"/>
    <rect x="234" y="34" width="16" height="50" rx="3"/>
    <rect x="253" y="34" width="16" height="50" rx="3"/>
    <rect x="272" y="34" width="16" height="50" rx="3"/>
  </g>
  <text x="140" y="65" font-size="14" font-weight="bold" fill="#004d40">Zona [X]</text>
  <!-- Jaringan Spons / Bunga Karang -->
  <rect x="20" y="86" width="280" height="50" fill="#e8f5e9" stroke="#a5d6a7" stroke-width="1"/>
  <circle cx="50" cy="105" r="12" fill="#c8e6c9" stroke="#4caf50"/>
  <circle cx="90" cy="115" r="14" fill="#c8e6c9" stroke="#4caf50"/>
  <circle cx="150" cy="108" r="16" fill="#c8e6c9" stroke="#4caf50"/>
  <circle cx="210" cy="114" r="13" fill="#c8e6c9" stroke="#4caf50"/>
  <circle cx="260" cy="106" r="12" fill="#c8e6c9" stroke="#4caf50"/>
  <text x="120" y="128" font-size="9" fill="#2e7d32">Jaringan Bunga Karang (Spons)</text>
  <!-- Epidermis Bawah & Stomata -->
  <rect x="20" y="138" width="280" height="12" fill="#c8e6c9" stroke="#388e3c" stroke-width="1"/>
  <rect x="100" y="138" width="16" height="12" fill="#fff" stroke="#388e3c"/>
  <rect x="200" y="138" width="16" height="12" fill="#fff" stroke="#388e3c"/>
  <text x="30" y="147" font-size="9" fill="#1b5e20">Epidermis Bawah & Stomata</text>
</svg>`

const DIAGRAM_HEART = `<svg viewBox="0 0 280 200" width="100%" height="150" style="max-width:280px;margin:8px auto;display:block" aria-label="Diagram Ruang Jantung Manusia">
  <!-- Dinding luar jantung -->
  <path d="M140 30 C70 10 30 70 40 130 C50 170 140 195 140 195 C140 195 230 170 240 130 C250 70 210 10 140 30 Z" fill="#ffebee" stroke="#c62828" stroke-width="3"/>
  <!-- Sekat / Septum -->
  <line x1="140" y1="40" x2="140" y2="190" stroke="#b71c1c" stroke-width="4"/>
  <line x1="45" y1="95" x2="235" y2="95" stroke="#b71c1c" stroke-width="2.5"/>
  <!-- 4 Ruang Jantung -->
  <!-- Atrium Kanan (A) -->
  <rect x="60" y="50" width="65" height="38" rx="6" fill="#bbdefb" stroke="#1976d2" stroke-width="1.5"/>
  <text x="75" y="73" font-size="11" font-weight="bold" fill="#0d47a1">Serambi Ka</text>
  <!-- Bilik Kanan (B) -->
  <rect x="60" y="105" width="65" height="50" rx="6" fill="#90caf9" stroke="#1565c0" stroke-width="1.5"/>
  <text x="76" y="134" font-size="11" font-weight="bold" fill="#0d47a1">Bilik Kanan</text>
  <!-- Atrium Kiri (C) -->
  <rect x="155" y="50" width="65" height="38" rx="6" fill="#ffcdd2" stroke="#e53935" stroke-width="1.5"/>
  <text x="170" y="73" font-size="11" font-weight="bold" fill="#b71c1c">Serambi Ki</text>
  <!-- Bilik Kiri (D) / Tebal -->
  <rect x="155" y="105" width="65" height="55" rx="6" fill="#ef9a9a" stroke="#b71c1c" stroke-width="3"/>
  <text x="166" y="135" font-size="12" font-weight="bold" fill="#7f0000">Ruang [D]</text>
  <text x="162" y="148" font-size="9" fill="#550000">(Dinding Tebal)</text>
</svg>`

const DIAGRAM_PHAGOCYTOSIS = `<svg viewBox="0 0 340 140" width="100%" height="130" style="max-width:340px;margin:8px auto;display:block" aria-label="Tahapan Fagositosis">
  <!-- Tahap 1: Pengenalan / Penempelan -->
  <g transform="translate(10, 20)">
    <circle cx="35" cy="45" r="30" fill="#e0f2f1" stroke="#00796b" stroke-width="1.5"/>
    <circle cx="70" cy="30" r="6" fill="#e53935"/>
    <text x="12" y="95" font-size="10" font-weight="bold" fill="#004d40">1. Penempelan</text>
  </g>
  <!-- Panah -->
  <path d="M85 65 L100 65" stroke="#00796b" stroke-width="2" marker-end="url(#arrow)"/>
  <!-- Tahap 2: Penelanan / Pembentukan Fagosom -->
  <g transform="translate(95, 20)">
    <path d="M40 15 C15 15 15 75 40 75 C55 75 60 60 55 50 C50 40 55 25 40 15 Z" fill="#e0f2f1" stroke="#00796b" stroke-width="1.5"/>
    <circle cx="45" cy="45" r="6" fill="#e53935"/>
    <text x="16" y="95" font-size="10" font-weight="bold" fill="#004d40">2. Fagosom</text>
  </g>
  <!-- Panah -->
  <path d="M175 65 L190 65" stroke="#00796b" stroke-width="2"/>
  <!-- Tahap 3: Fusi Lisosom & Pencernaan -->
  <g transform="translate(185, 20)">
    <circle cx="35" cy="45" r="30" fill="#e0f2f1" stroke="#00796b" stroke-width="1.5"/>
    <circle cx="35" cy="45" r="10" fill="#80cbc4" stroke="#004d40"/>
    <circle cx="35" cy="45" r="4" fill="#ffcdd2"/>
    <text x="4" y="95" font-size="10" font-weight="bold" fill="#004d40">3. Fagolisosom</text>
  </g>
  <!-- Panah -->
  <path d="M260 65 L275 65" stroke="#00796b" stroke-width="2"/>
  <!-- Tahap 4: Eksositosis -->
  <g transform="translate(265, 20)">
    <circle cx="35" cy="45" r="30" fill="#e0f2f1" stroke="#00796b" stroke-width="1.5"/>
    <circle cx="68" cy="35" r="3" fill="#9e9e9e"/>
    <circle cx="70" cy="55" r="2" fill="#9e9e9e"/>
    <text x="10" y="95" font-size="10" font-weight="bold" fill="#004d40">4. Eksositosis</text>
  </g>
</svg>`

export const questions: Question[] = [
  // Bab I – Sel dan Transport Zat melalui Membran (Soal 1-5)
  pg(
    1,
    1,
    'Dasar',
    'Mitokondria sering dijuluki sebagai "the powerhouse of cell". Fungsi utama mitokondria di dalam metabolisme sel eukariotik adalah...',
    [
      'Mensintesis molekul lipid dan fosfolipid untuk membran sel',
      'Menghasilkan energi kimia dalam bentuk Adenosin Trifosfat (ATP) melalui respirasi seluler aerob',
      'Mencerna makromolekul intraseluler menggunakan enzim hidrolitik asam',
      'Menyimpan cadangan pigmen antosianin dan air pada vakuola',
      'Membentuk benang-benang spindel saat sel melakukan mitosis',
    ],
    1,
    [
      'Mitokondria merupakan tempat terjadinya siklus Krebs dan rantai transpor elektron (fosforilasi oksidatif).',
      'Proses pemecahan glukosa dan asam lemak dengan bantuan oksigen ini menghasilkan energi dalam bentuk molekul ATP (Adenosin Trifosfat) yang digunakan untuk segala aktivitas sel.',
    ],
  ),
  pg(
    2,
    1,
    'Menengah',
    'Perhatikan diagram sel tumbuhan di bawah ini. Bagian sel yang ditandai oleh nomor (2) dan (3) berturut-turut adalah...',
    [
      'Mitokondria dan Nukleus',
      'Kloroplas dan Vakuola Sentral',
      'Dinding Sel dan Retikulum Endoplasma',
      'Badan Golgi dan Lisosom',
      'Sentriol dan Ribosom',
    ],
    1,
    [
      'Nomor (1) adalah Dinding Sel pelindung selulosa.',
      'Nomor (2) adalah Kloroplas (organel fotosintesis berklorofil).',
      'Nomor (3) adalah Vakuola Sentral besar penyimpan cairan sel dan turgor.',
      'Nomor (4) adalah Mitokondria, dan (5) adalah Nukleus.',
    ],
    DIAGRAM_PLANT_CELL,
  ),
  pg(
    3,
    1,
    'Lanjut',
    'Dalam suatu eksperimen laboratorium, empat potongan silinder kentang bermassa awal masing-masing 4,00 gram direndam selama 60 menit dalam empat tabung larutan sukrosa dengan konsentrasi berbeda:\n\n• Tabung I (Sukrosa 0% / Akuades): massa akhir = 4,45 gram\n• Tabung II (Sukrosa 5%): massa akhir = 4,02 gram\n• Tabung III (Sukrosa 10%): massa akhir = 3,68 gram\n• Tabung IV (Sukrosa 20%): massa akhir = 3,25 gram\n\nBerdasarkan data tersebut, kesimpulan yang paling tepat mengenai peristiwa osmosis yang terjadi adalah...',
    [
      'Pada Tabung I terjadi plasmolisis karena air berpindah dari akuades ke dalam sel kentang',
      'Pada Tabung IV cairan sel kentang hipotonik terhadap larutan sukrosa 20%, sehingga air keluar sel dan massa kentang berkurang',
      'Pada Tabung III molekul sukrosa masuk ke dalam sel kentang secara difusi terfasilitasi sehingga massanya turun',
      'Konsentrasi cairan sel kentang setara (isotonik) persis dengan larutan sukrosa 20%',
      'Pada Tabung II terjadi transpor aktif sukrosa melawan gradien konsentrasi',
    ],
    1,
    [
      'Pada Tabung IV (sukrosa 20%), larutan luar bersifat sangat hipertonik (konsentrasi zat terlarut tinggi, potensial air rendah) dibandingkan cairan dalam sel kentang (hipotonik).',
      'Akibatnya, air berosmosis keluar dari sel kentang menuju larutan luar, menyebabkan sel kehilangan turgor (plasmolisis) dan massanya menyusut drastis dari 4,00 gram menjadi 3,25 gram.',
    ],
  ),
  pg(
    4,
    1,
    'Menengah',
    'Mekanisme pengangkutan zat melintasi membran sel dapat berlangsung secara pasif maupun aktif. Ciri khas utama yang membedakan mekanisme transpor aktif dari transpor pasif adalah...',
    [
      'Zat terlarut selalu berpindah dari larutan berkonsentrasi tinggi ke konsentrasi rendah',
      'Proses perpindahan zat berlangsung spontan tanpa melibatkan protein membran',
      'Memerlukan pengeluaran energi seluler (ATP) karena zat dipindahkan melawan gradien konsentrasi',
      'Hanya dapat dilalui oleh molekul gas netral seperti O2 dan CO2',
      'Tidak pernah dipengaruhi oleh suhu maupun ketersediaan oksigen seluler',
    ],
    2,
    [
      'Transpor pasif (difusi, osmosis) berlangsung mengikuti gradien konsentrasi (dari konsentrasi tinggi ke rendah) tanpa membutuhkan energi metabolik.',
      'Transpor aktif memompa molekul atau ion melawan gradien konsentrasi (dari konsentrasi rendah ke tinggi), sehingga mutlak memerlukan hidrolisis energi ATP dan bantuan protein pembawa (carrier/pump).',
    ],
  ),
  pg(
    5,
    1,
    'Lanjut',
    'Pompa natrium-kalium (Na+/K+-ATPase) merupakan contoh vital transpor aktif yang memompa 3 ion Na+ keluar dan 2 ion K+ masuk sel. Apabila sel saraf terpapar racun ouabain yang menghambat kerja enzim ATPase pada pompa tersebut, dampak fisiologis langsung yang terjadi adalah...',
    [
      'Konsentrasi ion Na+ intraseluler akan meningkat, gradien konsentrasi ion lenyap, dan potensial membran istirahat sel hilang',
      'Konsentrasi ion K+ di dalam sel melonjak tajam melebihi batas normal',
      'Potensial membran sel saraf menjadi jauh lebih negatif (hiperpolarisasi permanen)',
      'Laju sintesis ATP oleh mitokondria meningkat drastis sebagai mekanisme kompensasi',
      'Sel saraf mengalami lisis seketika akibat keluarnya seluruh molekul air intraseluler',
    ],
    0,
    [
      'Pompa Na+/K+ berfungsi menjaga kadar Na+ intrasel tetap rendah dan K+ intrasel tetap tinggi, menciptakan gradien elektrokimiawi dan potensial membran istirahat (sekitar -70 mV).',
      'Jika pompa dihambat, ion Na+ yang masuk tidak bisa dipompa keluar, ion K+ bocor keluar tanpa dimasukkan kembali, sehingga gradien ion runtuh dan potensial membran lenyap, melumpuhkan penghantaran impuls saraf.',
    ],
  ),

  // Bab II – Struktur Tumbuhan dan Fungsinya (Soal 6-10)
  pg(
    6,
    2,
    'Dasar',
    'Tumbuhan memiliki jaringan pengangkut khusus untuk menyalurkan cairan dan hara. Fungsi utama dari jaringan xilem adalah...',
    [
      'Mengedarkan hasil fotosintesis berupa sukrosa dari daun ke seluruh jaringan tumbuhan',
      'Mengangkut air dan garam-garam mineral terlarut dari dalam tanah melalui akar menuju ke daun',
      'Melindungi jaringan parenkim di bawahnya dari penguapan air berlebihan',
      'Menyimpan cadangan amilum pada umbi dan biji',
      'Membelah secara aktif untuk memperbesar diameter batang dikotil',
    ],
    1,
    [
      'Xilem (pembuluh kayu) tersusun atas trakea, trakeid, dan serabut xilem yang berfungsi mengangkut air dan mineral dari akar ke daun.',
      'Sebaliknya, floem (pembuluh tapis) berfungsi mengedarkan hasil fotosintesis dari daun ke seluruh tubuh tumbuhan.',
    ],
  ),
  pg(
    7,
    2,
    'Lanjut',
    'Perhatikan gambar penampang melintang daun berikut. Jaringan yang ditandai dengan huruf [X] adalah jaringan palisade (parenkim tiang). Hubungan fungsional antara struktur anatomis jaringan palisade dengan proses penyerapan energi cahaya matahari adalah...',
    [
      'Tersusun longgar dengan banyak rongga udara untuk memfasilitasi pengeluaran uap air secara bebas',
      'Tersusun rapat tegak vertikal tepat di bawah epidermis atas dan mengandung kloroplas dalam jumlah paling banyak, sehingga memaksimalkan penangkapan foton cahaya untuk fotosintesis',
      'Dilapisi lapisan lilin kutikula tebal yang membiaskan cahaya agar daun tidak mengalami fotooksidasi',
      'Mengandung sel pengiring dan pembuluh tapis untuk menyerap spektrum cahaya hijau',
      'Memiliki dinding sekunder yang menebal dari zat lignin untuk memantulkan radiasi sinar ultraviolet',
    ],
    1,
    [
      'Jaringan palisade (parenkim tiang) terletak tepat di bawah epidermis atas (sisi adaksial yang terpapar sinar langsung).',
      'Bentuk selnya silindris panjang, tersusun rapat seperti pagar tegak, dan memiliki kepadatan kloroplas tertinggi per sel dibandingkan jaringan daun lainnya, diadaptasikan untuk penyerapan foton cahaya secara maksimal.',
    ],
    DIAGRAM_LEAF,
  ),
  pg(
    8,
    2,
    'Menengah',
    'Ketika daun putri malu (Mimosa pudica) disentuh dengan ujung jari, daun-daunnya akan segera mengatup dengan cepat. Gerak pada daun putri malu ini dikelompokkan ke dalam jenis gerak...',
    [
      'Fototropisme positif',
      'Geotropisme negatif',
      'Seismonasti (Tigmonasti)',
      'Niktinasti',
      'Kemotaksis',
    ],
    2,
    [
      'Gerak nasti adalah gerak bagian tumbuhan yang arah geraknya tidak dipengaruhi oleh arah datangnya rangsangan.',
      'Gerak mengatupnya daun putri malu akibat rangsang mekanis atau sentuhan disebut seismonasti (atau tigmonasti), yang disebabkan oleh penurunan tekanan turgor mendadak pada sel-sel persendian daun (pulvinus).',
    ],
  ),
  pg(
    9,
    2,
    'Lanjut',
    'Sebuah kecambah tanaman diletakkan di dalam kotak tertutup yang hanya memiliki satu lubang cahaya di sisi kanan (pencahayaan unilateral). Setelah beberapa hari, ujung batang kecambah membengkok ke arah lubang cahaya. Penjelasan fisiologis yang paling tepat mengenai distribusi auksin dan pemanjangan sel pada fenomena tersebut adalah...',
    [
      'Auksin terakumulasi di sisi kanan yang terkena cahaya, menyebabkan sel sisi kanan memanjang lebih cepat',
      'Auksin terurai atau berpindah ke sisi kiri (sisi gelap/teduh), sehingga konsentrasi auksin lebih tinggi di sisi gelap dan merangsang pemanjangan sel sisi gelap lebih cepat daripada sisi terang',
      'Cahaya merangsang sintesis hormon etilen di sisi gelap sehingga batang melengkung',
      'Auksin di seluruh batang tersebar merata, namun sisi terang membelah secara meiosis lebih aktif',
      'Sisi gelap kekurangan auksin sehingga mengalami dormansi dan menyusut',
    ],
    1,
    [
      'Hormon auksin bersifat sensitif terhadap cahaya matahari (dapat mengalami fotodegradasi atau terdistribusi asimetris lewat transpor polar ke sisi yang terlindung dari cahaya / sisi gelap).',
      'Akibatnya, kadar auksin di sisi gelap lebih tinggi daripada sisi terang. Pada batang, kadar auksin tinggi merangsang pemanjangan sel (cell elongation), sehingga sisi gelap tumbuh memanjang lebih cepat dan mendorong batang melengkung ke arah sumber cahaya (fototropisme positif).',
    ],
  ),
  pg(
    10,
    2,
    'Dasar',
    'Petani sering memeram buah pisang mentah di dalam karung tertutup bersama beberapa buah pisang yang sudah matang agar cepat menguning. Hormon tumbuhan berbentuk gas yang berperan utama memicu proses pematangan buah tersebut adalah...',
    [
      'Auksin (IAA)',
      'Giberelin (GA3)',
      'Sitokinin',
      'Asam Absisat (ABA)',
      'Etilen',
    ],
    4,
    [
      'Etilen adalah hormon tumbuhan berwujud gas hidrokarbon (C2H4) yang disintesis dari asam amino metionin.',
      'Etilen berfungsi memicu klimakterik pematangan buah melalui perombakan amilum menjadi glukosa/fruktosa, penguraian klorofil, dan degradasi pektin dinding sel sehingga buah menjadi manis dan lunak.',
    ],
  ),

  // Bab III – Regulasi Zat pada Tubuh Manusia (Soal 11-20)
  pg(
    11,
    3,
    'Lanjut',
    'Berikut adalah data denyut nadi seorang siswa yang diukur dalam tiga kondisi berbeda:\n\n• Saat istirahat duduk santai: 72 kali per menit\n• Tepat setelah berlari cepat mengelilingi lapangan selama 5 menit: 142 kali per menit\n• Setelah beristirahat dan minum selama 15 menit: 76 kali per menit\n\nAnalisis biologis yang paling tepat mengenai peningkatan denyut jantung setelah berlari cepat adalah...',
    [
      'Denyut jantung meningkat untuk menurunkan kadar glukosa darah agar tidak terjadi glikosuria',
      'Otot rangka yang aktif berkontraksi membutuhkan pasokan oksigen dan nutrisi ATP yang jauh lebih tinggi serta menghasilkan karbon dioksida yang harus segera diangkut keluar, sehingga jantung memompa darah lebih cepat',
      'Denyut jantung meningkat semata-mata karena naiknya suhu lingkungan luar saat berlari',
      'Setelah berlari, volume plasma darah berkurang drastis sehingga jantung memompa udara',
      'Peningkatan denyut jantung dipicu oleh penurunan hormon adrenalin di kelenjar adrenal',
    ],
    1,
    [
      'Saat berolahraga lari, laju metabolisme katabolisme respirasi seluler pada miotubus otot rangka meningkat drastis.',
      'Otot membutuhkan pasokan O2 dan glukosa berlipat ganda untuk pembentukan ATP serta menghasilkan limbah metabolik CO2 dan asam laktat yang harus segera dialirkan ke paru-paru dan hati.',
      'Sistem saraf simpatik merangsang nodus SA jantung meningkatkan frekuensi kontraksi jantung (cardiac output) guna memenuhi kebutuhan homeostatis tersebut.',
    ],
  ),
  pg(
    12,
    3,
    'Menengah',
    'Perhatikan diagram anatomi jantung manusia berikut. Ruang jantung yang ditandai dengan label [D] memiliki dinding miokardium paling tebal dan berotot kuat. Fungsi utama dari ruang bilik kiri (ventrikel kiri) ini dalam sistem peredaran darah adalah...',
    [
      'Menerima darah kaya CO2 dari seluruh tubuh melalui vena kava superior dan inferior',
      'Memompa darah kaya CO2 menuju paru-paru melalui arteri pulmonalis untuk dibersihkan',
      'Menerima darah kaya O2 dari paru-paru melalui vena pulmonalis',
      'Memompa darah kaya O2 dengan tekanan hidrostatik tinggi menuju ke seluruh jaringan tubuh melalui aorta',
      'Menyaring zat racun dan obat-obatan dari peredaran darah sebelum masuk ke ginjal',
    ],
    3,
    [
      'Ruang [D] adalah ventrikel kiri (bilik kiri).',
      'Ventrikel kiri bertugas memompa darah beroksigen ke seluruh sistem organ tubuh (sirkulasi sistemik) melewati aorta.',
      'Karena beban tahanan vaskuler perifer sirkulasi sistemik sangat besar dan lintasannya jauh lebih panjang daripada ke paru-paru, miokardium ventrikel kiri berevolusi menjadi yang paling tebal dan kuat.',
    ],
    DIAGRAM_HEART,
  ),
  pg(
    13,
    3,
    'Menengah',
    'Seorang pasien menjalani pemeriksaan hematologi laboratorium dan didapati kadar hemoglobin (Hb) dalam darahnya hanya sebesar 7,5 g/dL (nilai rujukan normal: 13–16 g/dL). Pasien tersebut sering mengeluh cepat lelah, pusing, dan wajahnya pucat. Hubungan sebab-akibat antara kadar hemoglobin yang rendah dengan keluhan pasien adalah...',
    [
      'Hemoglobin mengangkut hormon insulin, sehingga kekurangan Hb memicu hiperglikemia akut',
      'Hemoglobin berperan mengikat oksigen membentuk oksihemoglobin; rendahnya Hb menurunkan kapasitas angkut O2 darah, menyebabkan hipoksia jaringan dan defisit pembentukan energi ATP',
      'Hemoglobin adalah antibodi utama darah; defisit Hb menyebabkan infeksi bakteri lambung',
      'Rendahnya hemoglobin menurunkan proses pembekuan darah sehingga pasien mengalami pendarahan internal di otak',
      'Hemoglobin berfungsi menyerap nutrisi glukosa di usus halus sehingga sel tubuh kelaparan',
    ],
    1,
    [
      'Hemoglobin pada eritrosit mengikat 4 molekul O2 membentuk oksihemoglobin (HbO2) dari alveolus ke kapiler jaringan.',
      'Ketika kadar hemoglobin turun drastis (anemia), suplai oksigen ke mitokondria sel-sel tubuh berkurang (hipoksia jaringan). Respirasi seluler menghasilkan ATP lebih sedikit, memicu rasa lemas dan lelah. Otak kekurangan O2 menyebabkan pusing, dan vasokonstriksi perifer kapiler menyebabkan pucat.',
    ],
  ),
  pg(
    14,
    3,
    'Dasar',
    'Ketika terjadi luka sayat pada permukaan kulit, darah yang mengalir keluar akan membeku setelah beberapa menit. Komponen seluler darah dan protein plasma yang memegang peranan krusial dalam mekanisme hemostasis/pembekuan darah tersebut adalah...',
    [
      'Eritrosit dan albumin',
      'Trombosit (keping darah) dan fibrinogen',
      'Leukosit neutrofil dan globulin',
      'Limfosit B dan histamin',
      'Monosit dan hemoglobin',
    ],
    1,
    [
      'Trombosit (platelet) pecah saat bersentuhan dengan permukaan kasar jaringan luka, melepaskan enzim trombokinase/tromboplastin.',
      'Dengan bantuan ion kalsium (Ca2+) dan vitamin K, protrombin diubah menjadi trombin, yang kemudian mengkatalisis pengubahan protein plasma larut fibrinogen menjadi jaring-jaring serat benang fibrin yang menyumbat luka.',
    ],
  ),
  pg(
    15,
    3,
    'Dasar',
    'Enzim pepsin yang berperan memecah protein kompleks menjadi molekul pepton dan polipeptida sederhana dihasilkan di dalam organ...',
    [
      'Mulut oleh kelenjar parotis',
      'Lambung oleh sel-sel utama (chief cells) mukosa lambung',
      'Kantung empedu bersama cairan garam empedu',
      'Pankreas dalam bentuk kimotripsin',
      'Usus besar bersama flora bakteri',
    ],
    1,
    [
      'Pepsin dihasilkan oleh sel-sel utama (chief cells) pada dinding mukosa lambung dalam bentuk proenzim tidak aktif yang disebut pepsinogen.',
      'Pepsinogen kemudian diaktifkan oleh asam klorida (HCl yang disekresikan sel parietal) menjadi enzim aktif pepsin pada lingkungan asam lambung (pH 1,5–2,0).',
    ],
  ),
  pg(
    16,
    3,
    'Dasar',
    'Pencernaan kimiawi karbohidrat pertama kali dimulai di dalam rongga mulut dengan bantuan enzim pencernaan yang disekresikan air liur, yaitu...',
    [
      'Enzim lipase lingual yang memecah trigliserida',
      'Enzim ptialin (amilase saliva) yang memecah amilum menjadi maltosa',
      'Enzim maltase yang mengubah maltosa menjadi fruktosa',
      'Enzim pepsin yang memecah disakarida menjadi glukosa',
      'Enzim enterokinase yang mengaktifkan tripsinogen',
    ],
    1,
    [
      'Pencernaan karbohidrat dimulai di rongga mulut oleh kelenjar ludah yang menyekresikan enzim ptialin (amilase saliva).',
      'Enzim ptialin mengkatalisis pemecahan ikatan glikosidik pada amilum/pati (polisakarida) menjadi disakarida maltosa dan dekstrin.',
    ],
  ),
  pg(
    17,
    3,
    'Menengah',
    'Mekanisme pertukaran gas pernapasan antara rongga alveolus paru-paru dengan kapiler darah di sekelilingnya berlangsung melalui proses difusi sederhana. Syarat fisik yang memungkinkan oksigen berdifusi dari alveolus ke dalam darah kapiler adalah...',
    [
      'Tekanan parsial O2 di dalam alveolus (pO2 ~104 mmHg) lebih tinggi daripada tekanan parsial O2 di darah kapiler vena paru-paru (pO2 ~40 mmHg)',
      'Konsentrasi gas CO2 di alveolus jauh lebih pekat daripada konsentrasi gas CO2 di darah kapiler',
      'Adanya pompa ion transpor aktif yang mengonsumsi ATP di membran tipis epitel alveolus',
      'Darah kapiler memiliki pH yang sangat asam sehingga menolak molekul gas nitrogen',
      'Tekanan parsial O2 di kapiler darah lebih tinggi daripada tekanan parsial O2 di udara atmosfer',
    ],
    0,
    [
      'Difusi gas respirasi melintasi membran alveolar-kapiler terjadi murni secara pasif menuruni gradien tekanan parsial.',
      'Udara yang dihirup ke alveolus memiliki pO2 sekitar 104 mmHg, sedangkan darah yang baru tiba dari ventrikel kanan memiliki pO2 sekitar 40 mmHg. Selisih tekanan parsial ini menggerakkan molekul O2 berdifusi cepat menembus membran masuk ke plasma darah dan eritrosit.',
    ],
  ),
  pg(
    18,
    3,
    'Lanjut',
    'Pengukuran laju pernapasan seorang pelari menunjukkan frekuensi ventilasi meningkat dari 16 kali per menit (kondisi istirahat) menjadi 38 kali per menit setelah lari cepat. Hubungan fisiologis antara peningkatan produksi CO2 dalam darah dengan peningkatan laju frekuensi pernapasan adalah...',
    [
      'Peningkatan CO2 meningkatkan kadar hemoglobin bebas sehingga paru-paru berkontraksi spontan',
      'CO2 bereaksi dengan air membentuk asam karbonat (H2CO3) yang terurai menjadi ion H+, menurunkan pH darah (asidosis); penurunan pH ini merangsang kemoreseptor sentral di medulla oblongata untuk mempercepat ventilasi',
      'Kenaikan kadar CO2 menyebabkan diafragma lumpuh sementara sehingga alveolus membesar',
      'Tingginya CO2 memicu pelepasan hormon tiroksin yang menyempitkan bronkiolus',
      'Paru-paru membutuhkan kadar CO2 tinggi untuk menjaga kelembapan surfaktan',
    ],
    1,
    [
      'Karbon dioksida bereaksi dengan air plasma: CO2 + H2O <-> H2CO3 <-> H+ + HCO3-.',
      'Peningkatan konsentrasi ion H+ (penurunan pH cairan serebrospinal dan darah) dideteksi oleh kemoreseptor di badan aorta/karotis dan kemoreseptor sentral di medulla oblongata.',
      'Pusat pernapasan otak segera mengirim impuls motorik lewat saraf frenikus dan interkostal untuk mempercepat dan memperdalam ventilasi pernapasan guna membuang kelebihan CO2.',
    ],
  ),
  pg(
    19,
    3,
    'Menengah',
    'Urutan tahapan proses pembentukan urine di dalam nefron ginjal yang benar beserta lokasinya adalah...',
    [
      'Reabsorpsi (di Glomerulus) -> Filtrasi (di TKP) -> Augmentasi (di Lengkung Henle)',
      'Filtrasi (di Glomerulus) -> Reabsorpsi (di Tubulus Kontortus Proksimal) -> Augmentasi (di Tubulus Kontortus Distal)',
      'Augmentasi (di Kapsul Bowman) -> Filtrasi (di Glomerulus) -> Reabsorpsi (di TKD)',
      'Filtrasi (di Pelvis Renalis) -> Reabsorpsi (di Ureter) -> Augmentasi (di Vesika Urinaria)',
      'Reabsorpsi (di TKD) -> Augmentasi (di TKP) -> Filtrasi (di Glomerulus)',
    ],
    1,
    [
      'Proses pembentukan urine terdiri atas 3 tahap berurutan:\n1. Filtrasi: penyaringan darah di Glomerulus & Kapsul Bowman menghasilkan urine primer.\n2. Reabsorpsi: penyerapan kembali zat berguna (glukosa, asam amino, ion, air) di Tubulus Kontortus Proksimal & lengkung Henle menghasilkan urine sekunder.\n3. Augmentasi: penambahan zat sisa (urea, asam urat, sisa obat) di Tubulus Kontortus Distal menghasilkan urine sesungguhnya.',
    ],
  ),
  pg(
    20,
    3,
    'Lanjut',
    'Saat seseorang berolahraga maraton di bawah terik matahari tanpa asupan air yang memadai, tubuhnya kehilangan banyak cairan melalui keringat. Respon hormonal yang dilakukan tubuh untuk mencegah dehidrasi melalui peran hormon Antidiuretik (ADH) adalah...',
    [
      'Hipofisis posterior menurunkan pelepasan ADH agar laju filtrasi glomerulus meningkat',
      'Hipotalamus mendeteksi peningkatan osmolaritas plasma dan merangsang pelepasan ADH; ADH meningkatkan permeabilitas saluran aquaporin di tubulus kolektivus sehingga reabsorpsi air meningkat dan urine menjadi sedikit serta pekat',
      'Kelenjar adrenal menyekresikan ADH untuk menghambat penyerapan kembali ion natrium',
      'Pelepasan ADH memicu pembesaran kantung kemih agar dapat menampung urine encer lebih banyak',
      'Hormon ADH menghentikan proses peredaran darah menuju nefron ginjal secara total',
    ],
    1,
    [
      'Keringat berlebih menyebabkan darah menjadi lebih pekat (hipertonik/osmolaritas naik).',
      'Osmoreseptor di hipotalamus mendeteksi hal ini dan memerintahkan lobus posterior kelenjar hipofisis melepaskan hormon ADH (vasopresin) ke peredaran darah.',
      'ADH menstimulasi penyisipan protein saluran air (aquaporin-2) pada membran sel tubulus distal dan duktus kolektivus ginjal. Reabsorpsi air dari filtrat kembali ke kapiler darah melonjak tinggi, menghasilkan volume urine yang sangat sedikit dengan konsentrasi sangat pekat.',
    ],
  ),

  // Bab IV – Imunitas Tubuh Manusia (Soal 21-30)
  pg(
    21,
    4,
    'Dasar',
    'Permukaan kulit utuh bertindak sebagai garis pertahanan (lini pertama) tubuh yang sangat efektif melawan infeksi mikroorganisme patogen karena...',
    [
      'Kulit memproduksi sel plasma penghasil antibodi spesifik IgG',
      'Lapisan epidermis berkeratin rapat membentuk sawar fisik mekanis serta memiliki pH asam akibat kelenjar sebum dan keringat yang menghambat kolonisasi mikroba',
      'Kulit mengandung sel limfosit T sitotoksik yang membunuh patogen secara langsung',
      'Lapisan dermis kulit dialiri oleh getah bening yang menyaring virus secara fagositosis',
      'Kulit memiliki sel memori yang mengenali struktur antigen virus sejak lahir',
    ],
    1,
    [
      'Kulit merupakan bagian dari sistem pertahanan nonspesifik lini pertama.',
      'Lapisan terluar (stratum korneum) tersusun atas sel epitel pipih berlapis menanduk berkeratin yang terus terkelupas dan sukar ditembus patogen.',
      'Kelenjar keringat dan kelenjar minyak (sebum) menghasilkan asam laktat dan asam lemak bebas yang menciptakan pH asam (sekitar 4,5–5,5) yang menghambat pertumbuhan banyak mikroba.',
    ],
  ),
  pg(
    22,
    4,
    'Menengah',
    'Perhatikan diagram tahapan mekanisme pertahanan tubuh nonspesifik di bawah ini. Proses penelanan partikel patogen oleh sel fagosit (seperti makrofag dan neutrofil) membentuk vakuola fagosom yang kemudian berfusi dengan lisosom disebut...',
    [
      'Aglutinasi antigen',
      'Fagositosis',
      'Opsonisasi eritrosit',
      'Diferensiasi sel memori',
      'Kloning sel plasma',
    ],
    1,
    [
      'Diagram menunjukkan tahapan fagositosis:\n1. Kemotaksis dan penempelan mikroba ke reseptor membran fagosit\n2. Penelanan (ingestion) membentuk vesikel fagosom\n3. Fusi fagosom dengan lisosom membentuk fagolisosom\n4. Penghancuran patogen oleh enzim hidrolitik dan radikal bebas\n5. Eksositosis zat sisa yang telah tercerna.',
    ],
    DIAGRAM_PHAGOCYTOSIS,
  ),
  pg(
    23,
    4,
    'Menengah',
    'Vaksinasi campak diberikan kepada anak untuk merangsang timbulnya kekebalan adaptif jangka panjang. Peran utama sel memori (limfosit B dan T memori) yang terbentuk setelah vaksinasi adalah...',
    [
      'Menyaring racun patogen di organ hati agar tidak merusak ginjal',
      'Mengingat antigen spesifik, sehingga jika di kemudian hari tubuh terpapar patogen sesungguhnya, sel memori akan merespons secara cepat memproduksi antibodi dalam jumlah besar (respons sekunder)',
      'Menghasilkan enzim amilase untuk mencerna kapsul dinding sel bakteri',
      'Menghancurkan sel darah merah yang telah terinfeksi parasit malaria',
      'Menghambat pembentukan histamin pada reaksi alergi musiman',
    ],
    1,
    [
      'Vaksin mengandung antigen yang telah dilemahkan atau dimatikan untuk memicu respons imun primer tanpa menimbulkan penyakit.',
      'Proses ini menghasilkan sel B memori dan sel T memori yang bertahan bertahun-tahun.',
      'Saat patogen riil masuk di masa depan, sel memori mengenali epitop antigen seketika dan memicu diferensiasi sel plasma masif (respons imun sekunder), menetralkan patogen sebelum menimbulkan gejala sakit.',
    ],
  ),
  pg(
    24,
    4,
    'Lanjut',
    'Perhatikan beberapa contoh peristiwa kekebalan tubuh berikut:\n(1) Bayi memperoleh antibodi IgG melalui plasenta dan IgA melalui air susu ibu (ASI)\n(2) Seseorang kebal terhadap cacar air setelah sembuh dari sakit cacar saat masa kecil\n(3) Pasien digigit ular berbisa disuntik serum antivenom (antibodi antibisa ular)\n(4) Pemberian vaksin BCG untuk mencegah infeksi tuberkulosis paru\n\nPasangan peristiwa yang berturut-turut merupakan kekebalan pasif alami dan kekebalan aktif buatan adalah...',
    [
      '(1) dan (3)',
      '(2) dan (4)',
      '(1) dan (4)',
      '(3) dan (2)',
      '(4) dan (1)',
    ],
    2,
    [
      'Pengelompokan sistem kekebalan:\n• Kekebalan Pasif Alami: tubuh menerima antibodi jadi dari ibu (plasenta/ASI) -> contoh (1)\n• Kekebalan Aktif Alami: tubuh memproduksi antibodi sendiri akibat infeksi alami -> contoh (2)\n• Kekebalan Pasif Buatan: tubuh menerima antibodi jadi dari luar lewat suntikan serum antivenom/antirabies -> contoh (3)\n• Kekebalan Aktif Buatan: tubuh dirangsang memproduksi antibodi dan sel memori sendiri melalui vaksinasi -> contoh (4)\nJadi, pasangan pasif alami dan aktif buatan adalah (1) dan (4).',
    ],
  ),
  pg(
    25,
    4,
    'Lanjut',
    'Reaksi hipersensitivitas tipe I (alergi) terhadap serbuk sari atau makanan tertentu dapat menimbulkan bersin, gatal, dan sesak napas. Urutan kaskade mekanisme imunologis pada reaksi alergi hingga pelepasan mediator histamin adalah...',
    [
      'Alergen langsung melisiskan sel mast -> pelepasan antibodi IgG -> histamin terikat sel epitel',
      'Paparan pertama alergen merangsang sel B berdiferensiasi menjadi sel plasma penghasil IgE -> IgE berikatan dengan reseptor Fc pada sel mast/basofil -> paparan ulang alergen berikatan silang dengan molekul IgE -> degranulasi sel mast dan pelepasan histamin',
      'Histamin disintesis oleh eritrosit -> histamin merangsang sel T CD8+ -> limfosit membunuh alergen',
      'Alergen mengendap di nefron ginjal -> makrofag mensekresikan lendir mukus -> timbul bersin',
      'Neutrofil menelan IgA -> komplemen teraktivasi menghasilkan histamin di cairan plasma',
    ],
    1,
    [
      'Mekanisme alergi (Hipersensitivitas Tipe I):\n1. Sensitisasi: Alergen masuk, sel T helper (Th2) merangsang sel B memproduksi antibodi Imunoglobulin E (IgE).\n2. Molekul IgE menempel pada reseptor Fc di permukaan sel mast dan basofil.\n3. Re-exposure: Pada paparan kedua, alergen berikatan silang (cross-linking) dengan IgE pada sel mast.\n4. Memicu degranulasi vesikel intraseluler dan pelepasan senyawa kimia histamin, prostaglandin, dan leukotrien yang menyebabkan vasodilatasi kapiler, pembengkakan, dan penyempitan saluran napas.',
    ],
  ),
  pg(
    26,
    4,
    'Dasar',
    'Human Immunodeficiency Virus (HIV) menyerang sistem pertahanan tubuh manusia secara spesifik dengan menginfeksi dan melisiskan sel limfosit...',
    [
      'Sel T pembunuh / T sitotoksik berpenanda reseptor CD8+',
      'Sel T penolong / T helper berpenanda reseptor CD4+',
      'Sel darah merah berinti (retikulosit)',
      'Sel pembeku darah (trombosit)',
      'Sel fagosit monosit di alveolus paru',
    ],
    1,
    [
      'Glikoprotein gp120 pada selubung virus HIV memiliki afinitas ikatan yang sangat kuat terhadap reseptor molekul CD4.',
      'Reseptor CD4 terutama diekspresikan pada permukaan sel limfosit T helper (T penolong). HIV bereplikasi di dalam sel T helper dan menghancurkannya, melumpuhkan koordinasi seluruh sistem pertahanan adaptif.',
    ],
  ),
  pg(
    27,
    4,
    'Menengah',
    'Sistem imun sangat dipengaruhi oleh homeostasis metabolisme tubuh. Contoh pola hidup yang paling tepat dan terbukti secara ilmiah mampu mendukung serta mempertahankan optimalitas fungsi sistem pertahanan tubuh adalah...',
    [
      'Membatasi konsumsi air putih hingga kurang dari 500 mL per hari untuk meringankan beban ginjal',
      'Tidur teratur dan cukup (7–8 jam per hari), mengonsumsi makanan gizi seimbang kaya vitamin dan antioksidan, serta berolahraga intensitas sedang secara konsisten',
      'Mengonsumsi antibiotik dosis tinggi setiap hari sebagai langkah preventif terhadap semua virus',
      'Mengisolasi diri di ruangan tanpa sirkulasi udara luar untuk mencegah kontak debu',
      'Melakukan diet ketat tanpa lemak sama sekali untuk menghilangkan membran lipid sel',
    ],
    1,
    [
      'Pola hidup penunjang imunitas:\n• Tidur cukup dan berkualitas memungkinkan sintesis sitokin dan perbaikan jaringan sel imun.\n• Gizi seimbang kaya mikronutrien (Vitamin C, D, Zinc, Protein) dibutuhkan untuk proliferasi leukosit dan sintesis imunoglobulin.\n• Olahraga aerobik intensitas sedang meningkatkan sirkulasi sel darah putih dan antibodi ke seluruh jaringan tubuh.',
    ],
  ),
  pg(
    28,
    4,
    'Menengah',
    'Ketika jari tangan tertusuk duri dan terinfeksi bakteri, area di sekitar tusukan akan memperlihatkan empat tanda klinis kardinal inflamasi (peradangan): kemerahan (rubor), rasa panas (calor), pembengkakan (tumor), dan rasa nyeri (dolor). Penyebab timbulnya gejala kemerahan dan rasa panas pada area peradangan tersebut adalah...',
    [
      'Terjadinya vasodilatasi (pelebaran) arteriol dan kapiler lokal akibat pelepasan histamin, sehingga meningkatkan aliran darah kaya eritrosit hangat ke lokasi cedera',
      'Kematian jutaan sel epitel yang menumpuk di saluran getah bening',
      'Penghentian suplai darah total ke area luka oleh jaringan parut fibrin',
      'Keluarnya cairan intraseluler akibat tekanan osmotik air yang sangat rendah',
      'Aktivitas enzim lipase yang membakar lemak subkutan di bawah kulit',
    ],
    0,
    [
      'Cedera seluler memicu pelepasan mediator kimia inflamasi (histamin, bradikinin, prostaglandin).',
      'Senyawa ini memicu vasodilatasi pembuluh darah mikrosirkulasi di sekitar jaringan luka. Akibatnya aliran darah meningkat (hiperemia), membawa lebih banyak sel darah merah yang menghantarkan warna merah (rubor) dan energi panas tubuh (calor) ke permukaan kulit yang cedera.',
    ],
  ),
  pg(
    29,
    4,
    'Lanjut',
    'Perbandingan karakteristik yang tepat antara sistem imunitas bawaan (innate immunity) dan sistem imunitas adaptif (acquired immunity) adalah...',
    [
      'Imunitas bawaan bersifat spesifik antigen, sedangkan imunitas adaptif bersifat nonspesifik',
      'Imunitas bawaan memiliki memori imunologis jangka panjang, sedangkan imunitas adaptif tidak mengenal memori',
      'Imunitas bawaan sudah ada sejak lahir dan merespons patogen dengan sangat cepat namun tanpa memori, sedangkan imunitas adaptif bersifat spesifik terhadap antigen tertentu dan membentuk memori jangka panjang',
      'Imunitas bawaan hanya diperantarai oleh sel limfosit B, sedangkan imunitas adaptif hanya diperantarai oleh kulit dan air mata',
      'Imunitas bawaan membutuhkan waktu aktivasi berminggu-minggu, sedangkan imunitas adaptif merespons dalam hitungan detik',
    ],
    2,
    [
      'Karakteristik Imunitas Bawaan (Nonspesifik):\n• Ada sejak lahir\n• Respons langsung/cepat (hitungan menit hingga jam)\n• Tidak spesifik terhadap satu jenis antigen tertentu\n• Tidak membentuk sel memori jangka panjang.\n\nKarakteristik Imunitas Adaptif (Spesifik):\n• Berkembang setelah terpapar antigen spesifik (vaksinasi/sakit)\n• Memerlukan waktu pemaparan awal (hitungan hari)\n• Sangat spesifik mengenali epitop antigen tertentu\n• Menghasilkan sel memori untuk perlindungan cepat dan tinggi di masa depan.',
    ],
  ),
  pg(
    30,
    4,
    'Dasar',
    'Jenis sel limfosit spesifik yang bertindak sebagai "pabrik" penghasil dan penyekresi ribuan molekul antibodi (imunoglobulin) ke dalam plasma darah dan cairan getah bening adalah...',
    [
      'Sel T supresor',
      'Sel T sitotoksik (CD8+)',
      'Sel plasma (diferensiasi dari limfosit B)',
      'Sel darah merah (eritrosit)',
      'Sel punca mieloid di sumsum tulang',
    ],
    2,
    [
      'Ketika limfosit B terpapar antigen yang cocok dan diaktivasi oleh sel T helper, sel B mengalami pembelahan klonal dan berdiferensiasi menjadi dua populasi:\n1. Sel B memori: untuk mengingat antigen di masa depan.\n2. Sel plasma: sel efektor dengan retikulum endoplasma kasar sangat berkembang yang bertugas menyekresikan ribuan molekul antibodi spesifik per detik ke peredaran darah.',
    ],
  ),

  // Soal Uraian Biologi (Soal 31-35 / Uraian 1-5)
  esai(
    31,
    1,
    'Menengah',
    'Sebutkan 3 organel sel eukariotik beserta fungsi biologis masing-masing dalam menunjang kehidupan sel.',
    'Tiga organel sel beserta fungsinya: (1) Mitokondria berfungsi sebagai tempat respirasi seluler aerob untuk menghasilkan ATP; (2) Ribosom berfungsi sebagai tempat sintesis rantai polipeptida (protein); (3) Retikulum Endoplasma Kasar berfungsi memodifikasi dan mentransportasikan protein hasil sintesis ribosom.',
    [
      'Contoh 1: Mitokondria berfungsi melangsungkan siklus Krebs dan fosforilasi oksidatif guna memproduksi molekul energi ATP.',
      'Contoh 2: Ribosom berfungsi menerjemahkan kode genetik mRNA untuk merangkai asam amino menjadi protein fungsional.',
      'Contoh 3: Badan Golgi (Aparatus Golgi) berfungsi menyortir, memodifikasi glikosilasi, dan mengemas makromolekul dalam vesikel sekretori ke luar sel.',
      'Contoh 4: Kloroplas (pada sel tumbuhan) berfungsi melangsungkan fotosintesis mengubah CO2 dan air menjadi glukosa dengan energi foton.',
    ],
    [
      'Menyebutkan nama organel pertama dengan fungsi biologis yang tepat.',
      'Menyebutkan nama organel kedua dengan fungsi biologis yang tepat.',
      'Menyebutkan nama organel ketiga dengan fungsi biologis yang tepat.',
      'Memberikan penjelasan kaitan fungsi organel tersebut dengan metabolisme sel secara terpadu.',
    ],
  ),

  esai(
    32,
    2,
    'Menengah',
    'Jelaskan mekanisme seluler penyebab daun putri malu (Mimosa pudica) menutup dengan sangat cepat saat disentuh, serta sebutkan nama jenis gerak pada tumbuhan tersebut.',
    'Daun putri malu menutup akibat gerak seismonasti (tigmonasti). Sentuhan memicu impuls yang menyebabkan keluarnya ion K+ dan air secara cepat dari sel pulvinus (bantal daun) bagian bawah, menurunkan tekanan turgor secara mendadak sehingga daun melipat.',
    [
      'Nama jenis gerak: Seismonasti atau Tigmonasti (gerak nasti yang dipicu oleh rangsangan mekanik/sentuhan).',
      'Transmisi Sinyal: Sentuhan pada helaian daun menimbulkan potensial aksi (sinyal elektrokimiawi) yang menjalar cepat menuju bantal daun di pangkal tangkai daun (pulvinus).',
      'Aliran Ion: Sinyal tersebut membuka saluran ion pada membran sel pulvinus sisi abaksial (bawah), memicu keluarnya ion kalium (K+) dan ion klorida ke ruang antarsel.',
      'Penurunan Turgor: Keluarnya ion menurunkan potensial air di luar sel, memicu keluarnya molekul air secara osmosis cepat dari sel pulvinus bawah. Sel pulvinus bawah mengkerut dan kehilangan tekanan turgor, sedangkan sel pulvinus atas tetap kaku, mendorong tangkai daun melipat ke bawah.',
    ],
    [
      'Menyebutkan nama jenis gerak (seismonasti / tigmonasti) dengan benar.',
      'Menjelaskan adanya perambatan sinyal impuls sentuhan menuju persendian daun (pulvinus).',
      'Menjelaskan mekanisme keluarnya ion kalium (K+) dan molekul air secara osmosis.',
      'Menjelaskan perubahan tekanan turgor asimetris yang menyebabkan daun mengatup.',
    ],
  ),

  esai(
    33,
    3,
    'Menengah',
    'Jelaskan peran eritrosit dan molekul hemoglobin dalam proses pengangkutan oksigen di dalam tubuh manusia, serta uraikan dampak fisiologis yang terjadi apabila kadar eritrosit seseorang berada jauh di bawah normal.',
    'Eritrosit mengandung hemoglobin yang mengikat O2 di alveolus membentuk oksihemoglobin (HbO2) untuk diedarkan ke seluruh jaringan tubuh. Bila kadar eritrosit rendah (anemia), suplai O2 ke jaringan menurun, menghambat respirasi seluler dan menyebabkan tubuh lemas, pusing, serta sesak napas.',
    [
      'Peran Eritrosit & Hemoglobin: Eritrosit berbentuk cakram bikonkaf tanpa inti untuk memaksimalkan kapasitas tampung hemoglobin. Molekul hemoglobin memiliki gugus heme beratom besi (Fe2+) yang mampu mengikat 4 molekul oksigen secara reversibel di kapiler alveolus: Hb + 4O2 <-> Hb(O2)4.',
      'Distribusi Oksigen: Darah kaya oksihemoglobin dialirkan ke kapiler jaringan tubuh. Di jaringan yang ber-pO2 rendah dan ber-CO2 tinggi, hemoglobin melepaskan oksigen untuk berdifusi masuk ke sel-sel tubuh.',
      'Dampak Kadar Eritrosit Rendah: Penurunan jumlah eritrosit atau kadar Hb disebut anemia klinis.',
      'Gejala Fisiologis: Kapasitas angkut O2 darah merosot drastis (hipoksia jaringan). Mitokondria sel kekurangan oksigen untuk memproduksi ATP, menyebabkan gejala khas 5L (lesu, lelah, letih, lemah, lunglai), pusing, sesak napas saat aktivitas ringan, serta pucat pada konjungtiva mata dan kuku.',
    ],
    [
      'Menjelaskan peranan eritrosit dan struktur hemoglobin dalam mengikat oksigen menjadi oksihemoglobin.',
      'Menjelaskan mekanisme pelepasan oksigen dari darah menuju jaringan yang membutuhkan.',
      'Menyebutkan istilah klinis anemia dan kondisi hipoksia jaringan akibat defisit eritrosit.',
      'Menguraikan minimal 3 gejala/dampak fisiologis nyata (lemas, pusing, sesak, pucat) beserta alasan biologisnya.',
    ],
  ),

  esai(
    34,
    3,
    'Menengah',
    'Uraikan secara terperinci tiga tahapan proses pembentukan urine di dalam nefron ginjal manusia (filtrasi, reabsorpsi, augmentasi) mencakup lokasi berlangsungnya, mekanisme proses, dan cairan hasil yang diproduksi.',
    'Tiga tahapan pembentukan urine: (1) Filtrasi di glomerulus menyaring sel darah/protein menghasilkan urine primer; (2) Reabsorpsi di tubulus kontortus proksimal menyerap kembali zat berguna menghasilkan urine sekunder; (3) Augmentasi di tubulus kontortus distal menambahkan zat sisa menghasilkan urine sesungguhnya.',
    [
      'Tahap 1 - Filtrasi: Berlangsung di Glomerulus dan Kapsul Bowman. Darah di bawah tekanan hidrostatik tinggi disaring melewati podosit kapiler. Molekul besar (sel darah dan protein plasma albumin) tertahan di darah, sedangkan air, glukosa, asam amino, urea, dan ion lolos membentuk urine primer (filtrat glomerulus).',
      'Tahap 2 - Reabsorpsi: Berlangsung di Tubulus Kontortus Proksimal (TKP) dan Lengkung Henle. Zat-zat yang masih berguna bagi tubuh (100% glukosa, asam amino, serta sebagian besar ion Na+, Cl-, dan air) diserap kembali secara aktif dan pasif masuk ke kapiler peritubuler. Hasilnya adalah urine sekunder (filtrat tubulus) yang mengandung air, urea, dan garam amonium.',
      'Tahap 3 - Augmentasi (Sekresi Tubuler): Berlangsung di Tubulus Kontortus Distal (TKD) dan Tubulus Kolektivus. Tubuh mengeluarkan sisa metabolit obat-obatan, ion H+, racun, dan kelebihan ion K+ ke dalam filtrat. Hasil akhirnya adalah urine sesungguhnya yang siap dialirkan ke pelvis ginjal dan kandung kemih.',
    ],
    [
      'Menjelaskan lokasi, proses, dan hasil cairan pada tahap filtrasi (urine primer) secara akurat.',
      'Menjelaskan lokasi, proses zat yang diserap kembali, dan hasil pada tahap reabsorpsi (urine sekunder).',
      'Menjelaskan lokasi, zat yang ditambahkan, dan hasil pada tahap augmentasi (urine sesungguhnya).',
      'Menyajikan urutan tahapan nefron secara logis dan runtut.',
    ],
  ),

  esai(
    35,
    4,
    'Lanjut',
    'Bandingkan secara komparatif sistem imunitas bawaan (innate immunity) dengan sistem imunitas adaptif (acquired immunity) pada tubuh manusia berdasarkan: waktu respons, spesifisitas antigen, dan pembentukan memori imunologis, serta berikan masing-masing satu contoh konkritnya.',
    'Imunitas bawaan bekerja cepat, nonspesifik, dan tidak membentuk memori (contoh: sawar kulit atau fagositosis makrofag). Imunitas adaptif memerlukan waktu aktivasi awal, spesifik antigen, dan membentuk sel memori jangka panjang (contoh: produksi antibodi pasca-vaksinasi campak).',
    [
      'Waktu Respons: Imunitas bawaan merespons seketika dalam hitungan menit hingga jam sejak patogen masuk. Imunitas adaptif membutuhkan waktu induksi sekitar beberapa hari hingga minggu untuk pengenalan antigen, kloning sel, dan diferensiasi.',
      'Spesifisitas Antigen: Imunitas bawaan bersifat nonspesifik (mengenali pola molekul umum patogen seperti LPS bakteri melalui reseptor TLR). Imunitas adaptif sangat spesifik terhadap satu varian epitop antigen tertentu melalui reseptor BCR dan TCR.',
      'Memori Imunologis: Imunitas bawaan tidak membentuk sel memori (respons pada infeksi ulang sama persis dengan infeksi pertama). Imunitas adaptif membentuk sel B memori dan sel T memori yang bertahan lama, sehingga respons pada paparan kedua jauh lebih cepat dan kuat.',
      'Contoh Nyata: Contoh imunitas bawaan adalah lapisan keratin kulit, enzim lisozim air mata, atau fagositosis bakteri oleh sel makrofag. Contoh imunitas adaptif adalah produksi antibodi spesifik oleh sel plasma setelah vaksinasi hepatitis B atau kekebalan seumur hidup setelah sembuh dari cacar air.',
    ],
    [
      'Membandingkan waktu respons antara imunitas bawaan dan adaptif secara tepat.',
      'Membandingkan spesifisitas pengenalan antigen antara kedua sistem imunitas.',
      'Membandingkan aspek pembentukan sel memori imunologis pada kedua sistem.',
      'Memberikan minimal satu contoh nyata yang valid untuk masing-masing sistem imunitas.',
    ],
  ),
]
