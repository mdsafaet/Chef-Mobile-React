import React from 'react'
import { Footer } from '../common/Footer'
import { Nav } from '../common/Nav'
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai'
import { BiChevronDown, BiChevronUp, BiInfoCircle } from 'react-icons/bi'
import { Link } from 'react-router'

export const PantryList = () => {
  return (
    <div>
      <Nav />
 
       <div className="pb-24 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
        <button className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm">Action</button>
        <p className="font-bold text-sm sm:text-base">My Kitchen</p>

        <button
          className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm"
          onClick={() => document.getElementById('editModal').showModal()}
        >
          Edit Pantry
        </button>
      </div>

      {/* Edit Pantry Modal */}
      <dialog id="editModal" className="modal">
        <div className="modal-box">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Create New Section</h2>
          <input
            type="text"
            placeholder="Enter Section Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <select
            className="mb-2 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select a Main Chef for Section [optional]</option>
            <option value="chef_1">Chef John</option>
            <option value="chef_2">Chef Marie</option>
          </select>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition duration-200 text-sm">
            Save Section
          </button>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="p-4 sm:p-6 rounded-md space-y-4 mt-4">
        <div className="flex flex-wrap justify-between gap-2">
        <Link to="/section" className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm tab-active">Section</Link>
        <Link to="/pantry-list" className="bg-orange-600 hover:bg-orange-600 text-white px-2 py-2 rounded-md text-sm">Pantry-list</Link>
        <Link to="/prep-list" className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-2 rounded-md text-sm">Prep-list</Link>
        </div>

        <div className="overflow-x-auto w-full mt-2">
          <div className="flex space-x-4 p-4 min-w-[1000px]">
            {["Pan", "Lader", "Prep-list", "Bar", "Pan", "Prep-list", "Prep-list", "Prep-list", "Prep-list", "Prep-list"].map((item, idx) => (
              <div key={idx} className="w-20 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-3">
          <div className="flex items-center border border-orange-500 rounded-md overflow-hidden bg-gray-50 w-full sm:w-1/3 md:w-1/4 inset-shadow-sm shadow-xl/30">
            <input
              type="text"
              placeholder="Search Item"
              className="w-full px-3 py-2 bg-transparent focus:outline-none"
            />
            <div className="px-3 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </div>
          </div>

          <div className="text-center font-semibold text-lg flex-grow ">
            Pan Pantry List
          </div>

          <button className="border border-orange-500 text-orange-500 font-medium px-4 py-2 rounded-md hover:bg-orange-50 w-full sm:w-auto inset-shadow-sm shadow-xl/30">
            Clear List
          </button>
        </div>

        <div className ="mx-auto mt-10 px- sm:px-6 lg:px-8  ">
          <div className="flex items-center justify-between bg-white p-4 rounded-lg inset-shadow-sm shadow-xl/30 border border-white " >
            <img
              src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
              alt="Beef"
              className="w-16 h-16 rounded-md object-cove border border-amber-50 shadow-lg shadow-gray-400 "
            />

            <div className="flex-1 px-3">
              <p className="font-semibold text-gray-800">Beef Tenderloin </p>
              <p className="text-sm text-gray-500">5kg </p>
            </div>

            <div className="flex-1 px-2">
              <p className="font-semibold text-gray-800">Price</p>
              <p className="text-sm text-red-500">$55.8</p>
            </div>

            <div className="flex items-center gap-2">
             <button
                onClick={() => document.getElementById('productModal').showModal()}
                className="border-2 border-blue-500 text-blue-500 rounded p-1 hover:bg-orange-100"
              >
                <AiOutlineInfoCircle className="h-5 w-5" />
              </button>
              <button className="border-2 border-orange-500 text-orange-500 rounded p-1 hover:bg-orange-100">
                <AiOutlineClose className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>



      
 <dialog id="productModal" className="modal">
        <div className="modal-box w-[400px] p-6 relative">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={() => document.getElementById('productModal').close()}
          >
            &times;
          </button>

          <h2 className="text-lg font-bold text-gray-800 mb-2">Beef Tenderloin</h2>

          <div className="flex flex-row gap-4 mb-4">
            <img
              src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
              alt="Product"
              className="w-40 h-24 object-cover rounded border border-amber-50 shadow-lg shadow-gray-400"
            />
            <div className="text-sm space-y-1">
              <p className="font-semibold text-gray-900">ABC Meat & Poultry</p>
              <p className="text-gray-600">SKU: <span className="font-medium">BTL-12345</span></p>
              <p className="text-green-600 font-semibold">In Stock</p>
              <p className="text-gray-500 text-xs">Next Del: <span className="font-medium">26/05/2023</span></p>
              <p className="text-gray-700">5 kg</p>
            </div>
          </div>

  <div className="mb-4 flex flex-col items-center">
            <label className="text-sm text-gray-600 mb-1">Quantity</label>
            <div className="relative w-16">
              <input
                type="number"
                defaultValue="1"
                min="1"
                className="w-full border border-gray-300 rounded px-2 py-1 text-center appearance-none"
              />
              <div className="absolute right-0 top-0 flex flex-col h-full justify-between py-1 pr-1">
                <button className="text-gray-500 hover:text-gray-700">
                  <BiInfoCircle  size={16} />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <BiChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>


             <div className="mb-4 flex justify-center">
            <textarea
              className="w-72 border border-gray-300 rounded p-2 resize-none"
              rows="3"
              placeholder="Notes..."
            >Hello</textarea>
          </div>

            <div className="flex justify-center gap-3 pt-4 items-center">
            <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-green-700">Save Notes</button>
            <button className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700">Add to Order</button>
          </div>
        </div>
      </dialog>
      </div>
    </div>
    <Footer />
    </div>
    
  )
}
