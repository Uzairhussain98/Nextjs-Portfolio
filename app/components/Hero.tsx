import React from "react";

const Hero = () => {
  return (
    <div className="px-4 md:px-0  md:w-11/12 md:ml-auto flex md:bg-[url('/home-bg.svg')] bg-right  h-[700px] bg-opacity-25 ">
      <div className=" flex flex-col  mt-32 opacity-100   gap-8 ">
        <h3 className="hsmall">HELLO THERE👋, I’M</h3>
        <h3 className="text-6xl text-black  font-bold drop-shadow-[0_15px_15px_rgb(176,176,176)]">
          Uzair Hussain
        </h3>
        <h3 className="hmd ">PULL-STACK DEVELOPER </h3>
        <p className="leading-8 text-gray-500 opacity-80">
          JavaScript • TypeScript • React.js • Next.js • Azure • Docker • Linux
          !
          <br />
          Working remotely from Karachi 🌍🍝
        </p>
        <button className="bg-[#ef9218] font-semibold text-[12px] shadow-2xl border-black p-3 text-base tracking-[.20em] self-start rounded-full px-12 hover:scale-105 transition-all ease-in-out duration-1000">
          CHECK OUT MY CV !
        </button>
      </div>
    </div>
  );
};

export default Hero;
