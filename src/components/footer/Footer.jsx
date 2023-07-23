import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoPinterestAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-[#0B0B13] flex justify-center border-t dark:dark:border-[#25252C]">
      <div className="w-[90%] flex max-md:flex-col max-md:gap-4 justify-between my-6">
        <div className=" flex gap-4 max-md:mx-auto flex-wrap">
          <BiLogoFacebook className=" text-black dark:text-white hover:text-[#525FE1] duration-300 text-lg cursor-pointer" />
          <BiLogoTwitter className=" text-black dark:text-white hover:text-[#525FE1] duration-300 text-lg cursor-pointer" />
          <BiLogoInstagramAlt className=" text-black dark:text-white hover:text-[#525FE1] duration-300 text-lg cursor-pointer" />
          <BiLogoLinkedin className=" text-black dark:text-white hover:text-[#525FE1] duration-300 text-lg cursor-pointer" />
          <BiLogoPinterestAlt className=" text-black dark:text-white hover:text-[#525FE1] duration-300 text-lg cursor-pointer" />
        </div>
        <p className=" max-md:mx-auto text-center text-sm text-black dark:text-gray-300">
          © 2023 copyright <span className="primary-text cursor-pointer">ib-themes</span> all right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
