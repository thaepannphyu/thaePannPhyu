import React from "react";
import "./App.css";
import SkillAndEducation from "./components/sections/skill/SkillAndEducation";
import Experience from "./components/sections/experience/Experience";
import Sidebar from "./components/sidebar/Sidebar";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/sections/about/About";
import ProjectShow from "./components/sections/projectShow/ProjectShow";
import DarkMode from "./components/darkMode/DarkMode";
import Landing from "./components/sections/landing/Landing";
import Testimonial from "./components/sections/Testimonial/Testimonial";

const App = () => {
  return (
    <>
      <div className=" flex w-full gap-[78px] max-md:gap-0">
        <div>
          <Sidebar />
        </div>

        <div className="w-full">
          <DarkMode />
          <section id="0" className=" overflow-hidden">
            <Landing />
          </section>
          <section id="1">
            <About />
          </section>
          <section id="2">
            <Experience />
          </section>
          <section id="">
            <SkillAndEducation />
          </section>
          <section id="3" className=" overflow-hidden">
            <Testimonial />
          </section>
          <section id="4">
            <ProjectShow />
          </section>
          <section id="5">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
