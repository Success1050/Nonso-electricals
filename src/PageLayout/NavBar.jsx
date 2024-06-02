import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { SmallScreenSize } from "./SmallScreenSize.jsx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className='sticky top-0 left-0 w-full backdrop-blur-blurCustom border-b-2 border-gray-400 bg-bgColor1 p-cusPd cussm:px-5 cusLg:p-cusPd z-30'>
        <div className='flex items-center justify-between h-cusHeight relative'>
          <h2 className='font-cusFontFamily text-2xl font-extrabold text-orange-600'>
            Nonso Electrical
          </h2>

          <SmallScreenSize
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            toggleSideBar={toggleSideBar}
          />

          {/* DESKTOP SCREEN SIZE */}
          <div className='hidden text-white cusLg:flex items-center gap-7 lg:gap-10 xl:gap-20 custom:gap-10 cusLg:justify-center'>
            <Link to='/' className='btn'>
              Home
            </Link>
            <Link to='/about' className='btn'>
              About
            </Link>
            <Link to='/services' className='btn'>
              Services
            </Link>
            <Link to='/projects' className='btn'>
              Projects
            </Link>
            <Link to='/shop' className='btn'>
              Shop
            </Link>

            <div className=' border-2 p-4 w-40 rounded-lg text-center btn2 cussm:bg-cusBgCol cusLg:bg-none cussm:border-cusBwidth cussm:border-solid cussm:border-cusBtnColor cusLg:border-none cussm:transition-all duration-cusDuration'>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
          <div className='flex items-center cussm:gap-2 cusLg:gap-0 justify-center'>
            <div className='relative cart cussm:mr-cusmr2 cusLg:mr-16'>
              <Link to='/cart' className='btn text-xl'>
                <FaShoppingCart className=' text-orange-600' />
              </Link>
              <h2 className='number flex items-center justify-center absolute text-center p-cuspd2 top-cusTop2 right-cusRight w-cusWidth2 h-cusHeight2 font-bold border-cusBwidth border-cusBcolor border-solid bg-cusBgCol rounded-cusBradius'>
                15
              </h2>
            </div>
            <div className='flex cusLg:hidden'>
              <button type='button' onClick={toggleSideBar}>
                <FaBars className='text-white text-xl' />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
