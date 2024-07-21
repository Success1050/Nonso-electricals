import React from "react";
import HeaderComponent from "../PageLayout/HeaderComponent";
import { Link } from "react-router-dom";
import FullFaqSection from "../PageLayout/FullFaqSection";
import { FaStar } from "react-icons/fa";
import { testimonial } from "../elecItems";
import { man1, man2, man4 } from "../images/imports";
const PricingComponent = () => {
  return (
    <>
      <header className="bg-[url('./src/images/aboutbanner.jpg')]">
        <HeaderComponent>
          <div className='w-1/2 cussm:w-full cusLg:w-1/2'>
            <h5 className='cussm:text-cusFontSize3 font-bold mb-10 cusLg:text-xl'>
              PRICING PLAN
            </h5>

            <p className='heading cussm:leading-cuslineheight  text-4xl'>
              Pricing Plans For Every Business Need
            </p>

            <p className='header-text mt-8 cussm:mt-5 lg:mt-8 cussm:text-cusFontSize4 md:text-xl font-medium w-inherit'>
              Choose the perfect pricing plan that suits your needs and budget.
              Explore our flexible options and unlock a world of possibilities.
              Get started today!
            </p>
          </div>
        </HeaderComponent>
      </header>

      <section className='p-8 bg-slate-200'>
        <div className='grid justify-center max-w-full cussm:text-center cusLg:text-left mb-3'>
          <h2 className='text-cusFontSize10 text-center'>
            Pricing That Suits Your Needs
          </h2>
          <p className='text-cuscolor text-cusFontSize8 w-1/2 mx-auto text-center cussm:w-full cusLg:w-1/2'>
            Our goal is to ensure that you receive the best value for your
            investment while receiving the high-quality services and products
            you deserve
          </p>
        </div>

        <div className='grid justify-between items-start cussm:grid-cols-1 sm:grid-cols-2 cusLg:grid-cols-3 cussm:gap-y-4 cusLg:gap-cusmx cussm:items-center cusLg:items-start sm:gap-3'>
          <div className='bg-cusBgCol4 p-cuspd4 text-white rounded-cusBradius2 relative'>
            <h2>Most popular plan</h2>
            <div className='w-fit bg-slate-400 p-cuspd5 rounded-cusBradius2 absolute top-4 right-2'>
              <h4>-20% off</h4>
            </div>
            <h1 className='text-cusFontSize11 my-3'>
              $90% <sub className='text-xl'>/MTH</sub>
            </h1>
            <hr />
            <div className='my-cusmb2'>
              <ul className='flex flex-col gap-y-cusgap3 my-cusp1 list-disc pl-cuspl2'>
                <li>Security Guard Services</li>
                <li>24/7 support</li>
                <li>HD Camera monitoring</li>
                <li>Access to all features</li>
                <li>Analysis and benefits</li>
                <li>Global Overview & Statistics</li>
              </ul>
            </div>
            <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 sm:mt-4 w-32 h-16 z-20 cussm:w-full sm:w-32 text-cusFontSize1 cussm:mt-0 cussm:mb-3 sm:mb-2'>
              <Link to='/about' className='banner-text-link1'>
                View All
              </Link>
            </button>
          </div>

          <div className='p-cuspd4 text-cuscolor rounded-cusBradius2 shadow-2xl'>
            <h2>Premium Plan</h2>
            <h1 className='text-cusFontSize11 my-3 text-cusBtnColor'>
              $90% <sub className='text-xl'>/MTH</sub>
            </h1>
            <hr />
            <div className='my-cusmb2'>
              <ul className='flex flex-col gap-y-cusgap3 my-cusp1 list-disc pl-cuspl2'>
                <li>Security Guard Services</li>
                <li>24/7 support</li>
                <li>HD Camera monitoring</li>
                <li>Access to all features</li>
                <li>Analysis and benefits</li>
                <li>Global Overview & Statistics</li>
              </ul>
            </div>
            <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 sm:mt-4 w-32 h-16 z-20 cussm:w-full sm:w-32 text-cusFontSize1 cussm:mt-0 cussm:mb-3 sm:mb-2'>
              <Link to='/about' className='banner-text-link1'>
                Get Now
              </Link>
            </button>
          </div>

          <div className='bg-cusBgCol4 p-cuspd4 text-white rounded-cusBradius2 relative sm:translate-x-1/2 cusLg:translate-x-0'>
            <h2>Most popular plan</h2>
            <div className='w-fit bg-slate-400 p-cuspd5 rounded-cusBradius2 absolute top-4 right-2'>
              <h4>-20% off</h4>
            </div>
            <h1 className='text-cusFontSize11 my-3'>
              $90% <sub className='text-xl'>/MTH</sub>
            </h1>
            <hr />
            <div className='my-cusmb2'>
              <ul className='flex flex-col gap-y-cusgap3 my-cusp1 list-disc pl-cuspl2'>
                <li>Security Guard Services</li>
                <li>24/7 support</li>
                <li>HD Camera monitoring</li>
                <li>Access to all features</li>
                <li>Analysis and benefits</li>
                <li>Global Overview & Statistics</li>
              </ul>
            </div>
            <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 sm:mt-4 w-32 h-16 z-20 cussm:w-full sm:w-32 text-cusFontSize1 cussm:mt-0 cussm:mb-3 sm:mb-2'>
              <Link to='/about' className='banner-text-link1'>
                View All
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section className='p-8 bg-gray-200'>
        <FullFaqSection />
      </section>

      <section className='p-8 bg-slate-300'>
        <h2 className='text-center text-cusFontSize10 text-cusBgCol6 mb-3'>
          Happy Customers Say About Project
        </h2>

        <div className='grid grid-cols-3 justify-center items-center cussm:grid-cols-1 sm:grid-cols-2 cusLg:grid-cols-3 gap-3 element'>
          {testimonial.map((test) => {
            const { id, name, desc, position, img } = test;
            return (
              <div
                className='rounded-cusBradius2 shadow-xl bg-slate-100 relative h-50 p-6 parent z-10'
                key={id}
              >
                <div className='flex justify-start items-start gap-3 cussm:gap-1 lg:gap-3 text-cusFontSize4 text-yellow-500 '>
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar key={index}></FaStar>
                  ))}
                </div>

                <div className='child absolute'></div>
                <p className='w-cusWidth7 text-cusFontSize9 text-cusBgCol6 mt-4'>
                  {desc}
                </p>

                <div className='flex justify-center items-center mt-6 cussm:gap-4 '>
                  <div className='basis-cusBasis '>
                    <img
                      src={img}
                      alt='a man'
                      className='w-cusWidth14 h-cusWidth14 rounded-s-cusBradius2'
                    />
                  </div>
                  <div className='basis-cusBasis'>
                    <p>{name}</p>
                    <p className='italic mt-2 font-xs'>{position}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PricingComponent;
