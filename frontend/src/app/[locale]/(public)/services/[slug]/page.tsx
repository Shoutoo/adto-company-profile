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
      
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[400px] overflow-hidden rounded-2xl bg-slate-100">
             <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt={title}
                fill
                className="object-cover"
             />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">{t('overview')}</h2>
            <p className="mb-8 text-lg text-slate-600 leading-relaxed">
              We provide enterprise-grade solutions tailored for your business needs. 
              Our {title} service is designed to deliver maximum efficiency, reliability, and scale.
            </p>
            <h3 className="mb-4 text-xl font-semibold text-slate-900">{t('benefits')}</h3>
            <ul className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand-600 shrink-0" />
                  <span className="text-slate-700">Premium industrial-grade execution and safety standards</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container-page text-center">
          <h2 className="mb-8 text-3xl font-bold">Ready to Elevate Your Business?</h2>
          <Button asChild className="rounded-full bg-brand-600 px-8 py-6 text-base font-semibold hover:bg-brand-700">
            <Link href="/contact" className="inline-flex items-center gap-2">
              Get in Touch <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
