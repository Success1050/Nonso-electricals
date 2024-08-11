import React from "react";
import { Link } from "react-router-dom";
import { shopItem } from "../../elecItems";
import { useCart } from "react-use-cart";
import { useState } from "react";
import Reveal from "../../Reveal";
import {
  leftVariants,
  topVariants,
  bottomVariants,
  rightVariants,
} from "../../PageLayout/motion";

const DisplayShop = () => {
  const { addItem } = useCart();
  const [ButtonText, setButtonText] = useState("Add");
  const [buttonId, setButtonId] = useState(null);
  console.log(ButtonText);

  setTimeout(() => {
    setButtonText("Add");
    setButtonId(null);
  }, 1000);

  return (
    <>
      <Reveal custom={0.5} variants={bottomVariants}>
        <div className='parent cussm:grid-cols-[100%] grid sm:grid-cols-2 lg:grid-cols-3 p-6 gap-6 justify-center items-center'>
          {shopItem.map((shop) => {
            const { id, name, price, img } = shop;
            return (
              <div key={id}>
                <div className='hover:scale-[0.98] transition-all duration-300 ease-in '>
                  <img
                    src={img}
                    alt='item23'
                    className='bg-white p-3 mb-8 block rounded-xl'
                  />
                </div>

                <button className='banner-text-link2 border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 mt-4 w-fit p-3 h-fit block cussm:self-start z-20'>
                  <Link to='/about' className='banner-text-link1'>
                    Learn More
                  </Link>
                </button>
                <h2 className='font-bold text-xl pt-5 capitalize'>{name}</h2>

                <div className='flex justify-between items-center'>
                  <button
                    className='rounded-lg text-center cursor-pointer mt-4 w-36 classbtn h-16 block cussm:self-start bg-transparent border-2 border-solid transition-all duration-75 ease-in border-cusBtnColor hover:bg-cusCol2'
                    onClick={() => {
                      addItem(shop);
                      setButtonText("Added...");
                      setButtonId(id);
                    }}
                  >
                    <h2>{buttonId == id ? "Added..." : "Add"}</h2>
                  </button>

                  <h2 className='text-cusFontSize8 text-center cussm:text-cusFontSize4 text-cusBgCol6 font-normal'>
                    ${price} USD
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </>
  );
};

export default DisplayShop;
