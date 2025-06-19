import { createBrowserRouter } from "react-router"
import { MainLayout } from "../layouts/MainLayout";
import { Sections } from "../MyKitchen/Sections";
import { PantryList } from "../MyKitchen/PantryList";
import { Dashboard } from "../pages/Dashboard";
import { ManageTeam } from "../Admin/ManageTeam";
import { AddStaff } from "../Admin/AddStaff";
import { RosterManagement } from "../Admin/RosterManagement";
import { EditStaff } from "../Admin/EditStaff"
import AddToPantry from "../MyKitchen/AddToPantry";
import AbcFood from "../MyKitchen/AbcFood";

import { EditRoster } from "../Admin/EditRoster";
import StaffSchedule from "../Admin/StaffSchedule";

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
      path: "/manage-team",
      element: <ManageTeam />,
    },
    {
      path: "/add-staff",
      element: <AddStaff />,
    },
    {
      path: "/edit-staff",
      element: <EditStaff />
    },
    {
      path: "/roster",
      element: <RosterManagement/>,
    },
     {
      path: "/edit-roster",
      element: <EditRoster />
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
      path: "/staff-schedule",
      element: <StaffSchedule />
    },
    
    

     {
      path: "/prep-list",
      element: <Preplist/>,
    },
   
    

        {
    path: "*",
    element: <Navigate to="/"  />,
  },






]);

export default routes;