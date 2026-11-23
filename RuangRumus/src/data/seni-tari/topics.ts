import type { Topic } from '../../lib/types'

export const topics: Topic[] = [
  {
    id: 1,
    title: 'Karakteristik Tari Tradisional dan Kreasi',
    short: 'Karakteristik Tari',
    group: 'Konsep Dasar Tari',
    intro:
      'Tari tradisional memiliki aturan baku (pakem) yang diwariskan turun-temurun, terbagi menjadi tari klasik istana dan tari rakyat. Sebaliknya, tari kreasi baru merupakan pengembangan ekspresif yang memadukan unsur tradisional dengan inovasi gerak kontemporer.',
    formulas: [
      {
        label: 'Tari Tradisional vs Tari Kreasi',
        math: '\\text{Tari Tradisi (Pakem Baku)} \\longleftrightarrow \\text{Tari Kreasi (Inovasi & Eksplorasi)}',
        note: 'Tari tradisi menjaga pakem warisan; tari kreasi memberi kebebasan koreografi baru.',
      },
      {
        label: 'Klasifikasi Tradisi',
        math: '\\text{Tari Klasik (Keraton/Baku)} \\quad \\text{vs} \\quad \\text{Tari Rakyat (Spontan/Komunal)}',
        note: 'Pembeda gaya gerak luhur istana dengan gerak sederhana bersahaja masyarakat agraris.',
      },
    ],
    tip: 'Tari klasik (misal Bedhaya, Legong) menekankan estetika halus dan pakem ketat; tari rakyat (misal Jaipong, Tayub) menonjolkan spontanitas dan kebersamaan pergaulan.',
    example: {
      prompt:
        'Sebutkan 3 perbedaan mendasar antara tari tradisional klasik dengan tari kreasi baru.',
      steps: [
        'Keterikatan Aturan: Tari tradisional klasik terikat pada pakem gerak, busana, dan iringan yang baku. Tari kreasi baru tidak terikat pakem ketat dan terbuka terhadap eksperimen gerak modern.',
        'Latar Belakang Penciptaan: Tari klasik lahir di lingkungan istana/keraton untuk upacara sakral atau kebesaran raja. Tari kreasi diciptakan oleh koreografer modern untuk memenuhi kebutuhan panggung tontonan estetis kontemporer.',
        'Sifat Komposisi: Tari klasik bersifat statis-lestari demi menjaga kemurnian tradisi; tari kreasi bersifat dinamis dan terus berkembang mengikuti perkembangan zaman.',
      ],
      answer:
        'Perbedaan terletak pada keterikatan pakem gerak, asal mula lingkungan penciptaan, dan kebebasan inovasi koreografi.',
    },
  },
  {
    id: 2,
    title: 'Gerak Tari: Gerak Murni dan Gerak Maknawi',
    short: 'Gerak Tari',
    group: 'Eksplorasi Gerak',
    intro:
      'Gerak adalah media pokok seni tari. Gerak tari dibedakan menjadi gerak murni (gerak estetis tanpa pesan tertentu) dan gerak maknawi (gerak yang memiliki arti simbolis meniru aktivitas manusia atau perilaku alam).',
    formulas: [
      {
        label: 'Dua Kategori Gerak',
        math: '\\text{Gerak Murni (Estetis Murni)} \\quad \\text{vs} \\quad \\text{Gerak Maknawi (Simbolis/Bermakna)}',
        note: 'Gerak murni mengutamakan keindahan visual; gerak maknawi menyampaikan pesan pesan narasi.',
      },
      {
        label: 'Turunan Gerak Maknawi',
        math: '\\text{Gerak Imitatif (Meniru Alam/Fauna)} + \\text{Gerak Mimitif (Meniru Perilaku Manusia)}',
        note: 'Contoh: gerak burung merak terbang (imitatif) vs gerak bersolek/menenun (mimitif).',
      },
    ],
    tip: 'Contoh gerak murni: ukel (memutar pergelangan tangan), kenser (geser kaki). Contoh gerak maknawi: ulap-ulap (melihat kejauhan), nuding (marah/menunjuk).',
    example: {
      prompt:
        'Dalam tari Jawa, penari melakukan gerak "ulap-ulap" dengan melengkungkan telapak tangan di atas alis sambil memandang ke depan. Jelaskan jenis gerak dan maknanya.',
      steps: [
        'Gerak ulap-ulap dikategorikan sebagai gerak maknawi.',
        'Gerak ini bukan sekadar pemanis gerak tubuh, melainkan memiliki makna simbolis tertentu.',
        'Makna simbolisnya adalah menatap atau memandang ke arah kejauhan, mencari sesuatu, atau mengamati keadaan sekitar.',
      ],
      answer:
        'Gerak ulap-ulap adalah gerak maknawi yang menyimbolkan tindakan memandang atau melihat sasaran di kejauhan.',
    },
  },
  {
    id: 3,
    title: 'Ide dan Tema Tari',
    short: 'Ide & Tema Tari',
    group: 'Perancangan Karya',
    intro:
      'Tema adalah gagasan pokok atau landasan pikiran yang melandasi suatu karya tari. Penentuan tema harus mempertimbangkan daya tarik, nilai estetis, komunikatif bagi penonton, serta kemampuan fisik penari.',
    formulas: [
      {
        label: 'Sumber Gagasan Tema',
        math: '\\text{Literer (Cerita/Babad)} + \\text{Non-Literer (Fenomena Alam/Sosial)}',
        note: 'Tema dapat bersumber dari cerita Ramayana/Mahabharata maupun fenomena kehidupan sehari-hari.',
      },
      {
        label: 'Syarat Tema Efektif',
        math: '\\text{Dapat Ditarikan} + \\text{Memiliki Nilai Estetis} + \\text{Komunikatif ke Penonton}',
        note: 'Koreografer harus mampu menerjemahkan tema abstrak menjadi motif gerak raga yang nyata.',
      },
    ],
    tip: 'Tema yang baik bukan hanya bagus di atas kertas, tetapi harus dapat diwujudkan menjadi rangkaian gerak ragawi (dapat ditarikan).',
    example: {
      prompt:
        'Mengapa dalam proses koreografi, seorang penata tari harus memastikan bahwa tema yang dipilih memenuhi syarat "dapat ditarikan"?',
      steps: [
        'Seni tari memiliki media ekspresi utama berupa gerak tubuh manusia di dalam ruang dan waktu.',
        'Jika suatu tema terlalu abstrak dan tidak dapat diterjemahkan menjadi motif gerak tubuh yang estetis, pesan tari tidak akan tersampaikan.',
        'Syarat "dapat ditarikan" memastikan ide cerita dapat dieksekusi secara teknis dan estetis oleh kemampuan anatomi penari.',
      ],
      answer:
        'Karena media utama tari adalah gerak tubuh; ide tema harus dapat diterjemahkan menjadi motif gerak ragawi yang komunikatif.',
    },
  },
  {
    id: 4,
    title: 'Rangsang Tari (Stimulus Koreografi)',
    short: 'Rangsang Tari',
    group: 'Eksplorasi Gerak',
    intro:
      'Rangsang tari adalah stimulus awal yang membangkitkan imajinasi koreografer untuk mengeksplorasi gerak. Bentuk rangsang meliputi auditif (suara/musik), visual (benda/pemandangan), ideatif (gagasan filosofis), kinestetik (pola gerak tubuh), dan peraba.',
    formulas: [
      {
        label: 'Ragam Rangsang Koreografi',
        math: '\\text{Auditif (Dengar)} + \\text{Visual (Lihat)} + \\text{Ideatif (Gagasan)} + \\text{Kinestetik (Gerak)}',
        note: 'Pintu masuk munculnya inspirasi motif gerak tarian baru.',
      },
    ],
    tip: 'Mendengar deburan ombak laut adalah rangsang auditif; mengamati relief candi Borobudur adalah rangsang visual; merenungi tema perjuangan emansipasi adalah rangsang ideatif.',
    example: {
      prompt:
        'Koreografer mengamati lukisan petani membajak sawah lalu terinspirasi menciptakan karya tari panen. Rangsang apakah yang mendasari proses tersebut?',
      steps: [
        'Koreografer memperoleh inspirasi awal melalui pengamatan indra penglihatan terhadap media gambar/lukisan.',
        'Stimulus yang ditangkap melalui indra mata (lukisan, patung, bentuk relief, atau pemandangan alam) diklasifikasikan sebagai rangsang visual.',
        'Koreografer kemudian mengolah tangkapan visual tersebut ke dalam eksplorasi gerak membajak sawah dan menanam padi.',
      ],
      answer:
        'Proses tersebut berakar dari rangsang visual (stimulus melalui tangkapan visual objek lukisan).',
    },
  },
  {
    id: 5,
    title: 'Jenis dan Bentuk Penyajian Tari',
    short: 'Bentuk Penyajian',
    group: 'Pementasan Tari',
    intro:
      'Berdasarkan jumlah penari dan susunan koreografinya, tari disajikan dalam bentuk tari tunggal (solo), berpasangan (duet/pas de deux), kelompok (group dance), dan tari massal dengan koordinasi ruang yang terstruktur.',
    formulas: [
      {
        label: 'Klasifikasi Jumlah Penari',
        math: '\\text{Tunggal (1)} \\rightarrow \\text{Berpasangan (2)} \\rightarrow \\text{Kelompok (3--10)} \\rightarrow \\text{Massal (>10)}',
        note: 'Setiap bentuk penyajian menuntut penguasaan ruang panggung dan kepekaan musikal yang berbeda.',
      },
    ],
    tip: 'Tari berpasangan menuntut interaksi dan saling merespons antarpenari; tari kelompok menekankan kekompakan dan harmoni pola lantai.',
    example: {
      prompt:
        'Sebutkan karakteristik utama tari tunggal (solo dance) dan sebutkan dua contoh tariannya dari Nusantara.',
      steps: [
        'Tari tunggal dibawakan oleh seorang penari yang dituntut memiliki penguasaan teknik gerak, kematangan karakter peran, dan rasa percaya diri tinggi di atas panggung.',
        'Seluruh fokus perhatian penonton tertuju pada satu individu penari.',
        'Contoh tari tunggal Nusantara: Tari Topeng Klana (Cirebon/Yogyakarta) dan Tari Gatotkaca Gandrung (Jawa Tengah).',
      ],
      answer:
        'Tari tunggal dibawakan satu orang dengan penjiwaan karakter mandiri penuh. Contoh: Tari Topeng Klana dan Tari Gatotkaca Gandrung.',
    },
  },
  {
    id: 6,
    title: 'Unsur Utama Tari: Wiraga, Wirama, Wirasa',
    short: 'Unsur Utama Tari',
    group: 'Konsep Dasar Tari',
    intro:
      'Tiga serangkai unsur mutlak dalam seni tari adalah Wiraga (keterampilan ragawi fisik), Wirama (kepekaan terhadap tempo dan ritme musik), dan Wirasa (penghayatan rasa dan ekspresi kejiwaan karakter).',
    formulas: [
      {
        label: 'Trias Harmoni Tari',
        math: '\\text{Wiraga (Raga/Teknik)} + \\text{Wirama (Irama/Tempo)} + \\text{Wirasa (Rasa/Penjiwaan)} = \\text{Kesempurnaan Estetis}',
        note: 'Ketiganya harus berpadu secara utuh agar tarian bernyawa dan memikat penonton.',
      },
    ],
    tip: 'Wiraga berkaitan dengan postur dan kelenturan tubuh; Wirama berkaitan dengan ketukan nada iringan; Wirasa berkaitan dengan sorot mata dan kedalaman ekspresi batin.',
    example: {
      prompt:
        'Jelaskan apa yang terjadi jika seorang penari memiliki Wiraga yang sangat lentur namun lemah dalam Wirama.',
      steps: [
        'Penari mampu melakukan teknik gerak sulit dan sikap tubuh yang anggun (Wiraga baik).',
        'Namun karena lemah dalam Wirama, penari sering terlambat atau mendahului ketukan musik kendang/gamelan.',
        'Akibatnya, harmoni antara alunan iringan musik dan dinamika gerak penari menjadi timpang dan terlihat canggung bagi penonton.',
      ],
      answer:
        'Tarian akan kehilangan ketepatan tempo dan aksen musikal, sehingga keindahan gerak tidak berpadu serasi dengan musik pengiring.',
    },
  },
  {
    id: 7,
    title: 'Komposisi Tari: Pola Lantai dan Dinamika Gerak',
    short: 'Pola Lantai & Dinamika',
    group: 'Koreografi Panggung',
    intro:
      'Pola lantai adalah garis lintasan yang dilalui penari di atas pentas, terbagi atas garis lurus (kesan tegas, kokoh, resmi) dan garis lengkung (kesan lembut, magis, dinamis). Dinamika gerak mengatur intensitas kuat-lemah dan cepat-lambat gerak.',
    formulas: [
      {
        label: 'Dua Poros Pola Lantai',
        math: '\\text{Garis Lurus (Horizontal, Vertikal, Diagonal)} \\; \\text{vs} \\; \\text{Garis Lengkung (Lingkaran, Angka 8)}',
        note: 'Garis lurus memberi efek tegas dan teratur; garis lengkung memberi efek mengalir dan sakral.',
      },
      {
        label: 'Dinamika Koreografi',
        math: '\\text{Tempo (Cepat--Lambat)} + \\text{Tenaga (Kuat--Lembut)} + \\text{Level (Tinggi, Sedang, Rendah)}',
        note: 'Kombinasi yang mencegah kebosanan dan membangun klimaks dramatis tarian.',
      },
    ],
    tip: 'Pola lantai horizontal melambangkan hubungan antarsesama manusia (kesetaraan, seperti tari Saman); pola lengkung lingkaran melambangkan kebulatan tekad dan hubungan magis spiritual.',
    example: {
      prompt:
        'Apa kesan psikologis yang ditimbulkan oleh pola lantai garis lurus dibandingkan dengan pola lantai garis lengkung?',
      steps: [
        'Pola lantai garis lurus (horizontal, vertikal, diagonal) memberikan kesan tegas, kuat, teratur, sederhana, dan formal/resmi.',
        'Sebaliknya, pola lantai garis lengkung (lingkaran, setengah lingkaran, spiral, angka 8) memberikan kesan lembut, manis, luwes, dan magis/sakral.',
        'Koreografer memadukan keduanya untuk membangun variasi emosi dalam sebuah pementasan.',
      ],
      answer:
        'Garis lurus memberikan kesan tegas, kokoh, dan formal; garis lengkung memberikan kesan lembut, luwes, dan magis.',
    },
  },
  {
    id: 8,
    title: 'Tata Rias dan Tata Busana Tari',
    short: 'Rias & Busana',
    group: 'Pendukung Panggung',
    intro:
      'Tata rias (make-up) dan tata busana (kostum) berfungsi mempertegas karakter tokoh (rias watak/karakter), menonjolkan ekspresi wajah penari di bawah tata lampu, serta mencerminkan latar belakang budaya dan status sosial tarian.',
    formulas: [
      {
        label: 'Fungsi Tata Rias & Busana',
        math: '\\text{Karakter Tokoh} + \\text{Estetika Panggung} + \\text{Kenyamanan Gerak} + \\text{Identitas Budaya}',
        note: 'Menghidupkan peran penari sekaligus memikat indra visual penonton.',
      },
    ],
    tip: 'Rias korektif menyempurnakan bentuk wajah asli; rias karakter mengubah wajah penari sesuai watak peran (misal rias tokoh raksasa yang seram dengan taring dan warna merah).',
    example: {
      prompt:
        'Mengapa tata busana seorang penari harus selalu mempertimbangkan unsur "keleluasaan gerak" selain aspek keindahan?',
      steps: [
        'Penari membutuhkan ruang artikulasi fisik maksimal untuk melakukan lompatan, putaran tubuh, level rendah/jongkok, dan rentangan tangan.',
        'Jika busana terlalu sempit, terlalu berat, atau aksesorisnya mudah lepas, mobilitas fisik penari akan terhambat dan berisiko mencelakai penari.',
        'Kenyamanan busana menjamin penari dapat mengeksekusi teknik gerak (Wiraga) dengan optimal dan percaya diri.',
      ],
      answer:
        'Agar penari dapat melakukan berbagai rentang teknik gerak secara leluasa, aman, dan tanpa terhambat beban kostum.',
    },
  },
  {
    id: 9,
    title: 'Properti Tari dan Tata Panggung',
    short: 'Properti & Panggung',
    group: 'Pendukung Panggung',
    intro:
      'Properti adalah perlengkapan yang digunakan dan dimainkan penari di atas pentas (kipas, selendang, piring, keris). Bentuk panggung pertunjukan meliputi panggung proscenium (satu arah hadap), panggung arena (dikelilingi penonton), dan panggung terbuka/tapal kuda.',
    formulas: [
      {
        label: 'Properti vs Setting',
        math: '\\text{Properti (Dimainkan Penari)} \\quad \\text{vs} \\quad \\text{Setting Panggung (Dekorasi Diam Ruang)}',
        note: 'Properti menjadi kepanjangan tubuh penari dalam mengekspresikan gerak.',
      },
      {
        label: 'Jenis Panggung Utama',
        math: '\\text{Proscenium (Bingkai Depan)} \\quad \\text{vs} \\quad \\text{Arena (Dikelilingi Penonton 360}^{\\circ}\\text{)}',
        note: 'Panggung arena mengharuskan penari memperhitungkan pandangan penonton dari segala sudut.',
      },
    ],
    tip: 'Selendang/sampur yang dimainkan penari adalah properti; backdrop lukisan gunung di belakang panggung adalah dekorasi/setting.',
    example: {
      prompt:
        'Apa perbedaan mendasar antara panggung proscenium dengan panggung arena dalam pementasan seni tari?',
      steps: [
        'Panggung Proscenium memiliki bingkai pembatas (proscenium arch) di mana posisi penonton berada tepat di satu arah menghadap bagian depan panggung.',
        'Panggung Arena adalah pentas terbuka di mana posisi penonton duduk melingkari area pementasan dari segala sisi (atau tiga sisi).',
        'Penari di panggung arena harus mengatur orientasi gerak ke berbagai sudut pandang penonton agar tidak membelakangi mereka terlalu lama.',
      ],
      answer:
        'Panggung proscenium berorientasi satu arah depan berbingkai, sedangkan panggung arena dikelilingi penonton dari segala penjuru.',
    },
  },
  {
    id: 10,
    title: 'Rancangan dan Manajemen Pertunjukan Tari',
    short: 'Rancangan Pertunjukan',
    group: 'Produksi Seni',
    intro:
      'Perencanaan pertunjukan tari mencakup penentuan tema, penyusunan kepanitiaan produksi dan artistik, penyusunan jadwal latihan, rancangan panggung, hingga gladi kotor dan gladi bersih (dress rehearsal) demi suksesnya pementasan.',
    formulas: [
      {
        label: 'Dua Sayap Kepanitiaan',
        math: '\\text{Tim Artistik (Sutradara, Koreografer, Pemusik)} + \\text{Tim Non-Artistik (Produksi, Humas, Logistik)}',
        note: 'Sinergi mutlak antara perancang karya seni dan pengelola teknis operasional acara.',
      },
      {
        label: 'Tahapan Akhir Produksi',
        math: '\\text{Latihan Rutin} \\longrightarrow \\text{Gladi Kotor (Blocking/Teknis)} \\longrightarrow \\text{Gladi Bersih (Full Kostum/Lighting)}',
        note: 'Simulasi final yang menyerupai kondisi pementasan sesungguhnya.',
      },
    ],
    tip: 'Gladi bersih (dress rehearsal) adalah latihan pemantapan terakhir menggunakan kostum lengkap, riasan, properti, tata lampu, dan musik iringan.',
    example: {
      prompt:
        'Mengapa pelaksanaan gladi bersih (dress rehearsal) sangat krusial sebelum pementasan karya tari digelar di hadapan penonton?',
      steps: [
        'Gladi bersih merupakan simulasi pementasan yang dilakukan persis sesuai rundown pertunjukan sebenarnya dengan tata lampu, tata suara, dan kostum lengkap.',
        'Menjadi sarana memeriksa kesiapan teknis seperti pergantian busana (quick change), tata letak properti panggung, dan adaptasi penari terhadap pencahayaan panggung.',
        'Mengurangi risiko kesalahan tak terduga saat pementasan sesungguhnya di hadapan dewan juri atau khalayak umum.',
      ],
      answer:
        'Gladi bersih menguji kesiapan utuh (kostum, lampu, musik, blocking) untuk mencegah kendala teknis pada hari pementasan.',
    },
  },
]
