import type { Question, Level } from '../../lib/types'

function pg(
  id: number,
  topic: number,
  level: Level,
  prompt: string,
  options: string[],
  key: number,
  solution: string[],
): Question {
  return { id, topic, type: 'pg', level, prompt, options, key, solution }
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

export const questions: Question[] = [
  // Soal 1 (Karakteristik Tari - No. 1, C1)
  pg(
    1,
    1,
    'Dasar',
    'Tari tradisional klasik yang berkembang di lingkungan istana/keraton memiliki ciri khas mendasar yang membedakannya dari tarian lainnya, yaitu...',
    [
      'Gerakannya bebas dan dapat diubah secara spontan oleh penari saat pementasan',
      'Memiliki pakem (aturan baku) yang ketat, bernilai estetis luhur, dan diwariskan turun-temurun',
      'Tidak memerlukan iringan musik gamelan maupun tata rias khusus',
      'Penciptanya selalu berasal dari kalangan seniman modern kontemporer',
      'Hanya boleh ditarikan oleh masyarakat biasa di tanah lapang desa',
    ],
    1,
    [
      'Tari tradisional klasik lahir dan berkembang di lingkungan feodal/keraton (istana).',
      'Ciri utamanya adalah memiliki pakem atau norma gerak baku yang mapan, gerakan yang halus dan anggun, serta filosofi adiluhung yang diwariskan secara ketat antar-generasi.',
    ],
  ),

  // Soal 2 (Gerak Tari - No. 2, C1)
  pg(
    2,
    2,
    'Dasar',
    'Perbedaan konseptual yang paling mendasar antara gerak murni dan gerak maknawi dalam karya seni tari adalah...',
    [
      'Gerak murni dilakukan dengan tempo cepat, sedangkan gerak maknawi selalu bertempo lambat',
      'Gerak murni hanya mementingkan keindahan visual tanpa makna simbolis, sedangkan gerak maknawi mengandung maksud atau pesan tertentu',
      'Gerak murni dilakukan oleh penari pria, sedangkan gerak maknawi khusus untuk penari wanita',
      'Gerak murni tidak diiringi musik, sedangkan gerak maknawi wajib diiringi vokal',
      'Gerak murni selalu meniru gerak binatang, sedangkan gerak maknawi meniru tumbuhan',
    ],
    1,
    [
      'Gerak murni (pure movement) adalah gerak yang digarap semata-mata untuk mendapatkan bentuk estetis keindahan visual tanpa menyampaikan arti simbolis tertentu.',
      'Sebaliknya, gerak maknawi (meaningful movement) adalah gerak yang telah distilisasi atau didistorsi untuk menyampaikan pesan, watak, atau meniru tingkah laku manusia dan alam.',
    ],
  ),

  // Soal 3 (Karakteristik Tari - No. 3, C2)
  pg(
    3,
    1,
    'Menengah',
    'Tari kreasi baru sering kali memadukan elemen tari tradisional Nusantara dengan kebebasan koreografi modern. Ciri khas utama dari tari kreasi baru adalah...',
    [
      'Wajib mempertahankan seluruh pakem keraton tanpa ada modifikasi sedikit pun',
      'Terbuka terhadap eksplorasi gerak baru, fleksibel dalam tata busana, dan tidak terikat aturan adat yang kaku',
      'Hanya boleh diiringi oleh rekaman musik instrumental barat',
      'Gerakan tarinya hanya ditujukan untuk keperluan ritual penguburan jenazah',
      'Tidak diperkenankan menggunakan panggung pertunjukan modern',
    ],
    1,
    [
      'Tari kreasi baru merupakan bentuk ekspresi seni yang berpijak pada pola tradisi namun dikembangkan secara inovatif oleh koreografer.',
      'Ciri utamanya adalah kebebasan berkreasi, tidak terbelenggu pakem tradisional yang kaku, serta eksplorasi gerak, iringan, dan busana yang dinamis sesuai tema kekinian.',
    ],
  ),

  // Soal 4 (Karakteristik Tari - No. 4, C1)
  pg(
    4,
    1,
    'Dasar',
    'Tari rakyat (tari tradisional kerakyatan) yang hidup di tengah masyarakat agraris pedesaan memiliki karakteristik dominan berupa...',
    [
      'Gerakan yang sangat rumit dengan standar kurikulum keraton yang sakral',
      'Gerakan yang sederhana, spontan, komunikatif, dan mengutamakan rasa kebersamaan komunal',
      'Kostum berlapis emas murni dengan tata rias yang membutuhkan waktu seharian',
      'Pementasan tertutup yang hanya boleh disaksikan oleh keluarga bangsawan',
      'Kewajiban penari membawakan senjata tajam beracun di atas panggung',
    ],
    1,
    [
      'Tari tradisional kerakyatan lahir dari masyarakat pedesaan atau agraris.',
      'Ciri khasnya adalah gerakannya bersahaja, lugas, lincah, mudah dipelajari, serta lebih menekankan fungsi sosial, hiburan pergaulan, dan solidaritas kebersamaan warga.',
    ],
  ),

  // Soal 5 (Ide dan Tema Tari - No. 5, C1)
  pg(
    5,
    3,
    'Dasar',
    'Dalam proses penciptaan sebuah karya koreografi tari, yang dimaksud dengan "tema tari" adalah...',
    [
      'Jumlah total penari yang terlibat dalam pementasan di atas pentas',
      'Gagasan pokok, konsep dasar, atau pokok pikiran yang menjiwai seluruh karya tari',
      'Warna kain selendang yang paling dominan dikenakan oleh para penari',
      'Durasi waktu yang dihabiskan penari selama melakukan pemanasan',
      'Susunan nama dewan juri yang menilai pagelaran festival seni',
    ],
    1,
    [
      'Tema tari adalah gagasan sentral, pokok pikiran, atau ide dasar yang menjadi landasan koreografer dalam merancang rangkaian motif gerak, iringan, tata rias, dan tata panggung agar karya tari memiliki kesatuan makna yang utuh.',
    ],
  ),

  // Soal 6 (Ide dan Tema Tari - No. 6, C1)
  pg(
    6,
    3,
    'Dasar',
    'Salah satu syarat mutlak dalam memilih dan merumuskan tema tari yang baik bagi koreografer adalah tema tersebut harus...',
    [
      'Dapat ditarikan (diwujudkan ke dalam gerak tubuh manusia yang estetis)',
      'Menggunakan naskah drama sepanjang puluhan halaman teks dialog',
      'Selalu mengangkat kisah mitologi bangsa Yunani Kuno',
      'Membutuhkan biaya pementasan ratusan juta rupiah',
      'Menghindari penggunaan musik iringan dari alat musik pukul',
    ],
    0,
    [
      'Syarat utama tema tari adalah: (1) Dapat ditarikan (workable in dance movement), artinya ide tersebut mampu diterjemahkan menjadi motif gerak ragawi; (2) Memiliki nilai estetis; (3) Komunikatif bagi penonton; dan (4) Sesuai dengan kemampuan teknis penari.',
    ],
  ),

  // Soal 7 (Rangsang Tari - No. 7, C1)
  pg(
    7,
    4,
    'Dasar',
    'Seorang koreografer mendengarkan gemuruh ombak laut dan desau angin kencang, lalu tergerak untuk menciptakan rangkaian gerak tari dinamis. Rangsang penciptaan tari semacam ini disebut...',
    [
      'Rangsang visual',
      'Rangsang auditif (dengar)',
      'Rangsang peraba',
      'Rangsang kinestetik',
      'Rangsang tekstual',
    ],
    1,
    [
      'Rangsang auditif adalah stimulus awal yang ditangkap melalui indra pendengaran, seperti alunan musik instrumen, nyanyian vokal, puisi, maupun suara-suara alam (ombak, angin, gemericik air, kicauan burung) yang memicu daya imajinasi gerak.',
    ],
  ),

  // Soal 8 (Rangsang Tari - No. 8, C1)
  pg(
    8,
    4,
    'Dasar',
    'Stimulus penciptaan karya tari yang diperoleh dari hasil pengamatan indra penglihatan terhadap lukisan perjuangan, patung pahlawan, atau relief candi dikategorikan sebagai...',
    [
      'Rangsang visual',
      'Rangsang auditif',
      'Rangsang kinestetik',
      'Rangsang peraba',
      'Rangsang termal',
    ],
    0,
    [
      'Rangsang visual adalah rangsangan yang timbul dari penglihatan terhadap objek kasatmata, seperti gambar, lukisan, patung, relief, kostum, topeng, arsitektur, atau pemandangan alam yang menginspirasi penciptaan gerak tari.',
    ],
  ),

  // Soal 9 (Rangsang Tari - No. 9, C3)
  pg(
    9,
    4,
    'Lanjut',
    'Koreografer merancang sebuah karya tari kontemporer bertajuk "Belenggu Plastik" yang berakar dari keprihatinannya terhadap isu kerusakan ekosistem laut akibat limbah anorganik. Rangsang awal penciptaan tari yang didasarkan pada konsep pemikiran atau kepedulian isu abstrak tersebut adalah...',
    [
      'Rangsang auditif murni',
      'Rangsang gagasan (ideatif)',
      'Rangsang kinestetik mekanis',
      'Rangsang peraba fisik',
      'Rangsang indra pengecap',
    ],
    1,
    [
      'Rangsang gagasan (ideatif) adalah stimulus penciptaan gerak yang bersumber dari ide, konsep pemikiran, nilai filosofis, pengalaman batin, atau isu sosial lingkungan yang ingin diartikulasikan koreografer melalui metafora gerak tari.',
    ],
  ),

  // Soal 10 (Tatarias dan Busana - No. 10, C2)
  pg(
    10,
    8,
    'Menengah',
    'Dalam pementasan tari wayang orang, wajah penari yang memerankan tokoh Rahwana dirias dengan kumis tebal melintang, alis merah tajam, dan bayangan mata gelap. Fungsi tata rias pada tokoh tersebut adalah...',
    [
      'Tata rias panggung korektif untuk membuat wajah penari terlihat lebih muda',
      'Tata rias karakter (watak) untuk mempertegas watak tokoh yang garang, angkuh, dan pemarah',
      'Tata rias fantasi untuk menyerupai makhluk luar angkasa',
      'Tata rias modern untuk menyamarkan keringat penari',
      'Tata rias natural untuk meniru penampilan sehari-hari warga desa',
    ],
    1,
    [
      'Tata rias karakter (watak) bertujuan mengubah tampilan fisik wajah penari agar sesuai dengan watak, usia, atau status sosial tokoh yang diperankan (misalnya tokoh raksasa/antagonis yang garang dan bengis).',
    ],
  ),

  // Soal 11 (Jenis Tari - No. 11, C1)
  pg(
    11,
    5,
    'Dasar',
    'Tari Saman yang dibawakan secara kelompok berjajar rapat dengan keunikan gerak tepuk dada dan terpaan tangan yang serempak berasal dari daerah...',
    [
      'Gayo, Provinsi Aceh',
      'Minangkabau, Sumatra Barat',
      'Tapanuli, Sumatra Utara',
      'Palembang, Sumatra Selatan',
      'Banjarmasin, Kalimantan Selatan',
    ],
    0,
    [
      'Tari Saman adalah tarian tradisional suku Gayo di Provinsi Aceh yang telah diakui UNESCO sebagai Warisan Budaya Takbenda.',
      'Tarian ini dibawakan secara kelompok dengan posisi duduk bersimpuh dalam satu garis saf horizontal.',
    ],
  ),

  // Soal 12 (Jenis Tari - No. 12, C1)
  pg(
    12,
    5,
    'Dasar',
    'Contoh tari tradisional Nusantara yang dibawakan dalam bentuk penyajian tari tunggal (solo dance) adalah...',
    [
      'Tari Kecak dari Bali',
      'Tari Saman dari Aceh',
      'Tari Topeng Klana dari Cirebon / Yogyakarta',
      'Tari Piring massal dari Sumatra Barat',
      'Tari Tor-tor dari Sumatra Utara',
    ],
    2,
    [
      'Tari Topeng Klana merupakan salah satu contoh tari tunggal klasik yang sangat terkenal, menggambarkan dinamika watak raja Klana Sewandana yang gagah dan penuh emosi.',
      'Tari Kecak, Saman, dan Tor-tor dibawakan secara kelompok atau massal.',
    ],
  ),

  // Soal 13 (Jenis Tari - No. 13, C1)
  pg(
    13,
    5,
    'Dasar',
    'Bentuk penyajian tari yang dibawakan oleh dua orang penari yang saling melengkapi, saling merespons motif gerak, dan memiliki interaksi dialogis gerak disebut...',
    [
      'Tari tunggal (solo)',
      'Tari berpasangan (duet / pas de deux)',
      'Tari massal kolosal',
      'Tari flashmob',
      'Tari paduan suara',
    ],
    1,
    [
      'Tari berpasangan adalah bentuk penyajian tari yang dilakukan oleh dua orang penari (bisa pria-wanita, pria-pria, atau wanita-wanita) yang terikat dalam interaksi gerak saling mengisi dan berdialog secara koreografis.',
    ],
  ),

  // Soal 14 (Jenis Tari - No. 14, C1)
  pg(
    14,
    5,
    'Dasar',
    'Ciri utama dari bentuk penyajian tari kelompok (group dance) dalam seni pementasan tari adalah...',
    [
      'Hanya boleh ditarikan oleh penari tanpa iringan musik',
      'Menuntut koordinasi yang harmonis, kekompakan gerak, serta kerapian perpindahan pola lantai antarpenari',
      'Setiap penari bebas menentukan kostum dan tema sendiri-sendiri secara terpisah',
      'Penari tidak diperbolehkan saling memandang di atas panggung',
      'Hanya menampilkan satu level gerak tinggi secara statis',
    ],
    1,
    [
      'Tari kelompok melibatkan lebih dari dua penari sehingga menuntut kedisiplinan ruang gerak, kepekaan terhadap keseragaman tempo, serta formasi pola lantai yang rapi dan komunikatif.',
    ],
  ),

  // Soal 15 (Gerak Tari - No. 15, C1)
  pg(
    15,
    2,
    'Dasar',
    'Di bawah ini yang merupakan contoh konkret dari gerak maknawi dalam ragam gerak tari tradisional Jawa adalah...',
    [
      'Gerak ukel memutar pergelangan tangan semata untuk keindahan kelenturan',
      'Gerak kenser menggeser kedua telapak kaki ke samping',
      'Gerak nuding (menunjuk dengan jari telunjuk) yang melambangkan kemarahan atau perintah kekuasaan',
      'Gerak tancep berdiri tegak diam di tempat',
      'Gerak lumaksana melangkah maju biasa',
    ],
    2,
    [
      'Gerak nuding adalah gerak maknawi karena memiliki simbol atau makna penafsiran karakter, yaitu ekspresi kemarahan, kewibawaan, atau perintah.',
      'Sebaliknya, gerak ukel dan kenser merupakan gerak murni murni estetis.',
    ],
  ),

  // Soal 16 (Unsur Utama Tari - No. 16, C1)
  pg(
    16,
    6,
    'Dasar',
    'Tiga unsur utama dan hakiki yang mutlak harus dipadukan dalam seni tari agar tercipta karya yang bernilai estetis adalah...',
    [
      'Wiraga, Wirama, dan Wirasa',
      'Lukisan, Patung, dan Puisi',
      'Panggung, Lampu, dan Penjualan Tiket',
      'Kamera, Layar, dan Proyektor',
      'Vokal, Dialog, dan Monolog',
    ],
    0,
    [
      'Tiga unsur pokok dalam seni tari Nusantara adalah:\n1. Wiraga: keterampilan gerak tubuh dan postur raga\n2. Wirama: keselarasan gerak dengan irama/tempo musik\n3. Wirasa: penghayatan jiwa, emosi, dan ekspresi batin.',
    ],
  ),

  // Soal 17 (Unsur Utama Tari - No. 17, C2)
  pg(
    17,
    6,
    'Menengah',
    'Seorang juri lomba tari mengamati sikap tubuh penari, kelenturan persendian, ketepatan posisi jari tangan (nyempurit/ngrayung), dan kelincahan langkah kaki. Aspek yang sedang dinilai oleh juri tersebut berada pada ranah unsur...',
    [
      'Wirama',
      'Wiraga',
      'Wirasa',
      'Tata busana',
      'Manajemen panggung',
    ],
    1,
    [
      'Wiraga (raga) berkaitan langsung dengan keterampilan fisik ragawi penari, penguasaan teknik dasar gerak, kelenturan tubuh, kestabilan tumpuan, dan ketepatan bentuk sikap tubuh dari ujung kepala hingga ujung kaki.',
    ],
  ),

  // Soal 18 (Unsur Utama Tari - No. 18, C2)
  pg(
    18,
    6,
    'Menengah',
    'Penari mampu melakukan aksen gerak menghentak tepat saat bunyi gong atau ketukan kendang berbunyi, serta tidak pernah mendahului maupun tertinggal dari tempo iringan musik. Hal ini menunjukkan bahwa penari memiliki penguasaan yang sangat baik pada unsur...',
    [
      'Wiraga',
      'Wirama',
      'Wirasa',
      'Properti',
      'Tata lampu',
    ],
    1,
    [
      'Wirama (irama) adalah kepekaan penari dalam menyelaraskan gerak tubuh dengan ketukan tempo, ritme, aksentuasi, dan melodi pengiring musik tarian.',
    ],
  ),

  // Soal 19 (Unsur Utama Tari - No. 19, C2)
  pg(
    19,
    6,
    'Menengah',
    'Ketika membawakan tarian bertema kesedihan, penari mampu memancarkan sorot mata yang redup berduka, mimik wajah yang syahdu, dan gerak tarinya menyentuh perasaan penonton hingga terharu. Penari tersebut menunjukkan keunggulan pada unsur...',
    [
      'Wiraga',
      'Wirama',
      'Wirasa',
      'Pola lantai',
      'Ukuran panggung',
    ],
    2,
    [
      'Wirasa (rasa) adalah kemampuan penari dalam menghayati, menjiwai, dan mengekspresikan pesan batin, emosi kejiwaan, serta perwatakan tarian kepada penonton melalui ekspresi mimik dan kedalaman gerak.',
    ],
  ),

  // Soal 20 (Komposisi Tari - No. 20, C1)
  pg(
    20,
    7,
    'Dasar',
    'Garis lintasan imajiner di atas lantai pentas yang dilalui atau dibentuk oleh formasi para penari selama pementasan disebut...',
    [
      'Pola lantai',
      'Tata rias',
      'Setting dekorasi',
      'Level gerak',
      'Aksen tempo',
    ],
    0,
    [
      'Pola lantai (floor pattern) adalah formasi atau garis lintasan yang dilalui dan dibentuk oleh penari di atas lantai panggung, baik garis lurus maupun garis lengkung.',
    ],
  ),

  // Soal 21 (Tatarias dan Busana - No. 21, C2)
  pg(
    21,
    8,
    'Menengah',
    'Selain memberikan keindahan visual, fungsi tata busana (kostum) yang sangat penting dalam pementasan seni tari adalah...',
    [
      'Menutupi seluruh tubuh penari agar penari tidak dikenali identitas aslinya',
      'Memperjelas karakter tokoh, mencerminkan identitas budaya, serta mendukung keleluasaan penari dalam mengeksekusi teknik gerak',
      'Menggantikan peran lampu panggung saat terjadi pemadaman listrik',
      'Membuat bobot tubuh penari terasa lebih berat agar tidak mudah terdorong angin',
      'Menjadi tempat menempelkan daftar sponsor acara pertunjukan',
    ],
    1,
    [
      'Tata busana berfungsi memperjelas watak tokoh dan asal budaya tarian, menambah daya pesona estetis panggung, dan yang terpenting dirancang ergonomis agar tidak membatasi mobilitas ruang gerak fisik penari.',
    ],
  ),

  // Soal 22 (Tatarias dan Busana - No. 22, C2)
  pg(
    22,
    8,
    'Menengah',
    'Pemilihan warna tata rias dan kostum pada pementasan tari memiliki kaitan erat dengan karakter tokoh. Penggunaan dominasi warna merah menyala pada busana dan riasan penari biasanya menyimbolkan watak tokoh yang...',
    [
      'Luruh, pemalu, dan penuh kelembutan',
      'Agresif, gagah, berani, atau pemarah',
      'Suci, tenang, dan bijaksana',
      'Sedih, terlunta-lunta, dan putus asa',
      'Licik, penakut, dan suka bersembunyi',
    ],
    1,
    [
      'Dalam konvensi estetika seni pertunjukan Nusantara (seperti pada wayang orang), warna merah menyimbolkan sifat agresif, keberanian, amarah, atau watak gagah pongah tokoh antagonis/kesatria perkasa.',
    ],
  ),

  // Soal 23 (Properti dan panggung - No. 23, C1)
  pg(
    23,
    9,
    'Dasar',
    'Perlengkapan yang dimainkan langsung atau menjadi bagian tak terpisahkan dari gerak tubuh penari di atas pentas diklasifikasikan sebagai...',
    [
      'Setting panggung',
      'Properti tari',
      'Tata lampu (lighting)',
      'Sound system',
      'Gedung pertunjukan',
    ],
    1,
    [
      'Properti tari adalah segala macam peralatan atau perlengkapan yang digunakan, dipegang, atau dimainkan secara langsung oleh penari dalam menunjang perwujudan gerak (contoh: keris, kipas, piring, selendang/sampur, payung, panah).',
    ],
  ),

  // Soal 24 (Properti dan panggung - No. 24, C2)
  pg(
    24,
    9,
    'Menengah',
    'Pembeda yang jelas antara properti tari dengan dekorasi (setting) panggung dalam sebuah pementasan adalah...',
    [
      'Properti tari selalu terbuat dari kayu, sedangkan setting panggung dari kain',
      'Properti tari digunakan dan dimanipulasi gerak oleh penari, sedangkan setting panggung bersifat diam sebagai latar suasana ruang pementasan',
      'Properti tari hanya boleh dipakai penari wanita, sedangkan setting panggung untuk penari pria',
      'Setting panggung bernilai lebih murah dibandingkan properti tari',
      'Properti tari tidak boleh dibawa keluar dari gedung pementasan',
    ],
    1,
    [
      'Properti tari bersifat aktif dan bergerak bersama tubuh penari untuk memperkaya motif gerak. Setting/dekorasi panggung bersifat pasif statis yang dipasang di latar belakang panggung untuk menggambarkan tempat dan suasana peristiwa.',
    ],
  ),

  // Soal 25 (Properti dan panggung - No. 25, C1)
  pg(
    25,
    9,
    'Dasar',
    'Bentuk panggung pertunjukan yang memiliki bingkai panggung (proscenium arch) di mana arah pandang seluruh penonton berada di satu sisi tepat di depan panggung disebut...',
    [
      'Panggung proscenium',
      'Panggung arena melingkar',
      'Panggung tapal kuda (horseshoe)',
      'Panggung thrust',
      'Panggung amfiteater alam',
    ],
    0,
    [
      'Panggung proscenium (disebut juga panggung bingkai) menempatkan penonton hanya dari satu arah depan. Bingkai proscenium memisahkan secara tegas antara area ilusi pentas pemain dengan area tempat duduk penonton.',
    ],
  ),

  // Soal 26 (Properti dan panggung - No. 26, C2)
  pg(
    26,
    9,
    'Menengah',
    'Pementasan tari di panggung arena (arena stage) memiliki tantangan tersendiri bagi seorang penari karena...',
    [
      'Penari harus membawa lampu sorot sendiri di atas kepalanya',
      'Posisi penonton mengelilingi area pementasan dari berbagai sudut, sehingga penari harus mengatur orientasi hadap gerak agar tidak membelakangi penonton secara statis',
      'Tidak ada iringan musik yang boleh dibunyikan di panggung arena',
      'Penari dilarang berpindah pola lantai selama pementasan berlangsung',
      'Lantai panggung arena selalu dilapisi oleh pasir pantai',
    ],
    1,
    [
      'Panggung arena dikelilingi oleh penonton di sekeliling panggung (360 derajat atau 3 sisi).',
      'Oleh karena itu, penari dan koreografer harus memperhitungkan blocking dan arah hadap gerak yang dinamis ke segala penjuru agar seluruh penonton dapat menikmati sajian tari secara adil.',
    ],
  ),

  // Soal 27 (Rancangan Pertunjukan - No. 27, C1)
  pg(
    27,
    10,
    'Dasar',
    'Langkah awal paling fundamental dalam proses perancangan sebuah pagelaran karya seni tari adalah...',
    [
      'Mencetak tiket pertunjukan dan menyebarkan pamflet',
      'Menentukan tema karya tari dan membentuk kepanitiaan pementasan',
      'Menyewa gedung pertunjukan yang paling mahal di kota',
      'Membeli kostum dan tata rias impor dari luar negeri',
      'Mengundang dewan juri kehormatan internasional',
    ],
    1,
    [
      'Langkah awal perancangan pertunjukan tari dimulai dengan perumusan ide gagasan/tema karya dan pembentukan struktur panitia (tim artistik dan tim non-artistik/produksi) yang akan mengawal proses produksi hingga pementasan.',
    ],
  ),

  // Soal 28 (Rancangan Pertunjukan - No. 28, C2)
  pg(
    28,
    10,
    'Menengah',
    'Tahapan gladi bersih (dress rehearsal) dalam manajemen produksi pertunjukan tari diselenggarakan dengan tujuan utama untuk...',
    [
      'Membagi-bagikan konsumsi kepada seluruh penonton yang hadir',
      'Melakukan simulasi pementasan secara menyeluruh dengan kostum lengkap, riasan, pencahayaan, dan tata suara sesuai alur pementasan sebenarnya untuk memastikan kesiapan akhir',
      'Memilih kembali penari pengganti jika ada yang belum hafal gerakan',
      'Mengubah tema pertunjukan tari pada detik-detik terakhir sebelum dimulai',
      'Menghitung jumlah keuntungan penjualan tiket masuk pementasan',
    ],
    1,
    [
      'Gladi bersih merupakan latihan pemantapan puncak yang dilakukan persis menyerupai pementasan sesungguhnya (full dress, makeup, lighting, sound, blocking).',
      'Tujuannya adalah menguji kesiapan seluruh tim artistik dan panggung demi mengeliminasi potensi hambatan teknis saat pentas resmi.',
    ],
  ),

  // Soal 29 (Komposisi Tari - No. 29, C3)
  pg(
    29,
    7,
    'Lanjut',
    'Sebuah karya tari kelompok diawali dengan tempo lambat bertenaga lembut pada level rendah (duduk bersimpuh), kemudian perlahan bergerak berdiri menuju tempo cepat menghentak dengan lompatan level tinggi pada formasi diagonal. Pengolahan unsur tempo, tenaga, dan level gerak ini bertujuan untuk menciptakan...',
    [
      'Dinamika gerak tari yang memikat dan membangun klimaks dramatik pementasan',
      'Rasa kantuk bagi para penonton agar suasana menjadi hening',
      'Waktu jeda agar penari dapat minum di sela-sela formasi',
      'Pengurangan durasi pementasan tari agar cepat selesai',
      'Pemerataan panggung agar lantai tidak cepat aus',
    ],
    0,
    [
      'Dinamika gerak tari adalah wujud variasi tenaga (kuat-lemah), tempo (cepat-lambat), dan level ruang (tinggi-sedang-rendah) dalam sebuah rangkaian koreografi.',
      'Pengolahan dinamika mencegah kemonotonan tarian serta berfungsi membangun tangga dramatik menuju puncak/klimaks emosional karya seni.',
    ],
  ),

  // Soal 30 (Komposisi Tari - No. 30, C3)
  pg(
    30,
    7,
    'Lanjut',
    'Pada bagian babak peperangan, penari bergerak maju membentuk garis lurus diagonal tajam dengan langkah hentakan tegas. Di sisi lain, pada babak pemujaan spiritual, penari bergerak mengalir membentuk formasi lingkaran konsentris. Makna estetis dan psikologis dari pemilihan kedua pola lantai tersebut adalah...',
    [
      'Garis diagonal melambangkan ketenangan jiwa, sedangkan lingkaran melambangkan kemarahan membara',
      'Garis lurus diagonal memberi kesan dinamis, kokoh, dan agresif/tegas untuk suasana perang; sedangkan lingkaran memberi kesan kebulatan tekad, kesatuan magis, dan kelembutan sakral untuk pemujaan',
      'Garis diagonal dipilih karena panggung pertunjukan terlalu sempit untuk berputar',
      'Kedua pola lantai tersebut dipilih semata-mata karena mengikuti kebiasaan penari tanpa makna apa pun',
      'Pola lingkaran digunakan agar penari tidak pusing saat melompat tinggi',
    ],
    1,
    [
      'Pola lantai garis lurus (termasuk diagonal) memiliki impresi visual yang tegas, kuat, dinamis, dan terarah (cocok untuk adegan ketegangan perang/perjuangan).',
      'Pola lantai lingkaran melambangkan keutuhan kosmis, ikatan persaudaraan yang tak terputus, kelembutan, dan nuansa magis spiritual yang sakral.',
    ],
  ),

  // Soal Esai Seni Tari (Soal 31-35 / Essay 1-5)
  esai(
    31,
    6,
    'Menengah',
    'Sebutkan dan jelaskan secara lengkap 3 unsur utama yang mutlak ada dalam seni tari (Wiraga, Wirama, Wirasa) serta jelaskan bagaimana keterkaitan ketiganya dalam menciptakan keindahan tari.',
    'Tiga unsur utama tari adalah: (1) Wiraga (penguasaan teknik gerak dan sikap tubuh), (2) Wirama (keselarasan gerak dengan tempo/ritme musik), dan (3) Wirasa (penghayatan ekspresi emosi dan penjiwaan peran). Ketiganya harus berpadu utuh agar tarian bernyawa dan harmonis.',
    [
      'Wiraga: Merupakan kemampuan raga/fisik penari dalam menguasai ragam teknik gerak, ketepatan posisi tubuh (sikap tangan, kepala, torso, kaki), kelenturan, dan ketahanan fisik.',
      'Wirama: Merupakan kepekaan musikal penari dalam menyesuaikan gerak dengan ketukan tempo, ritme, aksen, dan melodi musik pengiring tarian.',
      'Wirasa: Merupakan kedalaman penghayatan batin dan kemampuan mengekspresikan karakter peran, suasana hati, dan emosi tarian lewat mimik wajah dan sorot mata.',
      'Keterpaduan: Ketiganya tidak dapat dipisahkan; penari yang lentur (Wiraga) namun salah ketukan (Wirama) akan timpang; penari yang tepat tempo namun tanpa ekspresi (Wirasa) akan menghasilkan tarian yang hampa.',
    ],
    [
      'Menyebutkan dan menjelaskan konsep Wiraga secara tepat.',
      'Menyebutkan dan menjelaskan konsep Wirama secara tepat.',
      'Menyebutkan dan menjelaskan konsep Wirasa secara tepat.',
      'Menganalisis keterkaitan dan integrasi harmonis ketiga unsur tersebut dalam pementasan.',
    ],
  ),

  esai(
    32,
    7,
    'Menengah',
    'Identifikasi dua kelompok besar pola lantai dalam seni tari (garis lurus dan garis lengkung), sebutkan turunan dari masing-masing pola lantai tersebut, serta jelaskan kesan psikologis/makna yang ditimbulkannya.',
    'Pola lantai terbagi menjadi garis lurus (turunan: horizontal, vertikal, diagonal) yang memberi kesan tegas, kokoh, dan formal; serta garis lengkung (turunan: lingkaran, setengah lingkaran, angka 8) yang memberi kesan lembut, manis, dinamis, dan magis.',
    [
      'Pola Garis Lurus: Bentuk dasar garis lurus memiliki turunan formasi horizontal (sejajar ke samping), vertikal (berjajar ke depan-belakang), dan diagonal (menyudut serong).',
      'Kesan Garis Lurus: Menimbulkan kesan psikologis yang tegas, kuat, sederhana, formal, kokoh, dan berwibawa.',
      'Pola Garis Lengkung: Bentuk dasar garis lengkung memiliki turunan formasi lingkaran, setengah lingkaran, lengkung ular (zigzag lengkung), dan formasi angka 8.',
      'Kesan Garis Lengkung: Menimbulkan kesan psikologis yang lembut, luwes, manis, fleksibel, mengalir, dan bernuansa magis/spiritual.',
    ],
    [
      'Mengidentifikasi pola lantai garis lurus beserta 3 bentuk turunannya.',
      'Menjelaskan kesan psikologis/makna dari pola lantai garis lurus.',
      'Mengidentifikasi pola lantai garis lengkung beserta 3 bentuk turunannya.',
      'Menjelaskan kesan psikologis/makna dari pola lantai garis lengkung.',
    ],
  ),

  esai(
    33,
    7,
    'Lanjut',
    'Jelaskan pengertian komposisi tari dan uraikan 4 elemen penting pembentuk komposisi tari dalam merancang sebuah karya koreografi.',
    'Komposisi tari adalah seni menata dan merangkai motif-motif gerak tari menjadi satu kesatuan karya pementasan yang utuh dan bernilai estetis. Empat elemen utamanya meliputi desain gerak, desain lantai/ruang, dinamika tempo/tenaga, dan desain musik iringan.',
    [
      'Pengertian Komposisi Tari: Seni menata, merangkai, dan mengorganisasi elemen-elemen gerak, ruang, waktu, dan tenaga ke dalam satu kesatuan struktur pertunjukan yang harmonis.',
      'Elemen 1 - Desain Gerak: Penataan motif gerak tubuh penari (desain datar, desain dalam, desain vertikal, desain asimetris) yang diselaraskan dengan tema.',
      'Elemen 2 - Desain Lantai (Floor Design): Pengolahan formasi dan lintasan penari (pola lantai lurus dan lengkung) dalam memanfaatkan ruang panggung.',
      'Elemen 3 - Dinamika (Desain Waktu & Tenaga): Pengaturan variasi cepat-lambatnya tempo gerak, kuat-lembutnya tenaga, serta tinggi-rendahnya level gerak untuk membangun klimaks.',
      'Elemen 4 - Desain Musik (Iringan): Keselarasan pola ritme, melodi, dan aksen bunyi musik dengan dinamika gerak penari di atas pentas.',
    ],
    [
      'Menjelaskan definisi komposisi tari secara komprehensif.',
      'Menguraikan elemen desain gerak dan desain lantai secara terperinci.',
      'Menguraikan elemen dinamika (tenaga, waktu/tempo, level) secara terperinci.',
      'Menguraikan peran desain musik iringan atau desain dramatik dalam komposisi.',
    ],
  ),

  esai(
    34,
    1,
    'Menengah',
    'Identifikasi dan jelaskan 3 fungsi utama seni tari dalam kehidupan masyarakat tradisional dan modern, serta berikan masing-masing satu contoh tariannya dari Nusantara.',
    'Tiga fungsi utama tari dalam kehidupan masyarakat adalah: (1) Sebagai sarana upacara ritual adat/keagamaan (contoh: Tari Sanghyang di Bali atau Tari Bedhaya Ketawang di Jawa); (2) Sebagai sarana hiburan dan pergaulan sosial (contoh: Tari Jaipong di Jawa Barat atau Tari Tayub); (3) Sebagai sarana pertunjukan estetis/tontonan seni (contoh: Sendratari Ramayana Prambanan).',
    [
      'Fungsi 1 - Sarana Upacara Ritual/Keagamaan: Tarian berfungsi sakral sebagai media persembahan kepada leluhur atau Tuhan, memiliki aturan waktu/tempat tertentu, dan penarinya harus suci/khusus. Contoh: Tari Sanghyang Dedari (Bali), Tari Bedhaya Ketawang (Keraton Surakarta), Tari Seblang (Banyuwangi).',
      'Fungsi 2 - Sarana Hiburan & Pergaulan: Tarian berfungsi memberikan kegembiraan, rekreasi, dan mempererat tali keakraban sosial antarwarga tanpa terikat aturan sakral. Contoh: Tari Jaipong (Sunda), Tari Tayub (Jawa Tengah), Tari Gandrung (Banyuwangi), Tari Poco-poco.',
      'Fungsi 3 - Sarana Pertunjukan Estetis (Tontonan): Tarian yang digarap secara artistik dan profesional untuk dinikmati keindahannya oleh penonton, wisatawan, atau dewan festival seni. Contoh: Sendratari Ramayana Prambanan, Tari Saman panggung, Tari Legong pementasan.',
    ],
    [
      'Menjelaskan fungsi tari sebagai sarana upacara ritual beserta contoh tarian yang valid.',
      'Menjelaskan fungsi tari sebagai sarana hiburan/pergaulan beserta contoh tarian yang valid.',
      'Menjelaskan fungsi tari sebagai sarana tontonan pertunjukan estetis beserta contoh tarian yang valid.',
      'Menganalisis perbedaan karakteristik penikmat dan tujuan dari ketiga fungsi tersebut.',
    ],
  ),

  esai(
    35,
    5,
    'Menengah',
    'Musik dan tari merupakan dwitunggal yang tidak dapat dipisahkan. Jelaskan perbedaan mendasar antara musik pengiring internal dan musik pengiring eksternal dalam seni tari, serta berikan masing-masing 2 contoh konkretnya.',
    'Musik internal adalah bunyi iringan yang dihasilkan langsung dari tubuh penari itu sendiri (contoh: tepukan dada dan paha pada Tari Saman, suara vokal "cak" pada Tari Kecak). Musik eksternal adalah bunyi iringan yang dihasilkan dari alat musik instrumen atau rekaman di luar tubuh penari (contoh: gamelan pengiring Tari Jawa/Bali, musik orkes Melayu pada Tari Zapin).',
    [
      'Musik Internal: Iringan tari yang suaranya bersumber langsung dari anggota badan penari itu sendiri, seperti tepukan telapak tangan, tepuk dada/paha, hentakan kaki pada lantai, jentikan jari, maupun suara vokal nyanyian/seruan dari mulut penari.',
      'Contoh Musik Internal: (1) Tepuk dada, tepuk tangan, dan nyanyian pada Tari Saman (Aceh); (2) Seruan suara vokal paduan suara penari "cak-cak-cak" pada Tari Kecak (Bali); (3) Hentakan kaki gemerincing gongseng pada Tari Remo.',
      'Musik Eksternal: Iringan tari yang bunyinya dihasilkan dari luar tubuh penari, yaitu melalui alat musik instrumen yang dimainkan oleh kelompok pengrawit/musisi atau menggunakan pemutar rekaman audio.',
      'Contoh Musik Eksternal: (1) Seperangkat gamelan Jawa/Sunda/Bali yang mengiringi tarian klasik; (2) Tabuhan kendang dan akordeon pada Tari Zapin Melayu; (3) Tabuhan rebana pada Tari Saman modern atau ensambel musik talempong Minang.',
    ],
    [
      'Menjelaskan definisi dan mekanisme musik pengiring internal secara tepat.',
      'Memberikan minimal 2 contoh konkret penerapan musik internal pada tarian Nusantara.',
      'Menjelaskan definisi dan mekanisme musik pengiring eksternal secara tepat.',
      'Memberikan minimal 2 contoh konkret instrumen musik eksternal pada tarian Nusantara.',
    ],
  ),
]
