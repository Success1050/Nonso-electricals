import React, { useState } from "react";
import HeaderComponent from "../PageLayout/HeaderComponent";
import { item1, switches } from "../images/imports";
import AllProject from "./ProjectTabs.jsx/AllProject";
import ResidentialProject from "./ProjectTabs.jsx/ResidentialProject";
import CommercialProject from "./ProjectTabs.jsx/CommercialProject";
import DataProject from "./ProjectTabs.jsx/DataProject";

const ProjectsComponent = () => {
  const [id, setId] = useState("");

  // console.log(id);

  const renderContent = () => {
    switch (id) {
      case "All Project":
        return <AllProject />;

      case "Residential Security":
        return <ResidentialProject />;

      case "Commercial Security":
        return <CommercialProject />;

      case "Data Analytics":
        return <DataProject />;

      default:
        return <AllProject />;
    }
  };
  return (
    <>
      <header className="bg-[url('./src/images/projectimg.jpg')]">
        <HeaderComponent>
          <div className='w-1/2 cussm:w-full cusLg:w-cusWidth5'>
            <h5 className='cussm:text-cusFontSize3 font-bold mb-10 cusLg:text-xl'>
              PROJECTS
            </h5>

            <p className='heading cussm:leading-cuslineheight  text-4xl'>
              Real-Life Success Stories: Explore Our Projects
            </p>

            <p className='header-text mt-8 cussm:mt-5 lg:mt-8 cussm:text-cusFontSize4 md:text-xl font-medium w-inherit'>
              Dive into our collection of case studies that showcase real-life
              success stories, demonstrating how we have helped organizations
              overcome challenges, improve efficiency, enhance security, and
              achieve their goals.
            </p>
          </div>
        </HeaderComponent>
      </header>
      {/* All Project */}

      <section className='p-16 bg-gray-100 cussm:p-4 md:p-16'>
        <div className='grid grid-cols-2 mb-9 cussm:grid-cols-1 items-center cussm:justify-center cussm:text-center cussmall:grid-cols-2 cussmall:justify-start cussmall:items-start lg:text-left gap-4 '>
          <div
            className='hover:text-cusCol2 cursor-pointer w-1/2 mx-auto'
            onClick={() => setId("All Project")}
          >
            <h4 className='text-cusFontSize9 font-semibold '>All Project</h4>
          </div>
          <div className='flex cussm:flex-col md:flex-row cussm:flex-wrap xl:flex-nowrap gap-4'>
            <div
              className='hover:text-cusCol2 cursor-pointer '
              onClick={() => setId("Residential Security")}
            >
              <h4 className='text-cusFontSize9 text-nowrap  lg:text-nowrap font-semibold'>
                Residential Security
              </h4>
            </div>
            <div
              className='hover:text-cusCol2 cursor-pointer'
              onClick={() => setId("Commercial Security")}
            >
              <h4 className='text-cusFontSize9 text-nowrap  lg:text-nowrap font-semibold'>
                Commercial Security
              </h4>
            </div>
            <div
              className='hover:text-cusCol2 cursor-pointer'
              onClick={() => setId("Data Analytics")}
            >
              <h4 className='text-cusFontSize9 cussm:text-wrap lg:text-nowrap font-semibold'>
                Data Analytics
              </h4>
            </div>
          </div>
        </div>

        {renderContent()}
      </section>
    </>
  );
};

export default ProjectsComponent;
