import apiClient from './axios';
import type { Role, RoleDTO } from '../types/entity';
import type { AxiosResponse } from 'axios';
import type { ApiResponse } from '../types/api_response';

export const getAllRoles = (): Promise<AxiosResponse<ApiResponse<Role[]>>> => {
  return apiClient.get('roles');
};

export const createRole = (role: RoleDTO): Promise<AxiosResponse<ApiResponse<Role>>> => {
  return apiClient.post('roles', role);
};

export const getRoleById = (id: string): Promise<AxiosResponse<ApiResponse<Role>>> => {
  return apiClient.get(`roles/${id}`);
};

export const deleteRole = (id: string): Promise<AxiosResponse<ApiResponse<Role>>> => {
  return apiClient.delete(`roles/${id}`);
};

export const updateRole = (
  id: string,
  roleDTO: RoleDTO
): Promise<AxiosResponse<ApiResponse<Role>>> => {
  return apiClient.patch(`roles/${id}`, roleDTO);
};
