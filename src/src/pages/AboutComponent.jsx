import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../PageLayout/HeaderComponent";
import { FaArrowRight, FaLightbulb, FaStarHalf, FaStar } from "react-icons/fa";
import {
  skyscrapper,
  bulb,
  electrician,
  solars,
  tricity,
} from "../images/imports";
import AdvertPageComponent from "./AdvertPageComponent";
import { bulb2, circuitbreaker } from "../images/imports";
import FaqSection from "../PageLayout/FaqSection";
import QuestionSection from "./QuestionSection";
import RatingSection from "../PageLayout/RatingSection";
import Progressbar from "../PageLayout/progressbar/Progressbar";
import Companies from "./Companies";
import Testimonials from "./Testimonials";
import PricingSection from "./PricingSection";

const AboutComponent = () => {
  return (
    <>
      <header className="bg-[url('./src/images/aboutbanner.jpg')]">
        <HeaderComponent>
          <div>
            <h5 className='cussm:text-cusFontSize3 font-bold mb-10 cusLg:text-xl'>
              ELECTRICAL/SOLAR INSTALLATIONS
            </h5>

            <p className='heading cussm:leading-cuslineheight  text-4xl'>
              About Our Electrical And Solar Installation
            </p>

            <p className='header-text mt-8 cussm:mt-5 lg:mt-8 cussm:text-cusFontSize4 md:text-xl font-medium w-inherit'>
              Our primary goal is to assist you in maintaining the safety
              <div>
                security of your home and loved ones, providing peace of mind at
              </div>
              and all times.
              <div>
                and efficient electrical systems, ensuring your homes and
                workplaces <div>are powered safely</div>
              </div>
            </p>
          </div>
        </HeaderComponent>
      </header>

      <section className='bg-gray-100 py-20 px-8'>
        <div className='flex cussm:flex-col cusLg:flex-row cussm:text-center cusLg:text-left cussm:gap-cusgap2 cusLg:gap-0 advert1 items-start justify-between px-8'>
          <h2 className='text-3xl font-bold mb-3  basis-cusBasis7'>
            Lets Lighten Up Your Homes
          </h2>

          <p className='basis-cusBasis7'>
            Our cameras come equipped with advanced features such as motion
            detection, night vision, and 24/7 live streaming, making them the
            perfect solution for keeping an eye on your property at all times.
          </p>
        </div>

        <div className='grid grid-cols-3 cuslg3:grid-cols-3 cussm:grid-cols-1 cuslg2:grid-cols-2 justify-between cussm:justify-center cusLg:justify-between cusLg:items-start cussm:items-center px-7 mt-8 about'>
          <div className='mr-10 cussm:mr-0 cusLg:mr-10'>
            <img src={circuitbreaker} alt='electricals' className='w-full' />
          </div>

          <div className='cussm:my-4 cusLg:my-0'>
            <div className=' grid justify-center cussm:text-center cusLg:text-left w-full gap-y-10'>
              <AdvertPageComponent />
            </div>
          </div>

          <div className=' ml-10 cussm:ml-0 cusLg:ml-0 cuslg2:ml-0 cuslg2:h-cusheight9 cuslg2:mt-7 bg-red-500'>
            <img
              src={bulb2}
              alt='electricals'
              className='w-full cuslg2:h-full cuslg2:object-cover'
            />
          </div>
        </div>
      </section>

      <section className='py-20 bg-white'>
        <div className='flex justify-center items-start cussm:flex-col cusLg:flex-row cussm:items-center cusLg:items-start cussm:gap-6 cusLg:gap-0 cussm:'>
          <div className='basis-cusBasis2 mr-7 cussm:mr-0 cusLg:mr-7 cussm:px-5 cusLg:px-0 w-full '>
            <FaqSection />
          </div>

          <div className='basis-cusBasis2'>
            <img
              src={solars}
              alt='skyscrapper'
              className='w-full cussm:px-5 cusLg:px-0'
            />
          </div>
        </div>
      </section>

      <section className='bg-cusBgCol4 px-8 text-white'>
        <div className='pb-8 '>
          <h2 className='w-cusWidth5 cussm:w-full cusLg:w-cusWidth5 cussm:text-center mx-auto  cussm:text-cusFontSize8 cusLg:text-cusFontSiz7 py-cuspd6 cusmd2:text-cusFontSize12 lg:text-left lg:w-full'>
            Our user-friendly security cameras are designed for easy
            installation, making technical expertise unnecessary. Whether you
            prefer a wired or wireless camera, we offer a range of options to
            suit your requirements.
          </h2>

          <div className='flex justify-between items-start mt-10 cussm:flex-col-reverse  cuslg5:flex-row cussm:items-center lg:items-start'>
            <div className='basis-cusBasis10 cussm:mt-7 cusLg:mt-0 cussm:mx-auto cuslg5:w-full cuslg5:mx-0'>
              <div className='mb-4'>
                <p className='cussm:text-left cuslg5:text-left cussm:w-full cusLg:w-cusWidth5 lg:w-full lg:text-cusFontSize9'>
                  At our website, you can also find a range of accessories to
                  enhance your security system, including DVRs, NVRs, and cloud
                  storage solutions. With our cloud storage solutions, you can
                  store footage securely in the cloud and access it from
                  anywhere, at any time.
                </p>
              </div>

              <div className='text-cusBtnColor'>
                <Progressbar />
              </div>
            </div>

            <div className='basis-cusBasis9 mt-4'>
              <img src={tricity} alt='electrician' className='w-full' />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-cusBgCol p-8'>
        <Companies />
        <Testimonials />
      </section>

      <section className='bg-gray-100 p-8'>
        <PricingSection />
      </section>
    </>
  );
};

export default AboutComponent;
