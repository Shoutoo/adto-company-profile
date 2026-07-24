import { Link } from '@/i18n/routing';

import { Calendar, ChevronRight, Newspaper } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { HeroSection } from '@/components/molecules/hero-section-main';
import { PageHeader } from '@/components/molecules/page-header';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { Button } from '@/components/ui/button';

import { NewsletterForm } from './newsletter-form';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });
  return {
    title: t('news_title'),
    description: t('news_desc'),
  };
}

/**
 * News/Press page
 */
export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tBlog = await getTranslations('Blog');
  const tNav = await getTranslations('Navbar');

  const featuredNews = {
    title: 'Adto Cipta Awarded Major Infrastructure Contract in New Capital City (IKN)',
    category: 'Featured',
    date: 'October 15, 2024',
    excerpt:
      "PT Adto Cipta Usaha Mandiri has been selected as one of the key contractors for the development of essential utilities and infrastructure in Indonesia's new capital city, Nusantara.",
    color: 'from-blue-600 to-indigo-700',
    slug: 'adto-cipta-awarded-major-infrastructure-contract-ikn',
  };

  const newsItems = [
    {
      id: 1,
      title: 'Company Expands Operations to Eastern Indonesia',
      category: 'Company',
      date: 'September 28, 2024',
      excerpt:
        'Opening of our new branch office in Makassar to better serve our growing client base in the eastern regions of Indonesia.',
      color: 'from-slate-700 to-slate-900',
      slug: 'company-expands-operations-eastern-indonesia',
    },
    {
      id: 2,
      title: 'Recognized for Outstanding Safety Record in 2023',
      category: 'Award',
      date: 'August 12, 2024',
      excerpt:
        'Adto Cipta received the National Safety Excellence Award for achieving 5 million man-hours without Lost Time Injury (LTI).',
      color: 'from-amber-500 to-yellow-600',
      slug: 'recognized-outstanding-safety-record-2023',
    },
    {
      id: 3,
      title: 'Adoption of New BIM Technologies for Future Projects',
      category: 'Industry',
      date: 'July 05, 2024',
      excerpt:
        'Implementing advanced Building Information Modeling (BIM) across all new major projects to enhance efficiency and collaboration.',
      color: 'from-emerald-600 to-teal-700',
      slug: 'adoption-new-bim-technologies-future-projects',
    },
    {
      id: 4,
      title: 'Partnership Announced with Global Energy Firm',
      category: 'Company',
      date: 'June 18, 2024',
      excerpt:
        'Strategic partnership formed to develop renewable energy infrastructure projects across Southeast Asia over the next five years.',
      color: 'from-slate-700 to-slate-900',
      slug: 'partnership-announced-global-energy-firm',
    },
    {
      id: 5,
      title: 'Completion of Landmark Commercial Complex in Jakarta',
      category: 'Company',
      date: 'May 22, 2024',
      excerpt:
        "Successful handover of the central business district's newest mixed-use development, completed two months ahead of schedule.",
      color: 'from-slate-700 to-slate-900',
      slug: 'completion-landmark-commercial-complex-jakarta',
    },
    {
      id: 6,
      title: 'CEO Speaks at National Construction Summit',
      category: 'Industry',
      date: 'April 10, 2024',
      excerpt:
        'Our leadership team shared insights on sustainable construction practices and digital transformation at the annual summit.',
      color: 'from-emerald-600 to-teal-700',
      slug: 'ceo-speaks-national-construction-summit',
    },
  ];

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: tNav('home'), href: '/' },
          { label: tNav('news'), href: '/news', active: true },
        ]}
        description={tBlog('hero_desc')}
        title={tBlog('hero_title')}
      />

      <HeroSection
        align="left"
        backgroundVariant="dark"
        description={tBlog('hero_desc')}
        overline={tBlog('title')}
        title="Corporate Updates."
      />

      <SectionWrapper background="alt">
        {/* Featured News */}
        <div className="border-border bg-background mb-16 flex flex-col border md:flex-row">
          <div className="flex aspect-video w-full items-center justify-center bg-surface-secondary p-8 md:w-1/2">
            <Newspaper className="text-muted-foreground/30 h-24 w-24" strokeWidth={1} />
          </div>
          <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12">
            <span className="mb-4 inline-block w-fit bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {featuredNews.category}
            </span>
            <div className="text-muted-foreground mb-4 flex items-center text-xs font-bold uppercase tracking-widest">
              <Calendar className="mr-2 h-3.5 w-3.5" />
              {featuredNews.date}
            </div>
            <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight md:text-3xl">
              {featuredNews.title}
            </h2>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              {featuredNews.excerpt}
            </p>
            <Button
              asChild
              className="w-fit rounded-none px-6 py-6 text-xs font-bold uppercase tracking-wider"
              size="lg"
            >
              <Link href={`/news/${featuredNews.slug}`}>
                Read Full Story <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* News Grid */}
        <div className="border-border mb-8 flex items-center justify-between border-b pb-4">
          <h2 className="font-heading mb-6 text-3xl font-bold text-foreground lg:text-4xl">Recent News</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Link
              href={`/news/${item.slug}`}
              key={item.id}
              className="border-border bg-background group flex flex-col border transition-all hover:border-brand-600 hover:-translate-y-1 hover:shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500/50 rounded-lg overflow-hidden"
            >
              <div className="flex aspect-video w-full items-center justify-center bg-surface-secondary p-8">
                <Newspaper
                  className="text-muted-foreground/30 h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:text-brand-600"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                    {item.category}
                  </span>
                  <span className="text-muted-foreground flex items-center text-xs font-bold uppercase tracking-widest group-hover:text-brand-600 transition-colors">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    {item.date}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold leading-tight group-hover:text-brand-600 transition-colors">{item.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="border-border mt-auto border-t pt-4">
                  <div
                    className="text-foreground inline-flex items-center text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-brand-600"
                  >
                    Read More <ChevronRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Newsletter Signup */}
      <SectionWrapper className="border-border border-t bg-brand-50">
        <div className="mx-auto max-w-2xl py-8 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold uppercase tracking-wider">
            Stay Informed
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Subscribe to our newsletter to receive the latest news, project updates, and industry
            insights directly in your inbox.
          </p>
          <NewsletterForm />
        </div>
      </SectionWrapper>
    </>
  );
}
