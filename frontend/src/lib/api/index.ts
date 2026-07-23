/**
 * Barrel export for API module.
 * @module lib/api
 */

export { apiInstance, createUploadInstance } from './axios-instance';
export { apiClient, ApiError } from './api-client';
export { AUTH_ENDPOINTS, PUBLIC_ENDPOINTS, ADMIN_ENDPOINTS } from './endpoints';
export { setupInterceptors } from './interceptors';
