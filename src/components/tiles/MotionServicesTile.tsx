import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

export interface MotionServicesTileScheme {
  title: string;
  description: string;
  animation: "up" | "down" | "left" | "right";
  image?: string;
  delay: number;
}

export const MotionServicesTile: React.FC<MotionServicesTileScheme> = ({
  title,
  description,
  animation,
  image,
  delay,
}) => {
  return (
    <motion.div
      variants={fadeIn({ direction: animation, delay: delay })}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="flex-1 text-center h-[550px] max-h-[550px]"
    >
      <div className="border-box p-5 h-full rounded-2xl flex bg-[#1c7bd510]">
        <div className="lg:min-h-[410px]">
          <h4 className="text-[20px] mb-5 tracking-wider font-primary font-bold text-[#1C7BD5] lg:mb-6">
            {title}
          </h4>
          {image && (
            <img
              className="mb-5 rounded-2xl mx-auto"
              src={image}
              alt="Services"
            />
          )}
          <p className="font-secondary leading-tight text-black/70 mb-3">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
