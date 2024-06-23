import Reveal from "../Reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { reviews } from "../elecItems";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
  FaLightbulb,
  FaStarHalf,
  FaStar,
} from "react-icons/fa";
import { useState } from "react";
import { questions } from "../elecItems";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

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

  const [dropdownState, isdropdownState] = useState(null);

  console.log(dropdownState);
  const questionToggle = (id) => {
    isdropdownState(id !== dropdownState ? id : null);
  };

  return (
    <>
      <header className='bg-black'>
        <div className='flex justify-center flex-col text-center lg:text-start lg:items-start items-center text-white h-full cussm:mx-5 lg:ml-11 gap-8'>
          <Reveal variants={bottomVariants}>
            <div>
              <h5 className='cussm:text-cusFontSize3 font-bold mb-10 cusLg:text-xl'>
                ELECTRICAL/SOLAR INSTALLATIONS
              </h5>

              <p className='heading cussm:leading-cuslineheight  text-4xl'>
                Lighten Up Your Homes With Our
                <div>Electrical And Solar Installation</div>
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

          <div className='banner-link cussm:mt-8 cussmall:mt-0 flex gap-3 cussm:flex-col sm:flex-row cussm:gap-2 sm:gap-3'>
            <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 mt-4 w-36 h-16 block cussm:self-start z-20'>
              <Link to='/about' className='banner-text-link1'>
                About Us
              </Link>
            </button>
            <button className='border-2 rounded-lg text-center cursor-pointer btn2 mt-4 w-36 h-16 block cussm:self-start z-20 contact-btn'>
              <Link to='/about' className='banner-text-link1'>
                Contact Us
              </Link>
            </button>
          </div>
        </div>
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
            <div className='advert3'>
              <h1 className='text-4xl cussm:text-cusfontsize5 cussmall:text-4xl text-orange-600 mb-3'>
                400+
              </h1>
              <p className='text-3xl cussm:text-cusFontSiz6 cussmall:text-3xl font-bold mb-3'>
                Satisfied Clients
              </p>
              <p className='text-gray-600'>
                We take great pride in the relationships we have built.
              </p>
            </div>

            <div className='advert3'>
              <h1 className='text-4xl cussm:text-cusfontsize5 cussmall:text-4xl text-orange-600 mb-3'>
                100+
              </h1>
              <p className='text-3xl cussm:text-cusFontSiz6 cussmall:text-3xl font-bold mb-3'>
                Lightned and Safe
              </p>
              <p className='text-gray-600'>
                We are committed to ensuring the protection of your homes by
                using faultless electrical materials.
              </p>
            </div>

            <div className='advert3'>
              <h1 className='text-4xl cussm:text-cusfontsize5 cussmall:text-4xl text-orange-600 mb-3'>
                12+
              </h1>
              <p className='text-3xl cussm:text-cusFontSiz6 cussmall:text-3xl font-bold mb-3'>
                Satisfied Clients
              </p>
              <p className='text-gray-600'>
                You can trust our extensive years of experience in the
                electrical industry.
              </p>
            </div>
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
          <div className='flex justify-between items-start cussm:flex-col cusLg:flex-row cussm:items-center cusLg:items-start cussm:gap-6 cusLg:gap-0'>
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
              {questions.map((state) => {
                const { id, question, answer } = state;
                return (
                  <div
                    className='flex flex-col gap-3 scussm:w-cuswidth9 cusLg:w-auto'
                    key={id}
                  >
                    <div className='question1 flex items-center justify-between w-full p-cusp1 shadow-customShadow bg-white rounded-cusBradius2'>
                      <h5
                        className={`question1 w-cusWidth7 text-cusFontSiz9 font-cusFontFamily2 font-bold ${
                          id === dropdownState ? "text-cusBtnColor" : ""
                        }`}
                      >
                        {question}
                      </h5>
                      <div className='arrow w-cusWidth8 h-cusHeight4 rounded-cusBradius border-cusBwidth border-cusBcolor2 border-solid flex self-center justify-center'>
                        <button
                          type='button'
                          className={`${
                            id === dropdownState ? "text-cusBtnColor" : ""
                          }`}
                          onClick={() => questionToggle(id)}
                        >
                          {id === dropdownState ? (
                            <FaArrowUp></FaArrowUp>
                          ) : (
                            <FaArrowDown></FaArrowDown>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className='my-3'>
                      <p
                        className={`text-gray-500 text-cusFontSize8 font-cusFontFamily2 max-h-0 leading-7 ${
                          id === dropdownState ? "selected" : "max-h-0"
                        }`}
                      >
                        {id === dropdownState ? answer : null}
                      </p>
                    </div>
                  </div>
                );
              })}
              <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 w-fit px-3 h-16 z-20 text-cusFontSize1 block cussm:m-auto cusLg:m-0'>
                <Link to='/about' className='banner-text-link1'>
                  How Do We Work
                </Link>
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className='bg-cusBgCol p-8'>
        <Reveal variants={bottomVariants}>
          <h2 className='text-cusFontSiz7 cussm:text-3xl text-center text-white font-bold my-4'>
            Our Electrical System Is Trusted By Some Of The Largest Companies
          </h2>
          <div className='grid justify-items-center items-center grid-cols-3 gap-3 lg:pt-11 cussm:grid-cols-2 sm:grid-cols-3 '>
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
          <div className='flex justify-center items-start  text-white mt-5 gap-40 cussm:gap-4 cussm:flex-col cusLg:flex-row cussm:justify-center lg:pt-11'>
            <div className='basis-cusBasis2 cussm:mx-auto'>
              <h2 className='text-cusFontSiz7 whitespace-nowrap cussm:text-center cussm:text-cusFontSize10 sm:text-cusFontSiz7 cusLg:text-left'>
                What Our Clients <br /> Say About Us
              </h2>
            </div>

            <div className='w-cusWidth11 cussm:w-full cusLg:w-cusWidth11 cussm:mt-0'>
              <Slider {...settings}>
                {reviews.map((review) => {
                  const { id, name, description, position } = review;
                  return (
                    <div key={id} className='w-full '>
                      <p className='font-semibold text-center cussm:text-left cusLg:text-center leading-8'>
                        {description}
                      </p>

                      <div className='flex justify-between items-start mt-6'>
                        <div>
                          <h3 className='text-cusFontSize9 font-semibold'>
                            {name}
                          </h3>
                          <h3 className='text-gray-500 text-cusFontSize8 font-cusFontFamily2 font-semibold'>
                            {position}
                          </h3>
                        </div>

                        <div className='flex justify-end items-start gap-3 cussm:gap-1 lg:gap-3 text-cusFontSize4 text-yellow-500'>
                          {Array.from({ length: 5 }, (_, index) => (
                            <FaStar key={index}></FaStar>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </Reveal>
      </section>

      <section className='bg-white p-8'>
        <div className='flex justify-between items-start mt-10 cussm:flex-col cusLg:flex-row'>
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
        </div>
      </section>

      <section className='bg-gray-100 p-8'>
        <Reveal variants={topVariants}>
          <div className='flex justify-between items-start cussm:flex-col cusLg:flex-row cussm:gap-y-4 cusLg:gap-0 cussm:items-center cusLg:items-start'>
            <div className='basis-cusBasis3'>
              <div className='max-w-full cussm:text-center cusLg:text-left'>
                <h2 className='text-cusFontSize10 '>Pricing</h2>
                <p className='text-cuscolor text-cusFontSize8'>
                  We provide electrical requirements of residential, commercial
                  and other clients
                </p>
                <button className='banner-text-link2 border-2 rounded-lg bg-orange-600 cursor-pointer btn2 mt-6 w-36 h-16 '>
                  <Link to='/about' className='banner-text-link1'>
                    Get Now
                  </Link>
                </button>
              </div>
            </div>

            <div className='basis flex justify-between items-start gap-4 cussm:flex-col cusLg:flex-row '>
              <div className='bg-cusBgCol4 p-cuspd4 text-white rounded-cusBradius2 relative'>
                <h2>Most popular plan</h2>
                <div className='w-fit bg-slate-400 p-cuspd5 rounded-cusBradius2 absolute top-4 right-2'>
                  <h4>-20% off</h4>
                </div>
                <h1 className='text-cusFontSize11 my-3'>
                  $90% <sub className='text-xl'>/MTH</sub>
                </h1>
                <hr />
                <div className='my-cusmb2'>
                  <ul className='flex flex-col gap-y-cusgap3 my-cusp1 list-disc pl-cuspl2'>
                    <li>Security Guard Services</li>
                    <li>24/7 support</li>
                    <li>HD Camera monitoring</li>
                    <li>Access to all features</li>
                    <li>Analysis and benefits</li>
                    <li>Global Overview & Statistics</li>
                  </ul>
                </div>
                <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 sm:mt-4 w-32 h-16 z-20 cussm:w-full sm:w-32 text-cusFontSize1 cussm:mt-0 cussm:mb-3 sm:mb-2'>
                  <Link to='/about' className='banner-text-link1'>
                    View All
                  </Link>
                </button>
              </div>

              <div className='p-cuspd4 text-cuscolor rounded-cusBradius2 shadow-customShadow'>
                <h2>Standard Plan</h2>
                <h1 className='text-cusFontSize11 my-3 text-cusBtnColor'>
                  $90% <sub className='text-xl'>/MTH</sub>
                </h1>
                <hr />
                <div className='my-cusmb2'>
                  <ul className='flex flex-col gap-y-cusgap3 my-cusp1 list-disc pl-cuspl2'>
                    <li>Security Guard Services</li>
                    <li>24/7 support</li>
                    <li>HD Camera monitoring</li>
                    <li>Access to all features</li>
                    <li>Analysis and benefits</li>
                    <li>Global Overview & Statistics</li>
                  </ul>
                </div>
                <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 sm:mt-4 w-32 h-16 z-20 cussm:w-full sm:w-32 text-cusFontSize1 cussm:mt-0 cussm:mb-3 sm:mb-2'>
                  <Link to='/about' className='banner-text-link1'>
                    Get Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className='bg-white p-8 py-14'>
        <Footer />
      </section>
    </>
  );
};

export default HomeComponent;
