'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigation } from './navigation-provider';
import { type NavItem as NavItemType } from '@/types/navigation.types';

interface NavItemProps {
  item: NavItemType;
}

export function NavItem({ item }: NavItemProps) {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const { activeNav, setActiveNav, closeNav } = useNavigation();

  const isCurrentPath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  const isActive = isCurrentPath(item.href) || activeNav === item.label;

  const handleMouseEnter = () => {
    if (item.children) {
      setActiveNav(item.label);
    } else {
      closeNav();
    }
  };

  return (
    <div
      className="group relative flex h-full items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={closeNav}
    >
      <Link
        href={item.href}
        className={cn(
          'inline-flex h-full items-center gap-1 px-2 text-[14px] font-medium capitalize transition-colors duration-200',
          isActive ? 'text-brand-600' : 'text-foreground hover:text-brand-600'
        )}
        onClick={() => closeNav()}
      >
        {t(item.label as any)}
        {item.children && (
          <ChevronDown 
            className={cn(
              "h-3.5 w-3.5 opacity-50 transition-transform duration-200",
              activeNav === item.label && "rotate-180"
            )} 
          />
        )}
      </Link>
      
      {/* Active Indicator Underline */}
      <div
        className={cn(
          'absolute bottom-[1px] left-0 right-0 h-[2px] rounded-t-sm bg-brand-600 transition-transform duration-200 ease-out origin-left',
          isActive ? 'scale-x-100' : 'scale-x-0'
        )}
      />
    </div>
  );
}
