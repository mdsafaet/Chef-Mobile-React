
import { Nav } from '../common/Nav';
import { Footer } from '../common/Footer';
import React, { useState, useRef, useEffect } from 'react';
import { FaSackDollar } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FiMenu } from 'react-icons/fi';
import { FaRegStar } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";
import MainAction from "./MainAction";
export const ManageSupplier = () => {
const [mobileOpen, setMobileOpen] = useState(false);

const [modalOpen, setModalOpen] = useState(false);
const [modalTitle, setModalTitle] = useState('');
  // Refs for dropdowns

  const menuRef = useRef(null);
  const handleModalOpen = (title) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };



//for pop up
  useEffect(() => {
    function handleOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    }

    if (mobileOpen) {
      document.addEventListener("mousedown", handleOutside);
      document.addEventListener("touchstart", handleOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [mobileOpen]);
  return (
    <div className="   m-0 p-0 pb-16">
    

      {/* Header Part */}
      <Nav />

      {/* Main Content */}
      <div className="max-w-screen-sm mx-auto p-4 bg-white rounded-lg shadow-lg">
        <div className="p-2 rounded-md bg-white shadow-md space-y-4">
          {/* Header */}
            <div className='m-4 rounded-md bg-white shadow-md space-y-4 mb-2 mt-2'>
                 <h3 className="text-center font-bold">Product List</h3>
        </div>
          

          <div className=" mt-4">
          <MainAction />
        </div>

          {/* Title and Categories */}
          <div className="mt-4 mb-2">
            <h1 className="text-lg font-semibold text-center">ABC Meat & Poultry - Product List</h1>
            <div className="flex justify-between mt-3 items-center">
              <select
                id="categories"
                className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 border-2 border-orange-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>All Category</option>
                <option>Meat</option>
              </select>

             
    <div className="relative " ref={menuRef}>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="p-2 rounded-md focus:outline-none"
      >
        <FiMenu className="text-orange-500 text-xl" />
      </button>

      {/* Dropdown Menu */}
      {mobileOpen && (
        <div className="absolute top-full -right-5 bg-white shadow-lg rounded-lg  pr-0  w-[350px] mt-2 z-10 grid grid-cols-2 gap-1">
          <button className="text-left px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white flex items-center gap-2 focus:outline-none">
            <FiMenu className="text-orange-500 text-xl" />
            <span>Standard Prices</span>
          </button>

          <button className="text-left px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white flex items-center  gap-2 focus:outline-none">
            <FaSackDollar className="text-blue-500  text-xl"  />
            
            <span >My Prices</span>
          </button>

          <button className="text-left px-4 py-2 border-2 border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white flex items-center gap-2 focus:outline-none">
            <FaRegStar className="text-green-500  text-xl"  />
            <span>My Special</span>
          </button>

          <button className="text-left px-4 py-2 border-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white flex items-center gap-2 focus:outline-none">
            <FaBullhorn className="text-red-500  text-xl" />
            <span>Promotions</span>
          </button>
        </div>
      )}
    </div>

            </div>
          </div>

        
</div>
 {/* Paginaton */}
      
 <div className="flex justify-between items-center mt-2 ml-2 mr-2 gap-4 flex-wrap">

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
          {/* Product Table */}
          <div className="container mx-auto mt-2">
            <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
              <table className="min-w-full table-auto text-gray-700">
                <thead className="bg-white text-sm pt-2"style={{
                boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466',
              }}>
                  <tr>
                    <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap"></th>
                    <th scope="col"  className="px-6 py-3 text-left   tracking-wider whitespace-nowrap">SKU</th>
                    <th scope="col"  className="px-6 py-3 text-left tracking-wider whitespace-nowrap">Product</th>
                    <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Description</th>
                    <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Sub Category</th>
                    <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Unit Price</th>
                    <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Detail</th>
                    <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap"></th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="rounded-lg shadow-xl shadow-gray-300">
                    <td className="py-4 px-6 whitespace-nowrap w-40">
                      <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center">
             
                        <img src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/x44vv6k8yqbppyrrjnlb" alt="Beef Tenderloin" className="w-12 h-12 object-cover rounded-lg" />
                      </div>
                    </td>
                     
                    <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">BTL-12345</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                      <div className="flex flex-col">
                        <span className="font-semibold">Beef Tenderloin</span>
                        <span className="text-gray-600">1 kg</span>
                      </div>
                    </td>
                   <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black"></td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Meat</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">$54.00</td>
                    <td className="py-3 px-4">
                     <FaSearch
  className="text-xl text-orange-300 cursor-pointer"
  onClick={() => handleModalOpen('Beef Tenderloin')}
/>
                    </td>
                    <td className="py-3">
                      <button className="py-1 px-4 text-sm text-white bg-orange-500 rounded border border-orange-500 hover:bg-white hover:text-gray-900 mt-2 flex items-center space-x-2">
                       <FaShoppingBag className='text-xl' />
                      </button>
                    </td>
                  </tr>
                  <tr className="rounded-lg shadow-xl shadow-gray-300">
                    <td className="py-4 px-6 whitespace-nowrap w-40">
                      <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center">
                          <img src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/x44vv6k8yqbppyrrjnlb" alt="Beef Tenderloin" className="w-12 h-12 object-cover rounded-lg" />
                      </div>
                    </td>
                     
                    <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">BTL-12345</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                      <div className="flex flex-col">
                        <span className="font-semibold">Beef Tenderloin</span>
                        <span className="text-gray-600">1 kg</span>
                      </div>
                    </td>
                   <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black"></td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Meat</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">$54.00</td>
                    <td className="py-3 px-4">
                     <FaSearch
  className="text-xl text-orange-300 cursor-pointer"
  onClick={() => handleModalOpen('Beef Tenderloin')}
/>
                    </td>
                    <td className="py-3">
                      <button className="py-1 px-3 text-sm text-white bg-orange-500 rounded border border-orange-500 hover:bg-white hover:text-gray-900 mt-2 flex items-center space-x-2">
                       <FaShoppingBag className='text-xl' />
                      </button>
                    </td>
                  </tr>
                
                </tbody>
              </table>
            </div>
          </div>
        
      </div>

      {/* Modal */}
      {modalOpen && (
        <div 
         style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        className="fixed inset-0 bg-gray-500 bg-opacity-60 flex items-center justify-center z-100">
          <div className="bg-white rounded-2xl shadow-lg pt-3 p-3 w-[85%] sm:max-w-xs sm:w-[90%] md:max-w-sm md:w-[85%] lg:max-w-md lg:w-[70%] xl:max-w-lg xl:w-[60%] max-h-[80vh] md:h-[70%] relative overflow-y-auto">
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 z-10 border-2 border-gray-200 rounded-full text-gray-600 hover:text-gray-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Modal Content */}
            <h2 className="text-lg  font-bold mb-1">{modalTitle}</h2>
            <div className="flex justify-center items-center sm:flex-row gap-x-0">
              {/* Product Image */}
              <div className="w-full flex sm:w-3/5 mr-2">
                <img
                  src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/x44vv6k8yqbppyrrjnlb"
                  alt="Beef Tenderloin"
                  className="rounded-lg w-full h-44 object-cover bg-white border-2 border-gray-400 shadow-lg"
                />
              </div>

              {/* Product Details */}
              <div className="w-full sm:w-2/5 mt-4 sm:mt-0">
                <div className="space-y-1">
                  <div>
                    <strong className="">Brand:</strong>
                    <span className="text-gray-600">A1C Traming</span>
                  </div>
                  <div>
                    <strong className="">Cost:</strong>
                    <span className="text-gray-600">1 kg</span>
                  </div>
                  <div>
                    <strong className="">SKU:</strong>
                    <span className="text-gray-600">EFL-3,855</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <strong className="">Price:</strong>
                    <span className="text-lg font-semibold text-gray-900">$7.02</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note Field and Button Section */}
            
            
                 <div className="mt-2 flex justify-center">
            <textarea
              className="w-65  border-1 border-gray-400 rounded-lg p-2 resize-none  focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4  shadow-gray-400"
              rows="3"
              placeholder="Notes..."
            >Hello</textarea>
          </div>

            <div className="flex justify-center  items-center">
        
            <button className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700">Add to pantry</button>
          </div>
           
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
