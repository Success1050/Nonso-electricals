import React from "react";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <>
      <div>About</div>
      <Link to='/' className='btn'>
        back to home
      </Link>
    </>
  );
};

export default AboutComponent;
