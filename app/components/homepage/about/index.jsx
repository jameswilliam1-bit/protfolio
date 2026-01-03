// @flow strict

import { personalData } from "@/utils/data/personal-data";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-[0_0_30px_0_rgba(0,0,0,0.3)] p-6 lg:p-10">
        <div className="w-[93%] mx-auto">
          <p className="font-medium mb-4 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
