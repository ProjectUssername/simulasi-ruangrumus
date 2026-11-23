import type { Topic } from '../../lib/types'

export const topics: Topic[] = [
  {
    id: 1,
    title: 'Sel dan Transport Zat melalui Membran',
    short: 'Sel & Transport Membran',
    group: 'Struktur & Fungsi Sel',
    intro:
      'Sel adalah unit struktural dan fungsional terkecil makhluk hidup. Organel seperti mitokondria menghasilkan ATP melalui respirasi seluler. Transport zat melintasi membran berlangsung secara pasif (difusi, osmosis) dan aktif (memerlukan ATP, pompa Na+/K+).',
    formulas: [
      {
        label: 'Respirasi Seluler Mitokondria',
        math: 'C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + 30\\text{--}32\\;\\text{ATP}',
        note: 'Katabolisme glukosa di krista dan matriks mitokondria menghasilkan energi seluler.',
      },
      {
        label: 'Arah Aliran Osmosis',
        math: '\\text{Potensial Air Tinggi (Hipotonik)} \\longrightarrow \\text{Potensial Air Rendah (Hipertonik)}',
        note: 'Perpindahan molekul pelarut (air) melintasi membran semipermeabel.',
      },
    ],
    tip: 'Transport aktif selalu bergerak melawan gradien konsentrasi (dari konsentrasi rendah ke tinggi) dan mutlak memerlukan energi metabolik dari hidrolisis ATP.',
    example: {
      prompt:
        'Sebuah silinder kentang bermassa 5,0 gram direndam dalam larutan sukrosa 20% selama 60 menit. Jelaskan perkiraan perubahan massanya dan peristiwa osmosis yang mendasarinya.',
      steps: [
        'Larutan sukrosa 20% bersifat hipertonik (konsentrasi zat terlarut lebih tinggi / potensial air lebih rendah) dibandingkan cairan intraseluler sel kentang yang hipotonik.',
        'Molekul air di dalam vakuola sel kentang akan berosmosis keluar melintasi membran semipermeabel menuju larutan perendam.',
        'Akibat kehilangan air, sel kentang mengalami penurunan tekanan turgor dan plasmolisis, sehingga tekstur kentang menjadi lembek dan massanya berkurang (kurang dari 5,0 gram).',
      ],
      answer:
        'Massa kentang berkurang (menjadi lembek) akibat peristiwa osmosis air keluar sel menuju larutan sukrosa yang hipertonik.',
    },
  },
  {
    id: 2,
    title: 'Struktur Tumbuhan dan Fungsinya',
    short: 'Struktur Tumbuhan',
    group: 'Fisiologi Tumbuhan',
    intro:
      'Organ tumbuhan tersusun atas jaringan epidermis, parenkim, penyokong, dan pengangkut (xilem dan floem). Daun diadaptasikan untuk fotosintesis melalui jaringan palisade berklorofil rapat. Respons tumbuhan mencakup gerak nasti (putri malu) dan tropisme yang diatur hormon auksin dan etilen.',
    formulas: [
      {
        label: 'Reaksi Fotosintesis di Daun',
        math: '6CO_2 + 6H_2O \\xrightarrow{\\text{cahaya, klorofil}} C_6H_{12}O_6 + 6O_2',
        note: 'Penyerapan foton berlangsung maksimal pada kloroplas jaringan palisade mesofil.',
      },
      {
        label: 'Aksi Hormon Fototropisme',
        math: '\\text{Auksin Sisi Gelap} > \\text{Auksin Sisi Terang} \\implies \\text{Batang Membengkok ke Cahaya}',
        note: 'Auksin terurai oleh cahaya atau bermigrasi ke sisi gelap, memicu pemanjangan sel asimetris.',
      },
    ],
    tip: 'Pembeda jaringan pengangkut: Xilem mengangkut air dan mineral dari akar ke daun (arah ke atas); Floem mengedarkan hasil fotosintesis dari daun ke seluruh bagian tumbuhan.',
    example: {
      prompt:
        'Mengapa daun putri malu (Mimosa pudica) menutup sangat cepat saat disentuh dan bagaimana mekanisme selulernya?',
      steps: [
        'Rangsangan sentuhan mekanis menimbulkan impuls listrik dan gelombang kimiawi yang menjalar cepat ke pangkal tangkai daun (pulvinus).',
        'Sinyal ini memicu keluarnya ion kalium (K+) dan klorida secara cepat dari sel-sel parenkim pulvinus bagian bawah (abaksial) ke ruang antarsel.',
        'Keluarnya ion diikuti oleh keluarnya air secara osmosis, menyebabkan sel pulvinus bawah kehilangan tekanan turgor secara drastis sehingga tangkai dan helai daun melipat ke bawah.',
      ],
      answer:
        'Daun menutup akibat gerak seismonasti yang dipicu penurunan tekanan turgor secara mendadak pada sel-sel bantal daun (pulvinus).',
    },
  },
  {
    id: 3,
    title: 'Regulasi Zat pada Tubuh Manusia',
    short: 'Regulasi Tubuh Manusia',
    group: 'Fisiologi Manusia',
    intro:
      'Regulasi homeostatis manusia melibatkan sistem sirkulasi (jantung, eritrosit pembawa O2, trombosit), sistem pencernaan (enzim pepsin, ptialin), respirasi (difusi gas alveolus dan regulasi CO2), serta sistem ekskresi ginjal (filtrasi, reabsorpsi, augmentasi) yang dipengaruhi hormon ADH.',
    formulas: [
      {
        label: 'Pengangkutan Oksigen Darah',
        math: '\\text{Hb} + 4O_2 \\rightleftharpoons \\text{Hb}(O_2)_4 \\; (\\text{Oksihemoglobin})',
        note: 'Eritrosit mengandung hemoglobin yang mengikat oksigen secara reversibel.',
      },
      {
        label: 'Tahapan Pembentukan Urine',
        math: '\\text{Glomerulus (Filtrasi)} \\rightarrow \\text{TKP (Reabsorpsi)} \\rightarrow \\text{TKD (Augmentasi)}',
        note: 'Menghasilkan urine primer, urine sekunder, hingga urine sesungguhnya.',
      },
    ],
    tip: 'Bilik kiri jantung (ventrikel kiri) memiliki lapisan otot miokardium paling tebal karena harus memompa darah beroksigen ke seluruh tubuh dengan tekanan hidrostatik tinggi.',
    example: {
      prompt:
        'Bagaimana tubuh mengatur reabsorpsi air di ginjal saat seseorang berolahraga berat di cuaca panas dengan asupan air terbatas?',
      steps: [
        'Keringat berlebih menyebabkan kehilangan cairan tubuh sehingga tekanan osmotik darah meningkat (plasma darah menjadi lebih pekat).',
        'Peningkatan osmolaritas dideteksi oleh osmoreseptor di hipotalamus, yang kemudian merangsang hipofisis posterior mensekresikan hormon ADH (vasopresin) ke aliran darah.',
        'Hormon ADH meningkatkan permeabilitas saluran air (aquaporin) pada tubulus kontortus distal dan tubulus kolektivus, memicu penyerapan kembali air secara maksimal ke pembuluh darah.',
        'Akibatnya, volume urine yang diekskresikan menjadi sedikit dan berwarna pekat, menjaga tubuh dari ancaman dehidrasi fatal.',
      ],
      answer:
        'Sekresi hormon ADH meningkat, memicu peningkatan reabsorpsi air di tubulus ginjal sehingga volume urine menjadi sedikit dan pekat.',
    },
  },
  {
    id: 4,
    title: 'Imunitas Tubuh Manusia',
    short: 'Sistem Imunitas',
    group: 'Imunologi',
    intro:
      'Sistem pertahanan tubuh terdiri atas imunitas bawaan nonspesifik (kulit, fagositosis, inflamasi) dan imunitas adaptif spesifik (limfosit B penghasil antibodi dan limfosit T). Vaksinasi merangsang sel memori untuk perlindungan jangka panjang. Infeksi HIV merusak limfosit T CD4+.',
    formulas: [
      {
        label: 'Diferensiasi Sel Penghasil Antibodi',
        math: '\\text{Limfosit B Teraktivasi} \\xrightarrow{\\text{Kloning}} \\text{Sel Plasma (Antibodi)} + \\text{Sel B Memori}',
        note: 'Sel plasma menyekresikan imunoglobulin spesifik ke dalam cairan tubuh.',
      },
      {
        label: 'Tanda Kardinal Inflamasi',
        math: 'Rubor \\; (Merah) + Calor \\; (Panas) + Dolor \\; (Nyeri) + Tumor \\; (Bengkak)',
        note: 'Manifestasi vasodilatasi lokal dan peningkatan permeabilitas kapiler terhadap mediator histamin.',
      },
    ],
    tip: 'Vaksinasi menghasilkan kekebalan aktif buatan (tubuh sendiri yang membuat antibodi dan sel memori). Sebaliknya, pemberian serum antitetanus atau ASI adalah kekebalan pasif (menerima antibodi jadi).',
    example: {
      prompt:
        'Mengapa infeksi Human Immunodeficiency Virus (HIV) menyebabkan penderita sangat rentan terhadap infeksi oportunistik yang mematikan?',
      steps: [
        'Virus HIV memiliki glikoprotein gp120 yang secara spesifik berikatan dengan reseptor CD4 pada permukaan sel limfosit T helper (T penolong).',
        'HIV bereplikasi di dalam sel T helper dan melisiskan sel tersebut, sehingga jumlah limfosit CD4+ menurun drastis.',
        'Karena sel T helper berperan sentral mengaktivasi sel B (imunitas humoral) maupun sel T sitotoksik (imunitas seluler), penurunan sel CD4 melumpuhkan seluruh koordinasi sistem imun adaptif.',
        'Akibatnya, patogen oportunistik sederhana seperti jamur candida atau bakteri tuberkulosis dapat berkembang liar tanpa hambatan.',
      ],
      answer:
        'HIV menginfeksi dan melisiskan sel T helper (CD4+), meruntuhkan koordinasi seluruh sistem pertahanan imun adaptif tubuh.',
    },
  },
]
