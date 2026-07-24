/**
 * Structured Data (JSON-LD) components for Schema.org.
 * Enterprise SEO with multiple schema types.
 * @module components/atoms/structured-data
 */

import { siteConfig } from '@/lib/config/site.config';

const BASE_URL = 'https://www.adtociptausahamandiri.co.id';
const COMPANY_NAME = 'PT ADTO Cipta Usaha Mandiri';

// ─── Generic JSON-LD injector ─────────────────────────────────────────────
interface JsonLdProps {
  data: Record<string, unknown>;
  id?: string;
}

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 0) }}
      id={id}
      type="application/ld+json"
    />
  );
}

// ─── Organization ─────────────────────────────────────────────────────────
export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: COMPANY_NAME,
        url: BASE_URL,
        logo: { '@type': 'ImageObject', url: `${BASE_URL}/icons/icon-192x192.png` },
        description:
          'PT ADTO Cipta Usaha Mandiri is a trusted Indonesian enterprise delivering construction, MEP engineering, procurement, and consulting solutions.',
        foundingDate: '2015',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 300 },
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.contact.address.street,
          addressLocality: siteConfig.contact.address.city,
          addressRegion: siteConfig.contact.address.province,
          postalCode: siteConfig.contact.address.postalCode,
          addressCountry: 'ID',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteConfig.contact.phone,
          contactType: 'customer service',
          availableLanguage: ['Indonesian', 'English'],
        },
        sameAs: [
          siteConfig.social.facebook,
          siteConfig.social.instagram,
          siteConfig.social.linkedin,
        ].filter(Boolean),
      }}
      id="schema-organization"
    />
  );
}

// ─── WebSite ──────────────────────────────────────────────────────────────
export function WebsiteSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        name: COMPANY_NAME,
        url: BASE_URL,
        description: siteConfig.company.description,
        publisher: { '@id': `${BASE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'id-ID',
      }}
      id="schema-website"
    />
  );
}

// ─── LocalBusiness ────────────────────────────────────────────────────────
export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'GeneralContractor',
        '@id': `${BASE_URL}/#localbusiness`,
        name: COMPANY_NAME,
        url: BASE_URL,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.contact.address.street,
          addressLocality: siteConfig.contact.address.city,
          addressRegion: siteConfig.contact.address.province,
          postalCode: siteConfig.contact.address.postalCode,
          addressCountry: 'ID',
        },
        geo: { '@type': 'GeoCoordinates', latitude: '-6.2088', longitude: '106.8456' },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
          },
        ],
        priceRange: 'IDR',
        currenciesAccepted: 'IDR',
        areaServed: { '@type': 'Country', name: 'Indonesia' },
      }}
      id="schema-localbusiness"
    />
  );
}

// ─── BreadcrumbList ───────────────────────────────────────────────────────
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
      id="schema-breadcrumb"
    />
  );
}

// ─── Article ──────────────────────────────────────────────────────────────
export function ArticleSchema({
  title,
  description,
  image,
  authorName,
  datePublished,
  dateModified,
  url,
}: {
  title: string;
  description: string;
  image: string;
  authorName: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image,
        url,
        author: { '@type': 'Person', name: authorName },
        publisher: {
          '@type': 'Organization',
          name: COMPANY_NAME,
          logo: { '@type': 'ImageObject', url: `${BASE_URL}/icons/icon-192x192.png` },
        },
        datePublished,
        dateModified: dateModified ?? datePublished,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      }}
      id="schema-article"
    />
  );
}

// ─── Service ──────────────────────────────────────────────────────────────
export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url,
        provider: { '@id': `${BASE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'Indonesia' },
        serviceType: name,
      }}
      id="schema-service"
    />
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────
export function FaqSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }}
      id="schema-faq"
    />
  );
}

// ─── JobPosting ───────────────────────────────────────────────────────────
export function JobPostingSchema({
  title,
  description,
  datePosted,
  validThrough,
  employmentType,
  location,
}: {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType: string;
  location: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title,
        description,
        datePosted,
        validThrough,
        employmentType: employmentType.toUpperCase().replace('-', '_'),
        hiringOrganization: {
          '@type': 'Organization',
          name: COMPANY_NAME,
          sameAs: BASE_URL,
          logo: `${BASE_URL}/icons/icon-192x192.png`,
        },
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: location,
            addressCountry: 'ID',
          },
        },
      }}
      id="schema-jobposting"
    />
  );
}
