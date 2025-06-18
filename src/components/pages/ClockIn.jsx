import React from 'react'
import { FiClock } from 'react-icons/fi';

const ClockIn = () => {
  return (
    <div>
         <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Time Info */}
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Active Time</p>
            <p className="text-xl font-semibold text-gray-800">04h 32m</p>
          </div>
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition">
            Clock In
          </button>
          <button className="px-5 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition">
            Clock Out
          </button>
        </div>
      </div>
    </div>


 
</div>
  )
}

export default ClockIn
