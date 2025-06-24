
import { Nav } from '../common/Nav';
import { Footer } from '../common/Footer';

import MainAction from "./MainAction";
import ProductListButton from './ProductListButton';
import Pagination from './Pagination';
import ProductListMain  from './ProductListMain';
import React, { useState } from 'react';

import ProductListModal from './ProductListModal';
export const ProductList = () => {
  // State to manage modal visibility and title
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  // Function to open the modal and set the title
  const handleModalOpen = (title) => {
    setModalTitle(title); // Set the modal title (product name)
    setModalOpen(true);    // Open the modal
  };

  // Function to close the modal
  const handleModalClose = () => {
    setModalOpen(false);  // Close the modal
  };
  return (
    <div className="   m-0 p-0 pb-16">
    

      {/* Header Part */}
      <Nav />

      {/* Main Content */}
      <div className="max-w-screen-sm mx-auto p-4 bg-white rounded-lg shadow-lg">
        <div className="p-2 rounded-md bg-white shadow-md space-y-4">
          {/* Header */}
            <div className='m-4 rounded-md bg-white shadow-md space-y-4 mb-2 mt-2'>
                 <h3 className="text-center font-bold">Product List</h3>
        </div>
          

          <div className=" mt-4">
          <MainAction />
        </div>
       
<ProductListButton />
        
</div>
 {/* Paginaton */}
      
< Pagination />

        <div className="container mx-auto mt-2">
      {/* Product Table: Pass handleModalOpen to ProductTable */}
      <ProductListMain handleModalOpen={handleModalOpen} />

      {/* Product Modal: Pass modal state and handleModalClose to ProductModal */}
      <ProductListModal
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
        modalTitle={modalTitle}
      />
    </div>
        
      </div>

          <Footer />
    </div>
  );
};
