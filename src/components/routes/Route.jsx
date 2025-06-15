import { createBrowserRouter } from "react-router"
import { MainLayout } from "../layouts/MainLayout";



const routes =createBrowserRouter([

    {
      path: "/",
      element: <MainLayout />,
    },

]);

export default routes;