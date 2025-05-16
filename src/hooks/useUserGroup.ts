import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { UserGroup } from '../types/entity.ts';
import { getUserGroup } from '../api/user_group.ts';

export function useUserGroup() {
  const { id } = useParams();
  const [userGroup, setUserGroup] = useState<UserGroup>({
    id: '',
    groupName: '',
    createdAt: '',
    updatedAt: '',
  });

  useEffect(() => {
    if (id) {
      getUserGroup(id).then(response => {
        if (response.status === 200) {
          setUserGroup(response.data.data);
        }
      });
    }
  }, [id]);

  return { id, userGroup: userGroup };
}
