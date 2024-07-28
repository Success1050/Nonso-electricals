import React from "react";
import { allProject } from "../../elecItems";

const AllProject = () => {
  return (
    <>
      <div className='grid grid-cols-2 justify-between gap-7 items-center mt-9 cussm:grid-cols-1 cussm:justify-between cussm:items-center cusLg:grid-cols-2 tabs'>
        {allProject.map((project) => {
          const { id, title, desc, img } = project;
          return (
            <div
              className='relative rounded-lg overflow-hidden shadow-md project  cursor-pointer cussm:w-full'
              key={id}
            >
              <img src={img} alt='project' className='cussm:w-full' />
              <div className='bg-white absolute p-4 project-child'>
                <h2 className='text-cusBgCol6 mb-cuspd6 text-cusFontSize9 cussmall:text-cusFontSize4 font-semibold hover:text-cusCol2 text-left transition-all duration-75 ease-in cussm:text-cusFontSize3'>
                  {title}
                </h2>
                <p className='text-cuscolor text-cusFontSize8 font-normal cussmall:text-cusFontSize3 cussm:text-cusFontSize2'>
                  {desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllProject;
