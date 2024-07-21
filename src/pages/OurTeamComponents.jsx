import React from "react";
import { man1, man5 } from "../images/imports";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import FullFaqSection from "../PageLayout/FullFaqSection";

const OurTeamComponents = () => {
  return (
    <>
      <section className='p-8 gradient '>
        <div className='w-1/2 m-auto pt-24 pb-24 cussm:w-full cusLg:w-1/2 cussm:pt-12 cusLg:pt-24 cussm:pb-12 cuslg2:pb-24'>
          <h2 className='text-cusFontSize10 font-semibold text-center'>
            Our Team
          </h2>
          <p className='w-full text-center'>
            Trust our experts to install security cameras in your home, ensuring
            maximum coverage and protection.
          </p>
        </div>

        <div className='text-center'>
          <h2 className='text-cusBgCol4 text-cusFontSize10 capitalize mb-3 font-semibold'>
            Management And Head Office Team
          </h2>
        </div>

        <div className='grid grid-cols-3 justify-center items-center cussm:grid-cols-1 sm:grid-cols-2 cusLg:grid-cols-3 gap-3 element'>
          <div className='rounded-cusBradius2 shadow-xl bg-slate-100 relative h-50 p-6 parent z-10'>
            <div className='flex flex-col  mt-6 cussm:gap-4 '>
              <div className='basis-full'>
                <img
                  src={man5}
                  alt='a man'
                  className='w-full h-cusWidth14 rounded-s-cusBradius2'
                />
              </div>
              <div className='basis-cusBasis'>
                <p className='text-center'>success</p>
                <p className=' mt-2 font-xs text-center'>web developer</p>
                <div className='flex justify-center items-center gap-3 mt-3 text-cusCol2 text-cusFontSize4 transition-all duration-75 ease'>
                  <FaInstagram className=' hover:text-pink-600 ' />
                  <FaFacebook className=' hover:text-blue-700 ' />
                  <FaTwitter className=' hover:text-blue-700 ' />
                </div>
              </div>
            </div>
          </div>

          {/* second person */}
          <div className='rounded-cusBradius2 shadow-xl bg-slate-100 relative h-50 p-6 parent z-10'>
            <div className='flex flex-col  mt-6 cussm:gap-4 '>
              <div className='basis-full'>
                <img
                  src={man5}
                  alt='a man'
                  className='w-full h-cusWidth14 rounded-s-cusBradius2'
                />
              </div>
              <div className='basis-cusBasis'>
                <p className='text-center'>success</p>
                <p className=' mt-2 font-xs text-center'>web developer</p>
                <div className='flex justify-center items-center gap-3 mt-3 text-cusCol2 text-cusFontSize4 transition-all duration-75 ease'>
                  <FaInstagram className=' hover:text-pink-600 ' />
                  <FaFacebook className=' hover:text-blue-700 ' />
                  <FaTwitter className=' hover:text-blue-700 ' />
                </div>
              </div>
            </div>
          </div>
          {/* third item */}
          <div className='rounded-cusBradius2 shadow-xl bg-slate-100 relative h-50 p-6 parent z-10'>
            <div className='flex flex-col  mt-6 cussm:gap-4 '>
              <div className='basis-full'>
                <img
                  src={man5}
                  alt='a man'
                  className='w-full h-cusWidth14 rounded-s-cusBradius2'
                />
              </div>
              <div className='basis-cusBasis'>
                <p className='text-center'>success</p>
                <p className=' mt-2 font-xs text-center'>web developer</p>
                <div className='flex justify-center items-center gap-3 mt-3 text-cusCol2 text-cusFontSize4 transition-all duration-75 ease'>
                  <FaInstagram className=' hover:text-pink-600 ' />
                  <FaFacebook className=' hover:text-blue-700 ' />
                  <FaTwitter className=' hover:text-blue-700 ' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gray-200 p-8'>
        <div className=' cussm:flex-col md:flex-row flex justify-around items-center cussm:gap-cusgap2 cusLg:gap-0'>
          <div className='basis-cusBasis'>
            <iframe
              width='516px'
              height='315px'
              className='cussm:w-full cusLg:w-cusWidth14'
              src='https://www.youtube.com/embed/DIkCQ1NU1E0?si=dsbvRhNWCR63rzu8'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
          </div>

          <div className='basis-cusBasis item2-text'>
            <h2 className='item1-child-header text-3xl font-bold mb-5 cussm:text-center md:text-left'>
              Elevate your business with the ideal solutions
            </h2>

            <p className='cussm:text-center md:text-left text-cusBgCol7'>
              "That's why we offer a comprehensive range of services designed to
              improve your operations, enhance efficiency, and drive success.
              Whether you're a small startup or an established enterprise, we
              have the expertise and resources to help you achieve your business
              goals."
            </p>
            <div className='flex items-center gap-5 cussm:justify-center md:justify-start mt-3'>
              <img
                src={man1}
                alt='a man'
                className='w-20 h-20 rounded-cusBradius'
              />
              <div>
                <h4>John</h4>
                <p>CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='p-8 bg-slate-100'>
        <h2 className='text-cusBgCol4 text-cusFontSize10 capitalize mb-3 font-semibold text-center'>
          Customers Frequently Asked Questions
        </h2>
        <FullFaqSection />
      </section>
    </>
  );
};

export default OurTeamComponents;
