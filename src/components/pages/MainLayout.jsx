import React from 'react'
import { Nav } from '../common/Nav'
import { Footer } from '../common/Footer'
import { Dashboard } from './Dashboard'
import ClockIn from './ClockIn'

export const MainLayout = () => {
  return (
    <div className='p-3'>
        <Nav />
          <ClockIn />
          <Dashboard />
         <Footer />  
    </div>
  )
}
