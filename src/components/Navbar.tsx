import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div className="bg-purple-500 w-full ">
        <ul className="flex flex-row justify-end items-center py-4 font-serif text-2xl text-white font-bold">
          <Link to="home" spy={true} smooth={true} duration={500}>
            <li className="hover:text-white">
              <a className="hover:text-white" href="#">
                Logo
              </a>
            </li>
          </Link>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <li>
              <a href="">Home</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About" duration={500}>
            <li>
              <a href="">About</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact" duration={500}>
            <li>
              <a href="#">Contact</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
