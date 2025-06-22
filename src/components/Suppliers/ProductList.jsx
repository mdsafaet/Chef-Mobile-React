
import { Nav } from '../common/Nav';
import { Footer } from '../common/Footer';
import React, { useState } from 'react';
import MainAction from "./MainAction";
import { Link } from 'react-router-dom';
import { FaClipboardList } from 'react-icons/fa';
import { FaFolderOpen } from "react-icons/fa";

export const ProductList = () => {

  const [showModal, setShowModal] = useState(false);



  return (
    
    <div className="font-sans w-full min-h-screen   m-0 p-0 bg-white pb-16">
      <div className='rounded-lg shadow-lg '>
       
         <Nav />
      
      
      <div className="m-3 rounded-md bg-white shadow-md space-y-4 mb-2 mt-2">
        <div className='m-4 rounded-md bg-white shadow-md space-y-4 mb-2 mt-2'>
                 <h3 className="text-center font-bold">Manage Suppliers</h3>
        </div>
 

        <div className=" ml-2 mr-2 mt-4">
        <MainAction />
        </div>

        {/* Category Section */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-orange-500 font-bold text-lg text-center">Categories</h2>
          </div>

          <div className="container mx-auto pl-2 mb-2 px-1">
            <div className="overflow-x-auto">
              <div className="flex gap-3 py-2 min-w-max">
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  All Categories
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Fruit & Vegetables
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Meat & Poultry
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Seafood
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Dry Good
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Bakery & Patisserie
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Dairy & Cheese
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Coffee & Tea
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Alcohol
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Dairy
                </button>
              </div>
            </div>
          </div>
        </div>
</div>
        {/* Connect Supplier Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 text-white  shadow-xl shadow-gray-400 px-2 py-2 rounded-full lg:w-2/5 w-64"
          >
            Connect Supplier Using Token
          </button>
        </div>

        {/* Modal */}
    {showModal && (
  <div 
   style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // This sets a semi-transparent black background
  className="fixed inset-0 flex items-center justify-center z-100">
    <div
      className="relative bg-white rounded-2xl shadow-xl p-8 w-11/12 max-w-md text-center space-y-4"
    >
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold shadow-xl"
      >
        &times;
      </button>
      <h2 className="font-semibold text-gray-700 mt-4 text-lg">Connect Supplier Using Token</h2>
      <input
        type="text"
        placeholder="Enter Token For Verification"
        className="w-full px-4 py-2 text-gray-600 border-2 border-gray-200 rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4  shadow-gray-400"
      />
      <button
        onClick={() => setShowModal(false)}  // This will close the modal
       className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-2xl shadow-orange-700">
        Verify Token
      </button>
    </div>
  </div>
)}


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
      {/* Supplier Table */}
    
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
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Name of Supplier</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Contact Person</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Phone No.</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Email</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Products & Prices</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Supplier Details</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="rounded-lg shadow-lg shadow-gray-300">
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">ABC Meat & Poutry</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Damen Deng</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">0404670200</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  damendeng <br/>2000@gmail.com
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                    
      <Link to="/suupliers/home"> {/* Wrap the icon with the Link component */}
      <FaClipboardList
        className="text-orange-500"
        size="2em"
          
      />
      </Link>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                    <Link to="/suppliers/details"> {/* Wrap the icon with the Link component */}
        <FaFolderOpen className="text-orange-500" size="2em" />
      </Link>
                  </div>
                </td>
              </tr>
              <tr className="rounded-lg shadow-lg shadow-gray-300">
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">ABC Meat & Poutry</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Damen Deng</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">0404670200</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  damendeng <br/>2000@gmail.com
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                   
                         <Link to="/suupliers/home"> {/* Wrap the icon with the Link component */}
      <FaClipboardList
        className="text-orange-500"
        size="2em"
          
      />
      </Link>
                
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                            <Link to="/suppliers/details"> {/* Wrap the icon with the Link component */}
        <FaFolderOpen className="text-orange-500" size="2em" />
      </Link>
                  </div>
                </td>
              </tr>
              <tr className="rounded-lg shadow-lg shadow-gray-300">
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">ABC Meat & Poutry</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Damen Deng</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">0404670200</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  damendeng <br/>2000@gmail.com
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                                  
                         <Link to="/suupliers/home"> {/* Wrap the icon with the Link component */}
      <FaClipboardList
        className="text-orange-500"
        size="2em"
          
      />
      </Link>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                            <Link to="/suppliers/details"> {/* Wrap the icon with the Link component */}
        <FaFolderOpen className="text-orange-500" size="2em" />
      </Link>
                  </div>
                </td>
              </tr>
              <tr className="rounded-lg shadow-lg shadow-gray-300">
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">ABC Meat & Poutry</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Damen Deng</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">0404670200</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  damendeng <br/>2000@gmail.com
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                                  
                         <Link to="/suupliers/home"> {/* Wrap the icon with the Link component */}
      <FaClipboardList
        className="text-orange-500"
        size="2em"
          
      />
      </Link>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                            <Link to="/suppliers/details"> {/* Wrap the icon with the Link component */}
        <FaFolderOpen className="text-orange-500" size="2em" />
      </Link>
                  </div>
                </td>
              </tr>
           
            </tbody>
          </table>
            
        </div>
        
      </div>
  
      </div>
   <Footer />
    </div>
  
  );
};
