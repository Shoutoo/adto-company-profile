'use client';

/**
 * Analytics — Google Analytics 4 + Meta Pixel.
 * Only renders in production.
 * @module components/atoms/analytics
 */

import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function Analytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      {GA_ID && (
        <>
          <Script
            id="google-analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true,
                  anonymize_ip: true,
                  cookie_flags: 'SameSite=None;Secure',
                });
              `,
            }}
            id="google-analytics-init"
            strategy="afterInteractive"
          />
        </>
      )}

      {META_PIXEL_ID && (
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
          id="meta-pixel"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}

/** Track a GA4 custom event */
export function trackEvent(action: string, category: string, label?: string, value?: number): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

/** Track a form submission */
export function trackFormSubmit(formName: string): void {
  trackEvent('form_submit', 'engagement', formName);
}

/** Track a CTA click */
export function trackCtaClick(ctaLabel: string, location: string): void {
  trackEvent('cta_click', 'engagement', `${ctaLabel} — ${location}`);
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    fbq: (...args: unknown[]) => void;
  }
}
