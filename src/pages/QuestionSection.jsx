import React from "react";

const QuestionSection = ({ children }) => {
  return (
    <div className='flex justify-between items-start cussm:flex-col cusLg:flex-row cussm:items-center cusLg:items-start cussm:gap-6 cusLg:gap-0'>
      {children}
    </div>
  );
};

export default QuestionSection;
