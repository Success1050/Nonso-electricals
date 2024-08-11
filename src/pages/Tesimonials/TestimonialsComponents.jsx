import React from "react";
import HeaderComponent from "../../PageLayout/HeaderComponent";
import CustomerFeedback from "../../PageLayout/CustomerFeedback";
import Reveal from "../../Reveal";
import {
  leftVariants,
  topVariants,
  bottomVariants,
  rightVariants,
} from "../../PageLayout/motion";

const TestimonialsComponents = () => {
  return (
    <>
      <header className="bg-[url('./src/images/grid.jpg')]">
        <HeaderComponent>
          <div className='w-cusWidth5 cussm:w-full md:w-cusWidth5'>
            <Reveal variants={bottomVariants} custom={0.4}>
              <h5 className='cussm:text-cusFontSize3 font-bold mb-10 cusLg:text-xl'>
                TESTIMONIALS
              </h5>
            </Reveal>
            <Reveal variants={bottomVariants} custom={0.6}>
              <p className='heading cussm:leading-cuslineheight  text-4xl'>
                Reviews Of Our Services
              </p>
            </Reveal>
            <Reveal variants={bottomVariants} custom={0.65}>
              <p className='header-text mt-8 cussm:mt-5 lg:mt-8 cussm:text-cusFontSize4 md:text-xl font-medium w-inherit'>
                Discover the experiences and feedback shared by our valued
                clients. Our testimonials section showcases the satisfaction and
                success stories of those who have entrusted us with their
                security needs.
              </p>
            </Reveal>
          </div>
        </HeaderComponent>
      </header>

      <section className='p-8 gradient'>
        <Reveal variants={bottomVariants} custom={0.5}>
          <div className='w-1/2 m-auto pt-24 pb-24 cussm:w-full cusLg:w-1/2 cussm:pt-12 cusLg:pt-24 cussm:pb-12 cuslg2:pb-24'>
            <h2 className='text-cusFontSize10 font-semibold text-center'>
              &#8220;
            </h2>
            <p className='w-full text-center text-cusFontSize10 text-cusBgCol7'>
              “I should like to thank for recent diligent work and for honoring
              the quoted fee.”
            </p>
            <div className='text-center mt-3'>
              <h3>John Wang</h3>
              <p>CEO, IT Solutions</p>
            </div>
          </div>
        </Reveal>

        <Reveal variants={bottomVariants} custom={0.7}>
          <CustomerFeedback />
        </Reveal>
      </section>
    </>
  );
};

export default TestimonialsComponents;
