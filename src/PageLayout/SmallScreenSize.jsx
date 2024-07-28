import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

export const SmallScreenSize = ({
  isOpen,
  toggleMenu,
  toggleSideBar,
  setIsOpen,
}) => {
  const [isDisplay, setIsDisplay] = useState(false);

  const handleClick = () => {
    setIsDisplay(false);
    setIsOpen(false);
  };
  return (
    <div className='relative'>
      <div
        className={`fixed top-cusTop bg-white left-cusLeft w-cusWidth h-screen text-black z-zCus pt-cusPt flex flex-col items-start pl-cuspl text-cusFontSize gap-cusgap transition-custom duration-cusDuration cusLg:hidden ${
          isOpen ? "active" : "left-cusLeft"
        }`}
      >
        <div className='w-full'>
          <Link to='/' className='btn' onClick={toggleMenu}>
            Home
          </Link>
        </div>

        <div className='flex gap-x-28 items-center  w-full success'>
          <Link to='/about' className='btn' onClick={toggleMenu}>
            About
          </Link>
          <div className='pl-7'>
            <button
              type='button'
              className='text-cusFontSize3'
              onClick={() => setIsDisplay(!isDisplay)}
            >
              {isDisplay === true ? (
                <FaChevronUp></FaChevronUp>
              ) : (
                <FaChevronDown></FaChevronDown>
              )}
            </button>
          </div>
        </div>

        {isDisplay && (
          <div className='pl-4 h-fit success'>
            <Link
              to='/PricingComponent'
              className='btn block pt-3'
              onClick={handleClick}
            >
              <li>Pricing</li>
            </Link>
            <Link
              to='/OurTeamComponents'
              className='btn block pt-3'
              onClick={handleClick}
            >
              <li>Our Team</li>
            </Link>
            <Link
              to='FaqComponent'
              className='btn block pt-3'
              onClick={handleClick}
            >
              <li>Faq</li>
            </Link>
            <Link
              to='TestimonialsComponents'
              className='btn block pt-3'
              onClick={handleClick}
            >
              <li>Testimonianls</li>
            </Link>
          </div>
        )}

        <div className='w-full'>
          <Link to='/services' className='btn' onClick={toggleMenu}>
            Services
          </Link>
        </div>

        <div className='w-full'>
          <Link to='/projects' className='btn' onClick={toggleMenu}>
            Projects
          </Link>
        </div>

        <div className='w-full'>
          <Link to='/shop' className='btn' onClick={toggleMenu}>
            Shop
          </Link>
        </div>

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
