'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
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
  const { activeNav, toggleNav, closeNav, activeSubItem, setActiveSubItem } = useNavigation();

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
          'inline-flex h-full items-center gap-1.5 px-4 text-[15px] font-semibold transition-all duration-200 whitespace-nowrap',
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

      {/* Two-Panel Enterprise Dropdown */}
      <AnimatePresence>
        {item.children && isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute left-0 top-full mt-2 w-[700px] rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100/80 z-50 flex overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Panel: Submenus */}
            <div className="w-[280px] bg-white p-4 border-r border-slate-100 flex flex-col gap-1 shrink-0">
              {(item.children || []).map((child) => {
                const isSubActive = activeSubItem === child.label || (!activeSubItem && (item.children || [])[0]?.label === child.label);
                return (
                  <button
                    key={child.href}
                    onClick={() => setActiveSubItem(child.label)}
                    className={cn(
                      "group flex items-center justify-between rounded-lg px-4 py-3 text-[14px] font-medium transition-colors w-full text-left",
                      isSubActive
                        ? "bg-slate-50 text-[#FF5A00]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#FF5A00]"
                    )}
                  >
                    <span>{t(child.label as any)}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Panel: Preview */}
            <div className="flex-1 bg-white p-6 flex flex-col relative">
              {(() => {
                const activeChild = (item.children || []).find(c => c.label === activeSubItem) || (item.children || [])[0];
                if (!activeChild) return null;
                return (
                  <div className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-200">
                    {activeChild.image && (
                      <div className="w-full h-[140px] rounded-lg overflow-hidden mb-5 bg-slate-100">
                        <img src={activeChild.image} alt={t(activeChild.label as any)} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <h4 className="text-lg font-bold text-[#0A2F5C] mb-2">{t(activeChild.label as any)}</h4>
                    {activeChild.descriptionKey && (
                      <p className="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-2">{t(activeChild.descriptionKey as any)}</p>
                    )}
                    <div className="mt-auto">
                      <Button asChild variant="default" className="bg-[#0A2F5C] hover:bg-[#FF5A00] text-white rounded-full transition-colors px-6 h-10 w-max text-sm font-medium">
                        <Link href={activeChild.href} onClick={closeNav}>
                          Pelajari Selengkapnya
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
