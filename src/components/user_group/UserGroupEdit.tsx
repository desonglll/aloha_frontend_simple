import { useNavigate } from 'react-router';
import type { UserGroup, UserGroupDTO } from '../../types/entity.ts';
import { updateUserGroup } from '../../api/user_group.ts';
import UserGroupForm from './UserGroupForm.tsx';

function UserGroupEdit() {
  const navigate = useNavigate();
  const submit = (userGroup: UserGroup) => {
    const userGroupDTO: UserGroupDTO = {
      groupName: userGroup.groupName,
    };
    updateUserGroup(userGroup.id, userGroupDTO)
      .then(response => {
        if (response.status === 200) {
          alert('userGroup successfully updated!');
          navigate(-1);
        } else {
          console.log(response.data);
        }
      })
      .catch(error => {
        console.log(error);
        alert(`userGroup update failed! ${error.response.data.message}`);
      });
  };
  return (
    <>
      <UserGroupForm action={'Edit'} onSubmit={submit} />
    </>
  );
}

export default UserGroupEdit;
