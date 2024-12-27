import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { Link } from "react-scroll";
import { GITHUB_LINK, LINKEDIN_LINK } from "../helpers";

export const Banner = () => {
  return (
    <section id="home" className="h-auto py-48 overflow-hidden bg-[#EDF2F7]">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="flex flex-col gap-y-8 text-center lg:text-left">
          <div className="flex-1">
            <motion.h1
              variants={fadeIn({ direction: "right", delay: 0.3 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-[35px] font-bold mb-2 leading-[0.5] text-center text-black/70 lg:text-[80px]"
            >
              NextGen-Solution
            </motion.h1>
            <motion.div
              variants={fadeIn({ direction: "right", delay: 0.4 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="mb-3 text-[26px] lg:text-[50px] text-center font-secondary font-semibold uppercase leading-[1]"
            >
              <TypeAnimation
                className="text-[#1C7BD5]"
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
              className="mb-3  mx-auto text-black/70 text-center"
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
              className="flex justify-center gap-x-6 items-center mb-6"
            >
              <Link
                to="work"
                smooth={true}
                offset={-80}
                className="bg-[#1C7BD5] flex items-center font-primary font-bold rounded-full btn-lg hover-button"
              >
                Portfolio
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn({ direction: "right", delay: 0.7 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex justify-center gap-x-6 text-[20px]"
            >
              <a
                className="icon-hover text-black/70"
                rel="noreferrer"
                target="_blank"
                href={GITHUB_LINK}
              >
                <FaGithub />
              </a>
              <a
                className="icon-hover text-black/70"
                rel="noreferrer"
                target="_blank"
                href={LINKEDIN_LINK}
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

