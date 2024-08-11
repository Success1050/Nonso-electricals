import React from "react";
import FullFaqSection from "./FullFaqSection";
import Reveal from "../../Reveal";
import {
  leftVariants,
  topVariants,
  bottomVariants,
  rightVariants,
} from "../../PageLayout/motion";

const FaqComponent = () => {
  return (
    <section className='gradient p-8'>
      <div className='w-1/2 m-auto pt-24 pb-24 cussm:w-full cusLg:w-1/2 cussm:pt-12 cusLg:pt-24 cussm:pb-12 cuslg2:pb-24'>
        <Reveal variants={bottomVariants} custom={0.5}>
          <h2 className='text-cusFontSize10 font-semibold text-center'>FAQ</h2>
        </Reveal>
        <Reveal variants={bottomVariants} custom={0.7}>
          <p className='w-full text-center'>
            Explore our frequently asked questions to find answers to common
            queries about our services, security solutions, pricing, and more.
          </p>
        </Reveal>
      </div>

      <div className='text-center md:mb-[2rem]'>
        <Reveal variants={bottomVariants} custom={0.9}>
          <h2 className='text-cusBgCol4 text-cusFontSize10 capitalize mb-3 font-semibold'>
            The Most Common Questions
          </h2>
        </Reveal>
      </div>

      <Reveal variants={bottomVariants} custom={0.5}>
        <FullFaqSection />
      </Reveal>
    </section>
  );
};

export default FaqComponent;
