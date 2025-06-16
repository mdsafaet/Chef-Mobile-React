import React from 'react'
import { Link } from 'react-router'

export const Dashboard = () => {
  return (
      <div className="grid grid-cols-2 gap-5 mb-34 mt-8">

      <a href="#" className="p-5  rounded-md text-orange-500 flex flex-col items-center justify-center shadow-xl shadow-gray-400">
        <i className="fi fi-ss-users-alt text-[48px] mb-2"></i>
        <p className="text-xl text-black text-center">Admin</p>
      </a>
      <Link to={'/section'} className="p-5  rounded-md text-orange-500 flex flex-col items-center justify-center shadow-xl shadow-gray-400">
        <i className="fi fi-ss-kitchen-set text-[48px] mb-2"></i>
        <p className="text-xl text-black text-center">My Kitchen</p>
      </Link>
      <a href="#" className="p-5  rounded-md text-orange-500 flex flex-col items-center justify-center shadow-xl shadow-gray-400">
        <i className="fi fi-ss-supplier-alt text-[48px] mb-2"></i>
        <p className="text-xl text-black text-center">Suppliers</p>
      </a>
      <a href="#" className="p-5  rounded-md text-orange-500 flex flex-col items-center justify-center shadow-xl shadow-gray-400">
        <i className="fi fi-ss-task-checklist text-[48px] mb-2"></i>
        <p className="text-xl text-black text-center">Orders</p>
      </a>
      <a href="#" className="p-5  rounded-md text-orange-500 flex flex-col items-center justify-center shadow-xl shadow-gray-400">
        <i className="fi fi-ss-sack-dollar text-[48px] mb-2"></i>
        <p className="text-xl text-black text-center">Payment</p>
      </a>
      <a href="#" className="p-5  rounded-md text-orange-500 flex flex-col items-center justify-center shadow-xl shadow-gray-400">
        <i className="fi fi-ss-shipping-fast text-[48px] mb-2"></i>
        <p className="text-xl text-black text-center">Delivery</p>
      </a>

    </div>
  )
}
