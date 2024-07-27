// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <section
        className="relative bg-[url(https://wallpaperaccess.com/full/1306125.jpg)] bg-cover bg-center bg-no-repeat"
      >
        <div className="relative z-10">
          <Navbar />
        </div>

       

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl text-rose-700 font-extrabold sm:text-5xl">
            Taste the <span className="text-[#63bea8] ">Difference
              </span> in 
              <strong className="block font-extrabold text-rose-700"> Every Bite
              </strong>
            </h1>

            <p className="mt-4 text-[#4727ff] shadow-lg shadow-[#286656]  max-w-lg sm:text-xl/relaxed">
            Elevating your dining experience with gourmet flavors and unforgettable moments
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3  text-sm font-medium text-[#6ed6bc] shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#6ed6bc] shadow hover:text-purple-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
