import React, { useState } from "react";
import About from "../src/components/About";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Contact from "../src/components/Contact";
import github from "./assets/icons/github.png";
import linkedin from "./assets/icons/linkedin.png";

function App() {
  const [pageSelected, setPageSelected] = useState("");

  function renderPage(props) {
    switch (props) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <div>
      <header>
        <div>
          <h1>
            <a href="/">Brandon Anderson</a>
          </h1>
        </div>

        <h2>
          <a href="#about">
            <span onClick={() => setPageSelected("about")}>About</span>
          </a>
        </h2>
        <h2>
          <a href="#portfolio">
            <span onClick={() => setPageSelected("portfolio")}>Portfolio</span>
          </a>
        </h2>
        <h2>
          <a href="#contact">
            <span onClick={() => setPageSelected("contact")}>Contact</span>
          </a>
        </h2>
        <h2>
          <a href="#resume">
            <span onClick={() => setPageSelected("resume")}>Resumé</span>
          </a>
        </h2>
      </header>
      {renderPage(pageSelected)}
      <footer>
        <a target="_blank" rel="noreferrer" href="https://github.com/Ryobia">
          <img src={github} height="32px" alt="github-icon"/>
        </a>
        <a
          target="_blank" rel="noreferrer"
          href="https://www.linkedin.com/in/branderson-1a6987159"
        >
          <img src={linkedin} height="32px" alt="linkedin-icon"/>
        </a>
      </footer>
    </div>
  );
}

export default App;
