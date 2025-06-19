import React from 'react'

import { Link } from 'react-router';

export const Footer = () => {
  return (
<div className="fixed bottom-0 left-0 right-0 w-full z-50 bg-white rounded-4xl shadow-xl">
      <div className="grid grid-cols-5 items-center text-center py-2">
        {/* Icon 1 - Delivery eee*/}
        <div className="flex flex-col items-center text-gray-400">
          <a href="#">
            <i className="fi fi-rr-shipping-fast text-xl"></i>
          </a>
          <p className="text-xs">Delivery</p>
        </div>

        {/* Icon 2 - Pantry */}
 <div className="flex flex-col items-center text-gray-400">
  <a href="#">
    {/* <i className="fi fi-rr-apple-whole text-xl"></i> Alternative food icon */}

    <i class="fi fi-ss-kitchen-set"></i>

  </a>
  <p className="text-xs">Pantry</p>
</div>

        {/* Active Center Icon - HOME */}
        <div className="flex flex-col items-center -mt-4 space-y-1">
          <Link to={"/"} className="w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-xl border-4 border-white" >
           
         
            <i className="fi fi-rr-house-blank text-xl"></i>
          </Link>
          <p className="text-xs text-orange-500 font-semibold">Home</p>
        </div>

        {/* Icon 4 - Order */}
        <div className="flex flex-col items-center text-gray-400">
          <a href="#">
            <i className="fi fi-rr-receipt text-xl"></i>  
          </a>
          <p className="text-xs">Order</p>
        </div>

        {/* Icon 5 - Cart */}
        <div className="flex flex-col items-center text-gray-400">
          <a href="#">
            <i className="fi fi-rr-shopping-cart-add text-xl"></i>
          </a>
          <p className="text-xs">Cart</p>
        </div>
      </div>
    </div>

  )
}
