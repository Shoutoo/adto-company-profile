'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ROUTES } from '@/lib/constants/routes.constants';
import { PUBLIC_NAV_ITEMS } from '@/lib/constants/navigation.constants';
import { useNavigation } from './navigation-provider';
import { LanguageSwitcher } from './language-switcher';
import { MobileAccordion } from './mobile-accordion';

export function MobileNavigation() {
  const t = useTranslations('Navbar');
  const { isMobileMenuOpen, setMobileMenuOpen } = useNavigation();

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Off-canvas Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 top-0 z-50 flex w-[85%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
          >
            {/* Header section (spacer for top navbar) */}
            <div className="h-16 md:h-20 shrink-0 border-b border-slate-100 flex items-center justify-between px-6">
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Menu</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Scrollable links area */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="flex flex-col">
                {PUBLIC_NAV_ITEMS.map((item) => (
                  <MobileAccordion 
                    key={item.href} 
                    item={item} 
                    onClose={() => setMobileMenuOpen(false)} 
                  />
                ))}
              </div>
            </div>

            {/* Footer section (Language + CTA) */}
            <div className="shrink-0 space-y-4 border-t border-slate-100 bg-slate-50 p-6">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-600">Language</span>
                <LanguageSwitcher />
              </div>
              <Button
                asChild
                className="w-full rounded-xl bg-brand-600 py-6 text-[15px] font-medium text-white hover:bg-brand-700"
              >
                <Link href={ROUTES.CONTACT} onClick={() => setMobileMenuOpen(false)}>
                  {t('contact')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
