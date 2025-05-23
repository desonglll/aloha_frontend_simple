import BackButton from '../../components/common/BackButton.tsx';
import UserGroupTable from '../../components/user_group/UserGroupTable.tsx';
import CRUDTable from '../../components/common/CRUDTable.tsx';

function UserGroupPage() {
  return (
    <>
      <h2 className={'px-1 text-xl font-bold'}>Permission List Page</h2>
      <BackButton />
      <CRUDTable baseURL={'user_group'} />
      <UserGroupTable />
    </>
  );
}
export default UserGroupPage;
