import React from "react";

const Banner = ({ title }) => {
  return (
    <div>
      <div className=" w-[90%] relative select-none">
        <h1 className={`lg:text-4xl md:text-3xl text-xl dark:text-white`}>
          {title}
        </h1>
        <div className=" h-12 w-12 bg-[#525ee153] rounded-[50%] absolute circleMove top-0 left-[-14px]"></div>
      </div>
    </div>
  );
};

export default Banner;
