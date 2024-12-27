import { SectionHeader } from "./tiles/SectionHeader";
import { ABOUT_DATA } from "../helpers";
import { AboutTile } from "./tiles/AboutTile";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export const About = () => {
  return (
    <section id="about" className="lg:mb-32 overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader text="O MNIE" />
        <motion.div
          variants={fadeIn({ direction: "right", delay: 0.3 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="h-auto pb-5"
        >
          {ABOUT_DATA.map((data, index) => (
            <AboutTile {...data} key={index} />
          ))}
          <motion.div
            variants={fadeIn({ direction: "right", delay: 0.9 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full flex items-center justify-center lg:justify-start"
          >
            <Link
              smooth={true}
              to="contact"
              offset={-80}
              className="bg-[#1C7BD5] w-[150px] flex items-center font-primary font-bold rounded-full btn-lg hover:scale-105 duration-150"
            >
              Kontakt
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
