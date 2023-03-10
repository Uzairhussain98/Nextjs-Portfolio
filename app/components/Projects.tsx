import React from "react";
import { projects } from "../data/projects";
import PBox from "./PBox";

type Program = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

const Projects = () => {
  return (
    <div className="flex w-11/12 px-4 mx-auto flex-col mt-24 gap-8 mb-8">
      <h3 className="hsec">CHECK OUR SOME OF MY PROJECTS —</h3>
      <div className="flex justify-between flex-wrap gap-3 ">
        {projects.map(({ id, title, desc, image }: Program) => (
          <PBox title={title} desc={desc} image={image} key={id} />
        ))}

        {/* <PBox />
        <PBox />
        <PBox />
        <PBox />
        <PBox />
        <PBox /> */}
      </div>
    </div>
  );
};

export default Projects;
