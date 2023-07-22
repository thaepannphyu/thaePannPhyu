import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#F7F7FF] dark:bg-[#0E0E17] flex justify-center w-[100%]">
      <div className="w-[90%] my-20 flex justify-between">
        {/* left info */}
        <div className="w-[30%] flex flex-col gap-3">
            <h1 className=" text-black dark:text-white text-4xl font-medium">What’s your story? Get in touch</h1>
            <p className=" text-gray-800 dark:text-gray-300 font-extralight">Always available for freelancing if the right project comes along, Feel free to contact me.</p>
            <div className="flex flex-col gap-3">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
