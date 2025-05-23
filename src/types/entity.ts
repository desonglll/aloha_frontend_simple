export interface Permission {
  id: string;
  permissionName: string;
  description: string;
}

export interface PermissionDTO {
  permissionName: string | null;
  description: string | null;
}

export interface UserGroup {
  id: string;
  groupName: string;
  createdAt: string;
  updatedAt: string;
}
export interface UserGroupDTO {
  groupName: string;
}

export interface Tweet {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}
