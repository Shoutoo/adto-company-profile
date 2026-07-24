'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ROUTES } from '@/lib/constants/routes.constants';
import { cn } from '@/lib/utils';

interface NavbarCTAProps {
  isScrolled?: boolean;
}

export function NavbarCTA({ isScrolled = false }: NavbarCTAProps) {
  const t = useTranslations('Navbar');

  return (
    <Button
      asChild
      className={cn(
        "hidden rounded-full px-6 py-5 text-[14px] font-medium capitalize shadow-sm transition-all duration-300 md:inline-flex",
        isScrolled
          ? "bg-brand-600 text-white hover:bg-brand-700 hover:shadow-md hover:-translate-y-0.5"
          : "bg-transparent border border-white text-white hover:bg-white/10 hover:shadow-md hover:-translate-y-0.5 backdrop-blur-sm"
      )}
    >
      <Link href={ROUTES.CONTACT}>{t('contact')}</Link>
    </Button>
  );
}
