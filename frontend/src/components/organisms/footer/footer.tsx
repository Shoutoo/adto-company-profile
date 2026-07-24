import Image from 'next/image';
import { Link } from '@/i18n/routing';

import { Mail, Phone, MapPin } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/lib/config/site.config';

import { ROUTES } from '@/lib/constants/routes.constants';

import { useTranslations } from 'next-intl';

/**
 * Site-wide footer with company information, navigation columns,
 * contact details, and legal links.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();
  const tNav = useTranslations('Navbar');
  const tFooter = useTranslations('Footer');

  const footerColumns = [
    {
      title: 'Company',
      links: [
        { label: tNav('about'), href: ROUTES.ABOUT },
        { label: tNav('career'), href: ROUTES.CAREER },
        { label: tNav('news'), href: '/news' },
        { label: tNav('contact'), href: ROUTES.CONTACT },
      ],
    },
    {
      title: tNav('services'),
      links: [
        { label: 'Industrial Supply', href: '/services/industrial-supply' },
        { label: 'Project Management', href: '/services/project-management' },
        { label: 'Engineering', href: '/services/engineering' },
        { label: 'Logistics', href: '/services/logistics' },
      ],
    },
    {
      title: tFooter('quick_links'),
      links: [
        { label: tNav('projects'), href: ROUTES.PROJECTS },
        { label: tNav('blog'), href: ROUTES.BLOG },
        { label: tNav('knowledge_center'), href: '/knowledge-center' },
        { label: 'Vendor Registration', href: '/vendor-registration' },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy text-gray-300" role="contentinfo">
      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-light/40 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-orange/10 blur-[100px]" />

      {/* Main Footer */}
      <div className="container-page relative z-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5 pr-4">
            <Link className="mb-8 inline-flex items-center" href={ROUTES.HOME}>
              <div className="relative h-24 w-auto min-w-[80px] brightness-0 invert">
                <Image 
                  src={siteConfig.url.logo} 
                  alt={`${siteConfig.company.name} Logo`} 
                  width={200} 
                  height={96}
                  className="h-full w-auto object-contain drop-shadow-md"
                />
              </div>
            </Link>
            <p className="mb-8 max-w-sm text-[15px] leading-relaxed text-gray-400">
              {tFooter('description')}
            </p>

            {/* Contact Info */}
            <ul className="space-y-4">
              <li className="group flex items-start gap-4 text-[15px] transition-transform duration-300 hover:translate-x-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-light/50 text-orange shadow-soft-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-orange group-hover:text-white group-hover:shadow-glow">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="mt-2 text-gray-300 group-hover:text-white transition-colors">{siteConfig.contact.address.full}</span>
              </li>
              <li className="group flex items-center gap-4 text-[15px] transition-transform duration-300 hover:translate-x-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-light/50 text-orange shadow-soft-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-orange group-hover:text-white group-hover:shadow-glow">
                  <Phone className="h-4 w-4" />
                </div>
                <a
                  className="mt-1 text-gray-300 transition-colors group-hover:text-white"
                  href={`tel:${siteConfig.contact.phone}`}
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="group flex items-center gap-4 text-[15px] transition-transform duration-300 hover:translate-x-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-light/50 text-orange shadow-soft-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-orange group-hover:text-white group-hover:shadow-glow">
                  <Mail className="h-4 w-4" />
                </div>
                <a
                  className="mt-1 text-gray-300 transition-colors group-hover:text-white"
                  href={`mailto:${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 lg:col-start-7 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-6 text-[13px] font-bold uppercase tracking-widest text-white">
                  {column.title}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link, index) => (
                    <li key={`${link.label}-${index}`}>
                      <Link
                        className="group relative inline-flex items-center text-[15px] text-gray-400 transition-colors duration-300 hover:text-white"
                        href={link.href}
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-orange transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/5 bg-navy-light/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-[14px] text-gray-500" suppressHydrationWarning>
            &copy; {currentYear} {siteConfig.company.name}. {tFooter('rights')}
          </p>
          <div className="flex items-center gap-6 text-[14px] text-gray-500">
            <Link className="transition-colors duration-300 hover:text-orange" href={ROUTES.PRIVACY_POLICY}>
              {tFooter('privacy_policy')}
            </Link>
            <Separator className="h-4 bg-white/10" orientation="vertical" />
            <Link className="transition-colors duration-300 hover:text-orange" href={ROUTES.TERMS_OF_SERVICE}>
              {tFooter('terms_of_service')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
