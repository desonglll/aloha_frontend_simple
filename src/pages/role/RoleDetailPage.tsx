import RoleDetail from '../../components/role/RoleDetail';
import { useNavigate, useParams } from 'react-router';
import { deleteRole } from '../../api/role';
import BackButton from '../../components/common/BackButton';
import DeleteButton from '../../components/common/DeleteButton';
import NavigateToEditPageButton from '../../components/common/NavigateToEditPageButton';
import { RoleContext } from '../../contexts/RoleContext';
import { useRole } from '../../hooks/useRole';

function RoleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const roleHook = useRole();
  return (
    id && (
      <>
        <RoleContext.Provider value={roleHook.role}>
          <h2 className={'px-1 text-xl font-bold'}>Role Detail Page</h2>
          <BackButton />
          <NavigateToEditPageButton id={id} action={() => navigate(`/role/edit/${id}`)} />
          <DeleteButton
            buttonText={'Delete'}
            name={'Role'}
            id={id}
            action={deleteRole}
            callback={() => navigate('/role')}
          />
          <RoleDetail />
        </RoleContext.Provider>
      </>
    )
  );
}

export default RoleDetailPage;
