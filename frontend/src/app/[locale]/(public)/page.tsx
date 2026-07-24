import Image from 'next/image';
import { Link } from '@/i18n/routing';

import {
  Shield,
  Zap,
  Users,
  Target,
  ArrowRight,
  Wrench,
  Truck,
  Star,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';

import { CtaSection } from '@/components/molecules/cta-section';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants/routes.constants';
import { PAGE_SEO } from '@/lib/constants/seo.constants';
import { generateMetadata as genMeta } from '@/lib/utils/seo';

import type { Metadata } from 'next';

export const metadata: Metadata = PAGE_SEO.HOME
  ? genMeta(PAGE_SEO.HOME)
  : { title: 'PT Adto Cipta Usaha Mandiri' };

const SERVICES = [
  {
    icon: Zap,
    image: '/images/service_chemical_1784816687085.png',
    title: 'Chemical Drilling & Industrial',
    description:
      'Bentonite, Barite, Caustic Soda, Polymer, dll. API Grade & Industrial Grade. Ready stock Depok.',
  },
  {
    icon: Wrench,
    image: '/images/service_mechanical_1784816644706.png',
    title: 'Sparepart Alat Berat & Pump',
    description: 'Supply sparepart Caterpillar, Komatsu, pompa Schlumberger. Pengadaan cepat untuk unit breakdown.',
  },
  {
    icon: Truck,
    image: '/images/service_heavy_1784816700775.png',
    title: 'Mobilisasi & Transportasi',
    description: 'Armada truk tangki, tronton, lowbed. Handle pengiriman chemical & alat berat ke remote area. GPS tracking 24 jam.',
  },
];

const STATS = [
  { value: '< 24h', label: 'Max Delivery Time' },
  { value: '100%', label: 'Quality Assurance' },
  { value: '0', label: 'Zero Defect Policy' },
  { value: '24/7', label: 'GPS Tracking' },
];

const PROJECTS = [
  { title: 'Pengadaan Bentonite API Grade', category: 'Chemical Drilling', year: '2026' },
  { title: 'Mobilisasi Alat Berat ke Site Cepu', category: 'Transportasi', year: '2026' },
  { title: 'Supply Sparepart Pompa Schlumberger', category: 'Industrial Supply', year: '2026' },
];

const NEWS = [
  {
    title: 'Penerapan ISO 45001 & Sistem Manajemen K3LL',
    date: 'Jul 15, 2026',
    category: 'Corporate',
  },
  {
    title: 'Restock 50 Ton Bentonite API Grade di Gudang Depok',
    date: 'Jul 05, 2026',
    category: 'Supply Chain',
  },
  {
    title: 'Peresmian Armada Truk Tangki Terbaru',
    date: 'Jun 20, 2026',
    category: 'Logistik',
  },
];

const TIMELINE = [
  {
    year: 'Q1 2026',
    title: 'Penetrasi Pasar B2B',
    desc: 'Meloloskan legalitas ke dalam >20 daftar registrasi pasokan vendor korporat besar.',
  },
  {
    year: 'Q3 2026',
    title: 'Otomasi Logistik IoT',
    desc: 'Optimalisasi biaya dan pelacakan unit pasokan harian termonitor real-time via RFID.',
  },
  {
    year: 'Q1 2027',
    title: 'Ekspansi Fasilitas',
    desc: 'Akuisisi fasilitas gudang independen permanen untuk menjamin ketersediaan material.',
  },
  {
    year: 'Q3 2027',
    title: 'Tier-1 Supplier',
    desc: 'Mengikat principal mancanegara dalam pakta sole-distributor eksklusif.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────── */}
      <HeroSection
        actions={[
          { label: 'Explore Capabilities', href: ROUTES.SERVICES, variant: 'brand' },
          { label: 'Company Profile', href: ROUTES.ABOUT, variant: 'outline' },
        ]}
        align="left"
        backgroundVariant="dark"
        description="Mitra strategis terdepan berskala nasional dalam penyediaan kebutuhan industri dan manajemen rantai pasok, mengedepankan presisi, efisiensi, dan keandalan operasional."
        overline="PT Adto Cipta Usaha Mandiri"
        size="lg"
        title="Energi Terpadu."
        titleHighlight="Solusi Mandiri."
        imageUrl="/images/hero_corporate_1784816610450.png"
      />

      {/* ─── Statistics Bar ───────────────────────── */}
      <section
        className="relative overflow-hidden border-b border-[#E8EDF2] py-12"
        style={{ background: 'linear-gradient(135deg, #F0F5FA 0%, #EBF1F7 100%)' }}
      >
        {/* Subtle dots pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(53,85,122,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Ambient glow left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-0 h-full w-64 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at left center, rgba(53,85,122,0.3) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        <div className="container-page relative z-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="group relative pl-0 text-center md:text-left"
              >
                {/* Vertical accent line */}
                {i > 0 && (
                  <div
                    className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 md:block"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(53,85,122,0.2), transparent)' }}
                  />
                )}
                <p
                  className="font-heading text-4xl font-bold tracking-tight md:text-5xl"
                  style={{ color: '#35557A' }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Preview ────────────────────────── */}
      <SectionWrapper
        header={{
          overline: 'Corporate Overview',
          title: 'Trusted Partner for Your Business',
        }}
      >
        <div className="mt-8 grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-foreground mb-6 font-heading text-2xl font-bold leading-tight">
              One-stop solution untuk Chemical, Sparepart, dan Mobilisasi operasional industri berat Anda.
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              PT Adto Cipta Usaha Mandiri adalah perusahaan penyedia solusi terintegrasi untuk industri migas & pertambangan. Berbasis di Depok, kami fokus pada kecepatan respon & ketepatan spesifikasi untuk operasional di Jabodetabek & Jawa, memastikan no downtime bagi project Anda.
            </p>
            <Button
              asChild
              className="rounded-full border-brand-600 text-brand-600 text-xs uppercase tracking-widest transition-all duration-300 hover:bg-brand-600 hover:text-white hover:shadow-[0_4px_16px_rgba(53,85,122,0.25)] hover:-translate-y-0.5"
              variant="outline"
            >
              <Link href={ROUTES.ABOUT}>
                Discover Our Heritage <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                icon: Shield,
                title: 'Tim Berpengalaman',
                desc: 'Didukung oleh tim ex-lapangan yang mengerti tantangan operasional Anda.',
              },
              {
                icon: Zap,
                title: 'Respon <24 Jam',
                desc: 'Pengiriman dan dukungan teknis super cepat untuk area Jabodetabek.',
              },
              {
                icon: Users,
                title: 'One Stop Solution',
                desc: 'Chemical, Sparepart, hingga Mobilisasi tersedia dalam satu pintu.',
              },
              {
                icon: Target,
                title: 'Harga Kompetitif',
                desc: 'Efisiensi biaya (cost saving) tanpa mengorbankan kualitas dan keamanan.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="surface-card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(53,85,122,0.18)] hover:shadow-card-hover"
              >
                {/* Subtle corner accent */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 h-16 w-16 opacity-30"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(53,85,122,0.08) 0%, transparent 70%)',
                  }}
                />
                {/* Icon box */}
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px] transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(145deg, #EBF2F9, #DDEAF5)',
                    border: '1px solid rgba(53,85,122,0.12)',
                  }}
                >
                  <item.icon className="h-5 w-5" strokeWidth={1.5} style={{ color: '#35557A' }} />
                </div>
                <h4 className="text-foreground mb-2 text-sm font-bold uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Services Preview ─────────────────────── */}
      <SectionWrapper
        background="alt"
        header={{
          overline: 'Our Expertise',
          title: 'Comprehensive Solutions',
        }}
      >
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="surface-card group relative flex flex-col overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(53,85,122,0.15)] hover:shadow-card-hover"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F5C]/80 to-transparent opacity-50" />
                {/* Number accent */}
                <div
                  className="absolute right-4 top-4 font-heading text-5xl font-bold leading-none text-white opacity-20"
                  aria-hidden="true"
                >
                  {String(SERVICES.indexOf(service) + 1).padStart(2, '0')}
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-8 pt-4">
                {/* Icon box with gradient */}
                <div
                  className="-mt-12 mb-4 flex h-14 w-14 items-center justify-center rounded-[14px] bg-white transition-all duration-300 group-hover:scale-110"
                  style={{
                    border: '1px solid rgba(53,85,122,0.14)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  }}
                >
                  <service.icon
                    className="h-6 w-6 transition-colors duration-300"
                    strokeWidth={1.5}
                    style={{ color: '#35557A' }}
                  />
                </div>
                <h3
                  className="text-foreground mb-3 font-heading text-lg font-bold uppercase tracking-wide"
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-all duration-200"
                  href={ROUTES.SERVICES}
                  style={{ color: '#35557A' }}
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── Products & Projects Preview ──────────── */}
      <SectionWrapper
        header={{
          overline: 'Portfolio',
          title: 'Delivering National Impact',
        }}
      >
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Projects */}
          <div className="space-y-0">
            <h3 className="mb-8 font-heading text-xl font-bold uppercase tracking-wider">
              Featured Projects
            </h3>
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="group cursor-pointer border-b py-6 transition-all duration-250 hover:border-[rgba(53,85,122,0.25)] hover:pl-2"
                style={{
                  borderColor: 'rgba(53,85,122,0.10)',
                }}
              >
                <div className="mb-2 flex items-end justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#35557A' }}>
                    {project.category}
                  </span>
                  <span className="text-muted-foreground font-mono text-xs">{project.year}</span>
                </div>
                <h4 className="text-foreground text-lg font-semibold transition-colors group-hover:text-brand-600">
                  {project.title}
                </h4>
              </div>
            ))}
            <div className="pt-6">
              <Button
                asChild
                className="h-auto rounded-full p-0 text-xs font-bold uppercase tracking-widest"
                style={{ color: '#35557A' }}
                variant="link"
              >
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Products/Capabilities Block — premium dark */}
          <div
            className="relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-[24px] p-10 md:p-14"
            style={{
              background: 'linear-gradient(145deg, #0F2D52 0%, #1C2C40 60%, #121C29 100%)',
            }}
          >
            {/* Subtle mesh glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 80% 60% at 15% 20%, rgba(53,85,122,0.4) 0%, transparent 60%)',
              }}
            />
            {/* Orange accent orb */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-48 w-48"
              style={{
                background: 'radial-gradient(circle, rgba(245,130,32,0.15) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />
            {/* Grid pattern */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            {/* Accent line top */}
            <div
              aria-hidden="true"
              className="absolute left-10 right-10 top-0 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(245,130,32,0.4), transparent)',
              }}
            />
            <div className="relative z-10">
              <h3 className="mb-6 font-heading text-xl font-bold uppercase tracking-wider text-white">
                Industrial Products & Supply
              </h3>
              <p className="mb-8 max-w-md leading-relaxed text-gray-400">
                Kami mensuplai material bahan kimia industri (chemical), suku cadang mekanikal/elektrikal (sparepart), serta dukungan armada angkutan berat terkalibrasi.
              </p>
              <ul className="mb-10 space-y-3">
                {[
                  'Bentonite & Barite API Grade',
                  'Sparepart Pompa Schlumberger',
                  'Armada Truk Tangki & Lowbed',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                    <div
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #35557A, #F58220)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-10">
              <Button
                asChild
                className="w-fit rounded-full border-white/25 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-brand-950 hover:shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
                variant="outline"
              >
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Timeline ─────────────────────────────── */}
      <SectionWrapper background="alt" padding="lg">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span
                className="inline-block h-[2px] w-7 rounded-full"
                style={{ background: 'linear-gradient(90deg, #35557A, #F58220)' }}
              />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: '#35557A' }}>
                Our Journey
              </p>
            </div>
            <h2 className="text-foreground font-heading text-3xl font-bold">A Decade of Growth</h2>
          </div>
          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-3">
            {/* Connecting line */}
            <div
              className="absolute left-0 right-0 top-[5px] hidden h-px md:block"
              style={{ background: 'linear-gradient(90deg, rgba(53,85,122,0.15), rgba(53,85,122,0.30), rgba(53,85,122,0.15))' }}
            />
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative z-10">
                {/* Timeline dot — circular, gradient */}
                <div
                  className="mb-6 h-[11px] w-[11px] rounded-full ring-2 ring-white ring-offset-1"
                  style={{
                    background: 'linear-gradient(135deg, #35557A, #F58220)',
                    boxShadow: '0 0 8px rgba(53,85,122,0.3)',
                  }}
                />
                <h4 className="text-foreground mb-2 font-heading text-2xl font-bold">
                  {item.year}
                </h4>
                <p className="mb-3 text-sm font-bold uppercase tracking-wider">{item.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Clients Trust ────────────────────────── */}
      <SectionWrapper
        header={{
          overline: 'Valued Partners',
          title: 'Trusted By National Leaders',
        }}
        padding="lg"
      >
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {[
            { name: 'Pertamina', src: '/images/logos/pertamina.svg' },
            { name: 'PLN', src: '/images/logos/pln.svg' },
            { name: 'Telkom', src: '/images/logos/telkom.svg' },
            { name: 'Astra', src: '/images/logos/astra.svg' },
            { name: 'Semen Indonesia', src: '/images/logos/semen-indonesia.svg' },
            { name: 'Wijaya Karya', src: '/images/logos/wika.svg' },
            { name: 'Hutama Karya', src: '/images/logos/hutama-karya.svg' },
            { name: 'PP Properti', src: '/images/logos/pp.png' },
          ].map((logo) => (
            <div
              key={logo.name}
              className="group relative flex h-24 w-36 items-center justify-center rounded-2xl border border-border/50 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:w-44 md:w-52"
            >
              <div className="relative h-full w-full opacity-50 grayscale transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
                />
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── News Preview & Testimonials ──────────── */}
      <SectionWrapper background="alt">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* News */}
          <div className="lg:col-span-7">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2.5">
                  <span
                    className="inline-block h-[2px] w-7 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #35557A, #F58220)' }}
                  />
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: '#35557A' }}>
                    Media Center
                  </p>
                </div>
                <h2 className="text-foreground font-heading text-3xl font-bold">Latest Updates</h2>
              </div>
              <Button
                asChild
                className="text-foreground hidden h-auto p-0 text-xs font-bold uppercase tracking-widest sm:inline-flex"
                variant="link"
              >
                <Link href="/news">
                  All News <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
            <div className="space-y-8">
              {NEWS.map((item) => (
                <div
                  key={item.title}
                  className="group cursor-pointer border-b pb-8 transition-all duration-250"
                  style={{
                    borderColor: 'rgba(53,85,122,0.10)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 3fr',
                    gap: '1.5rem',
                  }}
                >
                  <div className="text-muted-foreground flex flex-col justify-start pt-1 font-mono text-sm">
                    <span>{item.date}</span>
                    <span
                      className="mt-1 text-xs uppercase tracking-widest"
                      style={{ color: '#35557A' }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-heading text-xl font-bold leading-tight transition-colors group-hover:text-brand-600">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial card — premium elevated */}
          <div
            className="relative flex flex-col justify-center overflow-hidden rounded-[24px] bg-white p-10 lg:col-span-5"
            style={{
              border: '1px solid rgba(53,85,122,0.10)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05), 0 16px 40px rgba(53,85,122,0.08)',
            }}
          >
            {/* Background accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 80% 60% at 90% 10%, rgba(53,85,122,0.04) 0%, transparent 70%)',
              }}
            />
            {/* Large quotation mark */}
            <div
              className="absolute right-8 top-6 font-serif text-8xl leading-none"
              style={{ color: '#35557A', opacity: 0.07 }}
              aria-hidden="true"
            >
              &quot;
            </div>
            {/* Stars */}
            <div className="relative z-10 mb-6 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" fill="#F58220" style={{ color: '#F58220' }} />
              ))}
            </div>
            {/* Quote text */}
            <blockquote
              className="relative z-10 mb-8 text-lg font-medium leading-loose text-foreground"
            >
              &ldquo;ADTO sangat bisa diandalkan. Kecepatan respon dan komitmen kualitas mereka dalam menyediakan chemical drilling sangat membantu mencegah NPT (Non-Productive Time) di site kami.&rdquo;
            </blockquote>
            {/* Divider */}
            <div
              className="relative z-10 mb-5 h-px w-12"
              style={{ background: 'linear-gradient(90deg, #35557A, #F58220)' }}
            />
            {/* Attribution */}
            <div className="relative z-10">
              <p className="text-foreground mb-1 text-sm font-bold uppercase tracking-widest">
                Procurement Manager
              </p>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">
                Leading EPC Company
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Contact Info Strip ───────────────────── */}
      <section
        className="border-t py-16"
        style={{ borderColor: 'rgba(53,85,122,0.08)' }}
      >
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            {[
              { icon: MapPin, label: 'Head Office', value: 'Jakarta, Indonesia' },
              { icon: Phone, label: 'Call Center', value: '+62 21 1234 5678', href: 'tel:+622112345678' },
              { icon: Mail, label: 'Email Inquiry', value: 'info@adtocipta.co.id', href: 'mailto:info@adtocipta.co.id' },
            ].map((item, idx) => (
              <div
                key={item.label}
                className="group relative flex flex-col items-center pt-8 md:pt-0"
              >
                {/* Vertical divider for md+ */}
                {idx > 0 && (
                  <div
                    className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 md:block"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(53,85,122,0.15), transparent)' }}
                  />
                )}
                {/* Icon container */}
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_4px_16px_rgba(53,85,122,0.15)]"
                  style={{
                    background: 'linear-gradient(145deg, #EBF2F9, #D8EAF5)',
                    border: '1px solid rgba(53,85,122,0.12)',
                  }}
                >
                  <item.icon className="h-5 w-5" strokeWidth={1.5} style={{ color: '#35557A' }} />
                </div>
                <h4 className="mb-2 text-xs font-bold uppercase tracking-widest">{item.label}</h4>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-muted-foreground text-sm transition-colors hover:text-brand-600"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────── */}
      <CtaSection
        description="Partner with us for unparalleled engineering and construction excellence. Let's discuss your next mega-project."
        primaryAction={{ label: 'Contact Our Team', href: ROUTES.CONTACT }}
        secondaryAction={{ label: 'Request Quotation', href: '/request-quotation' }}
        title="Ready to Build the Future?"
        variant="brand"
      />
    </>
  );
}
