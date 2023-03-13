"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import HamburgerItems from "./HamburgerItems";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  return (
    <div className="w-full h-28 flex fixed items-center justify-end px-6 lg:px-14 z-10 ">
      <div className="bg-gray-300  bg-opacity-90 rounded-full flex items-center p-3 ring-2 ring-yellow-300">
        <GiHamburgerMenu
          size={32}
          color={"white"}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
      {isMenuOpen && (
        <div className="absolute top-0  w-full h-[100vh]  background-ham animate  right-0 text-black transition duration-1000 ease-in-out">
          <div className=" flex  justify-end pt-7 px-6 lg:px-14 ">
            <div className="bg-gray-300  bg-opacity-90 rounded-full flex items-center p-3 ring-2 ring-yellow-300">
              <GrClose
                size={32}
                color={"black"}
                onClick={() => setMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
          <HamburgerItems />
        </div>
      )}
    </div>
  );
};

export default Nav;
