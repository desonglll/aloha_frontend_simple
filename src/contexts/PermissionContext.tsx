import { createContext } from 'react';
import type { Permission } from '../types/entity.ts';

export const PermissionContext = createContext<Permission>({
  id: '',
  permissionKey: '',
  description: '',
});
