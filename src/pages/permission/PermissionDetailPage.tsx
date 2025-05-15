import PermissionDetail from '../../components/permission/PermissionDetail.tsx';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import type { Permission } from '../../types/entity.ts';
import { deletePermission, getPermission } from '../../api/permission.ts';
import BackButton from '../../components/common/BackButton.tsx';
import DeleteButton from '../../components/common/DeleteButton.tsx';
import NavigateToEditPageButton from '../../components/common/NavigateToEditPageButton.tsx';

function PermissionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [permission, setPermission] = useState<Permission>({
    id: '',
    permissionKey: '',
    description: '',
  });
  useEffect(() => {
    if (id) {
      getPermission(id).then(response => {
        if (response.status === 200) {
          console.log(response.data);
          setPermission(response.data.data);
        }
      });
    }
  }, [id]);
  return (
    id && (
      <>
        <h2 className={'px-1 text-xl font-bold'}>Permission Detail Page</h2>
        <BackButton />
        <NavigateToEditPageButton id={id} action={() => navigate(`/permission/edit/${id}`)} />
        <DeleteButton
          name={'Permission'}
          id={id}
          action={deletePermission}
          callback={() => navigate('/permission')}
        />

        <PermissionDetail permission={permission} />
      </>
    )
  );
}

export default PermissionDetailPage;
