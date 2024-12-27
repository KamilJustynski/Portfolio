import { MotionServicesTile } from "./tiles/MotionServicesTile";
import { SERVICES_DATA } from "../helpers";
import { SectionHeader } from "./tiles/SectionHeader";

export const Services = () => {
  return (
    <section id="services" className="lg:pb-48 overflow-hidden bg-[#EDF2F7]">
      <div className="container mx-auto">
        <SectionHeader text="USŁUGI" />
        <div className="flex flex-col lg:gap-x-10 gap-y-8 mt-10 lg:text-start lg:justify-between lg:flex-row">
          {SERVICES_DATA.map((data, index) => (
            <MotionServicesTile key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};
