'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { useNavigation } from './navigation-provider';
import { type NavItem as NavItemType } from '@/types/navigation.types';

interface NavItemProps {
  item: NavItemType;
  isScrolled?: boolean;
}

export function NavItem({ item, isScrolled = false }: NavItemProps) {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const { activeNav, toggleNav, closeNav } = useNavigation();

  const isCurrentPath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  const isActive = isCurrentPath(item.href) || activeNav === item.label;

  const handleClick = (e: React.MouseEvent) => {
    if (item.children) {
      e.preventDefault();
      toggleNav(item.label);
    } else {
      closeNav();
    }
  };

  return (
    <div className="nav-item-container flex h-full items-center relative">
      <Link
        href={item.href}
        className={cn(
          'inline-flex h-full items-center px-4 text-[15px] font-semibold transition-all duration-200 whitespace-nowrap',
          isActive
            ? 'text-[#FF5A00]' // Orange brand
            : isScrolled
            ? 'text-[#0A2F5C] hover:text-[#FF5A00]' // Primary Navy
            : 'text-white hover:text-white/80'
        )}
        onClick={handleClick}
      >
        {t(item.label as any)}
      </Link>
      
      {/* Active Indicator Underline (Orange) */}
      <div
        className={cn(
          'absolute bottom-[1px] left-0 right-0 h-[2px] rounded-t-sm bg-[#FF5A00] transition-transform duration-200 ease-out origin-left',
          isActive ? 'scale-x-100' : 'scale-x-0'
        )}
      />
    </div>
  );
}
