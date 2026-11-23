# Desain RuangRumus

## Arah desain

- **Produk:** ruang belajar mandiri untuk persiapan ujian Matematika SMA.
- **Karakter:** teratur, taktil, dan bersahabat.
- **Dunia visual:** meja belajar, kertas grafik, buku, dan alat gambar geometri.
- **Fokus:** model bangun ruang pada sampul simulasi dan ilustrasi alat belajar pada tiga kartu navigasi.
- **Ciri khas:** penomoran dua digit seperti indeks dalam buku latihan.

## Penerapan skill

Rekomendasi sistem desain **UI UX Pro Max** dari nextlevelbuilder untuk aplikasi pendidikan dipakai pada ilustrasi 3D, hierarki tindakan, kontras, dan navigasi. Palet disesuaikan menjadi kobalt, putih, dan warna kertas; tipografi Plus Jakarta Sans menggantikan pilihan yang terlalu kekanak-kanakan untuk siswa SMA. Pencarian UX khusus modal dipakai untuk memilih dialog native, penguncian fokus, Escape, dan pengembalian fokus.

Prinsip **unslop**, karya Damir Sokolovsky (heydamir), CC BY 4.0, digunakan untuk menentukan dunia visual dari produk, mengurangi teks dan ornamen, serta menjaga navigasi tetap tenang. Skill menjadi referensi desain, bukan dependensi runtime.

Sumber: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill dan https://github.com/heydamir/unslop. Lisensi referensi unslop: https://creativecommons.org/licenses/by/4.0/.

## Aset

Ilustrasi dibuat khusus dengan gpt-image-1.5, disimpan secara lokal sebagai WebP transparan. Konsep utama: kerucut gading di atas kubus berkisi biru, tangga kecil, bola, dan torus mint. Kartu navigasi: buku terbuka, buku latihan dengan pensil, serta jangka dan penggaris segitiga. Semua ikon UI menggunakan Lucide; tidak ada emoji sebagai ikon. Plus Jakarta Sans disajikan lokal dengan lisensi OFL di `public/fonts/OFL.txt`.

## Interaksi

- Satu warna aksi utama. Status jawaban memakai teks/simbol selain warna.
- Tidak ada animasi dekoratif berulang. Transisi singkat menghormati `prefers-reduced-motion`.
- Progres awal benar-benar nol, tanpa riwayat atau aktivitas buatan.
- Bahasa antarmuka Indonesia. Rumus ditampilkan sebagai HTML dan MathML menggunakan KaTeX.
- Komponen antarmuka yang sama dipakai pada Next.js dan build pratinjau Vite.
