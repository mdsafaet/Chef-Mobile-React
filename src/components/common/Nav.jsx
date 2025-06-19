import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';

export const Nav = () => {

     const [mobileOpen, setMobileOpen] = useState(false);
  return (

 <div className="w-95 mx-auto">
      <h2 className="text-xl font-semibold text-center mb-5">Mixing Pot Restaurant</h2>

      <div className="relative flex justify-between items-center bg-white rounded-2xl p-5 mb-6 shadow-xl shadow-gray-400">
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-16 h-16 rounded-xl border-2 border-white shadow"
          />
          <div>
            <h2 className="text-xl font-semibold">OrderPlus is Awesome</h2>
            <p className="text-sm">Head Chef / Sous Chef</p>
            {/* <a href="/logout" className="text-sm text-orange-500">Logout</a> */}
          </div>
        </div>

        {/* Hamburger & Dropdown Menu (Mobile Only) */}
        <div className="relative md:hidden">
          {/* Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center"
          >
            <FiMenu className="text-white text-xl" />
          </button>

          {/* Dropdown Menu */}
          {mobileOpen && (
            <div
              className="absolute right-0 mt-2 w-40 bg-gray-50 p-2 rounded shadow-md flex flex-col space-y-2 z-50"
              onMouseLeave={() => setMobileOpen(false)}
            >
              <a href="#" className="text-black hover:underline">Profile</a>
              <a href="#" className="text-black hover:underline">Log out</a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
