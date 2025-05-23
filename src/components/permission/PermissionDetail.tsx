import { useContext } from 'react';
import { PermissionContext } from '../../contexts/PermissionContext.tsx';

function PermissionDetail() {
  const permission = useContext(PermissionContext);
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
              <td className={'px-1'}>{permission.permissionName}</td>
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
