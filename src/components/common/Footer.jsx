import { FaHome, FaTruck, FaShoppingCart, FaClipboardCheck, FaUtensils } from 'react-icons/fa';

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full z-50 bg-white rounded-4xl shadow-xl">
      <div className="grid grid-cols-5 items-center text-center py-2">
        <div className="flex flex-col items-center text-gray-400">
          <FaTruck className="text-xl" />
          <p className="text-xs">Delivery</p>
        </div>

        <div className="flex flex-col items-center text-gray-400">
          <FaUtensils className="text-xl" />
          <p className="text-xs">Pantry</p>
        </div>

        <div className="flex flex-col items-center -mt-4 space-y-1">
          <div className="w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-xl border-4 border-white">
            <FaHome className="text-xl" />
          </div>
          <p className="text-xs text-orange-500 font-semibold">Home</p>
        </div>

        <div className="flex flex-col items-center text-gray-400">
          <FaClipboardCheck className="text-xl" />
          <p className="text-xs">Order</p>
        </div>

        <div className="flex flex-col items-center text-gray-400">
          <FaShoppingCart className="text-xl" />
          <p className="text-xs">Cart</p>
        </div>
      </div>
    </div>
  );
}

