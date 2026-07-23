'use client';

import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config/site.config';
import { PUBLIC_NAV_ITEMS } from '@/lib/constants/navigation.constants';
import { ROUTES } from '@/lib/constants/routes.constants';
import { cn } from '@/lib/utils/cn';
import { useUiStore } from '@/stores/ui.store';

import { MobileMenu } from './mobile-menu';

/**
 * Main site header with scroll-aware styling, desktop navigation,
 * mobile menu toggle, and a contact CTA button.
 */
export function Header() {
  const pathname = usePathname();
  const { isMobileMenuOpen, setMobileMenuOpen } = useUiStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen, setMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-out',
          'h-20 md:h-[88px]',
          scrolled
            ? 'bg-white/97 backdrop-blur-xl border-b border-[rgba(53,85,122,0.08)]'
            : 'bg-white/95 backdrop-blur-md border-b border-transparent',
        )}
        style={{
          boxShadow: scrolled
            ? '0 1px 3px rgba(0,0,0,0.04), 0 6px 20px rgba(53,85,122,0.07)'
            : '0 1px 2px rgba(0,0,0,0.02)',
        }}
      >
        <div className="container-page flex h-full items-center justify-between">
          {/* Logo */}
          <Link className="group flex shrink-0 items-center gap-2" href={ROUTES.HOME}>
            <div className="relative flex h-14 w-auto items-center sm:h-16 lg:h-20">
              <Image
                src="/logo.svg"
                alt={`${siteConfig.company.name} Logo`}
                width={240}
                height={80}
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
            {PUBLIC_NAV_ITEMS.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  className={cn(
                    'inline-flex items-center gap-1 py-7 text-[13px] font-bold uppercase tracking-widest transition-colors duration-250',
                    isActive(item.href)
                      ? 'text-brand-600'
                      : 'text-foreground hover:text-brand-600'
                  )}
                  href={item.href}
                >
                  {item.label}
                  {item.href === ROUTES.SERVICES && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-50 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>
                {/* Animated underline — gradient */}
                <div
                  className={cn(
                    'absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-transform duration-300 ease-out origin-left',
                    isActive(item.href)
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  )}
                  style={{
                    background: 'linear-gradient(90deg, #35557A, #F58220)',
                  }}
                />
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-muted-foreground hover:text-foreground hidden transition-colors duration-200 sm:block"
              type="button"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <div
              className="mx-2 hidden h-5 w-px sm:block"
              style={{ background: 'rgba(53,85,122,0.15)' }}
            />
            <Button
              asChild
              className="hidden rounded-full bg-brand-600 px-6 py-5 text-[13px] font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-brand-700 hover:shadow-[0_4px_16px_rgba(53,85,122,0.30)] hover:-translate-y-0.5 md:inline-flex"
            >
              <Link href={ROUTES.CONTACT}>Contact</Link>
            </Button>

            {/* Mobile Toggle */}
            <button
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="hover:bg-brand-50 rounded-xl p-2 transition-all duration-200 lg:hidden"
              type="button"
              onClick={toggleMenu}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-20 md:h-[88px]" />

      {/* Mobile Menu */}
      <AnimatePresence>{isMobileMenuOpen && <MobileMenu />}</AnimatePresence>
    </>
  );
}
