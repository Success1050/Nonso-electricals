import React from "react";
import { FaStar } from "react-icons/fa";
import { fullTestimonials } from "../elecItems";
import { man1, man2, man4 } from "../images/imports";

const CustomerFeedback = () => {
  return (
    <div className='grid grid-cols-3 justify-center items-center cussm:grid-cols-1 sm:grid-cols-2 cusLg:grid-cols-3 gap-3'>
      {fullTestimonials.map((test) => {
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
  );
};

export default React.memo(CustomerFeedback);
