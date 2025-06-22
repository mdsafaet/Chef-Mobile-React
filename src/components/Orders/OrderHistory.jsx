import React from 'react'
import { Nav } from '../common/Nav';
import { Footer } from '../common/Footer';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
export const OrderHistory = () => {
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
       
             <button class="flex  shadow-xl shadow-gray-400  items-center bg-orange-500  text-white hover:bg-white hover:text-orange-500  border-2 border-orange-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
      All Orders
    </button>
                 
            </div>
            {/* Paginaton */}
      
 <div className="flex justify-between items-center mt-2 ml-4 mr-4 gap-4 flex-wrap">

        <div className="relative w-[50%] max-w-xl border-1 border-gray-400 rounded-lg shadow-lg shadow-gray-400"
            style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466' }}>

            <input
            type="text"
            className="w-full py-2 px-3 pr-10 text-gray-800 placeholder-gray-400 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Search an item"
            />
         
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500">
            <i className="fi fi-rr-search"></i>
            </span>
        </div>

        
            <div className="flex justify-center">
            <nav className="inline-flex rounded-md shadow overflow-hidden border border-gray-300">
            
                <button className="px-2 py-1 bg-white text-gray-700 hover:bg-gray-100">&lt;</button>
           
                <button className="px-3 py-1 bg-orange-500 text-white font-semibold border-l border-gray-300">1</button>
        
                <button className="px-3 py-1 bg-white text-gray-700 hover:bg-gray-100 border-l border-gray-300">2</button>
       
                <button className="px-2 py-1 bg-white text-gray-700 hover:bg-gray-100 border-l border-gray-300">&gt;</button>
            </nav>
            </div>
        
        </div>
          {/* Order Table */}
    
      <div className="container mt-2 p-4 mx-auto overflow-auto ">
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="min-w-full table-auto text-gray-700">
            <thead
              className="bg-white text-sm pt-2"
              style={{
                boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466',
              }}
            >
              <tr>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap"></th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Order id</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Supplier</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Status</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Date</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Details</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="rounded-lg shadow-lg shadow-gray-300">
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">1</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">ABC MEAT-035</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">ABC Meat & Poutry</td>
                <td className="px-6 py-4 whitespace-nowrap  w-40 text-black"><button class="bg-green-100 text-green-400 px-2 py-1 rounded-lg">Pending</button></td>
<td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Jun 22, 2025</td>
<td className="py-3 px-4">
    <div className='flex justify-center'>
                             <Link to="/orders/orderlist"> 
    <FaSearch
      className="text-xl text-orange-300 cursor-pointer"
    />
  </Link>
    </div>

                    </td>
              </tr>
              <tr className="rounded-lg shadow-lg shadow-gray-300">
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">1</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">ABC MEAT-035</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">ABC Meat & Poutry</td>
                <td className="px-6 py-4 whitespace-nowrap  w-40 text-black"><button class="bg-blue-100 text-blue-400 px-5 py-1 rounded-lg">Sent</button></td>
<td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Jun 22, 2025</td>
<td className="py-3 px-4">
    <div className='flex justify-center'>
                                                        <Link to="/orders/orderlist"> 
    <FaSearch
      className="text-xl text-orange-300 cursor-pointer"
    />
  </Link>
    </div>

                    </td>
              </tr>
              <tr className="rounded-lg shadow-lg shadow-gray-300">
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">1</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">ABC MEAT-035</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">ABC Meat & Poutry</td>
                <td className="px-6 py-4 whitespace-nowrap  w-40 text-black"><button class="bg-green-100 text-green-400 px-2 py-1 rounded-lg">Pending</button></td>
<td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Jun 22, 2025</td>
<td className="py-3 px-4">
    <div className='flex justify-center'>
                           <Link to="/orders/orderlist"> 
    <FaSearch
      className="text-xl text-orange-300 cursor-pointer"
    />
  </Link>
    </div>

                    </td>
              </tr>
        
           
            </tbody>
          </table>
            
        </div>
        
      </div>
        <Footer />   
         </div>    
    </div>
  )
}
