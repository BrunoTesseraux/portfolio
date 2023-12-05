import "./App.css";
import { useState } from "react";
import Nav from "./assets/nav/nav";
import Article from "./assets/article/article";
import Projects from "./assets/project/projects";
import Skills from "./assets/skills/skills";
import Contact from "./assets/contact/contact";
import Footer from "./assets/footer/footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Article />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
