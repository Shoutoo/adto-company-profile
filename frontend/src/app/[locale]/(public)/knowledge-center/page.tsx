import { Link } from '@/i18n/routing';

import { BookOpen, FileText, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { type Metadata } from 'next';

import { CtaSection } from '@/components/molecules/cta-section';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { ResponsiveGrid } from '@/components/molecules/responsive-grid';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { generateMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Pusat Unduhan & Dokumen | PT ADTO Cipta Usaha Mandiri',
  description: 'Akses berbagai dokumen resmi, company profile, dan sertifikasi perusahaan kami.',
});

const RESOURCES = [
  {
    title: 'Company Profile',
    description: 'Dokumen profil perusahaan resmi PT ADTO Cipta Usaha Mandiri.',
    icon: BookOpen,
    count: 1,
    href: '/docs/company-profile.pdf',
  },
  {
    title: 'Katalog Layanan',
    description: 'Katalog lengkap layanan pengadaan chemical dan sparepart kami.',
    icon: FileText,
    count: 1,
    href: '/docs/katalog-layanan.pdf',
  },
  {
    title: 'Brosur Alat Berat',
    description: 'Informasi teknis unit armada dan logistik transportasi kami.',
    icon: Award,
    count: 1,
    href: '/docs/brosur-alat-berat.pdf',
  },
  {
    title: 'Sertifikasi & Legalitas',
    description: 'Sertifikat ISO dan lisensi operasional lainnya (Hanya untuk partner terdaftar).',
    icon: ShieldCheck,
    count: 5,
    href: '/contact',
  },
];

const FAQS = [
  {
    question: 'Layanan utama apa yang ditawarkan PT ADTO Cipta Usaha Mandiri?',
    answer:
      'Kami menyediakan layanan pengadaan chemical industri (termasuk mud drilling API grade), suplai sparepart alat berat (Caterpillar, Komatsu), dan dukungan logistik mobilitas menggunakan armada terkalibrasi.',
  },
  {
    question: 'Di mana lokasi gudang utama perusahaan?',
    answer:
      'Fasilitas gudang utama kami berlokasi di Depok, Jawa Barat, yang dirancang khusus untuk memastikan keamanan dan ketersediaan ready stock material krusial.',
  },
  {
    question: 'Apakah produk chemical yang disuplai memenuhi standar industri?',
    answer:
      'Ya, seluruh produk chemical kami, khususnya untuk operasional migas (seperti Bentonite dan Barite), dijamin memenuhi standar ketat API (American Petroleum Institute).',
  },
  {
    question: 'Bagaimana cara mendaftar sebagai vendor atau mitra?',
    answer:
      'Anda dapat mengisi formulir pada halaman Registrasi Vendor dan melampirkan dokumen legalitas (Akta, NIB, NPWP, Company Profile, dan Laporan Keuangan).',
  },
  {
    question: 'Apakah PT ADTO Cipta Usaha Mandiri melayani pengiriman ke luar pulau?',
    answer:
      'Tentu, kami memiliki kapabilitas logistik untuk memobilisasi armada dan mengirim pasokan ke berbagai site operasional di seluruh Indonesia, termasuk area terpencil.',
  },
];

/**
 * Knowledge Center / Resources Page
 * Server Component
 */
export default function KnowledgeCenterPage() {
  return (
    <>
      <HeroSection
        description="Akses berbagai dokumen resmi, company profile, dan sertifikasi perusahaan kami untuk keperluan kemitraan bisnis."
        overline="Pusat Unduhan"
        title="Dokumen & Sumber Daya"
      />

      <SectionWrapper>
        <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 4 }} gap="default">
          {RESOURCES.map((resource, index) => (
            <Card key={index} className="flex h-full flex-col transition-shadow hover:shadow-md">
              <CardContent className="flex flex-grow flex-col p-6">
                <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-none">
                  <resource.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{resource.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{resource.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <Badge variant="secondary">{resource.count} Dokumen</Badge>
                  <Button asChild className="group" size="sm" variant="ghost">
                    <Link href={resource.href}>
                      Unduh
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </ResponsiveGrid>
      </SectionWrapper>

      <SectionWrapper
        className="bg-muted/30"
        header={{
          overline: 'FAQ',
          title: 'Pertanyaan Umum (FAQ)',
          description: 'Temukan jawaban cepat untuk pertanyaan umum mengenai operasional dan layanan kami.',
        }}
      >
        <div className="mx-auto max-w-3xl">
          <Accordion collapsible className="w-full" type="single">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      <CtaSection
        description="Hubungi tim support kami jika Anda memerlukan dokumen spesifik lainnya untuk keperluan legalitas atau teknis."
        primaryAction={{
          label: 'Hubungi Support',
          href: '/contact',
        }}
        title="Butuh dokumen spesifik?"
      />
    </>
  );
}
