import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <>
      {/* <h3 className="hsec">MY EDUCATION —</h3> */}

      <div className="w-11/12 mx-auto px-4 mt-20">
        <h3 className="hsec">CONTACT —</h3>

        <Image
          src={"/map.png"}
          alt="map"
          height={40}
          width={1000}
          className=" w-[100%] h-72 object-cover rounded-2xl mt-8 "
        />
      </div>

      <div className="flex flex-col gap-3 text-center lg:text-left md:h-auto   lg:flex-row items-center justify-between w-9/12 mx-auto rounded-md shadow-xl px-16 py-12  -mt-56 mb-10 lg:h-72 relative contact-bg">
        <Image
          src={"/uzair.jpg"}
          alt="human"
          height={130}
          width={130}
          className="rounded-full border-2 border-white"
        />
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl text-black  font-bold ">Uzair Hussain</h2>
          <h3 className="text-lg text-black  font-medium ">
            uzairhussain98@hotmail.com
          </h3>
          <div className="flex flex-col text-gray-500">
            <h4>+92 3143779143</h4>
            <h4>+92 3143779143</h4>
          </div>
          <div className="flex gap-3 justify-center lg:justify-start">
            <Image
              src={"/github-2.svg"}
              alt="git"
              height={25}
              width={25}
              className="hover:scale-125  transition ease-in-out duration-300"
            />
            <Image
              src={"/linkedin-2.png"}
              alt="git"
              height={25}
              width={25}
              className="hover:scale-125  transition ease-in-out duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col w-60">
          <Image src={"/quote.svg"} alt="quote" height={40} width={40} />
          <p className="italic drop-shadow">
            I still question my career choice , Whenever I get stucked in coding
            problem.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
