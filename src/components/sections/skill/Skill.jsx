import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Skill = () => {
  const [count, setCount] = useState(false);
  return (
    <div>
      {/* <h2 className=" uppercase tracking-wider text-left py-3 font-light">
        skill
      </h2> */}
      <div className=" flex flex-col gap-12">
        {/* Html  */}
        <div className=" flex gap-5 justify-evenly items-center">
          <div className=" w-fit">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}>
              <h2 className=" flex items-center text-3xl font-medium">
                {count && <CountUp start={0} end={92} duration={2} delay={0} />}{" "}
                %
              </h2>
            </ScrollTrigger>
          </div>

          <div className=" w-[85%]">
            <p className=" uppercase text-[14px] tracking-wider text-left pb-2">
              html5
            </p>
            <div className=" w-full h-[10px] bg-slate-300">
              <div className=" w-[92%] h-[10px] primary-bg"></div>
            </div>
          </div>
        </div>
        {/* javascript */}
        <div className=" flex justify-evenly gap-5 items-center">
          <div className=" w-fit">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}>
              <h2 className=" flex items-center text-3xl font-medium">
                {count && <CountUp start={0} end={62} duration={2} delay={0} />}{" "}
                %
              </h2>
            </ScrollTrigger>
          </div>
          <div className=" w-[85%]">
            <p className=" uppercase text-[14px] tracking-wider text-left pb-2">
              javascript
            </p>
            <div className=" w-full h-[10px] bg-slate-300">
              <div className=" w-[62%] h-[10px] primary-bg"></div>
            </div>
          </div>
        </div>
        {/* react  */}
        <div className=" flex justify-evenly gap-5 items-center">
          <div className=" w-fit">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}>
              <h2 className=" flex items-center text-3xl font-medium">
                {count && <CountUp start={0} end={80} duration={2} delay={0} />}{" "}
                %
              </h2>
            </ScrollTrigger>
          </div>
          <div className=" w-[85%]">
            <p className=" uppercase text-[14px] tracking-wider text-left pb-2">
              react js
            </p>
            <div className=" w-full h-[10px] bg-slate-300">
              <div className=" w-[80%] h-[10px] primary-bg"></div>
            </div>
          </div>
        </div>
        {/* tailwind  */}
        <div className=" flex justify-evenly gap-5 items-center">
          <div className=" w-fit">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}>
              <h2 className=" flex items-center text-3xl font-medium ">
                {count && <CountUp start={0} end={90} duration={2} delay={0} />}{" "}
                %
              </h2>
            </ScrollTrigger>
          </div>
          <div className=" w-[85%]">
            <p className=" uppercase text-[14px] tracking-wider text-left pb-2">
              tailwind css
            </p>
            <div className=" w-full h-[10px] bg-slate-300">
              <div className=" w-[90%] h-[10px] primary-bg"></div>
            </div>
          </div>
        </div>
        {/* github  */}
        <div className=" flex justify-evenly gap-5 items-center">
          <div className=" w-fit">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}>
              <h2 className=" flex items-center text-3xl font-medium">
                {count && <CountUp start={0} end={70} duration={2} delay={0} />}{" "}
                %
              </h2>
            </ScrollTrigger>
          </div>
          <div className=" w-[85%]">
            <p className=" uppercase text-[14px] tracking-wider text-left pb-2">
              github
            </p>
            <div className=" w-full h-[10px] bg-slate-300">
              <div className=" w-[70%] h-[10px] primary-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
