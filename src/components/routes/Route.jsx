import { createBrowserRouter } from "react-router"
import { MainLayout } from "../layouts/MainLayout";
import { Sections } from "../MyKitchen/Sections";
import { PantryList } from "../MyKitchen/PantryList";
import { Dashboard } from "../pages/Dashboard";
import AddToPantry from "../MyKitchen/AddToPantry";
import AbcFood from "../MyKitchen/AbcFood";
import Preplist from "../MyKitchen/Preplist";



const routes =createBrowserRouter([

    {
      path: "/",
      element: <MainLayout />,
    },

    {
      path: "/section",
      element: <Sections />,
    },
     {
      path: "/Pantry-List",
      element: <PantryList />,
    },
         {
      path: "/dashboard",
      element: <Dashboard />,
    },

             {
      path: "/add-to-pantry",
      element: <AddToPantry />,
    },

                 {
      path: "/abc-food",
      element: <AbcFood />,
    },
                    {
      path: "/prep-list",
      element: <Preplist/>,
    },



]);

export default routes;