import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { Link } from "react-scroll";
import { GITHUB_LINK, LINKEDIN_LINK } from "../helpers";
import banner from "../assets/banner.png";

export const Banner = () => {
  return (
    <section id="home" className="h-screen overflow-hidden">
      <div className="container mx-auto pt-20 lg:pt-32">
        <div className="flex flex-col gap-y-8 lg:mb-32 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn({ direction: "right", delay: 0.3 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-[35px] font-bold mb-2 leading-[0.5] lg:text-[80px]"
            >
              NextGen-Solution
            </motion.h1>
            <motion.div
              variants={fadeIn({ direction: "right", delay: 0.4 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="mb-3 text-[26px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
            >
              <TypeAnimation
                className="text-[#9290C3]"
                wrapper="span"
                repeat={Infinity}
                sequence={["Frontend Developer", 2000, "UI/UX Designer", 2000]}
              />
            </motion.div>
            <motion.p
              variants={fadeIn({ direction: "right", delay: 0.5 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="mb-3 max-w-lg mx-auto lg:mx-0"
            >
              Tworzenie interaktywnych i estetycznych stron internetowych.
              Projektuję i wdrażam rozwiązania, które łączą funkcjonalność z
              atrakcyjnym designem. Moim celem jest tworzenie stron, które nie
              tylko przyciągają wzrok, ale także zapewniają użytkownikowi
              wygodne i płynne doświadczenie. Zawsze staram się dopasować
              projekt do indywidualnych potrzeb klienta, dbając o to, by efekt
              końcowy był zgodny z jego oczekiwaniami.
            </motion.p>
            <motion.div
              variants={fadeIn({ direction: "right", delay: 0.6 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0"
            >
              <Link
                to="work"
                smooth={true}
                offset={-80}
                className="bg-[#535C91] flex items-center font-primary font-bold rounded-full btn-lg hover-button"
              >
                Portfolio
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn({ direction: "right", delay: 0.7 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                className="icon-hover"
                rel="noreferrer"
                target="_blank"
                href={GITHUB_LINK}
              >
                <FaGithub />
              </a>
              <a
                className="icon-hover"
                rel="noreferrer"
                target="_blank"
                href={LINKEDIN_LINK}
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.5 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="hidden lg:flex  flex-1 max-w-[320px] lg:max-w-[500px]"
          >
            <img src={banner} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
