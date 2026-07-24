import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Image from 'next/image';

export function generateStaticParams() {
  return [
    { slug: 'how-iot-transform-industry' },
    { slug: 'supply-chain-digitalization' },
    { slug: 'project-management-best-practice' },
  ];
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Blog');

  const validSlugs = ['how-iot-transform-industry', 'supply-chain-digitalization', 'project-management-best-practice'];
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="flex-1 bg-white pt-24 pb-16">
      <div className="container-page max-w-4xl">
        <Button asChild variant="ghost" className="mb-8 -ml-4">
          <Link href="/blog" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> {t('prev')}
          </Link>
        </Button>
        
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl mb-6">
          {title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-8">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" /> Expert Author
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" /> {t('publish_date')}: 12 Oct 2023
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" /> 5 {t('reading_time')}
          </span>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-700 font-medium">
            {t('category')}: Technology
          </span>
        </div>

        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl mb-12">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <article className="prose prose-lg prose-slate max-w-none">
          <p className="lead">
            The industrial landscape is evolving rapidly. In this article, we explore how 
            modern technologies and strategies are reshaping the way enterprises operate,
            manage resources, and drive unprecedented growth.
          </p>
          <h2>Introduction to the New Era</h2>
          <p>
            As companies strive for better efficiency and sustainability, embracing digital
            transformation is no longer optional. It is the cornerstone of modern industrial
            operations. From automation to advanced analytics, the tools available today
            offer incredible potential.
          </p>
          <h2>Key Strategies for Success</h2>
          <ul>
            <li>Implement robust data tracking and analytics</li>
            <li>Adopt agile project management methodologies</li>
            <li>Invest in continuous workforce training</li>
          </ul>
          <p>
            By focusing on these core areas, organizations can build a resilient framework
            capable of withstanding future market shifts and capitalizing on new opportunities.
          </p>
        </article>
      </div>
    </main>
  );
}
