/**
 * Axios instance with base configuration.
 * @module lib/api/axios-instance
 */

import axios, { type AxiosInstance } from 'axios';

import { setupInterceptors } from './interceptors';

/** Base API URL from environment */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api/v1';

/** Request timeout in milliseconds */
const REQUEST_TIMEOUT = 30_000;

/**
 * Create and configure the Axios instance.
 * Applies base URL, timeout, headers, and interceptors.
 */
function createAxiosInstance(): AxiosInstance {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: false,
  });

  setupInterceptors(instance);

  return instance;
}

/** Singleton Axios instance for all API requests */
export const apiInstance = createAxiosInstance();

/**
 * Create an Axios instance for file uploads.
 * Uses multipart/form-data content type.
 */
export function createUploadInstance(): AxiosInstance {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 120_000,
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
    withCredentials: false,
  });

  setupInterceptors(instance);

  return instance;
}
