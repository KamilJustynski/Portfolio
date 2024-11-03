import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen justify-center items-center">
          <motion.div
            variants={fadeIn({ direction: "right", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about hidden lg:flex mb-52 lg lg:mb-36 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 justify-center items-center mt-8"
          >
            <h2 className="h2 text-accent">O mnie</h2>
            <h3 className="h3 mb-4">
              Jestem freelancerem Front-end Developer z ponad 2-letnim
              doświadczeniem.
            </h3>
            <p className="mb-6">
              Jestem freelancerem specjalizującym się w tworzeniu stron
              internetowych dostosowanych do potrzeb każdego klienta. Moje
              podejście do pracy opiera się na ścisłej współpracy i zrozumieniu
              wizji każdego z moich klientów.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projekty
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Doświadczenie <br />
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Klienci
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
