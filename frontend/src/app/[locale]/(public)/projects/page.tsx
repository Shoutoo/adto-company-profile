import { Building2, Calendar, MapPin, Zap, Factory } from 'lucide-react';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { CtaSection } from '@/components/molecules/cta-section';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { PageHeader } from '@/components/molecules/page-header';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { ROUTES } from '@/lib/constants/routes.constants';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });
  return {
    title: t('projects_title'),
    description: t('projects_desc'),
  };
}

/**
 * Projects portfolio page
 */
export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tProjects = await getTranslations('Projects');
  const tNav = await getTranslations('Navbar');
  const tCta = await getTranslations('CTA');

  const projects = [
    {
      id: 1,
      title: 'Pengadaan Bentonite API Grade',
      client: 'KSO Pertamina EP',
      category: 'Chemical Drilling',
      location: 'Cepu, Central Java',
      year: '2026',
      description:
        'Supply rutin material lumpur pemboran (Bentonite & Barite) untuk operasional 3 sumur aktif tanpa jeda.',
      icon: <Factory className="h-4 w-4" />,
      image: '/images/project_factory_1784816734575.png',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 2,
      title: 'Mobilisasi Unit Excavator',
      client: 'PT Wijaya Karya',
      category: 'Transportasi',
      location: 'IKN, East Kalimantan',
      year: '2025',
      description:
        'Pengiriman aman 12 unit alat berat menggunakan armada lowbed terkalibrasi lengkap dengan pengawalan resmi.',
      icon: <Building2 className="h-4 w-4" />,
      image: '/images/service_heavy_1784816700775.png',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Fast-Track Sparepart Komatsu',
      client: 'PT Semen Indonesia',
      category: 'Industrial Supply',
      location: 'Tuban, East Java',
      year: '2025',
      description:
        'Pengadaan urgent undercarriage parts Komatsu secara tepat waktu untuk menekan resiko NPT operasional pabrik.',
      icon: <Zap className="h-4 w-4" />,
      image: '/images/project_pipeline_1784816746502.png',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const stats = [
    { label: 'Proyek Selesai', value: '150+' },
    { label: 'Klien Aktif', value: '12' },
    { label: 'Ketepatan Waktu', value: '100%' },
    { label: 'Retensi Klien', value: '98%' },
  ];

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: tNav('home'), href: ROUTES.HOME },
          { label: tNav('projects'), href: ROUTES.PROJECTS, active: true },
        ]}
        description={tProjects('hero_desc')}
        title={tProjects('hero_title')}
      />

      <HeroSection
        align="left"
        backgroundVariant="dark"
        description={tProjects('hero_desc')}
        overline={tProjects('title')}
        title="Membangun Kepercayaan."
        titleHighlight="Melampaui Ekspektasi."
      />

      <SectionWrapper background="alt" id="featured-projects">
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="surface-card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(53,85,122,0.15)] hover:shadow-card-hover"
            >
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-[#0A2F5C]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F5C]/80 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-20" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: '#35557A' }}>
                    {project.icon}
                    {project.category}
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest">
                    <Calendar className="h-3.5 w-3.5" />
                    {project.year}
                  </span>
                </div>
                <h3 className="mb-1 font-heading text-xl font-bold leading-tight text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm font-bold uppercase tracking-wider">
                  {project.client}
                </p>
                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 border-t pt-4 text-xs font-bold uppercase tracking-widest" style={{ borderColor: 'rgba(53,85,122,0.1)' }}>
                  <MapPin className="h-3.5 w-3.5" style={{ color: '#F58220' }} />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        header={{ overline: 'The Impact', title: 'By The Numbers' }}
        id="project-stats"
      >
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="surface-card flex flex-col items-center justify-center p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(53,85,122,0.15)] hover:shadow-card-hover"
            >
              <span className="mb-3 font-heading text-5xl font-bold" style={{ background: 'linear-gradient(135deg, #35557A, #F58220)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {stat.value}
              </span>
              <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection
        description={tCta('subtitle')}
        primaryAction={{
          label: tCta('button'),
          href: ROUTES.CONTACT,
        }}
        title={tCta('title')}
        variant="brand"
      />
    </>
  );
}
