import { Open_Sans, Montserrat, JetBrains_Mono } from 'next/font/google';

import { siteConfig } from '@/lib/config/site.config';
import { QueryProvider } from '@/lib/providers/query-provider';
import { ThemeProvider } from '@/lib/providers/theme-provider';
import { ToastProvider } from '@/lib/providers/toast-provider';

import type { Metadata, Viewport } from 'next';

import '@/app/globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  // Spread readonly tuple into a mutable array to satisfy Next.js Metadata type
  keywords: [...siteConfig.seo.defaultKeywords],
  authors: [{ name: siteConfig.company.name, url: siteConfig.url.base }],
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: siteConfig.seo.locale,
    url: siteConfig.url.base,
    siteName: siteConfig.company.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      { url: siteConfig.url.ogImage, width: 1200, height: 630, alt: siteConfig.company.name },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.url.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      className={`${openSans.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}
      lang="id"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteConfig.company.name,
              url: siteConfig.url.base,
              logo: `${siteConfig.url.base}${siteConfig.url.logo}`,
              description: siteConfig.company.description,
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.contact.address.street,
                addressLocality: siteConfig.contact.address.city,
                addressRegion: siteConfig.contact.address.province,
                postalCode: siteConfig.contact.address.postalCode,
                addressCountry: siteConfig.contact.address.country,
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
            }),
          }}
          type="application/ld+json"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <QueryProvider>
            {children}
            <ToastProvider />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
