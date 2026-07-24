'use client';


import { Link } from '@/i18n/routing';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PUBLIC_NAV_ITEMS } from '@/lib/constants/navigation.constants';

import { NavigationProvider, useNavigation } from './navigation-provider';
import { NavItem } from './nav-item';
import { LandingPanel } from './landing-panel';
import { MobileNavigation } from './mobile-navigation';
import { LanguageSwitcher } from './language-switcher';
import { NavbarCTA } from './navbar-cta';

function NavbarContent() {
  const { setMobileMenuOpen, isScrolled } = useNavigation();

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
        <div className="container-page flex lg:grid h-full lg:grid-cols-[320px_1fr] items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            {isScrolled ? (
              <img src="/logo-color.svg" alt="ADTO Logo" className="h-10 w-auto" />
            ) : (
              <img src="/logo-white.svg" alt="ADTO Logo" className="h-10 w-auto" />
            )}
          </Link>

          {/* Navigation Cluster (Right aligned) */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-6 h-full">
            <nav className="flex h-full items-center gap-1">
              {PUBLIC_NAV_ITEMS.map((item) => (
                <NavItem key={item.href} item={item} isScrolled={isScrolled} />
              ))}
            </nav>
            <div className="flex items-center gap-4">
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
        </div>

        {/* Enterprise Landing Panel */}
        <div className="hidden lg:block">
          <LandingPanel />
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
