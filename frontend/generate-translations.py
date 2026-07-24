import json
import os

os.makedirs('frontend/messages', exist_ok=True)

en = {
  "Navbar": {
    "home": "Home",
    "about": "About Us",
    "services": "Expertise",
    "products": "Products",
    "industries": "Industries",
    "portfolio": "Portfolio",
    "projects": "Projects",
    "case_studies": "Case Studies",
    "resources": "Resources",
    "blog": "Insights",
    "news": "News & Media",
    "knowledge_center": "Knowledge Center",
    "media_gallery": "Media Gallery",
    "company": "Company",
    "career": "Careers",
    "contact": "Contact Us",
    "get_quote": "Request Quotation",
    "vendor_registration": "Vendor Registration"
  },
  "Hero": {
    "overline": "PT ADTO Cipta Usaha Mandiri",
    "title": "Pioneering Excellence in Industrial Solutions",
    "description": "A strategic partner delivering integrated industrial capabilities designed to optimize operational efficiency, ensure reliability, and foster sustainable growth.",
    "cta_primary": "Explore Our Expertise",
    "cta_secondary": "Connect with Our Experts"
  },
  "About": {
    "overline": "About Us",
    "title": "Driving Industrial Innovation",
    "description": "We are dedicated to providing world-class industrial solutions that empower businesses to achieve operational excellence and long-term sustainability.",
    "mission": "Our Mission",
    "vision": "Our Vision",
    "hero_title": "Driving Industrial Innovation",
    "hero_desc": "We are dedicated to providing world-class industrial solutions that empower businesses to achieve operational excellence and long-term sustainability.",
    "why_us": "Why Partner with Us"
  },
  "Services": {
    "overline": "Core Capabilities",
    "title": "Comprehensive Industrial Expertise",
    "view_detail": "View Details",
    "learn_more": "Discover More",
    "overview": "Overview",
    "description": "Capability Description",
    "benefits": "Key Advantages",
    "gallery": "Project Gallery",
    "faq": "Frequently Asked Questions",
    "hero_title": "Comprehensive Industrial Expertise",
    "hero_desc": "We offer an extensive portfolio of specialized services engineered to meet the stringent demands of modern industrial sectors.",
    "industrial_supply": "Industrial Supply Chain",
    "project_management": "Project Management",
    "engineering": "Engineering Solutions",
    "logistics": "Heavy Logistics"
  },
  "Projects": {
    "overline": "Our Portfolio",
    "title": "Demonstrated Track Record",
    "technology": "Applied Technologies",
    "timeline": "Project Timeline",
    "result": "Business Impact",
    "hero_title": "Demonstrated Track Record",
    "hero_desc": "Discover our portfolio of successful executions, delivering complex industrial projects with precision, on time, and within budget.",
    "overview": "Executive Summary",
    "challenge": "Business Challenge",
    "approach": "Strategic Approach"
  },
  "Blog": {
    "overline": "Insights & Perspectives",
    "title": "Industry Insights & News",
    "author": "Author",
    "publish_date": "Published On",
    "category": "Category",
    "reading_time": "min read",
    "share": "Share Article",
    "related": "Related Articles",
    "prev": "Previous Article",
    "next": "Next Article",
    "hero_title": "Industry Insights & News",
    "hero_desc": "Stay informed with the latest technological advancements, industry trends, and strategic perspectives from our experts.",
    "newsletter_placeholder": "Enter your corporate email",
    "subscribe": "Subscribe to Newsletter",
    "read_more": "Read Full Article"
  },
  "Career": {
    "overline": "Join Our Organization",
    "title": "Accelerate Your Professional Growth",
    "job_description": "Role Overview",
    "requirements": "Qualifications",
    "benefit": "Compensation & Benefits",
    "location": "Location",
    "employment_type": "Employment Type",
    "apply_button": "Submit Application",
    "hero_title": "Accelerate Your Professional Growth",
    "hero_desc": "Join a dynamic organization of dedicated professionals driving transformation across the industrial landscape.",
    "department": "Department"
  },
  "Contact": {
    "overline": "Get in Touch",
    "title": "Contact Our Team",
    "name": "Full Name",
    "name_placeholder": "Enter your full name",
    "email": "Corporate Email",
    "email_placeholder": "Enter your corporate email address",
    "phone": "Contact Number",
    "phone_placeholder": "Enter your contact number",
    "company": "Company Name",
    "company_placeholder": "Enter your organization's name",
    "message": "Inquiry Details",
    "message_placeholder": "Please provide details regarding your inquiry or project requirements...",
    "submit": "Submit Inquiry",
    "validation": {
      "required": "This field is required.",
      "email": "Please provide a valid email address.",
      "min_length": "Input must contain at least 3 characters."
    },
    "hero_title": "Contact Our Team",
    "hero_desc": "We are available to discuss your industrial requirements. Reach out to our specialists for tailored solutions.",
    "office": "Corporate Headquarters",
    "call_us": "Direct Line",
    "email_us": "Email Inquiry",
    "info_title": "Corporate Information",
    "form_title": "Request a Consultation",
    "form_desc": "We welcome the opportunity to discuss how our expertise can support your strategic objectives.",
    "subjects": {
      "quotation": "Request for Quotation (RFQ)",
      "partnership": "Strategic Partnership",
      "career": "Career Opportunities",
      "other": "Other Inquiries",
      "general": "General Information"
    },
    "form_message": "How may we assist you?",
    "send": "Submit Inquiry",
    "form_name": "Full Name",
    "form_email": "Email Address",
    "form_phone": "Contact Number",
    "form_subject": "Inquiry Type",
    "select_subject": "Select Inquiry Type",
    "errors": {
      "message_min": "Your message must contain at least 10 characters.",
      "email_invalid": "Please provide a valid email address.",
      "subject_required": "Please select an inquiry type.",
      "name_min": "Name must contain at least 2 characters."
    }
  },
  "CTA": {
    "title": "Ready to Optimize Your Operations?",
    "subtitle": "Partner with our experts to unlock greater efficiency and industrial reliability.",
    "button": "Request a Consultation"
  },
  "Partners": {
    "overline": "Strategic Alliances",
    "title": "Trusted by Industry Leaders",
    "hero_title": "Trusted by Industry Leaders",
    "hero_desc": "We are proud to collaborate with leading organizations to deliver exceptional industrial results.",
    "subtitle": "Trusted by Industry Leaders"
  },
  "Footer": {
    "description": "A trusted partner in delivering comprehensive industrial solutions and engineering excellence.",
    "quick_links": "Corporate Links",
    "contact_info": "Contact Information",
    "rights": "All rights reserved.",
    "privacy_policy": "Privacy Policy",
    "terms_of_service": "Terms of Service"
  },
  "NotFound": {
    "title": "Page Not Found",
    "description": "The requested page could not be located on our server.",
    "back_home": "Return to Homepage"
  },
  "Common": {
    "loading": "Processing...",
    "error": "An unexpected error occurred.",
    "success": "Operation completed successfully.",
    "submit": "Submit",
    "cancel": "Cancel",
    "empty": "No records found."
  },
  "SEO": {
    "home_title": "Home | PT ADTO Cipta Usaha Mandiri",
    "home_desc": "A strategic partner delivering integrated industrial capabilities designed to optimize operational efficiency and foster sustainable growth.",
    "about_title": "About Us | PT ADTO Cipta Usaha Mandiri",
    "about_desc": "Discover our commitment to providing world-class industrial solutions and driving operational excellence.",
    "services_title": "Expertise | PT ADTO Cipta Usaha Mandiri",
    "services_desc": "Explore our comprehensive portfolio of specialized industrial services and engineering solutions.",
    "projects_title": "Portfolio | PT ADTO Cipta Usaha Mandiri",
    "projects_desc": "Review our track record of successfully executed complex industrial projects.",
    "blog_title": "Insights & News | PT ADTO Cipta Usaha Mandiri",
    "blog_desc": "Access the latest industry insights, technological advancements, and strategic perspectives.",
    "career_title": "Careers | PT ADTO Cipta Usaha Mandiri",
    "career_desc": "Explore professional opportunities and join a team dedicated to industrial innovation.",
    "contact_title": "Contact Us | PT ADTO Cipta Usaha Mandiri",
    "contact_desc": "Connect with our experts to discuss tailored solutions for your industrial requirements."
  }
}

id_dict = {
  "Navbar": {
    "home": "Beranda",
    "about": "Tentang Kami",
    "services": "Keahlian",
    "products": "Produk",
    "industries": "Sektor Industri",
    "portfolio": "Portofolio",
    "projects": "Proyek",
    "case_studies": "Studi Kasus",
    "resources": "Pusat Sumber Daya",
    "blog": "Wawasan",
    "news": "Berita & Media",
    "knowledge_center": "Pusat Pengetahuan",
    "media_gallery": "Galeri Media",
    "company": "Perusahaan",
    "career": "Karir",
    "contact": "Hubungi Kami",
    "get_quote": "Permintaan Penawaran",
    "vendor_registration": "Registrasi Rekanan"
  },
  "Hero": {
    "overline": "PT ADTO Cipta Usaha Mandiri",
    "title": "Mendorong Kemajuan Industri melalui Solusi Terintegrasi",
    "description": "Mitra strategis terkemuka dalam penyediaan solusi industri komprehensif, memberikan nilai tambah melalui inovasi, efisiensi operasional, dan keandalan tingkat tinggi.",
    "cta_primary": "Jelajahi Keahlian Kami",
    "cta_secondary": "Konsultasikan Kebutuhan Anda"
  },
  "About": {
    "overline": "Tentang Kami",
    "title": "Mewujudkan Keunggulan Industri",
    "description": "Kami berdedikasi untuk menghadirkan solusi industri berstandar global yang memberdayakan perusahaan untuk mencapai keunggulan operasional dan keberlanjutan jangka panjang.",
    "mission": "Misi Kami",
    "vision": "Visi Kami",
    "hero_title": "Mewujudkan Keunggulan Industri",
    "hero_desc": "Kami berdedikasi untuk menghadirkan solusi industri berstandar global yang memberdayakan perusahaan untuk mencapai keunggulan operasional dan keberlanjutan jangka panjang.",
    "why_us": "Keunggulan Kemitraan Kami"
  },
  "Services": {
    "overline": "Keahlian Utama",
    "title": "Solusi Industri Komprehensif",
    "view_detail": "Lihat Rincian",
    "learn_more": "Pelajari Selengkapnya",
    "overview": "Gambaran Umum",
    "description": "Deskripsi Keahlian",
    "benefits": "Keunggulan Utama",
    "gallery": "Galeri Proyek",
    "faq": "Pertanyaan Umum (FAQ)",
    "hero_title": "Solusi Industri Komprehensif",
    "hero_desc": "Kami menawarkan portofolio layanan khusus yang dirancang secara presisi untuk memenuhi standar ketat di berbagai sektor industri modern.",
    "industrial_supply": "Rantai Pasok Industri",
    "project_management": "Manajemen Proyek Terpadu",
    "engineering": "Solusi Rekayasa Keteknikan",
    "logistics": "Logistik Alat Berat"
  },
  "Projects": {
    "overline": "Portofolio Kami",
    "title": "Rekam Jejak Teruji",
    "technology": "Penerapan Teknologi",
    "timeline": "Lini Masa Proyek",
    "result": "Dampak Bisnis",
    "hero_title": "Rekam Jejak Teruji",
    "hero_desc": "Temukan portofolio eksekusi kami yang sukses, menghadirkan proyek industri kompleks dengan presisi, tepat waktu, dan efisiensi anggaran yang optimal.",
    "overview": "Ringkasan Eksekutif",
    "challenge": "Tantangan Bisnis",
    "approach": "Pendekatan Strategis"
  },
  "Blog": {
    "overline": "Wawasan & Perspektif",
    "title": "Wawasan & Berita Industri",
    "author": "Penulis",
    "publish_date": "Tanggal Publikasi",
    "category": "Kategori",
    "reading_time": "mnt baca",
    "share": "Bagikan Artikel",
    "related": "Artikel Terkait",
    "prev": "Artikel Sebelumnya",
    "next": "Artikel Selanjutnya",
    "hero_title": "Wawasan & Berita Industri",
    "hero_desc": "Dapatkan informasi terkini mengenai perkembangan teknologi, tren industri, dan perspektif strategis dari jajaran tenaga ahli kami.",
    "newsletter_placeholder": "Masukkan email perusahaan Anda",
    "subscribe": "Berlangganan Buletin",
    "read_more": "Baca Artikel Lengkap"
  },
  "Career": {
    "overline": "Bergabung Bersama Kami",
    "title": "Akselerasi Pertumbuhan Karir Anda",
    "job_description": "Gambaran Peran",
    "requirements": "Kualifikasi",
    "benefit": "Kompensasi & Tunjangan",
    "location": "Lokasi Penempatan",
    "employment_type": "Status Pekerjaan",
    "apply_button": "Kirim Lamaran",
    "hero_title": "Akselerasi Pertumbuhan Karir Anda",
    "hero_desc": "Bergabunglah dengan organisasi dinamis yang terdiri dari para profesional berdedikasi dalam mendorong transformasi di lanskap industri.",
    "department": "Departemen"
  },
  "Contact": {
    "overline": "Hubungi Kami",
    "title": "Hubungi Tim Ahli Kami",
    "name": "Nama Lengkap",
    "name_placeholder": "Masukkan nama lengkap Anda",
    "email": "Email Perusahaan",
    "email_placeholder": "Masukkan alamat email perusahaan Anda",
    "phone": "Nomor Kontak",
    "phone_placeholder": "Masukkan nomor kontak aktif Anda",
    "company": "Nama Perusahaan",
    "company_placeholder": "Masukkan nama organisasi atau perusahaan Anda",
    "message": "Rincian Permintaan",
    "message_placeholder": "Mohon jelaskan rincian mengenai kebutuhan operasional atau proyek Anda...",
    "submit": "Kirim Permintaan",
    "validation": {
      "required": "Kolom ini wajib diisi.",
      "email": "Mohon masukkan alamat email yang valid.",
      "min_length": "Input harus terdiri dari minimal 3 karakter."
    },
    "hero_title": "Hubungi Tim Ahli Kami",
    "hero_desc": "Kami siap mendiskusikan kebutuhan industri Anda. Hubungi para spesialis kami untuk mendapatkan solusi yang disesuaikan.",
    "office": "Kantor Pusat Korporat",
    "call_us": "Jalur Langsung",
    "email_us": "Pertanyaan via Email",
    "info_title": "Informasi Perusahaan",
    "form_title": "Ajukan Sesi Konsultasi",
    "form_desc": "Kami menyambut baik kesempatan untuk mendiskusikan bagaimana keahlian kami dapat mendukung pencapaian tujuan strategis perusahaan Anda.",
    "subjects": {
      "quotation": "Permintaan Penawaran (RFQ)",
      "partnership": "Kemitraan Strategis",
      "career": "Peluang Karir",
      "other": "Pertanyaan Lainnya",
      "general": "Informasi Umum"
    },
    "form_message": "Bagaimana kami dapat membantu Anda?",
    "send": "Kirim Permintaan",
    "form_name": "Nama Lengkap",
    "form_email": "Alamat Email",
    "form_phone": "Nomor Kontak",
    "form_subject": "Jenis Permintaan",
    "select_subject": "Pilih Jenis Permintaan",
    "errors": {
      "message_min": "Pesan Anda harus terdiri dari minimal 10 karakter.",
      "email_invalid": "Mohon berikan alamat email yang valid.",
      "subject_required": "Mohon pilih jenis permintaan.",
      "name_min": "Nama harus terdiri dari minimal 2 karakter."
    }
  },
  "CTA": {
    "title": "Siap Mengoptimalkan Operasi Anda?",
    "subtitle": "Bermitra dengan tenaga ahli kami untuk mewujudkan tingkat efisiensi dan keandalan industri yang lebih tinggi.",
    "button": "Ajukan Sesi Konsultasi"
  },
  "Partners": {
    "overline": "Aliansi Strategis",
    "title": "Dipercaya oleh Pemimpin Industri",
    "hero_title": "Dipercaya oleh Pemimpin Industri",
    "hero_desc": "Kami bangga dapat berkolaborasi dengan berbagai organisasi terkemuka dalam menghadirkan hasil industri yang luar biasa.",
    "subtitle": "Dipercaya oleh Pemimpin Industri"
  },
  "Footer": {
    "description": "Mitra terpercaya dalam menghadirkan solusi industri terpadu dan keunggulan rekayasa keteknikan.",
    "quick_links": "Tautan Korporat",
    "contact_info": "Informasi Kontak",
    "rights": "Hak cipta dilindungi undang-undang.",
    "privacy_policy": "Kebijakan Privasi",
    "terms_of_service": "Syarat & Ketentuan"
  },
  "NotFound": {
    "title": "Halaman Tidak Ditemukan",
    "description": "Halaman yang Anda minta tidak dapat ditemukan pada server kami.",
    "back_home": "Kembali ke Beranda"
  },
  "Common": {
    "loading": "Memproses...",
    "error": "Terjadi kesalahan sistem.",
    "success": "Operasi berhasil diselesaikan.",
    "submit": "Kirim",
    "cancel": "Batal",
    "empty": "Tidak ada data yang ditemukan."
  },
  "SEO": {
    "home_title": "Beranda | PT ADTO Cipta Usaha Mandiri",
    "home_desc": "Mitra strategis dalam penyediaan solusi industri komprehensif untuk mengoptimalkan efisiensi operasional dan pertumbuhan berkelanjutan.",
    "about_title": "Tentang Kami | PT ADTO Cipta Usaha Mandiri",
    "about_desc": "Pelajari komitmen kami dalam menyediakan solusi industri berstandar global dan mendorong keunggulan operasional.",
    "services_title": "Keahlian | PT ADTO Cipta Usaha Mandiri",
    "services_desc": "Jelajahi portofolio komprehensif kami mengenai layanan industri khusus dan solusi rekayasa keteknikan.",
    "projects_title": "Portofolio | PT ADTO Cipta Usaha Mandiri",
    "projects_desc": "Tinjau rekam jejak kami dalam mengeksekusi proyek-proyek industri yang kompleks dengan sukses.",
    "blog_title": "Wawasan & Berita | PT ADTO Cipta Usaha Mandiri",
    "blog_desc": "Akses wawasan industri terbaru, kemajuan teknologi, dan perspektif strategis dari para ahli kami.",
    "career_title": "Karir | PT ADTO Cipta Usaha Mandiri",
    "career_desc": "Jelajahi peluang profesional dan bergabunglah dengan tim yang berdedikasi pada inovasi industri.",
    "contact_title": "Hubungi Kami | PT ADTO Cipta Usaha Mandiri",
    "contact_desc": "Hubungi para spesialis kami untuk mendiskusikan solusi yang disesuaikan dengan kebutuhan industri Anda."
  }
}

with open('frontend/messages/en.json', 'w', encoding='utf-8') as f:
    json.dump(en, f, indent=2, ensure_ascii=False)

with open('frontend/messages/id.json', 'w', encoding='utf-8') as f:
    json.dump(id_dict, f, indent=2, ensure_ascii=False)

print('Translation files rewritten successfully with professional copywriting!')
