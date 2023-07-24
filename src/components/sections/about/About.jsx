import React from "react";
import kzt from "../../../assets/kzt/4.png";
import "./about.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { SiNetlify } from "react-icons/si";

const About = () => {
  return (
    <>
      <div className=" flex justify-center py-24 bg-[#f7f7ff] dark:bg-[#0e0e17] duration-200">
        <div className=" w-[95%] max-lg:w-[90%] flex justify-center item-center max-lg:flex-col ">
          {/* left img  */}
          <div className="w-[40%] max-lg:w-full flex flex-col justify-center item-center gap-8">
            {/* img circle  */}
            <div className="max-lg:flex max-lg:justify-center">
              <div className="relative w-[280px] h-[280px] max-[330px]:w-[250px] max-[330px]:h-[250px] max-[300px]:w-[220px] max-[300px]:h-[220px] max-[283px]:w-[190px] max-[283px]:h-[190px]">

                <div className="bg-gray-900 w-[280px] h-[280px] max-[330px]:w-[250px] max-[330px]:h-[250px] max-[300px]:w-[220px] max-[300px]:h-[220px] max-[283px]:w-[190px] max-[283px]:h-[190px] lg:ml-3 rounded-full border-4 border-blue-600 overflow-hidden ">
                  <img src={kzt} alt="" className="w-[230px] max-[330px]:w-[200px] max-[300px]:w-[170px] max-[283px]:w-[150px] object-cover relative top-1 max-[330px]:top-2 left-8" />
                {/* icon  */}
                <div className="">
                    <div className=" bg-white w-8 h-8 rounded-full p-[2px] absolute bottom-[8%] left-[16%] max-lg:left-[11%]">
                        <p className=" bg-[#0b0b13] w-full h-full flex justify-center items-center text-lg text-white p-1 rounded-full">
                        <BiLogoFacebook />
                        </p>
                    </div>
                    <div className=" bg-white w-8 h-8 rounded-full p-[2px] absolute bottom-[-2%] left-[30%] max-lg:left-[25%] max-lg:bottom-[-1%]">
                        <p className=" bg-[#0b0b13] w-full h-full flex justify-center items-center text-lg text-white p-1 rounded-full">
                        <BiLogoTwitter />
                        </p>
                    </div>
                    <div className= " bg-white w-8 h-8 rounded-full p-[2px] absolute bottom-[-5%] right-[42%] max-lg:right-[47%] max-[300px]:right-[45%]">
                        <p className=" bg-[#0b0b13] w-full h-full flex justify-center items-center text-lg text-white p-1 rounded-full">
                        <BiLogoInstagram />
                        </p>
                    </div>
                    <div className=" bg-white w-8 h-8 rounded-full p-[2px] absolute bottom-[-2%] right-[25%] max-lg:right-[30%]">
                        <p className=" bg-[#0b0b13] w-full h-full flex justify-center items-center text-lg text-white p-1 rounded-full">
                        <BiLogoGithub />
                        </p>
                    </div>
                    <div className=" bg-white w-8 h-8 rounded-full p-[2px] absolute bottom-[6%] right-[9%] max-lg:right-[14%] max-lg:bottom-[5%]">
                        <p className=" bg-[#0b0b13] w-full h-full flex justify-center items-center text-lg text-white p-1 rounded-full">
                        <SiNetlify />
                        </p>
                    </div>
                </div>

                </div>
              </div>
            </div>

            <div className=" text-center w-[310px] max-lg:w-full max-lg:mb-12 ">
              <h1 className=" text-gray-800 dark:text-[#9e9ea0]">
                Frontend Developer
              </h1>
              <h1 className=" text-2xl text-[#0b0b13] dark:text-white font-semibold tracking-wide">
                Khine Zin Thin
              </h1>
            </div>
            
          </div>

          {/*right biography */}
          <div className=" w-[55%] max-lg:w-full text-left">
            <div>
              <h1 className="text-3xl text-black dark:text-white font-bold">
                Biography
              </h1>

              <p className=" text-gray-800 dark:text-[#9e9ea0] text-[15px] leading-6 mt-7 mb-5 max-lg:mt-8">
                I'm a Freelancer Front-end Developer with over 3 years of
                experience. I'm from San Francisco. I code and create web
                elements for amazing people around the world. I like work with
                new people.
              </p>

              <p className=" text-gray-800 dark:text-[#9e9ea0] text-[15px] leading-6 mb-7 max-lg:mb-8">
                I'm a Freelancer Front-end Developer with over 3 years of
                experience. I'm from San Francisco. I code and create web
                elements for amazing people around the world. I like work with
                new people.
              </p>
            </div>

            <div className=" flex gap-8 max-sm:flex-col max-sm:gap-2">
              <div className=" flex flex-col gap-2 text-[15px]">
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Name:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#9e9ea0]">
                    Khine Zin Thin
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Birthday:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#9e9ea0]">
                    19th Dec 2002
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Age:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#9e9ea0]">
                    20 years
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Address:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#9e9ea0]">
                    Yangon
                  </span>
                </p>
              </div>

              <div className=" flex flex-col gap-2">
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Phone:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#9e9ea0] text-[15px]">
                    (+95) 09254490447
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Email:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#9e9ea0] text-[15px]">
                    khinezinthinfb1@gmail.com
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    skype:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#9e9ea0] text-[15px]">
                    khinezinthin
                  </span>
                </p>
                <p className="flex gap-3">
                  <span className="font-semibold text-gray-700 dark:text-white">
                    Freelance:{" "}
                  </span>
                  <span className="text-gray-800 dark:text-[#9e9ea0] text-[15px]">
                    Available
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hr  */}
      <div className="w-[90%] flex justify-center item-center">
        <img
          className=" hr-img"
          src="	https://nairo.ibthemespro.com/img/border-dark.png"
          alt=""
        />
      </div>
    </>
  );
};

export default About;
