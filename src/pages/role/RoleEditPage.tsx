import RoleEdit from '../../components/role/RoleEdit';
import BackButton from '../../components/common/BackButton';
import { RoleContext } from '../../contexts/RoleContext';
import { useRole } from '../../hooks/useRole';

function RoleEditPage() {
  const roleHook = useRole();

  return (
    <>
      <RoleContext.Provider value={roleHook.role}>
        <h2 className={'px-1 text-xl font-bold'}>Role Edit Page</h2>
        <BackButton />
        <RoleEdit />
      </RoleContext.Provider>
    </>
  );
}

export default RoleEditPage;
