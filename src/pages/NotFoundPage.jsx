import React from "react";
import { icon } from "../images/imports";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <section className='p-7 gradient'>
        <div className='mx-auto w-full flex justify-center py-[3rem]'>
          <img src={icon} alt='icon' />
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div>
            <h1 className='lg:text-[120px] cussm:text-[60px]'>404</h1>
          </div>
          <div className='text-center'>
            <h3 className='my-[1rem] text-[34px] text-cusBgCol6'>
              Something went wrong
            </h3>
            <p className='text-cusFontSize9 text-cuscolor my-5'>
              We can't find the page you are looking for
            </p>
            <button className='w-fit p-4 text-center bg-cusCol2 rounded-[8px]'>
              <Link to='/' className='btn '>
                Back to homepage
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
