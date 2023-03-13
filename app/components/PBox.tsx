import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id?: number;
  title: string;
  desc: string;
  image: string;
  link: string;
};

const PBox = ({ title, desc, image, link }: Props) => {
  return (
    <div
      className={`flex flex-col mb-3  h-96 text-gray-700 justify-evenly md:w-80 lg:w-[22rem] p-4 s-box border border-black`}
    >
      <div className="flex justify-between items-center">
        <h2 className="boxhead">{title}</h2>
        <Image
          src={"/projects/github.svg"}
          alt="git"
          width={34}
          height={5}
          className="hover:scale-125 w-6 h-6  transition ease-in-out duration-300"
        />
      </div>
      <p className="text-[15px] h-16 text-justify">{desc}</p>
      <Link href={link} target={"_blank"}>
        <Image
          src={image}
          alt="netflix"
          width={800}
          height={500}
          className="w-[100%] rounded-md"
        />
      </Link>
    </div>
  );
};

export default PBox;
