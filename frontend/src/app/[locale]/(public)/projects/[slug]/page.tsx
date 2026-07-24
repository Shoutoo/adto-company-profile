import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { Layers, Calendar, Trophy } from 'lucide-react';
import Image from 'next/image';

export function generateStaticParams() {
  return [
    { slug: 'pertamina-refinery-upgrade' },
    { slug: 'pln-grid-modernization' },
    { slug: 'telkom-data-center' },
  ];
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Projects');

  const validSlugs = ['pertamina-refinery-upgrade', 'pln-grid-modernization', 'telkom-data-center'];
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="flex-1 bg-white">
      <HeroSection
        title={title}
        description={`Discover how we delivered excellence for the ${title} project.`}
        overline={t('overline')}
        align="center"
      />
      
      <section className="container-page py-16 lg:py-24">
        {/* Project Meta */}
        <div className="mb-16 grid gap-8 sm:grid-cols-3 border-b border-slate-200 pb-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-brand-50 p-4 text-brand-600">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">{t('technology')}</h3>
            <p className="text-slate-600">Advanced Industrial Tech</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-brand-50 p-4 text-brand-600">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">{t('timeline')}</h3>
            <p className="text-slate-600">18 Months Execution</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-brand-50 p-4 text-brand-600">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">{t('result')}</h3>
            <p className="text-slate-600">Completed 2 weeks ahead of schedule</p>
          </div>
        </div>

        {/* Project Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Overview</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              The {title} project represents a milestone in our commitment to delivering
              scalable, enterprise-grade industrial solutions. Our team worked closely with
              stakeholders to ensure every technical requirement was met with precision.
            </p>
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">The Challenge</h3>
            <p className="text-slate-600">
              Modernizing legacy infrastructure while minimizing downtime is a complex undertaking.
              The project required strict adherence to safety protocols, advanced logistical planning,
              and real-time monitoring to succeed.
            </p>
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Our Approach</h3>
            <p className="text-slate-600">
              By deploying our proprietary project management framework and leveraging cutting-edge
              technology, we streamlined the execution phase, ensuring high efficiency and zero
              compromise on safety standards.
            </p>
          </div>
          <div className="space-y-6">
             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
               <Image
                  src="https://images.unsplash.com/photo-1541888081622-0d170a48a529?auto=format&fit=crop&q=80"
                  alt={`${title} Gallery 1`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
               />
             </div>
             <div className="grid grid-cols-2 gap-6">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
                   <Image
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
                      alt={`${title} Gallery 2`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                   />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
                   <Image
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                      alt={`${title} Gallery 3`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                   />
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
