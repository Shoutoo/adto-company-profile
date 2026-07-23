import { ArrowUpRight, CheckCircle2, Factory, LineChart, ShieldCheck } from 'lucide-react';
import { type Metadata } from 'next';

import { CtaSection } from '@/components/molecules/CtaSection';
import { HeroSection } from '@/components/molecules/HeroSection';
import { SectionWrapper } from '@/components/molecules/SectionWrapper';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/lib/constants/routes.constants';
import { generateMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Case Studies',
  description:
    'In-depth analysis of complex engineering and construction projects delivered by PT Adto Cipta Usaha Mandiri.',
});

/**
 * Case Studies page
 */
export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'Refinery Turnaround Optimization',
      category: 'Oil & Gas',
      challenge:
        'The client faced significant challenges in minimizing downtime during critical maintenance turnaround. The existing process required 45 days, causing substantial production losses and supply chain disruptions in the regional market.',
      solution:
        'We implemented an integrated project management approach combined with advanced 4D scheduling and pre-fabrication strategies. We deployed specialized teams working in synchronized shifts and utilized real-time tracking systems to monitor progress and safety compliance.',
      metrics: [
        { label: 'Reduced Downtime', value: '40%', icon: <LineChart className="h-4 w-4" /> },
        { label: 'Cost Savings', value: '$2M', icon: <ArrowUpRight className="h-4 w-4" /> },
        { label: 'Safety Record', value: 'Zero LTI', icon: <ShieldCheck className="h-4 w-4" /> },
      ],
      color: 'from-orange-600 to-red-600',
    },
    {
      id: 2,
      title: 'Smart Building MEP Integration',
      category: 'Real Estate',
      challenge:
        'A new 40-story commercial tower required a sophisticated MEP system that could meet rigorous sustainability targets (LEED Gold) while providing optimal comfort for tenants in a tropical climate with high humidity.',
      solution:
        'Designed and installed an intelligent building management system integrating HVAC, lighting, and power distribution. We utilized highly efficient chillers with variable speed drives and implemented a comprehensive building automation system for centralized control and monitoring.',
      metrics: [
        { label: 'Energy Savings', value: '35%', icon: <LineChart className="h-4 w-4" /> },
        { label: 'Water Efficiency', value: '25%', icon: <ArrowUpRight className="h-4 w-4" /> },
        { label: 'Certification', value: 'LEED Gold', icon: <CheckCircle2 className="h-4 w-4" /> },
      ],
      color: 'from-emerald-600 to-teal-600',
    },
    {
      id: 3,
      title: 'Remote Mining Camp Construction',
      category: 'Mining',
      challenge:
        'The client urgently needed housing and facilities for 2,000 workers in a remote location with limited access, zero existing infrastructure, and challenging weather conditions during the monsoon season.',
      solution:
        'Utilized modular construction techniques, fabricating 80% of components off-site. Established a robust supply chain using specialized transport. Deployed self-sustaining temporary facilities for our construction crew to ensure continuous operation despite weather constraints.',
      metrics: [
        { label: 'Early Completion', value: '2 Weeks', icon: <LineChart className="h-4 w-4" /> },
        { label: 'Capacity', value: '2,000 Pax', icon: <ArrowUpRight className="h-4 w-4" /> },
        { label: 'Local Hiring', value: '60%', icon: <CheckCircle2 className="h-4 w-4" /> },
      ],
      color: 'from-amber-600 to-orange-600',
    },
  ];

  return (
    <>
      <HeroSection
        align="center"
        className="bg-muted/30"
        description="Detailed case studies showcasing our approach to solving complex engineering challenges and delivering measurable results."
        overline="Case Studies"
        size="default"
        title="In-Depth Project Analysis"
      />

      <SectionWrapper className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl space-y-12">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Side: Image Placeholder */}
                <div
                  className={`aspect-square w-full bg-gradient-to-br md:aspect-auto ${study.color} flex items-center justify-center p-8`}
                >
                  <div className="text-center text-white">
                    <Factory className="mx-auto mb-4 h-16 w-16 opacity-50" />
                    <h3 className="text-2xl font-bold opacity-90">{study.title}</h3>
                  </div>
                </div>

                {/* Right Side: Content */}
                <CardContent className="flex flex-col justify-center p-8 md:p-12">
                  <div className="mb-4">
                    <Badge className="bg-muted/50 mb-4" variant="outline">
                      {study.category}
                    </Badge>
                    <h3 className="mb-6 text-3xl font-bold tracking-tight">{study.title}</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-foreground mb-2 font-semibold">The Challenge</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="text-foreground mb-2 font-semibold">Our Solution</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="pt-4">
                      <h4 className="text-foreground mb-4 font-semibold">Key Results</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {study.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="bg-muted flex flex-col items-center justify-center rounded-none p-4 text-center"
                          >
                            <div className="text-primary mb-2">{metric.icon}</div>
                            <span className="text-foreground text-xl font-bold">
                              {metric.value}
                            </span>
                            <span className="text-muted-foreground mt-1 text-xs font-medium">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection
        description="Let's discuss how our expertise can help optimize your next project and deliver outstanding results."
        primaryAction={{
          label: 'Contact Our Experts',
          href: ROUTES.CONTACT,
        }}
        title="Facing a Similar Challenge?"
      />
    </>
  );
}
