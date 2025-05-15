import PermissionDetail from "../../components/permission/PermissionDetail.tsx";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Permission } from "../../types/entity.ts";
import { getPermission } from "../../api/permission.ts";
import BackButton from "../../components/common/BackButton.tsx";

function PermissionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
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
      <h2 className={"px-1 text-xl font-bold"}>Permission Detail Page</h2>
      <BackButton />
      <button
        className={"border mx-1 px-1 cursor-pointer"}
        onClick={() => {
          navigate(`/permission/edit/${id}`);
        }}
      >
        Edit
      </button>
      <PermissionDetail permission={permission} />
    </>
  );
}

export default PermissionDetailPage;
