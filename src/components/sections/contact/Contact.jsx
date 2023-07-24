import React from "react";
import "./contact.css";
import { TbMap2 } from "react-icons/tb";
import { BsEnvelopePaper } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";

const Contact = () => {
  return (
    <div className="bg-[#F7F7FF] dark:bg-[#0E0E17] duration-200 flex flex-col gap-16 justify-center w-[100%]">
      <div className="w-[90%] mx-auto mt-24 flex max-lg:flex-col max-lg:gap-12 gap-0 justify-between">
        {/* left info */}
        <div className="w-[30%] max-lg:w-[100%] flex flex-col gap-3">
          <h1 className=" text-black dark:text-white text-4xl font-medium">
            What’s your story? Get in touch
          </h1>
          <p className=" text-gray-800 dark:text-gray-300 font-extralight">
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-start">
              <p>
              <TbMap2 className="primary-text mr-3 text-2xl" />
              </p>
              <p className="text-black dark:text-gray-300 text-lg font-medium">
                123 Stree New York City , United States Of America 750065.
              </p>
            </div>
            <div className="flex items-start">
              <p>
              <BsEnvelopePaper className="primary-text mr-4 text-xl" />
              </p>
              <p className="text-black dark:text-gray-300 text-lg font-medium break-words">
                support@domain.com
              </p>
            </div>
            <div className="flex items-start">
              <p>
              <GiSmartphone className="primary-text mr-[10px] text-3xl -ml-1" />
              </p>
              <p className="text-black dark:text-gray-300 text-lg font-medium">
                +044 9696 9696 3636
              </p>
            </div>
          </div>
        </div>
        {/* right form  */}
        <div className="flex flex-col gap-5 w-[55%] max-lg:w-[100%]">
          <h1 className=" text-black dark:text-white text-2xl font-medium">
            Say Something
          </h1>
          <form className="flex flex-col gap-4">
            <div className="flex max-md:flex-col max-md:gap-4 gap-6">
              <input
                type="text"
                placeholder="Full name"
                className="w-[50%] max-md:w-[100%] py-2 px-3 bg-white dark:bg-transparent outline-none border border-[#57575D] text-black dark:text-gray-300 placeholder:text-[#57575D] text-sm"
              />
              <input
                type="text"
                placeholder="Email address"
                className="w-[50%] max-md:w-[100%] py-2 px-3 bg-white dark:bg-transparent outline-none border border-[#57575D] text-black dark:text-gray-300 placeholder:text-[#57575D] text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Full name"
              className="w-[100%] py-2 px-3 bg-white dark:bg-transparent outline-none border border-[#57575D] text-black dark:text-gray-300 placeholder:text-[#57575D] text-sm"
            />
            <textarea
              className="w-[100%] py-2 px-3 bg-white dark:bg-transparent outline-none border border-[#57575D] text-black dark:text-gray-300 placeholder:text-[#57575D] text-sm"
              placeholder="Type comment"
              cols="30"
              rows="4"
            ></textarea>
            <div>
              <button className="go-up py-2 px-5 text-white dark:text-black bg-[#0B0B13] dark:bg-white border border-[#0B0B13] dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-[#0B0B13] dark:hover:text-white duration-[400ms] font-medium tracking-wide rounded">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[90%] mx-auto mb-24 border-[5px] border-white">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332974115404!2d144.95972717535642!3d-37.80566903357446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2smm!4v1690094869835!5m2!1sen!2smm" width="100%" height="380" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Contact;
