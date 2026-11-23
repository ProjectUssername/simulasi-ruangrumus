export interface PracticeCriterion {
  id: string
  name: string
  element: 'Wiraga' | 'Wirama' | 'Wirasa' | 'Komposisi'
  weight: number
  description: string
  levels: {
    score: number
    label: string
    descriptor: string
  }[]
}

export interface PracticeRubric {
  title: string
  subtitle: string
  instructions: string
  criteria: PracticeCriterion[]
}

export const practiceRubric: PracticeRubric = {
  title: 'Lembar Penilaian Praktik Seni Tari',
  subtitle: 'Instrumen Penilaian Kinerja Asesmen Sumatif Tari Tradisional / Kreasi',
  instructions:
    'Gunakan rubrik penilaian berbasis kinerja ini untuk mengevaluasi kompetensi menari secara langsung. Pilih capaian level performa untuk masing-masing dari 4 kriteria utama. Skor akhir otomatis diakumulasikan dalam skala 100.',
  criteria: [
    {
      id: 'wiraga',
      name: 'Wiraga (Penguasaan Teknik Gerak & Keterampilan Fisik)',
      element: 'Wiraga',
      weight: 30,
      description:
        'Menilai ketepatan postur (sikap tubuh, dada, bahu), artikulasi jari (ngrayung/nyempurit/keblak), kelenturan sendi, kekuatan tumpuan kaki, dan kelancaran transisi antar-motif gerak.',
      levels: [
        {
          score: 30,
          label: 'Sangat Baik (26–30)',
          descriptor:
            'Sikap tubuh sangat presisi sesuai karakter tarian, kelenturan dan koordinasi raga sempurna, teknik gerak jari dan kaki sangat matang, tidak ada keraguan posisi.',
        },
        {
          score: 24,
          label: 'Baik (21–25)',
          descriptor:
            'Sikap tubuh tepat, kelenturan baik, mampu mengeksekusi sebagian besar teknik gerak dengan rapi meski sesekali ada kekakuan kecil pada transisi gerak.',
        },
        {
          score: 18,
          label: 'Cukup (16–20)',
          descriptor:
            'Penguasaan teknik gerak dasar cukup, namun postur tubuh kadang kurang stabil dan beberapa posisi tangan/kaki belum sesuai pakem.',
        },
        {
          score: 12,
          label: 'Perlu Bimbingan (≤15)',
          descriptor:
            'Kerap lupa ragam gerak, postur tidak stabil, koordinasi tangan dan kaki belum selaras, memerlukan bimbingan teknik intensif.',
        },
      ],
    },
    {
      id: 'wirama',
      name: 'Wirama (Ketepatan Irama, Tempo, & Keselarasan Musik)',
      element: 'Wirama',
      weight: 25,
      description:
        'Menilai kepekaan musikal penari dalam menyelaraskan aksen ketukan gerak dengan iringan musik (gamelan/vokal/audio), ketepatan tempo lambat-sedang-cepat, dan ketepatan jatuhnya gong/ketukan penentu.',
      levels: [
        {
          score: 25,
          label: 'Sangat Baik (22–25)',
          descriptor:
            'Gerakan selaras sempurna dengan irama dan ketukan musik pengiring, perubahan tempo dieksekusi tepat tanpa mendahului atau tertinggal.',
        },
        {
          score: 20,
          label: 'Baik (18–21)',
          descriptor:
            'Gerakan mengikuti irama musik dengan baik, hanya terjadi sedikit ketidaktepatan tempo saat transisi ritme mendadak.',
        },
        {
          score: 15,
          label: 'Cukup (14–17)',
          descriptor:
            'Kurang peka terhadap aksentuasi ketukan musik, kadang mendahului atau tertinggal dari tempo iringan pengrawit.',
        },
        {
          score: 10,
          label: 'Perlu Bimbingan (≤13)',
          descriptor:
            'Gerak tidak sinkron dengan alunan musik iringan, tempo gerak kacau dan terlepas dari ritme dasar musik.',
        },
      ],
    },
    {
      id: 'wirasa',
      name: 'Wirasa (Penghayatan Karakter & Ekspresi Jiwa)',
      element: 'Wirasa',
      weight: 25,
      description:
        'Menilai kedalaman penghayatan emosi karakter, kejelasan mimik wajah (pasemon), ketajaman dan arah pandangan mata (polatan/seledet), serta daya komunikatif tarian dalam menyampaikan pesan batin kepada penonton.',
      levels: [
        {
          score: 25,
          label: 'Sangat Baik (22–25)',
          descriptor:
            'Penjiwaan watak peran sangat mendalam dan memukau, ekspresi wajah dan sorot mata sangat hidup, mampu menghanyutkan emosi penonton.',
        },
        {
          score: 20,
          label: 'Baik (18–21)',
          descriptor:
            'Ekspresi wajah dan mimik sesuai dengan karakter peran, penghayatan tarian terbangun dengan baik sepanjang penampilan.',
        },
        {
          score: 15,
          label: 'Cukup (14–17)',
          descriptor:
            'Mimik wajah masih terlihat tegang atau datar, penjiwaan karakter kurang tampak, fokus pandangan mata ragu-ragu.',
        },
        {
          score: 10,
          label: 'Perlu Bimbingan (≤13)',
          descriptor:
            'Ekspresi kosong tanpa penjiwaan emosi peran, terkesan hanya menghafal fisik gerakan secara mekanis.',
        },
      ],
    },
    {
      id: 'komposisi',
      name: 'Pola Lantai, Tata Busana, & Properti',
      element: 'Komposisi',
      weight: 20,
      description:
        'Menilai kedisiplinan dan kerapian formasi pola lantai di atas panggung, keluwesan dan keterampilan dalam memainkan properti tari (selendang/kipas/piring), serta kerapian dan keserasian tata busana pementasan.',
      levels: [
        {
          score: 20,
          label: 'Sangat Baik (18–20)',
          descriptor:
            'Penguasaan ruang pentas dan pola lantai sangat teratur dan rapi, properti dimanipulasi dengan sangat terampil dan aman, busana sangat rapi dan serasi.',
        },
        {
          score: 16,
          label: 'Baik (15–17)',
          descriptor:
            'Pola lantai terbentuk dengan jelas, properti dimainkan dengan baik tanpa terjatuh, busana rapi dan mendukung gerak.',
        },
        {
          score: 12,
          label: 'Cukup (11–14)',
          descriptor:
            'Formasi pola lantai kadang kurang presisi garisnya, penggunaan properti masih tampak kaku atau sempat tersangkut busana.',
        },
        {
          score: 8,
          label: 'Perlu Bimbingan (≤10)',
          descriptor:
            'Sering salah posisi blocking panggung, properti terjatuh atau tidak terkendali, kelengkapan busana tidak rapi.',
        },
      ],
    },
  ],
}
