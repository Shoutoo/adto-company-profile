/**
 * Common shared types used across the application.
 * @module types/common
 */

/** Content publication status */
export type Status = 'draft' | 'published' | 'archived';

/** Sort direction for queries */
export type SortDirection = 'asc' | 'desc';

/** Base entity with timestamps */
export interface BaseEntity {
  readonly id: number;
  readonly created_at: string;
  readonly updated_at: string;
}

/** Entity with a URL-friendly slug */
export interface SlugEntity extends BaseEntity {
  slug: string;
}

/** Entity with publication status */
export interface StatusEntity extends BaseEntity {
  status: Status;
  published_at: string | null;
}

/** Entity with sort order */
export interface SortableEntity extends BaseEntity {
  sort_order: number;
}

/** Full content entity combining slug, status, and sorting */
export interface ContentEntity extends SlugEntity, StatusEntity, SortableEntity {}

/** Media/file attachment */
export interface MediaItem {
  readonly id: number;
  url: string;
  thumbnail_url: string | null;
  alt: string;
  filename: string;
  mime_type: string;
  size: number;
  width: number | null;
  height: number | null;
}

/** SEO metadata for content entities */
export interface SeoMeta {
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  canonical_url: string | null;
}

/** Option item for select inputs */
export interface SelectOption<T extends string | number = string> {
  readonly label: string;
  readonly value: T;
  readonly disabled?: boolean;
}

/** Badge visual variant */
export type BadgeVariant =
  'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info';

/** Breadcrumb navigation item */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

/** Generic callback function type */
export type VoidCallback = () => void;

/** Async callback function type */
export type AsyncCallback = () => Promise<void>;

/** Children prop for React components */
export interface ChildrenProps {
  children: React.ReactNode;
}

/** Class name prop for React components */
export interface ClassNameProps {
  className?: string;
}

/** Combined children + className props */
export interface BaseComponentProps extends ChildrenProps, ClassNameProps {}

/** Contact information */
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  google_maps_url: string;
  google_maps_embed: string;
  latitude: string;
  longitude: string;
}

/** Social media links */
export interface SocialLinks {
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  linkedin: string | null;
  youtube: string | null;
  tiktok: string | null;
}

/** Company operating hours */
export interface OperatingHours {
  day: string;
  open: string;
  close: string;
  is_closed: boolean;
}
