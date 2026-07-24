import { Play } from 'lucide-react';
import { type Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { HeroSection } from '@/components/molecules/hero-section-main';
import { ResponsiveGrid } from '@/components/molecules/responsive-grid';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Media Gallery',
  description: 'Explore our visual portfolio of projects, team events, and company milestones.',
});

const GALLERY_CATEGORIES = ['All', 'Projects', 'Events', 'Team'];

const GALLERY_ITEMS = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: `Gallery Item ${i + 1}`,
  category: GALLERY_CATEGORIES[(i % 3) + 1],
}));

/**
 * Media Gallery Page
 * Server Component
 */
export default async function MediaGalleryPage() {
  const t = await getTranslations('MediaGallery');
  return (
    <>
      <HeroSection
        imageUrl="/images/hero_gallery_1784892794601.png"
        align="center"
        description={t('hero_desc')}
        overline={t('overline')}
        title={t('hero_title')}
      />

      <SectionWrapper>
        <Tabs className="w-full" defaultValue="All">
          <div className="mb-10 flex justify-center">
            <TabsList>
              {GALLERY_CATEGORIES.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {GALLERY_CATEGORIES.map((category) => (
            <TabsContent
              key={category}
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              value={category}
            >
              <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 4 }} gap="default">
                {GALLERY_ITEMS.filter(
                  (item) => category === 'All' || item.category === category
                ).map((item) => (
                  <div
                    key={item.id}
                    className="from-primary/20 to-primary/5 group relative aspect-square cursor-pointer overflow-hidden rounded-none bg-gradient-to-br"
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="translate-y-4 transform px-4 text-center text-lg font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </ResponsiveGrid>
            </TabsContent>
          ))}
        </Tabs>
      </SectionWrapper>

      <SectionWrapper
        className="bg-muted/30"
        header={{
          overline: 'Video Gallery',
          title: 'Featured Videos',
          description: 'Watch our project highlights and company overviews.',
        }}
      >
        <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 2 }} gap="lg">
          {[1, 2].map((i) => (
            <Card key={i} className="group cursor-pointer overflow-hidden border-0">
              <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100">
                <div className="bg-primary/90 text-primary-foreground flex h-16 w-16 items-center justify-center rounded-none shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-foreground text-lg font-medium drop-shadow-md">
                    Featured Video {i}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </ResponsiveGrid>
      </SectionWrapper>
    </>
  );
}
