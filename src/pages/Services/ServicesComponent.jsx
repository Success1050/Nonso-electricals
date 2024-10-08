import React from "react";
import ServicesList from "./ServicesList";
import { FaRegEdit } from "react-icons/fa";
import { FaMessage, FaRegPaste } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { elect, engineer, electman, smallelect } from "../../images/imports";
import Reveal from "../../Reveal";
import {
  leftVariants,
  topVariants,
  bottomVariants,
  rightVariants,
} from "../../PageLayout/motion";

const ServicesComponent = () => {
  return (
    <>
      <section className='p-8 gradient'>
        <div className='w-1/2 m-auto pt-24 pb-24 cussm:w-full cusLg:w-1/2 cussm:pt-12 cusLg:pt-24 cussm:pb-12 cuslg2:pb-24'>
          <Reveal custom={0.4} variants={bottomVariants}>
            <p className='w-full text-center text-cusFontSize10 text-cusBgCol7'>
              Our Services
            </p>
          </Reveal>
          <Reveal custom={0.6} variants={bottomVariants}>
            <div className='text-center mt-3'>
              Trust our experts to install security cameras in your home,
              ensuring maximum coverage and protection.
            </div>
          </Reveal>
        </div>
        <Reveal variants={bottomVariants} custom={0.5}>
          <ServicesList />
        </Reveal>
      </section>

      <section className='p-8 bg-gray-100'>
        <div className='w-1/2 m-auto pt-24 pb-24 cussm:w-full cusLg:w-1/2 cussm:pt-12 cusLg:pt-24 cussm:pb-12 cuslg2:pb-24'>
          <Reveal variants={bottomVariants} custom={0.5}>
            <p className='w-full text-center text-cusFontSize10 text-cusBgCol7'>
              The Best Process
            </p>
          </Reveal>
          <Reveal variants={bottomVariants} custom={0.7}>
            <div className='text-center mt-3'>
              We will take care of the setup and configuration of your security
              cameras, ensuring they are properly connected and synchronized for
              reliable performance.
            </div>
          </Reveal>
        </div>

        <div className='grid grid-cols-3 justify-center items-center cussm:grid-cols-1 sm:grid-cols-2 cusLg:grid-cols-3 gap-3 '>
          <Reveal variants={rightVariants} custom={0.4}>
            <div className=' h-50 p-6 z-10 flex flex-col items-center'>
              <div className='w-24 h-24 flex justify-center items-center rounded-cusBradius text-cusFontSize12 mb-cusp1 shadow-cusshadow2 bg-white text-cusCol2 border-cusBwidth border-solid'>
                <FaMessage className='text-cusFontSize12' />
              </div>

              <h3 className='cussm:text-center text-cusFontSize8 text-cusBgCol6 my-cuspd6 font-semibold'>
                01. Consultation and Assessment
              </h3>
              <p className='italic mt-2 text-cusFontSize8 text-center '>
                We start by understanding your specific security requirements
                through a detailed consultation.
              </p>
            </div>
          </Reveal>

          <Reveal variants={topVariants} custom={0.6}>
            <div className=' h-50 p-6 z-10 flex flex-col items-center '>
              <div className='w-24 h-24 flex justify-center items-center rounded-cusBradius text-cusFontSize12 mb-cusp1 shadow-cusshadow2 bg-white text-cusCol2 border-cusBwidth border-solid'>
                <FaRegEdit className='text-cusFontSize12' />
              </div>

              <h3 className='cussm:text-center text-cusFontSize8 text-cusBgCol6 my-cuspd6 font-semibold'>
                02. Customized Solution Design
              </h3>
              <p className='italic mt-2 text-cusFontSize8 text-center '>
                Based on the assessment, we develop a customized security
                solution tailored to your needs.
              </p>
            </div>
          </Reveal>

          <Reveal variants={leftVariants} custom={0.8}>
            <div className='sm:-translate-x-custranslateY lg:translate-x-0 h-50 p-6 z-10 flex flex-col items-center '>
              <div className='w-24 h-24 flex justify-center items-center rounded-cusBradius text-cusFontSize12 mb-cusp1 shadow-cusshadow2 bg-white text-cusCol2 border-cusBwidth border-solid'>
                <FaRegPaste className='text-cusFontSize12' />
              </div>

              <h3 className='cussm:text-center text-cusFontSize8 text-cusBgCol6 my-cuspd6 font-semibold'>
                03.Professional Installation and Setup
              </h3>
              <p className='italic mt-2 text-cusFontSize8 text-center '>
                We assist in connecting the cameras to your existing network or
                setting up a dedicated monitoring system.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className='py-5 bg-gray-200'>
        <div className='item1 cussm:flex-col cusLg:flex-row flex justify-around items-start cussm:gap-cusgap2 cusLg:gap-0 my-14'>
          <div className='item1-child cussm:ml-9 cusLg:ml-0 '>
            <Reveal custom={0.5} variants={rightVariants}>
              <h2 className=' cussm:text-cusfontsize5 cussmall:text-3xl font-bold mb-5 sm:pr-5 md:pr-0 w-full'>
                We provide high quality & cost effective services
              </h2>

              <ul className='grid gap-y-4 mb-cuspd6'>
                <li className='list-disc'>
                  Present your services with flexible, convenient
                </li>
                <li className='list-disc'>
                  Find more creative ideas for your projects
                </li>
                <li className='list-disc'>
                  Unlimited power and customization possibilities
                </li>
              </ul>
              <button className='border-2 block rounded-lg text-center bg-orange-600 cursor-pointer btn2 my-10 w-36 h-16 cussm:self-start z-20'>
                <Link to='/about' className='banner-text-link1'>
                  View Our Project
                </Link>
              </button>
            </Reveal>
          </div>

          <div className='item1-child cussm:mx-5 sm:mx-0'>
            <Reveal custom={0.6} variants={leftVariants}>
              <img src={elect} alt='image 1' className='w-full' />
            </Reveal>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div>
          <img src={smallelect} alt='electrician' className='h-full' />
        </div>
      </section>
    </>
  );
};

export default ServicesComponent;
