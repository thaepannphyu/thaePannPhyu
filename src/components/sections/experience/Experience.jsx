import React from "react";
import "./experience.css";
import Banner from "../../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Experience = () => {
  return (
    <div className=" bg-[#FFFFFF] dark:bg-[#000000] duration-200 pt-20">
      <div className=" w-[90%] mx-auto">
        {/* <h2 className=" text-left text-3xl font-bold dark:text-white  ">
         
        </h2> */}
        <Banner title="Experience" />
        <div className=" flex flex-col gap-5 mt-8">
          {/* edu pro  */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" bg-[#f7f7ff] dark:bg-[#0b0b13] rounded p-5 flex flex-col md:flex-row items-start gap-3">
            <div className=" w-full md:w-[30%] flex flex-col gap-1 items-start">
              <h2 className=" font-semibold text-xl dark:text-white">
                Jnr . Front-end Developer
              </h2>
              <h2 className=" italic text-[16px] text-slate-600 dark:text-[#ffffffcc]">
                MMS IT / Workshop
              </h2>
              <h2 className=" text-slate-600 text-[16px] dark:text-[#ccc]">
                June 2023 - Present
              </h2>
              <button className="text-[16px]  dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] primary-bg px-3 py-1 rounded text-white">
                Intern
              </button>
            </div>
            <div className=" w-full md:w-[70%]">
              <h2 className=" font-semibold text-xl dark:text-white">
                Edu-Pro
              </h2>
              <p className="text-[16px] text-slate-600 dark:text-[#ccc]">
                Created by team.Currently, this project isn't allow to be
                dynamic.But this static website will give luxuary Education
                Website Feeling.The design isn;t ours.We only focus on
                development.
              </p>
            </div>
          </div>
          {/* edu pro dashboard  */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className=" bg-[#f7f7ff] dark:bg-[#0b0b13] rounded p-5 flex flex-col md:flex-row items-start gap-3">
            <div className=" w-full md:w-[30%] flex flex-col gap-1 items-start">
              <h2 className=" font-semibold text-xl dark:text-white">
                Jnr . React Developer
              </h2>
              <h2 className=" italic text-slate-600 text-[16px] dark:text-[#ffffffcc]">
                MMS IT / Workshop
              </h2>
              <h2 className=" text-slate-600 text-[16px] dark:text-[#ccc]">
                June 2023 - Present
              </h2>
              <button className="text-[16px] primary-bg px-3 py-1 rounded  text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms]">
                Intern
              </button>
            </div>
            <div className=" w-full md:w-[70%]">
              <h2 className=" font-semibold text-xl dark:text-white">
                Edu-Pro-Dashboard
              </h2>
              <p className="text-[16px] text-slate-600 dark:text-[#ccc]">
                Created Dashboard for Edu-Pro project.This project include
                setting to change Background color which allows to change theme
                as needed.I developed this project with my Team. Design of this
                project isn't ours.
              </p>
            </div>
          </div>
          {/* portfolio  */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className=" bg-[#f7f7ff] dark:bg-[#0b0b13] rounded p-5 flex flex-col md:flex-row items-start gap-3">
            <div className=" w-full md:w-[30%] flex flex-col gap-1 items-start">
              <h2 className=" font-semibold text-xl dark:text-white">
                Jnr . Front-end Developer
              </h2>
              <h2 className=" italic text-slate-600 text-[16px] dark:text-[#ffffffcc]">
                MMS IT / Workshop
              </h2>
              <h2 className=" text-slate-600 text-[16px] dark:text-[#ccc]">
                June 2023 - Present
              </h2>
              <button className="text-[16px] primary-bg px-3 py-1 rounded  text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms]">
                Self-Develop
              </button>
            </div>
            <div className=" w-full md:w-[70%]">
              <h2 className=" font-semibold text-xl dark:text-white">
                Portfolio
              </h2>
              <p className="text-[16px] text-slate-600 dark:text-[#ccc]">
                Pofolio is a must for Every Personal Project.I can create and
                develop your porfolio.
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
