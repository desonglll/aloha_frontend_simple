import { useNavigate } from 'react-router';
import type { UserGroup, UserGroupDTO } from '../../types/entity.ts';
import { createUserGroup } from '../../api/user_group.ts';
import UserGroupForm from './UserGroupForm.tsx';

function UserGroupCreate() {
  const navigate = useNavigate();
  const submit = (userGroup: UserGroup) => {
    const userGroupDTO: UserGroupDTO = {
      groupName: userGroup.groupName,
    };
    createUserGroup(userGroupDTO)
      .then(response => {
        if (response.status === 200) {
          alert('UserGroup successfully created!');
          navigate(-1);
        } else {
          console.log(response.data);
        }
      })
      .catch(error => {
        console.log(error);
        alert(`UserGroup failed! ${error.response.data.message}`);
      });
  };
  return (
    <>
      <UserGroupForm action={'Create'} onSubmit={submit} />
    </>
  );
}
export default UserGroupCreate;
