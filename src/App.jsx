import React from "react";
import "./App.css";
import SkillAndEducation from "./components/sections/skill/SkillAndEducation";
import Experience from "./components/sections/experience/Experience";

const App = () => {
  return (
    <div>
      <h1>hello</h1>
      <section>{/* sections components */}</section>
      <section><Experience /></section>
      <section><SkillAndEducation /></section>
    </div>
  );
};

export default App;
