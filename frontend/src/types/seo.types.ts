/**
 * SEO and metadata types.
 * @module types/seo
 */

import { type Metadata } from 'next';

/** SEO configuration for a page */
export interface PageSeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

/** Article-specific SEO data */
export interface ArticleSeoData extends PageSeoConfig {
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  section?: string;
  tags?: string[];
}

/** Structured data for Organization (JSON-LD) */
export interface OrganizationJsonLd {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    availableLanguage: string[];
  };
  sameAs: string[];
}

/** Structured data for BreadcrumbList (JSON-LD) */
export interface BreadcrumbJsonLd {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: BreadcrumbJsonLdItem[];
}

/** Individual breadcrumb in JSON-LD */
export interface BreadcrumbJsonLdItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item?: string;
}

/** Structured data for Article (JSON-LD) */
export interface ArticleJsonLd {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  description: string;
  image: string;
  author: {
    '@type': 'Person' | 'Organization';
    name: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
}

/** Structured data for FAQ Page (JSON-LD) */
export interface FaqJsonLd {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: FaqJsonLdItem[];
}

/** Individual FAQ item in JSON-LD */
export interface FaqJsonLdItem {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

/** Helper type for generating Next.js Metadata */
export type GenerateMetadata = (config: PageSeoConfig) => Metadata;
