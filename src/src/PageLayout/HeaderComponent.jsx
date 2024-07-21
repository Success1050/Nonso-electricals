import React from "react";

const HeaderComponent = ({ children }) => {
  return (
    <div className='flex justify-center flex-col text-center lg:text-start lg:items-start items-center text-white h-full cussm:mx-5 lg:ml-11 gap-8 '>
      {children}
    </div>
  );
};

export default HeaderComponent;
