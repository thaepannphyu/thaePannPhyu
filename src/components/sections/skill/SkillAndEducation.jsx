import React from "react";
import Skill from "./Skill";
import Education from "./Education";

const SkillAndEducation = () => {
  return (
    <div className=" bg-[#FFFFFF] dark:bg-[#000000] duration-200">
      <div className=" w-[90%] mx-auto  ">
        <h2 className=" text-left text-3xl font-bold dark:text-white">
          Education & Skills
        </h2>
        <div className=" flex flex-col lg:flex-row gap-12 lg:gap-[7%] mt-10">
          {/* education  */}
          <div className=" lg:w-[33%] md:w-full bg-[#f7f7ff] dark:bg-[#0b0b13] rounded p-3">
            <Education />
          </div>
          {/* skill  */}
          <div className=" lg:w-[60%] md:w-full">
            <Skill />
          </div>
        </div>
        {/* hr  */}
        <div className=" w-[90%] pb-0 mt-16 mx-auto background bg-[url(https://nairo.ibthemespro.com/img/border-dark.png)] dark:invert"></div>
      </div>
    </div>
  );
};

export default SkillAndEducation;
