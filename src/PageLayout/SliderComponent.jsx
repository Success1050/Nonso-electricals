import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "../elecItems";
import { FaArrowRight, FaLightbulb, FaStarHalf, FaStar } from "react-icons/fa";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SliderComponent = () => {
  return (
    <>
      <Slider {...settings}>
        {reviews.map((review) => {
          const { id, name, description, position } = review;
          return (
            <div key={id} className='w-full '>
              <p className='font-semibold text-center cussm:text-left cusLg:text-center leading-8 text-cusFontSize8'>
                {description}
              </p>

              <div className='flex justify-between items-start mt-6'>
                <div>
                  <h3 className='text-cusFontSize9 font-semibold'>{name}</h3>
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
    </>
  );
};

export default SliderComponent;
