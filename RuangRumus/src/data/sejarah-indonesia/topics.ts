import type { Topic } from '../../lib/types'

export const topics: Topic[] = [
  {
    id: 1,
    title: 'Kedatangan Bangsa Barat ke Nusantara',
    short: 'Kedatangan Bangsa Barat',
    group: 'Penjelajahan Samudra',
    intro:
      'Jatuhnya Konstantinopel pada tahun 1453 mendorong bangsa Eropa mengarungi samudra mencari kepulauan rempah. Penjelajahan didorong motivasi 3G (Gold, Glory, Gospel) dan diatur oleh Perjanjian Tordesillas serta Saragosa.',
    formulas: [
      {
        label: 'Semboyan 3G',
        math: 'Gold \\; (Kekayaan) \\cdot Glory \\; (Kejayaan) \\cdot Gospel \\; (Penyebaran Agama)',
        note: 'Tiga pilar pendorong imperialisme kuno bangsa Eropa di Nusantara.',
      },
      {
        label: 'Perjanjian Pembagian Dunia',
        math: 'Tordesillas \\; (1494) \\rightarrow Saragosa \\; (1529)',
        note: 'Batas meridian timur-barat Spanyol dan Portugis yang berujung penetapan Maluku bagi Portugis.',
      },
    ],
    tip: 'Ingat urutan ekspedisi: Bartholomeus Diaz mencapai Tanjung Harapan (1488), Vasco da Gama mencapai India (1498), Alfonso de Albuquerque merebut Malaka (1511), dan Cornelis de Houtman tiba di Banten (1596).',
    example: {
      prompt:
        'Jelaskan mengapa penaklukan Konstantinopel oleh Kesultanan Turki Utsmani pada tahun 1453 menjadi titik tolak bangsa Barat mencari jalur rempah langsung ke Nusantara.',
      steps: [
        'Konstantinopel merupakan gerbang dan pusat transit perdagangan rempah antara pedagang Asia dan pedagang Eropa di kawasan Laut Tengah.',
        'Setelah jatuh ke tangan Sultan Mehmed II (Turki Utsmani), jalur perdagangan ditutup atau dikenakan pajak tinggi bagi pedagang Kristen Eropa, sehingga pasokan rempah menjadi sangat langka dan mahal.',
        'Kondisi tersebut mendesak bangsa Portugis dan Spanyol merintis pelayaran samudra menelusuri rute selatan guna menemukan langsung kepulauan penghasil rempah di Kepulauan Nusantara.',
      ],
      answer:
        'Penutupan akses dagang dan pengenaan pajak tinggi di Konstantinopel memaksa bangsa Barat mencari sumber rempah langsung lewat jalur laut samudra.',
    },
  },
  {
    id: 2,
    title: 'Kongsi Dagang VOC (1602–1799)',
    short: 'Kongsi Dagang VOC',
    group: 'Monopoli Kolonial',
    intro:
      'Vereenigde Oostindische Compagnie (VOC) dibentuk pada 1602 untuk mencegah persaingan antarpedagang Belanda dan menandingi kongsi dagang Inggris (EIC). Parlemen Belanda menganugerahkan Hak Oktroi (hak istimewa kepemerintahan).',
    formulas: [
      {
        label: 'Hak Oktroi VOC',
        math: 'Oktroi = Monopoli + Mata Uang + Angkatan Perang + Benteng + Perjanjian Damai/Perang',
        note: 'Hak istimewa yang menjadikan kongsi dagang VOC bertindak layaknya sebuah negara berdaulat.',
      },
      {
        label: 'Instrumen Monopoli Rempah',
        math: 'Hongitochten \\; (Patroli) + Ekstirpasi \\; (Penebangan Pohon)',
        note: 'Pelayaran patroli kora-kora bersenjata dan pemusnahan cengkih/pala demi mengendalikan stabilitas kuota dan harga pasar.',
      },
    ],
    tip: 'Singkatan pelesetan rakyat terhadap VOC adalah Vergaan Onder Corruptie (runtuh karena korupsi), yang resmi dibubarkan pemerintah Belanda pada 31 Desember 1799.',
    example: {
      prompt:
        'Sebutkan dua instrumen utama yang digunakan VOC untuk mempertahankan monopoli perdagangan rempah di Kepulauan Maluku beserta tujuannya.',
      steps: [
        'Instrumen pertama adalah Pelayaran Hongi (Hongitochten), yaitu patroli armada laut kora-kora untuk mengawasi perdagangan gelap (penyelundupan) rempah oleh pedagang lokal atau bangsa asing.',
        'Instrumen kedua adalah Hak Ekstirpasi, yaitu hak VOC menebang dan memusnahkan kelebihan tanaman cengkih dan pala di kebun rakyat.',
        'Tujuannya adalah mengendalikan suplai rempah agar tidak terjadi kelebihan pasokan, sehingga harga jual komoditas di pasar Eropa tetap tinggi dan stabil.',
      ],
      answer:
        'Instrumennya adalah Pelayaran Hongi (patroli pencegah penyelundupan) dan Hak Ekstirpasi (penebangan pohon rempah demi stabilitas harga).',
    },
  },
  {
    id: 3,
    title: 'Pemerintahan Daendels dan Raffles',
    short: 'Daendels & Raffles',
    group: 'Transisi Kekuasaan',
    intro:
      'Pasca-kebangkrutan VOC, Pulau Jawa dipimpin Herman Willem Daendels (1808–1811) di bawah Republik Bataaf/Prancis yang membangun Jalan Raya Pos Anyer–Panarukan. Setelah Kapitulasi Tuntang 1811, Thomas Stamford Raffles memimpin dengan memperkenalkan sistem sewa tanah (landrent).',
    formulas: [
      {
        label: 'Proyek Daendels',
        math: 'Grote Postweg \\; (1.000 \\; \\text{km}) = Anyer \\rightarrow Panarukan',
        note: 'Jalan raya pertahanan militer dan pos surat yang dibangun dengan kerja paksa (rodi).',
      },
      {
        label: 'Sistem Sewa Tanah Raffles',
        math: 'Landrent System \\rightarrow \\text{Tanah adalah milik pemerintah/raja, petani menyewa}',
        note: 'Pajak tanah dibayar berdasarkan kesuburan tanah, menghapus penyerahan wajib dan kerja rodi.',
      },
    ],
    tip: 'Pembeda utama: Daendels fokus pada pertahanan militer dan menerapkan kerja rodi keras; Raffles mengusung prinsip liberalisme, penelitian ilmiah (History of Java), dan sistem sewa tanah.',
    example: {
      prompt:
        'Mengapa pelaksanaan sistem sewa tanah (landrent system) yang digagas Raffles mengalami kegagalan di tanah Jawa?',
      steps: [
        'Masyarakat pedesaan di Jawa belum terbiasa dengan sistem ekonomi uang dan masih mengandalkan pertukaran natura/barter.',
        'Pemerintah kolonial Inggris kekurangan pegawai administrasi yang cakap untuk melakukan pengukuran luas dan kesuburan tanah secara akurat.',
        'Kepemilikan tanah di Jawa bersifat komunal desa, bukan perseorangan, sehingga sulit memungut pajak langsung dari setiap petani.',
      ],
      answer:
        'Kegagalan sistem sewa tanah disebabkan keterbatasan ekonomi uang, minimnya petugas pengukur tanah, dan sistem kepemilikan tanah desa yang komunal.',
    },
  },
  {
    id: 4,
    title: 'Sistem Tanam Paksa (Cultuurstelsel)',
    short: 'Sistem Tanam Paksa',
    group: 'Eksploitasi Kolonial',
    intro:
      'Diberlakukan oleh Gubernur Jenderal Johannes van den Bosch pada 1830 untuk mengisi kas Belanda yang kosong pasca-Perang Diponegoro. Petani diwajibkan menanam komoditas ekspor. Banyak terjadi penyimpangan di lapangan yang memicu bencana kelaparan.',
    formulas: [
      {
        label: 'Aturan vs Realitas Tanah',
        math: '\\text{Aturan Resmi: } \\le \\frac{1}{5} \\; \\text{lahan desa} \\quad \\text{vs} \\quad \\text{Praktik: } > \\frac{1}{3} \\; \\text{hingga seluruh tanah subur}',
        note: 'Penyimpangan aturan tanah yang merampas lahan pokok pangan masyarakat.',
      },
      {
        label: 'Sistem Pendorong Eksploitasi',
        math: 'Cultuurprocenten \\rightarrow \\text{Hadiah persentase hasil panen bagi pejabat/bupati}',
        note: 'Sistem bonus yang mendorong bupati dan pengawas Belanda memeras tenaga rakyat lebih keras.',
      },
    ],
    tip: 'Tokoh pengkritik Tanam Paksa yang sangat terkenal adalah Eduard Douwes Dekker (Multatuli) lewat novel Max Havelaar (1860) yang menceritakan pemerasan di Lebak Banten.',
    example: {
      prompt:
        'Sebutkan dampak penyimpangan Sistem Tanam Paksa di daerah Cirebon (1844) dan Grobogan (1849).',
      steps: [
        'Di lapangan, waktu dan tenaga petani tersedot sepenuhnya untuk tanaman wajib pemerintah kolonial sehingga penanaman padi terbengkalai.',
        'Lahan sawah terbaik dipaksa ditanami tebu dan nila, sementara beban pajak tetap dipungut dari para petani.',
        'Akibatnya terjadi gagal panen padi masal yang menimbulkan tragedi kelaparan hebat dan wabah penyakit berujung kematian ribuan rakyat di Cirebon dan Grobogan.',
      ],
      answer:
        'Penyimpangan Tanam Paksa menyebabkan terlantarnya tanaman pangan pokok sehingga memicu bencana kelaparan hebat di Cirebon dan Grobogan.',
    },
  },
  {
    id: 5,
    title: 'Politik Pintu Terbuka (1870)',
    short: 'Politik Pintu Terbuka',
    group: 'Liberalisme Ekonomi',
    intro:
      'Kemenangan kaum liberal di parlemen Belanda melahirkan UU Agraria (Agrarische Wet 1870) dan UU Gula (Suikerwet 1870). Hindia Belanda dibuka bagi penanaman modal swasta asing, memicu maraknya perkebunan besar dan pemberlakuan Koeli Ordonnantie.',
    formulas: [
      {
        label: 'Asas Agrarische Wet 1870',
        math: 'Domeinverklaring \\rightarrow \\text{Semua tanah tanpa bukti hak milik dianggap milik negara}',
        note: 'Tanah negara dapat disewa pengusaha swasta hingga jangka waktu 75 tahun (Hak Erfpacht).',
      },
      {
        label: 'Ikatan Kuli Kontrak',
        math: 'Koeli Ordonnantie \\; (1880) + Poenale Sanctie \\; (\\text{Hukuman Pidana})',
        note: 'Hukuman denda atau kerja paksa bagi kuli perkebunan yang melarikan diri atau memprotes majikan.',
      },
    ],
    tip: 'Politik Pintu Terbuka mengalihkan eksploitasi dari monopoli negara (pemerintah kolonial) ke eksploitasi modal swasta kapitalis internasional.',
    example: {
      prompt:
        'Apakah yang dimaksud dengan asas Domeinverklaring dalam Agrarische Wet 1870 dan apa dampaknya bagi masyarakat bumiputera?',
      steps: [
        'Domeinverklaring adalah pernyataan bahwa seluruh tanah yang tidak dapat dibuktikan kepemilikannya oleh rakyat dengan bukti kepemilikan tertulis otomatis dinyatakan sebagai milik negara (domein negara).',
        'Karena sebagian besar rakyat adat hanya memiliki hak ulayat tanpa sertifikat tertulis barat, tanah mereka dengan mudah diambil alih pemerintah kolonial.',
        'Tanah tersebut kemudian disewakan dalam jangka panjang (hingga 75 tahun) kepada pemodal swasta asing untuk dijadikan lahan perkebunan.',
      ],
      answer:
        'Domeinverklaring menyatakan tanah tanpa bukti tertulis menjadi milik negara, mempermudah penyewaan tanah adat kepada investor swasta perkebunan.',
    },
  },
  {
    id: 6,
    title: 'Perlawanan Rakyat Indonesia Menentang Penjajahan',
    short: 'Perlawanan Rakyat',
    group: 'Perjuangan Kedaerahan',
    intro:
      'Berbagai perlawanan gigih berkobar di Nusantara: Sultan Agung (Mataram), Sultan Hasanuddin (Gowa-Tallo), Pattimura (Maluku), Pangeran Diponegoro (Perang Jawa), Tuanku Imam Bonjol (Perang Padri), dan Perang Aceh.',
    formulas: [
      {
        label: 'Strategi Perang Diponegoro (1825–1830)',
        math: '\\text{Taktik Gerilya Diponegoro} \\; \\text{vs} \\; \\text{Siasat Benteng Stelsel De Kock}',
        note: 'Jaringan benteng terhubung Belanda yang mempersempit ruang gerak pasukan Pangeran Diponegoro.',
      },
      {
        label: 'Resolusi Perang Padri',
        math: '\\text{Plakat Puncak Pato} \\rightarrow \\text{Adat basandi syarak, syarak basandi Kitabullah}',
        note: 'Konsensus persatuan Kaum Adat dan Kaum Padri untuk bersama-sama mengusir penjajah Belanda.',
      },
    ],
    tip: 'Pahami karakteristik perlawanan abad ke-19: masih bersifat kedaerahan, bergantung pada figur pemimpin karismatik, mudah terpecah lewat siasat Devide et Impera, dan kalah dalam persenjataan.',
    example: {
      prompt:
        'Mengapa Perang Diponegoro (1825–1830) menjadi perang paling berat dan memakan biaya terbesar bagi pemerintah kolonial Belanda di Jawa?',
      steps: [
        'Pangeran Diponegoro didukung oleh perpaduan kekuatan bangsawan Mataram, ulama/santri (Kyai Mojo), dan panglima perang tangguh (Sentot Alibasya).',
        'Menerapkan perang gerilya rakyat semesta yang memanfaatkan medan berbukit dan hutan, membuat pasukan Belanda kocar-kacir.',
        'Belanda kehilangan lebih dari 8.000 serdadu Eropa dan 7.000 serdadu pribumi serta menghabiskan kas negara sekitar 20 juta gulden hingga nyaris bangkrut.',
      ],
      answer:
        'Perang Diponegoro menyatukan rakyat, ulama, dan bangsawan dalam perang gerilya luas yang menguras kas Belanda hingga 20 juta gulden.',
    },
  },
  {
    id: 7,
    title: 'Politik Etis dan Pergerakan Nasional',
    short: 'Politik Etis & Pergerakan',
    group: 'Kebangkitan Nasional',
    intro:
      'Gagasan C.Th. van Deventer dalam Een Eereschuld (1899) melahirkan Politik Etis (Irigasi, Emigrasi, Edukasi). Meskipun banyak diselewengkan, pilar edukasi melahirkan kaum intelektual bumiputera yang mendirikan Budi Utomo (1908) dan Indische Partij (1912).',
    formulas: [
      {
        label: 'Trias Van Deventer',
        math: 'Irigasi \\; (Pengairan) + Emigrasi \\; (Transmigrasi) + Edukasi \\; (Pendidikan)',
        note: 'Kebijakan balas budi pemerintah Belanda terhadap kemakmuran yang dikeruk dari tanah Hindia.',
      },
      {
        label: 'Tonggak Organisasi Pelopor',
        math: 'Budi Utomo \\; (1908: \\text{Kultural}) \\longrightarrow Indische Partij \\; (1912: \\text{Politik Radikal})',
        note: 'Pergeseran perjuangan fisik kedaerahan menjadi pergerakan modern berwawasan nasional.',
      },
    ],
    tip: 'Indische Partij didirikan oleh Tiga Serangkai: E.F.E. Douwes Dekker (Danudirja Setiabudi), dr. Tjipto Mangoenkoesoemo, dan Suwardi Suryaningrat (Ki Hajar Dewantara).',
    example: {
      prompt:
        'Jelaskan mengapa tanggal 20 Mei 1908 ditetapkan sebagai Hari Kebangkitan Nasional bagi bangsa Indonesia.',
      steps: [
        'Pada tanggal 20 Mei 1908, para pelajar STOVIA di bawah pimpinan dr. Soetomo dan inisiatif dr. Wahidin Soedirohoesodo mendirikan organisasi Budi Utomo.',
        'Budi Utomo merupakan organisasi modern pertama di Hindia Belanda yang memiliki struktur kepengurusan rapi, anggaran dasar, keanggotaan, dan program kerja berkala.',
        'Kelahiran Budi Utomo menandai transformasi perjuangan bangsa yang awalnya bersifat kedaerahan dengan senjata tajam beralih ke perjuangan diplomasi terorganisasi berwawasan nasional.',
      ],
      answer:
        'Tanggal 20 Mei 1908 menandai berdirinya Budi Utomo, titik balik perjuangan diplomasi modern terorganisasi dalam sejarah Indonesia.',
    },
  },
]
