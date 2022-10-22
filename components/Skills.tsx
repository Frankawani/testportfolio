import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" relative min-h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:p-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      {" "}
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
      </h3>
      <h4 className=" absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm hidden md:inline-flex">
        Hover over a skill to see proficiency
      </h4>
      <div className=" grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
