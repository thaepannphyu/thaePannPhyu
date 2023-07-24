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
            <div className="w-[280px] h-[280px] max-[330px]:w-[250px] max-[330px]:h-[250px] max-[300px]:w-[220px] max-[300px]:h-[220px] max-[283px]:w-[190px] max-[283px]:h-[190px] lg:ml-3 rounded-full border-4 border-blue-600 relative max-lg:mx-auto">
              <img src={kzt} alt="" className="w-full h-full rounded-full object-cover" />
              <div className=" bg-white w-10 h-10 rounded-full p-[2px] absolute bottom-[-2%] right-[17%]">
                    <p className=" bg-[#0b0b13] w-full h-full flex justify-center items-center text-xl text-white p-1 rounded-full">
                    <BiLogoFacebook />
                    </p>
                </div>
                <div className=" bg-white w-10 h-10 rounded-full p-[2px] absolute bottom-[15%] right-[0%]">
                    <p className=" bg-[#0b0b13] w-full h-full flex justify-center items-center text-xl text-white p-1 rounded-full">
                    <BiLogoTwitter />
                    </p>
                </div>
                <div className= " bg-white w-10 h-10 rounded-full p-[2px] absolute bottom-[-8%] right-[42%]">
                    <p className=" bg-[#0b0b13] w-full h-full flex justify-center items-center text-xl text-white p-1 rounded-full">
                    <BiLogoInstagram />
                    </p>
                </div>
                <div className=" bg-white w-10 h-10 rounded-full p-[2px] absolute bottom-[-2%] left-[17%]">
                    <p className=" bg-[#0b0b13] w-full h-full flex justify-center items-center text-xl text-white p-1 rounded-full">
                    <BiLogoGithub />
                    </p>
                </div>
                <div className=" bg-white w-10 h-10 rounded-full p-[2px] absolute bottom-[15%] left-[0%]">
                    <p className=" bg-[#0b0b13] w-full h-full flex justify-center items-center text-xl text-white p-1 rounded-full">
                    <SiNetlify />
                    </p>
                </div>
            </div>
            {/* <div className="max-lg:flex max-lg:justify-center relative icon-parent"> */}
              {/* img  */}
              {/* <div className=" bg-blue-600 w-[310px] h-[310px] flex justify-center item-center rounded-full">
                <div className="m-auto z-2 bg-gray-900 w-[300px] h-[300px] rounded-full relative overflow-hidden">
                  <img
                    src={kzt}
                    alt=""
                    className="z-0 w-[250px] object-cover top-1 left-9 absolute"
                  />
                </div>
              </div> */}

              {/* icon  */}
              {/* <div className=" absolute bottom-0 flex gap-8 icon">
                <div className=" bg-white rounded-full p-[2px]">
                    <p className=" bg-[#0b0b13] text-xl text-white p-1 rounded-full">
                    <BiLogoFacebook />
                    </p>
                </div>
                <div className=" bg-white rounded-full p-[2px]">
                    <p className=" bg-[#0b0b13] text-xl text-white p-1 rounded-full">
                    <BiLogoTwitter />
                    </p>
                </div>
                <div className= " bg-white rounded-full p-[2px]">
                    <p className=" bg-[#0b0b13] text-xl text-white p-1 rounded-full">
                    <BiLogoInstagram />
                    </p>
                </div>
                <div className=" bg-white rounded-full p-[2px]">
                    <p className=" bg-[#0b0b13] text-xl text-white p-1 rounded-full">
                    <BiLogoGithub />
                    </p>
                </div>
                <div className=" bg-white rounded-full p-[2px]">
                    <p className=" bg-[#0b0b13] text-xl text-white p-1 rounded-full">
                    <SiNetlify />
                    </p>
                </div>
              </div> */}

            {/* </div> */}

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
