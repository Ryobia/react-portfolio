import React, { useState } from "react";
import About from "../src/components/About";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";

import gmail from "./assets/icons/gmail.png";
import github from "./assets/icons/github.png";
import linkedin from "./assets/icons/linkedin.png";
import facebook from "./assets/icons/facebook.png";

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
      case "home":
        return <Home />;
      default:
        return <Home />;
    }
  }

  return (
    <div>
      <header>
        <div className="nav-bar">
          <h1>
            <a href="#home">
              <span onClick={() => setPageSelected("about")}>Home</span>
            </a>
          </h1>
          <h1>
            <a href="#about">
              <span onClick={() => setPageSelected("about")}>About</span>
            </a>
          </h1>
          <h1>
            <a href="#portfolio">
              <span onClick={() => setPageSelected("portfolio")}>
                Portfolio
              </span>
            </a>
          </h1>
          <h1>
            <a href="#contact">
              <span onClick={() => setPageSelected("contact")}>Contact</span>
            </a>
          </h1>
          <h1>
            <a href="#resume">
              <span onClick={() => setPageSelected("resume")}>Resumé</span>
            </a>
          </h1>
        </div>
      </header>
      <main>{renderPage(pageSelected)}</main>
      <footer>
        <h2>Contact Me:</h2>
        <a target="_blank" rel="noreferrer" href="mailto: ryobia36@gmail.com">
          <img src={gmail} height="32px" alt="gmail-icon" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Ryobia">
          <img src={github} height="32px" alt="github-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/branderson-1a6987159"
        >
          <img src={linkedin} height="32px" alt="linkedin-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/Ryobia"
        >
          <img src={facebook} height="32px" alt="facebook-icon" />
        </a>
      </footer>
    </div>
  );
}

export default App;
