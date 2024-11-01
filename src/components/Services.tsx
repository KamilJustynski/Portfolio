import { BsArrowUpRight } from "react-icons/bs";
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
    name: "Programming",
    description:
      "I create modern and responsive web applications, using technologies such as React, Next, TailwindCSS. My projects are always tailored to the client's needs, and I treat each order individually.",
    link: "Learn more",
  },
  {
    name: "UI/UX Design",
    description:
      "In the UI/UX design process, I focus on the user. I understand how important it is for sites to be visually appealing yet functional. I conduct analysis and research that allows me to create user-friendly interfaces.",
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
            <h2 className="h2 text-accent mb-3">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-5">
              Front-end Developer and UI/UX Designer
            </h3>
            <button className="btn btn-sm">
              <Link to="work" smooth={true}>
                See my projects
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
                    className="border-b border-white/20 h-auto mb-[25px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-1 lg:mb-6">
                        {service.name}
                      </h4>
                      <p className="font-secondary leading-tight">
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
