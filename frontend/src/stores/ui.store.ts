'use client';

/**
 * UI state management with Zustand.
 * Handles global UI state like modals, loading, and mobile menu.
 * @module stores/ui
 */

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** Modal configuration */
interface ModalConfig {
  id: string;
  title?: string;
  description?: string;
  data?: Record<string, unknown>;
}

/** UI store state */
interface UiState {
  /** Whether the mobile navigation menu is open */
  isMobileMenuOpen: boolean;
  /** Whether a global loading overlay is shown */
  isGlobalLoading: boolean;
  /** Global loading message */
  globalLoadingMessage: string;
  /** Currently active modal */
  activeModal: ModalConfig | null;
  /** Whether the scroll-to-top button should be visible */
  showScrollTop: boolean;
  /** Whether the header is in scrolled/compact state */
  isHeaderScrolled: boolean;
  /** Whether the command palette is open */
  isCommandPaletteOpen: boolean;
}

/** UI store actions */
interface UiActions {
  /** Toggle mobile menu */
  toggleMobileMenu: () => void;
  /** Set mobile menu state */
  setMobileMenuOpen: (open: boolean) => void;
  /** Show global loading overlay */
  showGlobalLoading: (message?: string) => void;
  /** Hide global loading overlay */
  hideGlobalLoading: () => void;
  /** Open a modal by config */
  openModal: (config: ModalConfig) => void;
  /** Close the active modal */
  closeModal: () => void;
  /** Set scroll-to-top visibility */
  setShowScrollTop: (show: boolean) => void;
  /** Set header scrolled state */
  setHeaderScrolled: (scrolled: boolean) => void;
  /** Toggle command palette */
  toggleCommandPalette: () => void;
  /** Set command palette state */
  setCommandPaletteOpen: (open: boolean) => void;
  /** Reset all UI state */
  resetUi: () => void;
}

/** Combined UI store type */
type UiStore = UiState & UiActions;

/** Initial UI state */
const initialState: UiState = {
  isMobileMenuOpen: false,
  isGlobalLoading: false,
  globalLoadingMessage: '',
  activeModal: null,
  showScrollTop: false,
  isHeaderScrolled: false,
  isCommandPaletteOpen: false,
};

/**
 * Zustand store for global UI state.
 * Not persisted — resets on page reload.
 */
export const useUiStore = create<UiStore>()(
  devtools(
    (set) => ({
      ...initialState,

      toggleMobileMenu: () => {
        set(
          (state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen }),
          false,
          'ui/toggleMobileMenu'
        );
      },

      setMobileMenuOpen: (open) => {
        set({ isMobileMenuOpen: open }, false, 'ui/setMobileMenuOpen');
      },

      showGlobalLoading: (message = 'Loading...') => {
        set(
          { isGlobalLoading: true, globalLoadingMessage: message },
          false,
          'ui/showGlobalLoading'
        );
      },

      hideGlobalLoading: () => {
        set({ isGlobalLoading: false, globalLoadingMessage: '' }, false, 'ui/hideGlobalLoading');
      },

      openModal: (config) => {
        set({ activeModal: config }, false, 'ui/openModal');
      },

      closeModal: () => {
        set({ activeModal: null }, false, 'ui/closeModal');
      },

      setShowScrollTop: (show) => {
        set({ showScrollTop: show }, false, 'ui/setShowScrollTop');
      },

      setHeaderScrolled: (scrolled) => {
        set({ isHeaderScrolled: scrolled }, false, 'ui/setHeaderScrolled');
      },

      toggleCommandPalette: () => {
        set(
          (state) => ({ isCommandPaletteOpen: !state.isCommandPaletteOpen }),
          false,
          'ui/toggleCommandPalette'
        );
      },

      setCommandPaletteOpen: (open) => {
        set({ isCommandPaletteOpen: open }, false, 'ui/setCommandPaletteOpen');
      },

      resetUi: () => {
        set(initialState, false, 'ui/resetUi');
      },
    }),
    { name: 'UiStore' }
  )
);
