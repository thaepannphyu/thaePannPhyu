import React from "react";
import "./App.css";
import SkillAndEducation from "./components/sections/skill/SkillAndEducation";
import Experience from "./components/sections/experience/Experience";
import Sidebar from './components/sidebar/Sidebar';
import Contact from "./components/sections/contact/Contact";
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
      <div className=" flex w-full gap-[78px] max-md:gap-0">
        <div >
        <Sidebar/>
        </div>   

        <div className="w-full">
          <section><Experience /></section>
          <section><SkillAndEducation /></section>
          <section><Contact/></section>
          <Footer/>
        </div>     
      </div>

    </>
  );
};

export default App;
