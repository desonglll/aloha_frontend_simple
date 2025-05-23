import { useContext, useEffect, useState } from 'react';
import type { Role } from '../../types/entity';
import * as React from 'react';
import { RoleContext } from '../../contexts/RoleContext';

function RoleForm({ action, onSubmit }: { action: string; onSubmit: (role: Role) => void }) {
  const role = useContext(RoleContext);
  const [localRole, setLocalRole] = useState(role);
  useEffect(() => {
    setLocalRole(role);
  }, [role]);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(localRole);
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
                  <td className={'px-1 font-mono'}>{localRole.id}</td>
                </tr>
              )}
              <tr>
                <td className={'px-1'}>Role Name:</td>
                <td className={'px-1'}>
                  <input
                    type={'text'}
                    name={'roleName'}
                    className={'border'}
                    value={localRole.roleName}
                    onChange={e => setLocalRole(p => ({ ...p, roleName: e.target.value }))}
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
                    value={localRole.description}
                    onChange={e => setLocalRole(p => ({ ...p, description: e.target.value }))}
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

export default RoleForm;
