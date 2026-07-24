import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function generateStaticParams() {
  return [
    { slug: 'industrial-supply' },
    { slug: 'project-management' },
    { slug: 'engineering' },
    { slug: 'logistics' },
  ];
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Services');

  const validSlugs = ['industrial-supply', 'project-management', 'engineering', 'logistics'];
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="flex-1 bg-white">
      <HeroSection
        title={title}
        description={t('description')}
        overline={t('overline')}
        align="center"
      />
      
      {/* Description & Benefits */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[400px] overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
             <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt={title}
                fill
                className="object-cover"
             />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 font-heading text-3xl font-bold uppercase tracking-wider text-slate-900">{t('overview')}</h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              We provide enterprise-grade solutions tailored for your business needs. 
              Our {title} service is designed to deliver maximum efficiency, reliability, and scale, ensuring your operations run smoothly without interruption.
            </p>
            <h3 className="mb-4 font-heading text-xl font-bold uppercase tracking-wider text-slate-900">{t('benefits')}</h3>
            <ul className="space-y-4">
              {[
                'Premium industrial-grade execution and safety standards',
                'Cost-effective and sustainable solutions',
                '24/7 dedicated support and monitoring',
                'Compliance with all regulatory requirements'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-slate-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container-page">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold uppercase tracking-wider text-slate-900">Scope of Work</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive service coverage from start to finish.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'Planning & Analysis', desc: 'Detailed assessment and strategic planning to ensure project viability and success.' },
              { title: 'Execution & Delivery', desc: 'Flawless implementation leveraging advanced technology and expert personnel.' },
              { title: 'Maintenance & Support', desc: 'Ongoing optimization and dedicated support to guarantee long-term performance.' }
            ].map((scope, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0A2F5C] to-[#FF5A00] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <h3 className="mb-3 font-heading text-lg font-bold uppercase tracking-wider text-slate-900">{scope.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{scope.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold uppercase tracking-wider text-slate-900">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Find answers to common questions about our {title} service.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'How do you ensure quality standards?', a: 'We strictly adhere to ISO and industry-specific regulations, conducting regular audits and utilizing premium materials.' },
              { q: 'What is the typical turnaround time?', a: 'Turnaround times vary by project scope, but our agile methodologies typically deliver 20% faster than industry averages.' },
              { q: 'Do you provide after-sales support?', a: 'Yes, we provide comprehensive 24/7 after-sales support and preventive maintenance packages.' }
            ].map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-2 font-bold text-slate-900">{faq.q}</h4>
                <p className="text-sm text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container-page relative z-10 text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold uppercase tracking-wider text-white md:text-4xl">Ready to Elevate Your Business?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-brand-100">Contact us today to discuss how our {title} solutions can drive your success.</p>
          <Button asChild className="rounded-[16px] bg-brand-500 px-10 py-7 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-brand-400 hover:shadow-xl">
            <Link href="/contact" className="inline-flex items-center gap-3">
              Contact Us Now <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
