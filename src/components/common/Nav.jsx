import { useState } from 'react'
import { FiMenu } from 'react-icons/fi';

export const Nav = () => {

  const [details, setDetails] = useState(false);
  return (
<div className='p-3'>
  <h2 className="text-xl font-semibold text-center mb-5">Mixing Pot Restaurant</h2>
  <div className="relative flex justify-between items-center bg-white rounded-2xl p-5 mb-6 inset-shadow-sm shadow-gray-400 shadow-xl">
    {/* Profile Info */}
    <div className="flex items-center gap-4">
      <img
        src="https://i.pravatar.cc/100"
        alt="Profile"
        className="w-16 h-16 rounded-xl border-2 border-white shadow-sm/10"
      />
      <div>
        <h2 className="text-xl font-semibold">OrdersPlus is Awesome</h2>
        <p className="text-sm">Head Chef / Sous Chef</p>
      </div>
    </div>

    {/* Hamburger & Dropdown Menu Container */}
    <div className="relative ">
      {/* Hamburger Button */}
      <button onClick={()=>setDetails(!details)} className="bg-orange-500 w-8 h-8 rounded-full">
        <i className="fi fi-rr-menu-burger text-white"></i>
      </button>

      {/* Dropdown Menu */}
      {details && <div className="absolute right-0 mt-2 w-30  p-2 rounded shadow-md flex flex-col justify-end space-y-2 z-50 bg-white">
        <a href="#" className="bg-white text-orange-500 flex justify-center rounded-2xl border-2">Profile</a>
        <a href="#" className="text-white flex justify-center bg-orange-500 rounded-2xl">Log out</a>
      </div>}
    </div>
  </div>
</div>
  )
}
