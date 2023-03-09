import React from "react";

type Props = {
  bg: number;
};

const Box = ({ bg }: Props) => {
  return (
    <div
      className={`  flex flex-col h-80  justify-evenly md:w-80 lg:w-[22rem]  p-4 background-${bg}`}
    >
      <h2 className="boxhead">BS-CS 🎓</h2>
      <h3 className="text-gray-600">ILMA University</h3>
      <p className="text-[15px]">
        I had the pleasure to finish the most complete online bootcamp. ~ 1800hs
        of coursework for my Full-Stack Certification.
      </p>
      <ul className="text-[15px] list-disc m-4 ">
        <li>GPA: 3.2</li>
        <li>Deans List Certificate</li>
        <li>Sports Person </li>
      </ul>
    </div>
  );
};

export default Box;
