import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div
      id="Contact"
      className="bg-purple-300 p-20 flex items-center flex-col bg-fixed justify-center"
    >
      <h1
        data-aos="slide-left"
        className="text-[52px] outline-white text-center select-none cursor-pointer  font-semibold mb-2 leading-normal uppercase text-fuchsia-500"
      >
        Contact me
      </h1>
      <h1
        data-aos="slide-right"
        className="px-4 text-white select-none text-[20px] text-center cursor-pointer"
      >
        I'd love to connect and hear from you! Whether you have a question, a
        project in mind, or just want to chat, feel free to reach out. Email:
        <span
          title="Can copy the link"
          className="cursor-text select-text underline"
        >
          miracleezekiel111@gmail.com
        </span>{" "}
        Phone Number:
        <span
          title="Can copy the link"
          className="cursor-text select-text underline"
        >
          07044156535
        </span>{" "}
        Looking forward to hearing from you!
      </h1>
    </div>
  );
};
