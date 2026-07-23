/**
 * Common validation patterns and Zod schemas.
 * @module lib/utils/validation
 */

import { z } from 'zod';

/** Indonesian phone number pattern */
const PHONE_REGEX = /^(\+62|62|0)8[1-9][0-9]{6,10}$/;

/** Slug pattern (lowercase, numbers, hyphens) */
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/* ── Reusable Zod Schemas ──────────────────────────── */

/** Required non-empty string */
export const requiredString = z
  .string({ required_error: 'This field is required' })
  .min(1, 'This field is required')
  .trim();

/** Optional string (empty string becomes undefined) */
export const optionalString = z
  .string()
  .trim()
  .transform((val) => (val === '' ? undefined : val))
  .optional();

/** Email validation */
export const emailSchema = z
  .string({ required_error: 'Email is required' })
  .min(1, 'Email is required')
  .email('Please enter a valid email address')
  .trim()
  .toLowerCase();

/** Password validation (min 8 chars) */
export const passwordSchema = z
  .string({ required_error: 'Password is required' })
  .min(8, 'Password must be at least 8 characters')
  .max(128, 'Password must be at most 128 characters');

/** Indonesian phone number */
export const phoneSchema = z
  .string()
  .regex(PHONE_REGEX, 'Please enter a valid Indonesian phone number')
  .optional()
  .or(z.literal(''));

/** URL-friendly slug */
export const slugSchema = z
  .string()
  .regex(SLUG_REGEX, 'Slug must contain only lowercase letters, numbers, and hyphens');

/** URL validation */
export const urlSchema = z.string().url('Please enter a valid URL').optional().or(z.literal(''));

/** Positive integer ID */
export const idSchema = z.coerce.number().int().positive();

/** Content status */
export const statusSchema = z.enum(['draft', 'published', 'archived']);

/** Sort order */
export const sortOrderSchema = z.coerce.number().int().min(0).default(0);

/** Pagination params schema */
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  per_page: z.coerce.number().int().positive().max(100).default(12),
  sort_by: z.string().optional(),
  sort_order: z.enum(['asc', 'desc']).default('desc'),
  search: z.string().optional(),
});

/** File upload validation */
export const imageFileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 5 * 1024 * 1024, 'File size must be less than 5MB')
  .refine(
    (file) => ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'].includes(file.type),
    'Only JPEG, PNG, WebP, and SVG files are allowed'
  );

/** Document upload validation */
export const documentFileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 10 * 1024 * 1024, 'File size must be less than 10MB')
  .refine((file) => ['application/pdf'].includes(file.type), 'Only PDF files are allowed');
