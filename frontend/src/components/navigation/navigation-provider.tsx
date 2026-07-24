'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface NavigationContextType {
  activeNav: string | null;
  setActiveNav: (label: string | null) => void;
  activeSubItem: string | null;
  setActiveSubItem: (label: string | null) => void;
  toggleNav: (label: string) => void;
  closeNav: () => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeNav, setActiveNavState] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItemState] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const setActiveNav = (label: string | null) => {
    setActiveNavState(label);
  };

  const toggleNav = (label: string) => {
    setActiveNavState((prev) => (prev === label ? null : label));
  };

  const closeNav = () => {
    setActiveNavState(null);
    setActiveSubItemState(null);
  };

  // Close on Outside Click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-dropdown-container') && !target.closest('.language-switcher-container')) {
        setActiveNavState(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveNavState(null);
        setActiveSubItemState(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <NavigationContext.Provider
      value={{
        activeNav,
        setActiveNav,
        toggleNav,
        activeSubItem,
        setActiveSubItem: setActiveSubItemState,
        closeNav,
        isMobileMenuOpen,
        setMobileMenuOpen,
        isScrolled,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
