import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { GiKitchenKnives } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router';

export const Footer = () => {
  return (
<div className="fixed bottom-0 left-0 right-0 w-full shadow-xl z-50 rounded-2xl bg-white">
      <div className="grid grid-cols-12 items-center text-center">
        {/* Icon 1: Delivery */}
        <button className="col-span-2 py-1 bg-orange-500 text-white rounded-2xl hover:text-black">
          <FaShippingFast className="mx-auto text-xl" />
          <p className="text-xs">Delivery</p>
        </button>

        {/* Icon 2: Pantry */}
        <button className="col-span-2 py-1 text-gray-400 hover:text-black">
          <GiKitchenKnives className="mx-auto text-xl" />
          <p className="text-xs">Pantry</p>
        </button>

        {/* Center Icon: Home */}
        <Link to={'/'} className="col-span-4 py-1 text-orange-500 mb-2">
          <AiFillHome className="mx-auto text-2xl" />
          <p className="text-xs">Home</p>
        </Link>

        {/* Icon 4: Order */}
        <button className="col-span-2 py-1 text-gray-400 hover:text-black">
          <BsListCheck className="mx-auto text-xl" />
          <p className="text-xs">Order</p>
        </button>

        {/* Icon 5: Cart */}
        <button className="col-span-2 py-1 text-orange-500 hover:text-black">
          <FiShoppingCart className="mx-auto text-xl" />
          <p className="text-xs">Cart</p>
        </button>
      </div>
    </div>

  )
}
