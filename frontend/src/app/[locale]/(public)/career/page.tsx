import { TrendingUp, Heart, GraduationCap, Users, MapPin, Briefcase } from 'lucide-react';
import { type Metadata } from 'next';

import { CtaSection } from '@/components/molecules/cta-section';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { PageHeader } from '@/components/molecules/page-header';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { Button } from '@/components/ui/button';
import { PAGE_SEO } from '@/lib/constants/seo.constants';
import { generateMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Career Opportunities',
  description: PAGE_SEO?.CAREER?.description || 'Join our growing team of professionals.',
});

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

const OPEN_POSITIONS = [
  {
    title: 'Senior Project Manager',
    department: 'Engineering',
    location: 'Jakarta',
    type: 'Full-time',
  },
  {
    title: 'MEP Engineer',
    department: 'Engineering',
    location: 'Surabaya',
    type: 'Full-time',
  },
  {
    title: 'Procurement Specialist',
    department: 'Operations',
    location: 'Jakarta',
    type: 'Full-time',
  },
  {
    title: 'HSE Officer',
    department: 'Safety',
    location: 'Balikpapan',
    type: 'Full-time',
  },
  {
    title: 'Business Development Manager',
    department: 'Commercial',
    location: 'Jakarta',
    type: 'Full-time',
  },
];

/**
 * Career Page
 * Server Component
 */
export default function CareerPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/career', active: true },
        ]}
        description="Join our growing team of professionals."
        title="Career Opportunities"
      />

      <HeroSection
        align="left"
        backgroundVariant="dark"
        description="Build your career with an industry leader. We are always looking for passionate professionals to join our diverse team."
        overline="Join Our Team"
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
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="border-border bg-background group border p-8 text-center transition-colors hover:border-brand-600"
            >
              <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center bg-surface-secondary text-brand-600">
                <benefit.icon
                  className="h-6 w-6 transition-transform group-hover:scale-110"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="mb-3 font-heading text-lg font-bold uppercase tracking-wider">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
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
        <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-4">
          {OPEN_POSITIONS.map((job, index) => (
            <div
              key={index}
              className="border-border bg-background group flex flex-col justify-between gap-6 border p-8 transition-colors hover:border-brand-600 md:flex-row md:items-center"
            >
              <div>
                <h3 className="mb-3 font-heading text-lg font-bold uppercase tracking-wider">
                  {job.title}
                </h3>
                <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <span className="text-brand-600">{job.department}</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5" />
                    {job.type}
                  </div>
                </div>
              </div>
              <Button className="rounded-none px-8 text-xs font-bold uppercase tracking-widest">
                Apply Now
              </Button>
            </div>
          ))}
        </div>
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
