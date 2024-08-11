import React from "react";
import "./progressbar.css";

const Progressbar = () => {
  return (
    <>
      <div className='cussm:my-[3rem] cusLg:mt-0 cuslg5:my-2 experience-item max-w-cusmaxwidth2 mb-cusmb2 cussm:max-w-full cusLg:max-w-cusmaxwidth2'>
        <div className='experience-info flex items-center justify-between'>
          <p>incident resolution rate</p>
          <p className='progresstext text-cusFontSize4 font-semibold leading-cuslineheight2'>
            91%
          </p>
        </div>
        <div className='progress-line w-full mt-2 h-cusHeight3 bg-gray-100 border-cusBwidth border-gray-950 border-solid rounded-cusBradius3 relative'>
          <span
            style={{ width: "91%" }}
            className='origin-left h-full rounded-cusBradius3 bg-cusBtnColor transition-all duration-1000 ease-linear absolute'
          ></span>
        </div>
      </div>

      <div className='experience-item max-w-cusmaxwidth2 my-[3rem] cuslg5:my-2 mb-cusmb2 cussm:max-w-full cusLg:max-w-cusmaxwidth2'>
        <div className='experience-info flex items-center justify-between'>
          <p>Response Time</p>
          <p className='progresstext text-cusFontSize4 font-semibold leading-cuslineheight2'>
            85%
          </p>
        </div>
        <div className='progress-line w-full mt-2 h-cusHeight3 bg-gray-100 border-cusBwidth border-gray-950 border-solid rounded-cusBradius3 relative'>
          <span
            style={{ width: "85%" }}
            className='origin-left h-full rounded-cusBradius3 bg-cusBtnColor transition-all duration-1000 ease-linear absolute'
          ></span>
        </div>
      </div>

      <div className='experience-item max-w-cusmaxwidth2 my-[3rem] cuslg5:my-4 mb-cusmb2 cussm:max-w-full cusLg:max-w-cusmaxwidth2'>
        <div className='experience-info flex items-center justify-between '>
          <p>System Reliability</p>
          <p className='progresstext text-cusFontSize4 font-semibold leading-cuslineheight2'>
            90%
          </p>
        </div>
        <div className='progress-line w-full mt-2 h-cusHeight3 bg-gray-100 border-cusBwidth border-gray-950 border-solid rounded-cusBradius3 relative'>
          <span
            style={{ width: "90%" }}
            className='origin-left h-full rounded-cusBradius3 bg-cusBtnColor transition-all duration-1000 ease-linear absolute'
          ></span>
        </div>
      </div>
    </>
  );
};

export default Progressbar;
