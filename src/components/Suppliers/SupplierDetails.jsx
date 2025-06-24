
import { Nav } from '../common/Nav';
import { Footer } from '../common/Footer';
import React from 'react';
import MainAction from "./MainAction";
import SupplierDetailsBody from './SupplierDetailsBody';
export const SupplierDetails = () => {

  return (
    <>

      <div className="m-0 p-0 pb-16">
         <Nav />
        
 <div className="m-4 rounded-md  mb-2 bg-white shadow-md space-y-4">
  <div className='m-4 rounded-md bg-white shadow-md space-y-4 mb-2 mt-2'>
                 <h3 className=" font-bold text-center ">Supplier Details</h3>
        </div>
  
           <div className=" p-3 ">
        
          <MainAction />
        </div>
</div>
<SupplierDetailsBody />
        <Footer />
      </div>

  
    </>
  );
};

