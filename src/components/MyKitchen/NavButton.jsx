import React from 'react'
import { Link } from 'react-router'

const NavButton = () => {
  return (
    <div>
        <div className="flex bg-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
        <Link to={'/section'} className="flex-1 py-3 text-center bg-orange-500 font-semibol text-white  border-b-2 border-orange-500 rounded-lg text-sm">Section</Link>
        <Link to={'/pantry-list'} className="flex-1 py-3 text-center  text-sm">Pantry-list</Link>
        <Link to={'/prep-list'} className="flex-1 py-3 text-center   text-sm">Prep-list</Link>
      </div>
    </div>
  )
}

export default NavButton
