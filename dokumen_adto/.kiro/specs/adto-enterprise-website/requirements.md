# Requirements Document

<!-- 
  Software Requirements Specification (SRS)
  PT Adto Cipta Usaha Mandiri — Enterprise Website Platform
  Dokumen: SRS-ADTO-ENT-001 | Versi: 1.0.0 | Tanggal: 2026-07-01
  Standar: IEEE 830-1998 / ISO/IEC/IEEE 29148:2018
-->

## Introduction

Dokumen ini merupakan **Software Requirements Specification (SRS)** lengkap untuk proyek **Enterprise Website Platform PT Adto Cipta Usaha Mandiri**, disusun sesuai standar IEEE 830-1998 dan ISO/IEC/IEEE 29148:2018.

**PT Adto Cipta Usaha Mandiri** adalah perusahaan B2B industrial di sektor Oil & Gas yang menyediakan:
- Chemical Oil & Gas (Bentonite API, Barite API, dll.)
- Sparepart & Service untuk peralatan industri
- Jasa Mobilisasi/Demobilisasi alat berat

Platform ini mencakup: Corporate Website, Marketing & Lead Generation, RFQ Platform, Vendor Registration Portal, Career Portal, Knowledge Center, Media Gallery, CMS, SEO Platform, dan fondasi ekspansi masa depan (Customer Portal, CRM, ERP Integration).

**Tech Stack:** Next.js 14 (App Router) + NestJS + TypeScript + PostgreSQL + Prisma + Payload CMS + JWT/Redis + BullMQ + Sharp + S3 Compatible + Docker

---

## Daftar Isi

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
| **System** | Enterprise Website Platform PT Adto Cipta Usaha Mandiri secara keseluruhan |
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

---

## BAB 1 — Pendahuluan {#bab-1}

### 1.1 Tujuan Dokumen

Dokumen ini merupakan Software Requirements Specification (SRS) lengkap untuk proyek **Enterprise Website Platform PT Adto Cipta Usaha Mandiri**. Dokumen ini disusun sesuai standar IEEE 830-1998 dan ISO/IEC/IEEE 29148:2018 sebagai acuan resmi bagi seluruh pemangku kepentingan — tim bisnis, perancang sistem, pengembang perangkat lunak, dan tim QA — dalam proses pengembangan, pengujian, dan penerimaan sistem.

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

PT Adto Cipta Usaha Mandiri adalah perusahaan B2B industrial di sektor Oil & Gas yang menyediakan tiga lini layanan utama:

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
| 8 | Corporate Handbook PT Adto Cipta Usaha Mandiri | Internal |

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
| CON-L-003 | Hak Kekayaan Intelektual | Seluruh aset visual (logo, gambar, ikon) yang digunakan harus memiliki lisensi yang sesuai atau merupakan karya orisinal milik PT Adto Cipta Usaha Mandiri |
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

*Akhir Dokumen SRS — PT Adto Cipta Usaha Mandiri Enterprise Website Platform*  
*Versi: 1.0.0 | Tanggal: 2026-07-01*  
*Dokumen ini adalah baseline requirements. Perubahan apapun harus melalui proses formal change request.*
