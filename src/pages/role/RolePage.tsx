import RoleTable from '../../components/role/RoleTable';
import CRUDTable from '../../components/common/CRUDTable';
import BackButton from '../../components/common/BackButton';

export default function RolePage() {
  return (
    <>
      <h2 className={'px-1 text-xl font-bold'}>Role List Page</h2>
      <BackButton />
      <CRUDTable baseURL={'role'} />
      <RoleTable />
    </>
  );
}
