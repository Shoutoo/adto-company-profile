import Link from 'next/link';

import { ArrowRight, BookOpen, Clock, User } from 'lucide-react';
import { type Metadata } from 'next';

import { CtaSection } from '@/components/molecules/CtaSection';
import { HeroSection } from '@/components/molecules/HeroSection';
import { ResponsiveGrid } from '@/components/molecules/ResponsiveGrid';
import { SectionWrapper } from '@/components/molecules/SectionWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
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
export default function BlogPage() {
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
    },
  ];

  return (
    <>
      <HeroSection
        align="center"
        className="bg-muted/30"
        description="Insights, guides, and thought leadership from our team of engineering and construction professionals."
        overline="Blog & Insights"
        size="default"
        title="Industry Knowledge & Expertise"
      />

      <SectionWrapper className="py-16 md:py-24">
        {/* Category Filter (Visual Only) */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <Badge className="cursor-pointer px-4 py-1.5 text-sm" variant="default">
            All Posts
          </Badge>
          <Badge
            className="hover:bg-secondary/80 cursor-pointer px-4 py-1.5 text-sm"
            variant="secondary"
          >
            Engineering
          </Badge>
          <Badge
            className="hover:bg-secondary/80 cursor-pointer px-4 py-1.5 text-sm"
            variant="secondary"
          >
            Management
          </Badge>
          <Badge
            className="hover:bg-secondary/80 cursor-pointer px-4 py-1.5 text-sm"
            variant="secondary"
          >
            Safety
          </Badge>
          <Badge
            className="hover:bg-secondary/80 cursor-pointer px-4 py-1.5 text-sm"
            variant="secondary"
          >
            Industry
          </Badge>
        </div>

        <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }} gap="xl">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="hover:border-primary/50 group flex h-full flex-col overflow-hidden border shadow-sm transition-all hover:shadow-md"
            >
              <Link className="block overflow-hidden" href="#">
                <div
                  className={`aspect-[16/10] w-full bg-gradient-to-br ${post.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
                >
                  <BookOpen className="h-16 w-16 text-white/20" />
                </div>
              </Link>
              <CardHeader className="flex-1 p-6">
                <Badge className="bg-muted mb-3 w-fit" variant="secondary">
                  {post.category}
                </Badge>
                <Link href="#">
                  <CardTitle className="group-hover:text-primary line-clamp-2 text-xl leading-snug transition-colors">
                    {post.title}
                  </CardTitle>
                </Link>
                <div className="text-muted-foreground mt-4 flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                </div>
                <p className="text-muted-foreground mt-4 line-clamp-3 text-sm">{post.excerpt}</p>
              </CardHeader>
              <div className="mt-auto p-6 pt-0">
                <Link
                  className="text-primary inline-flex items-center text-sm font-semibold group-hover:underline"
                  href="#"
                >
                  Read Article{' '}
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </ResponsiveGrid>

        <div className="mt-16 flex justify-center">
          <Button size="lg" variant="outline">
            Load More Articles
          </Button>
        </div>
      </SectionWrapper>

      <CtaSection
        description="Our team of seasoned professionals is ready to provide consultation for your next major project."
        primaryAction={{
          label: 'Contact Us',
          href: ROUTES.CONTACT,
        }}
        title="Looking for Expert Advice?"
      />
    </>
  );
}
