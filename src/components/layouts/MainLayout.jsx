import React from 'react'
import { Nav } from '../common/Nav'
import { Footer } from '../common/Footer'
import { Dashboard } from '../pages/Dashboard'

export const MainLayout = () => {
  return (
    <div>
        <Nav />
          <Dashboard />
         <Footer />   

         
    </div>
  )
}
