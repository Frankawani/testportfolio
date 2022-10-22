import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className=" flex flex-col bg-[#292929] rounded-lg items-center space-y-3 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[600px] snap-center p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden sm:h-95 xl:h-[400px] md:h-[200px] mt-[100px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(experience?.companyImage).url()}
        className=" h-20 w-25 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
      />

      <div className=" px-0 md:px-10">
        <h4 className=" text-2xl font-light sm:text-sm">
          Frontend Web developer
        </h4>
        <p className=" font-bold text-1xl mt-1">Upwork freelancer</p>
        <div className=" flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className=" h-10 w-10 rounded-full"
              src={urlFor(technology?.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className=" uppercase py-2 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className=" list-disc space-y-2 ml-5 text-sm max-h-96 overflow-Y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
