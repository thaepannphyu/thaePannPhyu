import React,{useState} from 'react'
import {FaHome} from "react-icons/fa"
import {BsPerson} from "react-icons/bs"
import {AiOutlineFileText} from "react-icons/ai"
import {MdOutlineWorkOutline} from "react-icons/md"
import {FiPhoneOutgoing} from "react-icons/fi"
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import "../footer/footer.css"
import { useEffect } from 'react'
import "./sidebar.css"

const Sidebar = () => {
  // sidebar active class 
  const [active,setActive] = useState("home");
  // back to top show 
  const [showBackToTop,setShowBackToTop] = useState(false);

  // mantine burger 
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  // back to top
  const backToTop = ()=>{
    document.documentElement.scrollTop = 0;
  }

  // back to top show 
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 500){
        setShowBackToTop(true);
      }else{
        setShowBackToTop(false);
      }
    })
  },[])

  return (
    <div>
      {/* sidebar  */}
        <div className={`z-50 h-screen fixed flex flex-col bg-white dark:bg-[#0c0c14] 
             ${opened ? "max-md:left-0 max-md:duration-500" :
              "max-md:left-[-300px] duration-200"}`}>
            <div className=' primary-bg text-white text-4xl max-[400px]:text-3xl font-bold flex justify-center pt-5
            max-[400px]:pt-4 h-[90px] max-[400px]:h-[80px]'>
                <h1>K</h1>
            </div>

            <div className=' border-r dark:border-[#25252C] h-screen text-gray-600 dark:text-white text-3xl max-[400px]:text-2xl flex flex-col justify-center item-center'>
                <div 
                  onClick={() => setActive("home")} 
                  className={`${active == "home" ? "primary-text" : ""} transition-all duration-100 border-b dark:border-[#25252C] p-6 cursor-pointer relative nav`}>
                  <FaHome/>
                  <div className={`show-name hidden ${active == "home" ? "text-blue-400" : "text-white "} bg-[#494949] dark:bg-[#292930] text-sm px-2 py-1 absolute right-[-35px] top-[28px] rounded`}>Home
                  </div>
                </div>

                <div 
                  onClick={() => setActive("about")} 
                  className={`${active == "about" ? "primary-text" : ""} transition-all duration-100 border-b dark:border-[#25252C] p-6 cursor-pointer relative nav`}>
                  <BsPerson/>
                  <div className={`show-name hidden ${active == "about" ? "text-blue-400" : "text-white "} bg-[#494949] dark:bg-[#292930] text-sm px-2 py-1 absolute right-[-35px] top-[28px] rounded`}>About
                  </div>
                </div>

                <div 
                  onClick={() => setActive("resume")} 
                  className={`${active == "resume" ? "primary-text" : ""} transition-all duration-100 border-b dark:border-[#25252C] p-6 cursor-pointer relative nav`}>
                  <AiOutlineFileText/>
                  <div className={`show-name hidden ${active == "resume" ? "text-blue-400" : "text-white "} bg-[#494949] dark:bg-[#292930] text-sm px-2 py-1 absolute right-[-44px] top-[28px] rounded`}>resume
                  </div>
                </div>

                <div 
                  onClick={() => setActive("project")} 
                  className={`${active == "project" ? "primary-text" : ""} transition-all duration-100 border-b dark:border-[#25252C] p-6 cursor-pointer relative nav`}>
                  <MdOutlineWorkOutline/>
                  <div className={`show-name hidden ${active == "project" ? "text-blue-400" : "text-white "} bg-[#494949] dark:bg-[#292930] text-sm px-2 py-1 absolute right-[-44px] top-[28px] rounded`}>project
                  </div>
                </div>

                <div 
                  onClick={() => setActive("contact")} 
                  className={`${active == "contact" ? "primary-text" : ""} transition-all duration-100 p-6 cursor-pointer relative nav`}>
                  <FiPhoneOutgoing/>
                  <div className={`show-name hidden ${active == "contact" ? "text-blue-400" : "text-white "} bg-[#494949] dark:bg-[#292930] text-sm px-2 py-1 absolute right-[-50px] top-[25px] rounded`}>contact
                  </div>
                </div>
            </div>
        </div>

      {/* menu burger */}
      <div className='z-50 fixed right-5 bottom-6 hidden max-md:block'>
        <div className=' cursor-pointer primary-bg w-[60px] h-[60px] text-center pt-3 rounded-full'>
        <Burger opened={opened} onClick={toggle} aria-label={label} color="#fff" />
        </div>
      </div>

      {/* back to top  */}
      <div className={`${showBackToTop ? "block" : "hidden"}`}>
        {/* <div  className="fixed right-5 bottom-6 z-50 max-md:hidden z-5 cursor-pointer shadow-light">
          <div className=" p-2 text-xl hover:bg-gray-900 dark:hover:bg-[#DBD9D9] duration-500 bg-black text-white dark:bg-white dark:text-black rounded dark:shadow">
          <AiOutlineArrowUp/>
          </div>
        </div> */}

        <div onClick={backToTop} className='z-50 fixed right-5 bottom-6 max-md:hidden'>
        <div className=' cursor-pointer primary-bg w-[50px] h-[50px] flex justify-center item-center pt-2 rounded-full'>
        <MdOutlineKeyboardArrowUp className="text-3xl text-white font-bold"/>
        </div>
        </div>
      </div>


    </div>
  )
}

export default Sidebar