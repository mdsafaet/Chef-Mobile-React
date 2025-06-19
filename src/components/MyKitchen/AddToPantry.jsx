import React from 'react'
import { Footer } from '../common/Footer'
import { Nav } from '../common/Nav'
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Link } from 'react-router';
import NavButton from './NavButton';
import SearchPagination from '../common/SearchPagination';

const AddToPantry = () => {
  return (
    <div>
        <Nav />
        <h1 className="text-xl font-bold text-center mb-2">Add to Pantry</h1>

        <div className='p-4'>
<NavButton  />
</div>
        
             
          

        <div className="bg-gray-300 p-4 overflow-x-auto w-full ">
      <div className="flex gap-2">
        {/* Active Tab */}
        <button className="px-4 py-2 text-sm font-semibold rounded border border-orange-500 bg-orange-500 text-white">
          ABC Meat & Poultry
        </button>

        {/* Inactive Tab */}
        <Link to={'/abc-food'} className="px-4 py-2 text-sm font-semibold rounded border border-gray-300 bg-white ">
          ABC Food Wholesale
        </Link>
      </div>
    </div>
    
        <div className="overflow-x-auto w-full mt-2">
          <div className="flex space-x-4 p-4 min-w-[1000px]">
            {["Meat",].map((item, idx) => (
              <div key={idx} className="w-20 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white">
                {item}
              </div>
            ))}
          </div>
        </div>

         {/* <section className=" w-1/2 mt-4 mx-auto">
      <div className="flex items-center border border-orange-500 rounded-md overflow-hidden bg-gray-50 inset-shadow-sm shadow-xl/30">
        <input
          type="text"
          placeholder="Search Item"
          className="w-full px-3 py-2 bg-transparent focus:outline-none"
        />
        <div className="px-3 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>
      </div>
    </section> */}
    <SearchPagination />

    <div className="container mx-auto mt-4">
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full table-auto text-gray-700">
          <thead
            className="bg-white text-sm"
            style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466' }}
          >
            <tr>
              <th className="py-2 px-4 text-left"></th>
              <th className="py-2 px-4 text-left text-orange-500">SKU</th>
              <th className="py-2 px-4 text-left text-orange-500">Product</th>
              <th className="py-2 px-4 text-left text-orange-500">Description</th>
              <th className="py-2 px-4 text-left text-orange-500">Sub Category</th>
              <th className="py-2 px-4 text-left text-orange-500">Unit Price</th>
              <th className="py-2 px-4 text-left text-orange-500">Detail</th>
              <th className="py-2 px-4 text-left"></th>
              <th className="py-2 px-4 text-left"></th>
              
            </tr>
          </thead>
          <tbody className="text-sm">
            {[1, 2, 3].map((_, index) => (
              <tr key={index} className="rounded-lg shadow-xl shadow-gray-300">
                <td className="py-3 px-4">
                  <div
                    className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center"
                    style={{
                      boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466',
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
                      alt="Beef Tenderloin"
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </div>
                </td>
                <td className="py-3 font-semibold w-40 text-black px-2">BTL-12345</td>
                <td className="py-2 w-40 text-black px-4">
                  <div className="flex flex-col">
                    <span className="font-semibold">Beef Tenderloin</span>
                    <span className="text-gray-600">1 kg</span>
                  </div>
                </td>
                <td className="py-3 px-4"></td>
                <td className="py-3 font-semibold w-40 text-black px-4">Meat</td>
                <td className="py-3 font-semibold w-40 text-black px-4">$54.00</td>
                <td className="py-3 px-4">
                  <CiSearch className="w-6 h-6"
                  onClick={() => document.getElementById('searchModal').showModal()}/>
                </td>
                <td className="  py-3 px-4">
                     <MdOutlineShoppingBag  className="w-6 h-6 text-amber-500"
                     
                    />  
                </td>
                     <td className="py-3 px-4">
                     <AiOutlineShoppingCart className="w-6 h-6 text-amber-500"
                       onClick={() => document.getElementById('productModal2').showModal()} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
       <dialog id="productModal2" className="modal">
          <div className="modal-box w-[400px] p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={() => document.getElementById('productModal2').close()}
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
                    <BiChevronUp  size={16} />
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
              
              <button className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700">Add to Order</button>
            </div>
          </div>
        </dialog>

<dialog id="searchModal" className="modal">
  <div className="modal-box w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto rounded-2xl shadow-lg relative pt-4 p-4">

    {/* Close Button */}
    <form method="dialog">
      <button className="btn btn-sm btn-ghost absolute right-4 top-4 border-2 border-gray-400 text-gray-600 hover:text-gray-900">
        ✕
      </button>
    </form>

    {/* Title */}
    <h2 className="text-2xl font-semibold text-orange-500 mb-4 text-center sm:text-left">
      Beef Tenderloin
    </h2>

    {/* Content Area */}
    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
      {/* Image (Smaller, Aligned) */}
      <div className="w-full sm:w-[40%] flex justify-center sm:justify-start">
        <img
          src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
          alt="Beef Tenderloin"
          className="rounded-lg w-28 h-20 object-cover border-2 border-gray-400 shadow"
          style={{
            boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 6px #54545466',
          }}
        />
      </div>

      {/* Product Info */}
      <div className="w-full sm:w-[60%] space-y-1 text-sm text-center">
        <div>
          <strong className="text-gray-700">Brand:</strong>{" "}
          <span className="text-gray-600">A1C Traming</span>
        </div>
        <div>
          <strong className="text-gray-700">Cost:</strong>{" "}
          <span className="text-gray-600">1 kg</span>
        </div>
        <div>
          <strong className="text-gray-700">SKU:</strong>{" "}
          <span className="text-gray-600">EFL-3,855</span>
        </div>
        <div className="flex items-center space-x-2 mt-2 justify-center">
          <strong className="text-gray-700">Price:</strong>
          <span className="text-lg font-semibold text-gray-900">$7.02</span>
        </div>
      </div>
    </div>

    {/* Note + Action */}
    <div className="mb-4 flex justify-center">
              <textarea
                className="w-72 border border-gray-300 rounded p-2 resize-none"
                rows="3"
                placeholder="Notes..."
              >Hello</textarea>
            </div>
  
              <div className="flex justify-center gap-3 pt-4 items-center">
              
              <button className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700"> Add to Pantry</button>
            </div>
  </div>
</dialog>


    
  <Footer />

    </div>
    
  )
}

export default AddToPantry
