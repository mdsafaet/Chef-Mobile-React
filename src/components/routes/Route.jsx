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



import { SuppliersHome } from "../Suppliers/SuppliersHome";
import { ProductList } from "../Suppliers/ProductList";
import { SupplierDetails } from "../Suppliers/SupplierDetails";
import { OrderHistory } from "../Orders/OrderHistory";
import { RepeatOrder } from "../Orders/RepeatOrder";
import { OrderList} from "../Orders/OrderList";
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
  {
    path: "/day-staff",
    element: <StaffScheduleDay />,
  },
  {
    path: "/attendance",
    element: <Attendance />,
  },

 {
    path: "*",
    element: <Navigate to="/"  />,
  },  
  
  {

      path: "/prep-list",
      element: <Preplist/>,
    },


{

      path: "/suppliers/home",
      element: <SuppliersHome />,
    },
   {
  path: "/suppliers/product_list",
  element: <ProductList />,
},
   {
  path: "/suppliers/details",
  element: <SupplierDetails />,
},
   {
  path: "/orders/history",
  element: <OrderHistory />,
},
  {
  path:"/orders/repeat",
  element:<RepeatOrder />,
},

  {
  path:"/orders/orderlist",
  element:<OrderList />,
},


      {
      path: "/add-to-cart",
      element: <AddToCart/>,
    },



]);

export default routes;