import React, { useState } from "react";
import HeaderComponent from "../PageLayout/HeaderComponent";
import { FaLocationDot, FaPhone, FaMessage } from "react-icons/fa6";
import { services } from "../elecItems";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import {
  leftVariants,
  topVariants,
  bottomVariants,
  rightVariants,
} from "../PageLayout/motion";

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
      <header className="bg-[url('./src/images/aboutbanner.jpg')]">
        <HeaderComponent>
          <div>
            <Reveal variants={bottomVariants} custom={0.4}>
              <h5 className='cussm:text-cusFontSize3 font-bold mb-10 cusLg:text-xl'>
                Contact us
              </h5>
            </Reveal>
            <Reveal variants={bottomVariants} custom={0.6}>
              <p className='heading cussm:leading-cuslineheight  text-4xl'>
                Get in Touch: Contact Our Security Experts Today
              </p>
            </Reveal>
            <Reveal variants={bottomVariants} custom={0.8}>
              <p className='header-text mt-8 cussm:mt-5 lg:mt-8 cussm:text-cusFontSize4 md:text-xl font-medium w-inherit md:w-cusWidth6'>
                Trust our experts to install security cameras in your home,
                ensuring maximum coverage and protection.
              </p>
            </Reveal>
          </div>
        </HeaderComponent>
      </header>

      <section className='p-10 cussm:px-4 sm:px-5 md:px-10 bg-white'>
        <div className='flex flex-col justify-between items-center md:flex-row'>
          <div className='w-full md:basis-cusBasis'>
            <Reveal custom={0.5} variants={rightVariants}>
              <div className='w-full'>
                <h2 className='text-cusFontSize10 text-cusBgCol6 mb-cuspd6'>
                  Contact our support team to take care of your homes
                </h2>
                <p className='text-cusFontSize8 text-cuscolor my-[10px]'>
                  At Security, we prioritize the success and satisfaction of our
                  clients. Our dedicated support team is here to provide
                  exceptional care for your business needs.
                </p>
              </div>
            </Reveal>

            <hr className='border-none outline-none h-[1px] bg-cusBgCol6 w-full mt-[30px] mb-[20px] ' />
            <Reveal variants={rightVariants} custom={0.6}>
              <div>
                <h2 className='text-cusBgCol6 my-[10px]'>London</h2>
                <div className='flex flex-col justify-between gap-y-6 ml-3 mt-8'>
                  <div className='flex flex-row items-center gap-x-4'>
                    <FaLocationDot />
                    <p>14 Tottenham Road, London, England</p>
                  </div>
                  <div className='flex flex-row items-center gap-x-4'>
                    <FaPhone />
                    <p className='text-cusCol2 hover:text-cusBgCol6 transition-all duration-700 ease-in cursor-pointer'>
                      +1 212 425 8617
                    </p>
                  </div>
                  <div className='flex flex-row  items-center gap-x-4'>
                    <FaMessage />
                    <p className='text-cusCol2 hover:text-cusBgCol6 transition-all duration-700 ease-in cursor-pointer'>
                      information@office.com
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className='md:basis-cusBasis border-[2px] border-solid border-cusBcolor cussm:w-full cussm:mt-9 rounded-[8px]'>
            <Reveal variants={leftVariants} custom={0.8}>
              <h2 className='text-center mb-[40px] min-w-full cussm:text-[27px] lg:text-cusFontSize10 mt-[10px] text-cuscolor cussm:px-4'>
                Send us a message
              </h2>
              <div className='max-w-full rounded-cusBradius2 p-6 '>
                <form action='#' method='post'>
                  <input
                    type='text'
                    name='name'
                    id='1'
                    value={name}
                    placeholder='name'
                    className='block w-full mb-5 h-auto rounded-cusBradius4  py-[16px] pl-[28px] text-cusFontSize8 border-[1px] border-solid border-cusBcolor4 outline-none text-cuscolor focus:border-cusCol2 transition-all duration-1000 ease-in '
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type='email'
                    id='2'
                    value={email}
                    className='block w-full mb-5 h-auto rounded-cusBradius4  py-[16px] pl-[28px] text-cusFontSize8 border-[1px] border-solid border-cusBcolor4 outline-none active:border-cusCol2 text-cuscolor focus:border-cusCol2 transition-all duration-1000 ease-in '
                    s
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <textarea
                    name='desc'
                    id='3'
                    value={desc}
                    className='block w-full min-w-full max-w-full min-h-[200px] h-auto  mb-5 rounded-cusBradius4 bg-[rgba(0, 0, 0, 0)] py-[16px] pl-[28px] p-[8px 12px] resize-none border-[1px] border-solid outline-none border-cusBcolor4 transition-all duration-1000 ease-in focus:border-cusCol2'
                    placeholder='text'
                    onChange={(e) => setDesc(e.target.value)}
                    rows={7}
                  ></textarea>
                  <input
                    type='submit'
                    value='Submit'
                    className='block w-full text-center h-auto border-cusBtnColor border-[1px]  border-solid bg-cusBgCol py-[16px] px-[28px] text-cuscolor cursor-pointer hover:bg-transparent font-semibold transition-all duration-500 ease-in text-cusFontSize8 rounded-[8px]'
                  />
                </form>
              </div>
            </Reveal>
          </div>
        </div>
        <div>
          <Reveal custom={0.5} variants={bottomVariants}>
            <div className='w-1/2 m-auto pt-24 pb-24 cussm:w-full cusLg:w-1/2 cussm:pt-12 cusLg:pt-24 cussm:pb-12 cuslg2:pb-24'>
              <p className='w-full text-center text-cusFontSize10 text-cusBgCol7'>
                Our Services
              </p>
              <div className='text-center mt-3'>
                Trust our experts to install security cameras in your home,
                ensuring maximum coverage and protection.
              </div>
            </div>
          </Reveal>

          <Reveal custom={0.7} variants={bottomVariants}>
            <div className='parent cussm:grid-cols-[100%] grid cusLg:grid-cols-3 p-6 gap-6 justify-center items-center'>
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
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
