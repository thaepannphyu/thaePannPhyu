import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className=" bg-[#FFFFFF] dark:bg-[#000000] duration-200 pt-20">
      <div className=" w-[90%] mx-auto">
        <h2 className=" text-left text-3xl font-bold dark:text-white mb-8 ">
          Experience
        </h2>
        <div className=" flex flex-col gap-5">
          {/* edu pro  */}
          <div className=" bg-[#f7f7ff] dark:bg-[#0b0b13] rounded p-5 flex flex-col md:flex-row items-start gap-3">
            <div className=" w-full md:w-[30%] flex flex-col gap-1 items-start">
              <h2 className=" font-semibold text-xl dark:text-white">
                Jnr . Front-end Developer
              </h2>
              <h2 className=" italic text-slate-600 dark:text-[#ffffffcc]">
                MMS IT / Workshop
              </h2>
              <h2 className=" text-slate-600 dark:text-[#ffffffcc]">
                June 2023 - Present
              </h2>
              <button className=" primary-bg px-3 py-1 rounded text-white font-semibold">
                Intern
              </button>
            </div>
            <div className=" w-full md:w-[70%]">
              <h2 className=" font-semibold text-xl dark:text-white">
                Edu-Pro
              </h2>
              <p className=" text-slate-600 dark:text-[#ffffffcc]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                quam nesciunt labore veritatis minus delectus iure assumenda
                optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                At ratione nulla hic.{" "}
              </p>
            </div>
          </div>
          {/* edu pro dashboard  */}
          <div className=" bg-[#f7f7ff] dark:bg-[#0b0b13] rounded p-5 flex flex-col md:flex-row items-start gap-3">
            <div className=" w-full md:w-[30%] flex flex-col gap-1 items-start">
              <h2 className=" font-semibold text-xl dark:text-white">
                Jnr . React Developer
              </h2>
              <h2 className=" italic text-slate-600 dark:text-[#ffffffcc]">
                MMS IT / Workshop
              </h2>
              <h2 className=" text-slate-600 dark:text-[#ffffffcc]">
                June 2023 - Present
              </h2>
              <button className=" primary-bg px-3 py-1 rounded text-white font-semibold">
                Intern
              </button>
            </div>
            <div className=" w-full md:w-[70%]">
              <h2 className=" font-semibold text-xl dark:text-white">
                Edu-Pro-Dashboard
              </h2>
              <p className=" text-slate-600 dark:text-[#ffffffcc]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                quam nesciunt labore veritatis minus delectus iure assumenda
                optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                At ratione nulla hic.{" "}
              </p>
            </div>
          </div>
          {/* portfolio  */}
          <div className=" bg-[#f7f7ff] dark:bg-[#0b0b13] rounded p-5 flex flex-col md:flex-row items-start gap-3">
            <div className=" w-full md:w-[30%] flex flex-col gap-1 items-start">
              <h2 className=" font-semibold text-xl dark:text-white">
                Jnr . Front-end Developer
              </h2>
              <h2 className=" italic text-slate-600 dark:text-[#ffffffcc]">
                MMS IT / Workshop
              </h2>
              <h2 className=" text-slate-600 dark:text-[#ffffffcc]">
                June 2023 - Present
              </h2>
              <button className=" primary-bg px-3 py-1 rounded text-white font-semibold">
                Self-Develop
              </button>
            </div>
            <div className=" w-full md:w-[70%]">
              <h2 className=" font-semibold text-xl dark:text-white">
                Portfolio
              </h2>
              <p className=" text-slate-600 dark:text-[#ffffffcc]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                quam nesciunt labore veritatis minus delectus iure assumenda
                optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                At ratione nulla hic.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* hr  */}
      <div className=" w-[90%] mx-auto background bg-[url(https://nairo.ibthemespro.com/img/border-dark.png)] dark:invert"></div>
    </div>
  );
};

export default Experience;
