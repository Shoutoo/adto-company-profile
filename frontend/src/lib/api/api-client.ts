/**
 * Generic API client providing typed CRUD operations.
 * Wraps Axios instance with consistent error handling.
 * @module lib/api/api-client
 */

import { type AxiosRequestConfig, type AxiosError } from 'axios';

import {
  type ApiResponse,
  type ApiErrorResponse,
  type PaginatedResponse,
  type PaginationParams,
  type UploadResponse,
} from '@/types/api.types';

import { apiInstance, createUploadInstance } from './axios-instance';

/**
 * Normalized API error for consistent error handling.
 */
export class ApiError extends Error {
  readonly status: number;
  readonly errors: Record<string, string[]>;

  constructor(message: string, status: number, errors: Record<string, string[]> = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.errors = errors;
  }

  /** Get the first error message from validation errors */
  getFirstError(): string {
    const firstKey = Object.keys(this.errors)[0];
    if (firstKey && this.errors[firstKey]) {
      return this.errors[firstKey][0] ?? this.message;
    }
    return this.message;
  }
}

/**
 * Extract a normalized ApiError from an Axios error.
 */
function normalizeError(error: unknown): ApiError {
  if (error instanceof ApiError) {
    return error;
  }

  const axiosError = error as AxiosError<ApiErrorResponse>;
  const data = axiosError.response?.data;
  const status = axiosError.response?.status ?? 500;
  const message = data?.message ?? axiosError.message ?? 'An unexpected error occurred';
  const errors = data?.errors ?? {};

  return new ApiError(message, status, errors);
}

/**
 * Generic API client with typed CRUD methods.
 */
export const apiClient = {
  /**
   * GET request returning a single resource.
   */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiInstance.get<ApiResponse<T>>(url, config);
      return response.data.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },

  /**
   * GET request returning a raw API response (with message, success).
   */
  async getRaw<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await apiInstance.get<ApiResponse<T>>(url, config);
      return response.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },

  /**
   * GET request returning a paginated list.
   */
  async getList<T>(
    url: string,
    params?: PaginationParams,
    config?: AxiosRequestConfig
  ): Promise<PaginatedResponse<T>> {
    try {
      const response = await apiInstance.get<PaginatedResponse<T>>(url, {
        ...config,
        params: { ...params, ...config?.params },
      });
      return response.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },

  /**
   * POST request to create a resource.
   */
  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiInstance.post<ApiResponse<T>>(url, data, config);
      return response.data.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },

  /**
   * PUT request to fully update a resource.
   */
  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiInstance.put<ApiResponse<T>>(url, data, config);
      return response.data.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },

  /**
   * PATCH request to partially update a resource.
   */
  async patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiInstance.patch<ApiResponse<T>>(url, data, config);
      return response.data.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },

  /**
   * DELETE request to remove a resource.
   */
  async delete<T = void>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiInstance.delete<ApiResponse<T>>(url, config);
      return response.data.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },

  /**
   * Upload a file via multipart/form-data.
   */
  async upload(
    url: string,
    formData: FormData,
    onProgress?: (percentage: number) => void
  ): Promise<UploadResponse> {
    try {
      const uploadInstance = createUploadInstance();
      const response = await uploadInstance.post<ApiResponse<UploadResponse>>(url, formData, {
        onUploadProgress: (event) => {
          if (event.total && onProgress) {
            const percentage = Math.round((event.loaded * 100) / event.total);
            onProgress(percentage);
          }
        },
      });
      return response.data.data;
    } catch (error) {
      throw normalizeError(error);
    }
  },
};
