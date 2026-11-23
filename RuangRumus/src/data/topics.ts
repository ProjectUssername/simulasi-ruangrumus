import type { Topic } from '../lib/types'
const m = String.raw
export const topics: Topic[] = [
  {
    id: 1,
    title: 'Suku barisan aritmetika dan geometri',
    short: 'Suku ke-n barisan',
    group: 'Barisan & deret',
    intro:
      'Barisan adalah daftar bilangan yang mengikuti pola. Periksa selisih atau perbandingan dua suku berurutan untuk mengenali polanya.',
    formulas: [
      {
        label: 'Barisan aritmetika',
        math: 'U_n=a+(n-1)b',
        note: m`$a$ adalah suku pertama, $b$ beda tetap, dan $n$ nomor suku.`,
      },
      {
        label: 'Barisan geometri',
        math: 'U_n=ar^{n-1}',
        note: m`$r$ adalah rasio tetap, yaitu suku berikutnya dibagi suku sebelumnya (jika tidak nol).`,
      },
    ],
    tip: 'Nomor suku dimulai dari 1. Dari suku pertama ke suku ke-n ada n − 1 langkah.',
    example: {
      prompt: 'Dari barisan 6, 10, 14, dan seterusnya, berapa nilai suku ke-9?',
      steps: [
        m`Selisih antarsuku selalu $4$, jadi ini barisan aritmetika.`,
        m`Catat $a=6$, $b=4$, dan $n=9$.`,
        m`Substitusi: $U_9=6+(9-1)4=38$.`,
      ],
      answer: 'Suku ke-9 adalah 38.',
    },
  },
  {
    id: 2,
    title: 'Jumlah deret aritmetika dan geometri',
    short: 'Jumlah suku deret',
    group: 'Barisan & deret',
    intro:
      'Deret adalah penjumlahan suku-suku barisan. Gunakan jumlah n suku pertama ketika soal menanyakan jumlah keseluruhan, bukan satu suku tertentu.',
    formulas: [
      {
        label: 'Deret aritmetika',
        math: m`S_n=\frac{n}{2}(a+U_n)`,
        note: m`Bentuk lain: $S_n=\frac{n}{2}[2a+(n-1)b]$.`,
      },
      {
        label: 'Deret geometri',
        math: m`S_n=a\frac{1-r^n}{1-r}`,
        note: m`Berlaku untuk $r\ne1$. Jika $r=1$, semua suku sama dan $S_n=na$.`,
      },
    ],
    tip: 'Bedakan “suku ke-10” dengan “jumlah 10 suku pertama”.',
    example: {
      prompt: m`Hitung jumlah empat suku pertama dari deret $5+10+20+\cdots$`,
      steps: [
        m`Rasio $r=10/5=2$ dan suku pertama $a=5$.`,
        m`Gunakan $S_4=5\frac{2^4-1}{2-1}$.`,
        m`Hasilnya $5(15)=75$. Periksa: $5+10+20+40=75$.`,
      ],
      answer: 'Jumlah empat sukunya adalah 75.',
    },
  },
  {
    id: 3,
    title: 'Penerapan barisan dan deret',
    short: 'Penerapan barisan dan deret',
    group: 'Barisan & deret',
    intro:
      'Setoran yang naik dengan jumlah tetap membentuk barisan aritmetika. Pertumbuhan dengan faktor pengali tetap membentuk barisan geometri.',
    formulas: [
      {
        label: 'Setoran pada periode ke-n',
        math: 'U_n=a+(n-1)b',
        note: 'Gunakan jika yang ditanya hanya setoran pada satu periode.',
      },
      {
        label: 'Total setoran hingga periode ke-n',
        math: m`S_n=\frac{n}{2}(2a+(n-1)b)`,
        note: 'Jumlahkan setoran dari periode pertama sampai periode ke-n.',
      },
    ],
    tip: 'Tentukan dulu apakah cerita meminta nilai satu periode atau akumulasi beberapa periode.',
    example: {
      prompt:
        'Ayu menabung Rp20.000 pada minggu pertama. Setorannya bertambah Rp2.000 tiap minggu. Berapa total setoran selama enam minggu?',
      steps: [
        m`Modelnya aritmetika: $a=20.000$, $b=2.000$, $n=6$.`,
        m`Setoran keenam $U_6=20.000+5(2.000)=30.000$.`,
        m`Total $S_6=\frac{6}{2}(20.000+30.000)=150.000$.`,
      ],
      answer: 'Total setoran Ayu adalah Rp150.000.',
    },
  },
  {
    id: 4,
    title: 'Menghitung bunga tunggal dan majemuk',
    short: 'Perhitungan bunga',
    group: 'Keuangan',
    intro:
      'Bunga tunggal selalu dihitung dari modal awal. Pada bunga majemuk, bunga yang sudah masuk ke saldo akan ikut menghasilkan bunga berikutnya.',
    formulas: [
      {
        label: 'Saldo dengan bunga tunggal',
        math: 'A=P(1+it)',
        note: m`$P$ modal awal, $i$ suku bunga per periode, $t$ banyak periode. Bunganya saja adalah $I=Pit$.`,
      },
      {
        label: 'Saldo dengan bunga majemuk',
        math: 'A=P(1+i)^t',
        note: 'Gunakan suku bunga efektif per periode kapitalisasi dan jumlah periode yang sesuai.',
      },
    ],
    tip: 'Ubah persen ke desimal. Untuk bunga per tahun, enam bulan sama dengan setengah tahun.',
    example: {
      prompt:
        'Modal Rp2.000.000 mendapat bunga majemuk 5% per tahun. Berapa saldo pada akhir tahun kedua tanpa biaya?',
      steps: [
        m`Diketahui $P=2.000.000$, $i=0{,}05$, dan $t=2$.`,
        m`Saldo tahun pertama $2.000.000(1{,}05)=2.100.000$.`,
        m`Saldo tahun kedua $2.100.000(1{,}05)=2.205.000$.`,
      ],
      answer: 'Saldo akhir adalah Rp2.205.000.',
    },
  },
  {
    id: 5,
    title: 'Perbedaan bunga tunggal dan majemuk',
    short: 'Perbandingan bunga',
    group: 'Keuangan',
    intro:
      'Dengan pokok dan suku bunga positif yang sama, bunga periode pertama sama besar. Setelah itu, bunga majemuk bertambah karena memakai saldo terbaru.',
    formulas: [
      {
        label: 'Bunga pada periode ke-k',
        math: m`I_{k,\text{tunggal}}=Pi`,
        note: 'Besar bunga tunggal tetap pada setiap periode.',
      },
      {
        label: 'Bunga majemuk pada periode ke-k',
        math: m`I_{k,\text{majemuk}}=P(1+i)^{k-1}i`,
        note: 'Kalikan saldo awal periode ke-k dengan bunga per periode.',
      },
    ],
    tip: '“Bunga tahun ketiga” berbeda dari “total bunga selama tiga tahun”.',
    example: {
      prompt:
        'Modal Rp4.000.000 berbunga 5% per tahun. Bandingkan bunga pada tahun kedua untuk skema tunggal dan majemuk tahunan.',
      steps: [
        m`Bunga tunggal tetap $4.000.000(0{,}05)=200.000$.`,
        m`Saldo majemuk awal tahun kedua adalah Rp4.200.000, sehingga bunganya $4.200.000(0{,}05)=210.000$.`,
        m`Selisih bunga tahun kedua $210.000-200.000=10.000$.`,
      ],
      answer: 'Bunga majemuk tahun kedua lebih besar Rp10.000.',
    },
  },
  {
    id: 6,
    title: 'Definisi fungsi komposisi',
    short: 'Konsep fungsi komposisi',
    group: 'Fungsi',
    intro:
      'Komposisi menggabungkan dua proses. Keluaran fungsi pertama menjadi masukan fungsi berikutnya. Urutan pengerjaan dibaca dari kanan ke kiri.',
    formulas: [
      {
        label: 'Definisi komposisi',
        math: m`(f\circ g)(x)=f(g(x))`,
        note: m`Kerjakan $g$ terlebih dahulu, kemudian $f$.`,
      },
      {
        label: 'Syarat masukan',
        math: m`x\in D_g,\quad g(x)\in D_f`,
        note: 'Masukan harus memenuhi domain fungsi pertama, dan hasilnya harus diterima fungsi berikutnya.',
      },
    ],
    tip: 'Komposisi bukan perkalian. Pada umumnya, menukar urutan akan mengubah hasil.',
    example: {
      prompt: m`Sebuah mesin menambah bilangan dengan 2, lalu mesin kedua melipatgandakannya. Jika $g(x)=x+2$ dan $f(x)=2x$, bagaimana model proses tersebut?`,
      steps: [
        m`Masukan $x$ masuk ke mesin $g$, menghasilkan $x+2$.`,
        m`Hasil itu masuk ke $f$, sehingga $f(g(x))=2(x+2)$.`,
        m`Jadi $(f\circ g)(x)=2x+4$. Urutan sebaliknya menghasilkan $2x+2$.`,
      ],
      answer: m`Komposisinya adalah $(f\circ g)(x)=2x+4$.`,
    },
  },
  {
    id: 7,
    title: 'Menentukan nilai fungsi komposisi',
    short: 'Nilai fungsi komposisi',
    group: 'Fungsi',
    intro:
      'Untuk mencari nilai komposisi pada suatu bilangan, hitung fungsi bagian dalam dahulu. Masukkan hasilnya ke fungsi bagian luar.',
    formulas: [
      {
        label: 'Evaluasi di titik a',
        math: m`(f\circ g)(a)=f(g(a))`,
        note: m`Simpan hasil $g(a)$ sebelum memasukkannya ke $f$.`,
      },
    ],
    tip: 'Gunakan tanda kurung ketika mengganti variabel agar pangkat dan tanda negatif tetap tepat.',
    example: {
      prompt: m`Jika $f(x)=x^2+1$ dan $g(x)=2x-1$, berapa $(f\circ g)(3)$?`,
      steps: [
        m`Cari $g(3)=2(3)-1=5$.`,
        m`Masukkan 5 ke $f$: $f(5)=5^2+1$.`,
        m`Hasil akhirnya $25+1=26$.`,
      ],
      answer: m`$(f\circ g)(3)=26$.`,
    },
  },
  {
    id: 8,
    title: 'Menentukan nilai fungsi invers',
    short: 'Nilai fungsi invers',
    group: 'Fungsi',
    intro:
      'Invers mengembalikan keluaran ke masukan asal. Sebuah fungsi mempunyai invers pada daerah hasilnya jika setiap keluaran berasal dari tepat satu masukan.',
    formulas: [
      {
        label: 'Hubungan fungsi dan invers',
        math: m`f(a)=b\iff f^{-1}(b)=a`,
        note: m`Untuk mencari $f^{-1}(b)$, selesaikan persamaan $f(x)=b$.`,
      },
      {
        label: 'Invers fungsi linear',
        math: m`f(x)=px+q\Rightarrow f^{-1}(x)=\frac{x-q}{p}`,
        note: m`Koefisien $p$ tidak boleh nol.`,
      },
    ],
    tip: 'Notasi invers tidak berarti satu dibagi fungsi.',
    example: {
      prompt: m`Fungsi biaya sewa adalah $C(t)=5.000t+10.000$ rupiah. Jika biaya Rp30.000, berapa jam lama sewa?`,
      steps: [
        m`Tetapkan $C(t)=30.000$.`,
        m`Kurangi biaya tetap: $5.000t=30.000-10.000=20.000$.`,
        m`Bagi dengan tarif per jam: $t=20.000/5.000=4$.`,
      ],
      answer: 'Lama sewa adalah 4 jam.',
    },
  },
  {
    id: 9,
    title: 'Invers dari fungsi komposisi',
    short: 'Invers fungsi komposisi',
    group: 'Fungsi',
    intro:
      'Untuk membalik gabungan dua proses, batalkan proses terakhir lebih dahulu. Kamu juga bisa menyusun fungsi komposisinya, kemudian mencari inversnya secara langsung.',
    formulas: [
      {
        label: 'Urutan invers',
        math: m`(f\circ g)^{-1}=g^{-1}\circ f^{-1}`,
        note: 'Gunakan pada domain dan daerah hasil yang membuat tiap fungsi dapat dibalik.',
      },
      {
        label: 'Periksa kembali',
        math: m`h^{-1}(h(x))=x`,
        note: 'Identitas ini harus berlaku untuk setiap x di domain h.',
      },
    ],
    tip: 'Tuliskan batas domain. Penyebut tidak boleh nol, dan akar kuadrat riil membutuhkan masukan tidak negatif.',
    example: {
      prompt: m`Jika $f(x)=3x+2$ dan $g(x)=x-1$, tentukan $(f\circ g)^{-1}(x)$.`,
      steps: [
        m`Susun $h(x)=3(x-1)+2=3x-1$.`,
        m`Tulis $y=3x-1$, sehingga $x=\frac{y+1}{3}$.`,
        m`Maka $h^{-1}(x)=\frac{x+1}{3}$. Cek: $h^{-1}(3x-1)=x$.`,
      ],
      answer: m`$(f\circ g)^{-1}(x)=\frac{x+1}{3}$, untuk semua bilangan riil.`,
    },
  },
]
