import React from "react";
import Skill from "./Skill";
import Education from "./Education";

const SkillAndEducation = () => {
  return (
    <div className=" w-[90%] mx-auto my-24">
      <h2 className=" text-left text-3xl font-bold">
        Education & Skills
      </h2>
      <div className=" flex flex-col lg:flex-row gap-12 lg:gap-[7%] mt-10">
        {/* education  */}
        <div className=" lg:w-[33%] md:w-full bg-[#f7f7ff] rounded p-3">
          <Education />
        </div>
        {/* skill  */}
        <div className=" lg:w-[60%] md:w-full">
          <Skill />
        </div>
      </div>
      {/* <div>
        <img className=" mt-10 w-full text-sm " src="https://nairo.ibthemespro.com/img/border-dark.png" alt="" />
      </div> */}
    </div>
  );
};

export default SkillAndEducation;
