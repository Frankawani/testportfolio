import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  skill: Skill;
};

function Skill({ skill }: Props) {
  return (
    <div className=" group relative flex cursor-pointer ">
      <motion.img
        src={urlFor(skill?.image).url()}
        className=" rounded-full border border-gray-500 object-cover h-16 w-16 xl:h-20 xl:w-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 xl:h-20 xl:w-20 rounded-full z-0">
        <div className=" flex items-center justify-center h-full">
          <p className=" md:text-2xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
