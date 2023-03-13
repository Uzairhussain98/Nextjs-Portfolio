import Image from "next/image";
import React from "react";

const HamburgerItems = () => {
  return (
    <div className="w-5/6 mx-auto flex items-start justify-start gap-12 lg:gap-96 lg:mt-8  flex-col md:flex-row ">
      <ul className="flex flex-col gap-6 lg:gap-12">
        <h1 className="text-black drop-shadow-2xl font-semibold   tracking-[.35em] font-sans text-[18px] ">
          NAVIGATION
        </h1>
        <li className="font-medium text-2xl tracking-tighter hover:scale-105  transition ease-in-out duration-300">
          HOME
        </li>
        <li className="font-medium text-2xl tracking-tighter hover:scale-105  transition ease-in-out duration-300">
          PROJECTS
        </li>
        <li className="font-medium text-2xl tracking-tighter hover:scale-105  transition ease-in-out duration-300">
          CONTACT
        </li>
      </ul>
      <ul className="flex flex-col gap-6 lg:gap-16">
        <h1 className="text-black drop-shadow-2xl font-semibold   tracking-[.35em] font-sans text-[18px] ">
          LETS CONNECT
        </h1>
        <div className="flex gap-6  lg:justify-start">
          <Image
            src={"/github-2.svg"}
            alt="git"
            height={25}
            width={35}
            className="hover:scale-125  transition ease-in-out duration-300"
          />
          <Image
            src={"/linkedin-2.png"}
            alt="git"
            height={25}
            width={35}
            className="hover:scale-125  transition ease-in-out duration-300"
          />
        </div>
        <Image
          src={"/cv.svg"}
          alt="git"
          height={25}
          width={65}
          className="hover:scale-125  transition ease-in-out duration-300"
        />
      </ul>
    </div>
  );
};

export default HamburgerItems;
