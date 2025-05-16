import DeleteButton from '../common/DeleteButton.tsx';
import NavigateToEditPageButton from '../common/NavigateToEditPageButton.tsx';
import { useNavigate } from 'react-router';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteUserGroup, getAllUserGroups } from '../../api/user_group.ts';

function UserGroupTable() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ['user_groups'],
    queryFn: getAllUserGroups,
  });
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>loading failed: {(error as Error).message}</div>;

  return (
    <>
      <div className="space-y-4">
        <table>
          <thead className={'text-left'}>
            <tr>
              <th className={'px-1'}>Group ID</th>
              <th className={'px-1'}>Group Name</th>
              <th className={'px-1'}>Operation</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.data.map(user_group => (
              <tr key={user_group.id}>
                <td className={'px-1'}>
                  <a
                    className={'underline text-cyan-600 font-mono'}
                    href={`/user_group/detail/${user_group.id}`}
                  >
                    {user_group.id}
                  </a>
                </td>
                <td className={'px-1'}>{user_group.groupName}</td>
                <td>
                  <DeleteButton
                    buttonText={'Delete'}
                    name={'UserGroup'}
                    id={user_group.id}
                    action={deleteUserGroup}
                    callback={async () => {
                      await queryClient.invalidateQueries({ queryKey: ['user_groups'] });
                    }}
                  />
                  <NavigateToEditPageButton
                    id={user_group.id}
                    action={() => {
                      navigate(`/user_group/edit/${user_group.id}`);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserGroupTable;
