import { CheckCircle2, FileText, Briefcase, Building2 } from 'lucide-react';
import { type Metadata } from 'next';

import { HeroSection } from '@/components/molecules/hero-section-main';
import { PageHeader } from '@/components/molecules/page-header';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { generateMetadata } from '@/lib/utils/seo';

import { VendorForm } from './vendor-form';

export const metadata: Metadata = generateMetadata({
  title: 'Registrasi Vendor | PT Adto Cipta Usaha Mandiri',
  description: 'Jadilah mitra bisnis kami dengan mendaftar sebagai vendor resmi.',
});

export default function VendorRegistrationPage() {
  const requirements = [
    { icon: <FileText className="text-primary h-5 w-5" />, text: 'Akta Pendirian Perusahaan' },
    { icon: <FileText className="text-primary h-5 w-5" />, text: 'NIB & NPWP' },
    { icon: <Building2 className="text-primary h-5 w-5" />, text: 'Profil Perusahaan (Company Profile)' },
    { icon: <Briefcase className="text-primary h-5 w-5" />, text: 'Laporan Keuangan (Audit) Terbaru' },
  ];

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Registrasi Vendor', href: '/vendor-registration', active: true },
        ]}
        description="Jadilah mitra strategis pasokan kami."
        title="Registrasi Vendor"
      />

      <HeroSection
        align="left"
        backgroundVariant="dark"
        description="Bergabunglah dengan jaringan vendor terpercaya kami untuk berpartisipasi dalam pengadaan logistik proyek-proyek berskala nasional."
        overline="Registrasi Vendor"
        title="Bermitra untuk Tumbuh."
      />
      <SectionWrapper>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold uppercase tracking-wider">
                Kemitraan Jangka Panjang
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Di PT Adto Cipta Usaha Mandiri, kami percaya pada kekuatan kolaborasi. Dengan mendaftar sebagai vendor, perusahaan Anda akan dipertimbangkan untuk peluang pengadaan material dan sparepart pada proyek-proyek strategis kami.
              </p>
            </div>

            <div className="border-border border bg-surface-secondary">
              <div className="border-border bg-background border-b p-6">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wider">
                  Dokumen Persyaratan Inti
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="bg-background border-border border p-2">{req.icon}</div>
                      <span className="text-sm font-bold uppercase tracking-wider">{req.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-background border-border mt-8 flex items-start gap-3 border p-4">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    strokeWidth={1.5}
                  />
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Pastikan seluruh dokumen masih berlaku. Anda akan diminta untuk mengunggah dokumen-dokumen ini pada tahap prakualifikasi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-border bg-background border">
              <div className="border-border border-b p-8">
                <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">
                  Formulir Pendaftaran
                </h2>
              </div>
              <div className="p-8">
                <VendorForm />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
