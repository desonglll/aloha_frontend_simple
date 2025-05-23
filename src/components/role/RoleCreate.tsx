import { createRole } from '../../api/role';
import type { Role, RoleDTO } from '../../types/entity';
import { useNavigate } from 'react-router';
import RoleForm from './RoleForm';

function RoleCreate() {
  const navigate = useNavigate();
  const submit = (role: Role) => {
    const roleDTO: RoleDTO = {
      roleName: role.roleName,
      description: role.description,
    };
    createRole(roleDTO)
      .then(response => {
        if (response.status === 200) {
          alert('Role successfully created!');
          navigate(-1);
        } else {
          console.log(response.data);
        }
      })
      .catch(error => {
        console.log(error);
        alert(`Role creation failed! ${error.response.data.message}`);
      });
  };
  return (
    <>
      <RoleForm action={'Create'} onSubmit={submit} />
    </>
  );
}

export default RoleCreate;
