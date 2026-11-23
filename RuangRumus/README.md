# RuangRumus

Ruang belajar dan simulasi ujian Matematika SMA berbahasa Indonesia. Dibuat dengan **Next.js App Router, React, TypeScript, Tailwind CSS, dan KaTeX**. Tidak membutuhkan akun, API key, atau database.

## Menjalankan proyek

Gunakan Node.js 22.12+ atau 24 dan npm.

```bash
npm install
npm run dev
```

Perintah ini menjalankan Next.js. Buka alamat lokal yang tercetak di terminal. Untuk instalasi yang persis mengikuti lockfile, gunakan `npm ci`.

## Halaman

| Rute               | Isi                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------- |
| `/`                | Menu belajar, progres nyata, ringkasan ujian, dan daftar kisi-kisi                       |
| `/materi`          | 9 ringkasan konsep, rumus KaTeX, pencarian, dan penanda selesai                          |
| `/contoh-soal`     | 9 soal latihan tambahan dengan pembahasan bertahap                                       |
| `/cara-pengerjaan` | Pembagian waktu, kesalahan umum, dan petunjuk teknis                                     |
| `/try-out`         | 25 PG A–E, 5 esai, timer 90 menit, navigasi nomor, ragu-ragu, dan simpan otomatis        |
| `/hasil`           | Skor PG, pembahasan seluruh soal, analisis per kisi-kisi, riwayat, kunci dan rubrik esai |

Tautan seperti `/materi?topik=4` membuka kisi-kisi tertentu. Navigasi kembali/maju browser dan pembukaan langsung setiap halaman didukung.

## Struktur

```text
app/                         # Entry, layout, dan rute Next.js App Router
src/
  components/                # Header, dialog, KaTeX, progres, navigasi soal
  data/
    questions.ts             # 30 soal ujian, kunci, pembahasan, rubrik
    topics.ts                # 9 konsep, rumus, dan contoh tambahan
  lib/
    navigation.tsx           # Navigasi dan deep link
    study-store.tsx          # Progres, autosave, deadline, dan riwayat lokal
    types.ts                 # Model data terketik
  screens/                   # Beranda, materi/contoh, panduan, ujian, hasil
  styles/                    # Token, tata letak, belajar, ujian, responsif
  App.tsx                    # Komposisi aplikasi bersama
  main.tsx                   # Entry pratinjau Vite
public/
  fonts/                     # Font lokal dan lisensi SIL OFL
  images/                    # Ilustrasi WebP lokal
scripts/
  verify-questions.mjs       # Verifikasi matematis dan validasi seluruh KaTeX
  test-app.py                # Uji interaksi browser pada hasil build
docs/design.md               # Arah visual dan atribusi skill desain
```

## Pemeriksaan jawaban

```bash
npm run verify
```

Pemeriksa menghitung ulang barisan dan deret dengan enumerasi suku, mengakumulasi bunga per periode, menyelesaikan nilai invers, dan menguji identitas komposisi pada beberapa masukan. Jawaban dihitung tanpa menggunakan kunci sebagai masukan, kemudian dibandingkan dengan opsi yang ditandai benar. Untuk esai, nilai antara, hasil akhir, syarat domain, dan kelengkapan rubrik diperiksa. Seluruh ekspresi LaTeX juga dirender dengan `throwOnError: true`.

Sebaran soal per kisi-kisi berurutan: **3, 4, 4, 4, 3, 3, 3, 3, 3**. Total 30 soal dengan tingkat dasar, menengah, dan lanjut.

- **Skor PG:** jumlah benar × 4, maksimum 100. Jawaban salah/kosong tidak mengurangi nilai.
- **Esai:** 4 kriteria masing-masing 1 poin per soal. Siswa membandingkan jawabannya dengan kunci dan mencentang rubrik; total mandiri maksimum 20. Nilai ini **tidak** dicampurkan ke skor PG dan bukan penilaian otomatis.
- **Progres belajar:** (materi dipelajari + contoh dipahami) / 18 × 100%. Percobaan ujian dihitung terpisah.

## Penyimpanan dan timer

Semua data disimpan di `localStorage` dengan kunci `ruangrumus.study.v1`, hanya pada browser dan perangkat yang sedang digunakan. Tidak ada sinkronisasi akun atau pengiriman jawaban ke server. Setiap perubahan jawaban, nomor aktif, dan penanda ragu-ragu langsung disimpan. Kegagalan penyimpanan menampilkan peringatan.

Timer memakai waktu akhir absolut, bukan hitungan yang direset saat pemuatan ulang. Waktu terus berjalan ketika tab ditutup. Jika batas waktu terlewati saat browser ditutup, jawaban terakhir dinilai saat aplikasi dibuka kembali. Mengulang ujian membuat percobaan baru tanpa menghapus riwayat. Data situs yang dihapus atau sesi privat yang ditutup dapat menghapus progres.

**RuangRumus adalah sarana latihan mandiri**, bukan sistem ujian berpengawasan. Bank soal dan kunci berada di klien dan jam perangkat tidak dianggap sebagai sumber waktu tepercaya untuk ujian resmi.

## Build dan deploy ke Vercel

```bash
npm run build
```

Build menjalankan verifikasi matematika, pemeriksaan TypeScript, build Vite untuk pratinjau (`dist/`), lalu build produksi Next.js dengan static export (`out/`). Keduanya menggunakan komponen, data, dan desain yang sama; tidak ada dua implementasi aplikasi.

Impor repositori ke Vercel. Konfigurasi `vercel.json` sudah menetapkan build command `npm run build`, output `out`, dan dukungan rute dengan trailing slash. Tidak diperlukan environment variable. Halaman Next.js diprarender untuk keenam rute.

Untuk pratinjau Vite saja gunakan `npm run dev:vite` atau `npm run build:preview` dilanjutkan `npm run preview`.

## Uji browser

Dengan Python Playwright dan Chromium tersedia, jalankan `python3 scripts/test-app.py` setelah build. Pengujian menggunakan server statis sementara yang otomatis ditutup. Cakupan: navigasi, materi & contoh, simpan otomatis, pemulihan sesi, skor, rubrik esai, timer kedaluwarsa, serta tata letak HP dan desktop.

## Desain

Arah visual diambil dari alat belajar nyata: kertas grafik, buku latihan, jangka, dan bangun ruang. Ilustrasi dan font disajikan secara lokal; ikon memakai Lucide. Referensi **ui-ux-pro-max** dan **unslop** beserta atribusi dicatat dalam `docs/design.md`.
