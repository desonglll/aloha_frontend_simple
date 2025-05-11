import {
    createBrowserRouter,
} from "react-router";
import Root from "../Root.tsx";



const router = createBrowserRouter([
    {
        path: "/",
        Component: Root
    },
]);


export default router;