import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

export interface AboutTileScheme {
  text: string;
  animation: "up" | "down" | "left" | "right";
  delay: number;
}

export const AboutTile: React.FC<AboutTileScheme> = ({
  text,
  animation,
  delay,
}) => {
  return (
    <motion.div
      variants={fadeIn({ direction: animation, delay: delay })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <p className="text-lg text-center lg:text-start text-[#fff] mb-6 mt-10">
        {text}
      </p>
    </motion.div>
  );
};
