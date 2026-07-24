import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { Link } from '@/i18n/routing';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export function generateStaticParams() {
  return [
    { slug: 'project-manager' },
    { slug: 'field-engineer' },
    { slug: 'business-development' },
  ];
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Career');
  const tNavbar = await getTranslations('Navbar');

  const validSlugs = ['project-manager', 'field-engineer', 'business-development'];
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="flex-1 bg-white">
      <HeroSection
        title={title}
        description={`Join our team as a ${title} and help us drive industrial excellence.`}
        overline={t('overline')}
        align="center"
      />
      
      {/* Breadcrumb */}
      <div className="container-page py-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/">{tNavbar('home')}</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/career">{tNavbar('career')}</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="container-page py-16">
        <div className="mx-auto max-w-4xl">
          {/* Job Meta */}
          <div className="mb-12 flex flex-wrap gap-6 rounded-2xl bg-slate-50 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Department</p>
                <p className="font-semibold text-slate-900">Operations</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{t('location')}</p>
                <p className="font-semibold text-slate-900">Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{t('employment_type')}</p>
                <p className="font-semibold text-slate-900">Full-time</p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-brand-600">
            <h3>{t('job_description')}</h3>
            <p>
              We are looking for a highly motivated {title} to join our dynamic team. 
              In this role, you will be responsible for overseeing key operations, ensuring 
              that deliverables meet our strict quality standards, and collaborating with 
              cross-functional teams to achieve organizational goals.
            </p>

            <h3>{t('requirements')}</h3>
            <ul>
              <li>Bachelor's degree in a relevant field (Engineering, Management, etc.)</li>
              <li>Minimum 3-5 years of proven experience in a similar role</li>
              <li>Strong analytical and problem-solving skills</li>
              <li>Excellent communication and leadership abilities</li>
            </ul>

            <h3>{t('benefit')}</h3>
            <ul>
              <li>Competitive salary and performance bonuses</li>
              <li>Comprehensive health insurance</li>
              <li>Professional development and training programs</li>
              <li>Flexible working arrangements</li>
            </ul>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <Button asChild className="w-full sm:w-auto rounded-[16px] bg-brand-500 px-10 py-7 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-brand-400 hover:shadow-xl">
              <a href={`mailto:hr@example.com?subject=Application for ${title} Position`}>
                {t('apply_button')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
