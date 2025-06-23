import { FiClock } from "react-icons/fi";
import { useState } from "react";


const ClockIn = () => {
  const [clock, setClock] = useState(false)
  return (
    <>
      <div onClick={()=>setClock(!clock)} className="flex justify-between items-center inset-shadow-sm shadow-xl/30 mt-5 p-2 rounded-lg">
      {/* <div> */}
        <div>
          <button className="text-orange-500 bg-white px-4 py-2 rounded-2xl border-2">
            Change Status
          </button>
        </div>
        {/* Right: Status Indicator */}
        <div className="text-right">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-sm text-green-600 font-medium">Active</p>
          </div>
          <p className="text-xs text-gray-500 mt-1">04h 32m</p>
        </div>
      </div>

      <div class={`${clock ? '' : 'hidden'} max-w-2xl p-3 bg-white rounded-2xl shadow-xl border border-gray-100 mx-5 mb-5 mt-1`}>
        {/* Clock In / Take a Break Section */}
        <div class="mx-auto p-2 flex justify-between">
          <div>
            <button class="bg-orange-500 text-white px-4 py-2 rounded-2xl">
              Clock In/Out
            </button>
            <button class="bg-orange-500 text-white px-4 py-2 rounded-2xl mt-2">
              Take a Break
            </button>
          </div>
          <div class="flex justify-center items-center">
            <button class="text-gray-500 px-4 py-2 rounded-2xl text-lg">
              Location (Inside Office)
            </button>
          </div>
        </div>

        {/* Active & Break Time Summary */}
        <div class="bg-gray-50 rounded-xl p-4 mx-2 my-4 border border-gray-200 shadow-sm">
          <div class="flex justify-around text-center text-sm font-medium text-gray-700">
            <div class="flex flex-col items-center">
              <svg
                class="w-7 h-6 text-green-500 mb-1"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Total Active Time</span>
              <span class="text-lg font-semibold text-gray-900">4h 32m</span>
            </div>
            <div class="border-l border-gray-300 h-12 mx-4"></div>
            <div class="flex flex-col items-center">
              <svg
                class="w-7 h-6 text-yellow-500 mb-1"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6l4 2m8-2a10 10 0 11-20 0 10 10 0 0120 0z"
                />
              </svg>
              <span>Total Break Time</span>
              <span class="text-lg font-semibold text-gray-900">1h 10m</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClockIn;
