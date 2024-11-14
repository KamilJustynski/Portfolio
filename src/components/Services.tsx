import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export const Services = () => {
  return (
    <section id="services" className="lg:mb-48">
      <div className="container mx-auto">
        <h1 className="text-accent font-bold lg:text-[50px] w-full border-b-2 border-white/50 lg:pb-5 mt-20 pb-1 text-[26px]">
          USUGI
        </h1>
        <div className="flex flex-col lg:gap-x-20 mt-10 lg:h-[300px] lg:text-start lg:justify-between lg:flex-row">
          <motion.div
            variants={fadeIn({ direction: "right", delay: 0.5 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1 text-center"
          >
            <div className="border-2 p-5 border-white/50 rounded-xl lg:text-start h-auto lg:h-full mb-[25px] flex">
              <div className="max-w-[476px]">
                <h4 className="text-[20px] mb-5 tracking-wider font-primary font-bold mb-1 lg:mb-6">
                  UI/UX Design
                </h4>
                <p className="font-secondary leading-tight mb-3">
                  W procesie projektowania UI/UX skupiam się na użytkowniku.
                  Stawiam na intuicyjne interfejsy, które prowadzą użytkownika
                  przez stronę w sposób naturalny i bez zbędnych komplikacji.
                  Moje projekty łączą estetykę z funkcjonalnością, aby
                  użytkownicy mogli w łatwy sposób znaleźć to, czego potrzebują.
                  Zawsze testuję i dostosowuję projekty, aby były one jak
                  najbardziej dostępne i wygodne w użytkowaniu na różnych
                  urządzeniach.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.5 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1 text-center"
          >
            <div className="border-2 p-5 border-white/50 rounded-xl lg:text-start h-auto lg:h-full mb-[25px] flex">
              <div className="max-w-[476px]">
                <h4 className="text-[20px] tracking-wider font-primary font-bold mb-1 lg:mb-6">
                  Developer
                </h4>
                <p className="font-secondary leading-tight mb-3">
                  Tworzę nowoczesne i responsywne aplikacje internetowe,
                  wykorzystując technologie takie jak React, Next, TailwindCSS i
                  TypeScript. Dbam o to, by kod był optymalny, łatwy w
                  utrzymaniu oraz skalowalny. Zawsze stawiam na wysoką wydajność
                  i bezpieczeństwo aplikacji, by zapewnić użytkownikom jak
                  najlepsze doświadczenia. Śledzę nowinki technologiczne, aby w
                  swoich projektach korzystać z najnowszych rozwiązań i
                  najlepszych praktyk programistycznych.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
