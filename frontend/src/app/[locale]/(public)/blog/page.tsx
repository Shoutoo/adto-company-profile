import { Link } from '@/i18n/routing';

import { ArrowRight, BookOpen, Clock, User } from 'lucide-react';
import { type Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { CtaSection } from '@/components/molecules/CtaSection';
import { HeroSection } from '@/components/molecules/HeroSection';
import { SectionWrapper } from '@/components/molecules/SectionWrapper';
import { StaggerContainer, StaggerItem } from '@/components/atoms/animations';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config/site.config';
import { ROUTES } from '@/lib/constants/routes.constants';
import { generateMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Blog & Insights',
  description: siteConfig.seo.defaultDescription, // Fallback, would ideally use PAGE_SEO.BLOG if available
});

/**
 * Blog listing page
 */
export default async function BlogPage() {
  const t = await getTranslations('Blog');
  const blogPosts = [
    {
      id: 1,
      title: 'Best Practices in Industrial Project Management',
      category: 'Management',
      author: 'Budi Santoso',
      date: 'Oct 24, 2024',
      readTime: '5 min read',
      excerpt:
        'Discover the key strategies and methodologies for successfully managing large-scale industrial construction projects from initiation to handover.',
      color: 'from-blue-500 to-indigo-600',
      slug: 'best-practices-industrial-project-management',
    },
    {
      id: 2,
      title: 'Understanding MEP Systems in Modern Buildings',
      category: 'Engineering',
      author: 'Ahmad Reza',
      date: 'Oct 18, 2024',
      readTime: '8 min read',
      excerpt:
        'A comprehensive guide to how mechanical, electrical, and plumbing systems integrate to create efficient, smart, and sustainable modern commercial buildings.',
      color: 'from-emerald-500 to-teal-600',
      slug: 'understanding-mep-systems-modern-buildings',
    },
    {
      id: 3,
      title: 'Safety Standards in Oil & Gas Construction',
      category: 'Safety',
      author: 'Diana Wijaya',
      date: 'Oct 10, 2024',
      readTime: '6 min read',
      excerpt:
        'An overview of the critical HSE protocols, compliance requirements, and risk mitigation strategies essential for construction within the oil and gas sector.',
      color: 'from-red-500 to-rose-600',
      slug: 'safety-standards-oil-gas-construction',
    },
    {
      id: 4,
      title: 'Sustainable Construction Trends in 2024',
      category: 'Industry',
      author: 'Budi Santoso',
      date: 'Sep 28, 2024',
      readTime: '7 min read',
      excerpt:
        'Exploring the latest green building materials, energy-efficient designs, and sustainable practices shaping the future of the construction industry in Indonesia.',
      color: 'from-green-500 to-emerald-600',
      slug: 'sustainable-construction-trends-2024',
    },
    {
      id: 5,
      title: 'Supply Chain Optimization for Large Projects',
      category: 'Management',
      author: 'Siti Nurhaliza',
      date: 'Sep 15, 2024',
      readTime: '6 min read',
      excerpt:
        'How to overcome logistical challenges, manage procurement effectively, and ensure timely material delivery for complex infrastructure developments.',
      color: 'from-purple-500 to-fuchsia-600',
      slug: 'supply-chain-optimization-large-projects',
    },
    {
      id: 6,
      title: 'Digital Transformation in Construction Industry',
      category: 'Industry',
      author: 'Ahmad Reza',
      date: 'Sep 02, 2024',
      readTime: '9 min read',
      excerpt:
        'The impact of BIM, drones, IoT sensors, and project management software in revolutionizing traditional construction workflows and improving ROI.',
      color: 'from-cyan-500 to-blue-600',
      slug: 'digital-transformation-construction-industry',
    },
  ];

  return (
    <>
      <HeroSection
        imageUrl="/images/hero_news_1784892776990.png"
        align="center"
        className="bg-muted/30"
        description={t('hero_desc')}
        overline={t('overline')}
        size="default"
        title={t('hero_title')}
      />

      <SectionWrapper className="py-16 md:py-24">
        {/* Category Filter (Visual Only) */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <Badge className="cursor-pointer px-4 py-1.5 text-sm" variant="default">
            {t('all_posts')}
          </Badge>
          <Badge
            className="hover:bg-secondary/80 cursor-pointer px-4 py-1.5 text-sm"
            variant="secondary"
          >
            {t('engineering')}
          </Badge>
          <Badge
            className="hover:bg-secondary/80 cursor-pointer px-4 py-1.5 text-sm"
            variant="secondary"
          >
            {t('management')}
          </Badge>
          <Badge
            className="hover:bg-secondary/80 cursor-pointer px-4 py-1.5 text-sm"
            variant="secondary"
          >
            {t('safety')}
          </Badge>
          <Badge
            className="hover:bg-secondary/80 cursor-pointer px-4 py-1.5 text-sm"
            variant="secondary"
          >
            {t('industry')}
          </Badge>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem
              key={post.id}
              direction="up"
              className="h-full"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="surface-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(53,85,122,0.15)] hover:shadow-card-hover cursor-pointer p-0"
              >
                <div className="block overflow-hidden relative">
                  <div
                    className={`aspect-[16/10] w-full bg-gradient-to-br ${post.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
                  >
                    <BookOpen className="h-16 w-16 text-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
                  </div>
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <Badge className="mb-4 w-fit bg-brand-50 text-brand-700 hover:bg-brand-100 uppercase tracking-widest text-[10px] font-bold" variant="secondary" style={{ border: '1px solid rgba(53,85,122,0.1)' }}>
                    {post.category}
                  </Badge>
                  <div className="block">
                    <h3 className="group-hover:text-brand-600 line-clamp-2 font-heading text-xl font-bold leading-tight transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <div className="text-muted-foreground mt-4 mb-4 flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" style={{ color: '#35557A' }} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" style={{ color: '#35557A' }} />
                      {post.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-auto line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="mt-auto p-8 pt-0">
                  <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest transition-colors duration-200" style={{ color: '#35557A' }}>
                    <span className="group-hover:text-brand-800">{t('read_article')}</span>
                    <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-16 flex justify-center">
          <Button size="lg" variant="outline">
            {t('load_more')}
          </Button>
        </div>
      </SectionWrapper>

      <CtaSection
        description={t('expert_advice_desc')}
        primaryAction={{
          label: 'Contact Us',
          href: ROUTES.CONTACT,
        }}
        title={t('expert_advice')}
      />
    </>
  );
}
