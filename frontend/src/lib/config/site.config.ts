/**
 * Site-wide configuration and metadata.
 * Central source of truth for company information.
 * @module lib/config/site
 */

import { env } from './env.config';

/** Site configuration object */
export const siteConfig = {
  /** Company details */
  company: {
    name: 'PT Adto Cipta Usaha Mandiri',
    shortName: 'ADTO',
    legalName: 'PT Adto Cipta Usaha Mandiri',
    tagline: 'Energi Terpadu, Solusi Mandiri',
    description:
      'Mitra strategis terdepan berskala nasional dalam penyediaan kebutuhan industri dan manajemen rantai pasok.',
    foundedYear: 2026,
  },

  /** URLs */
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    api: env.NEXT_PUBLIC_API_URL,
    logo: '/logo.svg',
    logoWhite: '/logo.svg',
    logoDark: '/logo.svg',
    ogImage: '/images/og-default.jpg',
    favicon: '/favicon.ico',
  },

  /** Contact information */
  contact: {
    email: 'sales@adto.co.id',
    phone: '+62 811 1234 5678',
    whatsapp: '+6281112345678',
    address: {
      street: 'Depok',
      city: 'Depok',
      province: 'West Java',
      postalCode: '16411',
      country: 'Indonesia',
      full: 'Depok, West Java, Indonesia',
    },
  },

  /** Social media URLs */
  social: {
    facebook: 'https://facebook.com/adtocipta',
    instagram: 'https://instagram.com/adtocipta',
    linkedin: 'https://linkedin.com/company/adtocipta',
    twitter: null,
    youtube: null,
    tiktok: null,
  },

  /** SEO defaults */
  seo: {
    titleTemplate: '%s | PT Adto Cipta Usaha Mandiri',
    defaultTitle: 'PT Adto Cipta Usaha Mandiri — Energi Terpadu, Solusi Mandiri',
    defaultDescription:
      'PT Adto Cipta Usaha Mandiri adalah perusahaan penyedia solusi terintegrasi untuk industri migas & pertambangan.',
    defaultKeywords: [
      'PT Adto Cipta Usaha Mandiri',
      'Adto Cipta',
      'company profile',
      'enterprise services',
      'Indonesia',
      'professional services',
    ],
    locale: 'id_ID',
    alternateLocale: 'en_US',
    type: 'website' as const,
    twitterHandle: '@adtocipta',
  },

  /** Application settings */
  app: {
    name: env.NEXT_PUBLIC_APP_NAME,
    locale: 'id-ID',
    timezone: 'Asia/Jakarta',
    currency: 'IDR',
    dateFormat: 'dd MMMM yyyy',
    timeFormat: 'HH:mm',
    dateTimeFormat: 'dd MMMM yyyy, HH:mm',
    paginationDefault: 12,
    paginationOptions: [6, 12, 24, 48] as readonly number[],
    maxFileSize: 5 * 1024 * 1024, // 5MB
    allowedImageTypes: [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/svg+xml',
    ] as readonly string[],
    allowedDocumentTypes: ['application/pdf'] as readonly string[],
  },

  /** Google Analytics */
  analytics: {
    gaId: env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? null,
  },
} as const;

/** Type for the site configuration */
export type SiteConfig = typeof siteConfig;
