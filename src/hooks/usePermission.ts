import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPermission } from '../api/permission.ts';
import type { Permission } from '../types/entity.ts';

export function usePermission() {
  const { id } = useParams();
  const [permission, setPermission] = useState<Permission>({
    id: '',
    permissionKey: '',
    description: '',
  });

  useEffect(() => {
    if (id) {
      getPermission(id).then(response => {
        if (response.status === 200) {
          setPermission(response.data.data);
        }
      });
    }
  }, [id]);

  return { id, permission };
}
