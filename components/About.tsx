import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div className=" relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-5xl  px-10 justify-evenly mx-auto items-center">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className=" h-56 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px] xl:mt-36 flex-shrink-0 -mb-20 md:mb-10 mt-44 md:mt-5"
        src={urlFor(pageInfo?.profilePic).url()}
      />

      <div className=" space-y-10 px-0 md:px-10 mt-24 md:mt-0  ">
        <h4 className=" text-3xl font-semibold md:text-4xl">
          Here is a{" "}
          <span className=" underline decoration-[#FFA500]/50">little</span>{" "}
          background
        </h4>
        <p className=" text-sm">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
