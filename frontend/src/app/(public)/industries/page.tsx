import { Droplets, Zap, Pickaxe, Factory, Building, Home, Signal, Landmark } from 'lucide-react';
import { type Metadata } from 'next';

import { CtaSection } from '@/components/molecules/cta-section';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { PageHeader } from '@/components/molecules/page-header';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { ROUTES } from '@/lib/constants/routes.constants';
import { generateMetadata as getMetadata } from '@/lib/utils/seo';

export function generateMetadata(): Metadata {
  return getMetadata({
    title: 'Industries We Serve',
    description:
      'PT Adto Cipta Usaha Mandiri serves diverse sectors across Indonesia, providing tailored solutions for maximum impact.',
  });
}

export default function IndustriesPage() {
  const breadcrumbItems = [
    { label: 'Home', href: ROUTES.HOME },
    { label: 'Industries', href: '/industries', active: true },
  ];

  const industries = [
    {
      title: 'Oil & Gas',
      desc: 'Specialized infrastructure and supply chain solutions for onshore and offshore operations.',
      icon: Droplets,
    },
    {
      title: 'Power & Energy',
      desc: 'Supporting the development and maintenance of traditional and renewable energy plants.',
      icon: Zap,
    },
    {
      title: 'Mining',
      desc: 'Robust equipment and engineering services for demanding mining environments.',
      icon: Pickaxe,
    },
    {
      title: 'Manufacturing',
      desc: 'Facility construction and industrial equipment for modern production plants.',
      icon: Factory,
    },
    {
      title: 'Infrastructure',
      desc: 'Building the foundations of progress with roads, bridges, and public works.',
      icon: Building,
    },
    {
      title: 'Real Estate',
      desc: 'Commercial and residential property development and facility management.',
      icon: Home,
    },
    {
      title: 'Telecommunications',
      desc: 'Network infrastructure and structural support for telecom operators.',
      icon: Signal,
    },
    {
      title: 'Government',
      desc: 'Reliable public sector contracting with strict adherence to regulations.',
      icon: Landmark,
    },
  ];

  return (
    <>
      <PageHeader
        breadcrumbs={breadcrumbItems}
        description="Providing tailored EPC solutions for maximum impact."
        title="Sectors & Industries"
      />

      <HeroSection
        align="left"
        backgroundVariant="dark"
        description="We bring cross-industry expertise to solve complex challenges, driving growth and efficiency in every sector we touch."
        overline="Industries"
        title="Cross-Industry Expertise."
      />

      <SectionWrapper id="industries">
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="border-border bg-background group flex h-full flex-col border p-8 transition-colors hover:border-brand-600"
              >
                <Icon
                  className="text-foreground mb-6 h-8 w-8 transition-colors group-hover:text-brand-600"
                  strokeWidth={1.5}
                />
                <h3 className="mb-4 font-heading text-lg font-bold uppercase tracking-wider">
                  {ind.title}
                </h3>
                <p className="text-muted-foreground flex-1 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper background="alt" id="stats">
        <div className="border-border divide-border grid grid-cols-1 divide-y border md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          <div className="p-10 text-center">
            <div className="mb-3 font-heading text-5xl font-bold text-brand-500">500+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Projects Completed
            </div>
          </div>
          <div className="p-10 text-center">
            <div className="mb-3 font-heading text-5xl font-bold text-brand-500">15+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Provinces Reached
            </div>
          </div>
          <div className="p-10 text-center">
            <div className="mb-3 font-heading text-5xl font-bold text-brand-500">8</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Core Industries
            </div>
          </div>
          <div className="p-10 text-center">
            <div className="mb-3 font-heading text-5xl font-bold text-brand-500">99%</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Client Satisfaction
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CtaSection
        description="Let our experienced team provide the solutions you need to excel in your sector."
        primaryAction={{ label: 'Contact Our Experts', href: ROUTES.CONTACT }}
        title="Transform Your Industry Operations"
        variant="brand"
      />
    </>
  );
}
