import React from 'react'
import { Nav } from '../common/Nav'
import { Footer } from '../common/Footer'

const AddToCart = () => {
  return (

<div >

<Nav />


<div className="flex justify-between">
    <button className="btn text-white bg-orange-500 ">Add More Order</button>
    <p className=''>1 Item Selected</p>
    <span className=''>Order Date: 19 June 2025</span>
</div>

<Footer />




</div>




  )
}

export default AddToCart
