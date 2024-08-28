import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img from "../assets/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import MyResume from "../assets/My Resume.pdf";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div id="About" className="bg-purple-300 overflow-x-hidden">
      <div className="lg:px-56 px-10  lg:py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <img
          data-aos="fade-down"
          src={img}
          width={290}
          className=" border-2 p-2 rounded-full select-none  border-fuchsia-500 img_glow"
          alt=""
        />
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1
            data-aos="fade-right"
            className="text-[52px] select-none font-semibold mb-8 leading-normal text-fuchsia-500 uppercase"
          >
            About Me
          </h1>
          <p data-aos="fade-left" className="cursor-pointer select-none">
            Hi, I'm Miracle Ezekiel, a passionate individual involved in video
            editing, proofreading, writing, and graphic design. I enjoy creating
            visually appealing and engaging content, and I continuously strive
            to improve my skills. My journey started with a deep curiosity and
            has evolved into a dedicated focus on producing high-quality work in
            these creative fields. Check my resume below.
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <a
                className="select-none neno-button"
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  data-aos="fade-left"
                  className="neno-button duration-500 shadow-xl hover:shadow-fuchsia-800 text-white border-2 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden"
                >
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
