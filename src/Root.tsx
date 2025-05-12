import {Outlet} from "react-router";
import NavBar from "./components/NavBar.tsx";

function Root(){
    return (
        <>
            <h2>Aloha System</h2>
            <NavBar/>
            <Outlet/>
        </>
    )
}
export default Root;