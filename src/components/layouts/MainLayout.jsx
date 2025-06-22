import React from 'react'
import { Nav } from '../common/Nav'
import { Footer } from '../common/Footer'
import { Dashboard } from '../pages/Dashboard'
import ClockIn from '../pages/ClockIn'

export const MainLayout = () => {
  return (
    <div>
        <Nav />
          <ClockIn />
          <Dashboard />
         <Footer />  
    </div>
  )
}
