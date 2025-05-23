import { useQuery } from '@tanstack/react-query';
import { getRoleById } from '../api/role';
import { useParams } from 'react-router';
import type { Role } from '../types/entity';

export const useRole = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['role', id],
    queryFn: () => getRoleById(id!),
    enabled: !!id,
  });

  return {
    role:
      data?.data?.data ??
      ({
        id: '',
        roleName: '',
        description: '',
        createdAt: '',
        updatedAt: '',
      } as Role),
    isLoading,
    error,
  };
};
