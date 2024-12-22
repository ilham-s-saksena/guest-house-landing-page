# Guest House Website Landing Page

Ini adalah proyek sederhana untuk sebuah landing page website Guest House. Proyek ini menggunakan **Tailwind CSS** sebagai framework styling dan **Flowbite** untuk beberapa komponen UI interaktif. File ini terdiri dari `index.html`, yang dirancang untuk dijalankan menggunakan Live Server.

## Fitur Utama

- **Styling Modern**: Menggunakan kelas-kelas dari **Tailwind CSS** yang sudah di-*build* dan dimuat melalui `dist/main.css`.
- **Komponen Interaktif**: Beberapa elemen UI memanfaatkan **Flowbite** yang dimuat melalui `dist/main.min.js`.
- **Sederhana & Cepat**: Hanya terdiri dari satu file HTML yang mudah dijalankan.

## Instalasi dan Penggunaan

### 1. Clone Repository
Clone repository ini ke komputer Anda:

```bash
git clone https://github.com/ilham-s-saksena/guest-house-landing-page.git
cd guest-house-landing-page
```

### 2. Jalankan dengan Live Server
Untuk memastikan bahwa modul JavaScript (`<script type="module">`) berfungsi dengan benar, jalankan file ini menggunakan Live Server. Anda dapat menggunakan ekstensi **Live Server** di VS Code atau alat serupa.

#### Menggunakan Live Server di VS Code:
1. Install ekstensi **Live Server** dari marketplace VS Code.
2. Klik kanan pada `index.html` dan pilih **Open with Live Server**.

#### Jika Live Server tidak tersedia:
Gunakan server HTTP sederhana seperti berikut:
```bash
npx http-server .
```

Akses situs di browser melalui URL yang disediakan (biasanya `http://localhost:8080`).

### 3. Struktur Proyek
```
.
├── index.html        # File utama untuk halaman landing page
├── dist/
│   ├── basic.css     # File CSS untuk keperluan styling lainnya
│   ├── basic.js      # File Javascript untuk keperluan interaktif UI lainnya
│   ├── main.css      # File CSS hasil build dari Tailwind CSS
│   └── main.min.js   # File JavaScript yang berisi script Flowbite
├── img/
│   ├── 1.jpg         # Semua asset gambar ada di sini
│   └── 2.jpg         # Semua asset gambar ada di sini
└── README.md         # File dokumentasi ini
```

### 4. Teknologi yang Digunakan
- **Tailwind CSS**: Framework CSS untuk styling.
- **Flowbite**: Komponen UI yang terintegrasi dengan Tailwind CSS.
- **Live Server**: Untuk menjalankan file HTML dengan dukungan module JavaScript.

## Catatan
- **Script Modul JavaScript**: Jika Anda membuka file ini langsung di browser tanpa server, modul JavaScript seperti:
  ```html
  <script type="module" src="dist/main.min.js"></script>
  ```
  tidak akan berfungsi. Oleh karena itu, **wajib menjalankan file ini melalui Live Server** atau server HTTP lainnya.


Terima kasih telah mengunjungi proyek ini! 🎉

