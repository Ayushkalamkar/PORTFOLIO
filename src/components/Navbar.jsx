// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className='bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 w-full z-50'>
//         <div className='container py-2 flex justify-center md:justify-between items-center'>
//             <div className='text-2xl font-bold hidden md:inline'>Ayush kalamkar</div>
//             <div className='space-x-6'>
//                 <a href="#home" className='hover:text-gray-400'>Home</a>
//                 <a href="#about" className='hover:text-gray-400'>About Me</a>
//                 <a href="#service" className='hover:text-gray-400'>Services</a>
//                 <a href="#project" className='hover:text-gray-400'>Projects</a>
//                 <a href="#contact" className='hover:text-gray-400'>Contact</a>
//             </div>
//             <a href='https://www.linkedin.com/in/ayush-kalamkar-9a0a67317/' >
//             <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect</button>
//             </a>
//         </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can use any icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 w-full z-50">
      <div className="container py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Ayush Kalamkar</div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <a href="#home" className="block hover:text-gray-400" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block hover:text-gray-400" onClick={toggleMenu}>About Me</a>
          <a href="#service" className="block hover:text-gray-400" onClick={toggleMenu}>Services</a>
          <a href="#project" className="block hover:text-gray-400" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="block hover:text-gray-400" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
