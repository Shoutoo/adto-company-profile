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
      href: 'https://www.google.com/maps/search/?api=1&query=-6.291354587959362,106.80360488062927'
    },
    {
      icon: Phone,
      title: tContact('call_us'),
      details: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`
    },
    {
      icon: Mail,
      title: tContact('email_us'),
      details: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: siteConfig.contact.whatsapp,
      href: `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`
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
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {CONTACT_INFO.map((info, idx) => (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    className="group relative flex flex-col items-start overflow-hidden rounded-[24px] border border-slate-100 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:border-navy hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] focus:outline-none focus:ring-2 focus:ring-navy/50 cursor-pointer"
                    style={{ boxShadow: '0 10px 30px rgba(15,23,42,0.06)' }}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-orange">
                        <info.icon
                          className="h-5 w-5 transition-transform duration-300 group-hover:rotate-3"
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                    <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-navy transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-500">{info.details}</p>
                  </a>
                ))}
              </div>
            </div>

            <Separator className="bg-border" />

            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold uppercase tracking-wider text-foreground">
                Operating Hours
              </h2>
              <div
                className="group relative flex items-start gap-6 overflow-hidden rounded-[24px] border border-slate-100 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:border-navy hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
                style={{ boxShadow: '0 10px 30px rgba(15,23,42,0.06)' }}
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-50 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-orange">
                    <Clock className="h-5 w-5 transition-transform duration-300 group-hover:rotate-3" strokeWidth={2} />
                  </div>
                </div>
                <div className="pt-1">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs uppercase tracking-wider">
                    <div className="font-bold text-slate-500">Monday - Friday:</div>
                    <div className="font-bold text-slate-900">08:00 AM - 05:00 PM</div>
                    <div className="font-bold text-slate-500">Saturday:</div>
                    <div className="font-bold text-slate-900">08:00 AM - 12:00 PM</div>
                    <div className="font-bold text-slate-500">Sunday:</div>
                    <div className="font-bold text-orange">Closed</div>
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
                className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-navy px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-orange hover:shadow-md"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-6.291354587959362,106.80360488062927"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-md border border-navy bg-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-navy shadow-sm transition-all hover:bg-navy-light/10 hover:shadow-md"
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
