import React from "react";
import SliderComponent from "../PageLayout/SliderComponent";

const Testimonials = () => {
  return (
    <>
      <div className='flex justify-center items-start  text-white mt-5 gap-40 cussm:gap-4 cussm:flex-col cusLg:flex-row cussm:justify-center lg:pt-11'>
        <div className='basis-cusBasis2 cussm:mx-auto'>
          <h2 className='text-cusFontSiz7 whitespace-nowrap cussm:text-center cussm:text-cusFontSize10 sm:text-cusFontSiz7 cusLg:text-left'>
            What Our Clients <br /> Say About Us
          </h2>
        </div>

        <div className='w-cusWidth11 cussm:w-full cusLg:w-cusWidth11 cussm:mt-0'>
          <SliderComponent />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
