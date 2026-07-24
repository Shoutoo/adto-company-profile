import { Shield, Target, Zap, Heart, CheckCircle2 } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

import { CtaSection } from '@/components/molecules/cta-section';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { PageHeader } from '@/components/molecules/page-header';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { ROUTES } from '@/lib/constants/routes.constants';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });
  return {
    title: t('about_title'),
    description: t('about_desc'),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tAbout = await getTranslations('About');
  const tNav = await getTranslations('Navbar');
  const tCta = await getTranslations('CTA');

  const breadcrumbItems = [
    { label: tNav('home'), href: ROUTES.HOME },
    { label: tNav('about'), href: ROUTES.ABOUT, active: true },
  ];

  const coreValues = [
    {
      title: 'Adaptif',
      icon: Zap,
      desc: 'Cepat menyesuaikan diri terhadap dinamika kebutuhan spesifikasi teknis dan skala proyek klien di lapangan.',
    },
    {
      title: 'Dedikatif',
      icon: Heart,
      desc: 'Sepenuh hati berfokus pada penyelesaian tantangan logistik dan pengadaan secara tuntas.',
    },
    {
      title: 'Tangguh',
      icon: Shield,
      desc: 'Memiliki resiliensi tinggi dalam merespon kendala teknis dan menjaga stabilitas pasokan di segala kondisi.',
    },
    {
      title: 'Obyektif',
      icon: Target,
      desc: 'Mengedepankan data, transparansi, dan kalkulasi profesional dalam setiap pengambilan keputusan bisnis.',
    },
  ];

  const milestones = [
    {
      year: 'Q1 2026',
      title: 'Penetrasi Pasar B2B',
      desc: 'Meloloskan legalitas ke dalam >20 daftar registrasi pasokan vendor korporat besar tingkat nasional.',
    },
    {
      year: 'Q3 2026',
      title: 'Otomasi Logistik IoT',
      desc: 'Optimalisasi biaya dan pelacakan unit pasokan harian termonitor secara real-time via RFID.',
    },
    {
      year: 'Q1 2027',
      title: 'Ekspansi Fasilitas Gudang',
      desc: 'Akuisisi fasilitas gudang independen permanen untuk menjamin availability material krusial kapanpun dibutuhkan.',
    },
    {
      year: 'Q3 2027',
      title: 'Tier-1 Supplier',
      desc: 'Mengikat principal mancanegara dalam pakta sole-distributor eksklusif untuk regional Indonesia.',
    },
  ];

  const leaders = [
    { name: 'Budi Santoso', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800' },
    { name: 'Siti Rahmawati', role: 'Chief Operating Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
    { name: 'Agus Wijaya', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800' },
    { name: 'Dewi Lestari', role: 'Chief Financial Officer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <>
      <PageHeader
        breadcrumbs={breadcrumbItems}
        description={tAbout('hero_desc')}
        title={tAbout('hero_title')}
      />

      <HeroSection
        align="left"
        backgroundVariant="dark"
        description={tAbout('hero_desc')}
        overline={tAbout('title')}
        title="Integritas, Efisiensi,"
        titleHighlight="Keandalan Operasional."
        imageUrl="/images/about_meeting_1784816621267.png"
      />

      <SectionWrapper background="alt" id="vision-mission">
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="surface-card group flex h-full flex-col p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(53,85,122,0.15)] md:p-14">
            <div className="icon-box mb-6 h-14 w-14 group-hover:scale-105">
              <Target className="h-6 w-6" strokeWidth={1.5} style={{ color: '#35557A' }} />
            </div>
            <h3 className="mb-4 font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
              Visi Kami
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Menjadi mitra strategis terdepan berskala nasional dalam penyediaan kebutuhan industri dan manajemen rantai pasok, dengan mengedepankan presisi, efisiensi, dan keandalan operasional.
            </p>
          </div>
          <div className="surface-card group flex h-full flex-col p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(53,85,122,0.15)] md:p-14">
            <div className="icon-box mb-6 h-14 w-14 group-hover:scale-105">
              <Zap className="h-6 w-6 text-[#F58220]" strokeWidth={1.5} />
            </div>
            <h3 className="mb-4 font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
              Misi Kami
            </h3>
            <ul className="space-y-5">
              {[
                'Menyediakan produk chemical dan sparepart dengan jaminan kualitas tinggi (API grade/industrial standard) secara konsisten.',
                'Menjamin ketersediaan armada angkutan berat yang prima dan terkalibrasi untuk meminimalisasi downtime.',
                'Memberikan layanan tepat waktu (on-time delivery) ke berbagai pelosok wilayah kerja operasional.',
                'Membangun tata kelola kemitraan yang berkelanjutan berbasis kepercayaan dan profitabilitas bersama.',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-muted-foreground">
                  <CheckCircle2
                    className="mt-0.5 h-6 w-6 shrink-0 text-[#F58220]"
                    strokeWidth={1.5}
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        header={{ overline: 'Core Values', title: 'Nilai-Nilai Dasar (A.D.T.O)' }}
        id="core-values"
      >
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="surface-card group flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(53,85,122,0.15)] hover:shadow-card-hover"
              >
                <div className="icon-box mb-6 h-12 w-12 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.5} style={{ color: '#35557A' }} />
                </div>
                <h4 className="mb-3 font-heading text-lg font-bold uppercase tracking-wider text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        background="alt"
        header={{ overline: 'Our Journey', title: 'Roadmap Perusahaan' }}
        id="history"
      >
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div 
            className="absolute bottom-0 left-[21px] top-0 w-px -translate-x-1/2 md:left-1/2" 
            style={{ background: 'linear-gradient(180deg, rgba(53,85,122,0.15), rgba(53,85,122,0.30), rgba(53,85,122,0.15))' }} 
          />
          
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className={`relative mb-12 flex w-full items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="hidden w-1/2 md:block" />

              <div 
                className="absolute left-[21px] top-1/2 z-20 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-[4px] ring-white md:left-1/2" 
                style={{ background: 'linear-gradient(135deg, #35557A, #F58220)', boxShadow: '0 4px 12px rgba(53,85,122,0.25)' }} 
              />

              <div className="relative w-full pl-[56px] md:w-1/2 md:px-12 md:pl-12">
                <div 
                  className={`hidden md:block absolute top-1/2 z-10 h-px w-12 -translate-y-1/2 ${idx % 2 === 0 ? 'right-0' : 'left-0'}`}
                  style={{ background: 'linear-gradient(90deg, rgba(53,85,122,0.15), rgba(53,85,122,0.35), rgba(53,85,122,0.15))' }}
                />

                <div 
                  className="absolute left-[21px] top-1/2 z-10 h-px w-[35px] -translate-y-1/2 md:hidden"
                  style={{ background: 'linear-gradient(90deg, rgba(53,85,122,0.30), rgba(53,85,122,0.15))' }}
                />

                <div
                  className={`surface-card relative z-20 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(53,85,122,0.15)] hover:shadow-card-hover ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                >
                  <span className="mb-2 block text-sm font-bold uppercase tracking-wider" style={{ color: '#35557A' }}>
                    {milestone.year}
                  </span>
                  <h3 className="mb-2 font-heading text-xl font-bold text-foreground">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        header={{ overline: 'Leadership', title: 'Our Executive Team' }}
        id="leadership"
      >
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((member, idx) => (
            <div
              key={idx}
              className="surface-card group flex flex-col items-center p-2 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(53,85,122,0.15)] hover:shadow-card-hover"
            >
              <div className="relative mb-4 flex h-64 w-full overflow-hidden rounded-[20px] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_24px_rgba(53,85,122,0.15)]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="pb-6 text-center">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest" style={{ color: '#35557A' }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection
        description={tCta('subtitle')}
        primaryAction={{ label: tCta('button'), href: ROUTES.CONTACT }}
        title={tCta('title')}
        variant="brand"
      />
    </>
  );
}
