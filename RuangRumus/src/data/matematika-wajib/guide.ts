export const strategy: [string, string, string][] = [
  [
    '5 menit',
    'Baca petunjuk dan petakan soal',
    'Lihat jumlah soal dan kenali topiknya. Siapkan kertas untuk mencatat informasi yang diketahui dan yang ditanyakan.',
  ],
  [
    '45 menit',
    'Dahulukan pilihan ganda yang kamu kuasai',
    'Pilih satu jawaban A–E. Jika belum yakin, tandai ragu-ragu dan lanjutkan ke nomor lain.',
  ],
  [
    '30 menit',
    'Tulis langkah pada setiap esai',
    'Mulai dari model atau rumus, masukkan nilai, lalu tulis hasil beserta satuannya. Tidak perlu mengetik LaTeX.',
  ],
  [
    '10 menit',
    'Periksa sebelum mengumpulkan',
    'Kembali ke soal yang ditandai. Cek nomor yang kosong, satuan waktu, urutan fungsi, dan perhitungan akhir.',
  ],
]

export const mistakes: [string, string, string][] = [
  [
    'Suku ke-n dan jumlah suku',
    'Memakai rumus jumlah untuk mencari satu suku.',
    'Gunakan $U_n$ untuk satu suku dan $S_n$ untuk total beberapa suku.',
  ],
  [
    'Pangkat pada barisan geometri',
    'Memakai pangkat n untuk suku ke-n.',
    'Jika suku pertama adalah a, gunakan $U_n=ar^{n-1}$.',
  ],
  [
    'Bunga dan saldo akhir',
    'Menuliskan saldo akhir ketika yang diminta bunganya saja.',
    'Kurangi saldo akhir dengan modal awal untuk memperoleh total bunga. Samakan satuan periodenya.',
  ],
  [
    'Urutan fungsi komposisi',
    'Mengerjakan fungsi paling kiri dahulu.',
    'Pada $(f\\circ g)(x)$, hitung $g(x)$ dahulu, kemudian masukkan hasilnya ke f.',
  ],
  [
    'Domain fungsi invers',
    'Mengabaikan penyebut nol atau memilih kedua akar sekaligus.',
    'Periksa batas domain. Pilih cabang yang sesuai agar satu keluaran berasal dari satu masukan.',
  ],
]

export const faq: [string, string][] = [
  [
    'Apakah jawaban saya tersimpan?',
    'Ya. Jawaban, posisi soal, dan penanda ragu-ragu disimpan otomatis di browser ini. Gunakan perangkat dan browser yang sama untuk melanjutkan. Menghapus data situs atau menutup mode privat dapat menghapus progres.',
  ],
  [
    'Bagaimana penskoran ujian Matematika Wajib dihitung?',
    'Skor PG dihitung 4 poin per jawaban benar (maksimum 100). Esai dievaluasi mandiri melalui rubrik 4 kriteria per soal (total 20 poin).',
  ],
  [
    'Bagaimana jika timer habis?',
    'Saat timer mencapai 00:00, ujian akan dikumpulkan otomatis dan lembar hasil beserta pembahasan lengkap akan langsung ditampilkan.',
  ],
  [
    'Bagaimana cara mengetik rumus matematika pada esai?',
    'Kamu tidak perlu mengetik kode LaTeX yang rumit. Tuliskan langkah pengerjaanmu dalam teks biasa yang jelas (misal: "b = 3, a = 5, S15 = 390").',
  ],
]
