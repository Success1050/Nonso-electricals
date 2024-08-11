import React from "react";
import { man1, man5 } from "../images/imports";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import FullFaqSection from "./FAQ/FullFaqSection";
import Reveal from "../Reveal";
import {
  leftVariants,
  topVariants,
  bottomVariants,
  rightVariants,
} from "../PageLayout/motion";

const OurTeamComponents = () => {
  return (
    <>
      <section className='p-8 gradient '>
        <div className='w-1/2 m-auto pt-24 pb-24 cussm:w-full cusLg:w-1/2 cussm:pt-12 cusLg:pt-24 cussm:pb-12 cuslg2:pb-24'>
          <Reveal variants={bottomVariants} custom={0.5}>
            <h2 className='text-cusFontSize10 font-semibold text-center'>
              Our Team
            </h2>
          </Reveal>
          <Reveal variants={bottomVariants} custom={0.7}>
            <p className='w-full text-center'>
              Trust our experts to install security cameras in your home,
              ensuring maximum coverage and protection.
            </p>
          </Reveal>
        </div>

        <div className='text-center'>
          <Reveal variants={bottomVariants} custom={0.9}>
            <h2 className='text-cusBgCol4 text-cusFontSize10 capitalize mb-3 font-semibold'>
              Management And Head Office Team
            </h2>
          </Reveal>
        </div>

        <Reveal variants={bottomVariants} custom={1.0}>
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
        </Reveal>
      </section>

      <section className='bg-gray-200 p-8 py-20'>
        <div className=' cussm:flex-col md:flex-row flex justify-around items-center cussm:gap-cusgap2 cusLg:gap-0'>
          <Reveal
            variants={rightVariants}
            className='md:w-cusWidth6 cussm:w-full'
            custom={0.5}
          >
            <div className='basis-cusBasis'>
              <iframe
                width='516px'
                height='315px'
                className='w-full'
                src='https://www.youtube.com/embed/DIkCQ1NU1E0?si=dsbvRhNWCR63rzu8'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerpolicy='strict-origin-when-cross-origin'
                allowfullscreen
              ></iframe>
            </div>
          </Reveal>

          <Reveal
            variants={leftVariants}
            className='w-1/2 cussm:w-full md:w-1/2 ml-8'
            custom={0.65}
          >
            <div className='basis-cusBasis item2-text'>
              <h2 className='item1-child-header text-3xl font-bold mb-5 cussm:text-center md:text-left'>
                Elevate your business with the ideal solutions
              </h2>

              <p className='cussm:text-center md:text-left text-cusBgCol7'>
                "That's why we offer a comprehensive range of services designed
                to improve your operations, enhance efficiency, and drive
                success. Whether you're a small startup or an established
                enterprise, we have the expertise and resources to help you
                achieve your business goals."
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
          </Reveal>
        </div>
      </section>

      <section className='p-8 bg-slate-100'>
        <Reveal variants={bottomVariants} custom={0.5}>
          <h2 className='text-cusBgCol4 text-cusFontSize10 capitalize mb-3 font-semibold text-center'>
            Customers Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal variants={bottomVariants} custom={0.7}>
          <FullFaqSection />
        </Reveal>
      </section>
    </>
  );
};

export default OurTeamComponents;
