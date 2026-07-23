/**
 * SEO constants for all pages.
 * Used with the generateMetadata() utility.
 * @module lib/constants/seo
 */

import type { PageSeoConfig } from '@/lib/utils/seo';

const BASE_URL = 'https://www.adtociptausahamandiri.co.id';
const COMPANY = 'PT Adto Cipta Usaha Mandiri';
const TAGLINE = 'Building Excellence, Delivering Trust';

export const PAGE_SEO: Record<string, PageSeoConfig> = {
  HOME: {
    title: `${COMPANY} — ${TAGLINE}`,
    description:
      'PT Adto Cipta Usaha Mandiri is a trusted Indonesian enterprise delivering construction, MEP engineering, procurement, project management, and consulting solutions nationwide.',
    keywords: [
      'konstruksi Indonesia',
      'PT Adto Cipta Usaha Mandiri',
      'general contractor',
      'MEP engineering',
      'procurement Indonesia',
      'project management',
      'konsultan konstruksi',
      'enterprise solutions',
    ],
    ogImage: '/og-image.png',
    canonicalUrl: BASE_URL,
  },
  ABOUT: {
    title: `About Us — ${COMPANY}`,
    description:
      "Learn about PT Adto Cipta Usaha Mandiri — our history, vision, mission, core values, and the expert team behind Indonesia's trusted enterprise solutions provider since 2015.",
    keywords: [
      'about PT Adto Cipta Usaha Mandiri',
      'company profile',
      'sejarah perusahaan',
      'visi misi',
    ],
    canonicalUrl: `${BASE_URL}/about`,
  },
  SERVICES: {
    title: `Our Services — ${COMPANY}`,
    description:
      'Explore our comprehensive services: General Construction, MEP Engineering, Procurement & Supply, Project Management, Consulting, Trading & Distribution, and more.',
    keywords: [
      'jasa konstruksi',
      'MEP engineering',
      'procurement Indonesia',
      'konsultan proyek',
      'general contractor',
    ],
    canonicalUrl: `${BASE_URL}/services`,
  },
  INDUSTRIES: {
    title: `Industries We Serve — ${COMPANY}`,
    description:
      'Serving Oil & Gas, Power & Energy, Mining, Manufacturing, Infrastructure, Real Estate, Telecommunications, and Government sectors across Indonesia.',
    keywords: [
      'oil gas contractor',
      'mining construction',
      'power plant contractor',
      'infrastructure Indonesia',
    ],
    canonicalUrl: `${BASE_URL}/industries`,
  },
  PRODUCTS: {
    title: `Products — ${COMPANY}`,
    description:
      'Quality industrial equipment, safety gear, electrical components, piping, construction materials, and industrial tools with competitive pricing and fast delivery.',
    keywords: [
      'industrial equipment Indonesia',
      'safety equipment',
      'construction materials',
      'alat berat',
    ],
    canonicalUrl: `${BASE_URL}/products`,
  },
  PROJECTS: {
    title: `Our Projects — ${COMPANY}`,
    description:
      'Explore 500+ successfully completed projects across oil & gas, power, mining, manufacturing, and infrastructure sectors throughout Indonesia.',
    keywords: [
      'proyek konstruksi Indonesia',
      'portfolio contractor',
      'completed projects',
      'case portfolio',
    ],
    canonicalUrl: `${BASE_URL}/projects`,
  },
  CASE_STUDIES: {
    title: `Case Studies — ${COMPANY}`,
    description:
      'In-depth analysis of our most challenging and impactful projects — challenges faced, solutions delivered, and measurable results achieved.',
    keywords: ['case study konstruksi', 'project analysis', 'engineering solutions Indonesia'],
    canonicalUrl: `${BASE_URL}/case-studies`,
  },
  NEWS: {
    title: `News & Updates — ${COMPANY}`,
    description:
      'Latest company news, press releases, industry updates, and awards from PT Adto Cipta Usaha Mandiri.',
    keywords: ['berita perusahaan', 'company news', 'press release konstruksi Indonesia'],
    canonicalUrl: `${BASE_URL}/news`,
  },
  BLOG: {
    title: `Blog & Insights — ${COMPANY}`,
    description:
      'Industry knowledge, technical insights, and expert perspectives on construction, engineering, project management, and business operations in Indonesia.',
    keywords: [
      'blog konstruksi',
      'engineering insights',
      'project management tips',
      'industry knowledge',
    ],
    canonicalUrl: `${BASE_URL}/blog`,
  },
  KNOWLEDGE_CENTER: {
    title: `Knowledge Center — ${COMPANY}`,
    description:
      'Access technical guides, white papers, certifications documentation, standards & compliance resources from PT Adto Cipta Usaha Mandiri.',
    keywords: [
      'technical guides',
      'white paper konstruksi',
      'ISO certification',
      'standar konstruksi',
    ],
    canonicalUrl: `${BASE_URL}/knowledge-center`,
  },
  MEDIA_GALLERY: {
    title: `Media Gallery — ${COMPANY}`,
    description:
      'Visual portfolio of our projects, events, and team — photos and videos showcasing our work across Indonesia.',
    keywords: ['galeri proyek', 'construction photos', 'project gallery Indonesia'],
    canonicalUrl: `${BASE_URL}/media-gallery`,
  },
  CAREER: {
    title: `Career Opportunities — ${COMPANY}`,
    description:
      'Join our growing team of 300+ professionals. Explore career opportunities in engineering, project management, procurement, HSE, and business development.',
    keywords: [
      'lowongan kerja konstruksi',
      'engineering jobs Indonesia',
      'career contractor',
      'HSE officer',
    ],
    canonicalUrl: `${BASE_URL}/career`,
  },
  CONTACT: {
    title: `Contact Us — ${COMPANY}`,
    description:
      'Get in touch with PT Adto Cipta Usaha Mandiri. Visit our office in Jakarta or contact us via phone, email, or WhatsApp for inquiries and partnerships.',
    keywords: ['kontak PT Adto', 'contact contractor Jakarta', 'alamat perusahaan', 'hubungi kami'],
    canonicalUrl: `${BASE_URL}/contact`,
  },
  VENDOR_REGISTRATION: {
    title: `Vendor Registration — ${COMPANY}`,
    description:
      'Register as an approved vendor or supplier of PT Adto Cipta Usaha Mandiri. Join our trusted network of partners across Indonesia.',
    keywords: ['vendor registration', 'supplier Indonesia', 'daftar vendor', 'mitra bisnis'],
    canonicalUrl: `${BASE_URL}/vendor-registration`,
  },
  REQUEST_QUOTATION: {
    title: `Request Quotation — ${COMPANY}`,
    description:
      'Request a customized quotation for construction, engineering, procurement, or consulting services. Get a competitive proposal within 2 business days.',
    keywords: ['request quotation contractor', 'penawaran harga konstruksi', 'RFQ Indonesia'],
    canonicalUrl: `${BASE_URL}/request-quotation`,
  },
  PRIVACY_POLICY: {
    title: `Privacy Policy — ${COMPANY}`,
    description:
      'Privacy Policy of PT Adto Cipta Usaha Mandiri — how we collect, use, and protect your personal information.',
    canonicalUrl: `${BASE_URL}/privacy-policy`,
    noIndex: false,
  },
  TERMS_OF_SERVICE: {
    title: `Terms of Service — ${COMPANY}`,
    description:
      'Terms of Service governing your use of PT Adto Cipta Usaha Mandiri website and services.',
    canonicalUrl: `${BASE_URL}/terms-of-service`,
    noIndex: false,
  },
};

/** Organization JSON-LD schema */
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: COMPANY,
  url: BASE_URL,
  logo: { '@type': 'ImageObject', url: `${BASE_URL}/icons/icon-192x192.png` },
  description:
    'PT Adto Cipta Usaha Mandiri is a trusted Indonesian enterprise delivering construction, engineering, procurement, and consulting solutions.',
  foundingDate: '2015',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Sudirman No. 1',
    addressLocality: 'Jakarta Pusat',
    addressRegion: 'DKI Jakarta',
    postalCode: '10220',
    addressCountry: 'ID',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+62-21-1234-5678',
    contactType: 'customer service',
    availableLanguage: ['Indonesian', 'English'],
  },
  sameAs: [
    'https://www.facebook.com/adtomandiri',
    'https://www.instagram.com/adtomandiri',
    'https://www.linkedin.com/company/adtomandiri',
  ],
};
