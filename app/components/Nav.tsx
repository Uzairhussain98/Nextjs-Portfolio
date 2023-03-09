import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="w-full h-28 flex fixed items-center justify-end px-6 lg:px-14 z-10 ">
      <div className="bg-gray-300  bg-opacity-90 rounded-full flex items-center p-3 ring-2 ring-yellow-300">
        <GiHamburgerMenu size={32} color={"white"} />
      </div>
    </div>
  );
};

export default Nav;
