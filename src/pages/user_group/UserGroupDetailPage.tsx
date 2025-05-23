import { useNavigate, useParams } from 'react-router';
import BackButton from '../../components/common/BackButton.tsx';
import NavigateToEditPageButton from '../../components/common/NavigateToEditPageButton.tsx';
import DeleteButton from '../../components/common/DeleteButton.tsx';
import { useUserGroup } from '../../hooks/useUserGroup.ts';
import { UserGroupContext } from '../../contexts/UserGroupContext.tsx';
import { deleteUserGroup } from '../../api/user_group.ts';
import UserGroupDetail from '../../components/user_group/UserGroupDetail.tsx';

function UserGroupDetailPage() {
  const { id } = useParams();

  const navigate = useNavigate();
  const userGroupHook = useUserGroup();
  return (
    id && (
      <>
        <UserGroupContext.Provider value={userGroupHook.userGroup}>
          <h2 className={'px-1 text-xl font-bold'}>UserGroup Detail Page</h2>
          <BackButton />
          <NavigateToEditPageButton id={id} action={() => navigate(`/user_group/edit/${id}`)} />
          <DeleteButton
            buttonText={'Delete'}
            name={'UserGroup'}
            id={id}
            action={deleteUserGroup}
            callback={() => navigate('/user_group')}
          />
          <UserGroupDetail />
        </UserGroupContext.Provider>
      </>
    )
  );
}
export default UserGroupDetailPage;
