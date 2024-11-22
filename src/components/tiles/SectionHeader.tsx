import React from "react";

interface SectionHeaderScheme {
  text: string;
}

export const SectionHeader: React.FC<SectionHeaderScheme> = ({ text }) => {
  return (
    <h1 className="text-[#535C91] font-bold lg:text-[50px] w-full border-header lg:pb-5 mt-20 pb-1 text-[26px]">
      {text}
    </h1>
  );
};
