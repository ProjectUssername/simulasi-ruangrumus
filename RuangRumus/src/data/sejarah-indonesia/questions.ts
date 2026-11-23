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
  // Topik 1: Kedatangan Bangsa Barat (Soal 1-4)
  pg(
    1,
    1,
    'Dasar',
    'Peristiwa penting di kawasan Laut Tengah pada tahun 1453 yang memicu bangsa-bangsa Barat mengarungi samudra menuju Nusantara adalah...',
    [
      'Terjadinya Revolusi Prancis yang menentang kekuasaan monarki',
      'Jatuhnya kota Konstantinopel ke tangan Kesultanan Turki Utsmani',
      'Ditandatanganinya Dekrit Pelayaran oleh Paus Alexander VI',
      'Penemuan mesin uap dan revolusi industri di Inggris',
      'Terbentuknya aliansi dagang Liga Hanseatik di Eropa Utara',
    ],
    1,
    [
      'Pada tahun 1453, Sultan Mehmed II dari Kesultanan Turki Utsmani berhasil menaklukkan kota Konstantinopel.',
      'Peristiwa ini menutup jalur perdagangan rempah-rempah Laut Tengah bagi bangsa Eropa Kristen, sehingga mereka terpaksa mencari jalur laut alternatif langsung ke kepulauan rempah (Nusantara).',
    ],
  ),
  pg(
    2,
    1,
    'Dasar',
    'Motivasi penjelajahan samudra bangsa Barat dikenal dengan semboyan 3G (Gold, Glory, Gospel). Konsep "Glory" dalam konteks imperialisme kuno bermakna...',
    [
      'Mencari keuntungan komersial dari monopoli rempah-rempah',
      'Menyebarkan ajaran agama Nasrani ke seluruh penjuru dunia',
      'Memperoleh kejayaan, prestise, dan perluasan wilayah kekuasaan bagi kerajaan asal',
      'Mengembangkan ilmu pengetahuan navigasi dan kartografi maritim',
      'Membangun aliansi pertahanan militer dengan kerajaan-kerajaan pribumi',
    ],
    2,
    [
      'Gold bermakna mencari kekayaan (terutama emas dan rempah-rempah).',
      'Glory bermakna mencari kejayaan, prestise politik, dan menaklukkan daerah baru sebagai lambang kebesaran monarki Eropa.',
      'Gospel bermakna misi suci menyebarkan ajaran agama Kristen/Katolik.',
    ],
  ),
  pg(
    3,
    1,
    'Menengah',
    'Pelaut Portugis yang memimpin ekspedisi armada pertama kali hingga berhasil menaklukkan bandar niaga strategis Malaka pada tahun 1511 adalah...',
    [
      'Bartholomeus Diaz',
      'Vasco da Gama',
      'Alfonso de Albuquerque',
      'Ferdinand Magellan',
      'Cornelis de Houtman',
    ],
    2,
    [
      'Bartholomeus Diaz hanya mencapai Tanjung Harapan di Afrika Selatan (1488).',
      'Vasco da Gama mencapai Kalikut di India (1498).',
      'Alfonso de Albuquerque adalah panglima Portugis yang berhasil menaklukkan Malaka pada tahun 1511 dan mengutus Francisco Serrao menuju Kepulauan Maluku pada 1512.',
    ],
  ),
  pg(
    4,
    1,
    'Lanjut',
    'Untuk menyelesaikan perselisihan perebutan Kepulauan Maluku antara Spanyol dan Portugis pada abad ke-16, disepakatilah Perjanjian Saragosa (1529). Konsekuensi dari perjanjian tersebut bagi Spanyol adalah...',
    [
      'Spanyol diizinkan memonopoli perdagangan pala di Banda',
      'Spanyol wajib meninggalkan Maluku dan memusatkan kekuasaannya di Filipina',
      'Spanyol menyerahkan seluruh koloninya di Amerika Selatan kepada Portugis',
      'Spanyol berhak mendirikan benteng pertahanan bersama Portugis di Ternate',
      'Spanyol mendapat ganti rugi berupa seluruh hasil tambang timah di Bangka',
    ],
    1,
    [
      'Perjanjian Tordesillas (1494) membagi dunia menjadi belahan barat (Spanyol) dan timur (Portugis).',
      'Ketika kedua armada bertemu di Kepulauan Maluku, disepakati Perjanjian Saragosa (1529) yang menetapkan bahwa Portugis tetap berkuasa di Maluku, sedangkan Spanyol harus mundur dan memusatkan kekuasaannya di Kepulauan Filipina.',
    ],
  ),

  // Topik 2: Kongsi Dagang VOC (Soal 5-8)
  pg(
    5,
    2,
    'Dasar',
    'Tujuan utama dibentuknya kongsi dagang VOC (Vereenigde Oostindische Compagnie) oleh parlemen Belanda pada tanggal 20 Maret 1602 adalah...',
    [
      'Mengusir keberadaan armada laut Portugis dari seluruh wilayah Asia',
      'Menghindari persaingan tidak sehat antarpedagang Belanda dan menandingi kongsi dagang asing seperti EIC Inggris',
      'Menjadikan Batavia sebagai pusat pemerintahan monarki kerajaan Belanda di timur',
      'Membantu raja-raja lokal Nusantara dalam menghadapi pemberontakan internal',
      'Menyebarkan pendidikan modern dan teknologi maritim bagi penduduk pribumi',
    ],
    1,
    [
      'Sebelum 1602, kapal-kapal dagang Belanda saling bersaing satu sama lain sehingga harga beli rempah di Nusantara melambung tinggi dan harga jual di Eropa anjlok.',
      'Johan van Oldenbarnevelt memprakarsai pembentukan VOC agar para pedagang bersatu di bawah satu wadah kongsi dagang untuk menguasai pasar dan menandingi East India Company (EIC) milik Inggris.',
    ],
  ),
  pg(
    6,
    2,
    'Menengah',
    'Pemerintah Belanda menganugerahkan hak istimewa (Hak Oktroi) kepada VOC. Salah satu hak oktroi yang menunjukkan bahwa VOC bertindak layaknya sebuah negara berdaulat adalah...',
    [
      'Hak mendirikan sekolah keagamaan di setiap kota pelabuhan',
      'Hak menyelenggarakan pemilu anggota parlemen di Hindia Belanda',
      'Hak mencetak mata uang sendiri dan memelihara angkatan bersenjata perang',
      'Hak menarik upeti dari warga negara Eropa yang menetap di Nusantara',
      'Hak mengambil alih kepemilikan seluruh tanah ulayat kerajaan lokal',
    ],
    2,
    [
      'Hak Oktroi (Octrooi) memberikan kekuasaan luar biasa kepada VOC layaknya sebuah negara (state within a state), meliputi: hak monopoli dagang, hak memelihara angkatan perang, hak menyatakan perang dan damai, hak mendirikan benteng, hak mencetak uang sendiri, dan hak mengangkat pegawai/gubernur.',
    ],
  ),
  pg(
    7,
    2,
    'Menengah',
    'Dalam rangka menjaga stabilitas kuota produksi dan harga rempah-rempah di pasar Eropa agar tetap tinggi, VOC menerapkan kebijakan yang disebut...',
    [
      'Hak Ekstirpasi',
      'Politik Etis',
      'Sistem Sewa Tanah',
      'Poenale Sanctie',
      'Cultuurprocenten',
    ],
    0,
    [
      'Hak Ekstirpasi adalah wewenang VOC untuk menebang atau memusnahkan tanaman cengkih dan pala di kebun rakyat Maluku jika produksinya dianggap berlebihan.',
      'Langkah ini bertujuan mengontrol pasokan komoditas di pasar internasional agar harganya tidak anjlok.',
    ],
  ),
  pg(
    8,
    2,
    'Lanjut',
    'VOC resmi dibubarkan oleh pemerintah Belanda pada 31 Desember 1799. Faktor internal paling dominan yang menyebabkan kebangkrutan VOC adalah...',
    [
      'Kekalahan armada laut Belanda dalam perang melawan Spanyol di Selat Sunda',
      'Maraknya korupsi pejabat VOC, beban utang yang menumpuk, serta tingginya biaya perang melawan perlawanan rakyat',
      'Peralihan minat perdagangan dunia dari komoditas rempah ke minyak bumi',
      'Terjadinya bencana gempa bumi dahsyat yang merusak seluruh gudang dan benteng VOC di Batavia',
      'Keluarnya kebijakan embargo perdagangan rempah oleh para sultan di kepulauan Maluku',
    ],
    1,
    [
      'Faktor keruntuhan VOC bersumber dari dalam (internal): korupsi para petinggi kongsi dagang ("Vergaan Onder Corruptie"), utang luar biasa besar, beban pembagian dividen semu, serta pengeluaran militer masif untuk meredam perlawanan kerajaan-kerajaan di Nusantara.',
    ],
  ),

  // Topik 3: Pemerintahan Daendels dan Raffles (Soal 9-12)
  pg(
    9,
    3,
    'Dasar',
    'Tugas utama yang diemban Herman Willem Daendels saat dikirim ke Jawa sebagai Gubernur Jenderal (1808–1811) oleh Raja Louis Napoleon adalah...',
    [
      'Melakukan penelitian keanekaragaman flora dan fauna tropis di pedalaman Jawa',
      'Mempertahankan Pulau Jawa dari ancaman serangan pasukan militer Inggris',
      'Menerapkan politik pintu terbuka bagi para pengusaha perkebunan swasta',
      'Menghapuskan sistem perbudakan dan feodalisme di keraton Jawa',
      'Mengembangkan jaringan kereta api antarkaresidenan di Jawa Tengah',
    ],
    1,
    [
      'Pada masa Republik Bataaf di bawah pengaruh Prancis (Napoleon Bonaparte), Belanda bermusuhan dengan Inggris.',
      'Daendels ditugaskan sebagai Gubernur Jenderal dengan instruksi utama memperkuat pertahanan militer Pulau Jawa agar tidak jatuh ke tangan tentara Inggris.',
    ],
  ),
  pg(
    10,
    3,
    'Menengah',
    'Pembangunan Jalan Raya Pos (Grote Postweg) dari Anyer hingga Panarukan sepanjang kurang lebih 1.000 km pada masa Daendels memiliki fungsi strategis utama berupa...',
    [
      'Jalur distribusi hasil tambang emas dari Banten ke pelabuhan Surabaya',
      'Sarana mobilisasi pasukan militer dan kelancaran pos komunikasi di sepanjang Pulau Jawa',
      'Rute wisata resmi para pejabat kolonial dan bangsawan Eropa',
      'Saluran irigasi raksasa untuk mengairi perkebunan tebu di pantai utara Jawa',
      'Batas pemisah wilayah antara kekuasaan Kasunanan Surakarta dan Kesultanan Yogyakarta',
    ],
    1,
    [
      'Grote Postweg dibangun dengan kerja paksa (rodi) guna mempermudah mobilisasi pasukan pertahanan secara cepat dan mempercepat transmisi surat pos resmi antarpangkalan militer di sepanjang pantai utara Jawa.',
    ],
  ),
  pg(
    11,
    3,
    'Menengah',
    'Pada masa pemerintahannya di Hindia (1811–1816), Thomas Stamford Raffles memperkenalkan sistem sewa tanah (landrent system). Landasan pemikiran utama kebijakan ini adalah...',
    [
      'Seluruh tanah merupakan milik pemerintah/raja, sehingga petani berstatus sebagai penyewa yang wajib membayar pajak tanah',
      'Petani bebas menjual tanah adat kepada investor asing dari negara manapun',
      'Tanah perkebunan wajib ditanami komoditas kopi dan teh secara cuma-cuma',
      'Pajak tanah hanya dikenakan kepada para bupati dan penguasa bangsawan lokal',
      'Hasil panen padi diserahkan sepenuhnya kepada kongsi dagang Inggris (EIC)',
    ],
    0,
    [
      'Raffles berpandangan liberal bahwa pemerintah berdaulat adalah pemilik sah seluruh tanah.',
      'Oleh karena itu, para petani penggarap dianggap sebagai penyewa tanah (tenant) yang wajib membayar uang sewa/pajak (landrent) kepada pemerintah sesuai kelas kesuburan lahan.',
    ],
  ),
  pg(
    12,
    3,
    'Lanjut',
    'Selain kebijakan di bidang ekonomi dan pemerintahan, peninggalan monumental Thomas Stamford Raffles di bidang ilmu pengetahuan dan kebudayaan adalah...',
    [
      'Pembangunan Benteng Duurstede di Kepulauan Saparua',
      'Penulisan buku sejarah "The History of Java" dan perintisan pendirian Kebun Raya Bogor',
      'Penyusunan kamus terlengkap bahasa Jawa Kuno oleh Multatuli',
      'Penerbitan surat kabar berbahasa Melayu pertama bernama Medan Prijaji',
      'Pendirian sekolah dokter bumiputera STOVIA di Batavia',
    ],
    1,
    [
      'Raffles sangat tertarik pada sejarah, alam, dan budaya Nusantara.',
      'Ia menulis buku monumental "The History of Java", merintis Kebun Raya Bogor bersama istrinya Olivia Mariamne, serta menemukan bunga bangkai raksasa bersama Arnoldi yang dinamai Rafflesia arnoldii.',
    ],
  ),

  // Topik 4: Sistem Tanam Paksa (Cultuurstelsel) (Soal 13-16)
  pg(
    13,
    4,
    'Dasar',
    'Latar belakang mendesak yang mendorong Johannes van den Bosch memberlakukan Sistem Tanam Paksa (Cultuurstelsel) di Jawa pada tahun 1830 adalah...',
    [
      'Membantu petani pribumi meningkatkan keterampilan budidaya tanaman modern',
      'Kekosongan kas negeri Belanda akibat pengeluaran biaya Perang Diponegoro dan pemisahan kemerdekaan Belgia',
      'Tuntutan kaum humanis Belanda agar rakyat jajahan diajarkan berdagang',
      'Terjadinya paceklik gagal panen gandum di seluruh daratan Eropa Barat',
      'Keinginan menyaingi dominasi produksi kopi milik pengusaha Inggris di India',
    ],
    1,
    [
      'Perang Jawa / Perang Diponegoro (1825–1830) menelan biaya sekitar 20 juta gulden bagi Belanda, ditambah perang kemerdekaan Belgia (1830) yang menguras kas negara Belanda.',
      'Van den Bosch mencanangkan Cultuurstelsel untuk menghasilkan komoditas ekspor bernilai tinggi guna menutup defisit kas negara Belanda dalam tempo cepat.',
    ],
  ),
  pg(
    14,
    4,
    'Menengah',
    'Secara yuridis resmi, aturan Tanam Paksa menetapkan ketentuan tertentu. Namun dalam praktiknya terjadi banyak penyimpangan, salah satunya adalah...',
    [
      'Lahan yang digunakan tidak boleh melebihi seperlima tanah desa',
      'Petani bebas memilih jenis komoditas yang ingin mereka tanam',
      'Lahan terbaik melebihi seperlima disita, dan petani tetap diwajibkan membayar pajak tanah',
      'Pemerintah menanggung seluruh kerugian petani akibat bencana kekeringan',
      'Waktu kerja petani dibatasi maksimal satu hari dalam sepekan',
    ],
    2,
    [
      'Aturan resmi menyatakan tanah yang disediakan maksimal 1/5 bagian dan bebas pajak tanah.',
      'Pada praktiknya, para pengawas dan bupati mengambil lebih dari sepertiga hingga separuh tanah desa yang paling subur, dan petani pemilik tanah tetap ditagih pajak tanah secara penuh.',
    ],
  ),
  pg(
    15,
    4,
    'Lanjut',
    'Pemicu utama para bupati dan pejabat pribumi memeras tenaga dan lahan rakyat secara berlebihan dalam sistem Tanam Paksa adalah adanya ketentuan...',
    [
      'Cultuurprocenten, yaitu bonus uang persentase berdasarkan jumlah hasil panen yang berhasil dikumpulkan',
      'Poenale Sanctie, yaitu hukuman cambuk bagi pejabat yang gagal mencapai target produksi',
      'Hongitochten, yaitu hak kepemilikan kapal dagang pribadi bagi kepala desa berprestasi',
      'Domeinverklaring, yaitu hak penguasaan tanah adat seumur hidup bagi bupati loyal',
      'Landrent, yaitu pembagian dividen saham komoditas kopi di bursa Amsterdam',
    ],
    0,
    [
      'Cultuurprocenten adalah hadiah atau bonus persentase uang yang diberikan pemerintah Belanda kepada pejabat kolonial dan penguasa pribumi (bupati/wedana) yang berhasil menyetorkan hasil panen melampaui target yang ditentukan.',
      'Sistem bonus ini memicu eksploitasi dan pemerasan rakyat yang sangat kejam.',
    ],
  ),
  pg(
    16,
    4,
    'Menengah',
    'Tokoh Belanda yang menggunakan nama samaran "Multatuli" dan menulis buku "Max Havelaar" (1860) untuk mengecam kekejaman dan pemerasan sistem Tanam Paksa adalah...',
    [
      'Baron van Hoevell',
      'Frans van de Putte',
      'C.Th. van Deventer',
      'Eduard Douwes Dekker',
      'Johannes van den Bosch',
    ],
    3,
    [
      'Eduard Douwes Dekker, mantan Asisten Residen di Lebak, Banten, menulis novel satire "Max Havelaar" dengan nama samaran Multatuli (artinya "aku yang telah banyak menderita").',
      'Buku ini membongkar kebobrokan pemerasan Tanam Paksa dan menggugah nurani publik Belanda.',
    ],
  ),

  // Topik 5: Politik Pintu Terbuka (Soal 17-19)
  pg(
    17,
    5,
    'Dasar',
    'Politik Pintu Terbuka (Liberal) yang dimulai di Hindia Belanda pada tahun 1870 ditandai dengan diberlakukannya regulasi penting berupa...',
    [
      'Hak Oktroi VOC dan Pelayaran Hongi',
      'Agrarische Wet (Undang-Undang Agraria) dan Suikerwet (Undang-Undang Gula)',
      'Trias van Deventer dan manifesto politik Perhimpunan Indonesia',
      'Ketetapan Kapitulasi Kalijati dan Tuntang',
      'Koeli Ordonnantie dan Piagam Jakarta',
    ],
    1,
    [
      'Tahun 1870 menjadi awal Politik Pintu Terbuka setelah parlemen Belanda mengesahkan Agrarische Wet (UU Agraria) dan Suikerwet (UU Gula).',
      'Undang-undang ini mengakhiri monopoli negara atas Tanam Paksa dan membuka pintu bagi masuknya investasi modal swasta asing.',
    ],
  ),
  pg(
    18,
    5,
    'Menengah',
    'Asas "Domeinverklaring" yang termuat dalam Agrarische Wet 1870 menetapkan bahwa...',
    [
      'Setiap buruh perkebunan wajib mendapatkan jaminan upah minimum dan kesehatan',
      'Semua tanah yang tidak dapat dibuktikan kepemilikannya dengan bukti tertulis dinyatakan sebagai milik (domein) negara',
      'Pemerintah kolonial melarang pengusaha swasta menyewa tanah rakyat lebih dari 5 tahun',
      'Pajak ekspor komoditas gula dan tembakau dihapuskan secara total',
      'Bupati berhak menjual tanah kas desa kepada pemodal asing tanpa persetujuan gubernur jenderal',
    ],
    1,
    [
      'Domeinverklaring menyatakan bahwa semua tanah yang tidak ada bukti kepemilikan sah menurut hukum barat menjadi milik negara.',
      'Karena masyarakat adat tidak memiliki sertifikat tertulis, tanah ulayat mereka dengan mudah dialihkan negara dan disewakan kepada pengusaha perkebunan swasta hingga 75 tahun (Hak Erfpacht).',
    ],
  ),
  pg(
    19,
    5,
    'Lanjut',
    'Untuk menjamin kepatuhan para kuli kontrak di perkebunan-perkebunan swasta luar Jawa (seperti Deli, Sumatra Timur), pemerintah kolonial memberlakukan aturan Koeli Ordonnantie (1880) yang memuat Poenale Sanctie. Aturan Poenale Sanctie berisi...',
    [
      'Sanksi hukuman pidana atau penangkapan paksa bagi kuli yang melarikan diri atau memprotes majikan sebelum kontrak kerja berakhir',
      'Kewajiban perusahaan memberikan tunjangan hari tua bagi kuli kontrak',
      'Larangan bagi buruh pribumi untuk menikah dengan buruh asing asal Tiongkok',
      'Pemberian hadiah lahan perkebunan bagi buruh yang telah bekerja lebih dari 10 tahun',
      'Penetapan hari libur nasional mingguan bagi seluruh pekerja tambang dan tembakau',
    ],
    0,
    [
      'Poenale Sanctie adalah klausul pidana dalam Koeli Ordonnantie yang memberi wewenang kepada majikan/polisi kolonial untuk menangkap, mengadili, mendenda, atau menghukum kerja paksa para buruh/kuli kontrak yang kabur atau membangkang perintah majikan.',
    ],
  ),

  // Topik 6: Perlawanan Rakyat Indonesia (Soal 20-23)
  pg(
    20,
    6,
    'Menengah',
    'Sultan Agung dari Kesultanan Mataram melancarkan serangan besar-besaran terhadap markas VOC di Batavia pada tahun 1628 dan 1629. Salah satu faktor utama penyebab kegagalan serangan kedua (1629) adalah...',
    [
      'Pasukan Mataram tidak memiliki persenjataan meriam modern',
      'Adanya pengkhianatan di mana lumbung-lumbung perbekalan beras Mataram di Karawang dan Tegal dibakar oleh mata-mata VOC',
      'Terjadinya badai topan di Laut Jawa yang menenggelamkan seluruh kapal armada Mataram',
      'Wafatnya Sultan Agung sebelum pertempuran di benteng Batavia dimulai',
      'Bantuan armada pasukan Inggris yang datang membela pasukan VOC',
    ],
    1,
    [
      'Pada penyerangan kedua tahun 1629, VOC mengetahui lokasi lumbung logistik beras pasukan Mataram di Tegal, Cirebon, dan Karawang lalu membakarnya habis.',
      'Pasukan Mataram mengalami kekurangan bahan makanan yang parah serta terjangkit wabah penyakit kolera sehingga terpaksa mundur.',
    ],
  ),
  pg(
    21,
    6,
    'Menengah',
    'Sultan Hasanuddin memimpin perlawanan gigih Kerajaan Gowa-Tallo melawan monopoli perdagangan rempah VOC di kawasan timur Nusantara hingga dijuluki "Ayam Jantan dari Timur". Perlawanan ini diakhiri dengan pemaksaan...',
    [
      'Perjanjian Saragosa 1529',
      'Kapitulasi Tuntang 1811',
      'Perjanjian Bongaya 1667',
      'Perjanjian Giyanti 1755',
      'Plakat Panjang 1833',
    ],
    2,
    [
      'Setelah VOC bersekutu dengan Aru Palakka dari Bone dan mengepung Somba Opu, Sultan Hasanuddin dipaksa menandatangani Perjanjian Bongaya pada tahun 1667.',
      'Perjanjian ini sangat merugikan Gowa karena mengakui monopoli dagang VOC dan mewajibkan pembongkaran benteng pertahanan Makassar.',
    ],
  ),
  pg(
    22,
    6,
    'Dasar',
    'Pada tahun 1817, rakyat Maluku mengobarkan perlawanan sengit menentang kembalinya kekuasaan kolonial Belanda dan berhasil merebut Benteng Duurstede di Saparua. Pemimpin utama perlawanan tersebut adalah...',
    [
      'Sultan Baabullah',
      'Pangeran Antasari',
      'Thomas Matulessy (Kapitan Pattimura)',
      'Tuanku Imam Bonjol',
      'Sisingamangaraja XII',
    ],
    2,
    [
      'Thomas Matulessy yang bergelar Kapitan Pattimura memimpin rakyat Saparua Maluku pada Mei 1817.',
      'Didukung pejuang lain seperti Christina Martha Tiahahu dan Anthoni Rhebok, mereka merebut Benteng Duurstede dan menewaskan Residen van den Berg.',
    ],
  ),
  pg(
    23,
    6,
    'Lanjut',
    'Untuk mematahkan taktik perang gerilya yang dilancarkan Pangeran Diponegoro dalam Perang Jawa (1825–1830), Jenderal Hendrik Merkus de Kock menerapkan strategi...',
    [
      'Konsentrasi Stelsel, memusatkan seluruh pasukan Belanda di satu ibu kota karesidenan',
      'Benteng Stelsel, membangun jaringan pos benteng terhubung untuk mempersempit ruang gerak pasukan Diponegoro',
      'Devide et Impera, membagi wilayah Kesultanan Mataram menjadi empat praja',
      'Deviasi Blokade, memutus akses suplai senjata dari pesisir selatan Jawa',
      'Perang Candu, menyebarkan zat candu untuk melemahkan moral laskar santri',
    ],
    1,
    [
      'Strategi Benteng Stelsel dijalankan Belanda dengan mendirikan benteng-benteng kecil di setiap daerah yang berhasil dikuasai.',
      'Antarbenteng dihubungkan jalur jalan raya dan patroli militer teratur, sehingga ruang gerak dan komunikasi laskar gerilya Pangeran Diponegoro menjadi terisolasi dan semakin menyempit.',
    ],
  ),

  // Topik 7: Politik Etis dan Pergerakan Nasional (Soal 24-25)
  pg(
    24,
    7,
    'Dasar',
    'Tokoh humanis Belanda yang menerbitkan artikel berjudul "Een Eereschuld" (Utang Kehormatan/Budi) pada tahun 1899 di majalah De Gids dan menjadi peletak dasar Politik Etis adalah...',
    [
      'Johannes van den Bosch',
      'Conrad Theodore van Deventer',
      'Snouck Hurgronje',
      'Herman Willem Daendels',
      'Pieter Both',
    ],
    1,
    [
      'C.Th. van Deventer menulis bahwa kemakmuran dan kekayaan negeri Belanda diperoleh dari jerih payah dan penderitaan jutaan rakyat Hindia.',
      'Oleh sebab itu, Belanda memiliki "utang budi/kehormatan" yang wajib dibayar kembali melalui program balas budi (Politik Etis: Irigasi, Emigrasi, Edukasi).',
    ],
  ),
  pg(
    25,
    7,
    'Menengah',
    'Organisasi pergerakan nasional pertama di Indonesia yang berorientasi politik secara radikal memperjuangkan kemerdekaan ("Indie los van Holland") dengan pendiri Tiga Serangkai (1912) adalah...',
    [
      'Budi Utomo',
      'Sarekat Islam',
      'Indische Partij',
      'Perhimpunan Indonesia',
      'Partai Nasional Indonesia',
    ],
    2,
    [
      'Indische Partij didirikan di Bandung pada tahun 1912 oleh Tiga Serangkai: E.F.E. Douwes Dekker (Danudirja Setiabudi), dr. Tjipto Mangoenkoesoemo, dan Suwardi Suryaningrat (Ki Hajar Dewantara).',
      'Indische Partij adalah partai politik pertama yang secara tegas menyerukan nasionalisme Hindia dan kemerdekaan dari penjajahan Belanda.',
    ],
  ),

  // Soal Esai Sejarah Indonesia (Soal 26-30)
  esai(
    26,
    2,
    'Menengah',
    'Sebutkan 4 hak istimewa (Hak Oktroi) yang diberikan oleh Parlemen Belanda kepada VOC, serta jelaskan bagaimana hak-hak tersebut memungkinkan VOC menguasai kerajaan-kerajaan lokal di Nusantara.',
    '4 hak oktroi: monopoli dagang, mencetak uang, memelihara tentara, dan menyatakan perang/damai. Hak ini memberi VOC otoritas militer dan diplomatik layaknya negara merdeka untuk mengintervensi politik kerajaan lokal.',
    [
      'Parlemen Belanda (Staten-Generaal) memberi hak istimewa kepada VOC pada tahun 1602: (1) Hak memonopoli perdagangan rempah, (2) Hak mencetak dan mengedarkan mata uang sendiri, (3) Hak membentuk dan memelihara angkatan perang sendiri, (4) Hak menyatakan perang dan mengadakan perjanjian damai dengan penguasa pribumi, serta (5) Hak mendirikan benteng pertahanan.',
      'Dengan hak-hak berdaulat ini, VOC tidak hanya bertindak sebagai badan niaga biasa, melainkan bertindak menyerupai negara di dalam negara.',
      'VOC memanfaatkan kekuatan militernya untuk menjalankan politik adu domba (devide et impera), mencampuri suksesi tahta kerajaan lokal, dan memaksakan perjanjian monopoli yang mengikat raja-raja pribumi.',
    ],
    [
      'Menyebutkan minimal 4 hak istimewa (Hak Oktroi) VOC secara tepat.',
      'Menjelaskan fungsi hak oktroi yang menjadikan VOC bertindak layaknya negara berdaulat.',
      'Menjelaskan strategi campur tangan VOC (devide et impera/perjanjian) terhadap kerajaan lokal.',
      'Menyimpulkan dampak penguasaan VOC terhadap hilangnya kedaulatan politik dan ekonomi penguasa pribumi.',
    ],
  ),

  esai(
    27,
    3,
    'Lanjut',
    'Bandingkan orientasi kebijakan pemerintahan Herman Willem Daendels (1808–1811) dengan Thomas Stamford Raffles (1811–1816) di Pulau Jawa dalam bidang pertahanan, kerja paksa, dan sistem perpajakan.',
    'Daendels berorientasi militerisme sentralistik (mempertahankan Jawa dari Inggris, kerja rodi keras, Jalan Raya Pos), sedangkan Raffles berorientasi liberalisme ekonomi (menghapus kerja rodi, memperkenalkan sistem sewa tanah/landrent).',
    [
      'Bidang Pertahanan: Daendels fokus pada pertahanan militer menghadapi armada Inggris dengan mendirikan benteng, pangkalan laut Ujung Kulon & Surabaya, serta Jalan Raya Pos Anyer–Panarukan. Raffles lebih fokus pada stabilitas administrasi sipil setelah Belanda menyerah.',
      'Bidang Kerja Paksa: Daendels memaksimalkan kerja paksa (rodi) massal tanpa upah layak untuk proyek infrastruktur militer. Raffles berprinsip menghapuskan kerja rodi dan penyerahan wajib atas dasar kemanusiaan dan kebebasan berusaha.',
      'Bidang Perpajakan: Daendels menerapkan penyerahan wajib hasil bumi (contingenten) dan preangerstelsel. Raffles memperkenalkan sistem sewa tanah (landrent system) di mana petani membayar pajak perseorangan berupa uang/natura sesuai kesuburan tanah.',
    ],
    [
      'Menganalisis perbandingan bidang pertahanan antara Daendels dan Raffles secara jelas.',
      'Menganalisis perbedaan perlakuan terhadap sistem kerja rodi / kerja paksa.',
      'Menjelaskan perbedaan sistem penyerahan hasil bumi Daendels vs sistem sewa tanah (landrent) Raffles.',
      'Menyimpulkan perbedaan ideologi dasar (militeristik Bataaf/Prancis vs liberalisme Inggris).',
    ],
  ),

  esai(
    28,
    4,
    'Lanjut',
    'Analisislah 4 bentuk penyimpangan nyata pelaksanaan Sistem Tanam Paksa (Cultuurstelsel) di lapangan dibandingkan dengan aturan resmi yang dirumuskan oleh Johannes van den Bosch.',
    'Penyimpangan meliputi: lahan yang diambil melebihi 1/5 dan yang paling subur, petani tetap dipungut pajak tanah, kegagalan panen dibebankan ke petani, serta waktu kerja wajib melampaui musim tanam padi akibat dorongan cultuurprocenten.',
    [
      'Aturan 1 (Luas Lahan): Secara resmi maksimal 1/5 luas tanah desa; dalam praktiknya bupati/pengawas mengambil 1/3 hingga separuh tanah desa, bahkan memilih petak tanah yang paling subur.',
      'Aturan 2 (Pajak Tanah): Secara resmi lahan tanaman wajib dibebaskan dari pajak tanah; dalam praktiknya petani tetap dipungut pajak tanah secara penuh atas seluruh lahannya.',
      'Aturan 3 (Gagal Panen): Secara resmi kegagalan panen yang bukan kesalahan petani menjadi tanggung jawab pemerintah; dalam praktiknya kerugian gagal panen sepenuhnya ditimpakan kepada para petani.',
      'Aturan 4 (Waktu Pengerjaan): Secara resmi waktu kerja tidak boleh melebihi waktu tanam padi (sekitar 3 bulan); dalam praktiknya petani dipaksa bekerja hingga 6–8 bulan di bawah ancaman sanksi dan dorongan bonus cultuurprocenten para bupati.',
    ],
    [
      'Menyajikan perbandingan aturan resmi vs praktik terkait alokasi luas lahan.',
      'Menyajikan perbandingan aturan resmi vs praktik terkait pemungutan pajak tanah.',
      'Menyajikan perbandingan aturan resmi vs praktik terkait pertanggungan risiko gagal panen.',
      'Menjelaskan perbandingan waktu pengerjaan dan pengaruh sistem cultuurprocenten.',
    ],
  ),

  esai(
    29,
    6,
    'Menengah',
    'Uraikan sebab umum, sebab khusus, serta alasan mengapa strategi Benteng Stelsel yang diterapkan Jenderal De Kock berhasil meredam perlawanan Pangeran Diponegoro dalam Perang Jawa (1825–1830).',
    'Sebab umum: penderitaan rakyat akibat pajak tinggi dan campur tangan Belanda di keraton; sebab khusus: pemasangan patok jalan Belanda di atas makam leluhur Diponegoro di Tegalrejo. Benteng Stelsel berhasil karena memutus koordinasi gerilya Diponegoro melalui jaringan benteng dan patroli terpadu.',
    [
      'Sebab Umum: Kekecewaan mendalam bangsawan keraton terhadap intervensi Belanda dalam adat keraton Yogyakarta, maraknya penyewaan tanah kepada orang Eropa, serta penderitaan rakyat kecil yang dibebani berbagai jenis pajak (pajak jalan, pintu gerbang, ternak).',
      'Sebab Khusus: Residen Belanda Smissaert dan Patih Danurejo IV memasang patok-patok pembangunan jalan raya yang melintasi tanah dan makam leluhur Pangeran Diponegoro di Tegalrejo tanpa izin.',
      'Keberhasilan Benteng Stelsel: Belanda membangun benteng-benteng pertahanan kecil di setiap wilayah yang direbut dan menghubungkannya dengan infrastruktur jalan dan komunikasi kavaleri.',
      'Strategi ini berhasil mengisolasi pos-pos gerilya laskar Diponegoro, mencegah perpindahan pasukan rakyat antardaerah, hingga satu per satu panglima Diponegoro tertangkap atau menyerah.',
    ],
    [
      'Menjelaskan sebab umum Perang Diponegoro mencakup aspek keraton dan penderitaan pajak rakyat.',
      'Menyebutkan sebab khusus insiden pematokan tanah makam leluhur di Tegalrejo secara tepat.',
      'Menjelaskan mekanisme kerja strategi Benteng Stelsel oleh Jenderal De Kock.',
      'Menganalisis dampak isolasi Benteng Stelsel terhadap kelumpuhan taktik gerilya Pangeran Diponegoro.',
    ],
  ),

  esai(
    30,
    7,
    'Lanjut',
    'Jelaskan ketiga program Trias Van Deventer dalam Politik Etis, penyimpangan pelaksanaannya oleh pemerintah kolonial, serta bagaimana program edukasi secara tidak sengaja memicu lahirnya organisasi pergerakan nasional Budi Utomo dan Indische Partij.',
    'Trias Van Deventer meliputi Irigasi, Emigrasi, dan Edukasi. Penyimpangannya: irigasi untuk perkebunan Belanda, emigrasi untuk kuli kontrak murah, dan edukasi hanya mencetak pegawai rendahan. Dampak positifnya melahirkan kaum terpelajar yang mendirikan Budi Utomo (1908) dan Indische Partij (1912).',
    [
      'Tiga Program Politik Etis: (1) Irigasi (pembangunan saluran pengairan pertanian), (2) Emigrasi (transmigrasi penduduk Jawa ke luar Jawa), dan (3) Edukasi (penyelenggaraan pendidikan bagi bumiputera).',
      'Penyimpangan: Irigasi diprioritaskan mengalir ke perkebunan tebu/tembakau milik pemodal swasta Belanda; Emigrasi dialihkan menjadi penyediaan kuli kontrak murah di perkebunan luar Jawa (Sumatra); Edukasi dibatasi untuk mendidik tenaga administrasi dan juru tulis rendahan yang bersedia digaji murah.',
      'Kelahiran Kaum Terpelajar: Walaupun dibatasi, sekolah kedokteran STOVIA dan sekolah guru melahirkan elite terpelajar bumiputera yang memiliki kesadaran kritis kebangsaan.',
      'Pergerakan Nasional: Para pemuda STOVIA mendirikan Budi Utomo pada 20 Mei 1908 sebagai organisasi modern perintis, disusul lahirnya Indische Partij pada 1912 oleh Tiga Serangkai yang secara terang-terangan menuntut kemerdekaan Indonesia.',
    ],
    [
      'Menyebutkan dan mendefinisikan 3 program Trias Van Deventer dengan tepat.',
      'Mengidentifikasi bentuk penyimpangan pada masing-masing pilar (irigasi, emigrasi, edukasi).',
      'Menghubungkan program edukasi dengan lahirnya golongan terpelajar / intelektual bumiputera.',
      'Menjelaskan kesinambungan peran kaum terpelajar dalam pendirian Budi Utomo dan Indische Partij.',
    ],
  ),
]
