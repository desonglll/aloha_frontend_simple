import PermissionEdit from '../../components/permission/PermissionEdit.tsx';
import BackButton from '../../components/common/BackButton.tsx';
import { PermissionContext } from '../../contexts/PermissionContext.tsx';
import { usePermission } from '../../hooks/usePermission.ts';

function PermissionEditPage() {
  const permissionHook = usePermission();

  return (
    <>
      <PermissionContext.Provider value={permissionHook.permission}>
        <h2 className={'px-1 text-xl font-bold'}>Permission Edit Page</h2>
        <BackButton />
        <PermissionEdit />
      </PermissionContext.Provider>
    </>
  );
}

export default PermissionEditPage;
