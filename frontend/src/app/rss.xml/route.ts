import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.adtociptausahamandiri.co.id';
const COMPANY_NAME = 'PT Adto Cipta Usaha Mandiri';

/**
 * RSS 2.0 feed for news and blog content.
 * Route: GET /rss.xml
 */
export function GET(): NextResponse {
  // In production, fetch from API
  const articles = [
    {
      title: 'PT Adto Cipta Usaha Mandiri Completes Major Refinery Project',
      link: `${BASE_URL}/news/refinery-project-completion`,
      description:
        'Successfully completed a major refinery expansion project for Pertamina in Balikpapan.',
      pubDate: new Date('2024-11-15').toUTCString(),
      category: 'Company News',
    },
    {
      title: 'Best Practices in Industrial Project Management',
      link: `${BASE_URL}/blog/industrial-project-management`,
      description:
        'Insights into effective project management strategies for large-scale industrial projects.',
      pubDate: new Date('2024-10-20').toUTCString(),
      category: 'Blog',
    },
    {
      title: 'Understanding MEP Systems in Modern Buildings',
      link: `${BASE_URL}/blog/mep-systems-modern-buildings`,
      description:
        'A comprehensive guide to Mechanical, Electrical, and Plumbing systems in contemporary architecture.',
      pubDate: new Date('2024-09-05').toUTCString(),
      category: 'Blog',
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${COMPANY_NAME} — News &amp; Blog</title>
    <link>${BASE_URL}</link>
    <description>Latest news and insights from ${COMPANY_NAME}, Indonesia's trusted enterprise solutions provider.</description>
    <language>id-ID</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/og-image.png</url>
      <title>${COMPANY_NAME}</title>
      <link>${BASE_URL}</link>
    </image>
    ${articles
      .map(
        (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${article.link}</link>
      <guid isPermaLink="true">${article.link}</guid>
      <description><![CDATA[${article.description}]]></description>
      <pubDate>${article.pubDate}</pubDate>
      <category>${article.category}</category>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
