import PermissionForm from './PermissionForm.tsx';
import type { Permission, PermissionDTO } from '../../types/entity.ts';
import { updatePermission } from '../../api/permission.ts';
import { useNavigate } from 'react-router';

function PermissionEdit() {
  const navigate = useNavigate();
  const submit = (permission: Permission) => {
    const permissionDTO: PermissionDTO = {
      permissionName: permission.permissionName,
      description: permission.description,
    };
    updatePermission(permission.id, permissionDTO)
      .then(response => {
        if (response.status === 200) {
          alert('Permission successfully updated!');
          navigate(-1);
        } else {
          console.log(response.data);
        }
      })
      .catch(error => {
        console.log(error);
        alert(`Permission update failed! ${error.response.data.message}`);
      });
  };
  return (
    <>
      <PermissionForm action={'Edit'} onSubmit={submit} />
    </>
  );
}

export default PermissionEdit;
