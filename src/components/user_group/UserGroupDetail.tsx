import { useContext } from 'react';
import { UserGroupContext } from '../../contexts/UserGroupContext.tsx';
import dayjs from 'dayjs';

function UserGroupDetail() {
  const userGroup = useContext(UserGroupContext);

  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <td className={'px-1'}>ID:</td>
              <td className={'px-1 font-mono'}>{userGroup.id}</td>
            </tr>
            <tr>
              <td className={'px-1'}>Group Name:</td>
              <td className={'px-1'}>{userGroup.groupName}</td>
            </tr>
            <tr>
              <td className={'px-1'}>Created At:</td>
              <td className={'px-1'}>{dayjs(userGroup.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
            </tr>
            <tr>
              <td className={'px-1'}>Updated At:</td>
              <td className={'px-1'}>{dayjs(userGroup.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserGroupDetail;
