import { createBrowserRouter } from "react-router"
import { MainLayout } from "../layouts/MainLayout";
import { Footer } from '../common/Footer';



const routes =createBrowserRouter([

    {
      path: "/",
      element: <MainLayout />,
    },
        {
      path: "/footer",
      element: <Footer />,
    },
            {
      path: "/fardin",
      element: <Footer />,
    },

]);

export default routes;