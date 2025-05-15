import { createBrowserRouter } from "react-router";
import Root from "../Root.tsx";
import Home from "../pages/Home.tsx";
import TweetPage from "../pages/tweet/TweetPage.tsx";
import PermissionPage from "../pages/permission/PermissionPage.tsx";
import PermissionCreatePage from "../pages/permission/PermissionCreatePage.tsx";
import PermissionDetailPage from "../pages/permission/PermissionDetailPage.tsx";
import PermissionEditPage from "../pages/permission/PermissionEditPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "tweet",
        Component: TweetPage,
      },
      {
        path: "permission",
        children: [
          {
            index: true,
            Component: PermissionPage,
          },
          {
            path: "create",
            Component: PermissionCreatePage,
          },
          {
            path: "detail/:id",
            Component: PermissionDetailPage,
          },
          {
            path: "edit/:id",
            Component: PermissionEditPage,
          },
        ],
      },
    ],
  },
]);

export default router;
