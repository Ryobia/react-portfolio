import React from "react";
import github from "../../assets/icons/github.png";
import ghost from "../../assets/work/ghostwriter.png";
import nightIn from "../../assets/work/night-in.png";
import runBuddy from "../../assets/work/run-buddy.png";
import budget from "../../assets/work/budget.png";
import weather from "../../assets/work/weather.png";
import schedule from "../../assets/work/schedule.png";
import sweets from '../../assets/work/sweets.png'

function Portfolio() {
  return (
    <div className="portfolio-div fade-in">
      <h1 className="title">My Work</h1>
      <div className="work-div">
        <div className="container">
          <a
            href="https://dudley-doright-93373.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="work-img"
              src={sweets}
              height="300px"
              alt="ghostwriter"
            />
          </a>
          <h3 className="centered">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Ryobia/savannahs-sweets"
            >
              <img src={github} height="35px" alt="github-icon" />
            </a>
          </h3>

          <p className="centered-text">
            Here you can order from a local bakery! - GraphQL/ React/ MongoDB/ Node.js
          </p>
        </div>
        <div className="container">
          <a
            href="https://desolate-harbor-29412.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="work-img"
              src={ghost}
              height="300px"
              alt="ghostwriter"
            />
          </a>
          <h3 className="centered">
            {/* Ghostwriter{" "} */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Ryobia/story-telling-app"
            >
              <img src={github} height="35px" alt="github-icon" />
            </a>
          </h3>

          <p className="centered-text">
            A site where you can tell stories - Node.js/ MySQL/ Sequelize/
            Handlebars
          </p>
        </div>

        <div className="container">
          <a
            href="https://alyssawinn.github.io/a-night-in/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="work-img"
              src={nightIn}
              height="300px"
              alt="a-night-in"
            />
          </a>
          <h3 className="centered">
            {/* A Night In{" "} */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/alyssawinn/a-night-in"
            >
              <img src={github} height="35px" alt="github-icon" />
            </a>
          </h3>
          <p className="centered-text">
            A site to help you plan your next Night-In - Web API's/
            localstorage/ DOM manipulation
          </p>
        </div>

        <div className="container">
          <a
            href="https://ryobia.github.io/run-buddy/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="work-img"
              src={runBuddy}
              height="300px"
              alt="runbuddy"
            />
          </a>
          <h3 className="centered">
            {/* Run Buddy{" "} */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Ryobia/run-buddy"
            >
              <img src={github} height="35px" alt="github-icon" />
            </a>
          </h3>
          <p className="centered-text">
            A site built for a running/phyical fitness website - HTML/CSS
          </p>
        </div>

        <div className="container">
          <a
            href="https://thistracksyourbudget.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="work-img"
              src={budget}
              height="300px"
              alt="team-profile-generator"
            />
          </a>
          <h3 className="centered">
            {/* PWA - Budget Tracker{" "} */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Ryobia/budget-tracker-week19"
            >
              <img src={github} height="35px" alt="github-icon" />
            </a>
          </h3>
          <p className="centered-text">
            A PWA where you can track your budget - Manifest.json/ indexedDB/
            service worker
          </p>
        </div>

        <div className="container">
          <a
            href="https://ryobia.github.io/weather-dash/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="work-img"
              src={weather}
              height="300px"
              alt="weather-dashboard"
            />
          </a>
          <h3 className="centered">
            {/* Weather Dashboard{" "} */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Ryobia/weather-dash"
            >
              <img src={github} height="35px" alt="github-icon" />
            </a>
          </h3>
          <p className="centered-text">
            Find the weather for anywhere in the world! - openweatherAPI/ DOM
            Manipulation/ JQuery
          </p>
        </div>

        <div className="container">
          <a
            href="https://ryobia.github.io/Scheduler/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="work-img"
              src={schedule}
              height="300px"
              alt="day-scheduler"
            />
          </a>
          <h3 className="centered">
            {/* Day Scheduler{" "} */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Ryobia/Scheduler"
            >
              <img src={github} height="35px" alt="github-icon" />
            </a>
          </h3>
          <p className="centered-text">
            Schedule your day a day at a time - Moment.js/ JQuery/ Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
