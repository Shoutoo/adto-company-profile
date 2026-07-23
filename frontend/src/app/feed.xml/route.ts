import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.adtociptausahamandiri.co.id';
const COMPANY_NAME = 'PT Adto Cipta Usaha Mandiri';

/**
 * Atom 1.0 feed — alternative to RSS.
 * Route: GET /feed.xml
 */
export function GET(): NextResponse {
  const updated = new Date().toISOString();

  const entries = [
    {
      id: `${BASE_URL}/news/refinery-project-completion`,
      title: 'PT Adto Cipta Usaha Mandiri Completes Major Refinery Project',
      updated: '2024-11-15T00:00:00Z',
      summary: 'Successfully completed a major refinery expansion project for Pertamina.',
      link: `${BASE_URL}/news/refinery-project-completion`,
    },
    {
      id: `${BASE_URL}/blog/industrial-project-management`,
      title: 'Best Practices in Industrial Project Management',
      updated: '2024-10-20T00:00:00Z',
      summary:
        'Insights into effective project management strategies for large-scale industrial projects.',
      link: `${BASE_URL}/blog/industrial-project-management`,
    },
  ];

  const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${COMPANY_NAME}</title>
  <subtitle>Enterprise Construction, Engineering &amp; Consulting Solutions</subtitle>
  <link href="${BASE_URL}/feed.xml" rel="self" type="application/atom+xml"/>
  <link href="${BASE_URL}" rel="alternate" type="text/html"/>
  <id>${BASE_URL}/</id>
  <updated>${updated}</updated>
  <author>
    <name>${COMPANY_NAME}</name>
    <email>info@adtociptausahamandiri.co.id</email>
    <uri>${BASE_URL}</uri>
  </author>
  <logo>${BASE_URL}/og-image.png</logo>
  <icon>${BASE_URL}/favicon.ico</icon>
  ${entries
    .map(
      (entry) => `
  <entry>
    <id>${entry.id}</id>
    <title><![CDATA[${entry.title}]]></title>
    <updated>${entry.updated}</updated>
    <summary><![CDATA[${entry.summary}]]></summary>
    <link href="${entry.link}" rel="alternate"/>
  </entry>`
    )
    .join('')}
</feed>`;

  return new NextResponse(atom, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
