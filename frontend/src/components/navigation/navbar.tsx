'use client';


import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PUBLIC_NAV_ITEMS } from '@/lib/constants/navigation.constants';

import { NavigationProvider, useNavigation } from './navigation-provider';
import { NavItem } from './nav-item';
import { MobileNavigation } from './mobile-navigation';
import { LanguageSwitcher } from './language-switcher';
import { NavbarCTA } from './navbar-cta';

function NavbarContent() {
  const { setMobileMenuOpen, isScrolled, activeNav, closeNav } = useNavigation();
  const t = useTranslations('Navbar');
  
  const activeNavObj = PUBLIC_NAV_ITEMS.find(item => item.label === activeNav);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ease-in-out',
          isScrolled
            ? 'h-[84px] bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border-b border-slate-100'
            : 'h-[100px] bg-transparent border-b border-transparent'
        )}
      >
        <div className="container-page relative flex lg:grid h-full lg:grid-cols-[380px_1fr] items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            {isScrolled ? (
              <img src="/logo-color.svg" alt="ADTO Logo" className="h-[72px] w-auto transition-all duration-300" />
            ) : (
              <img src="/logo-white.svg" alt="ADTO Logo" className="h-[72px] w-auto transition-all duration-300" />
            )}
          </Link>

          {/* Navigation Cluster (Right aligned) */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-8 h-full">
            {/* Primary Menu */}
            <nav className="flex items-center gap-1">
              {PUBLIC_NAV_ITEMS.map((item) => (
                <NavItem key={item.href} item={item} isScrolled={isScrolled} />
              ))}
            </nav>
            
            <div className="flex items-center gap-6 border-l border-white/20 pl-6 transition-colors duration-300">
              <LanguageSwitcher isScrolled={isScrolled} />
              <NavbarCTA isScrolled={isScrolled} />
            </div>
          </div>
          
          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitcher isScrolled={isScrolled} />
            <button
              className={cn(
                "rounded-full p-2.5 transition-colors",
                isScrolled ? "bg-slate-100 hover:bg-slate-200" : "bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              )}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className={cn("h-6 w-6", isScrolled ? "text-slate-600" : "text-white")} />
            </button>
          </div>

          {/* Mega Menu Full Width Panel */}
          <AnimatePresence>
            {activeNavObj && activeNavObj.children && (
              <motion.div
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="nav-dropdown-container absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 py-12 px-16 z-50 cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col items-start gap-5">
                  {activeNavObj.children.map(child => {
                    // Check if this submenu is currently active based on pathname
                    // (Assuming we have pathname, but it's not in NavbarContent, we can just use hover states)
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeNav}
                        className="group relative flex items-center justify-start rounded-md px-4 py-2 text-lg font-medium leading-7 text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:text-[#0A2F5C]"
                      >
                        {/* Hover/Active vertical line indicator */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[3px] rounded-r-md bg-[#0A2F5C] transition-all duration-200 group-hover:h-3/5" />
                        <span>{t(child.label as any)}</span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </header>

      {/* Mobile Navigation */}
      <MobileNavigation />
    </>
  );
}

export function Navbar() {
  return (
    <NavigationProvider>
      <NavbarContent />
    </NavigationProvider>
  );
}
