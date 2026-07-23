/**
 * Schema.org JSON-LD structured data components.
 * @module components/atoms/schema-org
 */

import { siteConfig } from '@/lib/config/site.config';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} type="application/ld+json" />
  );
}

/**
 * Organization schema for company pages.
 */
export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url.base}/#organization`,
    name: siteConfig.company.name,
    url: siteConfig.url.base,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url.base}${siteConfig.url.logo}`,
    },
    description: siteConfig.company.description,
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
    foundingDate: '2015',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 300,
    },
  };

  return <JsonLd data={data} />;
}

/**
 * WebSite schema with sitelinks searchbox.
 */
export function WebsiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url.base}/#website`,
    name: siteConfig.company.name,
    url: siteConfig.url.base,
    description: siteConfig.company.description,
    publisher: {
      '@id': `${siteConfig.url.base}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url.base}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'id-ID',
  };

  return <JsonLd data={data} />;
}

/**
 * BreadcrumbList schema.
 */
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={data} />;
}

/**
 * Article schema for blog/news pages.
 */
export function ArticleSchema({
  title,
  description,
  image,
  authorName,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  image: string;
  authorName: string;
  datePublished: string;
  dateModified?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.company.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url.base}${siteConfig.url.logo}`,
      },
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
  };

  return <JsonLd data={data} />;
}

/**
 * LocalBusiness schema.
 */
export function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${siteConfig.url.base}/#localbusiness`,
    name: siteConfig.company.name,
    url: siteConfig.url.base,
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-6.2088',
      longitude: '106.8456',
    },
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
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
  };

  return <JsonLd data={data} />;
}
