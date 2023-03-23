import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className='text-xl'>📖</span>
          <span className="ml-3 text-xl">CloudBook</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>
          <Link to='/about' className="mr-5 hover:text-gray-900">About</Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
        </button>
      </div>
    </nav>

  )
}

export default Navbar