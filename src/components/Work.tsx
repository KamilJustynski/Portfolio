import { WorkTile } from "./tiles/WorkTile";
import { WORK_DATA } from "../helpers";

export const Work = () => {
  return (
    <section id="work" className="lg:pb-48 overflow-hidden">
      <div className="container mx-auto">
        <h1 className="text-[#535C91] font-bold lg:text-[50px] w-full border-header lg:pb-5 mt-20 pb-1 text-[26px]">
          REALIZACJE
        </h1>
        <div className="flex flex-col gap-y-8 lg:flex-row mt-10 gap-x-10 items-center justify-center">
          {WORK_DATA.map((data, index) => {
            return <WorkTile key={index} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};
