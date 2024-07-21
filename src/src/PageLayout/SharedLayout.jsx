import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
