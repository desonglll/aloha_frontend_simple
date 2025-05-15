import PermissionTable from "../../components/permission/PermissionTable.tsx";
import CRUDTable from "../../components/common/CRUDTable.tsx";
import BackButton from "../../components/common/BackButton.tsx";

export default function PermissionPage() {
  return (
    <>
      <h2 className={"px-1 text-xl font-bold"}>Permission List Page</h2>
      <BackButton />
      <CRUDTable baseURL={"permission"} />
      <PermissionTable />
    </>
  );
}
