import {
    createBrowserRouter,
} from "react-router";
import Root from "../Root.tsx";
import Home from "../pages/Home.tsx";



const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path: "home",
                Component: Home
            }
        ]
    },
]);


export default router;