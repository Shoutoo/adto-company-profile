# Requirements Document

<!-- 
  Business Requirements Specification (BRS) + Software Requirements Specification (SRS)
  PT ADTO Cipta Usaha Mandiri — Enterprise Website Platform
  Dokumen: BRS-SRS-ADTO-ENT-001 | Versi: 2.0.0 | Tanggal: 2026-07-01
  Standar: IEEE 830-1998 / ISO/IEC/IEEE 29148:2018
-->

---

# BAGIAN I — BUSINESS REQUIREMENTS SPECIFICATION (BRS)

<!-- 
  Business Requirements Specification (BRS)
  PT ADTO Cipta Usaha Mandiri — Enterprise Website Platform
  Dokumen: BRS-ADTO-ENT-001 | Versi: 1.0.0 | Tanggal: 2026-07-01
  Standar: IEEE 830-1998 / ISO/IEC/IEEE 29148:2018
-->

## Daftar Isi BRS

1. [BRS BAB 1 — Project Overview](#brs-bab-1)
2. [BRS BAB 2 — Business Vision](#brs-bab-2)
3. [BRS BAB 3 — Business Objectives](#brs-bab-3)
4. [BRS BAB 4 — Business Scope](#brs-bab-4)
5. [BRS BAB 5 — Business Value](#brs-bab-5)
6. [BRS BAB 6 — Success Criteria](#brs-bab-6)
7. [BRS BAB 7 — Business Risk](#brs-bab-7)
8. [BRS BAB 8 — Project Assumptions](#brs-bab-8)
9. [BRS BAB 9 — Project Constraints](#brs-bab-9)

---

## BRS BAB 1 — Project Overview {#brs-bab-1}

### 1.1 Latar Belakang Proyek

Industri minyak dan gas (migas) di Indonesia merupakan salah satu sektor ekonomi strategis nasional yang terus mengalami pertumbuhan dan modernisasi. Berdasarkan data SKK Migas, investasi hulu migas Indonesia pada 2024–2026 menunjukkan tren peningkatan signifikan dengan target lifting minyak yang ambisius, mendorong aktivitas drilling, eksplorasi, dan produksi di seluruh wilayah kerja nasional. Hal ini secara langsung meningkatkan kebutuhan terhadap penyedia chemical drilling, sparepart industri, serta jasa mobilisasi dan demobilisasi peralatan berat.

Di sisi lain, transformasi digital dalam ekosistem procurement B2B industri migas sedang berlangsung secara masif. Kontraktor EPC, service company, dan operator migas skala nasional semakin mengandalkan penelusuran digital untuk mengidentifikasi, mengevaluasi, dan memvalidasi vendor sebelum proses pengadaan dimulai. Studi industri menunjukkan bahwa lebih dari 70% keputusan pembelian B2B industri dimulai dari pencarian daring, dan vendor yang tidak memiliki kehadiran digital yang kredibel secara efektif tidak dipertimbangkan sejak tahap seleksi awal.

Tren ini menciptakan urgensi yang nyata bagi PT ADTO Cipta Usaha Mandiri untuk membangun platform digital enterprise yang bukan sekadar "brosur online", melainkan sebuah ekosistem digital terintegrasi yang mampu mewakili kapabilitas perusahaan secara profesional, menghasilkan lead komersial secara konsisten, dan menjadi fondasi infrastruktur digital jangka panjang.

### 1.2 Kondisi Digital Saat Ini PT ADTO Cipta Usaha Mandiri

PT ADTO Cipta Usaha Mandiri saat ini tidak memiliki kehadiran digital yang terstruktur. Berikut adalah kondisi digital perusahaan pada saat dokumen ini disusun:

| Aspek Digital | Kondisi Saat Ini | Dampak Bisnis |
|---|---|---|
| Website Perusahaan | Tidak ada | Tidak dapat diverifikasi secara online oleh calon klien |
| Profil Online | Tidak ada domain atau hosting aktif | Kehilangan peluang dari pencarian organic |
| Proses RFQ | Manual via WhatsApp dan email pribadi | Tidak ada rekam jejak, rawan kehilangan lead |
| Katalog Produk | Tidak ada; distribusi via PDF manual | Tidak dapat diakses 24/7 oleh calon klien |
| Registrasi Vendor | Formulir kertas atau email ad hoc | Proses tidak konsisten, tidak terstandarisasi |
| Rekrutmen | Via relasi personal dan job portal umum | Tidak ada employer branding yang terbangun |
| Konten Industri | Tidak ada | Tidak ada otoritas domain yang terbangun |
| Analytics | Tidak ada | Tidak ada data untuk pengambilan keputusan pemasaran |

### 1.3 Permasalahan Bisnis yang Dihadapi

Ketiadaan platform digital enterprise menimbulkan enam permasalahan bisnis utama yang berdampak langsung terhadap pertumbuhan dan daya saing perusahaan:

| ID | Permasalahan Bisnis | Deskripsi | Dampak Bisnis |
|---|---|---|---|
| PB-001 | **Krisis Kredibilitas Digital** | Calon klien B2B, terutama kontraktor EPC dan procurement manager perusahaan migas, tidak dapat memverifikasi keberadaan, kapabilitas, dan rekam jejak PT Adto secara online. Perusahaan efektif tidak ada di ruang digital. | Eliminasi dari daftar vendor yang dipertimbangkan sejak tahap awal seleksi. Kehilangan peluang tender dan kontrak berskala besar. |
| PB-002 | **Inefisiensi Proses RFQ** | Seluruh permintaan penawaran harga (RFQ) masih diproses secara manual melalui WhatsApp pribadi dan email, tanpa sistem pelacakan, prioritisasi, atau rekam jejak yang terstruktur. | Waktu respons lambat (>48 jam), lead sering terlewat, tidak ada SLA yang dapat diukur, dan sulit menganalisis pipeline penjualan. |
| PB-003 | **Absensi Akuisisi Lead Organik** | Tanpa kehadiran digital, seluruh akuisisi klien baru bergantung pada jaringan personal dan referral. Tidak ada saluran lead yang bekerja 24/7 tanpa biaya per kontak. | Pertumbuhan pipeline penjualan sangat bergantung pada individu, tidak skalabel, dan rentan terhadap rotasi tenaga penjual. |
| PB-004 | **Proses Vendor Onboarding Tidak Terstandarisasi** | Tidak ada portal terpusat untuk pendaftaran dan verifikasi vendor. Proses bervariasi per individu, dokumen tersebar, dan tidak ada audit trail yang lengkap. | Risiko vendor tidak terverifikasi masuk ke rantai pasokan, potensi compliance issue, dan inefisiensi tim procurement. |
| PB-005 | **Lemahnya Employer Branding** | Tidak ada platform rekrutmen digital. Perusahaan kesulitan menarik kandidat berkualitas yang mencari informasi perusahaan secara online sebelum melamar. | Kualitas pipeline kandidat rendah, biaya rekrutmen tinggi karena bergantung pada pihak ketiga, waktu pengisian posisi panjang. |
| PB-006 | **Nol Otoritas Konten Industri** | Tidak ada platform untuk mendistribusikan pengetahuan teknis dan insight industri. Kompetitor yang aktif berproduksi konten membangun kepercayaan dan otoritas di mata calon klien dan mesin pencari. | Posisi kompetitif yang lemah dalam pencarian organik, rendahnya kepercayaan calon klien baru yang belum mengenal perusahaan. |

### 1.4 Peluang Digitalisasi yang Tersedia

Kondisi industri dan pasar saat ini membuka beberapa peluang strategis yang dapat dimanfaatkan melalui platform digital:

1. **Peluang SEO Organik yang Belum Tersaingi**: Kategori pencarian untuk produk seperti "bentonite API grade Indonesia", "barite API supplier", "jasa mobilisasi alat berat migas", dan sejenisnya masih memiliki tingkat persaingan yang relatif rendah di mesin pencari. Platform yang dioptimalkan dengan baik berpotensi mendominasi halaman pertama dalam 6–12 bulan.

2. **Digitalisasi Procurement B2B yang Sedang Berlangsung**: Perusahaan migas besar kini menstandarisasi proses vendor qualification berbasis digital. Vendor dengan platform digital yang kredibel mendapatkan keunggulan komparatif dalam proses seleksi.

3. **Lead Generation 24/7 Tanpa Biaya Marginal**: Platform digital yang berjalan sepanjang waktu menghasilkan lead tanpa biaya tambahan per kontak, berbeda dengan pendekatan sales konvensional yang bergantung pada kapasitas tim.

4. **Repositioning sebagai Enterprise-Grade Vendor**: Website enterprise bertaraf internasional akan memposisikan PT Adto setara dengan vendor multinasional dalam persepsi calon klien, membuka akses ke segmen klien korporasi yang lebih besar.

5. **Data-Driven Decision Making**: Analitik digital memungkinkan manajemen memahami perilaku calon klien, mengidentifikasi produk dengan permintaan tertinggi, dan mengoptimalkan strategi pemasaran berdasarkan data aktual.

### 1.5 Alasan Dibangunnya Website Baru

Proyek ini membangun platform digital dari nol (greenfield) karena:

- Tidak ada infrastruktur digital yang dapat di-upgrade atau dimigrasikan.
- Arsitektur yang dipilih (Next.js 14 + NestJS + Payload CMS) dirancang untuk skala enterprise dan mendukung ekspansi ke Customer Portal, CRM, dan ERP di masa depan — tidak dapat diimplementasikan dengan platform website builder biasa.
- Kebutuhan performa (Core Web Vitals "Good", SSR/SSG, Lighthouse ≥ 85) hanya dapat dipenuhi dengan stack teknis yang dikontrol penuh oleh tim pengembang.
- Kebutuhan keamanan data (OWASP Top 10, UU PDP No. 27/2022) memerlukan arsitektur backend yang dapat dikonfigurasi sepenuhnya.

### 1.6 Tujuan Utama Proyek

| No | Tujuan | Target Terukur | Horizon Waktu |
|---|---|---|---|
| 1 | Membangun kehadiran digital enterprise yang kredibel | Website live dengan skor Lighthouse ≥ 85 di semua halaman utama | Peluncuran v1.0 |
| 2 | Menghasilkan lead komersial secara konsisten | ≥ 20 lead per bulan dari website | Q1 pasca-launch |
| 3 | Mendigitalisasi dan mengakselerasi proses RFQ | Waktu respons RFQ tim sales < 24 jam kerja | Peluncuran v1.0 |
| 4 | Membangun database vendor yang terstandarisasi | 100% vendor aktif terdaftar melalui portal | 6 bulan pasca-launch |
| 5 | Membangun otoritas konten industri | ≥ 30 artikel teknis terpublikasi | 3 bulan pasca-launch |
| 6 | Meletakkan fondasi infrastruktur digital untuk ekspansi | Arsitektur siap integrasi Customer Portal, CRM, ERP | Desain v1.0 |

---

## BRS BAB 2 — Business Vision {#brs-bab-2}

### 2.1 Business Vision

PT ADTO Cipta Usaha Mandiri bervisi menjadi **pemimpin digital di segmen B2B supply chain industri migas Indonesia**. Dalam konteks ini, "pemimpin digital" didefinisikan sebagai vendor migas yang paling mudah ditemukan, diverifikasi, dan dihubungi secara online oleh procurement manager dan engineering manager di perusahaan migas nasional maupun multinasional yang beroperasi di Indonesia.

### 2.2 Digital Vision

Platform digital PT Adto dirancang untuk mencapai standar setara perusahaan migas global — bukan sekadar company profile statis, melainkan sebuah **Digital Enterprise Platform** yang aktif menghasilkan nilai bisnis terukur setiap hari. Platform ini harus mampu memberikan pengalaman digital yang meyakinkan bagi Procurement Manager Fortune 500 sekalipun, sekaligus mudah dioperasikan oleh tim internal yang tidak memiliki latar belakang teknis.

### 2.3 Website Vision

Website PT Adto dirancang sebagai **one-stop digital hub** yang memenuhi seluruh kebutuhan digital dari tiga kelompok pengguna utama:

| Kelompok Pengguna | Kebutuhan yang Dipenuhi Platform |
|---|---|
| **Klien & Calon Klien** | Menemukan, mengevaluasi, dan meminta penawaran produk/layanan secara mandiri, 24/7, tanpa harus menghubungi tim sales terlebih dahulu |
| **Vendor & Supplier** | Mendaftarkan perusahaan, mengirimkan dokumen kualifikasi, dan memantau status verifikasi melalui portal yang transparan |
| **Pencari Kerja** | Menemukan informasi perusahaan yang kredibel, melihat lowongan aktif, dan mengirimkan lamaran secara digital tanpa hambatan |

### 2.4 Long Term Vision (3–5 Tahun)

Dalam horizon waktu 3–5 tahun, PT Adto memiliki visi untuk mengembangkan platform digital menjadi ekosistem bisnis digital terintegrasi yang mencakup:

- **Tahun 1–2**: Platform v1.0 live, menghasilkan ≥ 20 lead/bulan, 100% vendor terdaftar secara digital, Domain Authority ≥ 30
- **Tahun 2–3**: Customer Portal aktif (authenticated), riwayat transaksi online, status order real-time, CRM terintegrasi
- **Tahun 3–4**: Vendor Portal aktif, procurement workflow digital end-to-end, ERP Integration untuk sinkronisasi inventory dan order
- **Tahun 4–5**: Multi-language (Bahasa Indonesia + English) untuk menjangkau klien internasional, e-catalog interaktif dengan spesifikasi teknis real-time, Internal Dashboard eksekutif dengan KPI visual

### 2.5 Future Expansion Vision

| Fitur | Versi Target | Deskripsi |
|---|---|---|
| **Customer Portal** | v2.0 | Area terautentikasi bagi klien untuk memantau status RFQ, riwayat pesanan, dan mengunduh dokumen transaksi |
| **Vendor Portal** | v2.0 | Area terautentikasi bagi vendor untuk memperbarui profil, mengunggah dokumen, dan menerima notifikasi pengadaan |
| **Internal Dashboard** | v2.0 | Dashboard eksekutif dengan visualisasi KPI bisnis, pipeline sales, dan analitik digital terintegrasi |
| **CRM Integration** | v2.1 | Sinkronisasi data lead dan RFQ dengan sistem CRM (Salesforce, HubSpot, atau Odoo CRM) |
| **ERP Integration** | v2.2 | Integrasi dengan sistem ERP untuk sinkronisasi inventory, purchase order, dan status pengiriman |
| **Multi-language** | v2.3 | Dukungan Bahasa Inggris penuh untuk menjangkau klien dan investor internasional |
| **E-catalog Interaktif** | v2.3 | Katalog produk interaktif dengan fitur konfigurasi spesifikasi, perbandingan produk, dan permintaan sampel |
| **Live Chat** | v2.4 | Integrasi live chat dengan antrian dan routing ke tim yang tepat berdasarkan topik pertanyaan |

---

## BRS BAB 3 — Business Objectives {#brs-bab-3}

### 3.1 Daftar Business Objectives

| ID | Nama Objective | Deskripsi | Business Value |
|---|---|---|---|
| BO-001 | Corporate Branding & Credibility | Membangun identitas digital profesional setara enterprise Oil & Gas global yang dapat diverifikasi oleh siapapun secara online | Eliminasi hambatan kepercayaan awal calon klien B2B |
| BO-002 | Lead Generation | Membangun mesin akuisisi lead digital yang beroperasi 24/7 tanpa biaya marginal per lead | Pertumbuhan pipeline penjualan yang skalabel |
| BO-003 | Sales Support — RFQ Digitization | Mendigitalisasi seluruh proses pengajuan dan pengelolaan RFQ dengan SLA yang terukur | Pengurangan waktu siklus penjualan dan peningkatan conversion rate |
| BO-004 | Vendor Registration Standardization | Membangun sistem registrasi dan verifikasi vendor yang terstandarisasi dan memiliki audit trail lengkap | Peningkatan kualitas rantai pasokan dan compliance procurement |
| BO-005 | Recruitment & Employer Branding | Membangun platform rekrutmen digital yang menarik kandidat berkualitas dan mempersingkat waktu pengisian posisi | Pengurangan biaya rekrutmen dan peningkatan kualitas talent pipeline |
| BO-006 | Knowledge Sharing & Authority Building | Membangun platform konten industri yang menghasilkan traffic organik dan memposisikan perusahaan sebagai thought leader | Peningkatan Domain Authority dan kepercayaan calon klien baru |
| BO-007 | Operational Efficiency | Mengotomasi proses komunikasi, notifikasi, dan pengelolaan dokumen yang sebelumnya dilakukan manual | Pengurangan waktu operasional tim sales, HR, dan procurement |
| BO-008 | SEO & Organic Traffic | Mengoptimalkan platform untuk mesin pencari guna menghasilkan traffic organik yang berkelanjutan tanpa biaya iklan | Customer acquisition cost yang lebih rendah dibandingkan paid traffic |
| BO-009 | Digital Transformation Foundation | Membangun arsitektur platform yang siap untuk integrasi Customer Portal, CRM, dan ERP di masa depan | Investasi infrastruktur digital jangka panjang yang tidak perlu dibangun ulang |
| BO-010 | Customer Trust Platform | Menyediakan semua informasi, dokumen, dan bukti sosial yang dibutuhkan calon klien untuk membangun kepercayaan kepada perusahaan | Peningkatan conversion rate dari visitor ke lead |

### 3.2 Detail Business Objectives

#### BO-001: Corporate Branding & Credibility

| Atribut | Detail |
|---|---|
| **Objective ID** | BO-001 |
| **Nama** | Corporate Branding & Credibility |
| **Deskripsi** | Membangun identitas digital perusahaan yang mencerminkan standar enterprise Oil & Gas global, meliputi: profil perusahaan lengkap, portfolio proyek yang terdokumentasi, sertifikasi dan legalitas yang dapat diverifikasi, serta presentasi visual yang konsisten dengan brand identity (Navy #0A2F5C, Orange #FF5A00) |
| **Business Value** | Kredibilitas digital yang kuat mengurangi hambatan kepercayaan awal, memperpendek siklus evaluasi vendor, dan meningkatkan win rate dalam proses tender dan seleksi pengadaan |
| **KPI** | (1) Waktu rata-rata yang dihabiskan pengunjung di halaman About Us ≥ 2 menit; (2) Bounce rate halaman Company Profile < 50%; (3) ≥ 5 dokumen legalitas/sertifikasi tersedia untuk diunduh |
| **Indikator Keberhasilan** | Procurement Manager dari 3 perusahaan migas berbeda melaporkan PT Adto sebagai "vendor yang dapat dipercaya" dalam survei pasca-engagement pertama |

#### BO-002: Lead Generation

| Atribut | Detail |
|---|---|
| **Objective ID** | BO-002 |
| **Nama** | Lead Generation |
| **Deskripsi** | Membangun sistem akuisisi lead digital yang terintegrasi dengan form RFQ, form kontak, dan CTA di seluruh halaman produk dan layanan, didukung oleh SEO organik yang menghasilkan traffic bertarget |
| **Business Value** | Lead digital memiliki biaya akuisisi yang jauh lebih rendah dibandingkan lead via pameran, sales call, atau paid advertising. Platform yang berjalan 24/7 menghasilkan lead bahkan di luar jam kerja |
| **KPI** | (1) ≥ 20 lead/bulan dalam 3 bulan pertama pasca-launch; (2) ≥ 500 unique visitors/bulan dalam 6 bulan; (3) Conversion rate visitor-ke-lead ≥ 2% |
| **Indikator Keberhasilan** | Tim sales melaporkan bahwa ≥ 30% dari total lead aktif bersumber dari website dalam kuartal pertama |

#### BO-003: Sales Support — RFQ Digitization

| Atribut | Detail |
|---|---|
| **Objective ID** | BO-003 |
| **Nama** | Sales Support — RFQ Digitization |
| **Deskripsi** | Menyediakan platform RFQ digital yang memungkinkan calon klien mengajukan permintaan penawaran terstruktur dengan semua informasi yang dibutuhkan tim sales, dan mengotomasi notifikasi serta pengelolaan alur tindak lanjut |
| **Business Value** | Digitalisasi RFQ memangkas waktu respons, menstandarisasi kualitas informasi yang diterima, mengurangi bolak-balik klarifikasi, dan menyediakan rekam jejak lengkap untuk analisis pipeline |
| **KPI** | (1) Waktu rata-rata respons RFQ oleh tim sales < 24 jam kerja; (2) 100% RFQ masuk tercatat dalam sistem dengan nomor referensi unik; (3) ≥ 10 RFQ digital per bulan dalam 3 bulan pertama |
| **Indikator Keberhasilan** | Sales Manager melaporkan pengurangan waktu administratif pengelolaan RFQ sebesar ≥ 40% dibandingkan proses manual |

#### BO-004: Vendor Registration Standardization

| Atribut | Detail |
|---|---|
| **Objective ID** | BO-004 |
| **Nama** | Vendor Registration Standardization |
| **Deskripsi** | Membangun portal registrasi vendor digital yang mengumpulkan data perusahaan, dokumen legalitas (NPWP, NIB, sertifikasi), dan kategori produk/jasa dalam format yang terstandarisasi dengan alur verifikasi internal yang terdokumentasi |
| **Business Value** | Standarisasi data vendor mengurangi risiko compliance, mempercepat proses seleksi vendor untuk proyek baru, dan membangun database pemasok yang dapat dianalisis |
| **KPI** | (1) 100% vendor aktif terdaftar melalui portal dalam 6 bulan pasca-launch; (2) Waktu proses verifikasi vendor < 3 hari kerja; (3) 0 vendor lolos tanpa verifikasi dokumen lengkap |
| **Indikator Keberhasilan** | Tim Procurement melaporkan pengurangan waktu onboarding vendor baru sebesar ≥ 50% |

#### BO-005: Recruitment & Employer Branding

| Atribut | Detail |
|---|---|
| **Objective ID** | BO-005 |
| **Nama** | Recruitment & Employer Branding |
| **Deskripsi** | Menyediakan Career Portal yang menampilkan lowongan aktif, informasi budaya perusahaan, dan form lamaran digital yang terintegrasi dengan dashboard HR |
| **Business Value** | Employer branding digital menarik kandidat berkualitas yang terseleksi secara mandiri, mengurangi ketergantungan pada job portal berbayar, dan mempercepat proses screening awal |
| **KPI** | (1) ≥ 50% dari total lamaran masuk melalui Career Portal dalam 3 bulan pertama; (2) Waktu pengisian posisi terbuka berkurang ≥ 30% dibandingkan rata-rata sebelumnya; (3) ≥ 5 lowongan aktif terpublikasi saat launch |
| **Indikator Keberhasilan** | HR Manager melaporkan peningkatan kualitas rata-rata kandidat yang masuk melalui Career Portal dibandingkan job portal eksternal |

#### BO-006: Knowledge Sharing & Authority Building

| Atribut | Detail |
|---|---|
| **Objective ID** | BO-006 |
| **Nama** | Knowledge Sharing & Authority Building |
| **Deskripsi** | Membangun Knowledge Center dengan artikel teknis industri (penggunaan chemical drilling, standar API, regulasi migas), news portal, dan resource library yang dapat diakses secara publik |
| **Business Value** | Konten teknis berkualitas tinggi meningkatkan Domain Authority, menghasilkan backlink organik, dan memposisikan perusahaan sebagai sumber informasi terpercaya di industri |
| **KPI** | (1) ≥ 30 artikel teknis terpublikasi dalam 3 bulan pertama; (2) Domain Authority (DA) ≥ 30 dalam 12 bulan; (3) ≥ 20% dari total traffic berasal dari halaman blog/knowledge center |
| **Indikator Keberhasilan** | Minimum 3 artikel muncul di halaman 1 Google untuk kata kunci target dalam 6 bulan |

#### BO-007: Operational Efficiency

| Atribut | Detail |
|---|---|
| **Objective ID** | BO-007 |
| **Nama** | Operational Efficiency |
| **Deskripsi** | Mengotomasi alur notifikasi untuk semua event penting (RFQ masuk, registrasi vendor baru, lamaran masuk) dan menyediakan CMS yang memungkinkan tim non-teknis mengelola seluruh konten secara mandiri |
| **Business Value** | Pengurangan waktu operasional yang sebelumnya dihabiskan untuk proses manual, membebaskan tim untuk fokus pada aktivitas bernilai tinggi |
| **KPI** | (1) Waktu publikasi konten baru oleh Content Editor < 15 menit per artikel; (2) 0 lead yang tidak ternotifikasi tim sales dalam waktu > 5 menit; (3) Tim tidak memerlukan bantuan developer untuk operasional konten harian |
| **Indikator Keberhasilan** | Content Editor berhasil mempublikasikan artikel pertama secara mandiri dalam 15 menit setelah pelatihan 2 jam |

#### BO-008: SEO & Organic Traffic

| Atribut | Detail |
|---|---|
| **Objective ID** | BO-008 |
| **Nama** | SEO & Organic Traffic |
| **Deskripsi** | Membangun platform dengan arsitektur SEO teknis yang optimal (SSR/SSG, schema markup, Core Web Vitals "Good", sitemap otomatis) dan menyediakan CMS yang memudahkan optimasi SEO on-page oleh Content Editor |
| **Business Value** | Traffic organik dari mesin pencari adalah sumber lead dengan customer acquisition cost (CAC) terendah dan efek jangka panjang yang berkelanjutan |
| **KPI** | (1) Core Web Vitals semua halaman utama masuk kategori "Good" di Google Search Console; (2) ≥ 500 unique visitors/bulan organik dalam 6 bulan; (3) ≥ 10 kata kunci target masuk halaman 1 Google dalam 12 bulan |
| **Indikator Keberhasilan** | Google Search Console menunjukkan ≥ 100 impressi per hari untuk kata kunci kategori produk dalam 6 bulan |

#### BO-009: Digital Transformation Foundation

| Atribut | Detail |
|---|---|
| **Objective ID** | BO-009 |
| **Nama** | Digital Transformation Foundation |
| **Deskripsi** | Membangun arsitektur platform yang modular dan extensible, dengan API backend yang terpisah dari frontend, sehingga modul baru (Customer Portal, CRM Integration, ERP Integration) dapat ditambahkan tanpa membangun ulang dari awal |
| **Business Value** | Investasi dalam arsitektur yang tepat saat ini menghemat biaya pengembangan ulang di masa depan dan mempercepat time-to-market untuk fitur v2.0 |
| **KPI** | (1) Seluruh fitur v1.0 dapat diakses melalui API yang terdokumentasi; (2) Struktur database dapat mengakomodasi tabel Customer Portal tanpa migrasi besar; (3) Zero downtime deployment tersedia sejak v1.0 |
| **Indikator Keberhasilan** | Estimasi effort pengembangan Customer Portal v2.0 tidak memerlukan perubahan arsitektur fundamental pada backend |

#### BO-010: Customer Trust Platform

| Atribut | Detail |
|---|---|
| **Objective ID** | BO-010 |
| **Nama** | Customer Trust Platform |
| **Deskripsi** | Menyediakan semua elemen kepercayaan yang dibutuhkan calon klien B2B: testimoni klien terverifikasi, portfolio proyek dengan detail, sertifikasi yang dapat diunduh, profil tim, dan konten teknis yang menunjukkan keahlian |
| **Business Value** | Trust signals yang kuat memperpendek siklus keputusan pembelian B2B yang biasanya panjang, meningkatkan conversion rate dari pengunjung pertama menjadi kontak aktif |
| **KPI** | (1) ≥ 5 testimoni klien terpublikasi saat launch; (2) ≥ 10 portfolio proyek dengan dokumentasi lengkap saat launch; (3) ≥ 3 sertifikasi yang dapat diverifikasi tersedia di halaman About |
| **Indikator Keberhasilan** | Conversion rate visitor-ke-lead ≥ 2% dalam 3 bulan pertama, diukur dari Google Analytics |

---

## BRS BAB 4 — Business Scope {#brs-bab-4}

### 4.1 In Scope — v1.0

Berikut adalah fitur dan modul yang termasuk dalam ruang lingkup v1.0:

| No | Fitur/Modul | Deskripsi Singkat |
|---|---|---|
| 1 | **Corporate Website** | Keseluruhan platform publik dengan navigasi dan desain enterprise |
| 2 | **Company Profile** | Profil perusahaan, visi misi, sejarah, struktur organisasi, sertifikasi |
| 3 | **Services Showcase** | Halaman layanan 3 lini bisnis dengan detail, keunggulan, dan CTA |
| 4 | **Products Catalog** | Katalog produk yang dapat dicari dan difilter dengan spesifikasi teknis |
| 5 | **Industries Pages** | Halaman per industri yang dilayani dengan portofolio terkait |
| 6 | **Projects Portfolio** | Portofolio proyek dengan studi kasus dan galeri foto |
| 7 | **Blog / Knowledge Center** | Platform konten artikel teknis dan panduan industri |
| 8 | **News Portal** | Portal berita perusahaan, siaran pers, dan pengumuman |
| 9 | **Media Gallery** | Galeri foto dan video perusahaan dalam format lightbox |
| 10 | **Download Center** | Pusat unduhan datasheet, brosur, sertifikasi, dan dokumen teknis |
| 11 | **RFQ Platform** | Platform pengajuan dan pengelolaan Request for Quotation |
| 12 | **Vendor Registration Portal** | Portal registrasi dan verifikasi vendor dengan alur internal |
| 13 | **Career Portal** | Halaman lowongan, form lamaran, dan dashboard HR |
| 14 | **Contact Platform** | Form kontak, informasi kantor, peta, WhatsApp CTA |
| 15 | **Search Platform** | Pencarian global seluruh konten publik |
| 16 | **FAQ** | Halaman pertanyaan yang sering diajukan |
| 17 | **CMS (Payload CMS)** | Sistem manajemen konten untuk semua modul di atas |
| 18 | **Authentication & RBAC** | Login, JWT, Redis session, role-based access control |
| 19 | **SEO Platform** | Meta tag, sitemap, robots.txt, schema markup, canonical URL |
| 20 | **Basic Analytics** | Integrasi Google Analytics 4 dan dashboard performa ringkasan |
| 21 | **Notification System** | Email notifikasi untuk RFQ, registrasi vendor, lamaran baru |
| 22 | **Media Optimization** | Kompresi gambar otomatis ke WebP via Sharp |

### 4.2 Out of Scope — v1.0

Berikut adalah fitur yang secara eksplisit tidak termasuk dalam v1.0:

| No | Fitur | Alasan Tidak Dimasukkan |
|---|---|---|
| 1 | **Payment Gateway** | Tidak ada transaksi finansial langsung di platform v1.0; RFQ menghasilkan penawaran manual |
| 2 | **E-commerce Transactions** | Platform v1.0 adalah lead generation, bukan platform jual-beli langsung |
| 3 | **Customer Portal (Authenticated)** | Fitur v2.0; memerlukan definisi proses bisnis yang lebih matang |
| 4 | **Live Chat** | Fitur v2.4; tergantung kesiapan tim support |
| 5 | **ERP Integration** | Fitur v2.2; memerlukan ketersediaan sistem ERP di sisi klien |
| 6 | **CRM Integration** | Fitur v2.1; memerlukan pemilihan dan implementasi CRM terlebih dahulu |
| 7 | **Mobile App (iOS/Android)** | Tidak direncanakan; website responsif sudah memenuhi kebutuhan mobile |
| 8 | **Multi-language (English)** | Fitur v2.3; memerlukan kapasitas penerjemahan konten yang signifikan |
| 9 | **Vendor Portal (Authenticated)** | Fitur v2.0; di v1.0 vendor hanya dapat mendaftar tanpa login |
| 10 | **Internal Dashboard Eksekutif** | Fitur v2.0; data analitik v1.0 sudah tersedia via Google Analytics |

### 4.3 Future Scope — v2.0+

| Fitur | Versi Target | Deskripsi |
|---|---|---|
| **Customer Portal** | v2.0 | Area login klien: status RFQ, riwayat pesanan, dokumen transaksi |
| **Vendor Portal** | v2.0 | Area login vendor: profil, dokumen, notifikasi pengadaan |
| **Internal Dashboard** | v2.0 | Dashboard eksekutif: KPI visual, pipeline sales, analitik terintegrasi |
| **CRM Integration** | v2.1 | Sinkronisasi lead dan RFQ dengan sistem CRM pilihan |
| **ERP Integration** | v2.2 | Sinkronisasi inventory, PO, dan status pengiriman dengan ERP |
| **Multi-language (EN)** | v2.3 | Dukungan Bahasa Inggris penuh |
| **E-catalog Interaktif** | v2.3 | Konfigurasi spesifikasi produk, perbandingan, permintaan sampel |
| **Live Chat** | v2.4 | Integrasi live chat dengan routing berbasis topik |

---

## BRS BAB 5 — Business Value {#brs-bab-5}

### 5.1 Nilai bagi PT ADTO Cipta Usaha Mandiri (Perusahaan)

| Dimensi Nilai | Manfaat Spesifik | Metrik |
|---|---|---|
| Kehadiran Digital | Perusahaan dapat ditemukan, diverifikasi, dan dievaluasi secara online 24/7 | Website aktif; profil lengkap |
| Akuisisi Klien | Platform menghasilkan lead baru tanpa biaya marginal per kontak | ≥ 20 lead/bulan |
| Diferensiasi Kompetitif | Penampilan setara enterprise global membedakan dari kompetitor yang belum terdigitalisasi | Persepsi "premium vendor" |
| Fondasi Ekspansi | Arsitektur siap integrasi CRM, ERP, Customer Portal | Biaya pengembangan v2.0 lebih rendah |

### 5.2 Nilai bagi Marketing Team

| Dimensi Nilai | Manfaat Spesifik | Metrik |
|---|---|---|
| Kemandirian Konten | Publikasi artikel, berita, dan update produk tanpa ketergantungan developer | < 15 menit/artikel |
| Data Pemasaran | Dashboard analitik menunjukkan halaman, produk, dan konten yang paling diminati | Keputusan berbasis data |
| SEO & Organic Traffic | Platform yang dioptimalkan menghasilkan traffic organik berkelanjutan | ≥ 500 UV/bulan dalam 6 bulan |
| Lead Tracking | Semua lead dari website tercatat otomatis dengan sumber dan detail kontak | 0 lead terlewat |

### 5.3 Nilai bagi Sales Team

| Dimensi Nilai | Manfaat Spesifik | Metrik |
|---|---|---|
| Lead Berkualitas | Calon klien yang mengajukan RFQ sudah self-qualified (tahu produk, punya kebutuhan nyata) | Kualitas lead lebih tinggi |
| Notifikasi Instan | Notifikasi email dalam < 5 menit setelah RFQ masuk | Respons lebih cepat |
| Informasi Terstruktur | RFQ digital berisi semua informasi yang dibutuhkan (produk, spesifikasi, kuantitas, timeline) | Pengurangan bolak-balik klarifikasi |
| Pipeline Visibility | Dashboard RFQ menampilkan semua lead aktif dan statusnya | Tidak ada lead yang terlupakan |

### 5.4 Nilai bagi Management & Leadership

| Dimensi Nilai | Manfaat Spesifik | Metrik |
|---|---|---|
| Visibilitas Performa | Dashboard ringkasan menunjukkan traffic, lead, RFQ, dan KPI digital dalam satu tampilan | Keputusan strategis berbasis data |
| Laporan Digital | Laporan performa dapat diakses kapan saja tanpa meminta tim | Self-service reporting |
| Credibility Signal | Website enterprise-grade memperkuat posisi dalam negosiasi dan presentasi investor | Persepsi perusahaan lebih besar |
| Skalabilitas | Fondasi digital yang solid mendukung pertumbuhan tanpa perlu membangun ulang | TCO jangka panjang lebih rendah |

### 5.5 Nilai bagi Vendor & Supplier

| Dimensi Nilai | Manfaat Spesifik | Metrik |
|---|---|---|
| Proses Pendaftaran Standar | Formulir registrasi yang jelas dan terstruktur mengurangi kebingungan | < 20 menit untuk submit |
| Transparansi Status | Notifikasi email setiap perubahan status verifikasi | 0 penelepon menanyakan status |
| Kesetaraan Kesempatan | Semua vendor mendaftar melalui jalur yang sama, tanpa diskriminasi akses | Proses yang adil dan konsisten |

### 5.6 Nilai bagi Customer & Client

| Segmen | Nilai | Metrik |
|---|---|---|
| **Procurement Manager** | Informasi produk lengkap + RFQ digital mengurangi waktu evaluasi vendor dari hari ke jam | < 10 menit untuk submit RFQ |
| **Engineering Manager** | Dokumentasi teknis, datasheet, dan knowledge center tersedia tanpa harus menghubungi sales | Akses mandiri 24/7 |
| **Project Manager** | Portfolio proyek dan studi kasus memberikan bukti kapabilitas yang konkret | Keputusan vendor lebih cepat |

### 5.7 Nilai bagi Investor

| Dimensi Nilai | Manfaat Spesifik |
|---|---|
| Validasi Kredibilitas | Kehadiran digital enterprise-grade menunjukkan kematangan operasional perusahaan |
| Transparansi Informasi | Profil perusahaan, milestone, dan dokumen publik tersedia secara terstruktur |
| Potensi Pertumbuhan | Digital foundation yang solid menunjukkan kesiapan perusahaan untuk skala lebih besar |

### 5.8 Nilai bagi Business Partner

| Dimensi Nilai | Manfaat Spesifik |
|---|---|
| Validasi Mitra | Partner dapat memverifikasi profil, kapabilitas, dan legalitas secara mandiri |
| Partnership Inquiry | Form kontak khusus atau CTA untuk partnership inquiry tersedia di halaman yang relevan |
| Kolaborasi Konten | Potensi co-branding melalui testimonial, case study bersama, atau artikel tamu |

### 5.9 Nilai bagi Job Seeker & Recruitment

| Dimensi Nilai | Manfaat Spesifik | Metrik |
|---|---|---|
| Informasi Perusahaan | Calon pelamar dapat memahami budaya, nilai, dan lingkungan kerja sebelum melamar | Kualitas kandidat lebih sesuai ekspektasi |
| Proses Lamaran Digital | Form lamaran online mengurangi hambatan proses melamar | ≥ 50% lamaran via portal |
| Konfirmasi Otomatis | Email konfirmasi otomatis dalam < 5 menit setelah lamaran dikirim | 0 kandidat merasa tidak diperhatikan |

---

## BRS BAB 6 — Success Criteria {#brs-bab-6}

### 6.1 Business Success Criteria

| ID | Kriteria | Target | Cara Pengukuran | Waktu Evaluasi |
|---|---|---|---|---|
| BS-001 | Lead dari website per bulan | ≥ 20 lead/bulan | Dashboard CMS + Google Analytics Goals | 3 bulan pasca-launch |
| BS-002 | RFQ digital per bulan | ≥ 10 RFQ/bulan | Dashboard RFQ CMS | 3 bulan pasca-launch |
| BS-003 | Vendor terdaftar via portal | ≥ 80% vendor aktif | Database vendor CMS | 6 bulan pasca-launch |
| BS-004 | Lamaran via Career Portal | ≥ 50% dari total lamaran | Dashboard HR CMS | 3 bulan pasca-launch |
| BS-005 | Waktu respons RFQ | < 24 jam kerja | Log waktu di dashboard RFQ | Ongoing |
| BS-006 | Conversion rate visitor-ke-lead | ≥ 2% | Google Analytics (Goals/Events) | 3 bulan pasca-launch |

### 6.2 Technical Success Criteria

| ID | Kriteria | Target | Cara Pengukuran | Waktu Evaluasi |
|---|---|---|---|---|
| TS-001 | Uptime sistem | ≥ 99,5%/bulan | Monitoring tool (UptimeRobot atau setara) | Ongoing |
| TS-002 | Lighthouse Performance (desktop) | ≥ 85 semua halaman utama | Lighthouse audit manual | Saat launch & monthly |
| TS-003 | LCP (Largest Contentful Paint) | ≤ 2,5 detik | Google Search Console Core Web Vitals | Saat launch & monthly |
| TS-004 | CLS (Cumulative Layout Shift) | < 0,1 | Google Search Console Core Web Vitals | Saat launch & monthly |
| TS-005 | INP / FID | < 200ms | Google Search Console Core Web Vitals | Saat launch & monthly |
| TS-006 | API response time (P95) | ≤ 500ms | Backend monitoring logs | Ongoing |
| TS-007 | Waktu load halaman (mobile, 4G) | ≤ 3 detik LCP | Lighthouse mobile audit | Saat launch |
| TS-008 | Recovery Time Objective (RTO) | ≤ 4 jam | Disaster recovery drill | Sebelum launch |
| TS-009 | Test coverage Backend | ≥ 70% | Coverage report (Jest/Vitest) | Sebelum launch |
| TS-010 | 0 kerentanan OWASP Top 10 kritis | 0 critical vulnerability | Penetration test dasar | Sebelum launch |

### 6.3 Operational Success Criteria

| ID | Kriteria | Target | Cara Pengukuran | Waktu Evaluasi |
|---|---|---|---|---|
| OS-001 | CMS adoption oleh tim internal | 100% tim konten menggunakan CMS | Survey internal | 1 bulan pasca-training |
| OS-002 | Waktu publikasi konten per artikel | < 15 menit | Task completion test saat training | Saat training |
| OS-003 | Notifikasi lead sampai ke sales | < 5 menit dari submit | Log notifikasi Backend | Ongoing |
| OS-004 | Ketergantungan developer untuk konten | 0 permintaan dev untuk update konten rutin | Tracking tiket support | 1 bulan pasca-launch |
| OS-005 | Lamaran masuk melalui portal | ≥ 50% total lamaran | Dashboard HR | 3 bulan pasca-launch |

### 6.4 Marketing Success Criteria

| ID | Kriteria | Target | Cara Pengukuran | Waktu Evaluasi |
|---|---|---|---|---|
| MS-001 | Unique visitors/bulan (organik) | ≥ 500 UV/bulan | Google Analytics | 6 bulan pasca-launch |
| MS-002 | Domain Authority (DA) | ≥ 30 | Moz / Ahrefs DA checker | 12 bulan pasca-launch |
| MS-003 | Artikel di halaman 1 Google | ≥ 3 kata kunci target | Google Search Console | 6 bulan pasca-launch |
| MS-004 | Total artikel terpublikasi | ≥ 30 artikel | CMS content count | 3 bulan pasca-launch |
| MS-005 | Average session duration | ≥ 2 menit | Google Analytics | 3 bulan pasca-launch |
| MS-006 | Bounce rate | < 60% | Google Analytics | 3 bulan pasca-launch |

### 6.5 SEO Success Criteria

| ID | Kriteria | Target | Cara Pengukuran | Waktu Evaluasi |
|---|---|---|---|---|
| SEO-001 | Core Web Vitals semua halaman utama | Semua "Good" | Google Search Console | Saat launch & monthly |
| SEO-002 | Halaman terindeks di Google | ≥ 80% halaman publik | Google Search Console Coverage | 1 bulan pasca-launch |
| SEO-003 | Sitemap.xml tersubmit dan valid | Tersubmit, 0 error | Google Search Console Sitemaps | Saat launch |
| SEO-004 | Schema markup valid | 0 error di Rich Results Test | Google Rich Results Test | Saat launch |
| SEO-005 | Canonical URL konsisten | 0 self-canonical error | Screaming Frog / Ahrefs | Saat launch |
| SEO-006 | Meta title & description unik | 100% halaman publik punya meta unik | Screaming Frog audit | Saat launch |
| SEO-007 | Robots.txt valid | Tidak ada halaman penting yang diblokir | Google Search Console | Saat launch |

---

## BRS BAB 7 — Business Risk {#brs-bab-7}

### 7.1 Matriks Risiko

Keterangan skala: **Impact**: 1=Low, 2=Medium, 3=High | **Probability**: 1=Low, 2=Medium, 3=High | **Risk Score** = Impact × Probability

| ID | Nama Risiko | Kategori | Deskripsi | Impact | Probability | Risk Score | Strategi Mitigasi |
|---|---|---|---|---|---|---|---|
| BR-001 | Keterlambatan Penyediaan Konten | Operational | Tim klien tidak menyediakan konten (teks, foto, video, data produk) tepat waktu, menyebabkan website tidak dapat diluncurkan sesuai jadwal | High (3) | High (3) | **9** | Kickoff meeting konten di awal proyek; content checklist diserahkan di hari-1; content freeze deadline ditetapkan 2 minggu sebelum launch; gunakan placeholder content untuk UAT |
| BR-002 | Rendahnya Adopsi CMS oleh Tim Internal | Operational | Tim konten tidak menggunakan CMS secara konsisten karena merasa terlalu teknis atau tidak nyaman dengan antarmuka baru | Medium (2) | Medium (2) | **4** | Pelatihan CMS 2 jam + panduan tertulis; desain CMS dengan UX yang intuitif; sesi hands-on sebelum go-live; support period 30 hari pasca-launch |
| BR-003 | Serangan DDoS atau Bot Traffic | Security | Serangan DDoS atau traffic bot masif dapat membuat website tidak dapat diakses, merusak reputasi, dan meningkatkan biaya infrastruktur | High (3) | Low (1) | **3** | Implementasi rate limiting; integrasi Cloudflare atau CDN dengan DDoS protection; monitoring traffic anomali; emergency scaling plan |
| BR-004 | Pelanggaran Data Pribadi | Security | Data kontak dari form RFQ, registrasi vendor, dan lamaran mengandung data pribadi yang tunduk pada UU PDP No. 27/2022. Kebocoran data dapat menimbulkan konsekuensi hukum | High (3) | Low (1) | **3** | Enkripsi data at-rest dan in-transit; minimisasi data yang dikumpulkan; privacy policy yang sesuai UU PDP; audit akses data secara berkala |
| BR-005 | Spam dan Penyalahgunaan Form | Security | Form publik (RFQ, kontak, registrasi vendor) berpotensi disalahgunakan untuk pengiriman spam yang mengotori database lead | Medium (2) | High (3) | **6** | Implementasi reCAPTCHA v3 atau honeypot; rate limiting per IP; validasi server-side; monitoring queue notifikasi untuk anomali |
| BR-006 | Kegagalan Infrastruktur Cloud | Technology | Downtime pada cloud provider atau S3 storage dapat membuat website tidak dapat diakses atau file tidak dapat diunduh | High (3) | Low (1) | **3** | Multi-region deployment; backup harian ke lokasi berbeda; health check monitoring; runbook pemulihan terdokumentasi |
| BR-007 | Rendahnya Traffic Organik (SEO Underperformance) | Marketing | Website yang diluncurkan tidak mencapai target traffic organik karena persaingan kata kunci lebih ketat dari perkiraan atau konten tidak dioptimalkan | Medium (2) | Medium (2) | **4** | Riset kata kunci mendalam sebelum launch; strategi konten yang konsisten; monitoring Google Search Console bulanan; backlink building dari direktori industri |
| BR-008 | Konten Tidak Diperbarui Pasca-Launch | Content | Setelah website diluncurkan, tim internal tidak secara konsisten menghasilkan konten baru, menyebabkan website terlihat stagnan di mata pengunjung dan mesin pencari | Medium (2) | High (3) | **6** | Kalender editorial yang ditetapkan sebelum launch; target konten masuk KPI tim marketing; pelatihan CMS yang mengurangi friction publikasi |
| BR-009 | Ketergantungan pada Vendor Teknologi Tunggal | Technology | Ketergantungan pada Payload CMS sebagai satu-satunya CMS membuat migrasi di masa depan kompleks dan mahal | Low (1) | Low (1) | **1** | Payload CMS open-source dengan data yang disimpan di PostgreSQL; data portability terjaga; API-first architecture memudahkan migrasi frontend |
| BR-010 | Inefektifitas Lead Nurturing | Business | Lead yang masuk melalui website tidak ditindaklanjuti dengan cepat oleh tim sales, menghasilkan konversi yang rendah | High (3) | Medium (2) | **6** | SLA notifikasi < 5 menit; dashboard lead visibility untuk sales manager; escalation alert jika lead tidak ditindaklanjuti dalam 4 jam kerja |
| BR-011 | Pelanggaran Hak Kekayaan Intelektual Konten | Content | Penggunaan gambar, teks, atau data dari pihak ketiga tanpa lisensi yang tepat dapat menimbulkan klaim hak cipta | Medium (2) | Medium (2) | **4** | Panduan konten yang mencakup aturan lisensi gambar; penggunaan foto asli atau lisensi royalty-free; legal review untuk konten yang mengutip regulasi |
| BR-012 | Perubahan Algoritma Mesin Pencari | Marketing | Perubahan algoritma Google dapat menurunkan peringkat halaman yang sebelumnya sudah di halaman 1, mengurangi traffic organik secara tiba-tiba | Medium (2) | Medium (2) | **4** | Fokus pada konten berkualitas tinggi (tahan terhadap update algoritma); diversifikasi sumber traffic; monitoring Google Search Console untuk deteksi dini |

### 7.2 Risk Priority Matrix

| Prioritas | Risiko | Risk Score | Tindakan |
|---|---|---|---|
| **Kritis** | BR-001 Keterlambatan Konten | 9 | Mitigasi segera, pantau setiap sprint |
| **Tinggi** | BR-005 Spam Form | 6 | Implementasi wajib sebelum launch |
| **Tinggi** | BR-008 Konten Stagnan Pasca-Launch | 6 | Rencana editorial wajib sebelum launch |
| **Tinggi** | BR-010 Inefektifitas Lead Nurturing | 6 | SLA dan eskalasi wajib dikonfigurasi |
| **Sedang** | BR-002 Adopsi CMS Rendah | 4 | Training wajib + support period |
| **Sedang** | BR-007 SEO Underperformance | 4 | Strategi konten terencana |
| **Sedang** | BR-011 Pelanggaran HKI | 4 | Panduan konten + legal brief |
| **Sedang** | BR-012 Perubahan Algoritma | 4 | Content quality-first approach |
| **Rendah** | BR-003 Serangan DDoS | 3 | CDN + rate limiting |
| **Rendah** | BR-004 Pelanggaran Data Pribadi | 3 | Enkripsi + privacy policy |
| **Rendah** | BR-006 Kegagalan Infrastruktur | 3 | Backup + monitoring |
| **Sangat Rendah** | BR-009 Ketergantungan CMS | 1 | Open-source + data portability |

---

## BRS BAB 8 — Project Assumptions {#brs-bab-8}

### 8.1 Asumsi Konten dan Aset

| ID | Asumsi | Implikasi jika Tidak Terpenuhi |
|---|---|---|
| PA-001 | PT Adto akan menyediakan semua konten teks (profil perusahaan, deskripsi layanan, deskripsi produk, data proyek) dalam Bahasa Indonesia yang siap publikasi paling lambat 2 minggu sebelum jadwal launch | Jadwal launch tertunda proporsional dengan keterlambatan penyediaan konten |
| PA-002 | PT Adto memiliki atau dapat menyediakan foto-foto lapangan, foto tim, foto produk, dan foto proyek dalam resolusi minimal 1200×800 pixel | Halaman visual akan menggunakan placeholder dan tampilan tidak optimal |
| PA-003 | PT Adto memiliki dokumen legalitas digital (PDF) yang siap diunggah: NPWP, NIB, SIUP, sertifikasi API, dan dokumen relevan lainnya | Halaman sertifikasi dan legalitas akan kosong atau tidak lengkap saat launch |
| PA-004 | Seluruh konten yang disediakan klien bebas dari masalah hak kekayaan intelektual dan tidak melanggar hak pihak ketiga | Tim pengembang tidak bertanggung jawab atas klaim HKI yang timbul dari konten yang disediakan klien |
| PA-005 | PT Adto akan menunjuk minimal 1 orang Content Editor internal yang bertanggung jawab sebagai PIC konten sejak awal proyek | Pelatihan CMS dan transfer knowledge tidak dapat dilaksanakan efektif |

### 8.2 Asumsi Infrastruktur dan Domain

| ID | Asumsi | Implikasi jika Tidak Terpenuhi |
|---|---|---|
| PA-006 | PT Adto akan mendaftarkan dan menyediakan domain aktif (contoh: adto.co.id) sebelum fase UAT dimulai | Pengujian integrasi dan konfigurasi SSL tidak dapat dilaksanakan |
| PA-007 | Klien akan menyediakan akses ke layanan S3-compatible storage (AWS S3, MinIO, Cloudflare R2) atau setara untuk penyimpanan media dan file | Modul Media Gallery, Download Center, dan upload dokumen tidak dapat dikonfigurasi |
| PA-008 | Layanan cloud atau VPS yang digunakan memiliki spesifikasi minimum: 4 vCPU, 8GB RAM, 50GB SSD untuk environment produksi | Performa sistem tidak dapat memenuhi target NFR yang ditetapkan |
| PA-009 | Sertifikat SSL/TLS akan dikonfigurasi pada domain dan subdomain yang digunakan sebelum go-live | Website tidak dapat diakses via HTTPS, melanggar NFR-015 |

### 8.3 Asumsi Tim Internal

| ID | Asumsi | Implikasi jika Tidak Terpenuhi |
|---|---|---|
| PA-010 | Tim internal PT Adto yang akan menggunakan sistem (Sales, HR, Marketing, Procurement) tersedia untuk menghadiri sesi pelatihan CMS selama 2 jam sebelum go-live | Tim tidak siap mengoperasikan sistem; platform tidak dapat dimanfaatkan secara optimal |
| PA-011 | PT Adto akan menunjuk minimal 1 Super Administrator internal yang bertanggung jawab atas keamanan akun, pengelolaan pengguna CMS, dan kontak utama untuk isu teknis pasca-launch | Tidak ada penanggung jawab internal untuk operasional dan keamanan sistem |
| PA-012 | Perwakilan dari PT Adto (minimal Marketing Lead dan Sales Lead) tersedia untuk sesi UAT (User Acceptance Testing) selama 3–5 hari kerja sebelum go-live | Jadwal go-live tertunda; bugs dari perspektif pengguna tidak teridentifikasi |

### 8.4 Asumsi Layanan Pihak Ketiga

| ID | Asumsi | Implikasi jika Tidak Terpenuhi |
|---|---|---|
| PA-013 | Layanan pengiriman email transaksional (SMTP atau API: SendGrid, Mailgun, atau setara) akan tersedia dan terkonfigurasi sebelum UAT | Sistem notifikasi email (RFQ, vendor, lamaran) tidak dapat diuji dan tidak berfungsi saat launch |
| PA-014 | Akun Google Analytics 4 dan Google Search Console akan didaftarkan dengan properti domain yang tepat dan diberikan akses ke tim pengembang sebelum launch | Data analitik tidak tersedia; target SEO dan traffic tidak dapat diukur |
| PA-015 | Akun Google Maps API dengan billing yang aktif akan disediakan untuk integrasi peta di halaman kontak | Peta interaktif diganti dengan embed statis atau gambar |

### 8.5 Asumsi Regulasi dan Legalitas

| ID | Asumsi | Implikasi jika Tidak Terpenuhi |
|---|---|---|
| PA-016 | PT Adto bersedia mempublikasikan Kebijakan Privasi (Privacy Policy) dan Syarat & Ketentuan (Terms of Service) yang sesuai dengan UU PDP No. 27/2022 sebelum website diluncurkan | Website melanggar regulasi perlindungan data; risiko hukum bagi perusahaan |
| PA-017 | Seluruh klaim dan data yang dipublikasikan di website (jumlah proyek, klien, sertifikasi) adalah akurat dan dapat diverifikasi | Risiko reputasi dan hukum jika informasi tidak akurat |

### 8.6 Asumsi Timeline

| ID | Asumsi | Implikasi jika Tidak Terpenuhi |
|---|---|---|
| PA-018 | Proyek dilaksanakan dengan metodologi Agile/Scrum dengan sprint 2 minggu. Feedback dan persetujuan dari klien tersedia dalam waktu tidak lebih dari 3 hari kerja setelah setiap deliverable demo | Akumulasi feedback yang tertunda dapat menyebabkan pergeseran jadwal yang signifikan |
| PA-019 | Perubahan scope di luar yang terdefinisi dalam dokumen ini dikomunikasikan secara tertulis dan diproses melalui formal change request process dengan estimasi dampak waktu dan biaya | Scope creep yang tidak terkelola dapat mengganggu jadwal dan anggaran |

### 8.7 Asumsi Anggaran

| ID | Asumsi | Implikasi jika Tidak Terpenuhi |
|---|---|---|
| PA-020 | Anggaran mencakup biaya lisensi layanan pihak ketiga yang diperlukan (email service, Google Maps API, monitoring tool) selama minimal 12 bulan | Beberapa fitur mungkin perlu dinonaktifkan jika anggaran tidak mencakup biaya operasional |

---

## BRS BAB 9 — Project Constraints {#brs-bab-9}

### 9.1 Business Constraints

| ID | Constraint | Deskripsi | Implikasi |
|---|---|---|---|
| BC-001 | Scope v1.0 Fixed | Fitur yang ditetapkan dalam BAB 4 (In Scope) tidak dapat ditambahkan atau dikurangi tanpa formal change request yang disetujui kedua pihak | Penambahan fitur di luar scope memerlukan revisi jadwal dan anggaran |
| BC-002 | Bahasa Konten Indonesia | Seluruh konten publik website v1.0 ditulis dalam Bahasa Indonesia; dukungan Bahasa Inggris adalah fitur v2.3 | Konten berbahasa Inggris tidak akan dipublikasikan di v1.0 |
| BC-003 | Tanpa Transaksi Finansial | Platform v1.0 tidak memproses, menyimpan, atau mentransmisi data pembayaran dalam bentuk apapun | Payment gateway dan fitur e-commerce bukan bagian dari v1.0 |
| BC-004 | Website-Only (No Native App) | Platform v1.0 adalah web application saja; tidak ada mobile app iOS atau Android yang dikembangkan | Pengguna mobile mengakses melalui browser; PWA tidak termasuk v1.0 |
| BC-005 | Public-Only (No Authenticated External Users) | Di v1.0, semua pengunjung eksternal adalah unauthenticated (kecuali pengguna internal CMS); tidak ada akun klien atau vendor | Customer Portal dan Vendor Portal adalah fitur v2.0 |

### 9.2 Technology Constraints

| ID | Constraint | Deskripsi | Implikasi |
|---|---|---|---|
| TC-001 | Technology Stack Lock | Stack teknologi yang ditetapkan (Next.js 14, NestJS, TypeScript, PostgreSQL, Prisma, Payload CMS) tidak dapat diganti dengan alternatif lain tanpa persetujuan formal | Keputusan arsitektur dan library harus kompatibel dengan stack yang ditetapkan |
| TC-002 | Node.js Version | Seluruh komponen JavaScript/TypeScript harus berjalan pada Node.js LTS (v20.x atau v22.x) | Library yang hanya mendukung Node.js versi lama tidak dapat digunakan |
| TC-003 | TypeScript Strict Mode | Kode TypeScript harus dikompilasi tanpa error pada `strict: true`; penggunaan `any` type hanya diizinkan dengan justifikasi yang terdokumentasi | Kualitas kode yang lebih tinggi tetapi waktu development sedikit lebih panjang |
| TC-004 | Containerization | Semua komponen sistem harus ter-containerized menggunakan Docker; tidak ada komponen yang di-deploy langsung di host tanpa container | Dependensi lingkungan yang konsisten; tidak ada masalah "works on my machine" |
| TC-005 | API-First Architecture | Backend harus mengekspos semua fungsionalitas melalui RESTful API yang terdokumentasi; tidak ada logika bisnis yang di-hard-code di frontend | Frontend dan backend dapat dikembangkan dan di-deploy secara independen |

### 9.3 Budget Constraints

| ID | Constraint | Deskripsi | Implikasi |
|---|---|---|---|
| BudC-001 | Cloud Provider Cost | Solusi infrastruktur harus menggunakan layanan cloud dengan harga kompetitif; solusi enterprise-tier berbayar per seat yang mahal (seperti Datadog Premium) tidak diizinkan tanpa persetujuan anggaran khusus | Penggunaan alternatif open-source atau tier gratis untuk monitoring dan logging |
| BudC-002 | Open-Source First | Untuk setiap kebutuhan tooling atau library, solusi open-source harus dipertimbangkan dan diprioritaskan sebelum solusi berbayar | Payload CMS (open-source) dipilih sebagai CMS; Redis Community Edition digunakan |
| BudC-003 | License Cost Clarity | Semua lisensi perangkat lunak berbayar yang diperlukan harus diidentifikasi dan dimasukkan ke dalam estimasi biaya sebelum pengembangan dimulai | Tidak ada biaya lisensi tersembunyi yang muncul di pertengahan proyek |

### 9.4 Legal Constraints

| ID | Constraint | Deskripsi | Implikasi |
|---|---|---|---|
| LC-001 | UU PDP No. 27/2022 | Platform harus mematuhi Undang-Undang Perlindungan Data Pribadi No. 27 Tahun 2022. Data pribadi yang dikumpulkan melalui form (nama, email, nomor telepon, NPWP) harus diproses sesuai ketentuan yang berlaku | Wajib ada Privacy Policy; data tidak boleh dijual atau diberikan ke pihak ketiga; pengguna berhak atas akses dan penghapusan data |
| LC-002 | GDPR Awareness | Meskipun target utama adalah pasar Indonesia, website dapat diakses oleh pengguna dari Uni Eropa. Praktik terbaik GDPR (consent untuk analytics tracking, data minimization) harus diterapkan | Cookie consent banner wajib; analytics hanya aktif setelah consent pengguna |
| LC-003 | Intellectual Property | Semua aset yang digunakan di website (gambar, logo, konten teks) harus bebas dari klaim hak cipta pihak ketiga atau dilisensikan dengan tepat | Foto dari Google Image Search tidak dapat digunakan; harus menggunakan foto asli, stock photo berlisensi, atau aset yang disediakan klien |
| LC-004 | Akurasi Informasi Korporat | Informasi yang dipublikasikan mengenai legalitas, sertifikasi, dan data perusahaan harus akurat dan dapat diverifikasi. Informasi yang menyesatkan dapat menimbulkan risiko hukum | Tim legal PT Adto harus me-review halaman About, Sertifikasi, dan halaman Legalitas sebelum go-live |

### 9.5 Timeline Constraints

| ID | Constraint | Deskripsi | Implikasi |
|---|---|---|---|
| TLC-001 | Phase-Based Delivery | Proyek dibagi menjadi fase pengembangan yang terstruktur; setiap fase harus diselesaikan dan mendapat persetujuan klien sebelum fase berikutnya dimulai | Tidak ada paralel development yang melampaui fase yang telah disetujui |
| TLC-002 | Content Freeze Deadline | Semua konten final dari klien harus tersedia paling lambat 2 minggu sebelum jadwal go-live | Konten yang terlambat masuk akan dimasukkan setelah go-live sebagai content update, bukan menunda launch |
| TLC-003 | UAT Duration | Periode User Acceptance Testing (UAT) ditetapkan selama minimal 5 hari kerja sebelum go-live; tidak dapat dipersingkat tanpa persetujuan formal | Jika UAT menemukan bug kritis, jadwal go-live dapat bergeser untuk perbaikan |
| TLC-004 | Security Review | Penetration test dasar harus selesai dan semua temuan kritis/tinggi harus diperbaiki sebelum go-live | Go-live tidak dapat dilaksanakan jika ada kerentanan kritis yang belum diperbaiki |

---

---

# BAGIAN II — SOFTWARE REQUIREMENTS SPECIFICATION (SRS)

<!-- 
  Software Requirements Specification (SRS)
  PT ADTO Cipta Usaha Mandiri — Enterprise Website Platform
  Dokumen: SRS-ADTO-ENT-001 | Versi: 1.0.0 | Tanggal: 2026-07-01
  Standar: IEEE 830-1998 / ISO/IEC/IEEE 29148:2018
-->

## Introduction

Dokumen ini merupakan **Software Requirements Specification (SRS)** lengkap untuk proyek **Enterprise Website Platform PT ADTO Cipta Usaha Mandiri**, disusun sesuai standar IEEE 830-1998 dan ISO/IEC/IEEE 29148:2018.

**PT ADTO Cipta Usaha Mandiri** adalah perusahaan B2B industrial di sektor Oil & Gas yang menyediakan:
- Chemical Oil & Gas (Bentonite API, Barite API, dll.)
- Sparepart & Service untuk peralatan industri
- Jasa Mobilisasi/Demobilisasi alat berat

Platform ini mencakup: Corporate Website, Marketing & Lead Generation, RFQ Platform, Vendor Registration Portal, Career Portal, Knowledge Center, Media Gallery, CMS, SEO Platform, dan fondasi ekspansi masa depan (Customer Portal, CRM, ERP Integration).

**Tech Stack:** Next.js 14 (App Router) + NestJS + TypeScript + PostgreSQL + Prisma + Payload CMS + JWT/Redis + BullMQ + Sharp + S3 Compatible + Docker

---

## Daftar Isi SRS

1. [BAB 1 — Pendahuluan](#bab-1)
2. [BAB 2 — Kebutuhan Bisnis](#bab-2)
3. [BAB 3 — Analisis Pemangku Kepentingan](#bab-3)
4. [BAB 4 — Analisis Pengguna](#bab-4)
5. [BAB 5 — Kebutuhan Fungsional](#bab-5)
6. [BAB 6 — Kebutuhan Non-Fungsional](#bab-6)
7. [BAB 7 — Kebutuhan Sistem](#bab-7)
8. [BAB 8 — Aturan Bisnis](#bab-8)
9. [BAB 9 — Batasan](#bab-9)
10. [BAB 10 — Asumsi, Dependensi, Risiko, dan Ekspansi Masa Depan](#bab-10)
11. [BAB 11 — Kriteria Penerimaan](#bab-11)
12. [BAB 12 — Matriks Keterlacakan Kebutuhan](#bab-12)

---

## Glossary

| Istilah | Definisi |
|---|---|
| **System** | Enterprise Website Platform PT ADTO Cipta Usaha Mandiri secara keseluruhan |
| **Frontend** | Antarmuka web berbasis Next.js yang diakses pengguna melalui browser |
| **Backend** | Layanan API berbasis NestJS yang memproses logika bisnis |
| **CMS** | Content Management System berbasis Payload CMS untuk pengelolaan konten |
| **RFQ** | Request for Quotation — permintaan penawaran harga dari calon klien |
| **Vendor** | Pemasok atau mitra yang mendaftarkan diri melalui portal vendor |
| **User** | Pengguna yang telah terautentikasi dan memiliki akun aktif di System |
| **Guest** | Pengunjung yang belum terautentikasi |
| **Super_Admin** | Pengguna internal dengan hak akses penuh terhadap seluruh fitur System |
| **Content_Editor** | Pengguna internal dengan hak akses untuk membuat dan mengelola konten |
| **SEO_Platform** | Modul pengelolaan metadata, sitemap, dan optimasi mesin pencari |
| **Lead** | Data calon klien yang masuk melalui form kontak atau RFQ |
| **Notification_Service** | Layanan pengiriman notifikasi email, in-app, dan antrian pesan |
| **Media_Manager** | Modul pengelolaan gambar, dokumen, dan aset media |
| **Queue** | Sistem antrian pesan berbasis BullMQ untuk pemrosesan asinkron |
| **Storage** | Penyimpanan objek kompatibel S3 untuk file dan media |

---


## BAB 1 — Pendahuluan {#bab-1}

### 1.1 Tujuan Dokumen

Dokumen ini merupakan Software Requirements Specification (SRS) lengkap untuk proyek **Enterprise Website Platform PT ADTO Cipta Usaha Mandiri**. Dokumen ini disusun sesuai standar IEEE 830-1998 dan ISO/IEC/IEEE 29148:2018 sebagai acuan resmi bagi seluruh pemangku kepentingan — tim bisnis, perancang sistem, pengembang perangkat lunak, dan tim QA — dalam proses pengembangan, pengujian, dan penerimaan sistem.

### 1.2 Ruang Lingkup Sistem

**Nama Sistem:** Adto Enterprise Website Platform  
**Versi:** 1.0  
**Tagline:** Energi Terpadu, Solusi Mandiri

THE System SHALL berfungsi sebagai Digital Enterprise Platform terpadu yang mencakup:

- Corporate Website & Company Profile
- Marketing Platform & Lead Generation
- Vendor Registration Portal
- Request Quotation (RFQ) Platform
- Career Portal
- Knowledge Center & News Portal
- Media Gallery & Download Center
- Contact Platform
- Content Management System (CMS)
- SEO Platform
- Future Expansion Platform (Customer Portal, Vendor Portal, Internal Dashboard, CRM, ERP Integration)

Sistem ini bukan sistem ERP, bukan sistem akuntansi, dan bukan platform e-commerce transaksional penuh. Ruang lingkup dibatasi pada platform digital enterprise untuk tujuan korporat, pemasaran, lead generation, dan manajemen konten.

### 1.3 Latar Belakang Bisnis

PT ADTO Cipta Usaha Mandiri adalah perusahaan B2B industrial di sektor Oil & Gas yang menyediakan tiga lini layanan utama:

1. **Chemical Oil & Gas** — Bentonite API, Barite API, dan produk kimia penunjang industri migas
2. **Sparepart & Service** — Suku cadang dan jasa perawatan peralatan industri
3. **Jasa Mobilisasi/Demobilisasi** — Layanan angkutan alat berat untuk kebutuhan lapangan

Perusahaan beroperasi di segmen B2B dengan target klien utama berupa perusahaan migas, kontraktor EPC, dan service company skala nasional. Untuk memperkuat posisi pasar, meningkatkan kepercayaan klien, dan mengakselerasi proses akuisisi lead, perusahaan membutuhkan platform digital enterprise bertaraf internasional.

### 1.4 Tujuan Proyek

| No | Tujuan | Indikator Keberhasilan |
|---|---|---|
| 1 | Membangun kredibilitas digital kelas enterprise | Website tampil di halaman 1 Google untuk kata kunci target dalam 6 bulan |
| 2 | Mengotomasi proses lead generation | Minimum 20 lead masuk per bulan dari website dalam kuartal pertama |
| 3 | Menyediakan platform RFQ digital | Waktu respons RFQ dari tim sales < 24 jam kerja |
| 4 | Membangun basis konten industri (Knowledge Center) | Minimum 30 artikel teknis terpublikasi dalam 3 bulan pertama |
| 5 | Menyederhanakan proses rekrutmen | Lamaran masuk melalui Career Portal > 50% dari total lamaran |
| 6 | Menyediakan portal registrasi vendor terstandarisasi | Seluruh vendor aktif terdaftar melalui portal dalam 6 bulan |

### 1.5 Definisi, Akronim, dan Singkatan

Lihat bagian **Glossary** di atas dokumen ini.

### 1.6 Referensi

| No | Dokumen | Sumber |
|---|---|---|
| 1 | IEEE 830-1998: Recommended Practice for Software Requirements Specifications | IEEE |
| 2 | ISO/IEC/IEEE 29148:2018: Systems and software engineering — Life cycle processes — Requirements engineering | ISO/IEC |
| 3 | WCAG 2.1 Level AA: Web Content Accessibility Guidelines | W3C |
| 4 | OWASP Top 10: Web Application Security Risks | OWASP |
| 5 | Next.js 14 Documentation (App Router) | Vercel |
| 6 | NestJS Documentation | NestJS |
| 7 | Payload CMS Documentation | Payload |
| 8 | Corporate Handbook PT ADTO Cipta Usaha Mandiri | Internal |

### 1.7 Ikhtisar Dokumen

Dokumen ini terdiri dari 12 bab. BAB 1 memperkenalkan konteks dan tujuan. BAB 2 menjabarkan kebutuhan bisnis. BAB 3 dan 4 menganalisis pemangku kepentingan dan pengguna. BAB 5 mendefinisikan semua kebutuhan fungsional. BAB 6 mendefinisikan kebutuhan non-fungsional. BAB 7 merinci kebutuhan sistem teknis. BAB 8 menetapkan aturan bisnis. BAB 9–10 membahas batasan, asumsi, risiko, dan ekspansi. BAB 11–12 menetapkan kriteria penerimaan dan matriks keterlacakan.

---

## BAB 2 — Kebutuhan Bisnis {#bab-2}

### 2.1 Tujuan Bisnis

| ID | Tujuan Bisnis | Prioritas |
|---|---|---|
| BG-001 | Membangun kehadiran digital profesional setara enterprise Oil & Gas global | Kritis |
| BG-002 | Meningkatkan volume lead B2B yang masuk secara organik dan terukur | Tinggi |
| BG-003 | Mempercepat siklus penjualan melalui digitalisasi proses RFQ | Tinggi |
| BG-004 | Membangun ekosistem konten industri untuk otoritas domain (domain authority) | Sedang |
| BG-005 | Memprofesionalkan proses rekrutmen dan manajemen talenta | Sedang |
| BG-006 | Membangun database vendor terstandarisasi dan terverifikasi | Sedang |
| BG-007 | Menyediakan pondasi infrastruktur digital untuk ekspansi bisnis masa depan | Tinggi |

### 2.2 Masalah Bisnis yang Diselesaikan

| ID | Masalah | Dampak Bisnis | Solusi |
|---|---|---|---|
| BP-001 | Tidak ada kehadiran digital profesional; klien potensial tidak dapat memverifikasi kredibilitas perusahaan secara online | Kehilangan peluang tender dan kontrak | Corporate Website & Company Profile |
| BP-002 | Proses pengajuan RFQ masih manual melalui email/WhatsApp; tidak ada rekam jejak terstruktur | Kehilangan lead, respons lambat | Modul RFQ Platform |
| BP-003 | Tidak ada portal terpusat untuk pendaftaran vendor; proses masih manual dan tidak konsisten | Risiko vendor tidak terverifikasi, proses procurement lambat | Vendor Registration Portal |
| BP-004 | Proses rekrutmen tidak terstandardisasi; tidak ada alur tracking lamaran yang jelas | Kehilangan kandidat berkualitas | Career Portal |
| BP-005 | Tidak ada platform untuk membangun otoritas industri melalui konten teknis | Rendahnya kepercayaan calon klien baru | Knowledge Center & Blog |
| BP-006 | Tidak ada sistem notifikasi lead terpusat; tim sales sering terlambat menindaklanjuti | Konversi lead rendah | Notification & Lead Management |

### 2.3 Peluang Bisnis

THE System SHALL mengeksploitasi peluang berikut:

1. Tren digitalisasi procurement di industri Oil & Gas Indonesia yang mendorong vendor untuk memiliki platform digital terverifikasi
2. Pertumbuhan pencarian produk industrial melalui mesin pencari digital yang memungkinkan akuisisi lead organik berbiaya rendah
3. Kebutuhan kontraktor EPC dan service company untuk memvalidasi vendor secara digital sebelum proses pengadaan

### 2.4 Nilai Bisnis yang Diharapkan

| ID | Nilai Bisnis | Metrik | Target |
|---|---|---|---|
| BV-001 | Peningkatan lead generation | Jumlah lead per bulan | ≥ 20 lead/bulan dalam 3 bulan pertama |
| BV-002 | Efisiensi proses RFQ | Waktu rata-rata respons RFQ | < 24 jam kerja |
| BV-003 | Otoritas digital | Domain Authority (DA) | DA ≥ 30 dalam 12 bulan |
| BV-004 | Jangkauan organik | Organic traffic bulanan | ≥ 500 unique visitors/bulan dalam 6 bulan |
| BV-005 | Efisiensi rekrutmen | % lamaran via portal | ≥ 50% dari total lamaran |

### 2.5 Kriteria Sukses

THE System dinyatakan berhasil apabila:

1. WHEN sistem diluncurkan ke produksi, THE System SHALL melewati seluruh acceptance test yang ditetapkan di BAB 11
2. WHEN diakses dari jaringan publik, THE System SHALL mencapai skor Lighthouse Performance ≥ 85 pada versi desktop
3. WHEN pengguna mengisi form RFQ, THE System SHALL mengirimkan notifikasi ke tim sales dalam waktu tidak lebih dari 5 menit
4. WHEN konten dipublikasikan melalui CMS, THE System SHALL memperbarui halaman publik dalam waktu tidak lebih dari 60 detik

---

## BAB 3 — Analisis Pemangku Kepentingan {#bab-3}

### 3.1 Pemangku Kepentingan Internal

| ID | Peran | Tanggung Jawab | Ekspektasi terhadap System |
|---|---|---|---|
| STK-I-001 | Super Administrator | Mengelola seluruh konfigurasi sistem, pengguna, dan akses | Antarmuka admin yang powerful, log aktivitas lengkap, kontrol penuh |
| STK-I-002 | Administrator | Mengelola pengguna, konten, dan pengaturan operasional | Dashboard yang mudah digunakan, manajemen pengguna yang efisien |
| STK-I-003 | Marketing | Mengelola konten pemasaran, kampanye, lead generation | Editor konten yang mudah, laporan lead real-time, kemudahan publikasi |
| STK-I-004 | Sales | Menindaklanjuti lead dan RFQ yang masuk | Notifikasi lead instan, dashboard pipeline, riwayat komunikasi |
| STK-I-005 | HR | Mengelola posting lowongan dan penerimaan lamaran | Portal karir yang mudah, manajemen lamaran terstruktur |
| STK-I-006 | Content Editor | Membuat dan mempublikasikan artikel, berita, dan knowledge base | CMS yang intuitif, preview sebelum publikasi, manajemen media |
| STK-I-007 | Procurement | Mengelola registrasi dan verifikasi vendor | Dashboard vendor, alur verifikasi yang jelas, notifikasi status |
| STK-I-008 | Management | Memantau performa bisnis digital dan dashboard eksekutif | Laporan ringkas, KPI visual, akses read-only untuk semua modul |

### 3.2 Pemangku Kepentingan Eksternal

| ID | Peran | Interaksi dengan System | Ekspektasi |
|---|---|---|---|
| STK-E-001 | CEO / Direktur (Klien) | Mengakses company profile, mengajukan RFQ | Informasi perusahaan yang kredibel, proses RFQ yang mudah |
| STK-E-002 | Procurement Manager | Mencari produk, mengajukan RFQ, mengunduh dokumen | Pencarian produk yang akurat, katalog terstruktur, download dokumen mudah |
| STK-E-003 | Engineering Manager | Mencari spesifikasi teknis, mengakses knowledge center | Dokumentasi teknis lengkap, download datasheet |
| STK-E-004 | Project Manager | Meninjau portofolio proyek, mengajukan kebutuhan | Case study relevan, form kontak yang responsif |
| STK-E-005 | Vendor / Supplier | Mendaftarkan diri sebagai vendor resmi | Formulir registrasi yang jelas, status verifikasi transparan |
| STK-E-006 | Investor | Memvalidasi profil dan kinerja perusahaan | Informasi korporat yang transparan, laporan yang dapat diunduh |
| STK-E-007 | Auditor | Mengakses dokumen dan informasi korporat | Dokumen yang mudah diunduh, informasi regulasi yang lengkap |
| STK-E-008 | Pemerintah / Regulator | Memverifikasi kepatuhan dan legalitas perusahaan | Dokumen legalitas yang mudah diakses |
| STK-E-009 | Mitra Bisnis | Menjajaki kerja sama strategis | Informasi kontak yang jelas, formulir partnership inquiry |
| STK-E-010 | Pencari Kerja | Melihat lowongan dan mengirimkan lamaran | Daftar lowongan yang jelas, proses lamaran yang mudah |
| STK-E-011 | Media / Jurnalis | Mencari siaran pers dan informasi perusahaan | Halaman pers yang terstruktur, kontak media yang jelas |

### 3.3 Matriks Kepentingan dan Pengaruh

| Pemangku Kepentingan | Kepentingan | Pengaruh | Strategi Keterlibatan |
|---|---|---|---|
| Super Administrator | Sangat Tinggi | Sangat Tinggi | Dilibatkan dalam seluruh fase desain dan UAT |
| Management | Tinggi | Tinggi | Review berkala pada milestone, demo eksekutif |
| Marketing & Sales | Tinggi | Sedang | Workshop kebutuhan di fase awal, UAT |
| Procurement Manager (Eksternal) | Tinggi | Sedang | User research, usability testing |
| Vendor / Supplier | Sedang | Rendah | Pengujian portal vendor sebelum go-live |
| Pencari Kerja | Sedang | Rendah | Pengujian career portal sebelum go-live |

---

## BAB 4 — Analisis Pengguna {#bab-4}

### 4.1 Persona Pengguna — Internal

#### Persona 1: Budi Santoso — Content Editor

- **Usia:** 28 tahun
- **Latar Belakang:** Lulusan komunikasi, 2 tahun pengalaman di perusahaan industri
- **Tujuan:** Mempublikasikan artikel teknis dan berita perusahaan secara cepat dan mandiri
- **Kebutuhan:** CMS yang intuitif tanpa pengetahuan coding, preview sebelum publikasi, manajemen gambar yang mudah
- **Pain Points:** CMS yang terlalu teknis, proses upload gambar yang lambat, tidak bisa melihat hasil akhir sebelum publish
- **Perilaku Digital:** Aktif di desktop, menggunakan Chrome, terbiasa dengan Notion dan Google Docs

#### Persona 2: Rina Marlina — Sales Manager

- **Usia:** 35 tahun
- **Latar Belakang:** 8 tahun di bidang sales industri migas, mobile-first user
- **Tujuan:** Mendapatkan notifikasi lead RFQ secara real-time dan menindaklanjutinya dengan cepat
- **Kebutuhan:** Notifikasi push/email instan, dashboard lead yang simple, akses dari mobile
- **Pain Points:** Lead masuk tapi tidak ternotifikasi, tidak tahu status follow-up tim, kehilangan lead karena lambat respons
- **Perilaku Digital:** 60% akses via mobile, menggunakan WhatsApp dan email intensif

### 4.2 Persona Pengguna — Eksternal

#### Persona 3: Dharma Wijaya — Procurement Manager (Klien B2B)

- **Usia:** 42 tahun
- **Perusahaan:** Kontraktor EPC nasional
- **Tujuan:** Menemukan vendor kimia drilling yang terpercaya, mengajukan RFQ secara efisien
- **Kebutuhan:** Informasi produk yang lengkap dengan spesifikasi teknis, proses RFQ yang cepat, bukti track record proyek
- **Pain Points:** Vendor website yang tidak informatif, RFQ yang tidak direspons, tidak ada portfolio proyek yang jelas
- **Perilaku Digital:** Desktop-first, mencari di Google, membaca PDF datasheet, mengirim email formal

#### Persona 4: Sari Dewi — Pencari Kerja

- **Usia:** 24 tahun
- **Latar Belakang:** Fresh graduate teknik kimia
- **Tujuan:** Menemukan lowongan yang relevan dan mengirimkan lamaran secara digital
- **Kebutuhan:** Daftar lowongan yang jelas, form lamaran yang mudah, status lamaran yang transparan
- **Pain Points:** Website karir yang tidak diperbarui, form lamaran yang panjang, tidak ada konfirmasi setelah melamar
- **Perilaku Digital:** Mobile-first, menggunakan LinkedIn dan job portal

### 4.3 Kebutuhan dan Tujuan Pengguna

| Segmen Pengguna | Kebutuhan Utama | Tujuan Utama |
|---|---|---|
| Procurement Manager (Eksternal) | Informasi produk lengkap + RFQ digital | Menemukan vendor yang qualified dalam < 10 menit |
| Engineering Manager (Eksternal) | Dokumentasi teknis + knowledge center | Mengunduh spesifikasi produk tanpa harus menghubungi sales |
| Vendor / Supplier (Eksternal) | Portal registrasi yang mudah + status tracking | Mendaftarkan perusahaan dan mendapatkan konfirmasi dalam 1 hari |
| Content Editor (Internal) | CMS yang intuitif | Mempublikasikan konten baru dalam < 15 menit |
| Sales Manager (Internal) | Notifikasi lead real-time | Menindaklanjuti lead dalam < 2 jam |
| HR Manager (Internal) | Manajemen lowongan + lamaran | Mereview semua lamaran dari satu dashboard |

---

---

## Requirements

> Seluruh kebutuhan fungsional dan non-fungsional berikut menggunakan pola EARS (Easy Approach to Requirements Syntax) dan standar kualitas INCOSE. Setiap requirement bersifat testable dan memiliki acceptance criteria yang terukur.

## BAB 5 — Kebutuhan Fungsional {#bab-5}

### 5.1 Modul Homepage

**Requirement ID:** FR-001  
**Nama:** Homepage — Halaman Utama  
**Deskripsi:** Halaman utama website yang menampilkan identitas perusahaan, lini layanan utama, highlight proyek, dan CTA lead generation.  
**Prioritas:** Kritis  
**Nilai Bisnis:** Titik masuk utama semua pengunjung; membangun kesan pertama dan mendorong eksplorasi lebih dalam.  
**Modul Terkait:** SEO Platform, CMS, Analytics

**User Story:** Sebagai Procurement Manager, saya ingin melihat identitas dan layanan utama perusahaan dalam 5 detik pertama, agar saya bisa memutuskan apakah perusahaan ini relevan dengan kebutuhan saya.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-001-1 | Hero Section | Ubiquitous | THE Frontend SHALL menampilkan hero section dengan headline, subheadline, dan minimum 1 CTA button menuju halaman RFQ atau kontak |
| AC-FR-001-2 | Loading Performance | Event-driven | WHEN halaman homepage diakses dari jaringan 4G, THE Frontend SHALL merender konten above-the-fold dalam waktu tidak lebih dari 3 detik |
| AC-FR-001-3 | Layanan Utama | Ubiquitous | THE Frontend SHALL menampilkan 3 lini layanan utama (Chemical, Sparepart, Mobilisasi) dengan ikon, deskripsi singkat, dan tautan menuju halaman layanan masing-masing |
| AC-FR-001-4 | Featured Projects | Ubiquitous | THE Frontend SHALL menampilkan minimum 3 proyek unggulan dengan gambar, nama klien, dan lokasi proyek |
| AC-FR-001-5 | Statistik Perusahaan | Ubiquitous | THE Frontend SHALL menampilkan statistik perusahaan (tahun berdiri, jumlah proyek, jumlah klien, cakupan area) dalam format visual yang menonjol |
| AC-FR-001-6 | Testimoni | Ubiquitous | THE Frontend SHALL menampilkan minimum 3 testimoni klien dengan nama, jabatan, dan nama perusahaan |
| AC-FR-001-7 | CTA Lead | Ubiquitous | THE Frontend SHALL menampilkan minimal 1 form inline atau CTA yang mengarahkan pengguna ke form kontak atau RFQ |
| AC-FR-001-8 | Konten Dinamis | Event-driven | WHEN konten homepage diperbarui melalui CMS, THE Frontend SHALL memperbarui tampilan publik dalam waktu tidak lebih dari 60 detik |
| AC-FR-001-9 | Responsivitas | Ubiquitous | THE Frontend SHALL menampilkan layout homepage yang responsif dan fungsional pada lebar layar 320px hingga 1920px |

---

### 5.2 Modul About & Company Profile

**Requirement ID:** FR-002  
**Nama:** About Us & Company Profile  
**Deskripsi:** Halaman yang menampilkan profil lengkap perusahaan, visi-misi, nilai perusahaan, sejarah, struktur organisasi, dan sertifikasi.  
**Prioritas:** Tinggi  
**Nilai Bisnis:** Membangun kepercayaan klien B2B dan investor terhadap kredibilitas perusahaan.  
**Modul Terkait:** CMS, Media_Manager, SEO_Platform

**User Story:** Sebagai Procurement Manager, saya ingin membaca profil lengkap perusahaan, agar saya dapat menilai apakah vendor ini memenuhi standar procurement perusahaan saya.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-002-1 | Profil Perusahaan | Ubiquitous | THE Frontend SHALL menampilkan profil perusahaan meliputi: sejarah singkat, visi, misi, dan nilai perusahaan |
| AC-FR-002-2 | Struktur Organisasi | Ubiquitous | THE Frontend SHALL menampilkan struktur organisasi dalam format visual dengan nama dan jabatan |
| AC-FR-002-3 | Tim Kepemimpinan | Ubiquitous | THE Frontend SHALL menampilkan profil tim kepemimpinan dengan foto, nama, jabatan, dan deskripsi singkat |
| AC-FR-002-4 | Sertifikasi & Legalitas | Ubiquitous | THE Frontend SHALL menampilkan daftar sertifikasi dan dokumen legalitas yang berlaku dengan tombol unduh untuk dokumen publik |
| AC-FR-002-5 | Timeline Perusahaan | Ubiquitous | THE Frontend SHALL menampilkan timeline milestone perusahaan dalam format kronologis |
| AC-FR-002-6 | Pembaruan Konten | Event-driven | WHEN konten company profile diperbarui oleh Content_Editor melalui CMS, THE Frontend SHALL memperbarui halaman publik dalam waktu tidak lebih dari 60 detik |
| AC-FR-002-7 | Dokumen Unduhan | Event-driven | WHEN pengguna mengklik tombol unduh dokumen legalitas, THE Frontend SHALL mengunduh file dari Storage dalam format PDF tanpa halaman login |

---

### 5.3 Modul Services

**Requirement ID:** FR-003  
**Nama:** Halaman Layanan  
**Deskripsi:** Halaman yang menampilkan daftar dan detail setiap layanan yang ditawarkan perusahaan.  
**Prioritas:** Kritis  
**Nilai Bisnis:** Membantu calon klien memahami cakupan layanan dan mendorong pengajuan RFQ.  
**Modul Terkait:** CMS, RFQ Platform, SEO_Platform

**User Story:** Sebagai Engineering Manager, saya ingin memahami spesifikasi teknis layanan yang ditawarkan, agar saya dapat menilai kesesuaiannya dengan kebutuhan proyek saya.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-003-1 | Daftar Layanan | Ubiquitous | THE Frontend SHALL menampilkan daftar semua layanan dalam format kartu (card) dengan ikon, nama layanan, dan deskripsi singkat |
| AC-FR-003-2 | Detail Layanan | Event-driven | WHEN pengguna mengklik salah satu layanan, THE Frontend SHALL menampilkan halaman detail layanan dengan deskripsi lengkap, cakupan, keunggulan, dan proyek terkait |
| AC-FR-003-3 | CTA RFQ | Ubiquitous | THE Frontend SHALL menampilkan CTA "Ajukan RFQ" di setiap halaman detail layanan yang mengarahkan pengguna ke form RFQ dengan layanan terpilih terisi otomatis |
| AC-FR-003-4 | Breadcrumb | Ubiquitous | THE Frontend SHALL menampilkan breadcrumb navigasi yang akurat di semua halaman layanan |
| AC-FR-003-5 | SEO Layanan | Ubiquitous | THE SEO_Platform SHALL menghasilkan meta title dan meta description unik untuk setiap halaman layanan berdasarkan konten yang dikelola melalui CMS |

---

### 5.4 Modul Products

**Requirement ID:** FR-004  
**Nama:** Katalog Produk  
**Deskripsi:** Katalog digital produk yang dapat dicari, difilter, dan menampilkan detail spesifikasi teknis setiap produk.  
**Prioritas:** Kritis  
**Nilai Bisnis:** Menyediakan referensi produk bagi klien B2B sehingga mengurangi beban komunikasi awal tim sales.  
**Modul Terkait:** CMS, RFQ Platform, SEO_Platform, Download Center

**User Story:** Sebagai Procurement Manager, saya ingin mencari dan melihat spesifikasi teknis produk Bentonite API secara detail, agar saya dapat menilai kesesuaiannya dengan standar drilling kami.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-004-1 | Daftar Produk | Ubiquitous | THE Frontend SHALL menampilkan katalog produk dengan filter berdasarkan kategori, industri, dan jenis |
| AC-FR-004-2 | Pencarian Produk | Event-driven | WHEN pengguna memasukkan kata kunci pada kolom pencarian produk, THE Frontend SHALL menampilkan hasil yang relevan dalam waktu tidak lebih dari 2 detik |
| AC-FR-004-3 | Detail Produk | Event-driven | WHEN pengguna mengklik produk, THE Frontend SHALL menampilkan halaman detail dengan: nama produk, kategori, deskripsi teknis, spesifikasi, gambar produk, dokumen teknis, dan produk terkait |
| AC-FR-004-4 | Download Datasheet | Event-driven | WHEN pengguna mengklik tombol unduh datasheet, THE Frontend SHALL mengarahkan pengguna ke halaman Download Center dengan autofill nama produk |
| AC-FR-004-5 | CTA RFQ Produk | Ubiquitous | THE Frontend SHALL menampilkan tombol "Minta Penawaran" di setiap halaman detail produk |
| AC-FR-004-6 | Pembaruan Produk | Event-driven | WHEN produk ditambahkan atau diperbarui melalui CMS, THE Frontend SHALL memperbarui katalog publik dalam waktu tidak lebih dari 60 detik |
| AC-FR-004-7 | SEO Produk | Ubiquitous | THE SEO_Platform SHALL menghasilkan URL produk yang bersih dalam format `/products/{slug}` dan meta tag unik untuk setiap produk |

---

### 5.5 Modul Industries

**Requirement ID:** FR-005  
**Nama:** Halaman Industri  
**Deskripsi:** Halaman yang menampilkan industri-industri yang dilayani oleh perusahaan beserta relevansi layanan dan studi kasus.  
**Prioritas:** Sedang  
**Nilai Bisnis:** Membantu calon klien dari sektor tertentu menemukan relevansi layanan dengan kebutuhan industri mereka.  
**Modul Terkait:** CMS, Projects, Case Studies

**User Story:** Sebagai Project Manager di perusahaan pertambangan, saya ingin melihat apakah perusahaan ini memiliki pengalaman di sektor saya, agar saya lebih yakin untuk menghubungi mereka.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-005-1 | Daftar Industri | Ubiquitous | THE Frontend SHALL menampilkan daftar industri yang dilayani dengan ikon dan deskripsi singkat |
| AC-FR-005-2 | Detail Industri | Event-driven | WHEN pengguna mengklik industri tertentu, THE Frontend SHALL menampilkan halaman detail dengan layanan relevan, proyek terkait, dan CTA kontak |
| AC-FR-005-3 | Keterkaitan Konten | Ubiquitous | THE Frontend SHALL menampilkan proyek dan studi kasus yang difilter berdasarkan industri yang sedang dilihat |

---

### 5.6 Modul Projects & Case Studies

**Requirement ID:** FR-006  
**Nama:** Portofolio Proyek & Studi Kasus  
**Deskripsi:** Portofolio proyek yang telah dikerjakan beserta studi kasus yang menampilkan tantangan, solusi, dan hasil yang dicapai.  
**Prioritas:** Tinggi  
**Nilai Bisnis:** Social proof yang kritis bagi pengambil keputusan B2B untuk memvalidasi pengalaman vendor.  
**Modul Terkait:** CMS, Media_Manager, Industries

**User Story:** Sebagai CEO perusahaan klien, saya ingin melihat bukti nyata pekerjaan yang telah diselesaikan, agar saya yakin bahwa vendor ini berpengalaman di bidangnya.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-006-1 | Daftar Proyek | Ubiquitous | THE Frontend SHALL menampilkan portofolio proyek dengan filter berdasarkan industri, layanan, dan lokasi |
| AC-FR-006-2 | Detail Proyek | Event-driven | WHEN pengguna mengklik proyek, THE Frontend SHALL menampilkan: nama proyek, klien, lokasi, tahun, layanan yang digunakan, deskripsi, dan galeri foto |
| AC-FR-006-3 | Studi Kasus | Ubiquitous | THE Frontend SHALL menampilkan studi kasus dalam format: latar belakang masalah, solusi yang diterapkan, dan hasil yang terukur |
| AC-FR-006-4 | Tautan Terkait | Ubiquitous | THE Frontend SHALL menampilkan tautan ke layanan dan produk terkait di setiap halaman proyek |

---

### 5.7 Modul Blog & Knowledge Center

**Requirement ID:** FR-007  
**Nama:** Blog & Knowledge Center  
**Deskripsi:** Platform konten untuk artikel teknis, panduan industri, regulasi, dan berita terkini yang membangun otoritas domain perusahaan.  
**Prioritas:** Tinggi  
**Nilai Bisnis:** Mendorong traffic organik, membangun kepercayaan, dan mengkonversi pembaca menjadi lead.  
**Modul Terkait:** CMS, SEO_Platform, Analytics, Search

**User Story:** Sebagai Engineering Manager, saya ingin membaca artikel teknis tentang penggunaan Bentonite API, agar saya mendapatkan informasi yang saya butuhkan dan kemudian mempertimbangkan vendor ini.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-007-1 | Daftar Artikel | Ubiquitous | THE Frontend SHALL menampilkan daftar artikel dengan gambar thumbnail, judul, ringkasan, kategori, penulis, dan tanggal publikasi |
| AC-FR-007-2 | Filter & Kategori | Event-driven | WHEN pengguna memilih kategori, THE Frontend SHALL menampilkan artikel yang difilter berdasarkan kategori tersebut dalam waktu tidak lebih dari 2 detik |
| AC-FR-007-3 | Detail Artikel | Event-driven | WHEN pengguna mengklik artikel, THE Frontend SHALL menampilkan konten lengkap dengan format teks kaya (rich text), gambar, kode blok, dan tabel |
| AC-FR-007-4 | Artikel Terkait | Ubiquitous | THE Frontend SHALL menampilkan minimum 3 artikel terkait di bagian bawah setiap artikel berdasarkan kategori atau tag |
| AC-FR-007-5 | Estimasi Waktu Baca | Ubiquitous | THE Frontend SHALL menampilkan estimasi waktu baca di setiap artikel berdasarkan jumlah kata |
| AC-FR-007-6 | SEO Artikel | Ubiquitous | THE SEO_Platform SHALL menghasilkan schema markup artikel (Article schema) untuk setiap konten blog |
| AC-FR-007-7 | Sitemap | Ubiquitous | THE SEO_Platform SHALL menghasilkan sitemap.xml yang menyertakan semua artikel yang terpublikasi dan memperbarui sitemap dalam waktu tidak lebih dari 1 jam setelah artikel baru dipublikasikan |

---

### 5.8 Modul News Portal

**Requirement ID:** FR-008  
**Nama:** News Portal  
**Deskripsi:** Portal berita perusahaan yang menampilkan siaran pers, pengumuman, dan berita industri terkini.  
**Prioritas:** Sedang  
**Nilai Bisnis:** Menjaga relevansi dan aktivitas digital perusahaan di mata klien dan mesin pencari.  
**Modul Terkait:** CMS, SEO_Platform, Media_Manager

**User Story:** Sebagai Media/Jurnalis, saya ingin mengakses siaran pers terbaru perusahaan, agar saya dapat meliput aktivitas perusahaan secara akurat.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-008-1 | Daftar Berita | Ubiquitous | THE Frontend SHALL menampilkan daftar berita dengan thumbnail, judul, tanggal, dan kategori |
| AC-FR-008-2 | Detail Berita | Event-driven | WHEN pengguna mengklik berita, THE Frontend SHALL menampilkan konten lengkap berita dengan format rich text |
| AC-FR-008-3 | Siaran Pers | Ubiquitous | THE Frontend SHALL menyediakan halaman khusus siaran pers yang dapat diunduh dalam format PDF |
| AC-FR-008-4 | RSS Feed | Ubiquitous | THE Backend SHALL menghasilkan RSS feed untuk semua konten berita yang terpublikasi |

---

### 5.9 Modul Media Gallery & Download Center

**Requirement ID:** FR-009  
**Nama:** Media Gallery & Download Center  
**Deskripsi:** Galeri foto dan video perusahaan serta pusat unduhan dokumen teknis, brosur, datasheet, dan sertifikasi.  
**Prioritas:** Sedang  
**Nilai Bisnis:** Menyediakan aset digital yang dapat digunakan klien dalam proses evaluasi dan procurement.  
**Modul Terkait:** Media_Manager, Storage, CMS, Authentication

**User Story:** Sebagai Procurement Manager, saya ingin mengunduh datasheet produk Barite API, agar saya dapat memasukkannya ke dalam dokumen tender saya.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-009-1 | Galeri Media | Ubiquitous | THE Frontend SHALL menampilkan galeri foto dan video dalam format grid yang dapat dibuka dalam tampilan lightbox |
| AC-FR-009-2 | Filter Galeri | Event-driven | WHEN pengguna memilih kategori galeri, THE Frontend SHALL menampilkan media yang difilter berdasarkan kategori tersebut |
| AC-FR-009-3 | Download Center | Ubiquitous | THE Frontend SHALL menampilkan daftar dokumen yang dapat diunduh dengan filter berdasarkan tipe dokumen (datasheet, brosur, sertifikasi, SDS) |
| AC-FR-009-4 | Unduhan Publik | Event-driven | WHEN pengguna mengklik unduh dokumen yang bersifat publik, THE Frontend SHALL memulai unduhan langsung tanpa memerlukan autentikasi |
| AC-FR-009-5 | Unduhan Terproteksi | Event-driven | WHEN pengguna mengklik unduh dokumen yang terproteksi, THE Frontend SHALL menampilkan form isian nama, email, dan nama perusahaan sebelum memberikan akses unduhan |
| AC-FR-009-6 | Tracking Unduhan | Event-driven | WHEN sebuah dokumen diunduh, THE Backend SHALL mencatat data unduhan (dokumen, waktu, IP address anonim) untuk keperluan analitik |
| AC-FR-009-7 | Optimasi Gambar | Ubiquitous | THE Media_Manager SHALL mengoptimasi gambar yang diunggah menggunakan Sharp dengan format WebP dan menghasilkan versi thumbnail berukuran tidak lebih besar dari 100KB |

---

### 5.10 Modul Career Portal

**Requirement ID:** FR-010  
**Nama:** Career Portal  
**Deskripsi:** Portal karir yang menampilkan lowongan aktif dan menerima lamaran dari kandidat.  
**Prioritas:** Tinggi  
**Nilai Bisnis:** Memprofesionalkan proses rekrutmen dan menarik kandidat berkualitas.  
**Modul Terkait:** CMS, Notification_Service, Storage

**User Story:** Sebagai pencari kerja, saya ingin melihat lowongan yang tersedia dan mengirimkan lamaran secara online, agar proses lamaran saya lebih efisien.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-010-1 | Daftar Lowongan | Ubiquitous | THE Frontend SHALL menampilkan daftar lowongan aktif dengan judul posisi, departemen, lokasi, tipe kontrak, dan batas waktu lamaran |
| AC-FR-010-2 | Detail Lowongan | Event-driven | WHEN pengguna mengklik lowongan, THE Frontend SHALL menampilkan deskripsi pekerjaan, kualifikasi, tanggung jawab, dan form lamaran |
| AC-FR-010-3 | Form Lamaran | Ubiquitous | THE Frontend SHALL menyediakan form lamaran dengan field: nama lengkap, email, nomor telepon, posisi yang dilamar, unggah CV (PDF maks 5MB), dan pesan tambahan |
| AC-FR-010-4 | Validasi Form | Event-driven | WHEN pengguna mengirimkan form lamaran dengan data tidak lengkap, THE Frontend SHALL menampilkan pesan error spesifik untuk setiap field yang tidak valid |
| AC-FR-010-5 | Konfirmasi Lamaran | Event-driven | WHEN lamaran berhasil dikirimkan, THE Notification_Service SHALL mengirimkan email konfirmasi ke alamat email kandidat dalam waktu tidak lebih dari 5 menit |
| AC-FR-010-6 | Notifikasi HR | Event-driven | WHEN lamaran baru masuk, THE Notification_Service SHALL mengirimkan notifikasi email ke tim HR dalam waktu tidak lebih dari 5 menit |
| AC-FR-010-7 | Status Lowongan | State-driven | WHILE lowongan dalam status tidak aktif, THE Frontend SHALL tidak menampilkan lowongan tersebut di halaman publik |
| AC-FR-010-8 | Manajemen Lowongan | Ubiquitous | THE CMS SHALL memungkinkan pengguna HR untuk membuat, mengedit, menonaktifkan, dan menghapus lowongan |
| AC-FR-010-9 | Manajemen Lamaran | Ubiquitous | THE CMS SHALL menyediakan dashboard bagi pengguna HR untuk melihat, mengfilter, dan mengelola semua lamaran yang masuk per posisi |

---

### 5.11 Modul Vendor Registration Portal

**Requirement ID:** FR-011  
**Nama:** Vendor Registration Portal  
**Deskripsi:** Portal pendaftaran vendor dan supplier yang terintegrasi dengan alur verifikasi internal.  
**Prioritas:** Tinggi  
**Nilai Bisnis:** Membangun database vendor terstandarisasi dan mempercepat proses onboarding vendor.  
**Modul Terkait:** Authentication, Notification_Service, Storage, CMS

**User Story:** Sebagai supplier, saya ingin mendaftarkan perusahaan saya sebagai vendor resmi PT Adto, agar saya dapat masuk ke dalam daftar pemasok yang dipertimbangkan untuk pengadaan.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-011-1 | Form Registrasi | Ubiquitous | THE Frontend SHALL menampilkan form registrasi vendor dengan field: nama perusahaan, NPWP, NIB, alamat, nama PIC, email PIC, nomor telepon, kategori produk/jasa, dan unggah dokumen legalitas |
| AC-FR-011-2 | Validasi Duplikasi | Event-driven | WHEN pengguna mengirimkan form registrasi vendor dengan NPWP yang sudah terdaftar, THE Backend SHALL menolak registrasi dan menampilkan pesan "NPWP sudah terdaftar" |
| AC-FR-011-3 | Unggah Dokumen | Ubiquitous | THE Frontend SHALL menerima unggahan dokumen dalam format PDF dengan ukuran maksimal 10MB per file dan maksimal 5 file per registrasi |
| AC-FR-011-4 | Konfirmasi Registrasi | Event-driven | WHEN registrasi vendor berhasil dikirimkan, THE Notification_Service SHALL mengirimkan email konfirmasi dengan nomor referensi registrasi ke email PIC vendor dalam waktu tidak lebih dari 5 menit |
| AC-FR-011-5 | Notifikasi Procurement | Event-driven | WHEN registrasi vendor baru masuk, THE Notification_Service SHALL mengirimkan notifikasi ke tim Procurement dalam waktu tidak lebih dari 5 menit |
| AC-FR-011-6 | Alur Verifikasi | Ubiquitous | THE CMS SHALL menyediakan alur verifikasi vendor dengan status: Menunggu Verifikasi → Dalam Proses → Disetujui → Ditolak |
| AC-FR-011-7 | Notifikasi Status | Event-driven | WHEN status verifikasi vendor diperbarui oleh tim Procurement, THE Notification_Service SHALL mengirimkan email notifikasi perubahan status ke email PIC vendor dalam waktu tidak lebih dari 5 menit |
| AC-FR-011-8 | Dashboard Vendor | Ubiquitous | THE CMS SHALL menyediakan dashboard bagi pengguna Procurement untuk melihat, memfilter, dan mengelola semua registrasi vendor |

---

### 5.12 Modul Request for Quotation (RFQ)

**Requirement ID:** FR-012  
**Nama:** RFQ Platform  
**Deskripsi:** Platform pengajuan permintaan penawaran harga dari calon klien yang terintegrasi dengan alur notifikasi tim sales.  
**Prioritas:** Kritis  
**Nilai Bisnis:** Mengotomasi dan mempercepat proses masuknya lead komersial berkualitas tinggi.  
**Modul Terkait:** Authentication, Notification_Service, CMS, Queue

**User Story:** Sebagai Procurement Manager, saya ingin mengajukan RFQ secara online untuk produk Bentonite API dengan spesifikasi tertentu, agar saya mendapatkan penawaran harga resmi dari tim sales perusahaan ini.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-012-1 | Form RFQ | Ubiquitous | THE Frontend SHALL menampilkan form RFQ dengan field: nama perusahaan, nama PIC, jabatan, email, nomor telepon, produk/layanan yang diminati, spesifikasi kebutuhan, estimasi kuantitas, target lokasi pengiriman, dan tenggat waktu dibutuhkan |
| AC-FR-012-2 | Lampiran RFQ | Optional | WHERE pengguna ingin melampirkan dokumen pendukung, THE Frontend SHALL menerima unggahan file dalam format PDF atau DOCX maksimal 10MB |
| AC-FR-012-3 | Validasi Form | Event-driven | WHEN pengguna mengirimkan form RFQ dengan field wajib yang tidak terisi, THE Frontend SHALL menampilkan pesan validasi spesifik untuk setiap field yang tidak valid sebelum form dikirimkan |
| AC-FR-012-4 | Pemrosesan Asinkron | Event-driven | WHEN form RFQ dikirimkan, THE Backend SHALL memproses pengiriman email notifikasi melalui Queue secara asinkron agar respons form tidak terganggu oleh kegagalan pengiriman email |
| AC-FR-012-5 | Notifikasi Sales | Event-driven | WHEN RFQ baru masuk dan telah diproses oleh Queue, THE Notification_Service SHALL mengirimkan email notifikasi ke tim Sales yang berisi ringkasan RFQ dalam waktu tidak lebih dari 5 menit |
| AC-FR-012-6 | Konfirmasi Pengirim | Event-driven | WHEN RFQ berhasil dikirimkan, THE Notification_Service SHALL mengirimkan email konfirmasi dengan nomor referensi RFQ ke email pemohon dalam waktu tidak lebih dari 5 menit |
| AC-FR-012-7 | Nomor Referensi | Ubiquitous | THE Backend SHALL menghasilkan nomor referensi RFQ yang unik dengan format `RFQ-{YYYY}-{nomor urut 5 digit}` untuk setiap pengajuan |
| AC-FR-012-8 | Dashboard RFQ | Ubiquitous | THE CMS SHALL menyediakan dashboard bagi pengguna Sales untuk melihat, memfilter berdasarkan status dan tanggal, dan mengelola semua RFQ yang masuk |
| AC-FR-012-9 | Status RFQ | Ubiquitous | THE CMS SHALL mendukung status RFQ: Baru → Ditinjau → Dalam Proses → Selesai → Ditolak |
| AC-FR-012-10 | Kegagalan Pengiriman | Error handling | IF pengiriman email notifikasi RFQ gagal setelah 3 kali percobaan ulang oleh Queue, THEN THE Backend SHALL mencatat kegagalan tersebut dan menampilkan notifikasi error di dashboard admin |

---

### 5.13 Modul Contact Platform

**Requirement ID:** FR-013  
**Nama:** Contact Platform  
**Deskripsi:** Halaman kontak dengan form umum, informasi kontak perusahaan, peta lokasi, dan integrasi WhatsApp Business.  
**Prioritas:** Tinggi  
**Nilai Bisnis:** Menyediakan jalur komunikasi yang mudah diakses untuk semua jenis pertanyaan.  
**Modul Terkait:** Notification_Service, Queue

**User Story:** Sebagai calon mitra bisnis, saya ingin menghubungi perusahaan melalui form online, agar saya mendapatkan respons resmi dari tim yang tepat.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-013-1 | Form Kontak | Ubiquitous | THE Frontend SHALL menampilkan form kontak dengan field: nama lengkap, email, nomor telepon, subjek, dan pesan |
| AC-FR-013-2 | Validasi | Event-driven | WHEN pengguna mengirimkan form kontak dengan email yang tidak valid, THE Frontend SHALL menampilkan pesan "Format email tidak valid" sebelum form dikirimkan |
| AC-FR-013-3 | Anti-Spam | Ubiquitous | THE Frontend SHALL mengintegrasikan mekanisme anti-spam (reCAPTCHA atau honeypot) pada form kontak |
| AC-FR-013-4 | Notifikasi | Event-driven | WHEN form kontak berhasil dikirimkan, THE Notification_Service SHALL mengirimkan email notifikasi ke alamat email perusahaan yang dikonfigurasi dalam waktu tidak lebih dari 5 menit |
| AC-FR-013-5 | Informasi Kontak | Ubiquitous | THE Frontend SHALL menampilkan informasi kontak perusahaan: alamat kantor, nomor telepon, email, dan jam operasional |
| AC-FR-013-6 | Peta Lokasi | Ubiquitous | THE Frontend SHALL menampilkan peta interaktif lokasi kantor menggunakan Google Maps atau OpenStreetMap |
| AC-FR-013-7 | WhatsApp CTA | Ubiquitous | THE Frontend SHALL menampilkan tombol WhatsApp Business yang mengarahkan ke nomor perusahaan dengan pesan sambutan yang telah dikonfigurasi |

---

### 5.14 Modul Search

**Requirement ID:** FR-014  
**Nama:** Search Platform  
**Deskripsi:** Fitur pencarian global yang mencakup semua konten publik: produk, artikel, berita, proyek, dan dokumen.  
**Prioritas:** Sedang  
**Nilai Bisnis:** Meningkatkan kemudahan navigasi dan keterlibatan pengguna dengan konten yang relevan.  
**Modul Terkait:** Frontend, CMS, SEO_Platform

**User Story:** Sebagai pengunjung website, saya ingin mencari "Bentonite API" dan langsung mendapatkan hasil relevan dari seluruh konten, agar saya tidak perlu menavigasi setiap halaman satu per satu.

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-014-1 | Pencarian Global | Event-driven | WHEN pengguna memasukkan kata kunci pada kolom pencarian global, THE Frontend SHALL menampilkan hasil dari kategori: Produk, Artikel, Berita, Proyek, dan Dokumen dalam waktu tidak lebih dari 2 detik |
| AC-FR-014-2 | Tampilan Hasil | Ubiquitous | THE Frontend SHALL menampilkan setiap hasil pencarian dengan judul, ringkasan, kategori, dan tautan |
| AC-FR-014-3 | Pencarian Kosong | Event-driven | WHEN pencarian tidak menghasilkan data, THE Frontend SHALL menampilkan pesan "Tidak ditemukan hasil untuk '{kata kunci}'" beserta saran konten terkait |
| AC-FR-014-4 | Indeks Konten | Event-driven | WHEN konten baru dipublikasikan melalui CMS, THE Backend SHALL memperbarui indeks pencarian dalam waktu tidak lebih dari 10 menit |

---

### 5.15 Modul FAQ

**Requirement ID:** FR-015  
**Nama:** FAQ (Frequently Asked Questions)  
**Deskripsi:** Halaman pertanyaan yang sering diajukan untuk mengurangi beban pertanyaan umum ke tim sales dan support.  
**Prioritas:** Rendah  
**Nilai Bisnis:** Mengurangi waktu yang dihabiskan tim untuk menjawab pertanyaan berulang.  
**Modul Terkait:** CMS

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-015-1 | Tampilan FAQ | Ubiquitous | THE Frontend SHALL menampilkan FAQ dalam format accordion yang dapat dibuka dan ditutup |
| AC-FR-015-2 | Kategori FAQ | Ubiquitous | THE Frontend SHALL menampilkan FAQ yang dikelompokkan berdasarkan kategori (Produk, Pengiriman, Vendor, Karir) |
| AC-FR-015-3 | Pengelolaan FAQ | Ubiquitous | THE CMS SHALL memungkinkan Content_Editor untuk menambah, mengedit, mengurutkan, dan menghapus FAQ |

---

### 5.16 Modul Authentication & Authorization

**Requirement ID:** FR-016  
**Nama:** Authentication & Authorization  
**Deskripsi:** Sistem autentikasi berbasis JWT dengan Redis untuk sesi, dan sistem otorisasi berbasis peran (RBAC) untuk akses CMS.  
**Prioritas:** Kritis  
**Nilai Bisnis:** Keamanan data dan kontrol akses yang ketat untuk seluruh modul internal.  
**Modul Terkait:** Backend, CMS, semua modul internal

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-016-1 | Login | Event-driven | WHEN pengguna internal mengirimkan form login dengan email dan password yang valid, THE Backend SHALL mengembalikan JWT access token (berlaku 15 menit) dan refresh token (berlaku 7 hari) |
| AC-FR-016-2 | Login Gagal | Error handling | IF pengguna memasukkan email atau password yang tidak valid, THEN THE Backend SHALL mengembalikan respons HTTP 401 dengan pesan "Email atau password tidak valid" tanpa mengindikasikan field mana yang salah |
| AC-FR-016-3 | Percobaan Login Berulang | State-driven | WHILE akun mencapai 5 kali percobaan login gagal dalam 15 menit, THE Backend SHALL memblokir percobaan login berikutnya dari IP tersebut selama 15 menit |
| AC-FR-016-4 | Refresh Token | Event-driven | WHEN access token kedaluwarsa dan pengguna mengirimkan refresh token yang valid, THE Backend SHALL mengembalikan access token baru |
| AC-FR-016-5 | Logout | Event-driven | WHEN pengguna melakukan logout, THE Backend SHALL menginvalidasi refresh token di Redis |
| AC-FR-016-6 | RBAC | Ubiquitous | THE Backend SHALL menerapkan Role-Based Access Control dengan peran: Super_Admin, Administrator, Marketing, Sales, HR, Content_Editor, Procurement, Management |
| AC-FR-016-7 | Akses Tidak Sah | Error handling | IF pengguna mencoba mengakses resource yang tidak sesuai dengan perannya, THEN THE Backend SHALL mengembalikan respons HTTP 403 |
| AC-FR-016-8 | Ganti Password | Event-driven | WHEN pengguna mengajukan permintaan reset password dengan email yang terdaftar, THE Notification_Service SHALL mengirimkan email berisi tautan reset password yang berlaku selama 1 jam |

---

### 5.17 Modul CMS (Content Management System)

**Requirement ID:** FR-017  
**Nama:** Content Management System  
**Deskripsi:** Sistem pengelolaan konten berbasis Payload CMS yang memungkinkan pengguna internal mengelola seluruh konten website tanpa pengetahuan teknis coding.  
**Prioritas:** Kritis  
**Nilai Bisnis:** Kemandirian tim dalam mengelola konten tanpa memerlukan keterlibatan pengembang.  
**Modul Terkait:** Semua modul konten

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-017-1 | Antarmuka CMS | Ubiquitous | THE CMS SHALL menyediakan antarmuka web yang dapat diakses melalui browser tanpa instalasi perangkat lunak tambahan |
| AC-FR-017-2 | Rich Text Editor | Ubiquitous | THE CMS SHALL menyediakan rich text editor yang mendukung: heading (H1–H6), paragraf, bold, italic, daftar, tautan, gambar inline, dan blok kode |
| AC-FR-017-3 | Manajemen Media | Ubiquitous | THE CMS SHALL menyediakan modul manajemen media untuk mengunggah, mengorganisir, dan mencari gambar dan dokumen |
| AC-FR-017-4 | Draft & Publish | Ubiquitous | THE CMS SHALL mendukung status konten: Draft, Dalam Review, dan Terpublikasi |
| AC-FR-017-5 | Preview Konten | Event-driven | WHEN Content_Editor mengklik tombol preview, THE CMS SHALL menampilkan preview konten dalam tampilan yang identik dengan tampilan frontend publik |
| AC-FR-017-6 | Penjadwalan Publikasi | Optional | WHERE Content_Editor mengatur tanggal dan waktu publikasi, THE CMS SHALL mempublikasikan konten secara otomatis pada tanggal dan waktu yang ditentukan |
| AC-FR-017-7 | Riwayat Versi | Ubiquitous | THE CMS SHALL menyimpan riwayat versi konten dan memungkinkan pengguna dengan hak akses Administrator untuk memulihkan versi sebelumnya |
| AC-FR-017-8 | Pengelolaan Pengguna CMS | Ubiquitous | THE CMS SHALL memungkinkan Super_Admin untuk membuat, mengedit, menonaktifkan, dan menghapus akun pengguna CMS beserta penetapan perannya |

---

### 5.18 Modul SEO Platform

**Requirement ID:** FR-018  
**Nama:** SEO Platform  
**Deskripsi:** Sistem pengelolaan SEO yang mencakup meta tag, Open Graph, sitemap, robots.txt, schema markup, dan canonical URL untuk seluruh halaman.  
**Prioritas:** Tinggi  
**Nilai Bisnis:** Mendorong traffic organik yang berkelanjutan dari mesin pencari.  
**Modul Terkait:** CMS, Frontend, semua halaman publik

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-018-1 | Meta Tag | Ubiquitous | THE SEO_Platform SHALL menghasilkan meta title (maks 60 karakter) dan meta description (maks 160 karakter) yang unik untuk setiap halaman |
| AC-FR-018-2 | Open Graph | Ubiquitous | THE SEO_Platform SHALL menghasilkan tag Open Graph (og:title, og:description, og:image, og:url) untuk setiap halaman publik |
| AC-FR-018-3 | Sitemap XML | Ubiquitous | THE SEO_Platform SHALL menghasilkan sitemap.xml yang mencakup semua halaman publik dan memperbaruinya secara otomatis saat konten baru dipublikasikan |
| AC-FR-018-4 | Robots.txt | Ubiquitous | THE SEO_Platform SHALL menyediakan file robots.txt yang dapat dikonfigurasi melalui CMS admin |
| AC-FR-018-5 | Canonical URL | Ubiquitous | THE SEO_Platform SHALL menghasilkan canonical URL yang benar untuk setiap halaman guna menghindari konten duplikat |
| AC-FR-018-6 | Schema Markup | Ubiquitous | THE SEO_Platform SHALL menghasilkan JSON-LD schema markup yang sesuai untuk setiap jenis halaman: Organization, WebSite, Article, BreadcrumbList, JobPosting |
| AC-FR-018-7 | Konfigurasi SEO per Halaman | Ubiquitous | THE CMS SHALL memungkinkan Content_Editor untuk mengkonfigurasi meta title, meta description, dan OG image untuk setiap halaman konten secara individual |

---

### 5.19 Modul Analytics & Notification

**Requirement ID:** FR-019  
**Nama:** Analytics & Notification  
**Deskripsi:** Integrasi analitik web dan sistem notifikasi yang mengirimkan peringatan ke pengguna internal atas kejadian penting.  
**Prioritas:** Sedang  
**Nilai Bisnis:** Memberikan visibilitas atas performa digital dan memastikan respons cepat terhadap lead masuk.  
**Modul Terkait:** Backend, Queue, semua form publik

#### Acceptance Criteria

| No | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| AC-FR-019-1 | Integrasi Analitik | Ubiquitous | THE Frontend SHALL mengintegrasikan skrip analitik web (Google Analytics 4 atau Plausible) yang dapat dikonfigurasi melalui variabel lingkungan |
| AC-FR-019-2 | Dashboard Performa | Ubiquitous | THE CMS SHALL menampilkan dashboard ringkasan yang menunjukkan: jumlah pengunjung 30 hari terakhir, sumber traffic, halaman paling banyak dikunjungi, dan jumlah lead masuk |
| AC-FR-019-3 | Notifikasi Email | Event-driven | WHEN peristiwa penting terjadi (RFQ baru, registrasi vendor baru, lamaran baru), THE Notification_Service SHALL mengirimkan notifikasi email ke penerima yang dikonfigurasi dalam waktu tidak lebih dari 5 menit |
| AC-FR-019-4 | Antrian Notifikasi | Error handling | IF pengiriman notifikasi pertama gagal, THEN THE Queue SHALL mencoba ulang pengiriman maksimal 3 kali dengan interval waktu 1 menit, 5 menit, dan 15 menit |
| AC-FR-019-5 | Log Notifikasi | Ubiquitous | THE Backend SHALL mencatat seluruh notifikasi yang terkirim dan gagal terkirim beserta timestamp-nya untuk keperluan audit |

---
## BAB 6 — Kebutuhan Non-Fungsional {#bab-6}

### 6.1 Performa

| ID | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| NFR-001 | WHEN halaman publik manapun diakses dari jaringan broadband (≥10 Mbps), THE Frontend SHALL merender Largest Contentful Paint (LCP) dalam waktu tidak lebih dari 2,5 detik | Event-driven | LCP ≤ 2,5 detik |
| NFR-002 | THE Frontend SHALL mencapai skor Lighthouse Performance minimal 85 pada versi desktop untuk semua halaman utama | Ubiquitous | Skor ≥ 85 |
| NFR-003 | THE Backend SHALL memproses request API dengan rata-rata waktu respons tidak lebih dari 500ms di bawah beban normal | Ubiquitous | P95 ≤ 500ms |
| NFR-004 | WHEN sistem menerima 100 request bersamaan, THE Backend SHALL tetap merespons semua request dalam waktu tidak lebih dari 2 detik | Event-driven | Latensi tetap ≤ 2 detik pada 100 concurrent users |
| NFR-005 | THE Media_Manager SHALL menyelesaikan proses optimasi dan konversi gambar ke format WebP dalam waktu tidak lebih dari 10 detik untuk gambar berukuran hingga 10MB | Ubiquitous | Waktu proses ≤ 10 detik |

### 6.2 Ketersediaan (Availability)

| ID | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| NFR-006 | THE System SHALL mencapai uptime minimal 99,5% dalam sebulan kalender, tidak termasuk jendela maintenance terjadwal | Ubiquitous | Uptime ≥ 99,5%/bulan |
| NFR-007 | WHEN terjadi kegagalan sistem, THE System SHALL dapat dipulihkan ke kondisi operasional dalam waktu tidak lebih dari 4 jam (Recovery Time Objective) | Event-driven | RTO ≤ 4 jam |
| NFR-008 | THE System SHALL memiliki Recovery Point Objective (RPO) tidak lebih dari 24 jam, sehingga kehilangan data maksimal adalah data 24 jam terakhir | Ubiquitous | RPO ≤ 24 jam |

### 6.3 Aksesibilitas (Accessibility)

| ID | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| NFR-009 | THE Frontend SHALL memenuhi standar WCAG 2.1 Level AA untuk seluruh halaman publik | Ubiquitous | Lulus audit otomatis aksesibilitas (axe, Lighthouse) |
| NFR-010 | THE Frontend SHALL menyediakan teks alternatif (alt text) yang deskriptif untuk semua gambar yang memiliki konten informasi | Ubiquitous | Alt text terisi untuk semua gambar konten |
| NFR-011 | THE Frontend SHALL mendukung navigasi menggunakan keyboard saja untuk semua elemen interaktif | Ubiquitous | Semua form, tombol, dan tautan dapat diakses via keyboard |

### 6.4 Kegunaan (Usability)

| ID | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| NFR-012 | THE CMS SHALL memungkinkan Content_Editor yang tidak memiliki latar belakang teknis untuk mempublikasikan artikel baru dalam waktu tidak lebih dari 15 menit setelah pelatihan dasar selama 2 jam | Ubiquitous | Task completion ≤ 15 menit |
| NFR-013 | THE Frontend SHALL menampilkan pesan error yang deskriptif dan saran tindakan perbaikan untuk setiap kesalahan input pengguna | Ubiquitous | Semua error state memiliki pesan yang actionable |

### 6.5 Keamanan (Security)

| ID | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| NFR-014 | THE Backend SHALL mengimplementasikan proteksi terhadap OWASP Top 10 vulnerabilities, meliputi: SQL Injection, XSS, CSRF, Broken Authentication, dan Sensitive Data Exposure | Ubiquitous | Lulus penetration test dasar |
| NFR-015 | THE System SHALL menggunakan HTTPS untuk semua komunikasi antara browser dan server | Ubiquitous | Tidak ada request HTTP plaintext |
| NFR-016 | THE Backend SHALL menyimpan password pengguna menggunakan algoritma hashing bcrypt dengan cost factor minimal 12 | Ubiquitous | Password disimpan dalam bentuk hash, tidak plaintext |
| NFR-017 | THE Frontend SHALL mengimplementasikan Content Security Policy (CSP) header yang mencegah eksekusi skrip dari sumber yang tidak diotorisasi | Ubiquitous | CSP header aktif di semua respons HTML |
| NFR-018 | THE Backend SHALL menerapkan rate limiting pada semua endpoint API publik dengan batas maksimal 100 request per menit per IP address | Ubiquitous | Rate limit aktif, respons HTTP 429 untuk yang melebihi |
| NFR-019 | WHEN pengguna mengunggah file, THE Backend SHALL memvalidasi tipe file berdasarkan MIME type dan magic bytes, bukan hanya ekstensi file | Event-driven | File berbahaya terdeteksi dan ditolak |

### 6.6 SEO

| ID | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| NFR-020 | THE Frontend SHALL menggunakan Server-Side Rendering (SSR) atau Static Site Generation (SSG) untuk semua halaman yang dapat diindeks oleh mesin pencari | Ubiquitous | Konten terindeks tersedia di HTML awal tanpa JavaScript |
| NFR-021 | THE Frontend SHALL menghasilkan URL yang bersih dan deskriptif dalam format kebab-case untuk semua halaman | Ubiquitous | Tidak ada URL dengan query parameter yang mengandung ID numerik untuk konten yang dapat diindeks |
| NFR-022 | THE Frontend SHALL mencapai skor Core Web Vitals yang masuk kategori "Good" untuk halaman utama di Google Search Console | Ubiquitous | CLS < 0.1, LCP < 2.5s, FID/INP < 200ms |

### 6.7 Skalabilitas & Maintainability

| ID | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| NFR-023 | THE System SHALL menggunakan arsitektur kontainer berbasis Docker sehingga dapat di-deploy dan diskalakan secara horizontal | Ubiquitous | Semua komponen tercontainerized |
| NFR-024 | THE Backend SHALL mengimplementasikan struktur modul yang memungkinkan penambahan modul baru tanpa mengubah modul yang sudah ada | Ubiquitous | Zero-downtime deployment tersedia |
| NFR-025 | THE System SHALL memiliki cakupan test otomatis minimal 70% untuk logika bisnis di Backend | Ubiquitous | Test coverage ≥ 70% pada unit test Backend |

### 6.8 Responsivitas & Kompatibilitas Browser

| ID | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| NFR-026 | THE Frontend SHALL menampilkan layout yang fungsional dan estetis pada resolusi layar: 320px (mobile), 768px (tablet), 1280px (desktop), dan 1920px (large desktop) | Ubiquitous | Tidak ada elemen yang overflow atau terpotong |
| NFR-027 | THE Frontend SHALL berfungsi dengan benar pada versi terbaru dari: Google Chrome, Microsoft Edge, Mozilla Firefox, dan Safari | Ubiquitous | Lulus cross-browser testing manual |

### 6.9 Backup & Logging

| ID | Requirement | Pola EARS | Kriteria |
|---|---|---|---|
| NFR-028 | THE System SHALL melakukan backup otomatis database PostgreSQL setiap 24 jam dan menyimpan backup selama minimal 30 hari | Ubiquitous | Backup terjadwal dengan retensi 30 hari |
| NFR-029 | THE Backend SHALL mencatat structured log untuk semua request API, error, dan event penting dengan format JSON yang menyertakan: timestamp, level, request ID, dan pesan | Ubiquitous | Semua log dapat dicari dan difilter |
| NFR-030 | THE System SHALL menyediakan health check endpoint yang mengembalikan status operasional semua dependensi (database, Redis, Storage) | Ubiquitous | Endpoint `/health` aktif dan akurat |

---

## BAB 7 — Kebutuhan Sistem {#bab-7}

### 7.1 Kebutuhan Frontend

| Komponen | Spesifikasi | Versi |
|---|---|---|
| Framework | Next.js (App Router) | 14.x LTS |
| UI Library | React | 18.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.x |
| State Management | Zustand atau React Context (sesuai kompleksitas) | Terkini |
| Form Handling | React Hook Form + Zod | Terkini |
| Image Optimization | Next.js Image Component (built-in) | Bawaan Next.js |
| Animation | Framer Motion | Terkini |
| Icons | Lucide React atau Heroicons | Terkini |
| Font | Poppins (heading), Inter (body) via next/font | — |

**Requirement Teknis Frontend:**

| ID | Requirement | Kriteria |
|---|---|---|
| SYS-FE-001 | THE Frontend SHALL menggunakan App Router dari Next.js 14 sebagai sistem routing utama | Tidak ada penggunaan Pages Router untuk halaman baru |
| SYS-FE-002 | THE Frontend SHALL mengimplementasikan Server Components sebagai default dan Client Components hanya untuk interaktivitas yang memerlukannya | Penggunaan Client Components diminimalisasi |
| SYS-FE-003 | THE Frontend SHALL menghasilkan static pages menggunakan generateStaticParams untuk halaman konten yang tidak berubah sering | Halaman produk, artikel, dan layanan di-prerender |
| SYS-FE-004 | THE Frontend SHALL mengimplementasikan Incremental Static Regeneration (ISR) untuk halaman konten dengan revalidasi maksimal 60 detik | Cache ISR aktif untuk halaman publik |
| SYS-FE-005 | THE Frontend SHALL mengimplementasikan loading.tsx dan error.tsx untuk semua segment route | User experience loading dan error tersedia |

### 7.2 Kebutuhan Backend

| Komponen | Spesifikasi | Versi |
|---|---|---|
| Framework | NestJS | 10.x |
| Language | TypeScript | 5.x |
| ORM | Prisma | 5.x |
| Database | PostgreSQL | 15.x |
| Cache / Session | Redis | 7.x |
| Queue | BullMQ | Terkini |
| Auth | JWT (jsonwebtoken) + bcrypt | Terkini |
| Image Processing | Sharp | Terkini |
| Storage Client | AWS SDK v3 (S3 compatible) | Terkini |
| Email | Nodemailer | Terkini |
| Validation | class-validator + class-transformer | Terkini |
| Testing | Jest + Supertest | Terkini |
| API Docs | Swagger (NestJS built-in) | — |

**Requirement Teknis Backend:**

| ID | Requirement | Kriteria |
|---|---|---|
| SYS-BE-001 | THE Backend SHALL mengimplementasikan arsitektur modular NestJS dengan pemisahan tanggung jawab yang jelas antar modul | Setiap domain bisnis memiliki modul terpisah |
| SYS-BE-002 | THE Backend SHALL menggunakan Prisma sebagai satu-satunya lapisan akses database dan tidak menggunakan raw SQL kecuali untuk kasus yang tidak dapat ditangani Prisma | Query dilakukan melalui Prisma Client |
| SYS-BE-003 | THE Backend SHALL mengekspos dokumentasi API Swagger yang dapat diakses di endpoint `/api/docs` pada environment non-production | Swagger UI tersedia di development dan staging |
| SYS-BE-004 | THE Backend SHALL mengimplementasikan global exception filter yang menangkap semua error tak tertangani dan mengembalikan format respons error yang konsisten | Format error respons seragam: `{ statusCode, message, timestamp }` |
| SYS-BE-005 | THE Backend SHALL mengimplementasikan database migration menggunakan Prisma Migrate yang dapat dijalankan secara deterministik | Migrasi dapat diulang tanpa efek samping |

### 7.3 Kebutuhan Database

| ID | Requirement | Kriteria |
|---|---|---|
| SYS-DB-001 | THE System SHALL menggunakan PostgreSQL 15 sebagai database relasional utama | Versi PostgreSQL ≥ 15 |
| SYS-DB-002 | THE System SHALL mengimplementasikan koneksi pooling menggunakan PgBouncer atau built-in Prisma connection pool | Pool aktif, tidak ada koneksi yang bocor |
| SYS-DB-003 | THE System SHALL mengimplementasikan indeks database pada kolom yang sering digunakan untuk filtering dan sorting (slug, status, created_at) | Query produk, artikel, dan RFQ selesai dalam < 100ms |
| SYS-DB-004 | THE System SHALL menggunakan UUID v4 sebagai primary key untuk semua entitas utama | Tidak ada integer auto-increment sebagai PK publik |

### 7.4 Kebutuhan CMS (Payload CMS)

| ID | Requirement | Kriteria |
|---|---|---|
| SYS-CMS-001 | THE CMS SHALL diimplementasikan menggunakan Payload CMS versi 2.x yang berjalan sebagai API layer terpisah | Payload CMS versi ≥ 2.0 |
| SYS-CMS-002 | THE CMS SHALL menggunakan PostgreSQL sebagai database adapter | Database adapter: PostgreSQL |
| SYS-CMS-003 | THE CMS SHALL mendukung media upload ke S3 Compatible Storage menggunakan adapter resmi Payload | Media tersimpan di S3, bukan filesystem lokal |
| SYS-CMS-004 | THE CMS SHALL mengimplementasikan access control yang terintegrasi dengan sistem RBAC Backend | Akses CMS dikontrol berdasarkan peran pengguna |

### 7.5 Kebutuhan Infrastruktur

| Komponen | Spesifikasi |
|---|---|
| Containerisasi | Docker + Docker Compose untuk development dan staging |
| Reverse Proxy | Nginx atau Traefik |
| SSL/TLS | Let's Encrypt atau managed SSL provider |
| Storage | S3 Compatible (Cloudflare R2, MinIO, atau AWS S3) |
| Environment Config | Environment variables via `.env` file, tidak ada hardcoded secret |
| CI/CD | GitHub Actions atau GitLab CI (opsional, future scope) |

| ID | Requirement | Kriteria |
|---|---|---|
| SYS-INF-001 | THE System SHALL menyediakan file `docker-compose.yml` yang dapat menjalankan seluruh environment development dengan satu perintah `docker-compose up` | Environment development berjalan dengan 1 perintah |
| SYS-INF-002 | THE System SHALL memisahkan konfigurasi environment (development, staging, production) menggunakan file `.env` yang berbeda | Tidak ada konfigurasi production yang bocor ke development |
| SYS-INF-003 | THE System SHALL tidak menyertakan file `.env` yang berisi secret ke dalam version control | `.env` terdaftar di `.gitignore` |

---

## BAB 8 — Aturan Bisnis {#bab-8}

### 8.1 Aturan Alur Kerja Konten

| ID | Aturan Bisnis | Deskripsi |
|---|---|---|
| BR-001 | Alur Publikasi Konten | Konten baru yang dibuat oleh Content_Editor harus melewati status Draft → Dalam Review sebelum dapat dipublikasikan. Konten hanya dapat dipublikasikan oleh pengguna dengan peran Administrator atau Super_Admin, kecuali dikonfigurasi lain |
| BR-002 | Konten Terjadwal | Konten yang dijadwalkan untuk dipublikasi tidak boleh dapat diakses secara publik sebelum tanggal dan waktu yang ditentukan |
| BR-003 | Penghapusan Konten | Konten yang telah terpublikasi tidak boleh dihapus secara permanen; harus di-unpublish terlebih dahulu sebelum dapat dihapus, untuk menghindari tautan mati yang berdampak pada SEO |
| BR-004 | Bahasa Konten | Seluruh konten publik website harus ditulis dalam Bahasa Indonesia sebagai bahasa utama. Konten berbahasa Inggris bersifat opsional sebagai ekspansi masa depan |

### 8.2 Aturan Proses RFQ

| ID | Aturan Bisnis | Deskripsi |
|---|---|---|
| BR-005 | Konfirmasi RFQ | Setiap RFQ yang masuk harus mendapatkan notifikasi konfirmasi otomatis ke pemohon dalam waktu tidak lebih dari 5 menit setelah pengiriman |
| BR-006 | Penomoran RFQ | Nomor referensi RFQ harus unik dan tidak dapat diubah setelah dibuat. Format: `RFQ-{YYYY}-{NNNNN}` dimana NNNNN adalah nomor urut 5 digit yang dimulai dari 00001 setiap tahun |
| BR-007 | Status RFQ | Status RFQ hanya dapat berubah secara linear ke depan: Baru → Ditinjau → Dalam Proses → Selesai, dengan pengecualian bahwa RFQ dalam status Baru atau Ditinjau dapat langsung diubah menjadi Ditolak |
| BR-008 | Retensi Data RFQ | Data RFQ beserta lampirannya harus disimpan selama minimal 2 tahun setelah tanggal pengajuan untuk keperluan audit dan referensi bisnis |

### 8.3 Aturan Registrasi Vendor

| ID | Aturan Bisnis | Deskripsi |
|---|---|---|
| BR-009 | Keunikan NPWP | Satu nomor NPWP hanya dapat digunakan untuk satu registrasi vendor aktif. Registrasi duplikat dengan NPWP yang sama harus ditolak secara otomatis |
| BR-010 | Dokumen Wajib Vendor | Setiap registrasi vendor harus menyertakan minimal: dokumen NPWP, NIB/SIUP, dan profil singkat perusahaan. Registrasi tanpa dokumen wajib tidak dapat diproses |
| BR-011 | Notifikasi Verifikasi | Tim Procurement harus memberikan keputusan akhir (Disetujui atau Ditolak) terhadap setiap registrasi vendor dalam waktu tidak lebih dari 7 hari kerja setelah registrasi diterima |
| BR-012 | Status Vendor | Vendor yang ditolak dapat mengajukan registrasi ulang setelah melengkapi kekurangan dokumen yang dicantumkan dalam notifikasi penolakan |

### 8.4 Aturan Career Portal

| ID | Aturan Bisnis | Deskripsi |
|---|---|---|
| BR-013 | Lowongan Aktif | Lowongan hanya dapat dilihat oleh publik selama dalam status Aktif. Lowongan yang telah melewati batas waktu penutupan harus secara otomatis berubah menjadi tidak aktif |
| BR-014 | Batas Ukuran CV | File CV yang diunggah oleh pelamar tidak boleh melebihi ukuran 5MB dan harus dalam format PDF. Unggahan yang tidak memenuhi syarat harus ditolak dengan pesan error yang deskriptif |
| BR-015 | Notifikasi Lamaran | Setiap lamaran yang masuk harus mendapatkan konfirmasi email otomatis ke pelamar. Tim HR harus menerima notifikasi email dalam waktu tidak lebih dari 5 menit setelah lamaran masuk |

### 8.5 Aturan SEO

| ID | Aturan Bisnis | Deskripsi |
|---|---|---|
| BR-016 | Slug Unik | Setiap halaman konten (artikel, produk, layanan, proyek) harus memiliki slug URL yang unik dan tidak dapat diubah setelah halaman pertama kali dipublikasikan tanpa membuat redirect 301 otomatis |
| BR-017 | Meta Tag Wajib | Setiap halaman yang dipublikasikan harus memiliki meta title dan meta description yang terisi. CMS harus menampilkan peringatan jika field SEO tidak diisi |
| BR-018 | Redirect 301 | WHEN slug URL sebuah halaman diubah, THE SEO_Platform SHALL secara otomatis membuat redirect 301 dari URL lama ke URL baru |

### 8.6 Aturan Keamanan Data

| ID | Aturan Bisnis | Deskripsi |
|---|---|---|
| BR-019 | Data Minimisasi | Form publik hanya boleh mengumpulkan data pribadi yang diperlukan untuk tujuan yang jelas (RFQ, lamaran, kontak). Tidak boleh ada pengumpulan data yang tidak relevan |
| BR-020 | Akses Admin Log | Setiap tindakan yang dilakukan oleh Super_Admin dan Administrator di CMS harus dicatat dalam audit log yang tidak dapat dihapus oleh pengguna level apapun |
| BR-021 | Penghapusan Data Pribadi | Atas permintaan dari pemilik data, data pribadi yang tersimpan (email, nomor telepon, nama) di database harus dapat dihapus atau dianonimkan dalam waktu tidak lebih dari 30 hari |

---

## BAB 9 — Batasan {#bab-9}

### 9.1 Batasan Teknologi

| ID | Batasan | Deskripsi |
|---|---|---|
| CON-T-001 | Stack Teknologi Terkunci | Seluruh pengembangan harus menggunakan stack yang telah ditentukan: Next.js, NestJS, TypeScript, PostgreSQL, Prisma, Payload CMS, BullMQ, Redis, dan S3 Compatible Storage. Perubahan stack memerlukan persetujuan manajemen proyek |
| CON-T-002 | Bahasa Pemrograman | TypeScript adalah satu-satunya bahasa yang digunakan untuk Frontend dan Backend. Mode strict TypeScript harus diaktifkan |
| CON-T-003 | Versi Node.js | Proyek harus menggunakan Node.js LTS (minimal v20.x) yang kompatibel dengan semua dependensi |
| CON-T-004 | Kompatibilitas Database | Sistem tidak mendukung migrasi ke database selain PostgreSQL tanpa rekayasa ulang layer ORM |

### 9.2 Batasan Legal & Kepatuhan

| ID | Batasan | Deskripsi |
|---|---|---|
| CON-L-001 | Regulasi Data Pribadi | Pengumpulan dan pemrosesan data pribadi harus mematuhi Undang-Undang Perlindungan Data Pribadi (UU PDP) No. 27 Tahun 2022 Republik Indonesia |
| CON-L-002 | Persetujuan Cookie | Website harus meminta persetujuan pengguna sebelum mengaktifkan cookie analitik non-esensial sesuai standar privasi internasional |
| CON-L-003 | Hak Kekayaan Intelektual | Seluruh aset visual (logo, gambar, ikon) yang digunakan harus memiliki lisensi yang sesuai atau merupakan karya orisinal milik PT ADTO Cipta Usaha Mandiri |
| CON-L-004 | Konten Industri | Klaim teknis dan spesifikasi produk yang dipublikasikan harus dapat diverifikasi dan tidak boleh menyesatkan calon klien |

### 9.3 Batasan Bisnis

| ID | Batasan | Deskripsi |
|---|---|---|
| CON-B-001 | Bahasa Utama | Website versi 1.0 hanya mendukung Bahasa Indonesia. Dukungan multi-bahasa (Inggris) ditunda ke versi 2.0 |
| CON-B-002 | Transaksi | Website versi 1.0 tidak mendukung transaksi keuangan langsung (payment gateway). Semua transaksi diselesaikan secara offline setelah proses RFQ |
| CON-B-003 | Konten Awal | Pengembangan dimulai dengan konten placeholder; konten final (teks, gambar, proyek) harus disediakan oleh tim marketing PT Adto sebelum go-live |

### 9.4 Batasan Anggaran & Waktu

| ID | Batasan | Deskripsi |
|---|---|---|
| CON-BT-001 | Phase 1 Scope | Versi 1.0 mencakup semua modul yang tercantum di BAB 5. Modul yang masuk Future Expansion (BAB 10) tidak termasuk dalam scope versi 1.0 |
| CON-BT-002 | Infrastruktur | Seleksi provider cloud harus mempertimbangkan biaya operasional bulanan yang sesuai dengan skala bisnis saat ini |

---

## BAB 10 — Asumsi, Dependensi, Risiko, dan Ekspansi Masa Depan {#bab-10}

### 10.1 Asumsi

| ID | Asumsi |
|---|---|
| ASM-001 | Tim PT Adto akan menyediakan semua konten final (teks company profile, foto produk, deskripsi layanan, portofolio proyek) sebelum tanggal go-live yang disepakati |
| ASM-002 | Domain dan hosting akan dikonfigurasi oleh tim teknis PT Adto atau penyedia layanan yang ditunjuk |
| ASM-003 | Setidaknya satu anggota tim marketing atau content dari PT Adto akan tersedia untuk pelatihan CMS selama minimum 4 jam sebelum go-live |
| ASM-004 | Kredensial layanan pihak ketiga (email SMTP, Google Analytics, S3 Storage, Google Maps API) akan disediakan oleh PT Adto sebelum fase development dimulai |
| ASM-005 | Tim internal PT Adto memiliki akses ke koneksi internet yang stabil untuk mengakses CMS dan melakukan pengelolaan konten |

### 10.2 Dependensi

| ID | Dependensi | Pihak Bertanggung Jawab | Dampak jika Terlambat |
|---|---|---|---|
| DEP-001 | Konten final dari tim marketing PT Adto | PT Adto | Penundaan go-live; placeholder akan digunakan |
| DEP-002 | Akses domain dan konfigurasi DNS | PT Adto / Registrar | Penundaan deployment ke production |
| DEP-003 | Kredensial email SMTP (untuk notifikasi) | PT Adto | Fitur notifikasi tidak berfungsi di staging/production |
| DEP-004 | Kredensial S3 Compatible Storage | PT Adto | Fitur unggah media tidak berfungsi |
| DEP-005 | Lisensi gambar dan aset brand | PT Adto | Placeholder gambar digunakan hingga aset tersedia |

### 10.3 Risiko

| ID | Risiko | Probabilitas | Dampak | Mitigasi |
|---|---|---|---|---|
| RSK-001 | Keterlambatan penyediaan konten oleh tim PT Adto | Tinggi | Tinggi | Gunakan konten placeholder yang baik; tetapkan deadline konten 2 minggu sebelum go-live |
| RSK-002 | Perubahan scope di tengah pengembangan | Sedang | Tinggi | Terapkan change request process yang formal; SRS ini menjadi baseline |
| RSK-003 | Masalah performa saat traffic melonjak | Rendah | Sedang | Implementasikan caching ISR dan CDN dari awal; siapkan panduan scaling |
| RSK-004 | Kerentanan keamanan pada dependensi pihak ketiga | Sedang | Tinggi | Audit dependensi secara berkala menggunakan `npm audit`; update minor dan patch secara rutin |
| RSK-005 | Kegagalan layanan pihak ketiga (S3, SMTP) | Rendah | Sedang | Implementasikan error handling graceful dan retry queue; siapkan provider backup |

### 10.4 Ekspansi Masa Depan (v2.0+)

Modul berikut tidak termasuk dalam scope v1.0 namun harus dipertimbangkan dalam arsitektur sistem saat ini agar tidak memerlukan rekayasa ulang mendasar:

| ID | Modul | Deskripsi Singkat |
|---|---|---|
| FEX-001 | Customer Portal | Area login khusus klien aktif untuk melihat status pesanan dan riwayat transaksi |
| FEX-002 | Vendor Portal | Area login khusus vendor terdaftar untuk mengelola profil dan dokumen |
| FEX-003 | Internal Dashboard | Dashboard operasional untuk tim internal dengan laporan dan analitik mendalam |
| FEX-004 | CRM Integration | Integrasi dengan sistem CRM (HubSpot, Salesforce, atau custom) untuk pipeline sales |
| FEX-005 | ERP Integration | Integrasi dengan sistem ERP untuk sinkronisasi data produk dan stok |
| FEX-006 | Multi-language | Dukungan konten Bahasa Inggris untuk menjangkau klien internasional |
| FEX-007 | E-catalog Interaktif | Katalog produk interaktif dengan fitur perbandingan produk |
| FEX-008 | Live Chat | Integrasi live chat untuk dukungan real-time kepada pengunjung website |

---

## BAB 11 — Kriteria Penerimaan {#bab-11}

### 11.1 Kriteria Penerimaan Proyek

Proyek dinyatakan selesai dan siap untuk sign-off apabila seluruh kriteria berikut terpenuhi:

| ID | Kriteria | Metode Verifikasi |
|---|---|---|
| PAC-001 | Seluruh halaman publik dapat diakses tanpa error HTTP 5xx pada environment production | Monitoring log selama 48 jam setelah deployment |
| PAC-002 | Skor Lighthouse Performance minimal 85 pada halaman: Homepage, Produk, dan Blog | Audit Lighthouse otomatis di CI/CD |
| PAC-003 | Semua form publik (RFQ, Kontak, Lamaran, Vendor) mengirimkan notifikasi email dengan benar | Manual end-to-end test |
| PAC-004 | CMS dapat digunakan oleh Content_Editor untuk mempublikasikan artikel baru tanpa bantuan teknis | User Acceptance Test (UAT) dengan pengguna nyata |
| PAC-005 | Semua halaman lulus basic aksesibilitas WCAG 2.1 AA (zero critical violations) | Audit otomatis dengan Axe |
| PAC-006 | Tidak ada kerentanan keamanan level Critical atau High yang teridentifikasi | Scan keamanan otomatis (OWASP ZAP dasar) |

### 11.2 Kriteria Penerimaan Per Modul

#### Homepage & Company Profile
- Hero section, statistik, layanan, proyek, dan testimoni tampil dengan benar di semua breakpoint
- Konten dapat diperbarui melalui CMS dan perubahan terlihat di frontend dalam < 60 detik

#### Products & Services
- Semua produk dan layanan dapat diakses, dicari, dan difilter
- Tombol CTA RFQ di halaman produk/layanan mengarahkan ke form RFQ dengan data pra-isi yang benar

#### RFQ Platform
- Form RFQ berhasil dikirimkan dan notifikasi diterima oleh tim sales dalam < 5 menit
- Nomor referensi RFQ unik dihasilkan untuk setiap pengajuan
- Dashboard RFQ di CMS menampilkan semua pengajuan dan mendukung perubahan status

#### Career Portal
- Lowongan yang tidak aktif tidak tampil di halaman publik
- Lamaran berhasil tersimpan dan file CV dapat diunduh oleh HR dari CMS
- Email konfirmasi dikirim ke pelamar dan HR dalam < 5 menit

#### Vendor Registration
- Registrasi dengan NPWP duplikat ditolak dengan pesan error yang sesuai
- Alur verifikasi (Menunggu → Disetujui/Ditolak) berfungsi dengan notifikasi email

#### Authentication & CMS
- Login gagal setelah 5 percobaan salah dalam 15 menit memblokir percobaan berikutnya
- RBAC mencegah pengguna mengakses modul di luar peran mereka
- Semua pengguna CMS dapat login, membuat konten, dan logout dengan benar

### 11.3 Kriteria Rilis & Production

| Fase | Kriteria |
|---|---|
| **Alpha** | Semua API endpoint Backend tersedia dan terdokumentasi di Swagger; database schema final |
| **Beta** | Frontend terintegrasi dengan Backend; semua form berfungsi; CMS dapat digunakan |
| **Release Candidate** | Semua UAT lulus; konten final dimuat; performance baseline tercapai; security scan bersih |
| **Production** | SSL aktif; domain terkonfigurasi; monitoring aktif; backup terjadwal berjalan; tim internal telah terlatih |

---

## BAB 12 — Matriks Keterlacakan Kebutuhan {#bab-12}

### 12.1 Matriks FR ke Tujuan Bisnis

| Requirement ID | Nama Requirement | Tujuan Bisnis |
|---|---|---|
| FR-001 | Homepage | BG-001, BG-002 |
| FR-002 | About & Company Profile | BG-001 |
| FR-003 | Services | BG-001, BG-002 |
| FR-004 | Products | BG-001, BG-002 |
| FR-005 | Industries | BG-001, BG-002 |
| FR-006 | Projects & Case Studies | BG-001, BG-002 |
| FR-007 | Blog & Knowledge Center | BG-004 |
| FR-008 | News Portal | BG-004 |
| FR-009 | Media Gallery & Download Center | BG-001 |
| FR-010 | Career Portal | BG-005 |
| FR-011 | Vendor Registration | BG-006 |
| FR-012 | RFQ Platform | BG-003 |
| FR-013 | Contact Platform | BG-002 |
| FR-014 | Search | BG-002 |
| FR-015 | FAQ | BG-002 |
| FR-016 | Authentication & Authorization | BG-007 |
| FR-017 | CMS | BG-007 |
| FR-018 | SEO Platform | BG-002, BG-004 |
| FR-019 | Analytics & Notification | BG-002, BG-003 |

### 12.2 Matriks NFR ke FR

| NFR ID | Deskripsi Singkat | Berlaku untuk FR |
|---|---|---|
| NFR-001 – NFR-005 | Performa | FR-001 hingga FR-019 (semua halaman publik) |
| NFR-006 – NFR-008 | Ketersediaan | FR-001 hingga FR-019 (seluruh sistem) |
| NFR-009 – NFR-011 | Aksesibilitas | FR-001 hingga FR-015 (semua halaman publik) |
| NFR-014 – NFR-019 | Keamanan | FR-012, FR-013, FR-010, FR-011, FR-016 |
| NFR-020 – NFR-022 | SEO | FR-001 hingga FR-009, FR-018 |
| NFR-026 – NFR-027 | Responsivitas | FR-001 hingga FR-015 |

### 12.3 Matriks BR ke FR

| BR ID | Aturan Bisnis | FR Terkait |
|---|---|---|
| BR-001 – BR-004 | Alur Kerja Konten | FR-017 (CMS) |
| BR-005 – BR-008 | Proses RFQ | FR-012 (RFQ Platform) |
| BR-009 – BR-012 | Registrasi Vendor | FR-011 (Vendor Registration) |
| BR-013 – BR-015 | Career Portal | FR-010 (Career Portal) |
| BR-016 – BR-018 | SEO | FR-018 (SEO Platform) |
| BR-019 – BR-021 | Keamanan Data | FR-016 (Auth), semua form publik |

### 12.4 Matriks FR ke Komponen Sistem

| FR ID | Frontend | Backend | CMS | Database | Storage | Queue | Notif |
|---|---|---|---|---|---|---|---|
| FR-001 | ✓ | — | ✓ | ✓ | ✓ | — | — |
| FR-002 | ✓ | — | ✓ | ✓ | ✓ | — | — |
| FR-003 | ✓ | — | ✓ | ✓ | ✓ | — | — |
| FR-004 | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
| FR-005 | ✓ | — | ✓ | ✓ | — | — | — |
| FR-006 | ✓ | — | ✓ | ✓ | ✓ | — | — |
| FR-007 | ✓ | — | ✓ | ✓ | ✓ | — | — |
| FR-008 | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
| FR-009 | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
| FR-010 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| FR-011 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| FR-012 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| FR-013 | ✓ | ✓ | — | ✓ | — | ✓ | ✓ |
| FR-014 | ✓ | ✓ | — | ✓ | — | — | — |
| FR-015 | ✓ | — | ✓ | ✓ | — | — | — |
| FR-016 | ✓ | ✓ | ✓ | ✓ | — | — | ✓ |
| FR-017 | — | ✓ | ✓ | ✓ | ✓ | — | — |
| FR-018 | ✓ | ✓ | ✓ | ✓ | — | — | — |
| FR-019 | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ |

---

*Akhir Dokumen SRS — PT ADTO Cipta Usaha Mandiri Enterprise Website Platform*  
*Versi: 1.0.0 | Tanggal: 2026-07-01*  
*Dokumen ini adalah baseline requirements. Perubahan apapun harus melalui proses formal change request.*
