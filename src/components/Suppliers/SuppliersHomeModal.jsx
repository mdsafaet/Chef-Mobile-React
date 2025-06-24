import React, { useState } from 'react';

const SuppliersHomeModal = () => {
  // Declare showModal state to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* This button will trigger the modal */}
       <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 text-white  shadow-xl shadow-gray-200 px-2 py-2 rounded-full lg:w-2/5 w-64"
          >
            Connect Supplier Using Token
          </button>

      {showModal && (
        <div
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Semi-transparent background
          className="fixed inset-0 flex items-center justify-center z-100"
        >
          <div className="relative bg-white rounded-2xl shadow-xl p-8 w-11/12 max-w-md text-center space-y-4">
            <button
              onClick={() => setShowModal(false)} // Close the modal when clicked
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold shadow-xl"
            >
              &times;
            </button>
            <h2 className="font-semibold text-gray-700 mt-4 text-lg">Connect Supplier Using Token</h2>
            <input
              type="text"
              placeholder="Enter Token For Verification"
              className="w-full px-4 py-2 text-gray-600 border-2 border-gray-200 rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-gray-400"
            />
            <button
              onClick={() => setShowModal(false)}  // This will close the modal
              className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-2xl shadow-orange-700"
            >
              Verify Token
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SuppliersHomeModal;
