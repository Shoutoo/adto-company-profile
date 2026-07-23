/**
 * API request and response types.
 * @module types/api
 */

/** Successful API response wrapper */
export interface ApiResponse<T> {
  success: true;
  data: T;
  message: string;
}

/** Failed API response wrapper */
export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
  status_code: number;
}

/** Unified API response */
export type ApiResult<T> = ApiResponse<T> | ApiErrorResponse;

/** Paginated list response */
export interface PaginatedResponse<T> {
  success: true;
  data: T[];
  meta: PaginationMeta;
  message: string;
}

/** Pagination metadata */
export interface PaginationMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
}

/** Query parameters for paginated requests */
export interface PaginationParams {
  page?: number;
  per_page?: number;
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
  search?: string;
  status?: string;
}

/** Generic request config override */
export interface ApiRequestConfig {
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  signal?: AbortSignal;
  timeout?: number;
}

/** Authentication tokens */
export interface AuthTokens {
  access_token: string;
  token_type: 'Bearer';
  expires_at: string;
}

/** Authentication user returned from API */
export interface AuthUserResponse {
  id: number;
  name: string;
  email: string;
  avatar: string | null;
  role: string;
  permissions: string[];
}

/** Alias kept for backwards compatibility */
export type AuthUser = AuthUserResponse;

/** Login request payload */
export interface LoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

/** Login API response */
export interface LoginResponse {
  user: AuthUserResponse;
  token: AuthTokens;
}

/** Password reset request payload */
export interface PasswordResetRequest {
  email: string;
}

/** Password reset confirmation payload */
export interface PasswordResetConfirmation {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
}

/** File upload response */
export interface UploadResponse {
  url: string;
  path: string;
  filename: string;
  mime_type: string;
  size: number;
}

/** Dashboard statistics */
export interface DashboardStats {
  total_services: number;
  total_projects: number;
  total_blogs: number;
  total_careers: number;
  total_messages: number;
  unread_messages: number;
  total_team_members: number;
  total_clients: number;
  recent_messages: DashboardMessage[];
  monthly_visitors: MonthlyVisitor[];
}

/** Dashboard recent message */
export interface DashboardMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  is_read: boolean;
  created_at: string;
}

/** Monthly visitor data */
export interface MonthlyVisitor {
  month: string;
  visitors: number;
  page_views: number;
}
