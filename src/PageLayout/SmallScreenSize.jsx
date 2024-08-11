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
        className={`fixed top-cusTop bg-white left-cusLeft min-w-1/2 h-screen text-black z-zCus pt-cusPt flex flex-col items-start pl-cuspl text-cusFontSize  gap-cusgap transition-custom duration-cusDuration cusLg:hidden ${
          isOpen ? "active" : "left-cusLeft"
        }`}
      >
        <div className='w-full'>
          <Link
            to='/'
            className='btn cussm:text-cusFontSize4'
            onClick={toggleMenu}
          >
            Home
          </Link>
        </div>

        <div className='flex gap-x-28 items-center  w-full success'>
          <h2 className='w-full cussm:text-cusFontSize4'>Who We Are</h2>

          <div className='pr-6'>
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
          <div className='pl-4 h-fit success transition-all duration-cusDuration ease-in'>
            <Link
              to='/about'
              className='btn block cussm:text-cusFontSize4'
              onClick={handleClick}
            >
              About
            </Link>
            <Link
              to='/PricingComponent'
              className='btn block pt-3 cussm:text-cusFontSize4'
              onClick={handleClick}
            >
              Pricing
            </Link>
            <Link
              to='/OurTeamComponents'
              className='btn block pt-3 cussm:text-cusFontSize4'
              onClick={handleClick}
            >
              Our Team
            </Link>
            <Link
              to='FaqComponent'
              className='btn block pt-3 cussm:text-cusFontSize4'
              onClick={handleClick}
            >
              Faq
            </Link>
            <Link
              to='TestimonialsComponents'
              className='btn block pt-3 cussm:text-cusFontSize4'
              onClick={handleClick}
            >
              Testimonianls
            </Link>
          </div>
        )}

        <div className='w-full'>
          <Link
            to='/services'
            className='btn cussm:text-cusFontSize4'
            onClick={toggleMenu}
          >
            Services
          </Link>
        </div>

        <div className='w-full'>
          <Link
            to='/projects'
            className='btn cussm:text-cusFontSize4'
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </div>

        <div className='w-full'>
          <Link
            to='/shop'
            className='btn cussm:text-cusFontSize4'
            onClick={toggleMenu}
          >
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
