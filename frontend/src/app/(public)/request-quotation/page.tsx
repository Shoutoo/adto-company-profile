import { FileText, Search, Send, ShieldCheck, Clock, Calculator } from 'lucide-react';
import { Metadata } from 'next';
import { generateMetadata } from '@/lib/utils/seo';
import { HeroSection } from '@/components/molecules/hero-section-main';
import { SectionWrapper } from '@/components/molecules/section-wrapper';
import { PageHeader } from '@/components/molecules/page-header';
import { QuotationForm } from './quotation-form';

export const metadata: Metadata = generateMetadata({
  title: 'Permintaan Penawaran | PT Adto Cipta Usaha Mandiri',
  description: 'Dapatkan penawaran harga khusus untuk kebutuhan operasional proyek Anda.',
});

export default function RequestQuotationPage() {
  const steps = [
    {
      icon: <Send className="text-primary h-5 w-5" />,
      title: 'Kirim Permintaan',
      desc: 'Isi formulir dengan detail spesifik kebutuhan proyek Anda.',
    },
    {
      icon: <Search className="text-primary h-5 w-5" />,
      title: 'Analisis Teknis',
      desc: 'Tim ahli kami akan mengevaluasi kebutuhan material dan spesifikasi teknis.',
    },
    {
      icon: <FileText className="text-primary h-5 w-5" />,
      title: 'Terima Penawaran',
      desc: 'Dapatkan estimasi biaya dan proposal terperinci.',
    },
  ];

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Permintaan Penawaran', href: '/request-quotation', active: true },
        ]}
        description="Dapatkan penawaran harga khusus untuk kebutuhan operasional proyek Anda."
        title="Permintaan Penawaran"
      />

      <HeroSection
        align="left"
        backgroundVariant="dark"
        description="Kami siap membantu efisiensi proyek Anda. Berikan detail kebutuhan material atau alat berat untuk menerima proposal komprehensif dari kami."
        overline="Permintaan Penawaran"
        title="Penawaran Harga Kustom."
      />
      <SectionWrapper>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold uppercase tracking-wider">
                Cara Kerja Kami
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Proses penyusunan penawaran kami dirancang agar transparan, akurat, dan disesuaikan dengan kebutuhan spesifik operasional lapangan Anda.
              </p>
            </div>

            <div className="before:bg-border relative space-y-6 before:absolute before:inset-0 before:ml-5 before:h-full before:w-px before:-translate-x-px md:before:mx-auto md:before:translate-x-0">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
                >
                  <div className="border-border bg-background z-10 flex h-10 w-10 shrink-0 items-center justify-center border text-brand-600 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {step.icon}
                  </div>
                  <div className="border-border bg-background w-[calc(100%-4rem)] border p-6 md:w-[calc(50%-2.5rem)]">
                    <h3 className="mb-2 font-heading text-xs font-bold uppercase tracking-widest">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-border border bg-slate-50">
              <div className="border-b border-white/10 p-6">
                <h2 className="flex items-center gap-3 font-heading text-lg font-bold uppercase tracking-wider">
                  <ShieldCheck className="h-5 w-5 text-brand-500" strokeWidth={1.5} />
                  Komitmen Kami
                </h2>
              </div>
              <div className="space-y-6 p-6">
                <div className="flex items-start gap-4">
                  <Calculator
                    className="mt-0.5 h-6 w-6 shrink-0 text-brand-500"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h4 className="mb-1 text-xs font-bold uppercase tracking-wider">
                      Estimasi Akurat
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-400">
                      Rincian biaya material dan logistik yang transparan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-0.5 h-6 w-6 shrink-0 text-brand-500" strokeWidth={1.5} />
                  <div>
                    <h4 className="mb-1 text-xs font-bold uppercase tracking-wider">
                      Respon Cepat
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-400">
                      Tanggapan awal maksimal dalam 24-48 jam kerja.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-border bg-background border">
              <div className="border-border border-b p-8">
                <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">
                  Formulir Detail Proyek
                </h2>
              </div>
              <div className="p-8">
                <QuotationForm />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
