import PermissionCreate from "../../components/permission/PermissionCreate.tsx";
import BackButton from "../../components/common/BackButton.tsx";

function PermissionCreatePage() {
  return (
    <>
      <h2 className={"px-1 text-xl font-bold"}>Permission Create Page</h2>

      <BackButton />
      <PermissionCreate />
    </>
  );
}
export default PermissionCreatePage;
