import { createBrowserRouter, Navigate } from "react-router"
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

import StaffScheduleDay from "../Admin/StaffScheduleDay";
import Attendance from "../Admin/Attendance";

import AddToCart from "../pages/AddToCart";
import Login from "../authentication/login";
import OrdersHome from "../Orders/OrdersHome";

const routes =createBrowserRouter([
 {
    path: "*",
    element: <Navigate to="/"  />,
  },
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
    path: "/day-staff",
    element: <StaffScheduleDay />,
  },
  {
    path: "/attendance",
    element: <Attendance />,
  },


  
  {
      path: "/prep-list",
      element: <Preplist/>,
    },


      {
      path: "/add-to-cart",
      element: <AddToCart/>,
    },

    //fardin
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/orders/home",
      element: <OrdersHome />,
    },
    //fardin






]);

export default routes;