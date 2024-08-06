import React from "react";
import { item23 } from "../images/imports";
import { Link } from "react-router-dom";
import { shopItem } from "../elecItems";
import DisplayShop from "./DisplayShop";

const ShopComponent = () => {
  return (
    <>
      <section className='p-8 gradient cussm:p-0 md:p-6 lg:p-8'>
        <div className='w-1/2 m-auto pt-24 pb-24 cussm:w-full cusLg:w-1/2 cussm:pt-12 cusLg:pt-24 cussm:pb-12 cuslg2:pb-24'>
          <p className='w-full text-center text-cusFontSize10 text-cusBgCol7'>
            Shop
          </p>
          <div className='text-center mt-3'>
            Discover the Best Security Solutions for Your Needs
          </div>
        </div>

        <DisplayShop />
      </section>
    </>
  );
};

export default ShopComponent;
