import React from 'react'
import { Nav } from '../common/Nav'
import { Footer } from '../common/Footer'
import { BiTransfer } from 'react-icons/bi'
import { FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router'
import NavButton from './NavButton'
import ActiveTab from './ActiveTab'

export const Sections = () => {
  return (

<div>
    <Nav /> 
     <div className="pb-24 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
      {/* <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
        <button className="py-3 text-center bg-orange-500 font-semibol text-white  border-b-2 border-orange-500 rounded-lg text-sm">Action</button>
        <p className="font-bold text-sm sm:text-base">My Kitchen</p>
        <button className="py-3 text-center bg-orange-500 font-semibol text-white  border-b-2 border-orange-500 rounded-lg text-sm" onClick={() => document.getElementById('add_modal').showModal()}>
          Add Section
        </button>
      </div> */}

            <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
              <button className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm">Action</button>
              <p className="font-bold text-sm sm:text-base">My Kitchen</p>
      
              <button className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm" onClick={() => document.getElementById('add_modal').showModal()} 
              >
              Add Section
              </button>
            </div>

      {/* Add Section Modal */}
      <dialog id="add_modal" className="modal">
        <div className="modal-box">
          <h2 className="text-lg font-semibold mb-2">Create New Section</h2>
          <input type="text" placeholder="Enter Section Name" className="w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4  shadow-gray-400" />
          <select className="select select-bordered w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500  shadow-gray-400">
            <option>Select a Main Chef for Section [optional]</option>
            <option value="chef_1">Chef John</option>
            <option value="chef_2">Chef Marie</option>
          </select>
          <button className="btn block mx-auto w-1/2 mt-4 bg-orange-500 text-white shadow-2xl shadow-orange-700">Save Section</button>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

        {/* Section Overview */}
      <div className="p-4 sm:p-6 rounded-md space-y-4 mt-4 overflow-x-auto ">

      <NavButton />
       

        <div className="overflow-x-auto w-full mt-2">
          <div className="flex space-x-4 p-4 min-w-[1000px]">
            {["Pan", "Lader", "Prep-list", "Bar", "Pan", "Prep-list", "Prep-list", "Prep-list", "Prep-list", "Prep-list"].map((item, idx) => (
              <div key={idx} className="w-20 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white">
                {item}
              </div>
            ))}
          </div>
        </div>


        {/* Ladder Info + Edit Modal */}
        <div className="flex flex-wrap justify-between items-center mt-2 mb-6 gap-2">
          <h2 className="text-sm font-semibold text-gray-700">Ladder Detail Info :</h2>
          <button className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm" onClick={() => document.getElementById('edit_modal').showModal()}>
            Edit Section
          </button>
        </div>


          <dialog id="edit_modal" className="modal">
          <div className="modal-box">
            <h2 className="text-sm text-white ">Edit Pan</h2>
            <input type="text" defaultValue="Pan" className="input input-bordered w-full my-2 text-sm px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500  shadow-gray-400" />
            <select className="select select-bordered w-full text-sm  px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mt-4  shadow-gray-400 z-50">
              <option>Select a Main Chef for Section [optional]</option>
              <option selected value="alexa">Alexa Huson</option>
              <option value="john">John Doe</option>
              <option value="jane">Safaet</option>
            </select>
            <div className="flex justify-start gap-3 pt-4">
              <button className="btn bg-green-500 text-white shadow-2xl shadow-green-700">Update</button>
              <button className="btn bg-red-500 text-white shadow-2xl shadow-red-900">Delete</button>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <ActiveTab />

 
      </div>
    </div>
    <Footer />
</div>

  
  )
}
