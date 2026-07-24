'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ROUTES } from '@/lib/constants/routes.constants';

export function NavbarCTA() {
  const t = useTranslations('Navbar');

  return (
    <Button
      asChild
      className="hidden rounded-full bg-brand-600 px-6 py-5 text-[14px] font-medium capitalize text-white shadow-sm transition-all duration-200 hover:bg-brand-700 hover:shadow-md hover:-translate-y-0.5 md:inline-flex"
    >
      <Link href={ROUTES.CONTACT}>{t('contact')}</Link>
    </Button>
  );
}
