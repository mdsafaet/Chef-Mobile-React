import React from 'react'
import { BiTransfer } from 'react-icons/bi'
import { FiTrash2 } from 'react-icons/fi'

const ActiveTab = () => {
  return (
    <div>
  
    <div className="tabs tabs-lift">
      {/* Tab 1: Section Staff List */}
      <input type="radio" name="my_tabs_3" className="tab " aria-label="Section Staff List" />
      <div className="tab-content bg-base-100 border-base-300 p-4 " >

        {/* Card wrapper needs to be relative for absolute positioning */}
        <div className="relative border border-gray-300 rounded-md p-4 max-w-4xl mx-auto bg-white shadow-sm mt-2 flex items-center justify-between inset-shadow-sm shadow-xl/30">

          {/* Left: Image */}
          <div className="w-16 h-20 flex items-center justify-center border rounded overflow-hidden bg-gray-100">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Staff"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Center: Text */}
          <div className="flex-1 px-4">
            <p className="font-semibold text-sm">Name: Aelox</p>
            <p className="text-gray-600 text-sm">Position: full time</p>
            <p className="text-gray-600 text-sm">Phone: 0123456789</p>
          </div>

          {/* Top-right Swap Icon */}
          <button className="absolute top-2 right-2 bg-blue-500 hover:bg-yellow-500 text-white p-2 rounded-full shadow">
            <BiTransfer className="w-4 h-4" />
          </button>
        </div>


        <div className="relative border border-gray-300 rounded-md p-4 max-w-4xl mx-auto bg-white shadow-sm mt-2 flex items-center justify-between inset-shadow-sm shadow-xl/30">

          {/* Left: Image */}
          <div className="w-16 h-20 flex items-center justify-center border rounded overflow-hidden bg-gray-100">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Staff"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Center: Text */}
          <div className="flex-1 px-4">
            <p className="font-semibold text-sm">Name: Aelox</p>
            <p className="text-gray-600 text-sm">Position: full time</p>
            <p className="text-gray-600 text-sm">Phone: 0123456789</p>
          </div>

          {/* Top-right Swap Icon */}
          <button className="absolute top-2 right-2 bg-red-500 hover:bg-yellow-500 text-white p-2 rounded-full shadow">
            <FiTrash2 className="w-4 h-4" />
          </button>
        </div>

      </div>



      {/* Tab 2: Assign Staff */}
      <input type="radio" name="my_tabs_3" className="tab" aria-label="Assign Staff To Section" defaultChecked />
<div className="tab-content bg-base-100 border-base-300 p-6">
  <div className="container mx-auto mt-2">
    <div className="shadow-lg rounded-lg bg-white shadow-gray-300 overflow-x-auto">
      <table className="min-w-[640px] table-auto text-gray-700 shadow-gray-300">
        <thead
          className="bg-white text-sm shadow-gray-300"
          style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466' }}
        >
          <tr>
            <th className="py-2 px-4 text-left"></th>
            <th className="py-2 px-4 text-left"></th>
            <th className="py-2 px-4 text-left text-orange-500 ">Full Name</th>
            <th className="py-2 px-4 text-left text-orange-500">Position</th>
            <th className="py-2 px-4 text-left text-orange-500">Contract No.</th>
          </tr>
        </thead>
        <tbody className="text-sm ">
          {[1, 2, 3].map((_, index) => (
            <tr key={index} className="rounded-lg shadow-sm shadow-gray-300">
              {/* Checkbox */}
              <td className="py-3 px-4">
                <input type="checkbox" className="checkbox checkbox-sm checkbox-warning" />
              </td>

              {/* Profile Image */}
              <td className="py-3 px-4">
                <img
                  src={`https://randomuser.me/api/portraits/men/${30 + index}.jpg`}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover border"
                />
              </td>

              {/* Name */}
              <td className="py-3 font-semibold w-40 text-black px-2">Alex Hales</td>

              {/* Position */}
              <td className="py-2 w-40 text-black px-4">Chef</td>

              {/* Contact */}
              <td className="py-3 px-4">9930633320</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  <div className="text-center mt-4">
    <button className="btn bg-orange-500 text-white">Add Selected</button>
  </div>
</div>

    </div>
    </div>
  )
}

export default ActiveTab


