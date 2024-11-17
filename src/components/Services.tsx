import { MotionServicesTile } from "./tiles/MotionServicesTile";
import { SERVICES_DATA } from "../helpers";

export const Services = () => {
  return (
    <section id="services" className="lg:mb-48 overflow-hidden">
      <div className="container mx-auto">
        <h1 className="text-[#535C91] font-bold lg:text-[50px] w-full border-header lg:pb-5 mt-20 pb-1 text-[26px]">
          USUGI
        </h1>
        <div className="flex flex-col lg:gap-x-10 gap-y-8 mt-10 lg:text-start lg:justify-between lg:flex-row">
          {SERVICES_DATA.map((data, index) => {
            return <MotionServicesTile key={index} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};
