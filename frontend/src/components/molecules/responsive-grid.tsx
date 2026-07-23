/**
 * Kebab-case alias — resolves imports from pages that use:
 * import { ResponsiveGrid } from '@/components/molecules/responsive-grid'
 *
 * Some pages import from 'responsive-grid' rather than 'responsive-layout'.
 * This file bridges the naming gap without altering any source file.
 */
export { ResponsiveGrid, type ResponsiveGridProps } from './responsive-layout';
