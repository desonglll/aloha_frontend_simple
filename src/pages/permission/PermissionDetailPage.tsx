import PermissionDetail from '../../components/permission/PermissionDetail.tsx';
import { useNavigate, useParams } from 'react-router';
import { deletePermission } from '../../api/permission.ts';
import BackButton from '../../components/common/BackButton.tsx';
import DeleteButton from '../../components/common/DeleteButton.tsx';
import NavigateToEditPageButton from '../../components/common/NavigateToEditPageButton.tsx';
import { PermissionContext } from '../../contexts/PermissionContext.tsx';
import { usePermission } from '../../hooks/usePermission.ts';

function PermissionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const permissionHook = usePermission();
  return (
    id && (
      <>
        <PermissionContext.Provider value={permissionHook.permission}>
          <h2 className={'px-1 text-xl font-bold'}>Permission Detail Page</h2>
          <BackButton />
          <NavigateToEditPageButton id={id} action={() => navigate(`/permission/edit/${id}`)} />
          <DeleteButton
            buttonText={'Delete'}
            name={'Permission'}
            id={id}
            action={deletePermission}
            callback={() => navigate('permission')}
          />
          <PermissionDetail />
        </PermissionContext.Provider>
      </>
    )
  );
}

export default PermissionDetailPage;
