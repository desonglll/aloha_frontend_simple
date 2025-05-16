import { createContext } from 'react';
import type { UserGroup } from '../types/entity.ts';

export const UserGroupContext = createContext<UserGroup>({
  id: '',
  groupName: '',
  createdAt: '',
  updatedAt: '',
});
