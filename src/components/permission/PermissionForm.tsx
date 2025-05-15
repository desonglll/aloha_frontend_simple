import { useState } from 'react';
import type { Permission } from '../../types/entity.ts';
import * as React from 'react';

function PermissionForm({
  action,
  initialId,
  initialPermissionKey,
  initialDescription,
  onSubmit,
}: {
  action: string;
  initialId: string;
  initialPermissionKey: string;
  initialDescription: string;
  onSubmit: (permission: Permission) => void;
}) {
  const [id] = useState(initialId);
  const [permissionKey, setPermissionKey] = useState(initialPermissionKey);
  const [description, setDescription] = useState(initialDescription);
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const permission: Permission = {
      id,
      permissionKey,
      description,
    };
    onSubmit(permission);
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
                  <td className={'px-1 font-mono'}>{initialId}</td>
                </tr>
              )}
              <tr>
                <td className={'px-1'}>Permission Key:</td>
                <td className={'px-1'}>
                  <input
                    type={'text'}
                    name={'permissionKey'}
                    className={'border'}
                    defaultValue={initialPermissionKey}
                    onChange={event => setPermissionKey(event.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className={'px-1'}>Description:</td>
                <td className={'px-1 '}>
                  <input
                    type={'text'}
                    name={'description'}
                    className={'border'}
                    defaultValue={initialDescription}
                    onChange={event => setDescription(event.target.value)}
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

export default PermissionForm;
