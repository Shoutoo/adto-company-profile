import json
import os

os.makedirs('frontend/messages', exist_ok=True)

en = {
  "Navbar": {
    "home": "Home",
    "about": "About Us",
    "services": "Services",
    "products": "Products",
    "industries": "Industries",
    "projects": "Projects",
    "case_studies": "Case Studies",
    "blog": "Blog",
    "news": "News & Media",
    "knowledge_center": "Knowledge Center",
    "media_gallery": "Media Gallery",
    "career": "Career",
    "contact": "Contact",
    "get_quote": "Get a Quote",
    "vendor_registration": "Vendor Registration"
  },
  "Hero": {
    "overline": "PT ADTO Cipta Usaha Mandiri",
    "title": "Empowering Industries with Reliable Solutions",
    "description": "Leading provider of comprehensive industrial solutions, delivering excellence through innovation, quality, and commitment.",
    "cta_primary": "Discover Our Services",
    "cta_secondary": "Contact Us"
  },
  "About": {
    "title": "About Us",
    "hero_title": "Driving Industrial Excellence",
    "hero_desc": "We are committed to delivering top-tier industrial solutions that drive efficiency, reliability, and sustainable growth for our partners.",
    "mission": "Our Mission",
    "vision": "Our Vision",
    "why_us": "Why Choose Us"
  },
  "Services": {
    "title": "Our Services",
    "hero_title": "Comprehensive Industrial Solutions",
    "hero_desc": "We offer a wide range of services designed to meet the rigorous demands of modern industrial operations.",
    "view_detail": "View Detail",
    "learn_more": "Learn More",
    "overview": "Overview",
    "description": "Service Description",
    "benefits": "Benefits",
    "gallery": "Gallery",
    "faq": "FAQ",
    "industrial_supply": "Industrial Supply",
    "project_management": "Project Management",
    "engineering": "Engineering",
    "logistics": "Logistics"
  },
  "Projects": {
    "title": "Our Portfolio",
    "hero_title": "Successful Project Deliveries",
    "hero_desc": "Explore our track record of excellence in delivering complex industrial projects on time and within budget.",
    "technology": "Technology",
    "timeline": "Timeline",
    "result": "Result",
    "overview": "Project Overview",
    "challenge": "The Challenge",
    "approach": "Our Approach"
  },
  "Blog": {
    "title": "Insights",
    "hero_title": "Industry Insights & News",
    "hero_desc": "Stay updated with the latest trends, technologies, and best practices in the industrial sector.",
    "author": "Author",
    "publish_date": "Publish Date",
    "category": "Category",
    "reading_time": "min read",
    "share": "Share",
    "related": "Related Articles",
    "prev": "Previous",
    "next": "Next",
    "read_more": "Read More"
  },
  "Career": {
    "title": "Career",
    "hero_title": "Build Your Career With Us",
    "hero_desc": "Join a team of passionate professionals dedicated to shaping the future of industrial solutions.",
    "job_description": "Job Description",
    "requirements": "Requirements",
    "benefit": "Benefits",
    "location": "Location",
    "employment_type": "Employment Type",
    "apply_button": "Apply Now",
    "department": "Department"
  },
  "Contact": {
    "title": "Contact Us",
    "hero_title": "Get in Touch",
    "hero_desc": "We're here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.",
    "name": "Full Name",
    "name_placeholder": "Enter your full name",
    "email": "Email Address",
    "email_placeholder": "Enter your email",
    "phone": "Phone Number",
    "phone_placeholder": "Enter your phone number",
    "company": "Company Name",
    "company_placeholder": "Enter your company name",
    "message": "Your Message",
    "message_placeholder": "How can we help you?",
    "submit": "Send Message",
    "validation": {
      "required": "This field is required",
      "email": "Please enter a valid email",
      "min_length": "Must be at least 3 characters"
    },
    "office": "Head Office",
    "call_us": "Call Us",
    "email_us": "Email Us"
  },
  "CTA": {
    "title": "Ready to Elevate Your Business?",
    "subtitle": "Partner with us to unlock your full industrial potential.",
    "button": "Get in Touch"
  },
  "Partners": {
    "title": "Valued Partners",
    "subtitle": "Trusted By National Leaders"
  },
  "Footer": {
    "description": "Leading provider of comprehensive industrial solutions.",
    "quick_links": "Quick Links",
    "contact_info": "Contact Info",
    "rights": "All rights reserved.",
    "privacy_policy": "Privacy Policy",
    "terms_of_service": "Terms of Service"
  },
  "NotFound": {
    "title": "Page Not Found",
    "description": "The page you are looking for does not exist or has been moved.",
    "back_home": "Back to Home"
  },
  "Common": {
    "loading": "Loading...",
    "error": "An error occurred",
    "success": "Success",
    "submit": "Submit",
    "cancel": "Cancel",
    "empty": "No data found."
  },
  "SEO": {
    "home_title": "Home | PT ADTO Cipta Usaha Mandiri",
    "home_desc": "Leading provider of comprehensive industrial solutions, delivering excellence through innovation, quality, and commitment.",
    "about_title": "About Us | PT ADTO Cipta Usaha Mandiri",
    "about_desc": "Learn more about our mission, vision, and commitment to driving industrial excellence.",
    "services_title": "Our Services | PT ADTO Cipta Usaha Mandiri",
    "services_desc": "Explore our wide range of comprehensive industrial solutions and services.",
    "projects_title": "Projects | PT ADTO Cipta Usaha Mandiri",
    "projects_desc": "Discover our successful project deliveries and track record of excellence.",
    "blog_title": "Blog & Insights | PT ADTO Cipta Usaha Mandiri",
    "blog_desc": "Read the latest industry insights, news, and best practices from our experts.",
    "career_title": "Career | PT ADTO Cipta Usaha Mandiri",
    "career_desc": "Join our dynamic team and build a rewarding career in the industrial sector.",
    "contact_title": "Contact Us | PT ADTO Cipta Usaha Mandiri",
    "contact_desc": "Get in touch with us for inquiries, partnerships, or support."
  }
}

id_dict = {
  "Navbar": {
    "home": "Beranda",
    "about": "Tentang Kami",
    "services": "Layanan",
    "products": "Produk",
    "industries": "Industri",
    "projects": "Proyek",
    "case_studies": "Studi Kasus",
    "blog": "Blog",
    "news": "Berita & Media",
    "knowledge_center": "Pusat Pengetahuan",
    "media_gallery": "Galeri Media",
    "career": "Karir",
    "contact": "Kontak",
    "get_quote": "Dapatkan Penawaran",
    "vendor_registration": "Registrasi Vendor"
  },
  "Hero": {
    "overline": "PT ADTO Cipta Usaha Mandiri",
    "title": "Memberdayakan Industri dengan Solusi Andal",
    "description": "Penyedia solusi industri komprehensif terkemuka, menghadirkan keunggulan melalui inovasi, kualitas, dan komitmen.",
    "cta_primary": "Temukan Layanan Kami",
    "cta_secondary": "Hubungi Kami"
  },
  "About": {
    "title": "Tentang Kami",
    "hero_title": "Mendorong Keunggulan Industri",
    "hero_desc": "Kami berkomitmen untuk memberikan solusi industri tingkat atas yang mendorong efisiensi, keandalan, dan pertumbuhan berkelanjutan bagi mitra kami.",
    "mission": "Misi Kami",
    "vision": "Visi Kami",
    "why_us": "Mengapa Memilih Kami"
  },
  "Services": {
    "title": "Layanan Kami",
    "hero_title": "Solusi Industri Komprehensif",
    "hero_desc": "Kami menawarkan berbagai layanan yang dirancang untuk memenuhi tuntutan ketat operasi industri modern.",
    "view_detail": "Lihat Detail",
    "learn_more": "Pelajari Lebih Lanjut",
    "overview": "Gambaran Umum",
    "description": "Deskripsi Layanan",
    "benefits": "Keuntungan",
    "gallery": "Galeri",
    "faq": "FAQ",
    "industrial_supply": "Pasokan Industri",
    "project_management": "Manajemen Proyek",
    "engineering": "Rekayasa (Engineering)",
    "logistics": "Logistik"
  },
  "Projects": {
    "title": "Portofolio Kami",
    "hero_title": "Pengiriman Proyek yang Sukses",
    "hero_desc": "Jelajahi rekam jejak keunggulan kami dalam menyelesaikan proyek industri yang kompleks tepat waktu dan sesuai anggaran.",
    "technology": "Teknologi",
    "timeline": "Lini Masa",
    "result": "Hasil",
    "overview": "Gambaran Proyek",
    "challenge": "Tantangan",
    "approach": "Pendekatan Kami"
  },
  "Blog": {
    "title": "Wawasan",
    "hero_title": "Wawasan & Berita Industri",
    "hero_desc": "Tetap up-to-date dengan tren, teknologi, dan praktik terbaik terbaru di sektor industri.",
    "author": "Penulis",
    "publish_date": "Tanggal Rilis",
    "category": "Kategori",
    "reading_time": "mnt baca",
    "share": "Bagikan",
    "related": "Artikel Terkait",
    "prev": "Sebelumnya",
    "next": "Selanjutnya",
    "read_more": "Baca Selengkapnya"
  },
  "Career": {
    "title": "Karir",
    "hero_title": "Bangun Karir Anda Bersama Kami",
    "hero_desc": "Bergabunglah dengan tim profesional yang berdedikasi untuk membentuk masa depan solusi industri.",
    "job_description": "Deskripsi Pekerjaan",
    "requirements": "Persyaratan",
    "benefit": "Keuntungan",
    "location": "Lokasi",
    "employment_type": "Tipe Pekerjaan",
    "apply_button": "Lamar Sekarang",
    "department": "Departemen"
  },
  "Contact": {
    "title": "Hubungi Kami",
    "hero_title": "Mari Berhubungan",
    "hero_desc": "Kami di sini untuk menjawab pertanyaan Anda. Hubungi kami dan kami akan membalas secepat mungkin.",
    "name": "Nama Lengkap",
    "name_placeholder": "Masukkan nama lengkap Anda",
    "email": "Alamat Email",
    "email_placeholder": "Masukkan email Anda",
    "phone": "Nomor Telepon",
    "phone_placeholder": "Masukkan nomor telepon Anda",
    "company": "Nama Perusahaan",
    "company_placeholder": "Masukkan nama perusahaan Anda",
    "message": "Pesan Anda",
    "message_placeholder": "Bagaimana kami dapat membantu Anda?",
    "submit": "Kirim Pesan",
    "validation": {
      "required": "Kolom ini wajib diisi",
      "email": "Masukkan email yang valid",
      "min_length": "Minimal 3 karakter"
    },
    "office": "Kantor Pusat",
    "call_us": "Hubungi Kami",
    "email_us": "Email Kami"
  },
  "CTA": {
    "title": "Siap Meningkatkan Bisnis Anda?",
    "subtitle": "Bermitra dengan kami untuk membuka potensi industri Anda sepenuhnya.",
    "button": "Hubungi Kami Sekarang"
  },
  "Partners": {
    "title": "Mitra Berharga",
    "subtitle": "Dipercaya Oleh Pemimpin Nasional"
  },
  "Footer": {
    "description": "Penyedia solusi industri komprehensif terkemuka.",
    "quick_links": "Tautan Cepat",
    "contact_info": "Info Kontak",
    "rights": "Hak cipta dilindungi undang-undang.",
    "privacy_policy": "Kebijakan Privasi",
    "terms_of_service": "Syarat Layanan"
  },
  "NotFound": {
    "title": "Halaman Tidak Ditemukan",
    "description": "Halaman yang Anda cari tidak ada atau telah dipindahkan.",
    "back_home": "Kembali ke Beranda"
  },
  "Common": {
    "loading": "Memuat...",
    "error": "Terjadi kesalahan",
    "success": "Berhasil",
    "submit": "Kirim",
    "cancel": "Batal",
    "empty": "Data tidak ditemukan."
  },
  "SEO": {
    "home_title": "Beranda | PT ADTO Cipta Usaha Mandiri",
    "home_desc": "Penyedia solusi industri komprehensif terkemuka, menghadirkan keunggulan melalui inovasi, kualitas, dan komitmen.",
    "about_title": "Tentang Kami | PT ADTO Cipta Usaha Mandiri",
    "about_desc": "Pelajari lebih lanjut tentang misi, visi, dan komitmen kami untuk mendorong keunggulan industri.",
    "services_title": "Layanan Kami | PT ADTO Cipta Usaha Mandiri",
    "services_desc": "Jelajahi berbagai solusi dan layanan industri komprehensif kami.",
    "projects_title": "Proyek | PT ADTO Cipta Usaha Mandiri",
    "projects_desc": "Temukan pengiriman proyek kami yang sukses dan rekam jejak keunggulan kami.",
    "blog_title": "Blog & Wawasan | PT ADTO Cipta Usaha Mandiri",
    "blog_desc": "Baca wawasan industri, berita, dan praktik terbaik terbaru dari para ahli kami.",
    "career_title": "Karir | PT ADTO Cipta Usaha Mandiri",
    "career_desc": "Bergabunglah dengan tim dinamis kami dan bangun karir yang memuaskan di sektor industri.",
    "contact_title": "Hubungi Kami | PT ADTO Cipta Usaha Mandiri",
    "contact_desc": "Hubungi kami untuk pertanyaan, kemitraan, atau dukungan."
  }
}

with open('frontend/messages/en.json', 'w') as f:
    json.dump(en, f, indent=2)

with open('frontend/messages/id.json', 'w') as f:
    json.dump(id_dict, f, indent=2)

print('Translation files expanded successfully!')
