import React from 'react'

import { NavLink } from 'react-router';


export const Footer = () => {
  return (
 
    <div className="fixed bottom-0 left-0 right-0 w-full z-50 bg-white rounded-4xl shadow-xl">
      <div className="grid grid-cols-5 items-center text-center py-2">

        <NavLink to="/delivery" className={({ isActive }) => `flex flex-col items-center ${isActive ? '-mt-4 space-y-1' : 'text-gray-400'}`}>
          {({ isActive }) => (
            <>
              <div className={`${isActive ? 'w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-xl border-4 border-white' : ''}`}>
                <i className="fi fi-rr-shipping-fast"></i>
              </div>
              <p className="text-xs">Delivery</p>
            </>
          )}
        </NavLink>

        <NavLink to="/add-to-pantry" className={({ isActive }) => `flex flex-col items-center ${isActive ? '-mt-4 space-y-1' : 'text-gray-400'}`}>
          {({ isActive }) => (
            <>
              <div className={`${isActive ? 'w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-xl border-4 border-white' : ''}`}>
                <i className="fi fi-ss-kitchen-set"></i>
              </div>
              <p className="text-xs">Pantry</p>
            </>
          )}
        </NavLink>

        <NavLink to="/" className={({ isActive }) => `flex flex-col items-center ${isActive ? '-mt-4 space-y-1' : 'text-gray-400'}`}>
          {({ isActive }) => (
            <>
              <div className={`${isActive ? 'w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-xl border-4 border-white' : ''}`}>
                <i className="fi fi-rr-house-blank"></i>
              </div>
              <p className="text-xs">Home</p>
            </>
          )}
        </NavLink>

        <NavLink to="/orders/home" className={({ isActive }) => `flex flex-col items-center ${isActive ? '-mt-4 space-y-1' : 'text-gray-400'}`}>
          {({ isActive }) => (
            <>
              <div className={`${isActive ? 'w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-xl border-4 border-white' : ''}`}>
                <i className="fi fi-rr-receipt text-xl"></i>
              </div>
              <p className="text-xs">Orders</p>
            </>
          )}
        </NavLink>

        <NavLink to="/add-to-cart" className={({ isActive }) => `flex flex-col items-center ${isActive ? '-mt-4 space-y-1' : 'text-gray-400'}`}>
          {({ isActive }) => (
            <>
              <div className={`${isActive ? 'w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-xl border-4 border-white' : ''}`}>
                <i className="fi fi-rr-shopping-cart-add"></i>
              </div>
              <p className="text-xs">Cart</p>
            </>
          )}
        </NavLink>
        
      </div>
    </div>
  )
}
