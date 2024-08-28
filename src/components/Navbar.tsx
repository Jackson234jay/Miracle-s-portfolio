import React from "react";
import { hideSidebar } from "../sidebar";
import { showSidebar } from "../sidebar";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="bg-purple-500 w-full ">
        <ul className="sidebar rounded-lg  text-3xl  fixed top-0 right-0 h-screen backdrop-blur-2xl w-3/6 z-[999] bg-rgba(255, 255, 255, 0.2) shadow-[-10px 0 10px] shadow-rgba(0, 0, 0, 0.1) hidden flex-col text-black items-start justify-start">
          <li
            onClick={hideSidebar}
            className="font-bold my-4 text-2xl cursor-pointer"
          >
            <a href="#">
              <IoCloseCircleOutline className="inline-block my-5 h-5/6" />
            </a>
          </li>
          <Link spy={true} smooth={true} to="Home">
            <li className="my-6 text-5xl font-serif ">
              <a href="">Home</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-6 text-5xl font-serif">
              <a href="">About</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-6 text-5xl font-serif">
              <a href="">Contact</a>
            </li>
          </Link>
        </ul>
        <ul className="flex flex-row justify-end items-center py-4 font-serif text-2xl text-white font-bold">
          <Link to="home" spy={true} smooth={true} duration={500}>
            <li className="hover:text-white">
              <a className="hover:text-white" href="#">
                Logo
              </a>
            </li>
          </Link>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <li className="hideOnMobile">
              <a href="">Home</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About" duration={500}>
            <li className="hideOnMobile">
              <a href="">About</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact" duration={500}>
            <li className="hideOnMobile">
              <a href="#">Contact</a>
            </li>
          </Link>
          <li
            className="menu-btn transition-all duration-500 text-3xl items-center justify-center flex"
            onClick={showSidebar}
          >
            <a href="#">
              <IoMenu className="h-[26] transition-all duration-500 w-[26] items-center" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
