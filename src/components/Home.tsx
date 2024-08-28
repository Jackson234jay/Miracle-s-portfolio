import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiGmail } from "react-icons/si";
import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 1000,
    });
  }, []);
  return (
    <div className="h-screen  bg-purple-300 w-full min-h-screen  min-w-full overflow-x-hidden bg-fixed bg-cover lg:px-56 px-10 lg:py-20 py-10 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white w-full">
        <h1
          data-aos="zoom-in"
          className="lg:text-[52px] text-[52px] md:text-[128px] select-none cursor-pointer uppercase flex flex-col justify-center lg:items-start items-center text-white font-semibold leading-normal mb-5"
        >
          Welcome My <span className="text-fuchsia-700">Portfolio</span>
        </h1>
        <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className="text-white text-xl select-none cursor-pointer"
        >
          Hope you enjoy your tour round my portfolio website
        </p>
        <div className="flex flex-row mt-3">
          <div className="flex items-center space-x-2 justify-center">
            <a
              href="mailto:miracleezekiel111@gmail.com"
              className="text-black hover:text-black rounded-full glow p-2"
            >
              <SiGmail data-aos="slide-up" className="text-[28px]" />
            </a>
            <a
              href="tel:07044156535"
              className="text-black hover:text-black rounded-full glow p-2"
            >
              <FaPhoneAlt data-aos="slide-down" className="text-[28px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
