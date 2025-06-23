import React from 'react'

import { Link, NavLink } from 'react-router';


export const Footer = () => {
  return (
 
    <div className="fixed bottom-0 left-0 right-0 w-full z-50 bg-white rounded-4xl shadow-xl">
      <div className="grid grid-cols-5 items-center text-center py-2">

        {/* Icon 1 - Delivery */}
        <div className="flex flex-col items-center text-gray-400">
          <a href="#">
            <i className="fi fi-rr-shipping-fast text-xl"></i>
          </a>
          <p className="text-xs">Delivery</p>
        </div>

        {/* Icon 2 - Pantry */}
        <div className="flex flex-col items-center text-gray-400">
          <NavLink
            to="/add-to-pantry"
            className={({ isActive }) =>
              `w-12 h-12 flex items-center justify-center rounded-full shadow-md 
              ${isActive ? 'bg-orange-500 text-white' : 'text-gray-400'}`
            }
          >
            <i className="fi fi-ss-kitchen-set text-xl"></i>
          </NavLink>
          <p className="text-xs">Pantry</p>
        </div>

        {/* Active Center Icon - HOME */}
        <div className="flex flex-col items-center text-gray-400-mt-4 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-14 h-14 flex items-center justify-center rounded-full shadow-xl border-4 border-white 
              ${isActive ? 'bg-orange-500 text-white' : 'bg-gray-300 text-white'}`
            }
          >
            <i className="fi fi-rr-house-blank text-xl"></i>
          </NavLink>
          <p className="text-xs text-orange-500 font-semibold">Home</p>
        </div>

        {/* Icon 4 - Order */}
        <div className="flex flex-col items-center text-gray-400">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` 
              ${isActive ? 'w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-xl border-4 border-white' : 'text-xl'}`
            }
          >
            <i className="fi fi-rr-receipt text-xl"></i>
          </NavLink>
          <p className="text-xs">Order</p>
        </div>

        {/* Icon 5 - Cart */}
        <div className="flex flex-col items-center text-gray-400">
          <NavLink
            to="/add-to-cart"
            className={({ isActive }) =>
              `
              ${isActive ? 'w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-xl border-4 border-white' : 'text-xl'}`
            }
          >
            <i className="fi fi-rr-shopping-cart-add text-xl"></i>
          </NavLink>
          <p className="text-xs">Cart</p>
        </div>
        
      </div>
    </div>
  )
}
