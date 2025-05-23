import { useContext, useEffect, useState } from 'react';
import * as React from 'react';
import type { UserGroup } from '../../types/entity.ts';
import { UserGroupContext } from '../../contexts/UserGroupContext.tsx';
import dayjs from 'dayjs';

function UserGroupForm({
  action,
  onSubmit,
}: {
  action: string;
  onSubmit: (userGroup: UserGroup) => void;
}) {
  const userGroup = useContext(UserGroupContext);
  const [localUserGroup, setLocalUserGroup] = useState(userGroup);
  useEffect(() => {
    setLocalUserGroup(userGroup);
  }, [userGroup]);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(localUserGroup);
  };
  return (
    <>
      <div className={'w-max'}>
        <form className={'flex flex-col'} onSubmit={event => submit(event)}>
          <table>
            <tbody>
              {action === 'Edit' && (
                <tr>
                  <td className={'px-1'}>ID:</td>
                  <td className={'px-1 font-mono'}>{localUserGroup.id}</td>
                </tr>
              )}
              <tr>
                <td className={'px-1'}>Group Name:</td>
                <td className={'px-1'}>
                  <input
                    type={'text'}
                    name={'groupName'}
                    className={'border'}
                    value={localUserGroup.groupName}
                    onChange={e => setLocalUserGroup(p => ({ ...p, groupName: e.target.value }))}
                  />
                </td>
              </tr>
              <tr>
                <td className={'px-1'}>Created At:</td>
                <td className={'px-1 '}>
                  <input
                    disabled={!(action === 'Create')}
                    type={'datetime-local'}
                    name={'createdAt'}
                    className={'border'}
                    value={dayjs(localUserGroup.createdAt).format('YYYY-MM-DDTHH:mm')}
                    onChange={e => setLocalUserGroup(p => ({ ...p, createdAt: e.target.value }))}
                  />
                </td>
              </tr>
              <tr>
                <td className={'px-1'}>Updated At:</td>
                <td className={'px-1 '}>
                  <input
                    disabled={!(action === 'Create')}
                    type={'datetime-local'}
                    name={'updatedAt'}
                    className={'border'}
                    value={dayjs(localUserGroup.updatedAt).format('YYYY-MM-DDTHH:mm')}
                    onChange={e => setLocalUserGroup(p => ({ ...p, updatedAt: e.target.value }))}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className={'my-1 mx-1 border cursor-pointer'}>
            {action}
          </button>
        </form>
      </div>
    </>
  );
}
export default UserGroupForm;
