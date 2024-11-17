import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

export interface MotionServicesTileScheme {
  title: string;
  description: string;
  animation: "up" | "down" | "left" | "right";
  image?: string;
}

export const MotionServicesTile: React.FC<MotionServicesTileScheme> = ({
  title,
  description,
  animation,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn({ direction: animation, delay: 0.5 })}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="flex-1 text-center"
    >
      <div className="border-box p-5 rounded-x rounded-2xl h-auto flex">
        <div className="lg:min-h-[410px]">
          <h4 className="text-[20px] mb-5 tracking-wider font-primary font-bold lg:mb-6">
            {title}
          </h4>
          {image && (
            <img
              className="mb-5 rounded-2xl mx-auto"
              src={image}
              alt="Services"
            />
          )}
          <p className="font-secondary leading-tight mb-3">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
