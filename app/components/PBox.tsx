import Image from "next/image";
import React from "react";

type Props = {
  id?: number;
  title: string;
  desc: string;
  image: string;
};

const PBox = ({ title, desc, image }: Props) => {
  return (
    <div
      className={`flex flex-col  h-96 text-gray-700 justify-evenly md:w-80 lg:w-[22rem] p-4 s-box border border-black`}
    >
      <div className="flex justify-between items-center">
        <h2 className="boxhead">{title}</h2>
        <Image
          src={"/projects/github.svg"}
          alt="git"
          width={34}
          height={5}
          className="hover:scale-125 w-6 h-6"
        />
      </div>
      <p className="text-[15px] h-16 text-justify">{desc}</p>
      <Image src={image} alt="netflix" width={500} height={500} />
    </div>
  );
};

export default PBox;
