import React, { useCallback } from "react";
import { FAQS } from "../../elecItems";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const FullFaqSection = () => {
  const [dropdownState, isdropdownState] = useState(null);

  console.log(dropdownState);

  const handleClick = useCallback(
    (id) => {
      isdropdownState(id !== dropdownState ? id : null);
    },
    [dropdownState]
  );

  return (
    <>
      {FAQS.map((state) => {
        const { id, question, answer } = state;
        return (
          <div
            className='flex flex-col gap-3 cussm:w-cuswidth9 cusLg:w-auto'
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
                  onClick={() => handleClick(id)}
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
    </>
  );
};

export default React.memo(FullFaqSection);
