import React from "react";
import HeaderComponent from "../PageLayout/HeaderComponent";
import CustomerFeedback from "../PageLayout/CustomerFeedback";

const TestimonialsComponents = () => {
  return (
    <>
      <header className="bg-[url('./src/images/grid.jpg')]">
        <HeaderComponent>
          <div className='w-cusWidth5 cussm:w-full md:w-cusWidth5'>
            <h5 className='cussm:text-cusFontSize3 font-bold mb-10 cusLg:text-xl'>
              TESTIMONIALS
            </h5>

            <p className='heading cussm:leading-cuslineheight  text-4xl'>
              Reviews Of Our Services
            </p>

            <p className='header-text mt-8 cussm:mt-5 lg:mt-8 cussm:text-cusFontSize4 md:text-xl font-medium w-inherit'>
              Discover the experiences and feedback shared by our valued
              clients. Our testimonials section showcases the satisfaction and
              success stories of those who have entrusted us with their security
              needs.
            </p>
          </div>
        </HeaderComponent>
      </header>

      <section className='p-8 gradient'>
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
        <CustomerFeedback />
      </section>
    </>
  );
};

export default TestimonialsComponents;
