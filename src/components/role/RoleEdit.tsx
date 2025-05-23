import RoleForm from './RoleForm';
import type { Role, RoleDTO } from '../../types/entity';
import { updateRole } from '../../api/role';
import { useNavigate } from 'react-router';

function RoleEdit() {
  const navigate = useNavigate();
  const submit = (role: Role) => {
    const roleDTO: RoleDTO = {
      roleName: role.roleName,
      description: role.description,
    };
    updateRole(role.id, roleDTO)
      .then(response => {
        if (response.status === 200) {
          alert('Role successfully updated!');
          navigate(-1);
        } else {
          console.log(response.data);
        }
      })
      .catch(error => {
        console.log(error);
        alert(`Role update failed! ${error.response.data.message}`);
      });
  };
  return (
    <>
      <RoleForm action={'Edit'} onSubmit={submit} />
    </>
  );
}

export default RoleEdit;
