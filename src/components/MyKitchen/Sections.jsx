import React from 'react'
import { Nav } from '../common/Nav'
import { Footer } from '../common/Footer'
import { BiTransfer } from 'react-icons/bi'
import { FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router'

export const Sections = () => {
  return (

<div>
    <Nav /> 
     <div className="pb-24 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
        <button className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm">Action</button>
        <p className="font-bold text-sm sm:text-base">My Kitchen</p>
        <button className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm" onClick={() => document.getElementById('add_modal').showModal()}>
          Add Section
        </button>
      </div>

      {/* Add Section Modal */}
      <dialog id="add_modal" className="modal">
        <div className="modal-box">
          <h2 className="text-lg font-semibold">Create New Section</h2>
          <input type="text" placeholder="Enter Section Name" className="input input-bordered w-full my-2 text-sm" />
          <select className="select select-bordered w-full text-sm">
            <option>Select a Main Chef for Section [optional]</option>
            <option value="chef_1">Chef John</option>
            <option value="chef_2">Chef Marie</option>
          </select>
          <button className="btn w-full mt-4 bg-orange-500 text-white">Save Section</button>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Section Overview */}
      <div className="p-4 sm:p-6 rounded-md space-y-4 mt-4">
        <div className="flex flex-wrap justify-between gap-2">
        <Link to="/section" className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm tab-active">Section</Link>
        <Link to="/pantry-list" className="bg-orange-600 hover:bg-orange-600 text-white px-2 py-2 rounded-md text-sm">Pantry-list</Link>
        <Link to="/prep-list" className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-2 rounded-md text-sm">Prep-list</Link>
        </div>

        <div className="overflow-x-auto w-full mt-2">
          <div className="flex space-x-2 p-2 min-w-[1000px]">
            {['Pan', 'Lader', 'Bar', 'Bar', 'Pan', 'Lader', 'Lader', 'Lader', 'Lader', 'Lader'].map((item, idx) => (
              <div key={idx} className="w-18 h-9 bg-orange-500 rounded-md flex items-center justify-center text-white">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Ladder Info + Edit Modal */}
        <div className="flex flex-wrap justify-between items-center mt-4 gap-2">
          <h2 className="text-sm font-semibold text-gray-700">Ladder Detail Info :</h2>
          <button className="bg-orange-500 text-orange px-3 py-1 rounded-md text-sm font-semibold" onClick={() => document.getElementById('edit_modal').showModal()}>
            Edit Section
          </button>
        </div>

        <dialog id="edit_modal" className="modal">
          <div className="modal-box">
            <h2 className="text-lg font-semibold">Edit Pan</h2>
            <input type="text" defaultValue="Pan" className="input input-bordered w-full my-2 text-sm" />
            <select className="select select-bordered w-full text-sm">
              <option>Select a Main Chef for Section [optional]</option>
              <option selected value="alexa">Alexa Huson</option>
              <option value="john">John Doe</option>
              <option value="jane">Safaet</option>
            </select>
            <div className="flex justify-start gap-3 pt-4">
              <button className="btn bg-orange-500 text-white">Update</button>
              <button className="btn bg-red-500 text-white">Delete</button>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        {/* Staff Card Example */}
    <div className="relative bg-white rounded-xl p-4 w-60 text-center shadow-xl shadow-gray-400 mx-auto">
      {/* Swap icon (top right) */}
      <button className="absolute top-2 right-2 bg-yellow-400 hover:bg-yellow-500 text-white p-1 rounded">
        <BiTransfer className="w-4 h-4" />
      </button>

      {/* Profile Image */}
      <img
        src="https://randomuser.me/api/portraits/women/32.jpg"
        alt="Profile"
        className="w-20 h-20 mx-auto rounded-full mb-2 border shadow"
      />

      {/* Name */}
      <p className="text-base font-semibold text-gray-800 mb-4">Alice</p>

      {/* Action Buttons: Details & Assign */}
<div className="flex justify-center gap-2 px-2">
  <button
    className="text-xs bg-blue-500 text-white px-3 py-1 rounded"
    onClick={() => document.getElementById("details_modal").showModal()}
  >
    Details
  </button>

  <button
    className="text-xs bg-green-500 text-white px-3 py-1 rounded"
    onClick={() => document.getElementById("assign_modal").showModal()}
  >
    Assign
  </button>
</div>

      {/* Delete icon + label (bottom right corner) */}
      <div className="absolute bottom-2 right-2 flex flex-col items-center gap-1">
        <button className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-full">
          <FiTrash2 className="w-4 h-4" />
        </button>
        <span className="text-[10px] text-gray-600"></span>
      </div>
    </div>





        <dialog id="details_modal" className="modal">
          <div className="modal-box">
            <h2 className="text-lg font-semibold mb-4">Staff Details</h2>
            <p><strong>Name:</strong> Alice</p>
            <p><strong>Position:</strong> Chef</p>
            <p><strong>Phone:</strong> 0123456789</p>
            <p><strong>Status:</strong> Full Time</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <dialog id="assign_modal" className="modal">
          <div className="modal-box">
            <h2 className="text-lg font-semibold mb-4">Assign to Section</h2>
            <select className="select select-bordered w-full text-sm mb-3">
              <option>Select a Section</option>
              <option>Kitchen</option>
              <option>Service</option>
            </select>
            <div className="modal-action">
              <button className="btn bg-orange-500 text-white">Assign</button>
              <form method="dialog">
                <button className="btn">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
    <Footer />
</div>

  
  )
}
