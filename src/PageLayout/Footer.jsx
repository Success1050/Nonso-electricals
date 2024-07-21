import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className='flex justify-center items-start gap-x-5 cussm: flex-col cusLg:flex-row cussm:items-center cusLg:items-start'>
        <div className='basis-cusBasis'>
          <h2 className='text-cusFontSize10 text-cuscolor font-bold mb-3 cussm:text-cusFontSize12 cussmall:text-cusFontSize10 cussm:text-center text-center sm:text-left'>
            Sign Up To Newsletter
          </h2>
          <form
            action='#'
            className='grid grid-cols-cusgridcul gap-x-7 cussm:gap-y-3 mt-7 mb-10 cussm:grid-cols-1 cusLg:grid-cols-cusgridcul'
          >
            <input
              className='border-solid border-cusBwidth rounded-[8px] max-w-[500px] h-auto mb-0 py-4 pl-7 border-black text-cusFontSize8 w-full focus:outline-none focus:border-cusBtnColor cussm:text-cusFontSize4 cusLg:text-cusFontSize8'
              type='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type='submit'
              value='subscribe'
              className='border-solid border-cusBwidth border-cusBtnColor bg-cusBgCol text-cusBgCol6 text-center capitalize h-auto rounded-[8px] py-4 px-7 text-cusFontSize8 inline-block w-full cussm:w-1/2 cusLg:w-full cussm:mx-auto cusLg:mx-0 cursor-pointer transition duration-500 hover:bg-white'
            />
          </form>
        </div>
        <div className='basis-cusBasis2 grid grid-cols-3 gap-y-6 cussm:gap-x-4'>
          <h4 className='transition-all duration-500 hover:text-cusBtnColor cursor-pointer text-center'>
            <Link to='/'>Home</Link>
          </h4>
          <h4 className='transition-all duration-500 hover:text-cusBtnColor cursor-pointer cussm:flex-wrap text-center'>
            <Link to='/OurTeamComponents'>Our Team</Link>
          </h4>
          <h4 className='transition-all duration-500 hover:text-cusBtnColor cursor-pointer text-center'>
            Project
          </h4>
          <h4 className='transition-all duration-500 hover:text-cusBtnColor cursor-pointer text-center'>
            Services
          </h4>
          <h4 className='transition-all duration-500 hover:text-cusBtnColor cursor-pointer text-center'>
            Blog
          </h4>
          <h4 className='transition-all duration-500 hover:text-cusBtnColor cursor-pointer text-center'>
            About
          </h4>
        </div>
      </div>
      <hr className='w-full border-0 h-cusheight8 bg-gray-300 my-4 cussm:mt-8' />

      <div className='mt-7 flex justify-between items-center cussm:flex-col-reverse cusLg:flex-row'>
        <div className='cussm:mt-8'>
          <p>&copy; Security. All Rights Reserved 2024.</p>
        </div>
        <div className='grid grid-cols-3 gap-x-5'>
          <div className='w-cusWidth13 h-cusheight7 rounded-cusBradius2 bg-cusBgCol6 flex justify-center items-center text-center text-cusCol2 p-cuspd6 hover:text-white transition-all duration-500 cursor-pointer text-cusFontSize9'>
            <FaFacebook></FaFacebook>
          </div>
          <div className='w-cusWidth13 h-cusheight7 rounded-cusBradius2 bg-cusBgCol6 flex justify-center items-center text-center text-cusCol2 p-cuspd6 hover:text-white transition-all duration-500 cursor-pointer text-cusFontSize9'>
            <FaTwitter></FaTwitter>
          </div>
          <div className='w-cusWidth13 h-cusheight7 rounded-cusBradius2 bg-cusBgCol6 flex justify-center items-center text-center text-cusCol2 p-cuspd6 hover:text-white transition-all duration-500 cursor-pointer text-cusFontSize9'>
            <FaLinkedinIn></FaLinkedinIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
