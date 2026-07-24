import { Link } from '@/i18n/routing';

import {
  ShieldAlert,
  Settings,
  BadgeCheck,
  Banknote,
  Clock,
  Headset,
  ArrowRight,
} from 'lucide-react';
import { type Metadata } from 'next';

import { CtaSection } from '@/components/molecules/cta-section';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { PageHeader } from '@/components/molecules/page-header';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { ROUTES } from '@/lib/constants/routes.constants';
import { generateMetadata as getMetadata } from '@/lib/utils/seo';

export function generateMetadata(): Metadata {
  return getMetadata({
    title: 'Produk Industri',
    description: 'Material chemical, sparepart, dan logistik oleh PT Adto Cipta Usaha Mandiri.',
  });
}

export default function ProductsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: ROUTES.HOME },
    { label: 'Products', href: '/products', active: true },
  ];

  const categories = [
    {
      title: 'Chemical Drilling',
      desc: 'Bentonite, Barite, Caustic Soda, PAC, dan chemical khusus API grade untuk migas.',
      icon: ShieldAlert,
    },
    {
      title: 'Sparepart Alat Berat',
      desc: 'Suku cadang original Caterpillar dan Komatsu untuk pencegahan downtime.',
      icon: Settings,
    },
    {
      title: 'Industrial Pump Parts',
      desc: 'Sparepart khusus pompa Schlumberger dan sistem hidrolik industri.',
      icon: Settings,
    },
  ];

  const features = [
    {
      title: 'API Grade Certified',
      desc: 'Seluruh material chemical memenuhi standar ketat API (American Petroleum Institute).',
      icon: BadgeCheck,
    },
    {
      title: 'Ready Stock',
      desc: 'Gudang mandiri di Depok menjamin ketersediaan material krusial tanpa delay.',
      icon: Clock,
    },
    {
      title: 'Harga Kompetitif',
      desc: 'Jaringan prinsipal memastikan efisiensi anggaran tanpa kompromi kualitas.',
      icon: Banknote,
    },
    {
      title: 'Technical Support',
      desc: 'Dukungan ahli untuk memastikan kesesuaian spesifikasi dengan kebutuhan site.',
      icon: Headset,
    },
  ];

  return (
    <>
      <PageHeader
        breadcrumbs={breadcrumbItems}
        description="Penyediaan material bahan kimia dan suku cadang untuk operasional skala mega-proyek."
        title="Katalog Produk Industri"
      />

      <HeroSection
        align="left"
        backgroundVariant="dark"
        description="Solusi suplai yang komprehensif untuk memastikan proyek Anda berjalan lancar, aman, dan tepat jadwal."
        overline="Produk Kami"
        title="Bahan Berkualitas."
        titleHighlight="Dukungan Maksimal."
      />

      <SectionWrapper background="alt" id="categories">
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="surface-card group flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(53,85,122,0.15)] hover:shadow-card-hover"
              >
                <div className="icon-box mb-6 h-14 w-14 group-hover:scale-110">
                  <Icon
                    className="h-6 w-6 transition-colors group-hover:text-brand-700"
                    strokeWidth={1.5}
                    style={{ color: '#35557A' }}
                  />
                </div>
                <h3 className="mb-4 font-heading text-lg font-bold uppercase tracking-wider text-foreground">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-1 text-sm leading-relaxed">
                  {cat.desc}
                </p>
                <Link
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest transition-colors duration-200"
                  style={{ color: '#35557A' }}
                  href={`/products/${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="group-hover:text-brand-800">View Catalog</span>
                  <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        header={{ overline: 'Why Choose Us', title: 'Procurement Excellence' }}
        id="why-us"
      >
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="surface-card group flex flex-col items-center p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(53,85,122,0.15)] hover:shadow-card-hover"
              >
                <div className="icon-box mb-6 h-12 w-12 group-hover:scale-110">
                  <Icon
                    className="h-5 w-5 transition-colors group-hover:text-brand-700"
                    strokeWidth={1.5}
                    style={{ color: '#35557A' }}
                  />
                </div>
                <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-foreground">
                  {feat.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <CtaSection
        description="Dapatkan spesifikasi lengkap dan penawaran harga (quotation) untuk kebutuhan operasional perusahaan Anda."
        primaryAction={{ label: 'Minta Penawaran', href: ROUTES.CONTACT }}
        title="Kebutuhan Material Spesifik?"
        variant="brand"
      />
    </>
  );
}
