import { Outlet } from "react-router";
import NavBar from "./components/NavBar.tsx";

function Root() {
  return (
    <>
      <h2 className={"px-1 font-extrabold text-3xl"}>Aloha System</h2>
      <NavBar />
      <Outlet />
    </>
  );
}
export default Root;
