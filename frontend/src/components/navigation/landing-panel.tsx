'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PUBLIC_NAV_ITEMS } from '@/lib/constants/navigation.constants';
import { useNavigation } from './navigation-provider';
import { SidebarNavigation } from './sidebar-navigation';
import { PreviewPanel } from './preview-panel';

export function LandingPanel() {
  const { activeNav, setActiveNav, activeSubItem, setActiveSubItem, closeNav } = useNavigation();

  const activeParent = PUBLIC_NAV_ITEMS.find((item) => item.label === activeNav);
  const hasChildren = activeParent && activeParent.children && activeParent.children.length > 0;

  // Set default active sub-item when a menu opens
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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-full w-screen bg-white shadow-2xl border-t border-slate-100 z-40 overflow-hidden"
          onMouseEnter={() => setActiveNav(activeNav)}
          onMouseLeave={closeNav}
        >
          {/* Main Layout: Fixed 620px height, flex row */}
          <div className="flex w-full h-[620px] max-h-[calc(100vh-80px)]">
            
            {/* Left Area: Navigation Sidebar */}
            <SidebarNavigation parentItem={activeParent} />

            {/* Right Area: Dynamic Preview Panel */}
            <PreviewPanel activeChild={activeChild} />

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
