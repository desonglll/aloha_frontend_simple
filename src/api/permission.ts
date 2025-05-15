import apiClient from './axios.ts';
import type { Permission, PermissionDTO } from '../types/entity.ts';
import type { AxiosResponse } from 'axios';
import type { ApiResponse } from '../types/api_response.ts';

export const getAllPermissions = (): Promise<AxiosResponse<ApiResponse<Permission[]>>> => {
  return apiClient.get('permissions');
};

export const createPermission = (
  permission: PermissionDTO
): Promise<AxiosResponse<ApiResponse<Permission>>> => {
  return apiClient.post('permissions', permission);
};

export const getPermission = (id: string): Promise<AxiosResponse<ApiResponse<Permission>>> => {
  return apiClient.get(`permissions/${id}`);
};
export const deletePermission = (id: string): Promise<AxiosResponse<ApiResponse<Permission>>> => {
  return apiClient.delete(`permissions/${id}`);
};
