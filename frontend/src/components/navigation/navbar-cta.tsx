'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ROUTES } from '@/lib/constants/routes.constants';
import { cn } from '@/lib/utils';

interface NavbarCTAProps {
  isScrolled?: boolean;
}

export function NavbarCTA({}: NavbarCTAProps) {
  const t = useTranslations('Navbar');

  return (
    <Button
      asChild
      className={cn(
        "hidden rounded-full px-7 py-5 text-[15px] font-semibold text-white transition-all duration-250 md:inline-flex shadow-[0_4px_14px_0_rgba(255,90,0,0.39)]",
        "bg-[#FF5A00] hover:bg-[#E04F00] hover:shadow-[0_6px_20px_rgba(255,90,0,0.23)] hover:-translate-y-1"
      )}
    >
      <Link href={ROUTES.CONTACT}>{t('contact')}</Link>
    </Button>
  );
}
