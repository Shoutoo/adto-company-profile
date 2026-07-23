# Business Requirements Specification (BRS)
<!-- 
  PT Adto Cipta Usaha Mandiri — Enterprise Website Platform
  Dokumen: BRS-ADTO-ENT-001 | Versi: 1.0.0 | Tanggal: 2026-07-13
  Standar: IEEE 830-1998 / ISO/IEC/IEEE 29148:2018
  Status: BASELINE — Dilarang mengubah tanpa proses formal change request
-->

**Nama Proyek:** Enterprise Website Platform PT Adto Cipta Usaha Mandiri  
**Nomor Dokumen:** BRS-ADTO-ENT-001  
**Versi:** 1.0.0  
**Tanggal:** 13 Juli 2026  
**Status:** Baseline  
**Disusun oleh:** Tim Analis Bisnis & Enterprise Architect  
**Berlaku untuk:** Seluruh tim Business, Design, Frontend, Backend, QA, DevOps, SEO

---

## Daftar Isi

1. [BAB 1 — Project Overview](#bab-1)
2. [BAB 2 — Business Vision](#bab-2)
3. [BAB 3 — Business Objectives](#bab-3)
4. [BAB 4 — Business Scope](#bab-4)
5. [BAB 5 — Business Value](#bab-5)
6. [BAB 6 — Success Criteria](#bab-6)
7. [BAB 7 — Business Risk](#bab-7)
8. [BAB 8 — Project Assumptions](#bab-8)
9. [BAB 9 — Project Constraints](#bab-9)

---

## BAB 1 — Project Overview {#bab-1}

### 1.1 Latar Belakang Proyek

Industri minyak dan gas (migas) Indonesia terus mengalami pertumbuhan permintaan layanan pendukung operasional, terutama di segmen pengadaan chemical drilling, sparepart industri, dan jasa logistik lapangan. Berdasarkan tren digitalisasi yang terjadi secara global, proses procurement B2B di sektor energi semakin bergeser ke platform digital — di mana calon klien melakukan validasi vendor melalui kehadiran digital sebelum memulai proses pengadaan formal.

PT Adto Cipta Usaha Mandiri adalah perusahaan B2B industrial yang berdiri dengan tiga lini bisnis utama: Chemical Oil & Gas, Sparepart & Service, dan Jasa Mobilisasi/Demobilisasi. Perusahaan beroperasi di kawasan Depok, Jawa Barat, dan melayani klien dari segmen perusahaan migas, kontraktor EPC, dan service company skala nasional.

Saat ini, perusahaan belum memiliki kehadiran digital yang memadai. Seluruh proses akuisisi klien, pengajuan penawaran, dan komunikasi dengan vendor masih dilakukan secara manual melalui WhatsApp, email, dan tatap muka langsung. Kondisi ini menempatkan perusahaan pada posisi yang tidak kompetitif dibandingkan vendor lain yang telah memiliki platform digital terstandarisasi.

Proyek ini bertujuan membangun **Enterprise Website Platform** yang berfungsi sebagai pusat ekosistem digital perusahaan — bukan sekadar company profile, melainkan sebuah platform terintegrasi yang mendukung operasional pemasaran, penjualan, pengadaan, rekrutmen, dan pengelolaan konten secara mandiri.

### 1.2 Kondisi Digital Saat Ini

| Aspek | Kondisi Saat Ini | Dampak |
|---|---|---|
| Kehadiran Website | Tidak ada | Klien tidak dapat memverifikasi kredibilitas perusahaan secara independen |
| Proses RFQ | Manual via WhatsApp & email | Tidak ada rekam jejak, respons tidak terstandarisasi, lead mudah hilang |
| Registrasi Vendor | Manual via dokumen fisik & email | Proses tidak konsisten, tidak ada status tracking, database vendor tidak terstruktur |
| Rekrutmen | Melalui referensi dan job portal eksternal | Tidak ada branding employer, proses lamaran tidak terstandarisasi |
| Konten Industri | Tidak ada | Tidak ada otoritas domain, tidak ada traffic organik dari mesin pencari |
| Katalog Produk | Dokumen PDF yang dibagikan manual | Tidak dapat diakses 24/7, sulit diperbarui, tidak ada filter/search |
| Portofolio Proyek | Dokumen internal tidak dipublikasikan | Klien tidak dapat melihat track record perusahaan secara mandiri |

### 1.3 Permasalahan Bisnis

| ID | Permasalahan | Dampak Bisnis |
|---|---|---|
| BP-001 | Tidak ada kehadiran digital profesional yang dapat diverifikasi oleh klien potensial | Peluang tender dan kontrak hilang karena klien memilih vendor yang dapat divalidasi secara online |
| BP-002 | Proses pengajuan RFQ sepenuhnya manual tanpa rekam jejak terstruktur | Lead hilang, waktu respons tidak terukur, tidak ada data pipeline penjualan |
| BP-003 | Tidak ada portal terpusat untuk pendaftaran dan verifikasi vendor | Risiko vendor tidak terverifikasi masuk ke proses pengadaan, proses onboarding vendor lambat |
| BP-004 | Proses rekrutmen tidak terstandarisasi dan tidak memiliki branding employer | Kehilangan kandidat berkualitas yang tidak mengetahui peluang karir di perusahaan |
| BP-005 | Tidak ada platform konten untuk membangun otoritas industri | Tidak ada traffic organik, tidak ada thought leadership, kepercayaan calon klien baru rendah |
| BP-006 | Tidak ada notifikasi lead terpusat, tim sales sering terlambat menindaklanjuti | Tingkat konversi lead rendah, peluang bisnis terlewat karena respons lambat |

### 1.4 Peluang Digitalisasi

1. **Digitalisasi procurement B2B migas Indonesia** — Tren industri mendorong vendor untuk dapat divalidasi secara digital sebelum proses pengadaan dimulai, membuka peluang akuisisi klien baru melalui platform online.
2. **Pertumbuhan pencarian produk industrial via mesin pencari** — Procurement manager dan engineering manager semakin banyak melakukan riset vendor melalui Google, menciptakan peluang traffic organik berbiaya rendah.
3. **Demand konten teknis industri** — Artikel teknis tentang chemical drilling, spesifikasi produk, dan regulasi migas memiliki permintaan yang tinggi namun sedikit tersedia dalam Bahasa Indonesia, membuka peluang domain authority yang signifikan.
4. **Standarisasi vendor database** — Portal registrasi vendor digital akan meningkatkan kualitas dan kecepatan proses pengadaan internal sekaligus memberikan nilai kepada vendor yang ingin mendaftar.

### 1.5 Alasan Dibangunnya Website Baru

Website ini dibangun dari awal (greenfield) karena:

- Tidak ada infrastruktur digital yang dapat dikembangkan atau dimigrasi dari kondisi existing
- Skala dan kompleksitas platform yang dibutuhkan melampaui kapabilitas platform CMS standar (WordPress, Wix)
- Kebutuhan integrasi antara frontend, backend API, CMS, queue sistem, dan storage dalam satu ekosistem yang kohesif
- Persyaratan enterprise-grade meliputi: performa tinggi, keamanan berlapis, aksesibilitas WCAG 2.1 AA, dan skalabilitas untuk ekspansi masa depan

### 1.6 Tujuan Utama Proyek

| No | Tujuan | Target Terukur | Batas Waktu |
|---|---|---|---|
| 1 | Membangun kehadiran digital profesional setara enterprise migas global | Website live, Lighthouse ≥ 85, zero critical bug | Go-live v1.0 |
| 2 | Mengotomasi proses lead generation melalui platform RFQ digital | ≥ 20 RFQ/bulan dalam 90 hari pertama setelah go-live | Q1 pasca go-live |
| 3 | Membangun ekosistem konten industri untuk otoritas domain | ≥ 30 artikel teknis dipublikasi, DA ≥ 20 dalam 6 bulan | 6 bulan pasca go-live |
| 4 | Memprofesionalkan proses rekrutmen digital | ≥ 50% lamaran masuk via Career Portal | 3 bulan pasca go-live |
| 5 | Membangun database vendor terstandarisasi | Seluruh vendor aktif terdaftar via portal dalam 6 bulan | 6 bulan pasca go-live |
| 6 | Menyediakan fondasi infrastruktur digital untuk ekspansi bisnis | Arsitektur modular siap untuk Customer Portal dan CRM v2.0 | Selesai di v1.0 |

---

## BAB 2 — Business Vision {#bab-2}

### 2.1 Business Vision

> **"Menjadi perusahaan penyedia solusi industrial B2B yang dikenal secara digital sebagai mitra terpercaya di industri energi Indonesia, dibuktikan melalui platform digital enterprise yang mencerminkan kredibilitas, keahlian, dan komitmen terhadap klien."**

PT Adto Cipta Usaha Mandiri memiliki visi bisnis untuk bertransformasi dari perusahaan yang bergantung pada jaringan personal menjadi entitas bisnis yang memiliki mesin akuisisi klien digital yang berjalan secara mandiri. Website ini adalah aset bisnis strategis pertama yang meletakkan fondasi pertumbuhan jangka panjang.

### 2.2 Digital Vision

> **"Membangun ekosistem digital enterprise yang menjadi satu-satunya titik sentuh digital bagi seluruh pemangku kepentingan perusahaan — klien, vendor, kandidat, mitra, dan investor — dengan pengalaman yang konsisten, profesional, dan dapat dipercaya."**

Platform digital ini dirancang untuk berkembang dari sebuah corporate website menjadi ekosistem digital terpadu yang pada akhirnya mengintegrasikan seluruh proses bisnis kritis perusahaan.

### 2.3 Website Vision

> **"Menjadi one-stop digital hub yang memungkinkan calon klien menemukan informasi produk, mengajukan RFQ, dan memulai percakapan bisnis — semuanya dalam satu sesi kunjungan yang mulus dan profesional."**

Website harus mampu menjawab tiga pertanyaan utama pengunjung dalam 30 detik pertama:
1. *Siapa PT Adto Cipta Usaha Mandiri dan mengapa saya harus mempercayai mereka?*
2. *Apakah mereka menyediakan apa yang saya butuhkan?*
3. *Bagaimana cara tercepat untuk memulai percakapan bisnis dengan mereka?*

### 2.4 Long Term Vision (3–5 Tahun)

| Fase | Periode | Visi |
|---|---|---|
| **Fase 1 — Foundation** | 0–12 bulan | Website live, konten terbangun, lead generation aktif, vendor database terisi |
| **Fase 2 — Growth** | 12–24 bulan | Domain Authority ≥ 40, traffic organik ≥ 2.000 UV/bulan, integrasi CRM aktif |
| **Fase 3 — Ecosystem** | 24–36 bulan | Customer Portal aktif, Vendor Portal self-service, dashboard operasional internal |
| **Fase 4 — Integration** | 36–60 bulan | ERP integration, data-driven procurement, platform menjadi competitive advantage |

### 2.5 Future Expansion Vision

Platform v1.0 dibangun dengan arsitektur yang memungkinkan ekspansi berikut tanpa rekayasa ulang mendasar:

| Modul Ekspansi | Deskripsi | Target Fase |
|---|---|---|
| Customer Portal | Area login khusus klien aktif untuk melihat status pesanan dan riwayat RFQ | Fase 2 |
| Vendor Portal | Area self-service vendor terdaftar untuk mengelola profil dan dokumen | Fase 2 |
| Internal Dashboard | Dashboard operasional tim internal dengan laporan dan analitik mendalam | Fase 3 |
| CRM Integration | Integrasi pipeline sales dengan HubSpot atau sistem CRM pilihan | Fase 3 |
| ERP Integration | Sinkronisasi data produk, stok, dan transaksi dengan sistem ERP | Fase 4 |
| Multi-language (EN) | Konten Bahasa Inggris untuk klien internasional di Indonesia | Fase 2 |
| E-catalog Interaktif | Perbandingan produk, konfigurator, dan e-catalog yang dapat diunduh | Fase 3 |

---

## BAB 3 — Business Objectives {#bab-3}

### 3.1 Tabel Business Objectives

| ID | Objective | Deskripsi | Business Value | KPI | Success Indicator |
|---|---|---|---|---|---|
| **BO-001** | **Corporate Branding** | Membangun identitas merek digital PT Adto yang konsisten, profesional, dan mencerminkan karakter industrial premium setara perusahaan energi kelas nasional | Meningkatkan persepsi kredibilitas di mata klien B2B, investor, dan mitra bisnis | Brand consistency score (audit visual), NPS pengunjung pertama | Klien menyebut website sebagai referensi pertama saat mengevaluasi vendor |
| **BO-002** | **Corporate Credibility** | Membangun kepercayaan klien melalui transparansi informasi: portofolio proyek nyata, profil tim, sertifikasi, dan track record yang dapat diverifikasi | Mengurangi hambatan keputusan klien untuk menghubungi tim sales | % klien baru yang menyebutkan website sebagai faktor kepercayaan | ≥ 60% klien baru pertama mengakses website sebelum menghubungi sales |
| **BO-003** | **Lead Generation** | Mengotomasi masuknya prospek berkualitas melalui form RFQ, form kontak, dan CTA strategis di seluruh halaman produk dan layanan | Mengurangi ketergantungan pada referensi personal untuk akuisisi klien baru | Jumlah lead masuk per bulan, % lead yang terkonversi menjadi penawaran | ≥ 20 lead/bulan dalam 90 hari pertama; ≥ 30% lead terkonversi ke penawaran formal |
| **BO-004** | **Sales Support** | Menyediakan platform RFQ digital yang menggantikan proses penawaran manual melalui WhatsApp dan email, dengan notifikasi real-time ke tim sales | Mempersingkat siklus penjualan dan meningkatkan akurasi data prospek | Rata-rata waktu respons RFQ (jam kerja), jumlah RFQ per bulan | Rata-rata respons RFQ < 24 jam kerja; ≥ 15 RFQ/bulan dalam 3 bulan pertama |
| **BO-005** | **Vendor Registration** | Membangun database vendor terstandarisasi melalui portal registrasi digital dengan alur verifikasi yang terstruktur | Meningkatkan kualitas dan efisiensi proses pengadaan internal | Jumlah vendor terdaftar, % vendor yang lolos verifikasi, waktu verifikasi rata-rata | ≥ 50 vendor terdaftar dalam 6 bulan; waktu verifikasi ≤ 7 hari kerja |
| **BO-006** | **Recruitment** | Memprofesionalkan proses rekrutmen melalui Career Portal digital yang menampilkan employer branding dan menerima lamaran secara terstruktur | Menarik kandidat berkualitas dan mengurangi beban administratif tim HR | % lamaran via Career Portal vs total lamaran, jumlah lamaran per lowongan | ≥ 50% total lamaran masuk via Career Portal dalam 3 bulan pertama |
| **BO-007** | **Knowledge Sharing** | Membangun otoritas industri melalui publikasi artikel teknis, panduan produk, dan insight industri migas secara konsisten | Meningkatkan domain authority, mendatangkan traffic organik bertarget, dan membangun kepercayaan calon klien | Jumlah artikel terpublikasi, traffic organik dari konten, Domain Authority | ≥ 30 artikel dalam 3 bulan pertama; DA ≥ 20 dalam 6 bulan |
| **BO-008** | **Operational Efficiency** | Menyediakan CMS yang memungkinkan tim internal mengelola seluruh konten website secara mandiri tanpa keterlibatan developer | Mengurangi biaya dan waktu pembaruan konten, meningkatkan agility pemasaran | Waktu rata-rata publikasi konten baru, % pembaruan konten yang dilakukan mandiri | Content editor mampu mempublikasikan artikel baru dalam ≤ 15 menit |
| **BO-009** | **SEO & Organic Traffic** | Membangun fondasi teknis SEO yang kuat sejak hari pertama — Core Web Vitals, structured data, sitemap, meta tag — untuk mengakselerasi peringkat organik di mesin pencari | Mendatangkan traffic organik bertarget berbiaya rendah dari calon klien yang sedang mencari vendor | Organic traffic bulanan, keyword rankings (top 10), Core Web Vitals score | ≥ 500 unique visitors/bulan dalam 6 bulan; ≥ 5 keyword target di halaman 1 Google |
| **BO-010** | **Digital Transformation Foundation** | Membangun infrastruktur digital modular berbasis Docker dan arsitektur microservices-ready yang menjadi fondasi ekspansi bisnis digital jangka panjang | Menghindari technical debt dan rekayasa ulang saat bisnis berkembang | Ketersediaan API untuk integrasi eksternal, kesiapan arsitektur untuk modul ekspansi | Arsitektur v1.0 mampu mengakomodasi Customer Portal dan CRM integration tanpa perubahan fundamental |

---

## BAB 4 — Business Scope {#bab-4}

### 4.1 IN SCOPE — Versi 1.0

Seluruh fitur dan modul berikut wajib tersedia pada saat go-live versi 1.0:

| No | Modul | Deskripsi Singkat |
|---|---|---|
| 1 | Homepage | Halaman utama dengan hero, layanan, proyek unggulan, statistik, testimoni, dan CTA |
| 2 | About / Company Profile | Profil perusahaan, visi-misi, struktur organisasi, tim kepemimpinan, sertifikasi, timeline |
| 3 | Services | Halaman daftar dan detail 3 lini layanan: Chemical, Sparepart, Mobilisasi |
| 4 | Industries | Halaman industri yang dilayani dengan proyek dan layanan terkait |
| 5 | Products | Katalog produk dengan search, filter, detail spesifikasi, dan CTA RFQ |
| 6 | Projects & Case Studies | Portofolio proyek dengan galeri foto, deskripsi, dan hasil terukur |
| 7 | Blog / Knowledge Center | Artikel teknis, panduan industri, dan insight dengan kategori, search, dan SEO penuh |
| 8 | News Portal | Siaran pers dan berita perusahaan dengan RSS feed |
| 9 | Media Gallery | Galeri foto dan video dalam format lightbox dengan filter kategori |
| 10 | Download Center | Dokumen teknis, brosur, datasheet, dan sertifikasi yang dapat diunduh |
| 11 | RFQ Platform | Form permintaan penawaran dengan notifikasi sales dan dashboard manajemen |
| 12 | Vendor Registration Portal | Form registrasi vendor dengan alur verifikasi dan notifikasi status |
| 13 | Career Portal | Daftar lowongan, detail posisi, dan form lamaran dengan manajemen HR |
| 14 | Contact Platform | Form kontak umum, peta lokasi, informasi kontak, dan WhatsApp Business CTA |
| 15 | FAQ | Halaman pertanyaan umum dengan format accordion dan kategori |
| 16 | Global Search | Pencarian konten lintas kategori: produk, artikel, berita, proyek |
| 17 | Authentication & RBAC | Login internal, JWT + Redis, role-based access control 8 peran |
| 18 | CMS (Payload CMS) | Sistem manajemen konten untuk seluruh konten website oleh tim internal |
| 19 | SEO Platform | Meta tag, OG tag, sitemap, robots.txt, schema markup, canonical URL |
| 20 | Media Management | Upload, optimasi (Sharp/WebP), organisasi media di S3 Compatible Storage |
| 21 | Analytics Integration | Integrasi Google Analytics 4 dengan consent management |
| 22 | Notification System | Email transaksional via BullMQ Queue untuk RFQ, lamaran, vendor, kontak |
| 23 | Docker Infrastructure | Docker Compose untuk seluruh environment: frontend, backend, DB, Redis, Storage |

### 4.2 OUT OF SCOPE — Versi 1.0

Fitur-fitur berikut secara eksplisit **tidak termasuk** dalam pengembangan versi 1.0:

| No | Fitur | Alasan Tidak Dimasukkan |
|---|---|---|
| 1 | Payment Gateway & transaksi keuangan | Website bukan platform e-commerce; transaksi diselesaikan offline setelah RFQ |
| 2 | Customer Portal (area login klien aktif) | Memerlukan integrasi data transaksi yang belum tersedia; dijadwalkan di v2.0 |
| 3 | Vendor Portal self-service | Memerlukan integrasi workflow procurement internal; dijadwalkan di v2.0 |
| 4 | Live Chat / Chatbot | Memerlukan integrasi layanan pihak ketiga dan SLA operasional yang belum ditetapkan |
| 5 | Mobile App (iOS/Android) | Di luar scope website; dapat dipertimbangkan di fase 3 |
| 6 | ERP Integration | Sistem ERP belum ditentukan; dijadwalkan di fase 4 |
| 7 | CRM Integration | Sistem CRM belum ditentukan; dijadwalkan di fase 2–3 |
| 8 | Multi-language (Bahasa Inggris) | Konten Inggris belum tersedia; dijadwalkan di v2.0 |
| 9 | E-commerce / order management | Bukan model bisnis saat ini; dijadwalkan sebagai ekspansi jangka panjang |
| 10 | Internal HR Management System | Di luar scope website; fungsi HR hanya sebatas Career Portal |

### 4.3 FUTURE SCOPE — Versi 2.0 dan Seterusnya

| ID | Modul | Fase Target | Dependensi |
|---|---|---|---|
| FS-001 | Customer Portal | v2.0 / Fase 2 | Sistem order management, data transaksi klien |
| FS-002 | Vendor Portal self-service | v2.0 / Fase 2 | Workflow procurement digital, approval matrix |
| FS-003 | Internal Dashboard & Analytics | v2.0 / Fase 3 | Integrasi data operasional internal |
| FS-004 | CRM Integration | v2.0 / Fase 3 | Pemilihan platform CRM (HubSpot, Salesforce, atau custom) |
| FS-005 | ERP Integration | v3.0 / Fase 4 | Implementasi sistem ERP |
| FS-006 | Multi-language (Bahasa Inggris) | v2.0 / Fase 2 | Penerjemahan konten oleh tim marketing |
| FS-007 | E-catalog Interaktif | v2.0 / Fase 3 | Data produk lengkap, perhitungan harga dinamis |
| FS-008 | Live Chat & AI Assistant | v2.0 / Fase 3 | SLA operasional, integrasi provider live chat |
| FS-009 | Mobile Progressive Web App | v3.0 / Fase 4 | Stabilitas v1.0 + v2.0 sebagai fondasi |

---

## BAB 5 — Business Value {#bab-5}

### 5.1 Value untuk Perusahaan (PT Adto Cipta Usaha Mandiri)

| Dimensi Value | Deskripsi | Dampak Terukur |
|---|---|---|
| Aset Bisnis Permanen | Website adalah aset digital yang bekerja 24/7 menghasilkan lead tanpa biaya tambahan per interaksi | Estimasi penghematan biaya akuisisi klien vs. channel tradisional |
| Competitive Advantage | Kehadiran digital profesional membedakan PT Adto dari kompetitor yang belum berdigitalisasi | Meningkatkan win rate dalam proses tender di mana vendor diseleksi berdasarkan profil digital |
| Skalabilitas Bisnis | Infrastruktur digital yang modular memungkinkan ekspansi layanan baru tanpa biaya setup yang besar | Waktu time-to-market untuk lini bisnis baru berkurang signifikan |
| Data Intelligence | Platform menghasilkan data perilaku klien dan tren permintaan yang dapat digunakan untuk keputusan bisnis | Dashboard analitik memberikan insight yang sebelumnya tidak tersedia |

### 5.2 Value untuk Marketing Team

- Kemampuan mempublikasikan konten pemasaran secara mandiri melalui CMS tanpa keterlibatan developer
- Platform Knowledge Center yang membangun otoritas industri dan mendatangkan traffic organik berkelanjutan
- Data analytics real-time tentang konten mana yang paling efektif dalam mengkonversi pengunjung
- Landing page dan CTA yang dapat dioptimasi secara berkelanjutan berdasarkan data

### 5.3 Value untuk Sales Team

- Notifikasi real-time ketika RFQ baru masuk, memungkinkan respons dalam hitungan menit
- Dashboard terpusat untuk melihat dan mengelola semua RFQ yang masuk
- Katalog produk dan layanan yang dapat dibagikan ke klien sebagai referensi profesional
- Data prospek yang lebih kaya dan terstruktur dibandingkan komunikasi WhatsApp

### 5.4 Value untuk Management

- Visibilitas real-time atas volume lead, RFQ, dan aktivitas website melalui dashboard eksekutif
- KPI digital yang terukur untuk mengevaluasi efektivitas investasi pemasaran digital
- Fondasi data untuk pengambilan keputusan ekspansi bisnis berbasis bukti

### 5.5 Value untuk Vendor/Supplier

| Manfaat | Deskripsi |
|---|---|
| Proses Registrasi Jelas | Portal registrasi dengan persyaratan yang transparan, menggantikan proses ad-hoc yang tidak konsisten |
| Status Tracking | Vendor dapat mengetahui status verifikasi dokumen mereka secara real-time via notifikasi email |
| Akses Informasi | Vendor dapat melihat kategori produk/jasa yang dibutuhkan sebelum mendaftar |
| Kredibilitas | Terdaftar sebagai vendor resmi PT Adto memberikan legitimasi bisnis |

### 5.6 Value untuk Customer/Client

| Segmen Klien | Manfaat Utama |
|---|---|
| Procurement Manager | Akses katalog produk 24/7, pengajuan RFQ formal dalam < 5 menit, download datasheet tanpa harus menghubungi sales |
| Engineering Manager | Akses artikel teknis dan spesifikasi produk mendalam, knowledge base industri yang dapat dijadikan referensi |
| Project Manager | Portofolio proyek yang terverifikasi, studi kasus dengan hasil terukur, kontak yang jelas untuk kebutuhan urgent |

### 5.7 Value untuk Investor

- Kehadiran digital profesional meningkatkan persepsi maturitas dan skala bisnis perusahaan
- Transparansi informasi korporat: struktur organisasi, legalitas, sertifikasi, dan portofolio
- Demonstrasi komitmen terhadap digitalisasi dan pertumbuhan jangka panjang

### 5.8 Value untuk Business Partner

- Akses mudah ke informasi layanan dan capability perusahaan untuk evaluasi potensi kolaborasi
- Form partnership inquiry yang terstruktur untuk memulai diskusi formal
- Portofolio proyek bersama yang dapat dipublikasikan sebagai case study

### 5.9 Value untuk Recruitment & Job Seeker

| Pihak | Manfaat |
|---|---|
| Job Seeker | Informasi lowongan yang jelas dan terkini, proses lamaran digital yang mudah, konfirmasi penerimaan lamaran otomatis |
| Tim HR | Dashboard manajemen lamaran terpusat, pengurangan beban administratif, employer branding yang profesional |

---

## BAB 6 — Success Criteria {#bab-6}

### 6.1 Business Success

| ID | Indikator | Target | Periode Pengukuran |
|---|---|---|---|
| BS-001 | Jumlah RFQ yang masuk via website | ≥ 15 RFQ/bulan | 90 hari pertama pasca go-live |
| BS-002 | Jumlah lead (form kontak + RFQ) per bulan | ≥ 20 lead/bulan | 90 hari pertama pasca go-live |
| BS-003 | % lead yang ditindaklanjuti oleh sales dalam 24 jam | ≥ 80% | Berkelanjutan |
| BS-004 | Jumlah vendor baru yang mendaftar via portal | ≥ 30 vendor | 6 bulan pertama |
| BS-005 | % lamaran masuk via Career Portal | ≥ 50% total lamaran | 3 bulan pertama |
| BS-006 | % klien baru yang mengakses website sebelum menghubungi sales | ≥ 40% | 6 bulan pertama |
| BS-007 | Rata-rata waktu respons RFQ (jam kerja) | ≤ 24 jam | Berkelanjutan |

### 6.2 Technical Success

| ID | Indikator | Target | Metode Pengukuran |
|---|---|---|---|
| TS-001 | Skor Lighthouse Performance (desktop) — homepage | ≥ 85 | Lighthouse audit di CI/CD |
| TS-002 | Largest Contentful Paint (LCP) | ≤ 2,5 detik | Google Search Console / Lighthouse |
| TS-003 | Cumulative Layout Shift (CLS) | < 0,1 | Google Search Console / Lighthouse |
| TS-004 | Uptime sistem bulanan | ≥ 99,5% | Monitoring tool |
| TS-005 | Waktu respons API P95 (normal load) | ≤ 500ms | APM tool |
| TS-006 | Zero critical security vulnerability pada saat go-live | 0 critical / 0 high | OWASP ZAP scan |
| TS-007 | Skor Lighthouse Accessibility | ≥ 90 | Lighthouse / axe audit |
| TS-008 | Skor Lighthouse SEO | ≥ 90 | Lighthouse audit |
| TS-009 | Test coverage Backend (unit test) | ≥ 70% | Jest coverage report |
| TS-010 | Zero broken links pada seluruh halaman publik | 0 broken links | Link checker tool |

### 6.3 Operational Success

| ID | Indikator | Target | Metode Pengukuran |
|---|---|---|---|
| OS-001 | Content Editor mampu mempublikasikan artikel baru tanpa bantuan teknis | Task completion ≤ 15 menit | UAT dengan pengguna nyata |
| OS-002 | Seluruh notifikasi email terkirim dalam batas waktu | ≤ 5 menit untuk RFQ, lamaran, vendor | End-to-end test |
| OS-003 | Backup database berjalan otomatis | Setiap 24 jam, retensi 30 hari | Monitoring log backup |
| OS-004 | CMS dapat digunakan oleh seluruh pengguna internal yang telah dilatih | 100% pengguna mampu melakukan task dasar | Post-training assessment |
| OS-005 | Zero data loss pada konten yang sudah dipublikasi | 0 kehilangan data | Audit periodik |

### 6.4 Marketing Success

| ID | Indikator | Target | Periode |
|---|---|---|---|
| MS-001 | Organic traffic bulanan (unique visitors) | ≥ 200 UV/bulan dalam 3 bulan; ≥ 500 UV/bulan dalam 6 bulan | Berkelanjutan |
| MS-002 | Domain Authority (DA) | ≥ 15 dalam 6 bulan; ≥ 30 dalam 12 bulan | 6 dan 12 bulan pasca go-live |
| MS-003 | Jumlah artikel Knowledge Center terpublikasi | ≥ 30 artikel dalam 3 bulan pertama | 3 bulan pasca go-live |
| MS-004 | Bounce rate halaman utama | ≤ 60% | 3 bulan pasca go-live |
| MS-005 | Rata-rata durasi sesi pengunjung | ≥ 2 menit | 3 bulan pasca go-live |

### 6.5 SEO Success

| ID | Indikator | Target | Periode |
|---|---|---|---|
| SEO-001 | Seluruh halaman utama terindeks di Google | 100% halaman publik terindeks | 30 hari pasca go-live |
| SEO-002 | Core Web Vitals kategori "Good" di Google Search Console | LCP < 2,5s, CLS < 0,1, INP < 200ms | 60 hari pasca go-live |
| SEO-003 | Keyword target muncul di halaman 1 Google | ≥ 5 keyword target di halaman 1 | 6 bulan pasca go-live |
| SEO-004 | Sitemap XML valid dan ter-submit ke Google Search Console | 100% valid, submitted | Saat go-live |
| SEO-005 | Structured data (schema markup) valid tanpa error | 0 error di Google Rich Results Test | Saat go-live |
| SEO-006 | Meta title dan meta description terisi untuk semua halaman | 100% halaman memiliki unique meta title & description | Saat go-live |

---

## BAB 7 — Business Risk {#bab-7}

### 7.1 Register Risiko

**Skala Penilaian:**
- **Impact:** 3 = Tinggi, 2 = Sedang, 1 = Rendah
- **Probability:** 3 = Tinggi, 2 = Sedang, 1 = Rendah
- **Risk Score** = Impact × Probability (Kritis: 7–9, Sedang: 4–6, Rendah: 1–3)

| ID | Nama Risiko | Kategori | Deskripsi | Impact | Prob. | Score | Mitigasi |
|---|---|---|---|---|---|---|---|
| RSK-001 | Keterlambatan penyediaan konten final | Operasional | Tim marketing PT Adto tidak dapat menyediakan konten (teks, foto, data produk) tepat waktu sebelum go-live | 3 | 3 | 9 | Tetapkan deadline konten 4 minggu sebelum go-live; gunakan placeholder profesional; terapkan change freeze 2 minggu sebelum launch |
| RSK-002 | Perubahan scope di tengah pengembangan | Bisnis | Permintaan penambahan fitur atau perubahan requirement setelah development dimulai | 3 | 2 | 6 | Terapkan formal change request process; BRS ini menjadi baseline yang hanya berubah via persetujuan tertulis |
| RSK-003 | Rendahnya adopsi CMS oleh tim internal | Operasional | Tim content tidak menggunakan CMS secara mandiri, bergantung pada developer untuk pembaruan konten | 2 | 2 | 4 | Sediakan pelatihan CMS 4 jam sebelum go-live; buat SOP konten; desain CMS dengan UX yang intuitif |
| RSK-004 | Kerentanan keamanan pada dependensi pihak ketiga | Teknologi | Library npm atau komponen pihak ketiga memiliki CVE yang belum dipatch | 3 | 2 | 6 | Audit dependensi dengan `npm audit` secara berkala; update patch minor dan security; monitoring dengan Dependabot atau Snyk |
| RSK-005 | Kegagalan layanan pihak ketiga (S3, SMTP) | Teknologi | Provider S3 atau layanan email SMTP mengalami downtime yang berdampak pada fitur upload dan notifikasi | 2 | 1 | 2 | Implementasikan graceful error handling dan retry queue (BullMQ); siapkan provider backup; tidak ada single point of failure |
| RSK-006 | Rendahnya traffic organik dalam 6 bulan pertama | Marketing | Website tidak mendapatkan traffic organik yang cukup karena kompetisi keyword atau konten yang tidak optimal | 2 | 2 | 4 | Mulai keyword research sebelum konten ditulis; targetkan long-tail keyword dengan persaingan rendah; pastikan teknikal SEO sempurna sejak hari 1 |
| RSK-007 | Kualitas konten tidak memenuhi standar industri | Konten | Artikel, deskripsi produk, atau case study yang ditulis tidak cukup informatif atau tidak akurat secara teknis | 2 | 2 | 4 | Libatkan tenaga teknis (insinyur lapangan) dalam review konten teknis; terapkan content governance process di CMS |
| RSK-008 | Spam pada form publik (RFQ, Kontak, Vendor) | Keamanan | Form publik menjadi target spam yang mengotori database dan mengganggu proses operasional | 2 | 3 | 6 | Implementasikan reCAPTCHA v3 atau honeypot; rate limiting per IP; validasi server-side yang ketat |
| RSK-009 | Kebocoran data pribadi (lead, vendor, kandidat) | Keamanan | Data pribadi yang terkumpul melalui form bocor akibat konfigurasi yang tidak aman | 3 | 1 | 3 | Enkripsi data sensitif at-rest; HTTPS enforced; environment variable untuk secrets; audit keamanan sebelum go-live |
| RSK-010 | Kompetitor memiliki platform digital yang lebih mature | Bisnis | Vendor kompetitor meluncurkan atau memperbarui platform digital yang lebih canggih selama periode pengembangan | 2 | 2 | 4 | Fokus pada differensiasi konten (keahlian teknis, portofolio lokal); kualitas UI/UX enterprise yang tidak mudah ditiru dengan cepat |
| RSK-011 | Masalah performa saat traffic melonjak | Teknologi | Traffic melonjak (akibat kampanye atau viral content) menyebabkan website lambat atau tidak dapat diakses | 2 | 1 | 2 | Implementasikan ISR dan CDN dari awal; Docker dengan scaling horizontal; monitoring alert threshold |
| RSK-012 | Stagnasi pembaruan konten pasca go-live | Konten | Tim tidak konsisten mempublikasikan konten baru setelah go-live sehingga website tampak tidak aktif | 2 | 2 | 4 | Tetapkan content calendar bulanan; tetapkan KPI konten untuk tim marketing; automated reminder melalui CMS |
| RSK-013 | Ketidaksesuaian tampilan di browser/perangkat tertentu | Teknologi | Halaman tidak tampil benar di Safari iOS, Firefox, atau layar resolusi tidak umum | 1 | 2 | 2 | Cross-browser testing manual sebelum go-live; BrowserStack atau LambdaTest; daftar browser target yang terdefinisi di SRS |
| RSK-014 | Keterlambatan konfigurasi domain dan DNS | Operasional | Domain atau konfigurasi SSL tidak selesai tepat waktu, menunda go-live | 2 | 2 | 4 | Mulai konfigurasi domain 2 minggu sebelum go-live; checklist deployment yang mencakup DNS propagation time |

---

## BAB 8 — Project Assumptions {#bab-8}

Seluruh keputusan desain, pengembangan, dan deployment dalam proyek ini dibuat berdasarkan asumsi berikut. Jika salah satu asumsi terbukti tidak valid, diperlukan proses formal change request untuk menyesuaikan requirement, timeline, atau anggaran.

| ID | Asumsi | Kategori | Dampak jika Tidak Terpenuhi |
|---|---|---|---|
| ASM-001 | PT Adto akan menyediakan seluruh konten final (teks, foto produk, data spesifikasi, portofolio proyek) minimal 4 minggu sebelum tanggal go-live yang disepakati | Konten | Penundaan go-live; placeholder digunakan sementara |
| ASM-002 | Domain resmi perusahaan (contoh: adto.co.id) telah terdaftar atau akan didaftarkan oleh PT Adto sebelum fase development selesai | Infrastruktur | Deployment production tertunda |
| ASM-003 | Konfigurasi hosting/server production akan dilakukan oleh tim teknis PT Adto atau penyedia layanan hosting yang ditunjuk | Infrastruktur | Tim developer perlu dilibatkan dalam setup server, menambah scope |
| ASM-004 | Minimal satu anggota tim content/marketing dari PT Adto akan mengikuti pelatihan CMS minimal 4 jam sebelum go-live | Operasional | Tim tidak mampu mengelola konten secara mandiri pasca go-live |
| ASM-005 | Kredensial layanan email SMTP (atau provider transaksional seperti Mailgun/SendGrid) akan disediakan oleh PT Adto sebelum fase integration testing dimulai | Teknis | Fitur notifikasi email tidak dapat diuji atau diaktifkan |
| ASM-006 | Kredensial S3 Compatible Storage (Cloudflare R2, MinIO, atau AWS S3) akan disediakan oleh PT Adto sebelum fase integration testing dimulai | Teknis | Fitur upload media dan dokumen tidak dapat diuji |
| ASM-007 | Google Analytics 4 property telah dibuat atau akan dibuat oleh PT Adto, dan Measurement ID akan disediakan sebelum go-live | Marketing | Analytics tidak aktif; data perilaku pengunjung tidak terkumpul dari hari pertama |
| ASM-008 | Seluruh aset brand (logo dalam format SVG/PNG transparan, panduan warna resmi) telah final dan disetujui sebelum fase UI development dimulai | Desain | Perubahan brand di tengah development menyebabkan rework komponen |
| ASM-009 | Konten foto dan gambar yang akan digunakan di website memiliki lisensi yang sesuai atau merupakan dokumentasi orisinal PT Adto | Legal | Risiko pelanggaran hak cipta; placeholder digunakan |
| ASM-010 | Tim internal PT Adto memiliki akses internet yang stabil untuk mengakses CMS, menerima notifikasi email, dan melakukan pengelolaan konten sehari-hari | Operasional | Operasional CMS terganggu |
| ASM-011 | Seluruh data produk, spesifikasi teknis, dan informasi layanan yang diberikan oleh PT Adto untuk konten website adalah akurat dan telah diverifikasi secara internal | Konten | Risiko publikasi informasi yang menyesatkan; dampak reputasi dan legal |
| ASM-012 | Versi 1.0 website hanya dalam Bahasa Indonesia; tidak ada kebutuhan konten Bahasa Inggris sebelum v2.0 | Bisnis | Jika berubah, diperlukan implementasi i18n yang menambah scope signifikan |
| ASM-013 | Database vendor aktif yang sudah ada saat ini akan dimigrasi secara manual oleh tim procurement PT Adto ke dalam portal vendor, bukan melalui import data otomatis | Operasional | Jika diperlukan import otomatis, diperlukan development fitur tambahan |
| ASM-014 | Seluruh lowongan kerja untuk Career Portal versi 1.0 akan di-input manual oleh tim HR melalui CMS; tidak ada integrasi dengan ATS eksternal | Operasional | Jika ATS integration dibutuhkan, perlu scope tambahan |
| ASM-015 | Anggaran operasional untuk cloud hosting, domain, email service, dan S3 storage sudah disiapkan oleh PT Adto secara terpisah dari biaya development website | Anggaran | Jika tidak, deployment production tertunda |
| ASM-016 | Tidak ada perubahan regulasi pemerintah Indonesia terkait website perusahaan, perlindungan data, atau industri migas yang secara material mempengaruhi fitur website selama masa pengembangan | Legal | Diperlukan penyesuaian requirement yang berpotensi menambah scope |
| ASM-017 | Tim developer memiliki akses penuh ke seluruh environment yang diperlukan (development server, staging server) selama proses pengembangan berlangsung | Teknis | Hambatan dalam proses development dan testing |

---

## BAB 9 — Project Constraints {#bab-9}

### 9.1 Business Constraints

| ID | Constraint | Deskripsi | Implikasi |
|---|---|---|---|
| CON-B-001 | Bahasa Utama Tunggal | Website versi 1.0 hanya mendukung Bahasa Indonesia. Dukungan Bahasa Inggris ditunda ke v2.0 | Tidak ada i18n routing, tidak ada terjemahan konten dalam scope v1.0 |
| CON-B-002 | Non-Transaksional | Website tidak mendukung transaksi keuangan langsung, payment gateway, atau e-commerce. Semua transaksi diselesaikan secara offline setelah proses RFQ | Tidak ada modul cart, checkout, atau pembayaran dalam scope apapun di v1.0 |
| CON-B-003 | Konten Awal oleh Klien | Seluruh konten final (teks, gambar, data produk, portofolio) merupakan tanggung jawab PT Adto untuk disediakan. Tim developer hanya mengimplementasikan platform, bukan memproduksi konten | Go-live bergantung pada kesiapan konten dari klien |
| CON-B-004 | Tidak Ada Integrasi Pihak Ketiga Operasional | Versi 1.0 tidak mengintegrasikan sistem pihak ketiga seperti CRM, ERP, atau ATS. Seluruh data dikelola dalam database internal | Data silo antara website dan sistem operasional internal |

### 9.2 Technology Constraints

| ID | Constraint | Deskripsi |
|---|---|---|
| CON-T-001 | Stack Teknologi Terkunci | Seluruh pengembangan wajib menggunakan stack yang ditetapkan: Next.js 14, NestJS, TypeScript (strict mode), PostgreSQL 15, Prisma, Payload CMS, BullMQ, Redis, S3 Compatible, Docker. Penggantian stack memerlukan persetujuan tertulis |
| CON-T-002 | TypeScript Strict Mode | Mode strict TypeScript wajib diaktifkan di seluruh codebase Frontend dan Backend. Tidak ada penggunaan `any` type secara eksplisit tanpa justifikasi terdokumentasi |
| CON-T-003 | Node.js LTS | Seluruh komponen berbasis Node.js wajib menggunakan versi LTS minimal v20.x untuk kompatibilitas dengan semua dependensi yang dipilih |
| CON-T-004 | Database Relasional Tunggal | PostgreSQL adalah satu-satunya database relasional yang digunakan. Tidak ada penggunaan database NoSQL atau database lain di v1.0 |
| CON-T-005 | No Raw SQL | Seluruh operasi database dilakukan melalui Prisma ORM. Raw SQL hanya diperbolehkan untuk kasus yang tidak dapat ditangani Prisma dan harus didokumentasikan |

### 9.3 Budget Constraints

| ID | Constraint | Deskripsi |
|---|---|---|
| CON-BU-001 | Infrastruktur Cloud | Pemilihan provider cloud (hosting, S3, email) harus mempertimbangkan biaya operasional bulanan yang proporsional dengan skala bisnis perusahaan saat ini |
| CON-BU-002 | Open Source First | Seluruh library dan framework yang digunakan harus open source dan bebas lisensi komersial. Penggunaan library berbayar memerlukan persetujuan eksplisit |
| CON-BU-003 | Analytics Gratis | Google Analytics 4 digunakan sebagai solusi analytics utama karena tidak memerlukan biaya lisensi |

### 9.4 Legal Constraints

| ID | Constraint | Deskripsi |
|---|---|---|
| CON-L-001 | Kepatuhan UU PDP | Pengumpulan dan pemrosesan data pribadi wajib mematuhi Undang-Undang Perlindungan Data Pribadi (UU PDP) No. 27 Tahun 2022 Republik Indonesia. Form yang mengumpulkan data pribadi harus menyertakan pernyataan tujuan penggunaan data |
| CON-L-002 | Persetujuan Cookie | Website wajib menampilkan notifikasi cookie dan meminta persetujuan pengguna sebelum mengaktifkan cookie analitik non-esensial |
| CON-L-003 | Hak Kekayaan Intelektual | Seluruh aset visual yang digunakan (foto, ikon, ilustrasi) wajib memiliki lisensi yang sesuai atau merupakan karya orisinal PT Adto. Penggunaan aset tanpa lisensi yang jelas dilarang |
| CON-L-004 | Akurasi Informasi Teknis | Klaim teknis, spesifikasi produk, dan informasi layanan yang dipublikasikan harus akurat, dapat diverifikasi, dan tidak menyesatkan calon klien atau mitra bisnis |
| CON-L-005 | Privasi Data Formulir | Data yang dikumpulkan melalui form publik (RFQ, kontak, vendor, lamaran) hanya boleh digunakan untuk tujuan yang dinyatakan secara eksplisit kepada pengirim |

### 9.5 Timeline Constraints

| ID | Constraint | Deskripsi |
|---|---|---|
| CON-TL-001 | Content Freeze | Konten final dari PT Adto wajib tersedia minimal 4 minggu sebelum tanggal go-live yang disepakati. Perubahan konten setelah content freeze akan dijadwalkan sebagai pembaruan pasca go-live |
| CON-TL-002 | Phased Delivery | Pengembangan mengikuti urutan fase yang telah ditetapkan: Architecture & Foundation → Backend & CMS → Frontend Core Pages → Portal & Forms → Testing & QA → Deployment. Tidak ada fase yang dapat dilewati |
| CON-TL-003 | UAT Period | User Acceptance Testing (UAT) dengan pengguna nyata dari tim PT Adto wajib dilakukan minimal 2 minggu sebelum go-live. Temuan kritis dari UAT harus diselesaikan sebelum go-live |
| CON-TL-004 | No Feature Addition Post-Freeze | Fitur baru tidak dapat ditambahkan ke scope v1.0 setelah architecture decision record (ADR) final disepakati. Fitur baru dijadwalkan ke v2.0 |

---

## Penutup Dokumen

Dokumen Business Requirements Specification (BRS) ini telah diverifikasi secara internal oleh:

- Senior Business Analyst — konsistensi dan kelengkapan requirement bisnis
- Product Owner — kesesuaian dengan tujuan bisnis dan prioritas stakeholder
- Enterprise Architect — feasibility teknis dan kesesuaian dengan arsitektur yang dipilih

**Dokumen ini adalah BASELINE RESMI.**  
Perubahan apapun terhadap isi dokumen ini harus melalui proses formal **Change Request** yang mencakup: identifikasi perubahan, analisis dampak, persetujuan tertulis dari Product Owner, dan pembaruan nomor versi dokumen.

---

*BRS-ADTO-ENT-001 | Versi 1.0.0 | 13 Juli 2026*  
*PT Adto Cipta Usaha Mandiri — Enterprise Website Platform*  
*"Energi Terpadu, Solusi Mandiri"*
