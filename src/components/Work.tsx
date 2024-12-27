import { WorkTile } from "./tiles/WorkTile";
import { WORK_DATA } from "../helpers";
import { SectionHeader } from "./tiles/SectionHeader";

export const Work = () => {
  return (
    <section id="work" className="lg:pb-48 overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader text="REALIZACJE" />
        <div className="flex flex-col gap-y-8 lg:flex-row mt-10 gap-x-10 items-center justify-center">
          {WORK_DATA.map((data, index) => {
            return <WorkTile key={index} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};
