import "./App.scss"
import {RouterProvider} from "react-router";
import router from "./routes/AppRoutes.tsx";
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
