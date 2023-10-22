import React from "react";

type Props = {
  bg: number;
  title: string;
  desc: string;
  id?: number;
  institute: string;
};

const Box = ({ bg, title, desc, institute }: Props) => {
  return (
    <div
      className={`  flex flex-col h-80 text-gray-800 justify-evenly md:w-80 lg:w-[22rem]  p-4 background-${bg} shadow-2xl`}
    >
      <h2 className="boxhead">{title} 🎓</h2>
      <h3 className="text-gray-600">{institute}</h3>
      <p className="text-[15px]">{desc}</p>
      <ul className="text-[15px] list-disc m-4 ">
        <li>GPA: 3.2</li>
        <li>Deans List Certificate</li>
        {/* <li>Sports Person </li> */}
      </ul>
    </div>
  );
};

export default Box;
