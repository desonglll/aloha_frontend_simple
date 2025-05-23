import { createContext } from 'react';
import type { Role } from '../types/entity';

export const RoleContext = createContext<Role>({
  id: '',
  roleName: '',
  description: '',
  createdAt: '',
  updatedAt: '',
});
