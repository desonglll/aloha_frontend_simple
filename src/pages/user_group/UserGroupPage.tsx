import BackButton from '../../components/common/BackButton.tsx';
import UserGroupTable from '../../components/user_group/UserGroupTable.tsx';

function UserGroupPage() {
  return (
    <>
      <h2 className={'px-1 text-xl font-bold'}>Permission List Page</h2>
      <BackButton />
      <UserGroupTable />
    </>
  );
}
export default UserGroupPage;
