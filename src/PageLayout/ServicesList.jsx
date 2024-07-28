import React from "react";
import { moreServices } from "../elecItems";
import { Link } from "react-router-dom";

const ServicesList = () => {
  return (
    <div className='parent cussm:grid-cols-[100%] grid sm:grid-cols-2 lg:grid-cols-3 p-6 gap-6 justify-center items-center'>
      {moreServices.map((service) => {
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
    </div>
  );
};

export default ServicesList;
