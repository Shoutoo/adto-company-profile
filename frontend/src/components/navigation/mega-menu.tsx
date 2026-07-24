'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PUBLIC_NAV_ITEMS } from '@/lib/constants/navigation.constants';
import { useNavigation } from './navigation-provider';
import { Button } from '@/components/ui/button';

export function MegaMenu() {
  const t = useTranslations('Navbar');
  const { activeNav, setActiveNav, activeSubItem, setActiveSubItem, closeNav } = useNavigation();

  const activeParent = PUBLIC_NAV_ITEMS.find((item) => item.label === activeNav);
  const hasChildren = activeParent && activeParent.children && activeParent.children.length > 0;

  useEffect(() => {
    if (hasChildren && !activeSubItem && activeParent?.children?.[0]?.label) {
      setActiveSubItem(activeParent.children[0].label);
    }
  }, [activeNav, hasChildren, activeSubItem, setActiveSubItem, activeParent]);

  const activeChild = activeParent?.children?.find(
    (child) => child.label === activeSubItem
  ) || activeParent?.children?.[0];

  return (
    <AnimatePresence>
      {hasChildren && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute left-0 top-full w-full bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-t border-slate-100"
          onMouseEnter={() => setActiveNav(activeNav)}
          onMouseLeave={closeNav}
        >
          <div className="container-page mx-auto">
            <div className="flex h-[400px]">
              
              {/* Left Column: Sidebar Navigation */}
              <div className="w-[30%] border-r border-slate-100 py-6 pr-6">
                <h3 className="mb-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {t(activeParent.label as any)}
                </h3>
                <ul className="flex flex-col space-y-1">
                  {activeParent.children!.map((child) => {
                    const isActive = activeSubItem === child.label;
                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onMouseEnter={() => setActiveSubItem(child.label)}
                          onClick={closeNav}
                          className={cn(
                            'group flex items-center justify-between rounded-lg px-4 py-3 text-[14px] font-medium transition-all duration-200',
                            isActive
                              ? 'bg-brand-50 text-brand-700'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-brand-600'
                          )}
                        >
                          {t(child.label as any)}
                          <ChevronRight
                            className={cn(
                              'h-4 w-4 transition-transform duration-200',
                              isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                            )}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Right Column: Dynamic Preview */}
              <div className="relative w-[70%] bg-slate-50 overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeChild && (
                    <motion.div
                      key={activeChild.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex"
                    >
                      {/* Image Area */}
                      <div className="relative w-1/2 h-full overflow-hidden">
                        {activeChild.image ? (
                          <img
                            src={activeChild.image}
                            alt={t(activeChild.label as any)}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-slate-200" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                      </div>

                      {/* Content Area */}
                      <div className="w-1/2 p-10 flex flex-col justify-center">
                        <h4 className="text-2xl font-bold text-slate-900 mb-4">
                          {t(activeChild.label as any)}
                        </h4>
                        <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
                          {activeChild.descriptionKey ? t(activeChild.descriptionKey as any) : ''}
                        </p>
                        <div>
                          <Button asChild variant="default" className="bg-brand-600 hover:bg-brand-700 rounded-full group">
                            <Link href={activeChild.href} onClick={closeNav}>
                              Pelajari Selengkapnya
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
