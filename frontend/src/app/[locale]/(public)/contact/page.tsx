import { MapPin, Phone, Mail, MessageCircle, Clock, Navigation } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { DynamicLocationMap } from '@/components/molecules/dynamic-location-map';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { PageHeader } from '@/components/molecules/page-header';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/lib/config/site.config';

import { ContactForm } from './contact-form';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });
  return {
    title: t('contact_title'),
    description: t('contact_desc'),
  };
}

/**
 * Contact Page
 * Server Component
 */
export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tContact = await getTranslations('Contact');
  const tNav = await getTranslations('Navbar');

  const CONTACT_INFO = [
    {
      icon: MapPin,
      title: tContact('office'),
      details: siteConfig.contact.address.full,
    },
    {
      icon: Phone,
      title: tContact('call_us'),
      details: siteConfig.contact.phone,
    },
    {
      icon: Mail,
      title: tContact('email_us'),
      details: siteConfig.contact.email,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: siteConfig.contact.whatsapp,
    },
  ];

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: tNav('home'), href: '/' },
          { label: tNav('contact'), href: '/contact', active: true },
        ]}
        description={tContact('hero_desc')}
        title={tContact('hero_title')}
      />

      <HeroSection
        align="left"
        backgroundVariant="dark"
        description={tContact('hero_desc')}
        overline={tContact('title')}
        title="Get in Touch."
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <SectionWrapper>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Info */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
                {tContact('info_title')}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {CONTACT_INFO.map((info, idx) => (
                  <div
                    key={idx}
                    className="group border border-border bg-slate-50 p-6 transition-colors hover:border-brand-600"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center bg-white text-brand-600 shadow-sm">
                      <info.icon
                        className="h-5 w-5 transition-transform group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="mb-2 font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                      {info.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{info.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="bg-border" />

            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
                Operating Hours
              </h2>
              <div className="flex items-start gap-4 border border-border bg-slate-50 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white text-brand-600 shadow-sm">
                  <Clock className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs uppercase tracking-wider">
                    <div className="font-bold text-muted-foreground">Monday - Friday:</div>
                    <div className="font-bold text-foreground">08:00 AM - 05:00 PM</div>
                    <div className="font-bold text-muted-foreground">Saturday:</div>
                    <div className="font-bold text-foreground">08:00 AM - 12:00 PM</div>
                    <div className="font-bold text-muted-foreground">Sunday:</div>
                    <div className="font-bold text-brand-600">Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map */}
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
              Our Location
            </h2>
            <div className="relative flex h-full min-h-[400px] w-full flex-col overflow-hidden rounded-2xl border border-border shadow-sm">
              <DynamicLocationMap />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/search/?api=1&query=-6.291354587959362,106.80360488062927"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-6.291354587959362,106.80360488062927"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-md border border-brand-600 bg-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-brand-600 shadow-sm transition-all hover:bg-brand-50 hover:shadow-md"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Form Section */}
      <SectionWrapper className="border-t border-border bg-slate-50">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold uppercase tracking-wider text-foreground">
              {tContact('form_title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {tContact('form_desc')}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm md:p-12">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
