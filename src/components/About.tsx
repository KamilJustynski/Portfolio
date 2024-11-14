import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="pt-28 lg:pt-0" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:text-start lg:flex-row lg:items-center lg:gap-x-32 lg:gap-y-0 h-auto justify-center items-center">
          <motion.div
            variants={fadeIn({ direction: "right", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1 bg-about hidden lg:mr-10 lg:flex lg:mb-44 bg-contain bg-no-repeat h-[500px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1 justify-center items-center"
          >
            <h2 className="h2 text-accent text-center lg:text-start font-bold">O mnie</h2>
            <h3 className="font-semibold text-[18px] text-center lg:text-start lg:text-[26px] mb-6">
              Jestem freelancerem Front-end Developer z ponad 2-letnim
              doświadczeniem.
            </h3>
            <p className="text-center mb-6 lg:text-start">
              Jestem freelancerem specjalizującym się w tworzeniu stron
              internetowych dostosowanych do potrzeb każdego klienta. Moje
              podejście do pracy opiera się na ścisłej współpracy i zrozumieniu
              wizji każdego z moich klientów. Dbam o każdy detal, aby strony nie tylko dobrze wyglądały, ale także były funkcjonalne i łatwe w obsłudze. Dzięki nowoczesnym technologiom i indywidualnemu podejściu, tworzę projekty, które wyróżniają się na tle konkurencji.
            </p>
            <div className="flex gap-x-6 text-center lg:text-start lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : 2}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projekty
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : 2}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Doświadczenie <br />
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : 2}
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
