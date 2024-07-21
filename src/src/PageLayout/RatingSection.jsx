import React from "react";

const RatingSection = ({ children }) => {
  return (
    <>
      <div className='flex justify-between items-start mt-10 cussm:flex-col cuslg5:flex-row cussm:items-center'>
        {children}
      </div>
    </>
  );
};

export default RatingSection;
