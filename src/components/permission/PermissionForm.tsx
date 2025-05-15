import { useState } from "react";
import type { Permission } from "../../types/entity.ts";
import * as React from "react";

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
      <div className={"w-max mx-1"}>
        <form className={"flex flex-col"} onSubmit={(event) => submit(event)}>
          <label>permission key:</label>
          <input
            type={"text"}
            name={"permissionKey"}
            className={"border"}
            onChange={(event) => setPermissionKey(event.target.value)}
          />
          <label>description:</label>
          <input
            type={"text"}
            name={"description"}
            className={"border"}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button type="submit" className={"my-1 border cursor-pointer"}>
            {action}
          </button>
        </form>
      </div>
    </>
  );
}

export default PermissionForm;
