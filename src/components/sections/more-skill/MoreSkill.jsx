import React from "react";
import "./test.css";
import Test from "./Test";
import Banner from "../../Banner/Banner";

const MoreSkill = () => {
  return (
    <div className=" w-full bg-[#f7f7ff] dark:bg-[#0e0e17] duration-200 pb-10">
      <div className=" w-[90%]  mx-auto">
        {/* <h2 className=" text-left text-3xl font-bold dark:text-white">
          
        </h2> */}
        <Banner title="My Best Skills" />
        <div className="  mt-12">
          {/* Communication  */}
          <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 main gap-5">
            {/* <h2 className=" border-4 border-yellow-800 rounded-full w-12 h-12 flex justify-center items-center"><span className=" border border-red-400 rounded-full w-10 h-10 flex justify-center items-center">90%</span></h2> */}
            <p className=" flex flex-col justify-center items-center gap-3 font-semibold text-gray-500 dark:text-[#ffffffcc]">
              <Test progress={40} />
              <span className="">Communication</span>
            </p>
            <p className=" flex flex-col justify-center items-center gap-3 font-semibold text-gray-500 dark:text-[#ffffffcc]">
              <Test progress={60} /> <span className="">Teamwork</span>{" "}
            </p>
            <p className=" flex flex-col justify-center items-center gap-3 font-semibold text-gray-500 dark:text-[#ffffffcc]">
              <Test progress={60} /> <span className=" "> Problem-solving</span>
            </p>
            <p className=" flex flex-col justify-center items-center gap-3 font-semibold text-gray-500 dark:text-[#ffffffcc]">
              <Test progress={60} /> <span className=" ">Fast Learning</span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* hr  */}
      <div className=" w-[90%] pb-0 mt-14 mx-auto background bg-[url(https://nairo.ibthemespro.com/img/border-dark.png)] dark:invert">
      </div>

    </div>
  );
};

export default MoreSkill;
