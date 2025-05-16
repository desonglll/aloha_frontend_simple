export interface Permission {
  id: string;
  permissionKey: string;
  description: string;
}

export interface PermissionDTO {
  permissionKey: string | null;
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
