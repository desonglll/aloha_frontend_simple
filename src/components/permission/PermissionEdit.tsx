import PermissionForm from "./PermissionForm.tsx";
import type { Permission } from "../../types/entity.ts";

function PermissionEdit({ permission }: { permission: Permission }) {
  const submit = (permission: Permission) => {
    console.log(permission);
  };
  return (
    <>
      <PermissionForm
        action={"Edit"}
        initialId={permission.id}
        initialPermissionKey={permission.permissionKey}
        initialDescription={permission.description}
        onSubmit={submit}
      />
    </>
  );
}

export default PermissionEdit;
