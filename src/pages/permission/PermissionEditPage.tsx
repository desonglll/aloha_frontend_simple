import PermissionEdit from "../../components/permission/PermissionEdit.tsx";
import type { Permission } from "../../types/entity.ts";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getPermission } from "../../api/permission.ts";

function PermissionEditPage() {
  const { id } = useParams();
  const [permission, setPermission] = useState<Permission>({
    id: "",
    permissionKey: "",
    description: "",
  });
  useEffect(() => {
    if (id) {
      getPermission(id).then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setPermission(response.data.data);
        }
      });
    }
  }, [id]);
  return (
    <>
      <PermissionEdit permission={permission} />
    </>
  );
}

export default PermissionEditPage;
