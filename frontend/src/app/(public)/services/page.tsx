import Image from 'next/image';
import Link from 'next/link';

import {
  Zap,
  Wrench,
  Truck,
  ArrowRight,
} from 'lucide-react';
import { type Metadata } from 'next';

import { CtaSection } from '@/components/molecules/cta-section';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { PageHeader } from '@/components/molecules/page-header';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { ROUTES } from '@/lib/constants/routes.constants';
import { PAGE_SEO } from '@/lib/constants/seo.constants';
import { generateMetadata as getMetadata } from '@/lib/utils/seo';

export function generateMetadata(): Metadata {
  return PAGE_SEO.SERVICES
    ? getMetadata(PAGE_SEO.SERVICES)
    : getMetadata({
        title: 'Our Services',
        description: 'Layanan terpadu penyediaan chemical, sparepart, dan mobilisasi dari PT Adto Cipta Usaha Mandiri.',
      });
}

export default function ServicesPage() {
  const breadcrumbItems = [
    { label: 'Home', href: ROUTES.HOME },
    { label: 'Services', href: ROUTES.SERVICES, active: true },
  ];

  const services = [
    {
      title: 'Chemical Drilling & Industrial',
      desc: 'Penyediaan material bahan kimia standar API Grade & Industrial Grade dengan sistem ready stock di Depok.',
      icon: Zap,
      image: '/images/service_chemical_1784816687085.png',
      sub: ['Bentonite API Grade', 'Barite', 'Caustic Soda', 'Polyanionic Cellulose (PAC)'],
    },
    {
      title: 'Sparepart Alat Berat & Pump',
      desc: 'Supply sparepart presisi untuk Caterpillar, Komatsu, dan pompa Schlumberger. Solusi cepat untuk unit breakdown.',
      icon: Wrench,
      image: '/images/service_mechanical_1784816644706.png',
      sub: ['Caterpillar Parts', 'Komatsu Parts', 'Schlumberger Pumps', 'Fast-Track Procurement'],
    },
    {
      title: 'Mobilisasi & Transportasi',
      desc: 'Dukungan armada angkutan berat terkalibrasi untuk pengiriman aman ke wilayah operasional terpencil.',
      icon: Truck,
      image: '/images/service_heavy_1784816700775.png',
      sub: ['Truk Tangki', 'Tronton & Lowbed', 'GPS Tracking 24/7', 'Pengawalan & Perizinan'],
    },
  ];

  return (
    <>
      <PageHeader
        breadcrumbs={breadcrumbItems}
        description="Solusi rantai pasok terintegrasi untuk mendukung kelancaran operasional mega-proyek Anda."
        title="Layanan Terpadu"
      />

      <HeroSection
        align="left"
        backgroundVariant="dark"
        description="Kami menghadirkan layanan One-Stop Solution yang responsif dan dapat diandalkan untuk menjamin ketersediaan material dan armada transportasi logistik Anda."
        overline="Kapabilitas Kami"
        title="Keunggulan Layanan & Pengadaan."
        imageUrl="/images/service-1.jpeg"
      />

      <SectionWrapper background="alt" id="services-list">
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="surface-card group flex flex-col overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(53,85,122,0.15)] hover:shadow-card-hover"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={svc.image} alt={svc.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F5C]/80 to-transparent opacity-50" />
                </div>
                
                <div className="flex flex-1 flex-col p-8 pt-4">
                  <div className="-mt-12 mb-4 flex h-14 w-14 items-center justify-center rounded-[14px] bg-white transition-all duration-300 group-hover:scale-110" style={{ border: '1px solid rgba(53,85,122,0.14)', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                    <Icon
                      className="h-6 w-6 transition-colors duration-300"
                      strokeWidth={1.5}
                      style={{ color: '#35557A' }}
                    />
                  </div>
                  <h3 className="mb-4 font-heading text-lg font-bold uppercase tracking-wider text-foreground">
                    {svc.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                    {svc.desc}
                  </p>
                  <ul className="mb-8 space-y-3 flex-1">
                    {svc.sub.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-center gap-3 text-sm">
                        <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'linear-gradient(135deg, #35557A, #F58220)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest transition-colors duration-200"
                    style={{ color: '#35557A' }}
                    href={`${ROUTES.SERVICES}/${svc.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="group-hover:text-brand-800">View Detail</span>
                    <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        header={{ overline: 'Methodology', title: 'Our Strategic Process' }}
        id="our-process"
      >
        <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-10 z-0 hidden h-px md:block" style={{ background: 'linear-gradient(90deg, transparent, rgba(53,85,122,0.2), rgba(245,130,32,0.3), rgba(53,85,122,0.2), transparent)' }} />

          {[
            {
              step: '01',
              title: 'Konsultasi Kebutuhan',
              desc: 'Identifikasi spesifikasi teknis dan skala proyek yang Anda butuhkan.',
            },
            {
              step: '02',
              title: 'Sourcing & QC',
              desc: 'Pengadaan material presisi (API Grade) dengan Quality Control ketat.',
            },
            {
              step: '03',
              title: 'Mobilisasi Armada',
              desc: 'Pengaturan logistik menggunakan armada terkalibrasi ke lokasi site.',
            },
            {
              step: '04',
              title: 'Handover & Support',
              desc: 'Serah terima tepat waktu dengan dukungan teknis purna jual.',
            },
          ].map((process, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[20px] bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_24px_rgba(53,85,122,0.12)]" style={{ border: '1px solid rgba(53,85,122,0.1)', boxShadow: '0 4px 12px rgba(53,85,122,0.06)' }}>
                <span className="font-heading text-2xl font-bold" style={{ background: 'linear-gradient(135deg, #35557A, #F58220)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {process.step}
                </span>
              </div>
              <h3 className="mb-3 font-heading text-lg font-bold uppercase tracking-wider text-foreground">
                {process.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">{process.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection
        description="Tim ahli kami siap memberikan solusi khusus yang disesuaikan dengan kebutuhan teknis proyek Anda."
        primaryAction={{ label: 'Diskusikan Proyek Anda', href: ROUTES.CONTACT }}
        title="Butuh Solusi Kustom?"
        variant="brand"
      />
    </>
  );
}
