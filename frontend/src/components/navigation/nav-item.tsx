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
    <div className="nav-item-container group flex h-full items-center relative">
      <Link
        href={item.href}
        className={cn(
          'inline-flex h-full items-center px-4 text-[15px] font-medium transition-colors duration-200 ease-out whitespace-nowrap hover:text-[#E85D04]',
          isScrolled
            ? isActive ? 'text-slate-500' : 'text-[#0A2F5C]'
            : isActive ? 'text-white/80' : 'text-white/95'
        )}
        onClick={handleClick}
      >
        {t(item.label as any)}
      </Link>
      
      {/* Indicator Underline */}
      <div
        className={cn(
          'absolute bottom-[1px] left-0 right-0 h-[2px] rounded-t-sm transition-all duration-200 ease-out origin-left group-hover:bg-[#E85D04] group-hover:scale-x-100',
          isActive
            ? isScrolled ? 'bg-slate-300 scale-x-100' : 'bg-white/50 scale-x-100'
            : 'bg-[#E85D04] scale-x-0'
        )}
      />
    </div>
  );
}
