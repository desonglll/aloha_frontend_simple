import type { Permission } from '../../types/entity.ts';

function PermissionDetail({ permission }: { permission: Permission }) {
  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <td className={'px-1'}>ID:</td>
              <td className={'px-1 font-mono'}>{permission.id}</td>
            </tr>
            <tr>
              <td className={'px-1'}>Permission Key:</td>
              <td className={'px-1'}>{permission.permissionKey}</td>
            </tr>
            <tr>
              <td className={'px-1'}>Description:</td>
              <td className={'px-1'}>{permission.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PermissionDetail;
