import { TrendingUp, Heart, GraduationCap, Users, MapPin, Briefcase } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';

import { CtaSection } from '@/components/molecules/cta-section';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { PageHeader } from '@/components/molecules/page-header';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { StaggerContainer, StaggerItem } from '@/components/atoms/animations';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });
  return {
    title: t('career_title'),
    description: t('career_desc'),
  };
}

const OPEN_POSITIONS = [
  {
    title: 'Senior Project Manager',
    department: 'Engineering',
    location: 'Jakarta',
    type: 'Full-time',
    slug: 'project-manager',
  },
  {
    title: 'Field Engineer',
    department: 'Engineering',
    location: 'Surabaya',
    type: 'Full-time',
    slug: 'field-engineer',
  },
  {
    title: 'Business Development Manager',
    department: 'Commercial',
    location: 'Jakarta',
    type: 'Full-time',
    slug: 'business-development',
  },
];

/**
 * Career Page
 * Server Component
 */
export default async function CareerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tCareer = await getTranslations('Career');
  const tNav = await getTranslations('Navbar');

  const BENEFITS = [
    {
      title: 'Career Growth',
      description: 'Clear progression paths and opportunities for advancement.',
      icon: TrendingUp,
    },
    {
      title: 'Health Benefits',
      description: 'Comprehensive health and insurance coverage for you and your family.',
      icon: Heart,
    },
    {
      title: 'Training Programs',
      description: 'Continuous learning through internal and external training.',
      icon: GraduationCap,
    },
    {
      title: 'Team Culture',
      description: 'Collaborative environment with regular team-building activities.',
      icon: Users,
    },
  ];

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: tNav('home'), href: '/' },
          { label: tNav('career'), href: '/career', active: true },
        ]}
        description={tCareer('hero_desc')}
        title={tCareer('hero_title')}
      />

      <HeroSection
        align="left"
        backgroundVariant="dark"
        description={tCareer('hero_desc')}
        overline={tCareer('title')}
        title="Build the Future With Us."
        imageUrl="/images/career_collaboration_1784816770977.png"
      />

      <SectionWrapper
        header={{
          overline: 'Benefits',
          title: 'Why Work With Us',
          description: 'We believe in investing in our people. Here is what we offer.',
        }}
        id="benefits"
      >
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <StaggerItem
              key={index}
              direction="up"
              className="group relative flex flex-col items-center overflow-hidden rounded-[24px] border border-slate-100 bg-white p-8 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:border-navy hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] sm:p-10" style={{ boxShadow: '0 10px 30px rgba(15,23,42,0.06)' }}>
                <div className="absolute inset-x-0 top-0 h-1 bg-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-orange">
                    <benefit.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110" strokeWidth={2} />
                  </div>
                </div>
              <h3 className="mb-4 font-heading text-xl font-bold uppercase tracking-wider text-slate-900 group-hover:text-navy transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">{benefit.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      <SectionWrapper
        background="alt"
        header={{
          overline: 'Openings',
          title: 'Open Positions',
          description:
            'Explore our current job opportunities across various departments and locations.',
        }}
        id="openings"
      >
        <StaggerContainer className="mx-auto mt-12 flex max-w-4xl flex-col gap-6">
          {OPEN_POSITIONS.map((job, index) => (
            <StaggerItem key={index} direction="up">
              <Link
                href={`/career/${job.slug}`}
                className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-[24px] border border-slate-100 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:border-navy hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] md:flex-row md:items-center sm:p-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-navy/50"
                style={{ boxShadow: '0 10px 30px rgba(15,23,42,0.06)' }}
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pl-2">
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-slate-900 group-hover:text-navy transition-colors">
                      {job.title}
                    </h3>
                    <span className="hidden rounded-full bg-navy-light/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy sm:inline-block">
                      Hiring
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-5 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span className="flex items-center gap-1.5 text-navy">
                      <span className="h-2 w-2 rounded-full bg-orange"></span>
                      {job.department}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4" />
                      {job.type}
                    </div>
                  </div>
                </div>
                <div className="rounded-[16px] px-8 py-6 text-xs font-bold uppercase tracking-widest shadow-sm transition-all duration-300 group-hover:shadow-md bg-navy text-white group-hover:bg-orange text-center">
                  Apply Now
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      <CtaSection
        description="We are always on the lookout for talent. Send your resume and we will contact you when a suitable position opens."
        primaryAction={{
          label: 'Submit Resume',
          href: 'mailto:hr@example.com',
        }}
        title="Don't see a perfect fit?"
        variant="brand"
      />
    </>
  );
}
