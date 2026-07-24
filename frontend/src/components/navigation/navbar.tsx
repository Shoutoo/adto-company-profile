'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PUBLIC_NAV_ITEMS } from '@/lib/constants/navigation.constants';

import { NavigationProvider, useNavigation } from './navigation-provider';
import { NavItem } from './nav-item';
import { MegaMenu } from './mega-menu';
import { MobileNavigation } from './mobile-navigation';
import { LanguageSwitcher } from './language-switcher';
import { NavbarCTA } from './navbar-cta';

function NavbarContent() {
  const [scrolled, setScrolled] = useState(false);
  const { setMobileMenuOpen } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-out',
          'h-16 md:h-20',
          scrolled
            ? 'bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border-b border-transparent'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="container-page flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <span className={cn("text-xl font-bold tracking-tight transition-colors duration-300", scrolled ? 'text-brand-600' : 'text-brand-600')}>
              ADTO.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden h-full items-center gap-1 lg:flex">
            {PUBLIC_NAV_ITEMS.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </nav>

          {/* Right Actions */}
          <div className="relative z-10 flex items-center gap-4">
            <div className="hidden items-center gap-4 md:flex">
              <LanguageSwitcher />
            </div>
            <NavbarCTA />
            
            {/* Mobile Menu Toggle */}
            <button
              className="rounded-full bg-slate-100 p-2.5 text-slate-600 transition-colors hover:bg-slate-200 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <div className="hidden lg:block">
          <MegaMenu />
        </div>
      </header>

      {/* Spacer to prevent layout shift */}
      <div className="h-16 md:h-20" />

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
