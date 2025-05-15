export interface Permission {
  id: string;
  permissionKey: string;
  description: string;
}

export interface PermissionDTO {
  permissionKey: string | null;
  description: string | null;
}
export interface Tweet {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}
