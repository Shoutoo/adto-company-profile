/**
 * SEO utility — generates Next.js 15 Metadata from PageSeoConfig.
 * @module lib/utils/seo
 */

import { siteConfig } from '@/lib/config/site.config';

import type { Metadata } from 'next';

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

export function generateMetadata(config: PageSeoConfig): Metadata {
  const {
    title,
    description,
    keywords,
    ogImage = siteConfig.url.ogImage,
    ogType = 'website',
    canonicalUrl,
    noIndex = false,
    noFollow = false,
    publishedTime,
    modifiedTime,
    authors,
  } = config;

  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteConfig.url.base}${ogImage}`;

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      type: ogType,
      url: canonicalUrl ?? siteConfig.url.base,
      siteName: siteConfig.company.name,
      locale: 'id_ID',
      images: [{ url: fullOgImage, width: 1200, height: 630, alt: title }],
      ...(ogType === 'article' && publishedTime ? { publishedTime, modifiedTime, authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullOgImage],
      site: siteConfig.social.twitter ?? undefined,
    },
    alternates: { canonical: canonicalUrl ?? siteConfig.url.base },
  };
}

export function formatPageTitle(pageTitle: string): string {
  return `${pageTitle} | ${siteConfig.company.shortName}`;
}
