import React from "react";
import { projects } from "../data/projects";
import PBox from "./PBox";

type Program = {
  id: number;
  title: string;
  desc: string;
  image: string;
  link: string;
};

const Projects = () => {
  return (
    <div className="flex w-11/12 px-4 mx-auto flex-col mt-24 gap-8 mb-8">
      <h3 className="hsec">MY PROJECTS —</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-11 ">
        {projects.map(({ id, title, desc, image, link }: Program) => (
          <PBox title={title} desc={desc} image={image} key={id} link={link} />
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
