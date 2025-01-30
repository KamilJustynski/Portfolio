import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import { FaArrowRight } from "react-icons/fa";

export interface WorkTileScheme {
  title: string;
  image: string;
  description: string;
  button: string;
  animation: "up" | "down" | "left" | "right";
  delay: number;
  link: string;
}

export const WorkTile: React.FC<WorkTileScheme> = ({
  title,
  image,
  description,
  button,
  animation,
  delay,
  link,
}) => {
  return (
    <motion.div
      variants={fadeIn({ direction: animation, delay: delay })}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="lg:w-[500px] lg:h-[450px] border-box rounded-2xl group bg-[#DFEBF6]"
    >
      <div className="p-5 text-center">
        
          <h5 className="mb-2 text-2xl font-bold font-primary tracking-tight text-[#1C7BD5]">
            {title}
          </h5>
        
        <img
          className="rounded-lg group-hover:scale-105 duration-300 mx-auto mt-5 mb-5"
          src={image}
          alt=""
        />
        <p className="mb-3 font-normal text-black/70">{description}</p>
        <a
          target="_blank"
          rel="noreferrer"
          href={link}
          className="font-primary bg-[#1C7BD5] hover:scale-105 duration-150 inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-full gap-2"
        >
          {button}
          <FaArrowRight />
        </a>
      </div>
    </motion.div>
  );
};
