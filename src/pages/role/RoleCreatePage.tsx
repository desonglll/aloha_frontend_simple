import BackButton from '../../components/common/BackButton';
import RoleCreate from '../../components/role/RoleCreate';

function RoleCreatePage() {
  return (
    <>
      <h2 className={'px-1 text-xl font-bold'}>Role Create Page</h2>
      <BackButton />
      <RoleCreate />
    </>
  );
}

export default RoleCreatePage;
