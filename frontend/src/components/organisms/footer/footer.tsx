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
        { label: tNav('knowledge_center'), href: '#' },
        { label: 'Vendor Registration', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-surface-dark text-gray-300" role="contentinfo">
      {/* Main Footer */}
      <div className="container-page section-padding">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link className="mb-6 inline-flex items-center" href={ROUTES.HOME}>
              <div className="relative h-14 w-auto min-w-[56px] brightness-0 invert">
                <Image 
                  src={siteConfig.url.logo} 
                  alt={`${siteConfig.company.name} Logo`} 
                  width={56} 
                  height={56}
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-400">
              {tFooter('description')}
            </p>

            {/* Contact Info */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{siteConfig.contact.address.full}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                <a
                  className="transition-colors hover:text-white"
                  href={`tel:${siteConfig.contact.phone}`}
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                <a
                  className="transition-colors hover:text-white"
                  href={`mailto:${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="group inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-white"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-gray-500" suppressHydrationWarning>
            &copy; {currentYear} {siteConfig.company.name}. {tFooter('rights')}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link className="transition-colors hover:text-gray-300" href={ROUTES.PRIVACY_POLICY}>
              {tFooter('privacy_policy')}
            </Link>
            <Separator className="h-4 bg-white/10" orientation="vertical" />
            <Link className="transition-colors hover:text-gray-300" href={ROUTES.TERMS_OF_SERVICE}>
              {tFooter('terms_of_service')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
