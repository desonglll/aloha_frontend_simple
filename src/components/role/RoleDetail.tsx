import { useContext } from 'react';
import { RoleContext } from '../../contexts/RoleContext';

function RoleDetail() {
  const role = useContext(RoleContext);
  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <td className={'px-1'}>ID:</td>
              <td className={'px-1 font-mono'}>{role.id}</td>
            </tr>
            <tr>
              <td className={'px-1'}>Role Name:</td>
              <td className={'px-1'}>{role.roleName}</td>
            </tr>
            <tr>
              <td className={'px-1'}>Description:</td>
              <td className={'px-1'}>{role.description}</td>
            </tr>
            <tr>
              <td className={'px-1'}>Created At:</td>
              <td className={'px-1'}>{role.createdAt}</td>
            </tr>
            <tr>
              <td className={'px-1'}>Updated At:</td>
              <td className={'px-1'}>{role.updatedAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RoleDetail;
