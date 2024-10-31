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
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Front-end Developer <br /> and <br /> UI/UX Designer
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
                    className="border-b border-white/20 h-[150px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {service.name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {service.link}
                      </a>
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
