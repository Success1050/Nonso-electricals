import React from "react";
import ServicesList from "../PageLayout/ServicesList";
import { FaRegEdit } from "react-icons/fa";
import { FaMessage, FaRegPaste } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { elect, engineer, electman, smallelect } from "../images/imports";
import { services } from "../elecItems";

const ServicesComponent = () => {
  return (
    <>
      <section className='p-8 gradient'>
        <div className='w-1/2 m-auto pt-24 pb-24 cussm:w-full cusLg:w-1/2 cussm:pt-12 cusLg:pt-24 cussm:pb-12 cuslg2:pb-24'>
          <p className='w-full text-center text-cusFontSize10 text-cusBgCol7'>
            Our Services
          </p>
          <div className='text-center mt-3'>
            Trust our experts to install security cameras in your home, ensuring
            maximum coverage and protection.
          </div>
        </div>
        {services.map((service) => {
          const { id, title, desc } = service;
          return (
            <div
              className='overlay flex flex-col gap-8 justify-start border-orange-200 p-3 bg-slate-50 relative'
              key={id}
            >
              <div className='overflow absolute w-full h-cusHeight3 cursor-pointer top-0 left-0 bg-cusBgCol2 transition-custom duration-cusDuration'></div>
              <span className='col-1 cussm:justify-center cussm:items-center cussm:px-4 cusLg:justify-start cusLg:items-start cusLg:px-0 text-orange-600'>
                0{id}
              </span>
              <h2 className='font-bold text-xl'>{title}</h2>
              <p>{desc}</p>
              <button className='banner-text-link2 border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 mt-4 w-36 h-16 block cussm:self-start z-20'>
                <Link to='/about' className='banner-text-link1'>
                  Learn More
                </Link>
              </button>
            </div>
          );
        })}
      </section>

      <section className='p-8 bg-gray-100'>
        <div className='w-1/2 m-auto pt-24 pb-24 cussm:w-full cusLg:w-1/2 cussm:pt-12 cusLg:pt-24 cussm:pb-12 cuslg2:pb-24'>
          <p className='w-full text-center text-cusFontSize10 text-cusBgCol7'>
            The Best Process
          </p>
          <div className='text-center mt-3'>
            We will take care of the setup and configuration of your security
            cameras, ensuring they are properly connected and synchronized for
            reliable performance.
          </div>
        </div>

        <div className='grid grid-cols-3 justify-center items-center cussm:grid-cols-1 sm:grid-cols-2 cusLg:grid-cols-3 gap-3 '>
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
          <div className=' h-50 p-6 z-10 flex flex-col items-center '>
            <div className='w-24 h-24 flex justify-center items-center rounded-cusBradius text-cusFontSize12 mb-cusp1 shadow-cusshadow2 bg-white text-cusCol2 border-cusBwidth border-solid'>
              <FaRegEdit className='text-cusFontSize12' />
            </div>

            <h3 className='cussm:text-center text-cusFontSize8 text-cusBgCol6 my-cuspd6 font-semibold'>
              02. Customized Solution Design
            </h3>
            <p className='italic mt-2 text-cusFontSize8 text-center '>
              Based on the assessment, we develop a customized security solution
              tailored to your needs.
            </p>
          </div>
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
        </div>
      </section>

      <section className='py-5 bg-gray-200'>
        <div className='item1 cussm:flex-col cusLg:flex-row flex justify-around items-start cussm:gap-cusgap2 cusLg:gap-0 my-14'>
          <div className='item1-child cussm:ml-9 cusLg:ml-0 '>
            <h2 className=' cussm:text-cusfontsize5 cussmall:text-3xl font-bold mb-5 sm:pr-5 md:pr-0'>
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
          </div>

          <div className='item1-child cussm:mx-5 sm:mx-0'>
            <img src={elect} alt='image 1' className='w-full' />
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
