'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigation } from './navigation-provider';
import { type NavItem as NavItemType } from '@/types/navigation.types';
import { motion, AnimatePresence } from 'framer-motion';

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
  const isDropdownOpen = activeNav === item.label;

  const handleClick = (e: React.MouseEvent) => {
    if (item.children) {
      e.preventDefault();
      toggleNav(item.label);
    } else {
      closeNav();
    }
  };

  return (
    <div className="nav-dropdown-container group relative flex h-full items-center">
      <Link
        href={item.href}
        className={cn(
          'inline-flex h-full items-center gap-1.5 px-4 text-[15px] font-semibold transition-all duration-200',
          isActive
            ? 'text-[#FF5A00]' // Orange brand
            : isScrolled
            ? 'text-slate-800 hover:text-[#FF5A00]'
            : 'text-white hover:text-white/80'
        )}
        onClick={handleClick}
      >
        {t(item.label as any)}
        {item.children && (
          <ChevronDown 
            className={cn(
              "h-4 w-4 transition-transform duration-250",
              isDropdownOpen ? "rotate-180" : "",
              isScrolled && !isActive ? "opacity-60" : "opacity-90"
            )} 
          />
        )}
      </Link>
      
      {/* Active Indicator Underline (Orange) */}
      <div
        className={cn(
          'absolute bottom-[1px] left-0 right-0 h-[2px] rounded-t-sm bg-[#FF5A00] transition-transform duration-200 ease-out origin-left',
          isActive ? 'scale-x-100' : 'scale-x-0'
        )}
      />

      {/* Standard Dropdown Panel */}
      <AnimatePresence>
        {item.children && isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute left-0 top-full mt-2 w-[280px] rounded-xl bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100/80 z-50 flex flex-col gap-2"
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={closeNav}
                className="group flex items-center justify-between rounded-lg px-4 py-3 text-[14px] font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#FF5A00]"
              >
                <span>{t(child.label as any)}</span>
                <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#FF5A00]" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
