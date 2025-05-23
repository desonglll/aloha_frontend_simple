import BackButton from '../../components/common/BackButton.tsx';
import UserGroupCreate from '../../components/user_group/UserGroupCreate.tsx';

function UserGroupCreatePage() {
  return (
    <>
      <h2 className={'px-1 text-xl font-bold'}>UserGroup Create Page</h2>
      <BackButton />
      <UserGroupCreate />
    </>
  );
}
export default UserGroupCreatePage;
