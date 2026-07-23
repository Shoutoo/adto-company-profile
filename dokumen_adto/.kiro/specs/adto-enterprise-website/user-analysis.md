# Enterprise User Analysis & Experience Mapping
<!--
  PT Adto Cipta Usaha Mandiri — Enterprise Website Platform
  Dokumen: UA-ADTO-ENT-001 | Versi: 1.0.0 | Tanggal: 2026-07-13
  Status: BASELINE
-->

**Nomor Dokumen:** UA-ADTO-ENT-001  
**Versi:** 1.0.0  
**Tanggal:** 13 Juli 2026  
**Berlaku untuk:** UI/UX Design, Frontend, Backend, CMS, Auth, Permission System

---

## Daftar Isi

1. [BAB 1 — User Overview](#bab-1)
2. [BAB 2 — Public User Analysis](#bab-2)
3. [BAB 3 — Internal User Analysis](#bab-3)
4. [BAB 4 — Enterprise Persona](#bab-4)
5. [BAB 5 — User Journey](#bab-5)
6. [BAB 6 — Customer Journey](#bab-6)
7. [BAB 7 — User Task Analysis](#bab-7)
8. [BAB 8 — User Needs Mapping](#bab-8)
9. [BAB 9 — Pain Point Analysis](#bab-9)
10. [BAB 10 — UX Goals](#bab-10)
11. [BAB 11 — Digital Touchpoint Mapping](#bab-11)
12. [BAB 12 — Future User Expansion](#bab-12)

---

## BAB 1 — User Overview {#bab-1}

### 1.1 Klasifikasi Pengguna

| Group | Kategori | Jumlah Tipe User | Akses |
|---|---|---|---|
| **A — Public User** | Eksternal, tidak terautentikasi | 11 tipe | Halaman publik website |
| **B — Internal User** | Internal, terautentikasi via CMS | 10 tipe | CMS + halaman publik |
| **Total** | | **21 tipe user** | |

### 1.2 Ringkasan User

| ID | User Name | Group | Primary Goal | Digital Literacy | Device |
|---|---|---|---|---|---|
| USR-P-01 | General Visitor | Public | Mengenal perusahaan | Sedang | Desktop/Mobile |
| USR-P-02 | Prospective Customer | Public | Mengevaluasi vendor | Tinggi | Desktop |
| USR-P-03 | Active Customer | Public | Mengajukan RFQ/reorder | Tinggi | Desktop |
| USR-P-04 | Vendor / Supplier | Public | Mendaftarkan perusahaan | Sedang | Desktop |
| USR-P-05 | Investor | Public | Due diligence perusahaan | Tinggi | Desktop |
| USR-P-06 | Business Partner | Public | Menjajaki kemitraan | Tinggi | Desktop |
| USR-P-07 | Government Official | Public | Verifikasi kepatuhan | Sedang | Desktop |
| USR-P-08 | Auditor | Public | Akses dokumen audit | Tinggi | Desktop |
| USR-P-09 | Media / Journalist | Public | Liputan berita | Sedang | Desktop/Mobile |
| USR-P-10 | Job Seeker | Public | Mencari dan melamar kerja | Sedang–Tinggi | Mobile/Desktop |
| USR-P-11 | General Public | Public | Mencari informasi umum | Rendah–Sedang | Mobile |
| USR-I-01 | Super Administrator | Internal | Mengelola seluruh sistem | Sangat Tinggi | Desktop |
| USR-I-02 | Administrator | Internal | Mengelola operasional CMS | Tinggi | Desktop |
| USR-I-03 | Marketing | Internal | Membuat dan mempublikasikan konten | Sedang–Tinggi | Desktop |
| USR-I-04 | Sales | Internal | Mengelola RFQ dan lead | Sedang | Desktop/Mobile |
| USR-I-05 | HR | Internal | Mengelola lowongan dan lamaran | Sedang | Desktop |
| USR-I-06 | Procurement | Internal | Verifikasi vendor | Sedang | Desktop |
| USR-I-07 | Content Editor | Internal | Memproduksi dan mempublikasikan konten | Sedang | Desktop |
| USR-I-08 | Finance | Internal | Monitoring biaya platform | Sedang | Desktop |
| USR-I-09 | Management | Internal | Memantau KPI digital | Tinggi | Desktop/Mobile |
| USR-I-10 | IT Administrator | Internal | Mengelola infrastruktur teknis | Sangat Tinggi | Desktop |

---

## BAB 2 — Public User Analysis {#bab-2}

### USR-P-01 — General Visitor

| Atribut | Detail |
|---|---|
| **User ID** | USR-P-01 |
| **User Name** | General Visitor |
| **Category** | Public — Unauthenticated |
| **Role** | Pengunjung umum tanpa tujuan bisnis spesifik |
| **Description** | Individu yang menemukan website PT Adto melalui mesin pencari atau tautan referral. Belum memiliki kebutuhan bisnis yang jelas namun berpotensi menjadi lead di masa depan. |
| **Primary Goal** | Memahami identitas, layanan, dan skala bisnis PT Adto |
| **Secondary Goal** | Membaca artikel Knowledge Center atau berita industri |
| **Motivation** | Rasa ingin tahu tentang perusahaan; mencari informasi industri migas |
| **Pain Points** | Website tidak informatif; konten sulit dibaca; loading lambat; tidak ada navigasi yang jelas |
| **Needs** | Informasi perusahaan yang jelas; konten mudah dipahami; navigasi intuitif |
| **Expectation** | Mendapatkan gambaran perusahaan dalam 30 detik pertama |
| **Behavior** | Browsing cepat; membaca headline dan visual; tidak mengisi form |
| **Digital Literacy** | Sedang |
| **Device Preference** | Mobile (60%), Desktop (40%) |
| **Internet Usage** | Occasional — tidak rutin mengunjungi website B2B industrial |
| **Decision Making** | Pasif — tidak dalam proses pengambilan keputusan bisnis aktif |
| **Information Needed** | Profil perusahaan, layanan, lokasi, kontak |
| **Business Value** | Rendah — potensi menjadi lead masa depan; mempengaruhi organic traffic |
| **Success Criteria** | Bounce rate ≤ 60%; durasi sesi ≥ 1,5 menit |

---

### USR-P-02 — Prospective Customer

| Atribut | Detail |
|---|---|
| **User ID** | USR-P-02 |
| **User Name** | Prospective Customer |
| **Category** | Public — High Value |
| **Role** | Calon klien yang sedang mengevaluasi vendor untuk kebutuhan operasional |
| **Description** | Procurement Manager, Engineering Manager, atau Project Manager dari perusahaan migas, kontraktor EPC, atau service company yang sedang aktif mencari vendor chemical, sparepart, atau jasa mobilisasi. Pengguna paling bernilai secara bisnis. |
| **Primary Goal** | Menemukan vendor yang capable dan terpercaya untuk kebutuhan spesifik mereka |
| **Secondary Goal** | Mengunduh spesifikasi teknis; melihat portofolio proyek; mengajukan RFQ |
| **Motivation** | Memenuhi target pengadaan tepat waktu; mengurangi risiko dengan memilih vendor terverifikasi |
| **Pain Points** | Spesifikasi produk tidak tersedia online; portofolio tidak dipublikasikan; harus menelepon untuk mendapatkan informasi dasar; RFQ manual dan lambat direspons |
| **Needs** | Katalog produk dengan spesifikasi teknis; portofolio proyek yang dapat diverifikasi; form RFQ digital yang cepat; download datasheet tanpa barrier; respons dalam 24 jam |
| **Expectation** | Mendapatkan semua informasi untuk keputusan awal dalam satu sesi ≤ 10 menit; konfirmasi RFQ otomatis |
| **Behavior** | Research-oriented; membaca detail; membandingkan dengan kompetitor; menggunakan Google untuk validasi |
| **Digital Literacy** | Tinggi |
| **Device Preference** | Desktop (80%), Mobile (20%) |
| **Internet Usage** | Rutin — menggunakan internet sebagai alat kerja utama |
| **Decision Making** | Analitis dan terstruktur; butuh multiple data points sebelum memutuskan |
| **Information Needed** | Spesifikasi produk, standar kualitas (API Grade), portofolio proyek, sertifikasi, kontak sales |
| **Business Value** | Sangat Tinggi — sumber utama revenue perusahaan |
| **Success Criteria** | ≥ 15 RFQ/bulan; product page visit duration ≥ 3 menit; download datasheet ≥ 10/bulan |

---

### USR-P-03 — Active Customer

| Atribut | Detail |
|---|---|
| **User ID** | USR-P-03 |
| **User Name** | Active Customer |
| **Category** | Public — Returning High Value |
| **Role** | Klien yang sudah pernah bertransaksi dan kembali untuk kebutuhan baru |
| **Description** | Klien aktif yang telah mengenal PT Adto dan kembali ke website untuk mengajukan RFQ tambahan, memeriksa produk baru, atau mengunduh dokumen teknis untuk proyek baru. |
| **Primary Goal** | Mengajukan RFQ dengan cepat dan efisien berdasarkan pengetahuan sebelumnya |
| **Secondary Goal** | Melihat produk terbaru; mengunduh COA/MSDS; membaca Knowledge Center |
| **Motivation** | Efisiensi — memanfaatkan vendor yang sudah terpercaya untuk kebutuhan baru |
| **Pain Points** | Harus mengisi form yang sama berulang kali; tidak ada riwayat RFQ sebelumnya (v1.0 limitation) |
| **Needs** | Form RFQ yang cepat; katalog produk terkini; dokumen teknis yang mudah diunduh |
| **Expectation** | Proses re-order atau RFQ baru lebih cepat dari pertama kali |
| **Behavior** | Task-oriented; langsung menuju halaman yang dibutuhkan; tidak banyak browsing |
| **Digital Literacy** | Tinggi |
| **Device Preference** | Desktop (70%), Mobile (30%) |
| **Business Value** | Sangat Tinggi — retensi klien; lifetime value tinggi |
| **Success Criteria** | Returning visitor rate ≥ 20%; repeat RFQ dari klien yang sama |

---

### USR-P-04 — Vendor / Supplier

| Atribut | Detail |
|---|---|
| **User ID** | USR-P-04 |
| **User Name** | Vendor / Supplier |
| **Category** | Public — Partner |
| **Role** | Pemasok yang ingin mendaftarkan diri sebagai vendor resmi PT Adto |
| **Description** | Pemilik atau representatif perusahaan pemasok yang ingin masuk ke daftar vendor PT Adto untuk berpartisipasi dalam proses pengadaan. Bisa berupa pemasok chemical, sparepart, atau jasa transportasi. |
| **Primary Goal** | Menyelesaikan proses registrasi vendor dengan sukses dan mendapatkan status terverifikasi |
| **Secondary Goal** | Memahami kategori vendor yang dibutuhkan PT Adto; mengunggah dokumen yang diperlukan |
| **Motivation** | Mendapatkan peluang bisnis sebagai pemasok resmi perusahaan migas yang sedang berkembang |
| **Pain Points** | Tidak tahu dokumen apa yang dibutuhkan; tidak ada konfirmasi status; proses tidak jelas; formulir terlalu panjang |
| **Needs** | Checklist dokumen yang jelas; form registrasi yang terstruktur; konfirmasi instan; status tracking via email |
| **Expectation** | Proses registrasi selesai dalam ≤ 15 menit; mendapat keputusan dalam ≤ 7 hari kerja |
| **Behavior** | Task-focused; mengisi form sekali, tidak kembali hingga ada notifikasi |
| **Digital Literacy** | Sedang |
| **Device Preference** | Desktop (75%), Mobile (25%) |
| **Business Value** | Sedang — membangun supply chain yang kuat |
| **Success Criteria** | Form completion rate ≥ 80%; 100% mendapat konfirmasi email |

---

### USR-P-05 — Investor

| Atribut | Detail |
|---|---|
| **User ID** | USR-P-05 |
| **User Name** | Investor |
| **Category** | Public — Strategic |
| **Role** | Individu atau institusi yang mengevaluasi PT Adto untuk investasi atau kemitraan finansial |
| **Primary Goal** | Mendapatkan gambaran lengkap dan meyakinkan tentang profil, kapabilitas, dan potensi pertumbuhan PT Adto |
| **Motivation** | Mengidentifikasi peluang investasi di sektor supply chain migas Indonesia |
| **Pain Points** | Tidak ada informasi korporat yang dapat diakses secara independen; kurang transparansi |
| **Needs** | Company profile lengkap; struktur organisasi; portofolio; sertifikasi; informasi legalitas; kontak eksekutif |
| **Expectation** | Website mencerminkan perusahaan yang profesional, terorganisir, dan memiliki track record |
| **Behavior** | Membaca secara mendalam; mengunduh dokumen; mencari informasi legalitas |
| **Digital Literacy** | Tinggi |
| **Device Preference** | Desktop (90%) |
| **Business Value** | Tinggi strategis — potential capital dan network expansion |
| **Success Criteria** | Download Company Profile PDF ≥ 5/bulan; Contact form dari investor |

---

### USR-P-06 — Business Partner

| Atribut | Detail |
|---|---|
| **User ID** | USR-P-06 |
| **User Name** | Business Partner |
| **Category** | Public — Strategic |
| **Role** | Perusahaan yang menjajaki kemitraan distribusi, joint venture, atau kolaborasi strategis |
| **Primary Goal** | Memahami kapabilitas PT Adto dan menemukan cara untuk memulai percakapan kemitraan |
| **Needs** | Profil kapabilitas; layanan; portofolio; kontak eksekutif; form partnership inquiry |
| **Digital Literacy** | Tinggi |
| **Device Preference** | Desktop (85%) |
| **Business Value** | Tinggi — potential revenue stream baru |
| **Success Criteria** | Partnership inquiry melalui Contact Form ≥ 2/kuartal |

---

### USR-P-07 — Government Official

| Atribut | Detail |
|---|---|
| **User ID** | USR-P-07 |
| **User Name** | Government Official / Regulator |
| **Category** | Public — Regulatory |
| **Role** | Pejabat dari instansi regulator yang memverifikasi kepatuhan dan legalitas PT Adto |
| **Primary Goal** | Memverifikasi legalitas, sertifikasi, dan kepatuhan operasional PT Adto |
| **Needs** | Informasi NPWP, NIB, KBLI; sertifikasi; dokumen legalitas yang dapat diunduh |
| **Expectation** | Informasi akurat, lengkap, dan mudah diakses tanpa perlu menghubungi perusahaan |
| **Digital Literacy** | Sedang–Tinggi |
| **Device Preference** | Desktop (90%) |
| **Business Value** | Kepatuhan regulasi — melindungi perusahaan dari risiko legal |
| **Success Criteria** | Dokumen legalitas selalu terbarui dan dapat diunduh kapan saja |

---

### USR-P-08 — Auditor

| Atribut | Detail |
|---|---|
| **User ID** | USR-P-08 |
| **User Name** | Auditor |
| **Category** | Public — Compliance |
| **Role** | Auditor internal atau eksternal yang melakukan verifikasi dokumen dan kepatuhan |
| **Primary Goal** | Mengakses dan mengunduh dokumen yang diperlukan untuk proses audit |
| **Needs** | Download Center dengan dokumen terorganisir; sertifikasi; laporan |
| **Digital Literacy** | Tinggi |
| **Device Preference** | Desktop (95%) |
| **Business Value** | Kepatuhan dan governance — mengurangi risiko audit |
| **Success Criteria** | Semua dokumen audit tersedia dan dapat diunduh dengan mudah |

---

### USR-P-09 — Media / Journalist

| Atribut | Detail |
|---|---|
| **User ID** | USR-P-09 |
| **User Name** | Media / Journalist |
| **Category** | Public — Media |
| **Role** | Jurnalis atau blogger yang meliput industri migas dan aktivitas perusahaan |
| **Primary Goal** | Mendapatkan informasi akurat tentang PT Adto untuk materi liputan |
| **Needs** | Siaran pers; foto berkualitas tinggi; profil eksekutif; kontak media resmi |
| **Digital Literacy** | Tinggi |
| **Device Preference** | Desktop (70%), Mobile (30%) |
| **Business Value** | Sedang — brand exposure dan reputasi |
| **Success Criteria** | Press Kit dapat diunduh; kontak media jelas tersedia |

---

### USR-P-10 — Job Seeker

| Atribut | Detail |
|---|---|
| **User ID** | USR-P-10 |
| **User Name** | Job Seeker / Kandidat |
| **Category** | Public — Talent |
| **Role** | Individu yang mencari peluang karir di industri migas |
| **Description** | Mencakup fresh graduate teknik (kimia, mesin, petroleum) hingga profesional berpengalaman yang ingin bergabung dengan tim PT Adto. |
| **Primary Goal** | Menemukan lowongan yang relevan dan mengirimkan lamaran dengan mudah |
| **Secondary Goal** | Memahami budaya kerja dan employer branding PT Adto |
| **Motivation** | Berkarir di perusahaan yang bergerak di industri energi yang relevan dengan latar belakang mereka |
| **Pain Points** | Lowongan tidak diperbarui; form lamaran panjang dan rumit; tidak ada konfirmasi setelah melamar; tidak tahu budaya kerja perusahaan |
| **Needs** | Daftar lowongan terkini dengan detail jelas; form lamaran singkat; upload CV mudah; konfirmasi email otomatis |
| **Expectation** | Proses lamaran selesai dalam ≤ 10 menit; mendapat konfirmasi dalam hitungan menit |
| **Behavior** | Mobile-first; menggunakan LinkedIn dan job portal sebagai referensi; membandingkan peluang |
| **Digital Literacy** | Sedang–Tinggi |
| **Device Preference** | Mobile (55%), Desktop (45%) |
| **Business Value** | Sedang — kualitas talent akuisisi mempengaruhi kapasitas operasional |
| **Success Criteria** | ≥ 5 lamaran per lowongan aktif; konfirmasi email 100% terkirim; form completion rate ≥ 70% |

---

### USR-P-11 — General Public

| Atribut | Detail |
|---|---|
| **User ID** | USR-P-11 |
| **User Name** | General Public |
| **Category** | Public — Casual |
| **Role** | Pengunjung kasual tanpa tujuan bisnis spesifik |
| **Primary Goal** | Mencari informasi umum tentang perusahaan atau industri migas |
| **Needs** | Konten yang mudah dibaca; navigasi intuitif; loading cepat |
| **Digital Literacy** | Rendah–Sedang |
| **Device Preference** | Mobile (70%), Desktop (30%) |
| **Business Value** | Rendah langsung — kontribusi pada organic traffic dan domain authority |
| **Success Criteria** | Bounce rate ≤ 65%; organic traffic growth month-over-month |

---

## BAB 3 — Internal User Analysis {#bab-3}

### USR-I-01 — Super Administrator

| Atribut | Detail |
|---|---|
| **User ID** | USR-I-01 |
| **User Name** | Super Administrator |
| **Category** | Internal — System |
| **Role** | Pengguna dengan akses tak terbatas ke seluruh sistem dan konfigurasi |
| **Description** | Mengelola seluruh ekosistem platform: user management, system config, security, backup, dan semua modul CMS. Biasanya diisi oleh IT lead atau technical founder. |
| **Primary Goal** | Memastikan seluruh platform beroperasi aman, stabil, dan optimal |
| **Secondary Goal** | Mengkonfigurasi permission system dan audit log |
| **Pain Points** | Tidak ada dashboard terpusat untuk monitoring semua service; tidak ada audit trail yang lengkap |
| **Needs** | Akses penuh ke semua modul; system health dashboard; audit log; user management; konfigurasi email dan storage |
| **Expectation** | Dapat melakukan semua operasi admin tanpa hambatan teknis |
| **Digital Literacy** | Sangat Tinggi |
| **Device Preference** | Desktop (100%) |
| **CMS Access** | Full access — semua collection, settings, dan global config |
| **Success Criteria** | Uptime ≥ 99,5%; zero unauthorized access; audit log 100% lengkap |

---

### USR-I-02 — Administrator

| Atribut | Detail |
|---|---|
| **User ID** | USR-I-02 |
| **User Name** | Administrator |
| **Category** | Internal — Operational |
| **Role** | Pengelola operasional platform dan moderator konten |
| **Primary Goal** | Memastikan platform berjalan lancar dan semua pengguna CMS terkonfigurasi dengan benar |
| **Needs** | User management (CRUD akun CMS); approval konten; konfigurasi operasional; log aktivitas |
| **Digital Literacy** | Tinggi |
| **Device Preference** | Desktop (95%) |
| **CMS Access** | Semua collection kecuali system-level settings |
| **Success Criteria** | Semua pengguna internal terkonfigurasi dengan role yang tepat; zero unauthorized publish |

---

### USR-I-03 — Marketing

| Atribut | Detail |
|---|---|
| **User ID** | USR-I-03 |
| **User Name** | Marketing Manager/Team |
| **Category** | Internal — Operational |
| **Role** | Pengelola strategi konten, brand, dan lead generation digital |
| **Primary Goal** | Mempublikasikan konten pemasaran yang menghasilkan traffic dan lead |
| **Secondary Goal** | Monitoring performa konten; optimasi SEO; mengelola kampanye digital |
| **Pain Points** | Bergantung pada developer untuk perubahan konten; tidak ada data performa konten real-time; tidak bisa schedule konten |
| **Needs** | CMS editor yang intuitif; analytics dashboard; scheduled publishing; SEO tools; media library |
| **Expectation** | Independen dari developer untuk semua kebutuhan konten setelah pelatihan dasar |
| **Digital Literacy** | Sedang–Tinggi |
| **Device Preference** | Desktop (90%), Mobile (10%) |
| **CMS Access** | Blog, Knowledge Center, News, Products (read), Services (read), Media, SEO settings |
| **Success Criteria** | Publish artikel baru ≤ 15 menit; organic traffic growth MoM |

---

### USR-I-04 — Sales

| Atribut | Detail |
|---|---|
| **User ID** | USR-I-04 |
| **User Name** | Sales Executive/Team |
| **Category** | Internal — Operational |
| **Role** | Pengelola lead dan RFQ yang masuk dari website |
| **Primary Goal** | Menindaklanjuti setiap RFQ dan lead dalam waktu secepat mungkin |
| **Secondary Goal** | Memantau pipeline lead; mengupdate status RFQ |
| **Pain Points** | Lead masuk tidak ternotifikasi; tidak ada rekam jejak lead; kehilangan prospek karena respons lambat; akses terbatas dari mobile |
| **Needs** | Notifikasi real-time RFQ baru; dashboard RFQ yang simpel; filter dan sort berdasarkan status; akses mobile |
| **Expectation** | Notifikasi RFQ dalam ≤ 5 menit; semua RFQ tercatat dan bisa dikelola |
| **Digital Literacy** | Sedang |
| **Device Preference** | Mobile (60%), Desktop (40%) |
| **CMS Access** | RFQ collection (read, update status); Contact messages (read) |
| **Success Criteria** | Respons RFQ rata-rata ≤ 24 jam; ≥ 30% lead ke penawaran formal |

---

### USR-I-05 — HR

| Atribut | Detail |
|---|---|
| **User ID** | USR-I-05 |
| **User Name** | HR Manager/Team |
| **Category** | Internal — Operational |
| **Role** | Pengelola lowongan dan aplikasi lamaran kerja |
| **Primary Goal** | Mengelola seluruh siklus rekrutmen dari publikasi lowongan hingga seleksi awal |
| **Pain Points** | Tidak ada sistem terpusat untuk menerima dan mengelola lamaran; proses tidak terstandarisasi |
| **Needs** | Manajemen lowongan (CRUD); dashboard lamaran per posisi; download CV; notifikasi lamaran baru; filter kandidat |
| **Digital Literacy** | Sedang |
| **Device Preference** | Desktop (90%) |
| **CMS Access** | Jobs collection (full CRUD); Applications collection (read, update status) |
| **Success Criteria** | ≥ 50% lamaran via portal; semua lamaran terdokumentasi |

---

### USR-I-06 — Procurement

| Atribut | Detail |
|---|---|
| **User ID** | USR-I-06 |
| **User Name** | Procurement Officer/Team |
| **Category** | Internal — Operational |
| **Role** | Verifikator dan pengelola database vendor terdaftar |
| **Primary Goal** | Memverifikasi registrasi vendor dan memelihara database vendor yang akurat |
| **Needs** | Dashboard vendor; filter berdasarkan status/kategori; update status (approve/reject); download dokumen vendor |
| **Digital Literacy** | Sedang |
| **Device Preference** | Desktop (95%) |
| **CMS Access** | Vendors collection (read, update status); Vendor Documents (download) |
| **Success Criteria** | Semua vendor baru diverifikasi dalam ≤ 7 hari kerja |

---

### USR-I-07 — Content Editor

| Atribut | Detail |
|---|---|
| **User ID** | USR-I-07 |
| **User Name** | Content Editor |
| **Category** | Internal — Operational |
| **Role** | Produser dan publisher konten website |
| **Primary Goal** | Memproduksi konten berkualitas dan mempublikasikannya secara mandiri |
| **Pain Points** | CMS terlalu teknis; upload gambar lambat; tidak ada preview; tidak tahu apakah konten sudah SEO-friendly |
| **Needs** | Rich text editor dengan formatting tools; media library yang mudah digunakan; preview sebelum publish; SEO field yang jelas; scheduled publishing |
| **Expectation** | Mempublikasikan artikel dalam ≤ 15 menit; preview identik dengan tampilan publik |
| **Digital Literacy** | Sedang |
| **Device Preference** | Desktop (100%) |
| **CMS Access** | Blog/Articles (full CRUD, submit for review); Knowledge Center; News; Media library; Draft status only (no direct publish) |
| **Success Criteria** | Task completion ≤ 15 menit; zero formatting error pada konten terpublikasi |

---

### USR-I-08 — Finance

| Atribut | Detail |
|---|---|
| **User ID** | USR-I-08 |
| **User Name** | Finance Team |
| **Category** | Internal — Operational |
| **Role** | Monitoring biaya operasional platform digital |
| **Primary Goal** | Memastikan biaya operasional platform sesuai anggaran |
| **Needs** | Laporan biaya infrastruktur; akses read-only ke data analitik biaya |
| **Digital Literacy** | Sedang |
| **Device Preference** | Desktop (100%) |
| **CMS Access** | Read-only analytics; Settings (billing — read) |
| **Success Criteria** | Biaya platform sesuai anggaran; laporan tersedia setiap bulan |

---

### USR-I-09 — Management

| Atribut | Detail |
|---|---|
| **User ID** | USR-I-09 |
| **User Name** | Management / GM / Direktur |
| **Category** | Internal — Executive |
| **Role** | Pemantau KPI digital dan performa bisnis secara keseluruhan |
| **Primary Goal** | Memantau efektivitas platform digital dalam mendukung target bisnis |
| **Needs** | Dashboard eksekutif dengan KPI: lead count, RFQ count, traffic, konversi; laporan singkat yang dapat di-export |
| **Digital Literacy** | Tinggi |
| **Device Preference** | Desktop (70%), Mobile (30%) |
| **CMS Access** | Read-only semua collection; Analytics dashboard |
| **Success Criteria** | Dapat membaca semua KPI utama dalam satu halaman dashboard |

---

### USR-I-10 — IT Administrator

| Atribut | Detail |
|---|---|
| **User ID** | USR-I-10 |
| **User Name** | IT Administrator |
| **Category** | Internal — Technical |
| **Role** | Pengelola infrastruktur teknis: server, Docker, jaringan, SSL, storage |
| **Primary Goal** | Memastikan infrastruktur berjalan optimal dengan uptime tinggi |
| **Pain Points** | Tidak ada monitoring dashboard terpusat; deployment manual; tidak ada alert otomatis |
| **Needs** | Server monitoring; Docker management; health check endpoint; backup automation; deployment tools; SSL management |
| **Digital Literacy** | Sangat Tinggi |
| **Device Preference** | Desktop (100%) |
| **CMS Access** | Infrastructure settings; environment config; tidak ada akses ke konten CMS |
| **Success Criteria** | Uptime ≥ 99,5%; deployment zero-downtime; backup otomatis 100% berhasil |

---

## BAB 4 — Enterprise Persona {#bab-4}

### Persona 1 — Dharma Wijaya | Procurement Manager

| Atribut | Detail |
|---|---|
| **Nama** | Dharma Wijaya |
| **Usia** | 42 tahun |
| **Jabatan** | Senior Procurement Manager |
| **Perusahaan** | PT Energi Konstruksi Nusantara (Kontraktor EPC, 500+ karyawan) |
| **Lokasi** | Jakarta Selatan |
| **Background** | 15 tahun di bidang procurement industri energi. Bertanggung jawab atas pengadaan chemical dan material untuk 5–8 proyek serentak. Budget pengadaan tahunan Rp 15–50 miliar. |
| **Goals** | Menemukan vendor terpercaya yang dapat diverifikasi; mendapatkan penawaran harga dalam 24 jam; memastikan kualitas produk sesuai standar API |
| **Responsibilities** | Evaluasi vendor; perbandingan penawaran; negosiasi harga; approval PO; manajemen kontrak vendor |
| **Challenges** | Deadline proyek yang ketat; vendor yang tidak responsif; dokumentasi produk tidak lengkap; verifikasi kualitas yang memakan waktu |
| **Pain Points** | Website vendor tidak informatif; harus menelepon untuk mendapat spesifikasi dasar; RFQ tidak direspons dalam 24 jam; portofolio proyek tidak dipublikasikan |
| **Digital Behavior** | Desktop-first; Google sebagai titik awal riset vendor; membaca spesifikasi teknis PDF; mengirim email formal; LinkedIn untuk verifikasi background |
| **Preferred Device** | Desktop (MacBook Pro) |
| **Website Expectations** | Spesifikasi produk lengkap dengan parameter teknis; portofolio proyek dengan nama klien dan lokasi; sertifikasi yang dapat diverifikasi; form RFQ yang cepat dan konfirmasi otomatis |
| **Primary CTA** | "Ajukan RFQ" / "Download Datasheet" |
| **Quote** | *"Saya tidak punya waktu untuk menunggu balasan 3 hari. Kalau website mereka bisa kasih semua informasi yang saya butuhkan, itu sudah memenangkan separuh pertarungan."* |

---

### Persona 2 — Rizky Firmansyah | Engineering Manager

| Atribut | Detail |
|---|---|
| **Nama** | Rizky Firmansyah |
| **Usia** | 38 tahun |
| **Jabatan** | Engineering & Technical Manager |
| **Perusahaan** | PT Petroleum Services Indonesia (Drilling Service Company) |
| **Background** | 12 tahun di bidang teknik petroleum. Mengevaluasi spesifikasi teknis chemical drilling dan sparepart. Memiliki pengetahuan mendalam tentang standar API. |
| **Goals** | Mendapatkan spesifikasi teknis yang detail; mengakses COA dan MSDS; membaca artikel teknis industri |
| **Challenges** | Produk tidak memenuhi spesifikasi yang diclaim; tidak ada dokumentasi teknis yang lengkap; sulit mendapatkan COA sebelum pembelian |
| **Pain Points** | Tidak ada datasheet online; harus menunggu sales mengirim dokumen via email; artikel teknis berbahasa Indonesia langka |
| **Digital Behavior** | Desktop-first; membaca whitepapers dan standar API; mengunduh PDF; menggunakan Google Scholar untuk referensi teknis |
| **Preferred Device** | Desktop (Windows workstation) |
| **Website Expectations** | Halaman produk dengan spesifikasi teknis terperinci; download COA/MSDS tanpa hambatan; Knowledge Center dengan artikel teknis drilling |
| **Primary CTA** | "Download Datasheet" / "Baca Artikel Teknis" |

---

### Persona 3 — Andi Kurniawan | Project Manager

| Atribut | Detail |
|---|---|
| **Nama** | Andi Kurniawan |
| **Usia** | 35 tahun |
| **Jabatan** | Project Manager |
| **Perusahaan** | PT Konstruksi Energi Mandiri (EPC Contractor) |
| **Background** | 10 tahun mengelola proyek konstruksi dan commissioning di sektor migas. Bertanggung jawab atas timeline dan anggaran proyek. |
| **Goals** | Menemukan vendor yang terbukti mampu menyelesaikan proyek serupa; menghubungi tim sales untuk kebutuhan urgent |
| **Pain Points** | Tidak ada portofolio proyek yang dapat diverifikasi; sulit menghubungi vendor saat kebutuhan mendadak |
| **Digital Behavior** | Mobile dan desktop; menggunakan WhatsApp untuk komunikasi cepat; website hanya untuk verifikasi awal |
| **Preferred Device** | Mobile (iPhone) + Desktop |
| **Website Expectations** | Portofolio proyek dengan detail scope dan outcome; WhatsApp CTA yang prominent; respons cepat dari tim sales |
| **Primary CTA** | "Hubungi WhatsApp" / "Lihat Proyek" |

---

### Persona 4 — Budi Santoso | Content Editor

| Atribut | Detail |
|---|---|
| **Nama** | Budi Santoso |
| **Usia** | 27 tahun |
| **Jabatan** | Content Editor & Digital Marketing Staff |
| **Perusahaan** | PT Adto Cipta Usaha Mandiri (Internal) |
| **Background** | Lulusan Komunikasi S1. 2 tahun pengalaman di content marketing. Familiar dengan WordPress dan Canva. Tidak memiliki background teknis programming. |
| **Goals** | Mempublikasikan artikel dan berita secara mandiri; mengupdate informasi produk; mengelola galeri foto |
| **Challenges** | CMS yang terlalu teknis; tidak bisa preview tampilan akhir; upload gambar yang lambat; tidak yakin konten sudah SEO-optimized |
| **Pain Points** | Butuh developer untuk perubahan konten sederhana; tidak bisa schedule artikel; format teks berubah setelah dipaste |
| **Digital Behavior** | Desktop-first; terbiasa dengan Google Docs, Notion, dan Canva; menggunakan Chrome |
| **Preferred Device** | Desktop (MacBook Air) |
| **Website Expectations** | Rich text editor yang intuitif seperti Notion; preview real-time; media library yang organized; SEO fields yang jelas dengan panduan |
| **Primary CTA** | "Publish Artikel" / "Preview Konten" |

---

### Persona 5 — Rina Marlina | Sales Manager

| Atribut | Detail |
|---|---|
| **Nama** | Rina Marlina |
| **Usia** | 34 tahun |
| **Jabatan** | Sales & Business Development Manager |
| **Perusahaan** | PT Adto Cipta Usaha Mandiri (Internal) |
| **Background** | 8 tahun di bidang sales industri migas. Mobile-first user. Mengelola 10–15 lead aktif per bulan. |
| **Goals** | Mendapatkan notifikasi RFQ real-time; menindaklanjuti lead secepat mungkin; tidak kehilangan prospek |
| **Challenges** | Lead masuk via email/WA tidak termonitor; tidak ada pipeline visibility; sulit mengukur performa |
| **Pain Points** | Notifikasi RFQ terlambat; tidak tahu siapa yang sudah follow-up lead; tidak ada data konversi |
| **Digital Behavior** | Mobile-first (60% akses via smartphone); intensif menggunakan WhatsApp; cek email reguler |
| **Preferred Device** | Mobile (Samsung Galaxy) |
| **Website Expectations** | Dashboard RFQ yang mobile-friendly; notifikasi push/email instan; ringkasan lead yang mudah dipahami |
| **Primary CTA** | "Lihat RFQ Baru" / "Update Status RFQ" |

---

### Persona 6 — Sari Dewi | Job Seeker

| Atribut | Detail |
|---|---|
| **Nama** | Sari Dewi |
| **Usia** | 23 tahun |
| **Jabatan** | Fresh Graduate Teknik Kimia |
| **Background** | Baru lulus dari ITB jurusan Teknik Kimia. Aktif di LinkedIn. Melamar ke 5–10 perusahaan migas per bulan. |
| **Goals** | Menemukan lowongan yang relevan; melamar dengan proses yang mudah; mendapatkan konfirmasi |
| **Pain Points** | Lowongan tidak diperbarui; form lamaran panjang dan memerlukan banyak data; tidak ada konfirmasi setelah melamar; tidak tahu budaya kerja |
| **Digital Behavior** | Mobile-first (Instagram, LinkedIn, WhatsApp); mencari lowongan via Google dan Jobstreet |
| **Preferred Device** | Mobile (iPhone SE) |
| **Website Expectations** | Daftar lowongan yang jelas dan terkini; form lamaran yang singkat (< 5 menit); upload CV mudah; konfirmasi email otomatis |
| **Primary CTA** | "Lamar Sekarang" |

---

### Persona 7 — Hendra Gunawan | Vendor/Supplier Representative

| Atribut | Detail |
|---|---|
| **Nama** | Hendra Gunawan |
| **Usia** | 45 tahun |
| **Jabatan** | Direktur / Owner CV Kimia Industri Sejahtera |
| **Background** | Pemasok chemical untuk industri manufaktur dan migas skala menengah. Ingin memperluas jaringan klien B2B. |
| **Goals** | Mendaftarkan perusahaan sebagai vendor resmi PT Adto; mendapatkan konfirmasi status verifikasi |
| **Pain Points** | Tidak tahu prosedur yang jelas; tidak ada checklist dokumen; tidak ada status tracking |
| **Digital Behavior** | Desktop-first; menggunakan email untuk komunikasi bisnis formal; familiar dengan pengisian form online |
| **Preferred Device** | Desktop (laptop Windows) |
| **Website Expectations** | Halaman vendor dengan informasi syarat yang jelas; form registrasi yang terstruktur; konfirmasi instan via email |
| **Primary CTA** | "Daftar sebagai Vendor" |

---

### Persona 8 — Reza Pratama | Administrator

| Atribut | Detail |
|---|---|
| **Nama** | Reza Pratama |
| **Usia** | 30 tahun |
| **Jabatan** | Digital Operations Administrator |
| **Perusahaan** | PT Adto Cipta Usaha Mandiri (Internal) |
| **Background** | Background IT ringan; 3 tahun pengalaman sebagai web admin. Tidak bisa coding tapi familiar dengan CMS. |
| **Goals** | Memastikan platform berjalan lancar; mengelola pengguna CMS; memoderasi konten sebelum publish |
| **Pain Points** | Tidak ada audit log yang dapat dibaca; tidak ada notifikasi saat ada issue; manajemen user yang tidak efisien |
| **Digital Behavior** | Desktop-first; power user tools; terbiasa dengan dashboard administratif |
| **Preferred Device** | Desktop |
| **Website Expectations** | Dashboard admin yang komprehensif; user management yang mudah; log aktivitas yang dapat dicari; notifikasi sistem |
| **Primary CTA** | "Kelola Pengguna" / "Review Konten" |

---

## BAB 5 — User Journey {#bab-5}

### 5.1 User Journey — Prospective Customer (Dharma Wijaya)

| Tahap | Entry Point | Motivasi | Actions | Decision | Pain Point | Opportunity | Exit Goal |
|---|---|---|---|---|---|---|---|
| **Discovery** | Google: "vendor bentonite api jakarta" | Butuh vendor chemical untuk proyek Q3 | Klik hasil pencarian organik; buka homepage | "Apakah perusahaan ini relevan?" | Website tidak muncul di Google | SEO kuat + konten blog targetkan keyword | Memutuskan untuk explore lebih |
| **Exploration** | Homepage | Tertarik dengan tampilan profesional | Baca headline; klik Services; pilih Chemical | "Layanan ini sesuai kebutuhan saya?" | Tidak ada detail spesifikasi | Halaman layanan detail dengan parameter teknis | Pindah ke halaman produk |
| **Evaluation** | Products Page | Ingin memverifikasi kualitas produk | Baca spesifikasi Bentonite API; cari COA/MSDS; lihat sertifikasi | "Kualitas sesuai standar API?" | Dokumen teknis tidak tersedia | Download Center; halaman produk dengan link dokumen | Mengunduh datasheet |
| **Validation** | Projects / Case Studies | Ingin bukti pengalaman nyata | Lihat portofolio proyek; filter berdasarkan industri migas | "Mereka sudah pernah kerja di skala ini?" | Portofolio tidak dipublikasikan | Halaman proyek dengan nama klien & hasil | Yakin untuk mengajukan RFQ |
| **Action** | RFQ Form | Siap untuk memulai proses formal | Isi form RFQ; lampirkan spec; submit | "Apakah ini cukup jelas untuk mereka?" | Form terlalu panjang atau membingungkan | Form yang simpel + autofill dari halaman produk | Submit RFQ berhasil |
| **Follow-up** | Email konfirmasi | Menunggu respons | Baca email konfirmasi; catat nomor referensi | "Kapan mereka akan respons?" | Tidak ada SLA yang jelas | Email konfirmasi dengan estimasi waktu respons | Tunggu follow-up dari sales |

---

### 5.2 User Journey — Vendor (Hendra Gunawan)

| Tahap | Entry Point | Motivasi | Actions | Decision | Pain Point | Opportunity | Exit Goal |
|---|---|---|---|---|---|---|---|
| **Awareness** | Referensi dari rekan bisnis | Ingin memperluas jaringan klien B2B | Buka website; lihat homepage | "Ini perusahaan yang legit?" | Tidak tahu harus ke mana | Homepage yang jelas dengan link ke Vendor Portal | Menemukan halaman vendor |
| **Information** | Vendor Registration Page | Ingin memahami persyaratan | Baca persyaratan; lihat kategori vendor yang dibutuhkan; baca checklist dokumen | "Apakah produk/jasa saya relevan?" | Informasi tidak jelas; tidak tahu dokumen apa yang dibutuhkan | Halaman informatif dengan FAQ dan checklist | Memutuskan untuk mendaftar |
| **Registration** | Form Registrasi | Siap mendaftar | Isi form; upload dokumen; submit | "Apakah dokumen saya lengkap?" | Upload dokumen yang lambat atau error | Progress indicator; validasi real-time | Submit berhasil |
| **Confirmation** | Email konfirmasi | Memastikan registrasi diterima | Baca email konfirmasi; catat nomor referensi | "Kapan saya akan dihubungi?" | Tidak ada estimasi waktu | Email dengan SLA verifikasi yang jelas | Menunggu hasil verifikasi |

---

### 5.3 User Journey — Job Seeker (Sari Dewi)

| Tahap | Entry Point | Motivasi | Actions | Decision | Pain Point | Opportunity | Exit Goal |
|---|---|---|---|---|---|---|---|
| **Discovery** | Google Jobs / LinkedIn | Mencari lowongan teknik kimia di migas | Klik link ke Career Page | "Ada lowongan yang relevan?" | Lowongan tidak terindeks Google Jobs | Schema JobPosting untuk SEO | Membuka halaman karir |
| **Exploration** | Career Page | Melihat daftar lowongan | Baca daftar lowongan; filter berdasarkan bidang; baca detail posisi | "Saya qualified untuk ini?" | Deskripsi lowongan tidak jelas | Halaman detail lowongan yang komprehensif | Membuka halaman detail lowongan |
| **Decision** | Job Detail Page | Membaca persyaratan | Baca kualifikasi; baca deskripsi kerja; cari tahu budaya kerja | "Saya mau melamar?" | Tidak tahu budaya kerja perusahaan | Section "Why Work at Adto" dengan foto tim | Memutuskan melamar |
| **Application** | Form Lamaran | Siap melamar | Isi form; upload CV; klik submit | "Apakah semua terisi dengan benar?" | Form terlalu panjang; upload CV gagal | Form 3 field wajib; upload langsung dari HP | Submit lamaran berhasil |
| **Confirmation** | Email konfirmasi | Memastikan lamaran diterima | Baca email konfirmasi; catat nomor referensi | "Kapan akan ada kabar?" | Tidak ada konfirmasi | Email otomatis dalam ≤ 5 menit dengan nomor referensi | Menunggu panggilan |

---

### 5.4 User Journey — Content Editor (Budi Santoso)

| Tahap | Entry Point | Motivasi | Actions | Decision | Pain Point | Opportunity | Exit Goal |
|---|---|---|---|---|---|---|---|
| **Login** | CMS URL | Perlu publish artikel baru | Akses CMS; login dengan email dan password | "Apakah saya bisa masuk?" | Lupa password; session expired | Remember session; password reset yang mudah | Login berhasil |
| **Create** | CMS — Article Editor | Menulis artikel | Buat artikel baru; isi judul, body, kategori, tag, SEO fields | "Format sudah benar?" | Editor yang tidak intuitif; paste dari Word rusak format | Rich text editor WYSIWYG; paste cleanup | Draft tersimpan |
| **Media** | Media Library | Upload gambar untuk artikel | Upload gambar; pilih dari library; insert ke artikel | "Ukuran gambar sudah benar?" | Upload lambat; gambar tidak ter-resize otomatis | Auto-optimize gambar; preview sebelum upload | Gambar berhasil masuk artikel |
| **Preview** | Preview Mode | Memastikan tampilan akhir | Klik preview; cek tampilan desktop dan mobile | "Sudah sesuai tampilan publik?" | Preview tidak mencerminkan tampilan asli | Preview mode identik dengan frontend | Siap submit untuk review |
| **Submit** | Submit for Review | Siap publish | Submit artikel untuk review oleh Administrator | "Artikel sudah sesuai standar?" | Tidak tahu apakah artikel sudah di-review | Notifikasi status review | Artikel tersubmit |
| **Published** | CMS notification | Mendapat notifikasi artikel published | Baca notifikasi; cek artikel live di website | — | — | Email notifikasi saat artikel dipublikasikan | Artikel live di website |

---

### 5.5 User Journey — Administrator (Reza Pratama)

| Tahap | Entry Point | Motivasi | Actions | Decision | Pain Point | Opportunity | Exit Goal |
|---|---|---|---|---|---|---|---|
| **Login** | CMS URL | Rutinitas pengelolaan harian | Login ke CMS | — | — | — | Login berhasil |
| **Review** | Content Queue | Ada konten yang perlu di-review | Cek daftar artikel pending review; baca konten; cek SEO fields | "Konten ini sudah layak publish?" | Tidak ada checklist review yang terstandar | Checklist review otomatis; SEO score indicator | Keputusan approve/reject |
| **User Mgmt** | Users Section | Ada request akun baru | Buat akun untuk user baru; assign role | "Role ini sudah tepat?" | Tidak ada template onboarding user | Role description yang jelas saat assign | Akun user aktif |
| **Monitoring** | Dashboard | Monitoring status platform | Cek RFQ baru; cek lamaran masuk; cek vendor registrasi | "Ada yang butuh tindak lanjut segera?" | Tidak ada notifikasi terpusat | Summary dashboard dengan semua alert | Semua issue tertangani |

---

## BAB 6 — Customer Journey {#bab-6}

### Customer Journey — Prospective Customer ke Long-term Partner

| Tahap | Business Objective | User Objective | Content Needed | Feature Needed | CTA | Success Metric |
|---|---|---|---|---|---|---|
| **Awareness** | Muncul di halaman 1 Google untuk keyword target | Menemukan vendor chemical/sparepart/mobilisasi yang terpercaya | Blog article, Knowledge Center (SEO-optimized), Meta title & description | SEO Platform, sitemap, structured data | "Baca Selengkapnya" | Organic traffic ≥ 500 UV/bulan dalam 6 bulan |
| **Interest** | Membuat pengunjung tertarik untuk explore lebih | Memahami bahwa PT Adto relevan dengan kebutuhan mereka | Homepage (hero, layanan, statistik), Services overview | Homepage CTA, Navigation yang jelas | "Lihat Layanan Kami" | Bounce rate homepage ≤ 55%; session duration ≥ 2 menit |
| **Consideration** | Mempresentasikan kapabilitas secara meyakinkan | Memverifikasi apakah PT Adto capable untuk kebutuhan mereka | Services detail, Products + specs, Case Studies, Team profile | Product catalog, filter, search, download | "Unduh Datasheet" / "Lihat Proyek" | Product page duration ≥ 3 menit; 10+ download/bulan |
| **Evaluation** | Membangun kepercayaan melalui bukti nyata | Membandingkan PT Adto dengan vendor lain | Sertifikasi, legalitas, testimonial, portofolio proyek terukur | Projects gallery, Download Center, About page | "Lihat Portofolio" / "Unduh Company Profile" | Company Profile download ≥ 5/bulan |
| **Request Quotation** | Mengkonversi pengunjung menjadi lead terukur | Mengajukan permintaan penawaran secara formal | RFQ form yang simple, informasi kontak yang jelas | RFQ Platform, form validation, queue notification | "Ajukan RFQ Sekarang" | ≥ 15 RFQ/bulan; form completion rate ≥ 70% |
| **Negotiation** | Mempercepat siklus penjualan | Mendapatkan penawaran formal dan mulai negosiasi | — (offline process) | — | — | Respons sales ≤ 24 jam |
| **Partnership** | Mengkonversi lead menjadi klien aktif | Memulai kerjasama bisnis pertama | — (offline process) | — | — | ≥ 5 kontrak baru dalam 6 bulan pertama |
| **Retention** | Mempertahankan klien untuk repeat order | Menemukan informasi untuk kebutuhan baru dengan mudah | Knowledge Center, produk terbaru, update layanan | Search global, RFQ repeat | "Ajukan RFQ Baru" | Returning visitor rate ≥ 20% |
| **Advocacy** | Menjadikan klien sebagai referrer | Merekomendasikan PT Adto kepada rekan bisnis | Halaman yang mudah dibagikan; konten profesional | Social sharing button, WhatsApp share | — | Referral lead ≥ 20% dari total lead |

---

## BAB 7 — User Task Analysis {#bab-7}

### 7.1 Public User Tasks

| Task ID | Task | User | Halaman | Priority | Complexity |
|---|---|---|---|---|---|
| T-PUB-01 | Mencari informasi layanan perusahaan | USR-P-02, P-03 | Services | P0 | Rendah |
| T-PUB-02 | Melihat detail dan spesifikasi produk | USR-P-02, P-03 | Products | P0 | Sedang |
| T-PUB-03 | Mengunduh datasheet / COA / MSDS produk | USR-P-02, P-03 | Download Center | P0 | Rendah |
| T-PUB-04 | Mengajukan RFQ (Request for Quotation) | USR-P-02, P-03 | RFQ Platform | P0 | Sedang |
| T-PUB-05 | Melihat portofolio proyek | USR-P-02, P-03 | Projects | P1 | Rendah |
| T-PUB-06 | Membaca studi kasus | USR-P-02, P-03 | Case Studies | P1 | Rendah |
| T-PUB-07 | Mencari industri yang dilayani | USR-P-02 | Industries | P1 | Rendah |
| T-PUB-08 | Menghubungi perusahaan via form kontak | USR-P-01, P-02, P-06 | Contact | P0 | Rendah |
| T-PUB-09 | Menghubungi via WhatsApp | USR-P-02, P-03 | Floating WA Button | P0 | Sangat Rendah |
| T-PUB-10 | Mendaftarkan perusahaan sebagai vendor | USR-P-04 | Vendor Registration | P1 | Tinggi |
| T-PUB-11 | Melamar pekerjaan | USR-P-10 | Career | P1 | Sedang |
| T-PUB-12 | Membaca artikel Knowledge Center | USR-P-01, P-02, P-09 | Knowledge Center | P1 | Rendah |
| T-PUB-13 | Membaca berita perusahaan | USR-P-01, P-09 | News | P2 | Rendah |
| T-PUB-14 | Mengunduh Company Profile PDF | USR-P-05, P-06, P-07 | Download Center / About | P1 | Rendah |
| T-PUB-15 | Melihat galeri media | USR-P-01, P-09 | Media Gallery | P2 | Rendah |
| T-PUB-16 | Mencari konten (search global) | USR-P-02, P-03 | Search | P2 | Sedang |
| T-PUB-17 | Melihat FAQ | USR-P-02, P-04 | FAQ | P2 | Rendah |
| T-PUB-18 | Melihat profil perusahaan (About) | USR-P-05, P-06, P-07, P-08 | About | P1 | Rendah |

### 7.2 Internal User Tasks

| Task ID | Task | User | Module CMS | Priority | Complexity |
|---|---|---|---|---|---|
| T-INT-01 | Mempublikasikan artikel / berita baru | USR-I-07, I-03 | CMS Editor | P0 | Sedang |
| T-INT-02 | Mengelola produk (tambah/edit/hapus) | USR-I-07, I-03 | CMS Products | P0 | Sedang |
| T-INT-03 | Mengelola layanan | USR-I-07, I-03 | CMS Services | P0 | Sedang |
| T-INT-04 | Melihat dan mengelola RFQ yang masuk | USR-I-04 | CMS RFQ | P0 | Rendah |
| T-INT-05 | Memverifikasi dan mengelola vendor | USR-I-06 | CMS Vendors | P1 | Sedang |
| T-INT-06 | Mengelola lowongan kerja | USR-I-05 | CMS Jobs | P1 | Rendah |
| T-INT-07 | Mereview lamaran masuk | USR-I-05 | CMS Applications | P1 | Rendah |
| T-INT-08 | Mengunggah dan mengelola media | USR-I-07, I-03 | CMS Media | P0 | Sedang |
| T-INT-09 | Mengelola pengguna CMS | USR-I-01, I-02 | CMS Users | P0 | Sedang |
| T-INT-10 | Mengkonfigurasi SEO per halaman | USR-I-07, I-03 | CMS SEO Fields | P0 | Rendah |
| T-INT-11 | Melihat analytics dan laporan | USR-I-09, I-03 | Analytics Dashboard | P1 | Rendah |
| T-INT-12 | Mengelola pengaturan notifikasi | USR-I-01, I-02 | CMS Settings | P1 | Sedang |
| T-INT-13 | Melakukan backup database | USR-I-10 | Server / Docker | P0 | Tinggi |
| T-INT-14 | Deploy update platform | USR-I-10, I-01 | Server / CI | P0 | Tinggi |
| T-INT-15 | Monitor health sistem | USR-I-10 | Health Dashboard | P0 | Rendah |

---

## BAB 8 — User Needs Mapping {#bab-8}

### 8.1 Functional Needs

| User | Functional Needs |
|---|---|
| USR-P-02 Prospective Customer | Katalog produk dengan filter; form RFQ; download datasheet; melihat portofolio proyek |
| USR-P-04 Vendor | Form registrasi terstruktur; checklist dokumen; status tracking via email |
| USR-P-10 Job Seeker | Daftar lowongan dengan filter; form lamaran sederhana; upload CV; konfirmasi email |
| USR-I-07 Content Editor | Rich text editor; media upload; scheduled publishing; draft/preview mode |
| USR-I-04 Sales | Dashboard RFQ; notifikasi real-time; update status RFQ; mobile access |
| USR-I-05 HR | Manajemen lowongan; dashboard lamaran; download CV; close lowongan otomatis |
| USR-I-06 Procurement | Dashboard vendor; update status verifikasi; download dokumen vendor |
| USR-I-01 Super Admin | User management; system config; audit log; health monitoring |

### 8.2 Information Needs

| User | Information Needed |
|---|---|
| USR-P-02 Prospective Customer | Spesifikasi teknis produk; standar kualitas API; portofolio proyek; sertifikasi; kontak sales |
| USR-P-05 Investor | Profil korporat; struktur organisasi; track record; legalitas |
| USR-P-07 Government | NPWP; NIB; KBLI; sertifikasi; izin usaha |
| USR-P-10 Job Seeker | Deskripsi posisi; kualifikasi minimum; budaya kerja; benefit |
| USR-I-03 Marketing | Analytics traffic; performa konten; keyword ranking; lead source |
| USR-I-09 Management | KPI bisnis; jumlah lead; jumlah RFQ; traffic trend |

### 8.3 Interaction Needs

| User | Interaction Needs |
|---|---|
| USR-P-02 Prospective Customer | Form RFQ yang singkat (< 5 menit); CTA yang jelas di setiap halaman produk; WhatsApp 1-click |
| USR-P-04 Vendor | Form registrasi multi-step yang memandu; upload dokumen dengan progress bar |
| USR-P-10 Job Seeker | Form lamaran 3-5 field; drag-and-drop CV upload; submit satu klik |
| USR-I-07 Content Editor | WYSIWYG editor; drag-and-drop gambar; preview mode toggle |
| USR-I-04 Sales | Dashboard dengan status lead; one-click update status RFQ |

### 8.4 Trust Needs

| User | Trust Needs |
|---|---|
| USR-P-02 Prospective Customer | Sertifikasi API Grade; portofolio proyek dengan nama klien nyata; testimoni; legalitas perusahaan |
| USR-P-04 Vendor | Konfirmasi registrasi otomatis; nomor referensi; SLA verifikasi yang jelas |
| USR-P-05 Investor | Transparansi informasi korporat; profil tim kepemimpinan; track record |
| USR-P-10 Job Seeker | Konfirmasi lamaran otomatis; informasi budaya kerja; profil tim |
| All Public Users | HTTPS; privacy policy; cookie consent; informasi kontak yang jelas |

### 8.5 Accessibility Needs

| Kategori | Requirement |
|---|---|
| Visual | Rasio kontras ≥ 4.5:1; alt text semua gambar informasi; font size minimum 16px |
| Motor | Semua elemen interaktif dapat diakses via keyboard; touch target ≥ 44×44px |
| Cognitive | Label form yang jelas; error message spesifik; navigasi konsisten; breadcrumb |
| Screen Reader | ARIA landmark roles; ARIA label pada form tanpa label visible; skip to main content |
| Zoom | Fungsi penuh pada zoom browser hingga 200% |
| Motion | Animasi dapat dinonaktifkan dengan `prefers-reduced-motion` |

---

## BAB 9 — Pain Point Analysis {#bab-9}

### 9.1 Business Pain

| ID | Pain | User Terdampak | Akar Penyebab | Solusi |
|---|---|---|---|---|
| PP-B-01 | Tidak ada kehadiran digital — klien tidak dapat memverifikasi kredibilitas PT Adto secara online | USR-P-02, P-05, P-06 | Belum ada website | Corporate website dengan profil lengkap, sertifikasi, dan portofolio |
| PP-B-02 | Proses RFQ manual menyebabkan kehilangan lead | USR-P-02, USR-I-04 | Tidak ada sistem RFQ digital | RFQ Platform dengan notifikasi real-time dan dashboard manajemen |
| PP-B-03 | Proses onboarding vendor tidak terstandarisasi | USR-P-04, USR-I-06 | Tidak ada portal vendor | Vendor Registration Portal dengan alur verifikasi terstruktur |
| PP-B-04 | Proses rekrutmen tidak efisien | USR-P-10, USR-I-05 | Tidak ada Career Portal | Career Portal dengan form lamaran digital dan manajemen HR |

### 9.2 Operational Pain

| ID | Pain | User Terdampak | Akar Penyebab | Solusi |
|---|---|---|---|---|
| PP-O-01 | Content Editor bergantung pada developer untuk perubahan konten | USR-I-07, I-03 | Tidak ada CMS | Payload CMS dengan editor intuitif |
| PP-O-02 | Sales tidak mendapatkan notifikasi lead secara real-time | USR-I-04 | Tidak ada sistem notifikasi digital | BullMQ Queue + email notification dalam ≤ 5 menit |
| PP-O-03 | Tidak ada dashboard terpusat untuk monitoring KPI bisnis | USR-I-09, I-02 | Tidak ada platform analitik | Analytics Dashboard terintegrasi GA4 |
| PP-O-04 | HR menerima lamaran melalui berbagai channel yang tidak terorganisir | USR-I-05 | Tidak ada sistem manajemen lamaran | CMS dashboard lamaran per posisi |

### 9.3 Navigation Pain

| ID | Pain | User Terdampak | Solusi |
|---|---|---|---|
| PP-N-01 | Pengunjung tidak tahu harus ke mana setelah landing di homepage | USR-P-01, P-02 | Navigasi yang jelas; CTA yang prominent di hero section |
| PP-N-02 | Sulit menemukan produk spesifik tanpa browsing semua halaman | USR-P-02, P-03 | Global search + filter produk berdasarkan kategori |
| PP-N-03 | Tidak ada breadcrumb — pengguna tidak tahu posisi navigasi mereka | USR-P-02 | Breadcrumb di semua halaman lebih dari 2 level |
| PP-N-04 | Mobile navigation yang tidak optimal | USR-P-10, P-03 | Responsive navbar dengan hamburger menu yang aksesibel |

### 9.4 Conversion Pain

| ID | Pain | User Terdampak | Solusi |
|---|---|---|---|
| PP-C-01 | Form RFQ terlalu panjang menyebabkan abandonment | USR-P-02, P-03 | Form RFQ streamlined dengan field wajib minimal; multi-step jika perlu |
| PP-C-02 | Tidak ada CTA yang jelas setelah membaca halaman produk | USR-P-02 | CTA "Ajukan RFQ" sticky di setiap halaman produk dan layanan |
| PP-C-03 | Download dokumen memerlukan terlalu banyak langkah | USR-P-02, P-07 | Dokumen publik dapat langsung diunduh; dokumen terproteksi form minimal |
| PP-C-04 | Form lamaran panjang menyebabkan kandidat tidak menyelesaikan | USR-P-10 | Form lamaran maksimal 5 field wajib + upload CV |

### 9.5 Trust Pain

| ID | Pain | User Terdampak | Solusi |
|---|---|---|---|
| PP-T-01 | Tidak ada bukti pengalaman nyata (portofolio) | USR-P-02, P-05 | Projects gallery dengan detail klien dan outcome |
| PP-T-02 | Sertifikasi dan legalitas tidak dipublikasikan | USR-P-02, P-07, P-08 | Halaman About dengan seksi legalitas & sertifikasi; Download Center |
| PP-T-03 | Tidak ada testimoni klien | USR-P-02, P-01 | Seksi testimoni di homepage; case studies di halaman proyek |
| PP-T-04 | Tidak ada informasi tentang tim kepemimpinan | USR-P-05, P-06 | Profil tim di halaman About |
| PP-T-05 | Vendor tidak mendapat konfirmasi setelah registrasi | USR-P-04 | Email konfirmasi otomatis dalam ≤ 5 menit dengan nomor referensi |

### 9.6 Technical Pain

| ID | Pain | User Terdampak | Solusi |
|---|---|---|---|
| PP-X-01 | Loading lambat di koneksi mobile | USR-P-10, P-01, P-03 | ISR + CDN + WebP images + lazy loading; LCP ≤ 2,5 detik |
| PP-X-02 | Tampilan tidak optimal di mobile | USR-P-10, P-03 | Mobile-first responsive design; touch target ≥ 44px |
| PP-X-03 | Form error tidak memberikan feedback yang jelas | USR-P-02, P-04, P-10 | Inline validation dengan pesan error spesifik per field |
| PP-X-04 | Upload dokumen gagal tanpa feedback | USR-P-04, P-10 | Progress indicator; validasi format & ukuran sebelum upload |
| PP-X-05 | CMS tidak dapat diakses dari mobile untuk update darurat | USR-I-03, I-04 | Payload CMS responsive; mobile-friendly admin UI |

---

## BAB 10 — UX Goals {#bab-10}

### 10.1 UX Goal Framework

| UX Goal | Target Metrik | Pengukuran |
|---|---|---|
| **Usability** — Pengguna dapat menyelesaikan task utama tanpa kebingungan | Task completion rate ≥ 85% untuk semua critical task | Usability testing dengan 5 pengguna representatif per segment |
| **Readability** — Konten mudah dipahami oleh target audiens B2B industrial | Flesch-Kincaid grade level 10–12 untuk konten teknis; ukuran font body ≥ 16px; line height ≥ 1.5 | Automated readability checker + audit manual |
| **Accessibility** — Website dapat digunakan oleh pengguna dengan kebutuhan aksesibilitas | WCAG 2.1 Level AA; skor Lighthouse Accessibility ≥ 90; zero critical axe violations | Lighthouse audit; axe DevTools; keyboard navigation test |
| **Performance** — Website dimuat cepat di semua perangkat dan koneksi | LCP ≤ 2,5 detik; CLS < 0,1; INP < 200ms; Lighthouse Performance ≥ 85 | Google Search Console; Lighthouse; PageSpeed Insights |
| **Trust** — Pengguna merasa yakin dengan kredibilitas perusahaan | 60% pengguna baru merasa percaya berdasarkan website sebelum menghubungi sales | Exit survey; post-session questionnaire |
| **Consistency** — Seluruh halaman memiliki tampilan dan perilaku yang konsisten | Zero inconsistency report dalam UI audit; design token diimplementasikan 100% | UI consistency audit checklist |
| **Conversion** — Pengunjung terkonversi menjadi lead melalui form | Form completion rate ≥ 70% untuk RFQ; ≥ 70% untuk lamaran | Analytics conversion tracking |
| **Learnability** — Pengguna baru dapat memahami cara menggunakan website dengan cepat | First-time visitor menyelesaikan task utama tanpa panduan dalam ≤ 5 menit | Guerrilla usability test |
| **Efficiency** — Pengguna dapat menyelesaikan task berulang lebih cepat | Repeat visitor menyelesaikan RFQ 40% lebih cepat dari first-time | Time-on-task measurement |
| **Error Prevention** — Sistem mencegah dan memulihkan error dengan baik | Zero frustration-causing error states dalam user testing; 100% error states memiliki recovery path | Error state audit; user testing observation |

### 10.2 UX Principles

Seluruh keputusan desain dan implementasi harus mengikuti prinsip-prinsip berikut:

1. **Corporate, Bukan Playful** — Tampilan mencerminkan industri yang serius (migas, energi). Tidak ada elemen desain yang terlalu kasual.
2. **Information First** — Konten dan informasi diutamakan di atas dekorasi visual.
3. **Clear Hierarchy** — Setiap halaman memiliki satu primary CTA yang jelas dan tidak membingungkan.
4. **Mobile-Ready** — Meskipun mayoritas user desktop, semua fitur harus berfungsi sempurna di mobile.
5. **Speed is UX** — Setiap keputusan teknis yang mempengaruhi performa adalah keputusan UX.
6. **Trust Through Proof** — Setiap klaim dibuktikan dengan data, sertifikasi, atau portofolio.
7. **Minimal Friction** — Setiap langkah tambahan dalam sebuah proses harus dipertanyakan.

---

## BAB 11 — Digital Touchpoint Mapping {#bab-11}

### 11.1 Public User Touchpoint Map

| User | Google | Homepage | About | Services | Products | Projects | Knowledge Center | RFQ | Vendor Reg | Career | Contact | Download |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| USR-P-01 Visitor | ✓ | ✓ | ○ | ○ | — | — | ○ | — | — | — | ○ | — |
| USR-P-02 Prospect | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | ✓ | ✓ |
| USR-P-03 Customer | ✓ | ○ | — | ○ | ✓ | ○ | ✓ | ✓ | — | — | ✓ | ✓ |
| USR-P-04 Vendor | ✓ | ✓ | ○ | — | — | — | — | — | ✓ | — | ○ | — |
| USR-P-05 Investor | ✓ | ✓ | ✓ | ○ | — | ✓ | — | — | — | — | ✓ | ✓ |
| USR-P-06 Partner | ✓ | ✓ | ✓ | ✓ | — | ✓ | — | — | — | — | ✓ | ✓ |
| USR-P-07 Gov | — | — | ✓ | — | — | — | — | — | — | — | ✓ | ✓ |
| USR-P-08 Auditor | — | — | ✓ | — | — | — | — | — | — | — | — | ✓ |
| USR-P-09 Media | ✓ | ○ | ✓ | — | — | — | ○ | — | — | — | ✓ | ✓ |
| USR-P-10 Job Seeker | ✓ | ✓ | ○ | — | — | — | — | — | — | ✓ | — | — |
| USR-P-11 General | ✓ | ✓ | ○ | ○ | — | — | ✓ | — | — | — | — | — |

**Legenda:** ✓ = Touchpoint Utama | ○ = Touchpoint Sekunder | — = Tidak relevan

### 11.2 Internal User Touchpoint Map (CMS)

| User | Login | Dashboard | Articles | Products | Services | RFQ | Vendors | Jobs | Applications | Media | Users | Settings | Analytics |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| USR-I-01 Super Admin | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| USR-I-02 Admin | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ○ | ✓ |
| USR-I-03 Marketing | ✓ | ✓ | ✓ | ○ | ○ | ○ | — | — | — | ✓ | — | — | ✓ |
| USR-I-04 Sales | ✓ | ✓ | — | — | — | ✓ | — | — | — | — | — | — | ○ |
| USR-I-05 HR | ✓ | ✓ | — | — | — | — | — | ✓ | ✓ | — | — | — | ○ |
| USR-I-06 Procurement | ✓ | ✓ | — | — | — | — | ✓ | — | — | — | — | — | — |
| USR-I-07 Content Editor | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | — | — | ✓ | — | — | ○ |
| USR-I-08 Finance | ✓ | ✓ | — | — | — | — | — | — | — | — | — | ○ | ✓ |
| USR-I-09 Management | ✓ | ✓ | — | — | — | ○ | — | — | — | — | — | — | ✓ |
| USR-I-10 IT Admin | ✓ | — | — | — | — | — | — | — | — | — | — | ✓ | ✓ |

---

## BAB 12 — Future User Expansion {#bab-12}

### 12.1 Pengguna Baru pada Customer Portal (v2.0)

| User Baru | Deskripsi | Primary Goal | Module | Auth Required |
|---|---|---|---|---|
| **Registered Customer** | Klien aktif dengan akun di Customer Portal | Melihat riwayat RFQ, status pesanan, dan dokumen proyek | Customer Portal | Ya — email/password |
| **Account Manager** (upgraded Sales) | Sales dengan dashboard klien terdaftar | Mengelola relasi klien aktif secara digital | Customer Portal Admin | Ya — CMS SSO |
| **Customer Portal Admin** | Admin khusus Customer Portal | Mengelola akun dan akses klien | Portal Admin CMS | Ya — Super Admin level |

### 12.2 Pengguna Baru pada Vendor Portal (v2.0)

| User Baru | Deskripsi | Primary Goal | Module | Auth Required |
|---|---|---|---|---|
| **Registered Vendor** | Vendor terverifikasi dengan akun self-service | Update profil, upload dokumen terbaru, melihat status tender | Vendor Portal | Ya — email/password |
| **Vendor Portal Manager** | Procurement dengan akses portal manajemen vendor | Monitor performa vendor, manajemen dokumen | Vendor Portal CMS | Ya — CMS role |

### 12.3 Pengguna Baru pada Mobile App (v3.0)

| User Baru | Deskripsi | Primary Goal | Platform |
|---|---|---|---|
| **Mobile Sales** | Sales yang mengelola lead via mobile app | Push notification RFQ; pipeline mobile | React Native iOS/Android |
| **Mobile Customer** | Klien yang browsing produk dan mengajukan RFQ via app | Akses katalog dan RFQ yang mobile-optimized | React Native iOS/Android |
| **Mobile Admin** | Admin yang melakukan monitoring via mobile | System health check, quick approval | React Native iOS/Android |

### 12.4 Implikasi Arsitektur untuk Future User

| Perubahan | Requirement v1.0 yang perlu disiapkan |
|---|---|
| Authenticated Public User (Customer Portal) | JWT scope yang extensible; user role yang dapat diperluas; API endpoint yang dapat dikonsumsi oleh multiple frontend |
| Vendor self-service | Vendor data model yang extensible di database; API CRUD vendor yang dapat diekspos ke portal |
| Mobile App | RESTful API yang mobile-friendly; push notification infrastructure (FCM ready); API versioning |

---

## Penutup Dokumen

Dokumen Enterprise User Analysis & Experience Mapping ini telah divalidasi untuk konsistensi terhadap:

- **Stakeholder Analysis (SA-ADTO-ENT-001)** — Seluruh user termapping ke stakeholder yang teridentifikasi
- **Business Requirements Specification (BRS-ADTO-ENT-001)** — Semua business objective tercermin dalam user goals
- **SRS (SRS-ADTO-ENT-001)** — User needs dan pain points konsisten dengan functional requirements

Dokumen ini menjadi fondasi resmi untuk:
1. **UI Design** — Persona dan user goals sebagai brief desainer
2. **UX Design** — User journey dan customer journey sebagai blueprint alur interaksi
3. **Information Architecture** — Touchpoint map sebagai basis sitemap dan navigasi
4. **Frontend Development** — Task analysis sebagai checklist feature implementation
5. **Backend Development** — User needs sebagai derivasi API endpoint requirements
6. **CMS Configuration** — Internal user roles sebagai konfigurasi RBAC di Payload CMS
7. **Authentication** — Permission matrix berdasarkan internal user CMS access

---

*UA-ADTO-ENT-001 | Versi 1.0.0 | 13 Juli 2026*  
*PT Adto Cipta Usaha Mandiri — Enterprise Website Platform*  
*"Energi Terpadu, Solusi Mandiri"*
