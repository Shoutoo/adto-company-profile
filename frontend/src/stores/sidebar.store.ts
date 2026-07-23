'use client';

/**
 * Admin sidebar state management with Zustand.
 * Handles sidebar collapse, active section, and expanded groups.
 * @module stores/sidebar
 */

import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';

/** Sidebar store state */
interface SidebarState {
  /** Whether the sidebar is collapsed (icon-only mode) */
  isCollapsed: boolean;
  /** Whether the sidebar is open on mobile */
  isMobileOpen: boolean;
  /** Set of expanded nav group titles */
  expandedGroups: string[];
}

/** Sidebar store actions */
interface SidebarActions {
  /** Toggle sidebar collapse state */
  toggleCollapse: () => void;
  /** Set sidebar collapse state */
  setCollapsed: (collapsed: boolean) => void;
  /** Toggle mobile sidebar */
  toggleMobileSidebar: () => void;
  /** Set mobile sidebar state */
  setMobileOpen: (open: boolean) => void;
  /** Toggle a nav group expansion */
  toggleGroup: (groupTitle: string) => void;
  /** Expand a nav group */
  expandGroup: (groupTitle: string) => void;
  /** Collapse a nav group */
  collapseGroup: (groupTitle: string) => void;
  /** Check if a group is expanded */
  isGroupExpanded: (groupTitle: string) => boolean;
  /** Reset sidebar state */
  resetSidebar: () => void;
}

/** Combined sidebar store type */
type SidebarStore = SidebarState & SidebarActions;

/** Initial sidebar state */
const initialState: SidebarState = {
  isCollapsed: false,
  isMobileOpen: false,
  expandedGroups: [],
};

/**
 * Zustand store for admin sidebar state.
 * Persists collapse and expanded groups to localStorage.
 */
export const useSidebarStore = create<SidebarStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        toggleCollapse: () => {
          set((state) => ({ isCollapsed: !state.isCollapsed }), false, 'sidebar/toggleCollapse');
        },

        setCollapsed: (collapsed) => {
          set({ isCollapsed: collapsed }, false, 'sidebar/setCollapsed');
        },

        toggleMobileSidebar: () => {
          set(
            (state) => ({ isMobileOpen: !state.isMobileOpen }),
            false,
            'sidebar/toggleMobileSidebar'
          );
        },

        setMobileOpen: (open) => {
          set({ isMobileOpen: open }, false, 'sidebar/setMobileOpen');
        },

        toggleGroup: (groupTitle) => {
          set(
            (state) => {
              const isExpanded = state.expandedGroups.includes(groupTitle);
              return {
                expandedGroups: isExpanded
                  ? state.expandedGroups.filter((g) => g !== groupTitle)
                  : [...state.expandedGroups, groupTitle],
              };
            },
            false,
            'sidebar/toggleGroup'
          );
        },

        expandGroup: (groupTitle) => {
          set(
            (state) => {
              if (state.expandedGroups.includes(groupTitle)) {
                return state;
              }
              return { expandedGroups: [...state.expandedGroups, groupTitle] };
            },
            false,
            'sidebar/expandGroup'
          );
        },

        collapseGroup: (groupTitle) => {
          set(
            (state) => ({
              expandedGroups: state.expandedGroups.filter((g) => g !== groupTitle),
            }),
            false,
            'sidebar/collapseGroup'
          );
        },

        isGroupExpanded: (groupTitle) => {
          return get().expandedGroups.includes(groupTitle);
        },

        resetSidebar: () => {
          set(initialState, false, 'sidebar/resetSidebar');
        },
      }),
      {
        name: 'adto-sidebar-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          isCollapsed: state.isCollapsed,
          expandedGroups: state.expandedGroups,
        }),
      }
    ),
    { name: 'SidebarStore' }
  )
);
