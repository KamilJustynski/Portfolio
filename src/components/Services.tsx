import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { Link } from "react-scroll";

interface ServicesScheme {
  name: string;
  description: string;
  link: string;
}

const services = [
  {
    name: "Developer",
    description:
      "Tworzę nowoczesne i responsywne aplikacje internetowe, wykorzystując technologie takie jak React, Next, TailwindCSS i TypeScript.",
    link: "Learn more",
  },
  {
    name: "UI/UX Design",
    description:
      "W procesie projektowania UI/UX skupiam się na użytkowniku. Rozumiem, jak ważne jest, aby strony były atrakcyjne wizualnie, a jednocześnie funkcjonalne.",
    link: "Learn more",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn({ direction: "right", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-top bg-no-repeat mix-blend-lighten mb-5 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-3">Czym się zajmuję</h2>
            <h3 className="h3 max-w-[455px] mb-5">
              Front-end Developer <br />
              UI/UX Designer
            </h3>
            <button className="btn btn-sm">
              <Link to="work" smooth={true}>
                Moje projekty
              </Link>
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.5 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service: ServicesScheme, index: number) => {
                return (
                  <div
                    className="border-b border-white/20 h-auto lg:h-[150px] mb-[25px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-1 lg:mb-6">
                        {service.name}
                      </h4>
                      <p className="font-secondary leading-tight mb-3">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
