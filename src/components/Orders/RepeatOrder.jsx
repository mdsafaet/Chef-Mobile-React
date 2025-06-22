import React from 'react';
import { Nav } from '../common/Nav';
import { Footer } from '../common/Footer';
import { FaFolderOpen } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
export const RepeatOrder = () => {
  return (
    <div className='font-sans w-full min-h-screen bg-white m-0 p-0 pb-16'>
        <div className='rounded-lg shadow-lg'>

       
       {/* Header Part */}
            <Nav />
              <div className="m-3 p-4 pt-0 rounded-md bg-white shadow-md space-y-4 mb-2 ">
                    <div className='m-4 rounded-md bg-white shadow-md space-y-4 mb-2 mt-2'>
                             <h3 className="text-center font-bold">Order History</h3>
                    </div>
             <div className="flex bg-gray-200 rounded-lg overflow-hidden shadow-sm mb-2">
        <button className="flex-1 py-3 text-center text-white font-semibold bg-orange-500 border-b-2 border-white rounded-lg text-sm">Master Order List</button>
        <button className="flex-1 py-3 text-center text-gray-600 text-sm">Order History</button>
        <button className="flex-1 py-3 text-center text-gray-600 text-sm">Repeat Orders</button>
      </div>
       
             <button className="flex  shadow-xl shadow-gray-400  items-center bg-orange-500  text-white hover:bg-white hover:text-orange-500  border-2 border-orange-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
      <span className="text-xl">+</span>
    <span>New Repeat Order</span>
    </button>
                 
            </div>
<div className="bg-white gap-32 p-4 pt-1 pb-1 m-4 rounded-2xl flex items-center relative" style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #807e7e66' }}>

      {/* Close Button (top-left corner) */}
      <button className="absolute bottom-[146px] -right-1 border-2 rounded-full text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Card Content */}
      <div className="mt-2 flex flex-col justify-start">
        <div className="rounded-md bg-white shadow-md pl-2 pr-2 space-y-4 mb-1 mt-2">
          <p className="text-gray-700 ">
            <strong>Supplier:</strong> Meatup
          </p>
        </div>

        <div className="rounded-md bg-white shadow-md pl-2 pr-2 space-y-4 mb-1">
          <p className="text-gray-700 ">
            <strong>Repeat Cycle:</strong> Weekly
          </p>
        </div>

        <div className="rounded-md bg-white shadow-md pl-2 pr-2 space-y-4 mb-1">
          <p className="text-gray-700 ">
            <strong>Day of Delivery:</strong> Tuesday
          </p>
        </div>

        <div className="rounded-md bg-white shadow-md pl-2 pr-2 space-y-4 mb-1">
          <p className="text-gray-700 ">
            <strong>Contact Person:</strong> Solomon 
          </p>
        </div>

        <div className="rounded-md bg-white shadow-md pl-2 pr-2 space-y-4 mb-1">
          <p className="text-gray-700 ">
            <strong>Mobile No:</strong> 0424 456 789
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex flex-col gap-2 justify-end">
        <FaEdit className='text-blue-500 text-xl' />
        <FaFolderOpen className='text-orange-500 text-xl' />
        
      </div>
    </div>
<div className="bg-white gap-32 p-4 pt-1 pb-1 m-4 rounded-2xl flex items-center relative" style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #807e7e66' }}>

      {/* Close Button (top-left corner) */}
      <button className="absolute bottom-[146px] -right-1 border-2 rounded-full text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Card Content */}
      <div className="mt-2 flex flex-col justify-start">
        <div className="rounded-md bg-white shadow-md pl-2 pr-2 space-y-4 mb-1 mt-2">
          <p className="text-gray-700 ">
            <strong>Supplier:</strong> Meatup
          </p>
        </div>

        <div className="rounded-md bg-white shadow-md pl-2 pr-2 space-y-4 mb-1">
          <p className="text-gray-700 ">
            <strong>Repeat Cycle:</strong> Weekly
          </p>
        </div>

        <div className="rounded-md bg-white shadow-md pl-2 pr-2 space-y-4 mb-1">
          <p className="text-gray-700 ">
            <strong>Day of Delivery:</strong> Tuesday
          </p>
        </div>

        <div className="rounded-md  shadow-md pl-2 pr-2 space-y-4 mb-1">
          <p className="text-gray-700 ">
            <strong>Contact Person:</strong> Solomon 
          </p>
        </div>

        <div className="rounded-md bg-white shadow-md pl-2 pr-2 space-y-4 mb-1">
          <p className="text-gray-700 ">
            <strong>Mobile No:</strong> 0424 456 789
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex flex-col gap-2 justify-end">
        <FaEdit className='text-blue-500 text-xl' />
        <FaFolderOpen className='text-orange-500 text-xl' />
        
      </div>
    </div>
        <Footer />   
         </div>    
    </div>
  )
}
