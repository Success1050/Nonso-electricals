import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SmallScreenSize = ({ isOpen, toggleMenu, toggleSideBar }) => {
  return (
    <div className='relative'>
      <div
        className={`fixed top-cusTop bg-white left-cusLeft w-cusWidth h-screen text-black z-zCus pt-cusPt flex flex-col items-start pl-cuspl text-cusFontSize gap-cusgap transition-custom duration-cusDuration cusLg:hidden ${
          isOpen ? "active" : "left-cusLeft"
        }`}
      >
        <Link to='/' className='btn' onClick={toggleMenu}>
          Home
        </Link>
        <Link to='/about' className='btn' onClick={toggleMenu}>
          About
        </Link>
        <Link to='/services' className='btn' onClick={toggleMenu}>
          Services
        </Link>
        <Link to='/projects' className='btn' onClick={toggleMenu}>
          Projects
        </Link>
        <Link to='/shop' className='btn' onClick={toggleMenu}>
          Shop
        </Link>

        <div
          className=' border-2 p-4 w-40 rounded-lg text-center btn2'
          onClick={toggleMenu}
        >
          <Link to='/contact'>Contact</Link>
        </div>
        <div className=' text-black absolute right-0  cusLg:hidden mr-cusmr text-cusFontSize'>
          <button type='button ' onClick={toggleSideBar}>
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};
