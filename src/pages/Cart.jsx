import React from "react";
import { useCart } from "react-use-cart";
import { item23, item24, item25 } from "../images/imports";
import { shopItem } from "../elecItems";

const Cart = () => {
  const {
    isEmpty,
    cartTotal,
    emptyCart,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  return (
    <>
      <div className='bg-cusBgCol p-10 cussm:p-0 cussmall:p-5 sm:p-8 md:p-10 '>
        <div className='bg-white shoplist w-cusWidth6 mx-auto cussm:mx-0  cussm:w-full sm:w-cusWidth5 sm:mx-auto md:w-cusWidth6 shadow-lg py-6 rounded-md'>
          {isEmpty ? (
            <>
              <h2 className='text-center text-cusFontSize10 cussm:text-cusFontSize8 lg:text-cusFontSize10 font-semibold '>
                Your Cart Is Empty
              </h2>
            </>
          ) : (
            <>
              <h2 className='text-center text-cusFontSize10 cussm:text-cusFontSize8 lg:text-cusFontSize10 font-semibold'>
                Your Cart
              </h2>
              <hr className='border-none h-[1px] bg-cusBtnColor' />
              <div className='flex flex-col justify-between gap-y-4 '>
                {items.map((item) => {
                  const { id, name, price, img, quantity } = item;
                  return (
                    <div
                      key={id}
                      className='flex cussm:items-start cussmall:items-center  py-cusgap3 gap-4 justify-between px-5 cussm:text-cusFontSize2'
                    >
                      <div className='w-cusWidth16  cussm:w-cusWidth16 '>
                        <img
                          src={img}
                          className=' object-cover cussm:max-w-full inline-block max-w-full '
                        />
                      </div>
                      <div className='flex flex-col mx-cusgap3'>
                        <h3 className=' text-sm text-gray-700'>{name}</h3>
                        <p className='text-lg font-medium text-gray-900'>
                          ${price}
                        </p>
                        <h3
                          className='text-cusCol2 text-cusFontSize8 cussm:text-cusFontSize3 sm:text-cusFontSize4 md:text-cusFontSize8 mt-3 cursor-pointer'
                          onClick={() => removeItem(id)}
                        >
                          Remove
                        </h3>
                      </div>

                      <div className='flex justify-center items-center gap-3 cussm:flex-col cussmall:flex-row cussm:gap-1 cussmall:gap-2 '>
                        <div
                          className=' bg-cusBtnColor rounded-cusBradius w-cusWidth8 cussm:w-cusWidth14 cussm:h-cusheight10 sm:h-cusWidth8 sm:w-cusWidth8 h-cusHeight4 lg:w-cusWidth10 lg:h-cusHeight5 flex justify-center items-center cursor-pointer active:scale-90 transition-all duration-200 ease-in'
                          onClick={() => updateItemQuantity(id, quantity - 1)}
                        >
                          <button type='button' className='text-cusFontSize8'>
                            -
                          </button>
                        </div>
                        <div>
                          <h2 className='text-cusFontSize3 md:text-cusFontSize9 font-semibold'>
                            {quantity}
                          </h2>
                        </div>
                        <div
                          className=' bg-cusBtnColor rounded-cusBradius w-cusWidth8 cussm:w-cusWidth14 cussm:h-cusheight10 sm:h-cusWidth8 sm:w-cusWidth8 h-cusHeight4 lg:w-cusWidth10 lg:h-cusHeight5 flex justify-center items-center cursor-pointer active:scale-90 transition-all duration-200 ease-in'
                          onClick={() => updateItemQuantity(id, quantity + 1)}
                        >
                          <button type='button' className='text-cusFontSize8'>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr className='border-none h-[2px] bg-cusBgCol mt-8' />
              <div className='flex justify-between items-center px-5 mt-5'>
                <div className='text-cusFontSize8 text-cusBgCol6'>
                  {" "}
                  Subtotal:
                </div>
                <div className='text-cusFontSize8 text-cusBgCol6'>
                  $ {Number(cartTotal)}
                </div>
              </div>
              <div className='flex justify-between cussm:flex-col md:flex-row items-center'>
                <div className='basis-cusBasis cussm:w-cusWidth3 md:basis-cusBasis '>
                  <button
                    className='border-2 rounded-[6px] text-center  cursor-pointer cussm:mt-5 mt-4 h-16 cussm:h-10 block cussm:self-start z-20 sm:h-14 mx-auto cussm:w-full md:w-cusWidth6'
                    style={{ backgroundColor: "red" }}
                    onClick={() => emptyCart()}
                    type='submit'
                  >
                    Clear
                  </button>
                </div>

                <div className='basis-cusBasis cussm:w-cusWidth3'>
                  <button
                    className='border-2 rounded-[6px] text-center bg-orange-600  cursor-pointer cussm:mt-5 mt-4 h-16 cussm:h-10 block cussm:self-start z-20 sm:h-14 mx-auto cussm:w-full md:w-cusWidth6'
                    type='submit'
                  >
                    Continue to payment
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
