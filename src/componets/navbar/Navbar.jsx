import React from 'react'
import logo from '../../assets/logo.svg'
const Navbar = () => {
  return (
       <nav className="container px-4 flex flex-row justify-between items-center mx-auto  md:py-6 md:px-4 mt-6">
        <img src={logo} alt='Huddle_Logo' className='h-8' />
        <a href="#" className="px-6 py-2 rounded-full  bg-transparent border text-pink border-pink border-1">
            Try It Free
        </a>
       </nav>
  )
}

export default Navbar
