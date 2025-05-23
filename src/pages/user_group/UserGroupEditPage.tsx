import { useUserGroup } from '../../hooks/useUserGroup.ts';
import { UserGroupContext } from '../../contexts/UserGroupContext.tsx';
import BackButton from '../../components/common/BackButton.tsx';
import UserGroupEdit from '../../components/user_group/UserGroupEdit.tsx';

function UserGroupEditPage() {
  const userGroupHook = useUserGroup();
  return (
    <>
      <UserGroupContext.Provider value={userGroupHook.userGroup}>
        <h2 className={'px-1 text-xl font-bold'}>UserGroup Edit Page</h2>
        <BackButton />
        <UserGroupEdit />
      </UserGroupContext.Provider>
    </>
  );
}

export default UserGroupEditPage;
