import { useContext, useEffect, useState } from 'react';
import type { Permission } from '../../types/entity.ts';
import * as React from 'react';
import { PermissionContext } from '../../contexts/PermissionContext.tsx';

function PermissionForm({
  action,
  onSubmit,
}: {
  action: string;
  onSubmit: (permission: Permission) => void;
}) {
  const permission = useContext(PermissionContext);
  const [localPermission, setLocalPermission] = useState(permission);
  useEffect(() => {
    setLocalPermission(permission);
  }, [permission]);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(localPermission);
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
                  <td className={'px-1 font-mono'}>{localPermission.id}</td>
                </tr>
              )}
              <tr>
                <td className={'px-1'}>Permission Key:</td>
                <td className={'px-1'}>
                  <input
                    type={'text'}
                    name={'permissionKey'}
                    className={'border'}
                    value={localPermission.permissionKey}
                    onChange={e =>
                      setLocalPermission(p => ({ ...p, permissionKey: e.target.value }))
                    }
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
                    value={localPermission.description}
                    onChange={e => setLocalPermission(p => ({ ...p, description: e.target.value }))}
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
