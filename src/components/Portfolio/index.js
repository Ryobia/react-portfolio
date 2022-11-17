import React from "react";
import github from "../../assets/icons/github.png";
import appraiser from "../../assets/work/appraiser.png";
import weather from "../../assets/work/weather1.png";
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
              alt="savannah-sweets"
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
              src={appraiser}
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


      </div>
    </div>
  );
}

export default Portfolio;
