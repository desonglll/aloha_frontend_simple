import { createPermission } from '../../api/permission.ts';
import type { Permission, PermissionDTO } from '../../types/entity.ts';
import { useNavigate } from 'react-router';
import PermissionForm from './PermissionForm.tsx';

function PermissionCreate() {
  const navigate = useNavigate();
  const submit = (permission: Permission) => {
    const permissionDTO: PermissionDTO = {
      permissionKey: permission.permissionKey,
      description: permission.description,
    };
    createPermission(permissionDTO)
      .then(response => {
        if (response.status === 200) {
          alert('Permission successfully created!');
          navigate(-1);
        } else {
          console.log(response.data);
        }
      })
      .catch(error => {
        console.log(error);
        alert(`Permission failed! ${error.response.data.message}`);
      });
  };
  return (
    <>
      <PermissionForm action={'Create'} onSubmit={submit} />
    </>
  );
}

export default PermissionCreate;
