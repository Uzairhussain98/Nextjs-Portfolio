import React from "react";
import Box from "./Box";

const Education = () => {
  return (
    <div className="flex w-11/12 px-4 mx-auto flex-col mt-12 gap-8 mb-8">
      <h3 className="hsec">MY EDUCATION —</h3>
      <div className="flex justify-between flex-wrap gap-3 ">
        <Box bg={1} />
        <Box bg={2} />
        <Box bg={3} />
      </div>
    </div>
  );
};

export default Education;
