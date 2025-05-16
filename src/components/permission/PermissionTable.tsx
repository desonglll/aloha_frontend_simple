import { useQuery, useQueryClient } from '@tanstack/react-query';
import { deletePermission, getAllPermissions } from '../../api/permission.ts';
import DeleteButton from '../common/DeleteButton.tsx';
import NavigateToEditPageButton from '../common/NavigateToEditPageButton.tsx';
import { useNavigate } from 'react-router';

function PermissionTable() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ['permissions'],
    queryFn: getAllPermissions,
  });
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>loading failed: {(error as Error).message}</div>;

  return (
    <div className="space-y-4">
      <table>
        <thead className={'text-left'}>
          <tr>
            <th className={'px-1'}>Permission ID</th>
            <th className={'px-1'}>Permission Key</th>
            <th className={'px-1'}>Description</th>
            <th className={'px-1'}>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.data.map(permission => (
            <tr key={permission.id}>
              <td className={'px-1'}>
                <a
                  className={'underline text-cyan-600 font-mono'}
                  href={`/permission/detail/${permission.id}`}
                >
                  {permission.id}
                </a>
              </td>
              <td className={'px-1'}>{permission.permissionKey}</td>
              <td className={'px-1'}>{permission.description}</td>
              <td>
                <DeleteButton
                  buttonText={'Delete'}
                  name={'Permission'}
                  id={permission.id}
                  action={deletePermission}
                  callback={async () => {
                    await queryClient.invalidateQueries({ queryKey: ['permissions'] });
                  }}
                />
                <NavigateToEditPageButton
                  id={permission.id}
                  action={() => {
                    navigate(`/permission/edit/${permission.id}`);
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

export default PermissionTable;
