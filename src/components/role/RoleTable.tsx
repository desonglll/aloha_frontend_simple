import { useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteRole, getAllRoles } from '../../api/role';
import DeleteButton from '../common/DeleteButton';
import NavigateToEditPageButton from '../common/NavigateToEditPageButton';
import { useNavigate } from 'react-router';
import type { Role } from '../../types/entity';

function RoleTable() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ['roles'],
    queryFn: getAllRoles,
  });
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>loading failed: {(error as Error).message}</div>;

  return (
    <div className="space-y-4">
      <table>
        <thead className={'text-left'}>
          <tr>
            <th className={'px-1'}>Role ID</th>
            <th className={'px-1'}>Role Name</th>
            <th className={'px-1'}>Description</th>
            <th className={'px-1'}>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.data?.map((role: Role) => (
            <tr key={role.id}>
              <td className={'px-1'}>
                <a className={'underline text-cyan-600 font-mono'} href={`/role/detail/${role.id}`}>
                  {role.id}
                </a>
              </td>
              <td className={'px-1'}>{role.roleName}</td>
              <td className={'px-1'}>{role.description}</td>
              <td>
                <DeleteButton
                  buttonText={'Delete'}
                  name={'Role'}
                  id={role.id}
                  action={deleteRole}
                  callback={async () => {
                    await queryClient.invalidateQueries({ queryKey: ['roles'] });
                  }}
                />
                <NavigateToEditPageButton
                  id={role.id}
                  action={() => {
                    navigate(`/role/edit/${role.id}`);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleTable;
