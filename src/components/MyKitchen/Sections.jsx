import React from 'react'
import { Nav } from '../common/Nav'
import { Footer } from '../common/Footer'
import { BiTransfer } from 'react-icons/bi'
import { FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router'
import NavButton from './NavButton'
import ActiveTab from './ActiveTab'
import SectionEditModal from '../common/modal/SectionEditModal'
import SectionAddModal from '../common/modal/SectionAddModal'

export const Sections = () => {
  return (

<div>
    <Nav /> 
     <div className="pb-24 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">


            <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
              <button className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm">Action</button>
              <p className="font-bold text-sm sm:text-base">My Kitchen</p>
      
              <button className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm" onClick={() => document.getElementById('add_modal').showModal()} 
              >
              Add Section
              </button>
            </div>



        {/* Section Overview */}
      <div className="p-4 sm:p-6 rounded-md space-y-4 mt-4 overflow-x-auto ">

      <NavButton />
       

        <div className="overflow-x-auto w-full mt-2">
          <div className="flex space-x-4 p-4 min-w-[1000px]">
            {["Pan", "Lader", "Prep-list", "Bar", "Pan", "Prep-list", "Prep-list", "Prep-list", "Prep-list", "Prep-list"].map((item, idx) => (
              <div key={idx} className="w-20 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white">
                {item}
              </div>
            ))}
          </div>
        </div>


        {/* Ladder Info + Edit Modal */}
        <div className="flex flex-wrap justify-between items-center mt-2 mb-6 gap-2">
          <h2 className="text-sm font-semibold text-gray-700">Ladder Detail Info :</h2>
          <button className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm" onClick={() => document.getElementById('edit_modal').showModal()}>
            Edit Section
          </button>
        </div>


        <SectionEditModal />
        <SectionAddModal />

        <ActiveTab />

 
      </div>
    </div>
    <Footer />
</div>

  
  )
}
