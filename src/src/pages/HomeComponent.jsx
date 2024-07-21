import Reveal from "../Reveal";

import HeaderComponent from "../PageLayout/HeaderComponent";

import { reviews } from "../elecItems";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLightbulb, FaStarHalf, FaStar } from "react-icons/fa";
// import { useState } from "react";
// import { questions } from "../elecItems";

import {
  icon,
  chandalier,
  chandalier2,
  engineer,
  solarpanel,
  transformers,
  electric2,
  team,
} from "../images/imports";
import Progressbar from "../PageLayout/progressbar/Progressbar";
import Footer from "../PageLayout/Footer";
import Companies from "./Companies";
import AdvertPageComponent from "./AdvertPageComponent";
import FaqSection from "../PageLayout/FaqSection";
import QuestionSection from "./QuestionSection";
import RatingSection from "../PageLayout/RatingSection";
import Testimonials from "./Testimonials";
import PricingSection from "./PricingSection";

const HomeComponent = () => {
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const topVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  // const { dropdownState, isdropdownState, questionTag } = useQuestionTag();

  return (
    <>
      <header className="bg-[url('./src/images/banner.png')]">
        <HeaderComponent>
          <Reveal variants={bottomVariants}>
            <div>
              <h5 className='cussm:text-cusFontSize3 font-bold mb-10 cusLg:text-xl cussm:mt-8 cussmall:mt-4'>
                ELECTRICAL/SOLAR INSTALLATIONS
              </h5>

              <p className='heading cussm:leading-0 cussm:text-cusFontSiz6 cusLg:cussm:leading-0   text-4xl cusLg:cussm:text-4xl'>
                Lighten Up Your Homes With Our Electrical And Solar Installation
              </p>

              <p className='header-text mt-8 cussm:mt-5 lg:mt-8 cussm:text-cusFontSize4 md:text-xl font-bold'>
                Welcome to our hub of electrical expertise. Our mission is to
                empower you with reliable
                <div>
                  and efficient electrical systems, ensuring your homes and
                  workplaces are powered safely
                  <div>and sustainably at all times</div>
                </div>
              </p>
            </div>
          </Reveal>

          <div className='banner-link cussm:mt-0 cussmall:mt-0 flex gap-3 cussm:flex-row sm:flex-row cussm:gap-2 sm:gap-3 cussm:mb-4 sm:mb-0'>
            <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 cussm:mt-0 sm:mt-4 mt-4 w-36 h-16 cussm:h-10 block cussm:self-start z-20 sm:h-16'>
              <Link to='/about' className='banner-text-link1'>
                About Us
              </Link>
            </button>
            <button className='border-2 rounded-lg text-center cursor-pointer btn2 mt-4 w-36 h-16 block cussm:h-10 cussm:self-start z-20 contact-btn cussm:mt-0 sm:mt-4 sm:h-16'>
              <Link to='/about' className='banner-text-link1'>
                Contact Us
              </Link>
            </button>
          </div>
        </HeaderComponent>
      </header>

      <section className='bg-white p-14 services'>
        <Reveal variants={bottomVariants}>
          <div className='mx-10 flex justify-between items-center pt-14 gap-3 cussm:flex-col cussmall:flex-row cussm:gap-2 sm:gap-3'>
            <h2 className='text-3xl font-bold mb-3'>Services</h2>
            <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 sm:mt-4 w-32 h-16 z-20 cussm:w-full sm:w-32 text-cusFontSize1 cussm:mt-0 cussm:mb-3 sm:mb-2'>
              <Link to='/about' className='banner-text-link1'>
                View All
              </Link>
            </button>
          </div>
          <div className='parent cussm:grid-cols-[100%] grid cusLg:grid-cols-3 p-6 gap-6 justify-center items-center'>
            <div className='overlay flex flex-col gap-8 justify-start border-orange-200 p-3 bg-slate-50 relative'>
              <div className='overflow absolute w-full h-cusHeight3 cursor-pointer top-0 left-0 bg-cusBgCol2 transition-custom duration-cusDuration'></div>
              <span className='col-1 cussm:justify-center cussm:items-center cussm:px-4 cusLg:justify-start cusLg:items-start cusLg:px-0 text-orange-600'>
                01
              </span>
              <h2 className='font-bold text-xl'>Electrical Installation</h2>
              <p>
                Client Needs: Just as consultants assess client needs in
                security planning, electrical installers evaluate the specific
                requirements for the electrical system. This includes factors
                such as load capacity, power distribution, lighting, and safety
                features.
              </p>
              <button className='banner-text-link2 border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 mt-4 w-36 h-16 block cussm:self-start z-20'>
                <Link to='/about' className='banner-text-link1'>
                  Learn More
                </Link>
              </button>
            </div>

            <div className='overlay flex flex-col gap-8 justify-start border-orange-200 p-3 bg-slate-50 relative'>
              <div className='overflow absolute w-full h-cusHeight3 cursor-pointer top-0 left-0 bg-cusBgCol2 transition-custom duration-cusDuration'></div>
              <span className='text-orange-600 col-1'>02</span>
              <h2 className='font-bold text-xl'>Electrical Installation</h2>
              <p>
                Client Needs: Just as consultants assess client needs in
                security planning, electrical installers evaluate the specific
                requirements for the electrical system. This includes factors
                such as load capacity, power distribution, lighting, and safety
                features.
              </p>
              <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 mt-4 w-36 h-16 block cussm:self-start z-20'>
                <Link to='/about' className='banner-text-link1'>
                  Learn More
                </Link>
              </button>
            </div>

            <div className='overlay flex flex-col gap-8 justify-start border-orange-200 p-3 bg-slate-50 relative'>
              <div className='overflow absolute w-full h-cusHeight3 cursor-pointer top-0 left-0 bg-cusBgCol2 transition-custom duration-cusDuration'></div>
              <span className='text-orange-600 col-1'>03</span>
              <h2 className='font-bold text-xl'>Electrical Installation</h2>
              <p>
                Client Needs: Just as consultants assess client needs in
                security planning, electrical installers evaluate the specific
                requirements for the electrical system. This includes factors
                such as load capacity, power distribution, lighting, and safety
                features.
              </p>
              <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 mt-4 w-36 h-16 cussm:self-start z-20 block'>
                <Link to='/about' className='banner-text-link1'>
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className='bg-gray-100 p-8'>
        <div className='item1 cussm:flex-col cusLg:flex-row flex justify-around items-center cussm:gap-cusgap2 cusLg:gap-0'>
          <Reveal className='cussm:w-full cusLg:w-1/2' variants={leftVariants}>
            <div className='item1-child '>
              <h2 className='item1-child-header cussm:text-cusfontsize5 cussmall:text-3xl font-bold mb-5'>
                Explore Our Various Electrical Services that Will Keep Your
                Homes and Workplaces lighted Effortlessly
              </h2>

              <p>
                With our advanced Electrical Materials, access control
                solutions, and advanced Expertise, we ensure a faultless
                electrical intallation and measures to keep you and your loved
                ones safe from electrocution
                <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 mt-4 w-36 h-16 block cussm:self-start z-20'>
                  <Link to='/about' className='banner-text-link1'>
                    More About Us
                  </Link>
                </button>
              </p>
            </div>
          </Reveal>

          <Reveal
            className='cussm:w-full cusLg:w-1/2 cussm:ml-0 cusLg:ml-7'
            variants={rightVariants}
          >
            <div className='item1-child'>
              <img src={engineer} alt='image 1' className='w-full' />
            </div>
          </Reveal>
        </div>
      </section>

      <section className='bg-white p-8'>
        <div className='item1 cussm:flex-col cusLg:flex-row flex justify-around items-center cussm:gap-cusgap2 cusLg:gap-0'>
          <Reveal className='cussm:w-full cusLg:w-1/2' variants={leftVariants}>
            <div className='item1-child item2 cussm:order-2 cusLg:order-1'>
              <img src={transformers} alt='image 2' className='w-full' />
            </div>
          </Reveal>

          <Reveal
            className='cussm:w-full cusLg:w-1/2 cussm:ml-0 cusLg:ml-7'
            variants={rightVariants}
          >
            <div className='item1-child item2-text cussm:order-1 cusLg:order-2'>
              <h2 className='item1-child-header text-3xl font-bold mb-5'>
                Explore Our Various Electrical Services that Will Keep Your
                Homes and Workplaces lighted Effortlessly
              </h2>

              <p>
                With our advanced Electrical Materials, access control
                solutions, and advanced Expertise, we ensure a faultless
                electrical intallation and measures to keep you and your loved
                ones safe from electrocution
                <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 mt-4 w-36 h-16 block cussm:self-start z-20'>
                  <Link to='/about' className='banner-text-link1'>
                    Discover Now
                  </Link>
                </button>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className='bg-gray-100 p-8'>
        <Reveal variants={topVariants}>
          <div className='flex cussm:flex-col cusLg:flex-row cussm:text-center cusLg:text-left cussm:gap-cusgap2 cusLg:gap-0 advert1 items-center justify-between basis-2/5 px-8'>
            <div className='flex flex-col'>
              <h2 className='text-3xl font-bold mb-3'>
                Lets Lighten Up Your Homes
              </h2>
              <p>
                Our team of experts is here to help you install the best
                electrical services in your homes.
              </p>
            </div>

            <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 sm:mt-4 w-32 h-16 z-20 cussm:w-full sm:w-32 text-cusFontSize1 cussm:mt-0 cussm:mb-3 sm:mb-2'>
              <Link to='/about' className='banner-text-link1'>
                View All
              </Link>
            </button>
          </div>

          <div className='advert cussm:grid-cols-1 grid sm:grid-cols-2 cusLg:grid-cols-3 justify-center cussm:text-center cusLg:text-left cusLg:gap-4 cussm:gap-12 p-8'>
            <AdvertPageComponent />
          </div>
        </Reveal>
      </section>

      <section className='bg-white p-8'>
        <Reveal variants={bottomVariants}>
          <div className='shop flex cussm:flex-col cusLg:flex-row cussm:text-center cusLg:text-left cussm:gap-cusgap2 cusLg:gap-0 advert1 items-center justify-between basis-2/5 px-8'>
            <h2 className='text-3xl font-bold mb-3 cussm:text-cusFontSize cussmall:text-3xl cussm:text-center text-center sm:text-left'>
              Discover Our Electrical Materials
            </h2>

            <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 sm:mt-4 w-32 h-16 z-20 cussm:w-full sm:w-32 text-cusFontSize1 cussm:mt-0 cussm:mb-3 sm:mb-2'>
              <Link to='/about' className='banner-text-link1'>
                View All
              </Link>
            </button>
          </div>
          <div className='overbar cussm:flex-col cusLg:flex-row  m-cusm w-cusWidth4 flex justify-between items-center gap-cusgap'>
            <div className='overturn relative basis-1/3'>
              <img
                src={solarpanel}
                alt='solarpanel'
                className='w-full  img5 cussm:w-cusWidth5 cusLg:w-auto cussm:m-auto cusLg:m-0 block'
              />
              <div className='overturn2 w-full h-cusHeight3 max-h-fit top-0 left-0 bg-cusBgCol3 transition-custom duration-cusDuration absolute '></div>
              <div className='absolute desc cussm:w-cusWidth6 left-1/2 top-1/2 opacity-0 cussm:text-cusFontSize4 cusLg:text-2xl text-white font-bold translate-y-custranslateY translate-x-custranslateX cusLg:w-full duration-cusDuration'>
                <h2 className='text-white text-center'>MLCB Circuit Breaker</h2>
                <div className=' cusLg:mx-4 flex justify-center items-center cussm:gap-10 cusLg:gap-15'>
                  <p className='flex items-center justify-center gap-2 para cursor-pointer'>
                    View Details <FaArrowRight></FaArrowRight>
                  </p>
                  <p>$75.00</p>
                </div>
              </div>
            </div>

            <div className='overturn relative basis-1/3'>
              <img
                src={chandalier2}
                alt=''
                className='w-full  img5 cussm:w-cusWidth5 cusLg:w-auto cussm:m-auto cusLg:m-0 block'
              />
              <div className='overturn2 w-full h-cusHeight3 max-h-fit top-0 left-0 bg-cusBgCol3 transition-custom duration-cusDuration absolute'></div>
              <div className='absolute desc cussm:w-cusWidth6 left-1/2 top-1/2 opacity-0 cussm:text-cusFontSize4 cusLg:text-2xl text-white font-bold translate-y-custranslateY translate-x-custranslateX cusLg:w-full duration-cusDuration'>
                <h2 className='text-white text-center'>MLCB Circuit Breaker</h2>
                <div className=' cusLg:mx-4 flex justify-center items-center cussm:gap-10 cusLg:gap-15'>
                  <p className='flex items-center justify-center gap-2 para cursor-pointer'>
                    View Details <FaArrowRight></FaArrowRight>
                  </p>
                  <p>$75.00</p>
                </div>
              </div>
            </div>

            <div className='overturn relative basis-1/3'>
              <img
                src={chandalier}
                alt='chandalier'
                className='w-full img5 cussm:w-cusWidth5 cusLg:w-auto cussm:m-auto cusLg:m-0 block img8'
              />
              <div className='overturn2 w-full h-cusHeight3 max-h-fit top-0 left-0 bg-cusBgCol3 transition-custom duration-cusDuration absolute'></div>
              <div className='absolute desc cussm:w-cusWidth6 left-1/2 top-1/2 opacity-0 cussm:text-cusFontSize4 cusLg:text-2xl text-white font-bold translate-y-custranslateY translate-x-custranslateX cusLg:w-full duration-cusDuration'>
                <h2 className='text-white text-center'>MLCB Circuit Breaker</h2>
                <div className=' cusLg:mx-4 flex justify-center items-center cussm:gap-10 cusLg:gap-15'>
                  <p className='flex items-center justify-center gap-2 para cursor-pointer'>
                    View Details <FaArrowRight></FaArrowRight>
                  </p>
                  <p>$75.00</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className='bg-gray-100 p-8'>
        <Reveal variants={bottomVariants}>
          <div className='flex cussm:items-center cussm:justify-center cusLg:item-start cusLg:justify-normal'>
            <img src={icon} alt='w-full cussm:m-auto' />
          </div>

          <QuestionSection>
            <div className='basis-cusBasis flex flex-col gap-3'>
              <h2 className='w-full text-cusFontSiz7 cussm:text-cusFontSize10 cusLg:text-cusFontSiz7 font-cusFontFamily2 cussm:text-center cusLg:text-left font-bold uppercase leading-cuslineheight'>
                Feel Confident Knowing That We Properly lighten Up Your Homes
              </h2>
              <p className='w-full font-cusFontFamily2 font-normal cussm:text-center cusLg:text-left'>
                With our state-of-the-art technologies and expertly trained
                professionals, we go the extra mile to electrify your homes with
                modern electrical materials and solar Installation.
              </p>
              <img
                src={electric2}
                alt='electricity'
                className='max-w-full cussm:max-w-cusmaxwidth cussm:m-auto cusLg:max-w-full cusLg:m-0'
              />
            </div>

            {/* FAQ */}
            <div className='basis-cusBasis'>
              <FaqSection />

              <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 w-fit px-3 h-16 z-20 text-cusFontSize1 block cussm:m-auto cusLg:m-0'>
                <Link to='/about' className='banner-text-link1'>
                  How Do We Work
                </Link>
              </button>
            </div>
          </QuestionSection>
        </Reveal>
      </section>

      {/* COMPANIES SECTION */}
      <section className='bg-cusBgCol p-8'>
        <Reveal variants={bottomVariants}>
          <Companies />
          <Testimonials />
        </Reveal>
      </section>

      <section className='bg-white p-8'>
        <RatingSection>
          <Reveal className='cussm:w-full cusLg:w-1/2' variants={leftVariants}>
            <div className='basis-cusBasis2'>
              <img src={team} alt='electrician' className='max-w-full' />
            </div>
          </Reveal>

          <Reveal
            className='cussm:w-full cusLg:w-1/2 cusLg:ml-7 cussm:ml-0'
            variants={rightVariants}
          >
            <div className='basis-cusBasis2 cussm:mt-7 cusLg:mt-0'>
              <div className='mb-4'>
                <h2 className='text-cusFontSiz7 cussm:text-center cusLg:text-left'>
                  Our Statistics
                </h2>
                <p className='cussm:text-center cusLg:text-left'>
                  At our company, we are proud to share our statistics that
                  demonstrate our commitment to delivering exceptional security
                  services.
                </p>
              </div>

              <Progressbar />
            </div>
          </Reveal>
        </RatingSection>
      </section>

      <section className='bg-gray-100 p-8'>
        <Reveal variants={topVariants}>
          <PricingSection />
        </Reveal>
      </section>
    </>
  );
};

export default HomeComponent;
