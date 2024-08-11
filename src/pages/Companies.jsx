import React from "react";
import { FaArrowRight, FaLightbulb, FaStarHalf, FaStar } from "react-icons/fa";
import {
  rightVariants,
  leftVariants,
  bottomVariants,
  topVariants,
} from "../PageLayout/motion";
import Reveal from "../Reveal";

const Companies = () => {
  return (
    <>
      <Reveal variants={bottomVariants}>
        <h2 className='text-cusFontSiz7 cussm:text-3xl text-center text-white font-bold my-4 mt-[4rem]'>
          Our Electrical System Is Trusted By Some Of The Largest Companies
        </h2>
      </Reveal>

      <Reveal variants={bottomVariants}>
        {" "}
        <div className='grid justify-items-center items-center grid-cols-3 gap-3 lg:pt-11 cussm:grid-cols-2 sm:grid-cols-3 my-[5rem]'>
          <div className='bg-white py-3 w-32 text-center rounded-cusBradius2 shadow-customShadow flex font-bold text-slate-700 justify-center items-center gap-2'>
            <FaLightbulb></FaLightbulb>
            <h2 className='textname text-center text-xl'>Brail</h2>
          </div>

          <div className='bg-white py-3 text-center rounded-cusBradius2 shadow-customShadow flex font-bold text-slate-700 justify-center w-32 items-center gap-2'>
            <FaLightbulb></FaLightbulb>
            <h2 className='textname text-center text-2xl'>Brail</h2>
          </div>

          <div className='bg-white py-3 w-32 text-center rounded-cusBradius2 shadow-customShadow flex font-bold text-slate-700 justify-center items-center gap-2'>
            <FaLightbulb></FaLightbulb>
            <h2 className='textname text-center text-2xl'>Brail</h2>
          </div>

          <div className='bg-white py-3 w-32 text-center rounded-cusBradius2 shadow-customShadow flex font-bold text-slate-700 justify-center items-center gap-2'>
            <FaLightbulb></FaLightbulb>
            <h2 className='textname text-center text-2xl'>Brail</h2>
          </div>

          <div className='bg-white py-3 w-32 text-center rounded-cusBradius2 shadow-customShadow flex font-bold text-slate-700 justify-center items-center gap-2'>
            <FaLightbulb></FaLightbulb>
            <h2 className='textname text-center text-2xl'>Brail</h2>
          </div>

          <div className='bg-white py-3 w-32 text-center rounded-cusBradius2 shadow-customShadow flex font-bold text-slate-700 justify-center items-center gap-2 col-span-1'>
            <FaLightbulb></FaLightbulb>
            <h2 className='textname text-center text-2xl'>Brail</h2>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Companies;
