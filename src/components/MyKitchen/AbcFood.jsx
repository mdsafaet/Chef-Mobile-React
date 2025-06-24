import React from 'react'
import { Nav } from '../common/Nav'
import { CiSearch } from 'react-icons/ci'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { Footer } from '../common/Footer'
import { Link } from 'react-router'
import NavButton from './NavButton'
import SearchPagination from '../common/SearchPagination'
import EditPantryCartModal from '../common/modal/EditPantryCartModal'
import EditPentryDetailsModal from '../common/modal/EditPentryDetailsModal'


const AbcFood = () => {
  return (
    <div>
       
                <Nav />
         <h1 className="text-xl font-bold text-center mb-2">Add to Pantry</h1>



<div className='p-4'>
<NavButton  />
</div>
        
<div className="p-4 overflow-x-auto bg-gray-300">
  <div className="flex gap-2 min-w-max">
    {/* Active Tab */}
    <Link to={'/add-to-pantry'} className="px-4 py-2 text-sm font-semibold rounded border border-gray-300 bg-white w-48">
      ABC Meat & Poultry
    </Link>

    {/* Inactive Tab */}
    <Link to={'/abc-food'} className="px-4 py-2 text-sm font-semibold rounded border border-orange-500 bg-orange-500 text-white w-48">
      ABC Food Wholesale
    </Link>
  
  </div>
</div>


            
                <div className="overflow-x-auto w-full mt-2">
                  <div className="flex space-x-4 p-4 min-w-[1000px]">
                    {["Fish","Dry","Frozen","Pasta","Baking","Seeds"].map((item, idx) => (
                      <div key={idx} className="w-20 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
        
      

            <SearchPagination />
        
            <div className="container mx-auto mt-4">
              <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
                <table className="min-w-full table-auto text-gray-700">
                  <thead
                    className="bg-white text-sm"
                    style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466' }}
                  >
                    <tr>
                      <th className="py-2 px-4 text-left"></th>
                      <th className="py-2 px-4 text-left text-orange-500">SKU</th>
                      <th className="py-2 px-4 text-left text-orange-500">Product</th>
                      <th className="py-2 px-4 text-left text-orange-500">Description</th>
                      <th className="py-2 px-4 text-left text-orange-500">Sub Category</th>
                      <th className="py-2 px-4 text-left text-orange-500">Unit Price</th>
                      <th className="py-2 px-4 text-left text-orange-500">Detail</th>
                      <th className="py-2 px-4 text-left"></th>
                      <th className="py-2 px-4 text-left"></th>
                      
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[1, 2, 3].map((_, index) => (
                      <tr key={index} className="rounded-lg shadow-xl shadow-gray-300">
                        <td className="py-3 px-4">
                          <div
                            className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center"
                            style={{
                              boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466',
                            }}
                          >
                            <img
                              src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/xeokrxrnhartrpaeocgx"
                              alt="Beef Tenderloin"
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                          </div>
                        </td>
                        <td className="py-3 font-semibold w-40 text-black px-2">FL-0042238</td>
                        <td className="py-2 w-40 text-black px-4">
                          <div className="flex flex-col">
                            <span className="font-semibold">Smoked Salmon</span>
                            <span className="text-gray-600">1 kg</span>
                          </div>
                        </td>
                        <td className="py-3 px-4"></td>
                        <td className="py-3 font-semibold w-40 text-black px-4">Fish</td>
                        <td className="py-3 font-semibold w-40 text-black px-4">$249.00</td>
                        <td className="py-3 px-4">
                          <CiSearch className="w-6 h-6"
                          onClick={() => document.getElementById('searchModal').showModal()}/>
                        </td>
                        <td className="  py-3 px-4">
                             <MdOutlineShoppingBag  className="w-6 h-6 text-amber-500"
                             
                            />  
                        </td>
                             <td className="py-3 px-4">
                             <AiOutlineShoppingCart className="w-6 h-6 text-amber-500"
                               onClick={() => document.getElementById('productModal2').showModal()} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>


<EditPantryCartModal />
<EditPentryDetailsModal />
        

        
        
            
          <Footer />
        
         
      
    </div>
  )
}

export default AbcFood
