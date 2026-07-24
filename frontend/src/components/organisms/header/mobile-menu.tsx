'use client';

import { useEffect, useState } from 'react';

import { Link } from '@/i18n/routing';
import { usePathname } from '@/i18n/routing';

import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, ChevronDown } from 'lucide-react';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config/site.config';
import { PUBLIC_NAV_ITEMS } from '@/lib/constants/navigation.constants';
import { ROUTES } from '@/lib/constants/routes.constants';
import { cn } from '@/lib/utils/cn';
import { useUiStore } from '@/stores/ui.store';

/**
 * Animated mobile navigation menu with staggered item transitions.
 * Renders below the header on mobile viewports.
 */
export function MobileMenu() {
  const pathname = usePathname();
  const { setMobileMenuOpen } = useUiStore();
  const t = useTranslations('Navbar');
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleSubmenu = (href: string) => {
    setOpenMenus((prev) => ({ ...prev, [href]: !prev[href] }));
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    // Prevent scrolling when menu is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // navItems array is removed. We use PUBLIC_NAV_ITEMS from constants.

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-x-0 bottom-0 top-20 z-[100] overflow-y-auto bg-white lg:hidden"
      exit={{ opacity: 0, y: -10 }}
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <nav aria-label="Mobile navigation" className="container-page flex min-h-full flex-col py-6 pb-24 bg-white">
        <ul className="space-y-1 flex-1">
          {PUBLIC_NAV_ITEMS.map((item, index) => (
            <motion.li
              key={item.href}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -12 }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-border"
            >
              {item.children ? (
                <button
                  className={cn(
                    'flex w-full items-center justify-between px-0 py-4 text-sm font-semibold uppercase tracking-wider transition-colors',
                    isActive(item.href) ? 'text-brand-600' : 'text-foreground hover:text-brand-600'
                  )}
                  onClick={() => toggleSubmenu(item.href)}
                  type="button"
                >
                  {t(item.label as any)}
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 text-muted-foreground transition-transform duration-200',
                      openMenus[item.href] && 'rotate-180'
                    )}
                  />
                </button>
              ) : (
                <Link
                  className={cn(
                    'flex w-full items-center justify-between px-0 py-4 text-sm font-semibold uppercase tracking-wider transition-colors',
                    isActive(item.href) ? 'text-brand-600' : 'text-foreground hover:text-brand-600'
                  )}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {t(item.label as any)}
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              )}

              <AnimatePresence>
                {item.children && openMenus[item.href] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <ul className="pb-3 pl-4 space-y-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={closeMenu}
                            className={cn(
                              'block text-sm transition-colors hover:text-brand-600',
                              pathname === child.href || pathname.startsWith(child.href + '/')
                                ? 'text-brand-600 font-medium'
                                : 'text-muted-foreground'
                            )}
                          >
                            {t(child.label as any)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>

        <div className="mt-4 space-y-3 border-t pt-4">
          <Button asChild className="w-full" variant="brand">
            <Link href={ROUTES.CONTACT} onClick={closeMenu}>
              <Phone className="h-4 w-4" />
              {t('contact')}
            </Link>
          </Button>
          <p className="text-muted-foreground text-center text-xs">{siteConfig.contact.phone}</p>
        </div>
      </nav>
    </motion.div>
  );
}
