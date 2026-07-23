# Requirements Document
<!-- ADTO Corporate Website — PT Adto Cipta Usaha Mandiri -->

## Introduction

PT Adto Cipta Usaha Mandiri adalah perusahaan penyedia solusi terintegrasi (one-stop solution) untuk industri minyak dan gas (migas) serta pertambangan yang berbasis di Depok, Jawa Barat. Perusahaan beroperasi melalui tiga lini bisnis utama: Chemical Oil & Gas (Bentonite, Barite, dan produk kimia drilling), Sparepart & Service (komponen industri, pompa, valve, peralatan rig), dan Mobilisasi/Demobilisasi (jasa transportasi alat berat ke site).

Website ini dirancang sebagai ekosistem digital enterprise yang mencakup corporate branding, marketing platform, lead generation, vendor registration portal, request quotation platform, career portal, knowledge center, dan product showcase. Website menggunakan tagline resmi "Energi Terpadu, Solusi Mandiri" dengan identitas visual Navy #0A2F5C sebagai warna primer, Orange #FF5A00 sebagai warna aksen, dan Cool Gray #E9ECEF sebagai warna netral.

Stack teknologi yang digunakan: Next.js + React + TypeScript + Tailwind CSS (Frontend), NestJS + TypeScript (Backend API), PostgreSQL + Prisma ORM (Database), Payload CMS (Content Management), JWT + Redis (Autentikasi), BullMQ (Queue), Sharp (Pemrosesan Gambar), S3 Compatible (Penyimpanan), dan Docker + Docker Compose (Infrastruktur).

---

## Glossary

- **Website**: Platform web enterprise PT Adto Cipta Usaha Mandiri secara keseluruhan
- **Frontend**: Aplikasi Next.js yang di-render di sisi klien dan server
- **Backend_API**: Layanan NestJS yang menyediakan RESTful API untuk seluruh operasi data
- **CMS**: Payload CMS yang digunakan tim konten untuk mengelola konten website
- **Database**: Sistem PostgreSQL dengan Prisma ORM untuk persistensi data
- **Cache**: Sistem Redis yang digunakan untuk caching sesi, rate limiting, dan data sementara
- **Storage**: Sistem penyimpanan file S3-compatible untuk aset media
- **Queue**: Sistem BullMQ untuk pemrosesan tugas asinkron seperti pengiriman email
- **Pengunjung**: Pengguna anonim yang mengakses website tanpa autentikasi
- **Lead**: Calon pelanggan yang mengirimkan data kontak atau formulir melalui website
- **Admin**: Pengguna internal yang mengelola konten dan data melalui CMS atau dashboard admin
- **Vendor**: Perusahaan atau individu yang mendaftarkan diri sebagai mitra pemasok melalui portal vendor
- **Kandidat**: Pelamar kerja yang mengakses dan berinteraksi dengan portal karir
- **SEO**: Search Engine Optimization — optimasi untuk meningkatkan peringkat di mesin pencari
- **WCAG**: Web Content Accessibility Guidelines — standar aksesibilitas konten web
- **SSR**: Server-Side Rendering — teknik render halaman di server sebelum dikirim ke klien
- **SSG**: Static Site Generation — teknik pra-render halaman statis saat build
- **ISR**: Incremental Static Regeneration — teknik regenerasi halaman statis secara bertahap
- **CTA**: Call to Action — elemen antarmuka yang mendorong pengunjung melakukan tindakan tertentu
- **RFQ**: Request for Quotation — permintaan penawaran harga formal
- **API_Grade**: Standar kualitas produk kimia sesuai spesifikasi American Petroleum Institute
- **NPT**: Non-Productive Time — waktu tidak produktif dalam operasi pengeboran
- **MSDS**: Material Safety Data Sheet — lembar data keselamatan material
- **COA**: Certificate of Analysis — sertifikat analisis kualitas produk
- **Structured_Data**: Markup Schema.org yang tertanam di halaman untuk meningkatkan pemahaman mesin pencari
- **Core_Web_Vitals**: Metrik performa web Google: LCP, FID/INP, dan CLS
- **Rate_Limiter**: Komponen Backend_API yang membatasi frekuensi permintaan dari satu sumber

---

## Requirements

### Requirements 1: Arsitektur Sistem dan Fondasi Teknis

**User Story:** Sebagai tim pengembang, saya ingin fondasi arsitektur yang solid dan terstandarisasi, agar seluruh fitur website dapat dikembangkan, diuji, dan di-deploy secara konsisten dan andal.

#### Kriteria Penerimaan

1. THE Frontend SHALL menggunakan Next.js App Router dengan TypeScript strict mode untuk seluruh komponen, halaman, dan fungsi utilitas.
2. THE Backend_API SHALL menggunakan NestJS dengan TypeScript strict mode, mengikuti prinsip SOLID dan arsitektur berbasis fitur (feature-based architecture).
3. THE Database SHALL menggunakan PostgreSQL versi 15 atau lebih baru dengan Prisma ORM untuk seluruh operasi baca dan tulis data.
4. THE Frontend SHALL mengimplementasikan Atomic Design System dengan komponen yang terbagi dalam layer: atoms, molecules, organisms, templates, dan pages.
5. WHEN sebuah halaman diakses oleh Pengunjung, THE Frontend SHALL menerapkan strategi render yang sesuai: SSG untuk halaman statis, SSR untuk halaman dinamis, dan ISR untuk konten yang diperbarui berkala dengan revalidation interval yang dapat dikonfigurasi per halaman.
6. THE Backend_API SHALL menerapkan validasi input menggunakan class-validator dan class-transformer pada seluruh endpoint yang menerima data dari klien.
7. THE Cache SHALL menyimpan data sesi autentikasi dengan TTL (Time to Live) yang dapat dikonfigurasi melalui environment variable.
8. THE Queue SHALL memproses tugas asinkron seperti pengiriman email notifikasi, pemrosesan gambar, dan pembersihan data secara terpisah dari siklus permintaan HTTP utama.
9. THE Storage SHALL menyimpan seluruh aset media yang diunggah melalui CMS atau formulir menggunakan S3-compatible API dengan path yang terstruktur berdasarkan kategori konten dan tahun-bulan.
10. WHEN sebuah image diunggah ke Storage, THE Backend_API SHALL memproses image menggunakan Sharp untuk menghasilkan varian ukuran: thumbnail (200×200px), medium (800px lebar), dan large (1600px lebar) dalam format WebP.
11. THE Frontend SHALL dibangun menggunakan Tailwind CSS dengan konfigurasi design token kustom yang mencerminkan brand ADTO: warna primer Navy #0A2F5C, warna aksen Orange #FF5A00, dan warna netral Cool Gray #E9ECEF.
12. THE Frontend SHALL menggunakan font Poppins Bold untuk elemen heading dan Inter/Poppins Regular untuk elemen body text, dimuat via Next.js Font Optimization untuk mencegah layout shift.
13. THE Website SHALL dapat di-deploy menggunakan Docker Compose dengan service yang terdefinisi untuk: frontend, backend_api, database, cache, dan storage.
14. IF sebuah environment variable wajib tidak terdefinisi saat startup, THEN THE Backend_API SHALL menghentikan proses startup dan mencatat pesan error yang menjelaskan variable yang hilang.
15. THE Backend_API SHALL mengimplementasikan global exception filter yang menangkap seluruh error yang tidak tertangani dan mengembalikan respons JSON terstruktur dengan kode HTTP yang sesuai, tanpa mengekspos stack trace di environment production.

---

### Requirements 2: Halaman Beranda (Homepage)

**User Story:** Sebagai Pengunjung, saya ingin melihat halaman beranda yang kuat dan informatif, agar saya dapat langsung memahami identitas, nilai, dan layanan utama PT Adto Cipta Usaha Mandiri.

#### Kriteria Penerimaan

1. THE Frontend SHALL menampilkan hero section di bagian paling atas halaman beranda yang memuat: tagline utama "Energi Terpadu, Solusi Mandiri", sub-tagline yang mendeskripsikan value proposition ADTO, minimal satu CTA primer, dan visual background yang mencerminkan industri migas.
2. THE Frontend SHALL menampilkan section ringkasan tiga lini bisnis utama (Chemical Oil & Gas, Sparepart & Service, Mobilisasi/Demobilisasi) beserta deskripsi singkat dan tautan ke halaman layanan masing-masing.
3. THE Frontend SHALL menampilkan section "Mengapa ADTO" yang memuat minimal empat keunggulan kompetitif perusahaan dalam format card atau grid visual.
4. THE Frontend SHALL menampilkan section statistik atau pencapaian perusahaan (misal: jumlah klien, tahun pengalaman, produk tersedia) dalam format visual yang menonjol.
5. THE Frontend SHALL menampilkan section testimoni atau logo klien untuk membangun kepercayaan Pengunjung.
6. THE Frontend SHALL menampilkan section CTA utama yang mengundang Pengunjung untuk menghubungi tim ADTO atau mengajukan permintaan penawaran.
7. THE Frontend SHALL menampilkan section ringkasan artikel terbaru dari Knowledge Center (minimal tiga artikel) dengan tautan ke halaman lengkapnya.
8. WHEN halaman beranda diakses, THE Frontend SHALL menggunakan strategi SSG dengan ISR revalidation setiap 3600 detik untuk konten dinamis seperti artikel terbaru.
9. THE Frontend SHALL memuat halaman beranda dengan Largest Contentful Paint (LCP) di bawah 2,5 detik pada koneksi 4G yang disimulasikan dalam pengujian Lighthouse.
10. THE Frontend SHALL menampilkan navigasi utama (navbar) yang responsif dengan logo ADTO, tautan ke semua seksi utama, dan CTA "Hubungi Kami" yang visible di semua ukuran layar dari 320px hingga 1920px.

---

### Requirements 3: Halaman Company Profile dan About Us

**User Story:** Sebagai Pengunjung yang mempertimbangkan ADTO sebagai mitra bisnis, saya ingin membaca profil lengkap perusahaan, agar saya dapat mengevaluasi kredibilitas, nilai, dan rekam jejak ADTO sebelum mengambil keputusan.

#### Kriteria Penerimaan

1. THE Frontend SHALL menampilkan halaman About Us yang memuat: sejarah singkat perusahaan, visi dan misi, nilai-nilai perusahaan (core values), dan profil kepemimpinan.
2. THE Frontend SHALL menampilkan visi resmi perusahaan: "Menjadi mitra terpercaya penyedia chemical, sparepart, dan jasa mobilisasi untuk industri migas Indonesia".
3. THE Frontend SHALL menampilkan misi perusahaan dalam format daftar yang terstruktur mencakup: penyediaan chemical oil & gas berkualitas, solusi sparepart one-stop-solution, dan jasa mobilisasi/demobilisasi yang aman dan efisien.
4. THE Frontend SHALL menampilkan section legalitas dan sertifikasi perusahaan yang memuat informasi KBLI terdaftar dan dokumen legalitas yang relevan.
5. THE Frontend SHALL menampilkan section lokasi dan cakupan operasional perusahaan, mencakup kantor pusat di Depok dan area layanan Jabodetabek serta Jawa.
6. WHEN halaman About Us diakses, THE Frontend SHALL menggunakan strategi SSG untuk seluruh konten yang bersifat statis.
7. THE Frontend SHALL menampilkan section timeline atau milestones perusahaan dalam format visual kronologis.
8. THE Frontend SHALL menyediakan tautan unduhan untuk Company Profile dalam format PDF yang dapat diunggah dan diperbarui melalui CMS.

---

### Requirements 4: Halaman Layanan (Services)

**User Story:** Sebagai calon pelanggan dari perusahaan migas, saya ingin melihat detail lengkap setiap lini layanan ADTO, agar saya dapat memahami spesifikasi produk, standar kualitas, dan relevansinya dengan kebutuhan operasional saya.

#### Kriteria Penerimaan

1. THE Frontend SHALL menampilkan halaman daftar layanan yang menampilkan ketiga lini bisnis utama ADTO dalam format card yang menarik dan dapat diklik untuk navigasi ke halaman detail.
2. THE Frontend SHALL menampilkan halaman detail untuk lini bisnis Chemical Oil & Gas yang mencakup: deskripsi layanan, daftar produk (minimal Bentonite API Grade, Barite API Grade, dan produk kimia drilling lainnya), spesifikasi teknis, standar kualitas (API Grade), ketersediaan COA dan MSDS, dan CTA untuk meminta penawaran.
3. THE Frontend SHALL menampilkan halaman detail untuk lini bisnis Sparepart & Service yang mencakup: kategori produk (pompa, valve, alat rig, komponen industri), merek yang tersedia, kondisi produk (original dan aftermarket), kemampuan pengadaan cepat untuk kebutuhan darurat, dan CTA untuk meminta penawaran.
4. THE Frontend SHALL menampilkan halaman detail untuk lini bisnis Mobilisasi/Demobilisasi yang mencakup: jenis armada yang tersedia (truk tangki, tronton, lowbed), cakupan area pengiriman, fitur GPS tracking, pengalaman dalam pengiriman ke remote area, dan CTA untuk meminta penawaran.
5. THE Frontend SHALL menampilkan spesifikasi teknis produk Chemical dalam format tabel yang terstruktur dengan parameter yang relevan sesuai standar API.
6. WHEN halaman detail layanan diakses, THE Frontend SHALL menggunakan strategi SSG dengan ISR revalidation setiap 86400 detik.
7. THE Frontend SHALL menampilkan galeri foto atau video yang relevan untuk setiap lini layanan.
8. THE Frontend SHALL menyediakan breadcrumb navigation pada seluruh halaman layanan untuk membantu Pengunjung memahami posisi navigasinya.
9. WHEN Pengunjung mengklik CTA penawaran di halaman layanan, THE Frontend SHALL mengarahkan Pengunjung ke formulir RFQ dengan field layanan yang sudah terisi sesuai halaman asal.

---

### Requirements 5: Portal Permintaan Penawaran (RFQ)

**User Story:** Sebagai calon pelanggan dari perusahaan migas, saya ingin mengajukan permintaan penawaran harga secara formal melalui website, agar saya dapat mendapatkan respon harga yang akurat dan cepat dari tim ADTO tanpa harus menghubungi lewat telepon terlebih dahulu.

#### Kriteria Penerimaan

1. THE Frontend SHALL menampilkan formulir RFQ yang memuat field: nama perusahaan, nama PIC, jabatan, nomor telepon/WhatsApp, alamat email, jenis layanan yang diminta (Chemical/Sparepart/Mobilisasi/Kombinasi), deskripsi kebutuhan, estimasi kuantitas dan satuan, lokasi pengiriman/site, dan target tanggal kebutuhan.
2. WHEN Pengunjung mengirimkan formulir RFQ, THE Frontend SHALL memvalidasi seluruh field wajib di sisi klien sebelum pengiriman ke Backend_API, dengan pesan kesalahan yang jelas dalam Bahasa Indonesia.
3. WHEN data formulir RFQ diterima oleh Backend_API, THE Backend_API SHALL memvalidasi ulang seluruh field di sisi server menggunakan aturan validasi yang identik dengan validasi klien.
4. IF Backend_API menerima data RFQ yang tidak valid, THEN THE Backend_API SHALL mengembalikan respons HTTP 422 dengan detail field yang tidak valid dalam format JSON terstruktur.
5. WHEN data RFQ valid diterima oleh Backend_API, THE Backend_API SHALL menyimpan data RFQ ke Database dengan status awal "pending" dan timestamp pengiriman.
6. WHEN data RFQ tersimpan di Database, THE Queue SHALL mengirimkan email notifikasi ke alamat email internal ADTO yang dikonfigurasi, berisi ringkasan data RFQ yang masuk.
7. WHEN data RFQ tersimpan di Database, THE Queue SHALL mengirimkan email konfirmasi ke alamat email Lead yang berisi nomor referensi RFQ dan estimasi waktu respons.
8. THE Frontend SHALL menampilkan halaman konfirmasi setelah pengiriman RFQ berhasil, memuat nomor referensi RFQ yang unik dan pesan yang menyatakan tim ADTO akan merespons dalam 1 × 24 jam kerja.
9. THE Backend_API SHALL menerapkan Rate_Limiter pada endpoint pengiriman RFQ, membatasi maksimum 5 pengiriman RFQ per alamat IP per jam.
10. THE Frontend SHALL menyediakan opsi lampiran file (spesifikasi teknis, Bill of Material) dengan ukuran maksimum 10MB per file dan format yang diizinkan: PDF, DOCX, XLSX, dan JPG.
11. WHEN file lampiran diunggah bersama RFQ, THE Backend_API SHALL memindai file menggunakan validasi MIME type dan ukuran sebelum menyimpan ke Storage.
12. THE Admin SHALL dapat mengakses daftar seluruh RFQ yang masuk melalui antarmuka CMS dengan filter berdasarkan status, tanggal, dan jenis layanan.

---

### Requirements 6: Portal Registrasi Vendor

**User Story:** Sebagai pemasok atau mitra potensial, saya ingin mendaftarkan perusahaan saya sebagai vendor resmi PT Adto Cipta Usaha Mandiri melalui website, agar saya dapat dipertimbangkan dalam proses pengadaan ADTO secara transparan dan terstandarisasi.

#### Kriteria Penerimaan

1. THE Frontend SHALL menampilkan halaman informasi vendor registration yang menjelaskan manfaat menjadi vendor ADTO, kategori vendor yang dibutuhkan, dan persyaratan dokumen yang wajib dilengkapi.
2. THE Frontend SHALL menampilkan formulir registrasi vendor yang memuat field: nama perusahaan, nama direksi/PIC, alamat lengkap, nomor NPWP, nomor NIB, nomor telepon, alamat email perusahaan, bidang usaha/kategori produk yang ditawarkan, dan deskripsi singkat perusahaan.
3. THE Frontend SHALL menyediakan field unggahan dokumen pada formulir registrasi vendor untuk: Akta Pendirian, NPWP Perusahaan, NIB/SIUP, dan Company Profile Vendor, dengan format yang diizinkan PDF dan ukuran maksimum 5MB per dokumen.
4. WHEN Vendor mengirimkan formulir registrasi, THE Frontend SHALL memvalidasi seluruh field wajib dan file yang diunggah di sisi klien sebelum pengiriman.
5. WHEN data registrasi vendor diterima oleh Backend_API, THE Backend_API SHALL memvalidasi format NPWP (15 digit angka) dan format email sebelum menyimpan ke Database.
6. WHEN data registrasi vendor valid tersimpan di Database, THE Backend_API SHALL menyimpan data dengan status "under_review" dan mengirimkan notifikasi via Queue ke email internal ADTO dan email konfirmasi ke Vendor.
7. THE Admin SHALL dapat mengubah status registrasi vendor menjadi "approved", "rejected", atau "requires_additional_info" melalui antarmuka CMS.
8. WHEN status registrasi vendor diubah oleh Admin, THE Queue SHALL mengirimkan email notifikasi ke Vendor yang menjelaskan status terbaru dan langkah selanjutnya.
9. THE Backend_API SHALL menerapkan Rate_Limiter pada endpoint registrasi vendor, membatasi maksimum 3 pengiriman dari satu alamat IP per 24 jam.
10. THE Frontend SHALL menampilkan halaman konfirmasi setelah pengiriman formulir registrasi vendor berhasil, memuat nomor referensi registrasi.

---

### Requirements 7: Portal Karir

**User Story:** Sebagai profesional yang mencari peluang karir di industri migas, saya ingin mengakses daftar lowongan kerja dan melamar posisi yang tersedia di PT Adto Cipta Usaha Mandiri, agar saya dapat bergabung dengan tim yang berpengalaman di bidang migas.

#### Kriteria Penerimaan

1. THE Frontend SHALL menampilkan halaman karir yang memuat: deskripsi budaya kerja ADTO, keunggulan bekerja di ADTO, dan daftar seluruh lowongan yang sedang aktif.
2. THE Frontend SHALL menampilkan setiap lowongan kerja aktif dengan informasi: judul posisi, departemen, tipe pekerjaan (full-time/part-time/kontrak), lokasi penempatan, deskripsi pekerjaan, kualifikasi minimum, dan batas waktu pendaftaran.
3. THE Frontend SHALL menyediakan fitur filter lowongan berdasarkan departemen, tipe pekerjaan, dan lokasi penempatan.
4. THE Frontend SHALL menampilkan halaman detail lowongan yang memuat informasi lengkap dan formulir lamaran terintegrasi atau tautan ke formulir lamaran.
5. THE Frontend SHALL menampilkan formulir lamaran kerja yang memuat field: nama lengkap, alamat email, nomor telepon/WhatsApp, posisi yang dilamar (terisi otomatis dari halaman lowongan), dan unggahan CV/Resume.
6. THE Frontend SHALL memungkinkan Kandidat mengunggah CV dalam format PDF atau DOCX dengan ukuran maksimum 5MB.
7. WHEN Kandidat mengirimkan formulir lamaran, THE Backend_API SHALL memvalidasi seluruh field dan file yang diunggah, lalu menyimpan data lamaran ke Database dengan status awal "received".
8. WHEN lamaran tersimpan di Database, THE Queue SHALL mengirimkan email konfirmasi ke Kandidat dan notifikasi ke email internal HR ADTO.
9. THE Admin SHALL dapat mengelola lowongan kerja melalui CMS: membuat lowongan baru, mengubah status (active/inactive/closed), mengedit deskripsi, dan menetapkan tanggal penutupan.
10. WHEN tanggal penutupan lowongan tercapai, THE Backend_API SHALL secara otomatis mengubah status lowongan menjadi "closed" dan menghentikan penerimaan lamaran baru untuk posisi tersebut.
11. THE Frontend SHALL menggunakan strategi SSR untuk halaman daftar lowongan agar data selalu terkini saat diakses.

---

### Requirements 8: Knowledge Center dan Portal Berita

**User Story:** Sebagai profesional industri migas, saya ingin mengakses artikel teknis, berita industri, dan insight dari ADTO, agar saya dapat memperluas pengetahuan saya dan memandang ADTO sebagai thought leader di bidangnya.

#### Kriteria Penerimaan

1. THE Frontend SHALL menampilkan halaman Knowledge Center yang memuat daftar artikel dengan fitur filter berdasarkan kategori dan pencarian berdasarkan kata kunci.
2. THE Frontend SHALL mendukung kategori konten minimal: Berita Perusahaan, Insight Industri Migas, Panduan Teknis Produk, dan Regulasi & Standar Industri.
3. THE Frontend SHALL menampilkan halaman detail artikel yang memuat: judul, tanggal publikasi, kategori, penulis, konten artikel, gambar unggulan, dan artikel terkait.
4. THE Frontend SHALL menampilkan estimasi waktu baca pada setiap halaman detail artikel, dihitung berdasarkan jumlah kata dengan asumsi kecepatan baca 200 kata per menit.
5. THE Frontend SHALL menampilkan section artikel terkait di bagian bawah setiap halaman detail artikel berdasarkan kesamaan kategori.
6. THE Admin SHALL dapat membuat, mengedit, mempublikasikan, menjadwalkan, dan menghapus artikel melalui CMS dengan editor rich text yang mendukung format heading, paragraf, daftar, gambar, dan tabel.
7. WHEN Admin mempublikasikan artikel baru, THE CMS SHALL secara otomatis men-trigger revalidation ISR pada halaman Knowledge Center dan halaman beranda.
8. THE Frontend SHALL menampilkan pagination atau infinite scroll pada halaman daftar artikel dengan maksimum 12 artikel per halaman.
9. THE Frontend SHALL mengimplementasikan Open Graph meta tags pada setiap halaman artikel untuk mendukung preview yang optimal saat artikel dibagikan di media sosial.
10. THE Frontend SHALL menampilkan tombol berbagi ke WhatsApp, LinkedIn, dan Twitter/X pada setiap halaman detail artikel.
11. THE Backend_API SHALL menyediakan RSS feed endpoint untuk seluruh artikel yang dipublikasikan dalam format XML yang valid.

---

### Requirements 9: Galeri Proyek dan Showcase Produk

**User Story:** Sebagai calon pelanggan, saya ingin melihat portofolio proyek dan produk nyata yang telah ADTO tangani, agar saya dapat menilai kompetensi dan pengalaman ADTO secara visual sebelum mengambil keputusan bermitra.

#### Kriteria Penerimaan

1. THE Frontend SHALL menampilkan halaman galeri proyek yang memuat kartu proyek dengan: gambar representatif, judul proyek, kategori layanan, lokasi/area, dan deskripsi singkat.
2. THE Frontend SHALL menyediakan fitur filter galeri berdasarkan kategori layanan (Chemical, Sparepart, Mobilisasi) dan tahun pelaksanaan.
3. THE Frontend SHALL menampilkan halaman detail proyek yang memuat: deskripsi lengkap proyek, layanan yang diberikan, foto-foto dokumentasi, dan outcome/hasil yang dicapai.
4. THE Frontend SHALL menampilkan halaman katalog produk yang menampilkan seluruh produk yang tersedia dengan foto, nama, kode produk, spesifikasi singkat, dan CTA untuk meminta penawaran.
5. THE Frontend SHALL menyediakan fitur pencarian produk berdasarkan nama, kategori, atau spesifikasi.
6. THE Frontend SHALL menampilkan halaman detail produk yang memuat: foto produk (minimal dari 2 sudut), deskripsi lengkap, spesifikasi teknis dalam format tabel, standar kualitas (API Grade jika berlaku), dan dokumen yang tersedia (COA, MSDS, datasheet) untuk diunduh.
7. WHEN Pengunjung mengklik unduhan dokumen produk (COA/MSDS), THE Frontend SHALL memerlukan Pengunjung untuk mengisi nama dan alamat email sebelum file dapat diunduh, untuk keperluan tracking Lead.
8. THE Admin SHALL dapat menambah, mengedit, dan menghapus entri proyek serta produk melalui CMS, termasuk pengelolaan foto gallery dengan drag-and-drop ordering.
9. THE Frontend SHALL mengoptimalkan seluruh gambar produk dan proyek menggunakan komponen next/image dengan lazy loading, srcset, dan konversi ke format WebP secara otomatis.

---

### Requirements 10: Halaman Kontak dan Formulir Hubungi Kami

**User Story:** Sebagai Pengunjung yang ingin berkomunikasi dengan ADTO, saya ingin menemukan informasi kontak yang lengkap dan cara mudah untuk menghubungi tim ADTO, agar saya dapat mendapatkan respons yang cepat sesuai kebutuhan saya.

#### Kriteria Penerimaan

1. THE Frontend SHALL menampilkan halaman kontak yang memuat: alamat kantor, nomor telepon, alamat email, jam operasional, dan peta lokasi terintegrasi.
2. THE Frontend SHALL menampilkan peta interaktif yang menunjukkan lokasi kantor ADTO di Depok menggunakan layanan peta yang dapat dikonfigurasi (Google Maps Embed atau alternatif).
3. THE Frontend SHALL menampilkan formulir kontak umum dengan field: nama lengkap, alamat email, nomor telepon (opsional), subjek pesan, dan isi pesan.
4. WHEN Pengunjung mengirimkan formulir kontak, THE Frontend SHALL memvalidasi field wajib (nama, email, subjek, pesan) di sisi klien sebelum pengiriman.
5. WHEN data formulir kontak valid diterima oleh Backend_API, THE Backend_API SHALL menyimpan pesan ke Database dan mengirimkan notifikasi ke email internal ADTO via Queue.
6. WHEN formulir kontak berhasil dikirim, THE Frontend SHALL menampilkan pesan konfirmasi yang menyatakan pesan telah diterima dan tim ADTO akan merespons dalam 1 × 24 jam kerja.
7. THE Frontend SHALL menampilkan tombol WhatsApp floating button yang visible di seluruh halaman website, mengarah ke nomor WhatsApp resmi ADTO dengan pesan default yang dapat dikonfigurasi.
8. THE Backend_API SHALL menerapkan Rate_Limiter pada endpoint formulir kontak, membatasi maksimum 10 pengiriman dari satu alamat IP per jam.
9. THE Frontend SHALL menampilkan informasi kontak untuk setiap divisi atau layanan secara terpisah jika dikonfigurasi melalui CMS.

---

### Requirements 11: Sistem Manajemen Konten (CMS)

**User Story:** Sebagai Admin konten, saya ingin mengelola seluruh konten website melalui antarmuka yang intuitif dan aman, agar saya dapat memperbarui informasi layanan, artikel, produk, dan pengumuman tanpa memerlukan bantuan developer.

#### Kriteria Penerimaan

1. THE CMS SHALL menyediakan antarmuka manajemen konten berbasis Payload CMS yang dapat diakses melalui URL yang dapat dikonfigurasi via environment variable.
2. THE CMS SHALL mendukung pengelolaan collection: Artikel, Kategori Artikel, Produk, Kategori Produk, Proyek, Lowongan Kerja, Halaman (About, Services, Contact), Media, dan Konfigurasi Situs.
3. THE CMS SHALL menerapkan autentikasi Admin menggunakan JWT dengan refresh token, menyimpan sesi di Cache dengan TTL 8 jam.
4. IF Admin gagal login lebih dari 5 kali berturut-turut, THEN THE CMS SHALL mengunci akun selama 15 menit dan mengirimkan notifikasi ke email Admin yang terdaftar.
5. THE CMS SHALL mendukung manajemen multi-user dengan role: Super Admin (akses penuh), Editor (buat dan edit konten, tidak dapat menghapus atau mengelola user), dan Viewer (baca saja).
6. THE CMS SHALL menyediakan editor rich text yang mendukung: heading (H1-H6), paragraf, bold, italic, daftar terurut dan tidak terurut, tautan, gambar inline, tabel, dan blok kode.
7. WHEN Admin mengunggah gambar melalui CMS, THE CMS SHALL memanggil Backend_API untuk memproses gambar menggunakan Sharp dan menyimpan varian ukuran ke Storage.
8. THE CMS SHALL menyediakan fitur pratinjau konten (preview) sebelum dipublikasikan, menampilkan tampilan konten di Frontend.
9. THE CMS SHALL mencatat audit log untuk seluruh operasi tulis (create, update, delete) yang dilakukan oleh Admin, menyimpan: timestamp, user yang melakukan, aksi, dan data yang berubah.
10. THE CMS SHALL menyediakan fitur scheduled publishing yang memungkinkan Admin menetapkan tanggal dan waktu publikasi otomatis untuk artikel dan pengumuman.

---

### Requirements 12: SEO dan Optimasi Mesin Pencari

**User Story:** Sebagai tim marketing ADTO, saya ingin website ini dioptimalkan untuk mesin pencari, agar website dapat ditemukan oleh calon pelanggan yang mencari layanan chemical, sparepart, atau mobilisasi untuk industri migas di Indonesia.

#### Kriteria Penerimaan

1. THE Frontend SHALL menghasilkan meta tag title dan meta description yang unik untuk setiap halaman, dapat dikonfigurasi melalui CMS untuk halaman konten dinamis.
2. THE Frontend SHALL mengimplementasikan tag canonical URL pada setiap halaman untuk mencegah duplikasi konten.
3. THE Frontend SHALL menghasilkan sitemap XML dinamis yang mencakup seluruh halaman publik yang aktif, dapat diakses di URL `/sitemap.xml`.
4. THE Frontend SHALL menyediakan file `robots.txt` yang dikonfigurasi untuk mengizinkan pengindeksan halaman publik dan memblokir halaman admin, API, dan staging.
5. THE Frontend SHALL mengimplementasikan Structured Data (Schema.org) dalam format JSON-LD untuk: Organization, LocalBusiness, Service, Article, BreadcrumbList, dan FAQPage pada halaman yang relevan.
6. THE Frontend SHALL mengimplementasikan Open Graph Protocol dan Twitter Card meta tags pada seluruh halaman untuk mengoptimalkan tampilan preview saat dibagikan di media sosial.
7. THE Frontend SHALL memuat seluruh gambar dengan atribut `alt` yang deskriptif dan relevan dengan konten gambar, dikelola melalui CMS.
8. THE Frontend SHALL mengimplementasikan heading hierarchy yang benar (satu H1 per halaman, diikuti H2, H3 secara berurutan) pada seluruh halaman.
9. THE Frontend SHALL menghasilkan URL yang bersih (clean URL) menggunakan slug yang dihasilkan dari judul konten, hanya menggunakan huruf kecil, angka, dan tanda hubung.
10. WHEN konten baru dipublikasikan melalui CMS, THE CMS SHALL secara otomatis memperbarui sitemap XML dan men-trigger ping ke Google Search Console via API jika konfigurasi tersedia.
11. THE Frontend SHALL mencapai skor Lighthouse SEO minimal 90 pada setiap halaman utama dalam environment production.
12. THE Frontend SHALL mengimplementasikan hreflang tag jika konten multibahasa (Bahasa Indonesia dan Bahasa Inggris) diaktifkan di masa mendatang.
13. THE Frontend SHALL memastikan seluruh tautan internal menggunakan URL absolut dengan domain yang konsisten untuk mencegah masalah duplicate content.

---

### Requirements 13: Performa dan Core Web Vitals

**User Story:** Sebagai Pengunjung yang mengakses website dari berbagai perangkat dan kecepatan koneksi, saya ingin website memuat dengan cepat dan responsif, agar saya mendapatkan pengalaman browsing yang nyaman dan tidak meninggalkan website karena lambat.

#### Kriteria Penerimaan

1. THE Frontend SHALL mencapai skor Core Web Vitals sebagai berikut pada pengujian lapangan (field data): Largest Contentful Paint (LCP) di bawah 2,5 detik, Cumulative Layout Shift (CLS) di bawah 0,1, dan Interaction to Next Paint (INP) di bawah 200 milidetik.
2. THE Frontend SHALL mencapai skor Lighthouse Performance minimal 85 pada halaman beranda dan halaman layanan utama di mode desktop.
3. THE Frontend SHALL mengimplementasikan lazy loading untuk seluruh gambar yang berada di luar viewport saat halaman dimuat pertama kali.
4. THE Frontend SHALL mengimplementasikan code splitting otomatis menggunakan Next.js dynamic imports untuk komponen yang tidak diperlukan saat halaman pertama kali dirender.
5. THE Frontend SHALL mengimplementasikan font subsetting dan font display swap untuk mencegah Flash of Invisible Text (FOIT) saat font kustom dimuat.
6. THE Backend_API SHALL mengimplementasikan HTTP response caching menggunakan header Cache-Control yang sesuai untuk endpoint yang menghasilkan data statis atau jarang berubah.
7. THE Frontend SHALL mengimplementasikan prefetching tautan untuk halaman yang kemungkinan besar akan dikunjungi berikutnya menggunakan fitur Next.js Link prefetch.
8. THE Backend_API SHALL mengembalikan respons dalam waktu kurang dari 500 milidetik untuk 95% permintaan API di bawah beban normal (hingga 100 permintaan bersamaan).
9. THE Storage SHALL menyajikan aset media dengan header CDN yang sesuai untuk memungkinkan caching di edge jika CDN diaktifkan.
10. THE Frontend SHALL mengimplementasikan Content Security Policy (CSP) header yang sesuai untuk meningkatkan keamanan tanpa mengorbankan performa.

---

### Requirements 14: Aksesibilitas (WCAG 2.1 AA)

**User Story:** Sebagai pengguna dengan kebutuhan aksesibilitas, saya ingin dapat mengakses dan menggunakan website ADTO dengan teknologi assistif seperti screen reader, agar saya mendapatkan akses yang setara terhadap informasi dan layanan yang tersedia.

#### Kriteria Penerimaan

1. THE Frontend SHALL memenuhi standar WCAG 2.1 Level AA pada seluruh halaman publik yang dihasilkan.
2. THE Frontend SHALL memastikan rasio kontras warna teks terhadap latar belakang memenuhi standar WCAG 2.1: minimal 4.5:1 untuk teks normal dan 3:1 untuk teks besar (18pt atau 14pt bold).
3. THE Frontend SHALL memastikan seluruh elemen interaktif (tombol, tautan, formulir input) dapat diakses dan dioperasikan menggunakan keyboard saja tanpa memerlukan mouse.
4. THE Frontend SHALL menyediakan indikator fokus (focus indicator) yang visible pada seluruh elemen interaktif saat diakses via keyboard.
5. THE Frontend SHALL memastikan seluruh gambar yang mengandung informasi memiliki atribut `alt` yang deskriptif, dan gambar dekoratif memiliki `alt=""`.
6. THE Frontend SHALL mengimplementasikan ARIA landmark roles (header, nav, main, footer, aside) pada elemen struktural halaman untuk membantu navigasi screen reader.
7. THE Frontend SHALL mengimplementasikan ARIA label atau aria-describedby pada elemen formulir yang tidak memiliki label teks yang visible.
8. THE Frontend SHALL memastikan seluruh konten yang disajikan secara visual juga tersedia dalam format teks yang dapat dibaca oleh screen reader.
9. THE Frontend SHALL menyediakan mekanisme "Skip to main content" yang dapat diakses via keyboard di bagian paling atas setiap halaman.
10. THE Frontend SHALL memastikan halaman dapat digunakan pada zoom browser hingga 200% tanpa kehilangan konten atau fungsi.
11. THE Frontend SHALL memastikan animasi atau efek gerak dapat dinonaktifkan menggunakan media query `prefers-reduced-motion` untuk pengguna yang sensitif terhadap gerakan.

---

### Requirements 15: Keamanan Aplikasi

**User Story:** Sebagai perusahaan enterprise yang menangani data B2B sensitif, saya ingin website dilindungi oleh praktik keamanan terbaik, agar data pelanggan, vendor, dan informasi bisnis ADTO terlindungi dari ancaman siber.

#### Kriteria Penerimaan

1. THE Backend_API SHALL mengimplementasikan HTTPS enforced pada seluruh endpoint, menolak koneksi HTTP dengan redirect 301 ke HTTPS.
2. THE Backend_API SHALL mengimplementasikan CORS policy yang membatasi origin yang diizinkan hanya pada domain Frontend yang terdaftar melalui environment variable.
3. THE Backend_API SHALL mengimplementasikan helmet.js atau middleware setara untuk menetapkan security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, dan Permissions-Policy.
4. THE Backend_API SHALL mensanitasi seluruh input pengguna untuk mencegah injeksi SQL melalui penggunaan Prisma parameterized queries dan mencegah XSS melalui sanitasi output.
5. THE CMS SHALL menyimpan password Admin menggunakan algoritma hashing bcrypt dengan cost factor minimal 12.
6. THE Backend_API SHALL mengimplementasikan JWT dengan algoritma RS256 atau HS256 dengan secret key minimal 256-bit yang disimpan di environment variable, bukan di kode sumber.
7. THE Backend_API SHALL mengimplementasikan global Rate_Limiter yang membatasi maksimum 100 permintaan per menit per alamat IP untuk seluruh endpoint publik.
8. IF sebuah permintaan API melewati batas Rate_Limiter, THEN THE Backend_API SHALL mengembalikan respons HTTP 429 dengan header Retry-After yang menyatakan waktu tunggu dalam detik.
9. THE Backend_API SHALL memvalidasi dan membatasi ukuran payload request body maksimum 10MB untuk endpoint umum dan 50MB untuk endpoint yang menerima upload file.
10. THE Storage SHALL menyimpan file yang diunggah dengan nama file yang di-generate secara acak (UUID atau hash), menggantikan nama asli yang diunggah oleh pengguna, untuk mencegah path traversal attack.
11. THE Backend_API SHALL mencatat security log untuk seluruh percobaan autentikasi yang gagal, termasuk timestamp dan IP address, yang dapat diakses oleh Admin.
12. THE Frontend SHALL mengimplementasikan Content Security Policy header yang melarang eksekusi inline script dan membatasi sumber script eksternal hanya pada domain yang diizinkan.
13. THE Backend_API SHALL mengimplementasikan proteksi terhadap CSRF pada seluruh endpoint yang mengubah state (POST, PUT, PATCH, DELETE) yang diakses dari browser.

---

### Requirements 16: Responsivitas dan Kompatibilitas Browser

**User Story:** Sebagai Pengunjung yang mengakses website dari berbagai perangkat dan browser, saya ingin website berfungsi dengan baik dan tampil konsisten, agar saya dapat mengakses informasi dan menggunakan fitur website tanpa hambatan.

#### Kriteria Penerimaan

1. THE Frontend SHALL mengimplementasikan desain Mobile-First Responsive yang berfungsi dengan benar pada resolusi layar mulai dari 320px hingga 1920px lebar.
2. THE Frontend SHALL menampilkan layout yang optimal pada kategori perangkat: Mobile (320px–767px), Tablet (768px–1023px), Laptop (1024px–1279px), dan Desktop (1280px ke atas).
3. THE Frontend SHALL berfungsi dengan benar dan tampil konsisten pada browser: Google Chrome (versi terkini dan 1 versi sebelumnya), Mozilla Firefox (versi terkini dan 1 versi sebelumnya), Microsoft Edge (versi terkini), dan Safari (versi terkini di macOS dan iOS).
4. THE Frontend SHALL mengimplementasikan navigasi mobile menggunakan hamburger menu atau pola navigasi yang sesuai untuk layar kecil, dengan transisi yang halus dan aksesibel.
5. THE Frontend SHALL memastikan seluruh elemen sentuh (touch target) memiliki area minimal 44×44px sesuai panduan WCAG untuk kemudahan penggunaan di perangkat layar sentuh.
6. THE Frontend SHALL menggunakan CSS Flexbox dan CSS Grid yang didukung oleh seluruh browser target, dengan fallback yang sesuai untuk fitur CSS yang belum didukung sepenuhnya.
7. THE Frontend SHALL memastikan gambar dan media tidak melebihi lebar container pada seluruh ukuran layar, mencegah overflow horizontal.
8. THE Frontend SHALL mengimplementasikan tipografi responsif menggunakan satuan relatif (rem, clamp) sehingga ukuran teks menyesuaikan ukuran layar secara proporsional.

---

### Requirements 17: Internasionalisasi dan Dukungan Multibahasa

**User Story:** Sebagai calon pelanggan internasional atau mitra bisnis asing yang beroperasi di Indonesia, saya ingin dapat mengakses website ADTO dalam Bahasa Inggris, agar saya dapat memahami layanan yang ditawarkan dan menghubungi tim ADTO dengan mudah.

#### Kriteria Penerimaan

1. THE Frontend SHALL mendukung minimal dua bahasa: Bahasa Indonesia sebagai bahasa utama dan Bahasa Inggris sebagai bahasa alternatif.
2. THE Frontend SHALL menampilkan tombol pemilih bahasa (language switcher) yang visible dan mudah dijangkau di navigasi utama pada seluruh halaman.
3. WHEN Pengunjung memilih bahasa, THE Frontend SHALL menyimpan preferensi bahasa di cookie browser dan menerapkannya pada seluruh kunjungan berikutnya.
4. THE Frontend SHALL mengimplementasikan Next.js internationalization (i18n) routing dengan URL terstruktur: `/` untuk Bahasa Indonesia dan `/en/` untuk Bahasa Inggris.
5. THE CMS SHALL mendukung pengelolaan konten dalam dua bahasa untuk seluruh collection konten dinamis (Artikel, Produk, Layanan, Proyek, Lowongan).
6. THE Frontend SHALL menampilkan konten dalam bahasa yang dipilih pengguna dengan fallback ke Bahasa Indonesia jika terjemahan Bahasa Inggris belum tersedia.
7. THE Frontend SHALL mengimplementasikan hreflang meta tags yang benar (`hreflang="id"` dan `hreflang="en"`) pada seluruh halaman untuk mendukung SEO multibahasa.
8. THE Frontend SHALL memformat tanggal, angka, dan mata uang sesuai locale yang aktif: format tanggal Indonesia (DD MMMM YYYY) dan format tanggal Inggris (MMMM DD, YYYY).

---

### Requirements 18: Analitik dan Pelacakan Konversi

**User Story:** Sebagai tim marketing ADTO, saya ingin melacak perilaku Pengunjung dan konversi Lead di website, agar saya dapat mengoptimalkan strategi pemasaran digital dan mengukur efektivitas website secara data-driven.

#### Kriteria Penerimaan

1. THE Frontend SHALL mengintegrasikan Google Analytics 4 (GA4) atau platform analitik alternatif yang dapat dikonfigurasi melalui environment variable, dengan pengumpulan data yang mematuhi regulasi privasi.
2. THE Frontend SHALL melacak event konversi utama: pengiriman formulir RFQ, pengiriman formulir kontak, klik tombol WhatsApp, pengiriman registrasi vendor, dan pengiriman lamaran kerja.
3. THE Frontend SHALL mengimplementasikan consent management yang menampilkan banner persetujuan cookie kepada Pengunjung baru, dengan opsi menerima semua, menolak semua, atau menyesuaikan preferensi.
4. WHEN Pengunjung menolak cookie analitik, THE Frontend SHALL menonaktifkan script analitik dan tidak mengirimkan data ke platform analitik pihak ketiga.
5. THE Frontend SHALL melacak scroll depth pada halaman artikel dan halaman layanan untuk mengukur tingkat keterlibatan konten.
6. THE Admin SHALL dapat mengakses laporan dasar performa website (pageviews, sesi, bounce rate, konversi) melalui integrasi GA4 atau melalui dashboard internal yang terhubung ke Backend_API.
7. THE Backend_API SHALL menyimpan metadata setiap pengiriman formulir (RFQ, kontak, registrasi vendor, lamaran) termasuk sumber referral (referrer URL) untuk keperluan analisis saluran akuisisi.

---

### Requirements 19: Footer dan Navigasi Global

**User Story:** Sebagai Pengunjung, saya ingin memiliki akses mudah ke seluruh bagian penting website dari mana pun saya berada, agar saya tidak merasa tersesat dan dapat menavigasi website dengan efisien.

#### Kriteria Penerimaan

1. THE Frontend SHALL menampilkan footer yang konsisten di seluruh halaman website, memuat: logo ADTO, tagline, tautan navigasi utama, informasi kontak singkat (alamat, telepon, email), tautan media sosial, dan copyright notice.
2. THE Frontend SHALL menampilkan footer dengan sitemap link yang terkelompok dalam kolom: Perusahaan (About, Visi Misi, Tim), Layanan (Chemical, Sparepart, Mobilisasi), Portal (RFQ, Registrasi Vendor, Karir), dan Lainnya (Knowledge Center, Kontak).
3. THE Frontend SHALL menampilkan icon media sosial di footer yang mengarah ke akun resmi ADTO yang dapat dikonfigurasi melalui CMS: LinkedIn, Instagram, dan WhatsApp.
4. THE Frontend SHALL menampilkan halaman kebijakan privasi yang dapat diakses melalui tautan di footer, menjelaskan data yang dikumpulkan dan cara penggunaannya.
5. THE Frontend SHALL menampilkan halaman syarat penggunaan (Terms of Use) yang dapat diakses melalui tautan di footer.
6. THE Frontend SHALL menampilkan navbar sticky (tetap di bagian atas viewport saat scroll) dengan transisi visual yang halus saat Pengunjung menggulir halaman ke bawah.
7. THE Frontend SHALL menampilkan breadcrumb navigation pada seluruh halaman yang berada lebih dalam dari dua level navigasi.
8. THE Frontend SHALL menampilkan tombol scroll-to-top yang muncul setelah Pengunjung menggulir lebih dari 300px dari atas halaman, pada seluruh halaman website.

---

### Requirements 20: Penanganan Error dan Halaman Tidak Ditemukan

**User Story:** Sebagai Pengunjung yang menemui halaman yang tidak tersedia atau mengalami error, saya ingin melihat pesan yang jelas dan tetap dapat menavigasi kembali ke konten yang valid, agar pengalaman saya tidak terganggu oleh error teknis.

#### Kriteria Penerimaan

1. THE Frontend SHALL menampilkan halaman 404 kustom yang sesuai brand ADTO ketika Pengunjung mengakses URL yang tidak ditemukan, dengan pesan yang jelas dan tautan navigasi kembali ke beranda atau halaman utama lainnya.
2. THE Frontend SHALL menampilkan halaman 500 kustom ketika terjadi error server yang tidak dapat dipulihkan, dengan pesan yang ramah pengguna tanpa mengekspos detail teknis.
3. WHEN Backend_API mengalami error tidak terduga, THE Backend_API SHALL mengembalikan respons JSON terstruktur dengan kode error dan pesan yang dapat dipahami, tanpa stack trace di environment production.
4. THE Frontend SHALL menampilkan pesan error yang spesifik dan ramah pengguna dalam Bahasa Indonesia ketika operasi formulir gagal, membedakan antara: error validasi input, error jaringan, dan error server.
5. THE Backend_API SHALL mencatat seluruh error yang terjadi di level server ke sistem logging terpusat (misal: file log atau stdout yang dapat dikumpulkan oleh log aggregator) dengan format JSON yang terstruktur memuat: timestamp, level, message, stack trace, request ID, dan metadata relevan.
6. THE Frontend SHALL menampilkan skeleton loading state atau spinner yang sesuai saat data sedang dimuat dari Backend_API, mencegah tampilan halaman kosong yang membingungkan Pengunjung.
7. IF koneksi ke Backend_API terputus saat Pengunjung mengisi formulir, THEN THE Frontend SHALL menyimpan data formulir sementara di session storage browser dan menginformasikan Pengunjung untuk mencoba mengirim ulang.

---

### Requirements 21: Infrastruktur, Deployment, dan Operasi

**User Story:** Sebagai tim DevOps ADTO, saya ingin infrastruktur website yang dapat di-deploy, dipantau, dan di-maintain dengan mudah, agar website dapat berjalan dengan uptime tinggi dan pembaruan dapat dirilis tanpa downtime yang signifikan.

#### Kriteria Penerimaan

1. THE Website SHALL dapat di-deploy sepenuhnya menggunakan satu perintah `docker-compose up` dari repositori kode sumber, dengan seluruh dependency dan konfigurasi yang terdefinisi dalam file Docker Compose.
2. THE Website SHALL menyediakan file `.env.example` yang mendokumentasikan seluruh environment variable yang diperlukan dengan deskripsi dan contoh nilai.
3. THE Backend_API SHALL mengimplementasikan endpoint health check yang dapat diakses di `/health` yang mengembalikan status: server, database connectivity, cache connectivity, dan storage connectivity.
4. WHEN Backend_API menerima permintaan ke endpoint `/health`, THE Backend_API SHALL mengembalikan respons HTTP 200 dengan status seluruh service yang dependen, atau HTTP 503 jika salah satu service kritis tidak tersedia.
5. THE Website SHALL mendukung strategi deployment rolling update menggunakan Docker dengan zero-downtime deployment untuk production environment.
6. THE Database SHALL dikonfigurasi dengan mekanisme backup otomatis yang dapat dijadwalkan melalui environment variable, dengan retensi backup minimal 7 hari.
7. THE Backend_API SHALL mengimplementasikan database migration otomatis menggunakan Prisma migrate yang dieksekusi saat startup container jika terdapat migration yang belum diterapkan.
8. THE Website SHALL memiliki file README yang mendokumentasikan: prasyarat instalasi, langkah setup development environment, cara menjalankan migration, dan cara deployment ke production.
9. THE Backend_API SHALL mengimplementasikan graceful shutdown yang menyelesaikan request yang sedang diproses sebelum menghentikan proses, dengan timeout maksimum 30 detik.
10. WHERE environment production aktif, THE Backend_API SHALL menonaktifkan seluruh endpoint debug, dokumentasi API (Swagger), dan log verbose yang berpotensi mengekspos informasi sensitif.

---

### Requirements 22: Parser dan Serializer Konfigurasi CMS

**User Story:** Sebagai tim pengembang, saya ingin memastikan data konfigurasi website yang dikelola melalui CMS dapat diparse, disimpan, dan dirender dengan benar di Frontend, agar tidak terjadi kerusakan konten akibat kesalahan serialisasi atau parsing.

#### Kriteria Penerimaan

1. WHEN CMS menyimpan konten rich text dari editor, THE CMS SHALL menserializasikan konten ke format JSON terstruktur yang valid sesuai skema Payload CMS Lexical atau Slate yang didefinisikan.
2. WHEN Frontend mengambil konten rich text dari Backend_API, THE Frontend SHALL memparse JSON konten menjadi komponen React yang dapat dirender sesuai tipe node (paragraph, heading, list, image, dll).
3. THE Frontend SHALL mengimplementasikan parser yang menghasilkan output HTML yang valid dari node JSON rich text CMS untuk seluruh tipe node yang didukung editor CMS.
4. FOR ALL konten rich text yang valid, operasi parse kemudian serialize kemudian parse kembali SHALL menghasilkan struktur data yang semantically equivalent dengan input awal (round-trip property).
5. IF CMS menerima konten rich text dengan node yang tidak dikenal atau malformed, THEN THE CMS SHALL mengembalikan pesan error validasi yang deskriptif tanpa menyimpan konten yang rusak ke Database.
6. THE Backend_API SHALL memvalidasi format slug konten (huruf kecil, angka, tanda hubung, tanpa spasi, tanpa karakter khusus) sebelum menyimpan ke Database.
7. FOR ALL slug yang valid, operasi format (konversi judul ke slug) SHALL bersifat idempotent: memformat slug yang sudah terformat menghasilkan slug yang identik.
8. THE Backend_API SHALL memparse dan memvalidasi parameter query string pada endpoint daftar konten (pagination, filter, sort) dan mengembalikan HTTP 400 jika parameter tidak valid.

---

### Requirements 23: Notifikasi Email Transaksional

**User Story:** Sebagai Lead atau Kandidat yang berinteraksi dengan website ADTO, saya ingin menerima email konfirmasi yang informatif setelah setiap tindakan penting, agar saya yakin bahwa permintaan saya telah diterima dan diproses.

#### Kriteria Penerimaan

1. THE Queue SHALL mengirimkan email transaksional menggunakan template HTML yang responsif dan sesuai brand ADTO (warna Navy dan Orange, logo ADTO) untuk setiap trigger event.
2. THE Queue SHALL mengirimkan email konfirmasi RFQ dalam waktu maksimum 5 menit setelah data RFQ tersimpan di Database, memuat: nomor referensi RFQ, ringkasan kebutuhan, dan estimasi waktu respons.
3. THE Queue SHALL mengirimkan email notifikasi RFQ ke alamat email internal ADTO dalam waktu maksimum 2 menit setelah data RFQ tersimpan, memuat seluruh detail RFQ yang masuk.
4. THE Queue SHALL mengirimkan email konfirmasi lamaran kerja ke Kandidat dalam waktu maksimum 5 menit setelah data lamaran tersimpan, memuat posisi yang dilamar dan nomor referensi lamaran.
5. THE Queue SHALL mengirimkan email konfirmasi registrasi vendor ke Vendor dalam waktu maksimum 5 menit setelah data registrasi tersimpan, memuat nomor referensi dan informasi proses review.
6. THE Queue SHALL mengirimkan email konfirmasi pesan kontak ke Lead dalam waktu maksimum 5 menit setelah pesan tersimpan.
7. IF pengiriman email gagal setelah 3 kali percobaan ulang dengan interval backoff eksponensial, THEN THE Queue SHALL mencatat kegagalan ke sistem logging dan menandai job sebagai failed tanpa menghapus data dari Database.
8. THE Admin SHALL dapat mengakses daftar email transaksional yang gagal dikirim beserta alasan kegagalan melalui antarmuka monitoring Queue.
9. THE Backend_API SHALL mengonfigurasi layanan pengiriman email (SMTP atau API email transaksional) melalui environment variable, mendukung konfigurasi provider: SMTP generic, atau provider yang kompatibel dengan Nodemailer.
10. THE Queue SHALL mengimplementasikan mekanisme deduplication untuk mencegah pengiriman email yang sama lebih dari satu kali untuk satu event yang sama, menggunakan job ID yang unik berbasis hash dari data event.

---

### Requirements 24: Design System dan Komponen UI

**User Story:** Sebagai tim pengembang dan desainer, saya ingin memiliki design system yang terdokumentasi dan konsisten, agar seluruh halaman dan fitur website ADTO memiliki tampilan visual yang kohesif dan dapat dikembangkan secara efisien.

#### Kriteria Penerimaan

1. THE Frontend SHALL mengimplementasikan design token sebagai sumber kebenaran tunggal (single source of truth) untuk warna, tipografi, spacing, border radius, dan shadow, yang didefinisikan dalam konfigurasi Tailwind CSS kustom.
2. THE Frontend SHALL mendefinisikan token warna brand secara eksplisit dalam Tailwind config: `navy-primary: #0A2F5C`, `orange-accent: #FF5A00`, `cool-gray: #E9ECEF`, beserta variasi shade yang diperlukan.
3. THE Frontend SHALL mengimplementasikan komponen Button dengan minimal varian: primary (background orange-accent), secondary (outline navy-primary), ghost, dan disabled state, dengan ukuran: sm, md, lg.
4. THE Frontend SHALL mengimplementasikan komponen Card dengan varian untuk: service card, product card, article card, project card, dan team card, mengikuti pola Atomic Design.
5. THE Frontend SHALL mengimplementasikan komponen Form yang terdiri dari: Input, Textarea, Select, Checkbox, RadioGroup, FileUpload, dan komponen FormField yang menggabungkan label, input, dan pesan error.
6. THE Frontend SHALL mengimplementasikan komponen Typography yang mendefinisikan skala heading (h1-h6) dan body text (large, base, small, caption) dengan font Poppins untuk heading dan Inter untuk body.
7. THE Frontend SHALL mengimplementasikan komponen navigasi: Navbar (desktop dan mobile), Breadcrumb, Pagination, dan Tabs.
8. THE Frontend SHALL mengimplementasikan komponen feedback: Alert (success, warning, error, info), Toast/Snackbar, Modal/Dialog, dan Skeleton loading.
9. THE Frontend SHALL mengimplementasikan komponen Section Container yang memastikan lebar maksimum konten 1280px dengan padding horizontal yang responsif pada seluruh breakpoint.
10. THE Frontend SHALL mengimplementasikan komponen Hero Section yang dapat menerima props untuk: judul, sub-judul, CTA (primary dan secondary), dan background (gambar, video, atau gradient).
11. WHEN sebuah komponen UI yang sama digunakan di lebih dari satu halaman, THE Frontend SHALL mengimplementasikan komponen tersebut sebagai komponen reusable dalam layer molecules atau organisms sesuai Atomic Design, dan tidak menduplikasi kode implementasinya.

---

### Requirements 25: Pencarian dan Filtering Konten

**User Story:** Sebagai Pengunjung yang mencari produk atau informasi spesifik di website ADTO, saya ingin menggunakan fitur pencarian yang cepat dan relevan, agar saya dapat menemukan informasi yang saya butuhkan tanpa harus menelusuri seluruh halaman secara manual.

#### Kriteria Penerimaan

1. THE Frontend SHALL menampilkan fitur pencarian global yang dapat diakses dari navbar, memungkinkan Pengunjung mencari di seluruh konten website: artikel, produk, layanan, dan proyek.
2. WHEN Pengunjung memasukkan kata kunci pencarian dengan minimal 3 karakter, THE Frontend SHALL menampilkan hasil pencarian instan (debounced 300ms) sebagai dropdown preview dengan maksimum 5 hasil teratas per kategori.
3. WHEN Pengunjung menekan Enter atau mengklik "Lihat Semua Hasil", THE Frontend SHALL mengarahkan ke halaman hasil pencarian lengkap yang menampilkan seluruh hasil yang relevan beserta filter kategori.
4. THE Backend_API SHALL menyediakan endpoint pencarian yang menerima parameter `q` (query) dan `category` (opsional), melakukan pencarian full-text terhadap judul dan konten artikel, nama produk, dan nama layanan menggunakan PostgreSQL full-text search.
5. THE Backend_API SHALL mengembalikan hasil pencarian yang diurutkan berdasarkan relevansi menggunakan PostgreSQL `ts_rank` atau setara, dengan pagination yang mendukung parameter `page` dan `limit`.
6. WHEN kueri pencarian menghasilkan nol hasil, THE Frontend SHALL menampilkan pesan "Tidak ada hasil untuk [kata kunci]" beserta saran konten atau CTA untuk menghubungi ADTO secara langsung.
7. THE Backend_API SHALL menerapkan Rate_Limiter pada endpoint pencarian, membatasi maksimum 60 permintaan per menit per alamat IP.
8. THE Frontend SHALL mengimplementasikan fitur filter dan sorting pada halaman daftar produk: filter berdasarkan kategori layanan, filter berdasarkan ketersediaan (ready stock/indent), dan sortir berdasarkan nama produk (A-Z, Z-A).

---

## Ringkasan Prioritas Persyaratan

| Persyaratan | Judul | Prioritas |
|---|---|---|
| 1 | Arsitektur Sistem dan Fondasi Teknis | P0 — Kritis |
| 2 | Halaman Beranda | P0 — Kritis |
| 3 | Halaman Company Profile dan About Us | P1 — Tinggi |
| 4 | Halaman Layanan | P0 — Kritis |
| 5 | Portal Permintaan Penawaran (RFQ) | P0 — Kritis |
| 6 | Portal Registrasi Vendor | P1 — Tinggi |
| 7 | Portal Karir | P1 — Tinggi |
| 8 | Knowledge Center dan Portal Berita | P1 — Tinggi |
| 9 | Galeri Proyek dan Showcase Produk | P1 — Tinggi |
| 10 | Halaman Kontak | P0 — Kritis |
| 11 | Sistem Manajemen Konten (CMS) | P0 — Kritis |
| 12 | SEO dan Optimasi Mesin Pencari | P0 — Kritis |
| 13 | Performa dan Core Web Vitals | P1 — Tinggi |
| 14 | Aksesibilitas (WCAG 2.1 AA) | P1 — Tinggi |
| 15 | Keamanan Aplikasi | P0 — Kritis |
| 16 | Responsivitas dan Kompatibilitas Browser | P0 — Kritis |
| 17 | Internasionalisasi dan Dukungan Multibahasa | P2 — Sedang |
| 18 | Analitik dan Pelacakan Konversi | P1 — Tinggi |
| 19 | Footer dan Navigasi Global | P0 — Kritis |
| 20 | Penanganan Error dan Halaman Tidak Ditemukan | P1 — Tinggi |
| 21 | Infrastruktur, Deployment, dan Operasi | P0 — Kritis |
| 22 | Parser dan Serializer Konfigurasi CMS | P1 — Tinggi |
| 23 | Notifikasi Email Transaksional | P1 — Tinggi |
| 24 | Design System dan Komponen UI | P0 — Kritis |
| 25 | Pencarian dan Filtering Konten | P2 — Sedang |

**Keterangan Prioritas:**
- **P0 — Kritis**: Harus ada sebelum website bisa diluncurkan (go-live blocker)
- **P1 — Tinggi**: Harus ada dalam sprint pertama pasca go-live
- **P2 — Sedang**: Dapat dikembangkan dalam iterasi berikutnya setelah peluncuran awal
