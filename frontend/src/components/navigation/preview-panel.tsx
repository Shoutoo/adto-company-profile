'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { type NavItem } from '@/types/navigation.types';
import { useNavigation } from './navigation-provider';

interface PreviewPanelProps {
  activeChild: NavItem | undefined;
}

export function PreviewPanel({ activeChild }: PreviewPanelProps) {
  const t = useTranslations('Navbar');
  const { closeNav } = useNavigation();

  return (
    <div className="relative flex-1 bg-slate-900 overflow-hidden">
      <AnimatePresence mode="wait">
        {activeChild && (
          <motion.div
            key={activeChild.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 h-full w-full"
          >
            {/* Background Image - Full Bleed */}
            {activeChild.image ? (
              <img
                src={activeChild.image}
                alt={t(activeChild.label as any)}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-slate-800" />
            )}

            {/* Dark Overlay (Base) */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content Overlay (Bottom Left) */}
            <div className="absolute bottom-0 left-0 right-0 p-12 md:p-16 flex flex-col justify-end">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
                className="max-w-2xl"
              >
                <h4 className="text-3xl font-bold text-white mb-4 leading-tight shadow-black/10">
                  {t(activeChild.label as any)}
                </h4>
                {activeChild.descriptionKey && (
                  <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl">
                    {t(activeChild.descriptionKey as any)}
                  </p>
                )}
                <Button 
                  asChild 
                  variant="default" 
                  className="bg-brand-600 hover:bg-brand-700 text-white rounded-full group px-8 py-6 text-[15px] font-medium"
                >
                  <Link href={activeChild.href} onClick={closeNav}>
                    Pelajari Selengkapnya
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
