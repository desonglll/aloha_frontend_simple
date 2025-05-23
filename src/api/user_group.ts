import type { AxiosResponse } from 'axios';
import type { ApiResponse } from '../types/api_response.ts';
import type { UserGroup, UserGroupDTO } from '../types/entity.ts';
import apiClient from './axios.ts';

export const getAllUserGroups = (): Promise<AxiosResponse<ApiResponse<UserGroup[]>>> => {
  return apiClient.get('user_groups');
};
export const getUserGroup = (id: string): Promise<AxiosResponse<ApiResponse<UserGroup>>> => {
  return apiClient.get(`user_groups/${id}`);
};
export const deleteUserGroup = (id: string): Promise<AxiosResponse<ApiResponse<UserGroup>>> => {
  return apiClient.delete(`user_groups/${id}`);
};
export const updateUserGroup = (
  id: string,
  userGroupDTO: UserGroupDTO
): Promise<AxiosResponse<ApiResponse<UserGroup>>> => {
  return apiClient.patch(`user_groups/${id}`, userGroupDTO);
};

export const createUserGroup = (
  userGroup: UserGroupDTO
): Promise<AxiosResponse<ApiResponse<UserGroup>>> => {
  return apiClient.post('user_groups', userGroup);
};
