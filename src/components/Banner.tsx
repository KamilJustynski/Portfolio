import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { Link } from "react-scroll";
import { GITHUB_LINK, LINKEDIN_LINK } from "../helpers";
import banner from '../assets/banner.png'

export const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[70vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 mb-60 lg:mb-0 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn({ direction: "right", delay: 0.3 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[80px]"
            >
              NextGen-Solution
            </motion.h1>
            <motion.div
              variants={fadeIn({ direction: "right", delay: 0.4 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
                sequence={["Developer", 2000, "Designer", 2000]}
              />
            </motion.div>
            <motion.p
              variants={fadeIn({ direction: "right", delay: 0.5 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Creating interactive and aesthetic websites is my passion. I
              design and implement solutions that combine functionality with
              attractive design.
            </motion.p>
            <motion.div
              variants={fadeIn({ direction: "right", delay: 0.6 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">
                <Link to="contact" smooth={true}>
                  Contact me
                </Link>
              </button>
              <Link to="work" smooth={true} className="text-gradient btn-link">
                Portfolio
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn({ direction: "right", delay: 0.7 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a rel="noreferrer" target="_blank" href={GITHUB_LINK}>
                <FaGithub />
              </a>
              <a rel="noreferrer" target="_blank" href={LINKEDIN_LINK}>
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.5 })}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex  flex-1 max-w-[320px] lg:max-w-[400px]"
          >
            <img src={banner} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
