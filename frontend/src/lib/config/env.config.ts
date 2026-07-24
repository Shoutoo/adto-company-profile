/**
 * Environment variable configuration with runtime validation.
 * Uses Zod to ensure all required env vars are present and typed.
 * @module lib/config/env
 */

import { z } from 'zod';

/** Schema for public environment variables (available in browser) */
const publicEnvSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default('PT ADTO Cipta Usaha Mandiri'),
  NEXT_PUBLIC_APP_URL: z.string().default('https://adtociptausahamandiri.co.id'),
  NEXT_PUBLIC_API_URL: z.string().default(''),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().optional(),
});

/** Schema for server-only environment variables */
const serverEnvSchema = z.object({
  BACKEND_URL: z.string().default(''),
  REVALIDATION_SECRET: z.string().optional(),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

/** Combined environment schema */
const envSchema = publicEnvSchema.merge(serverEnvSchema);

/** Validated environment type */
export type Env = z.infer<typeof envSchema>;

/**
 * Parse and validate environment variables.
 * Throws detailed error on validation failure.
 */
function validateEnv(): Env {
  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    BACKEND_URL: process.env.BACKEND_URL,
    REVALIDATION_SECRET: process.env.REVALIDATION_SECRET,
    NODE_ENV: process.env.NODE_ENV,
  });

  if (!parsed.success) {
    const formatted = parsed.error.flatten().fieldErrors;
    const message = Object.entries(formatted)
      .map(([key, errors]) => `  ${key}: ${(errors ?? []).join(', ')}`)
      .join('\n');

    throw new Error(
      `❌ Invalid environment variables:\n${message}\n\nPlease check your .env.local file.`
    );
  }

  return parsed.data;
}

/** Validated environment variables singleton */
export const env = validateEnv();

/** Whether the app is running in development mode */
export const isDevelopment = env.NODE_ENV === 'development';

/** Whether the app is running in production mode */
export const isProduction = env.NODE_ENV === 'production';

/** Whether the app is running in test mode */
export const isTest = env.NODE_ENV === 'test';
