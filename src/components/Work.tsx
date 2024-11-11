import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { GITHUB_LINK } from "../helpers";

export const Work = () => {
  return (
    <section
      id="work"
      className="section mt-16 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 items-center justify-center">
          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col lg:flex-row gap-y-3 justify-between mb-10 lg:mb-0 lg:gap-x-32 items-center"
          >
            <div className="flex flex-col flex-1 text-center lg:text-left">
              <h2 className="h2 leading-tight text-accent text-center lg:text-left">
                Moja ostatnia <br />
                relizacja
              </h2>
              <p className="max-w-sm mb-8 text-center lg:text-left">
                Mój ostatni projekt, który wykonałem. Podczas tworzenia skupiłem
                się na dostarczonym projekcie graficznym i wymaganiach klienta.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a href={GITHUB_LINK} rel="noreferrer" target="_blank">
                  <button className="btn btn-sm">Zobacz więcej</button>
                </a>
              </div>
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.meblimar.com/"
              className="group flex flex-1 relative overflow-hidden border-2 border-white/50 lg:h-[300px] mt-5 lg:mt-10 rounded-xl lg:w-[700px] max-w-[700px]"
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div className="w-full h-full pb-6 justify-center flex flex-col pt-5 items-center">
                <h2 className="h2 text-gradient">MEBLIMAR</h2>
                <p className="text-center max-w-[500px] px-10">
                  Strona internetowa dla firmy produkującej pod wymiar. Projekt
                  dostarczony przez klienta.
                </p>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50">
                <span className="text-gradient">Developer</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Meblimar</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
