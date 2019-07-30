import React, { Component, useState, useRef, useEffect } from "react";
import video from "../img-video/background4.mp4";
import logo from "../img-video/logo5.png";
import overlay1 from "../img-video/b.png";
import search from "../img-video/tieme-ndo/search.gif";
import manage from "../img-video/tieme-ndo/manage.gif";
import track from "../img-video/tieme-ndo/track.png";
import tieme from "../img-video/tieme-ndo/tieme.png";
import instructor from "../img-video/air-fitness/instructor.png";
import user from "../img-video/air-fitness/user.png";
import landing from "../img-video/air-fitness/landing-page.gif";
import classes from "../img-video/team-builder/classes.png";
import projects from "../img-video/team-builder/projects.png";
import roles from "../img-video/team-builder/roles.png";
import react from "../img-video/tieme-ndo/react.png";
import redux from "../img-video/tieme-ndo/redux.png";
import hooks from "../img-video/social-icons/react-hooks.png";
import java from "../img-video/tieme-ndo/java.png";
import spring from "../img-video/tieme-ndo/spring.png";
import node from "../img-video/social-icons/node.png";
import express from "../img-video/social-icons/express.png";
import postgres from "../img-video/tieme-ndo/postgres.png";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

import "./PortfolioCSS.css";

import Carousel from "react-bootstrap/Carousel";
import "./AboutMeCSS.css";

function AboutMe(props) {
  const [change, setChange] = useState(false);
  const changePosition = 600;
  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "#54545469" : "transparent",
    transition: "600ms ease"
  };

  let social = {
    color: change ? "rgb(0, 115, 255)" : "#545454"
  };
  return (
    <div className="main-section">
      <div className="about-me-section">
        <div className="section">
          <img src={logo} />
          <div className="video-container">
            <video
              className="video-background"
              loop
              autoPlay
              mute
              style={{ width: "100%" }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <nav style={style}>
          <ul>
            <li className="twitter">
              <a
                style={social}
                href="http://twitter.com/chasegarsee"
                target="_blank"
              >
                <i class="fab fa-twitter fa-2x" />
              </a>
            </li>
            <li className="github">
              <a
                style={social}
                href="http://github.com/chasegarsee"
                target="_blank"
              >
                <i class="fab fa-github fa-2x" />
              </a>
            </li>
            <li className="linkedin">
              <a
                style={social}
                href="https://www.linkedin.com/in/chase-garsee-7b11a4105/"
                target="_blank"
              >
                <i class="fab fa-linkedin fa-2x" />
              </a>
            </li>
            <li className="mail">
              <a
                style={social}
                href="mailto:chasegarsee@gmail.com.com"
                target="_blank"
              >
                <i class="far fa-envelope fa-2x" />
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        <p>Full Stack Developer with a passion for proper design. </p>
        <p>
          I am a graduate from Lambda School. I may not know everything, but I'm
          dedicated to learn something new every day I'm alive
        </p>

        <div className="main-portfolio-section">
          <div className="project-one-wrapper">
            <div className="carousel-wrapper">
              <Carousel interval={8000}>
                <Carousel.Item>
                  <img src={tieme} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={search} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={manage} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={track} />
                </Carousel.Item>
              </Carousel>
              <div className="tech-stack">
                {/* <h1>Stack</h1> */}
                <img src={react} />
                <img src={redux} />
                <img src={java} />
                <img src={spring} />
                <img src={postgres} />
              </div>
            </div>

            <div className="project-description">
              <div className="description">
                <h1>TIEME NDO CRM </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta nisi consequuntur recusandae eligendi neque at quod
                  architecto tenetur debitis aperiam animi iure ipsum officiis
                  inventore ea, ullam, dolorum veritatis hic sint quibusdam
                  quidem sequi quas praesentium? Non amet eligendi neque
                  perspiciatis? Atque aliquam dolorum culpa corporis ipsam id,
                  rerum illum at? Odit excepturi, cum eum porro ullam nemo in
                  nulla maxime qui sunt aperiam quibusdam ratione esse tenetur
                  deleniti expedita quasi ab, velit cupiditate.
                </p>
                <div className="links">
                  <a
                    className="links-div"
                    href="http://github.com/chasegarsee"
                    target="_blank"
                  >
                    <i class="fab fa-git-square " />
                    <span>View Code</span>
                  </a>

                  <a
                    className="links-div"
                    href="https://tiemendo-marketing.netlify.com/"
                    target="_blank"
                  >
                    <i class="fas fa-tv " />
                    <span>Visit Website</span>
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="right-side-decription-wrapper">
            <div className="project-description-wrapper" />

            
          </div> */}

            {/* <div className="parallax-wrapper2">
              <img src={overlay1} />
              <div className="project-one-wrapper">
                <h1>Lambda Team Builder</h1>
                <div className="project-description">
                  <h3>React + Hooks</h3>
                  <h3>Node + Express</h3>
                </div>
                <Carousel interval={5000}>
                  <Carousel.Item>
                    <img src={classes} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={projects} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={roles} />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="parallax-wrapper1">
              <img src={overlay1} />
              <div id="middle" className="project-one-wrapper">
                <h1>Air Fitness</h1>
                <div className="project-description">
                  <h3>HTML 5</h3>
                  <h3>CSS</h3>
                  <h3>React</h3>
                </div>
                <Carousel interval={5000}>
                  <Carousel.Item>
                    <img src={landing} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={instructor} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={user} />
                  </Carousel.Item>
                </Carousel> */}
            {/* </div>
            </div> */}
          </div>
        </div>
        <div className="main-portfolio-section">
          <div className="project-one-wrapper">
            <div className="carousel-wrapper">
              <Carousel interval={8000}>
                <Carousel.Item>
                  <img src={classes} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={projects} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={roles} />
                </Carousel.Item>
              </Carousel>
              <div className="tech-stack">
                {/* <h1>Stack</h1> */}
                <img src={react} />
                <img src={hooks} />
                <img src={node} />
                <img src={express} />
              </div>
            </div>

            <div className="project-description">
              <div className="description">
                <h1>Team Builder </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ab voluptate ducimus molestias quam explicabo numquam incidunt
                  tenetur eius, quidem sint nulla consequuntur unde fugiat iste
                  possimus distinctio? Sequi, in!
                </p>
                <div className="links">
                  <a
                    className="links-div"
                    href="http://github.com/chasegarsee"
                    target="_blank"
                  >
                    <i class="fab fa-git-square " />
                    <span>View Code</span>
                  </a>

                  <a
                    className="links-div"
                    href="https://tiemendo-marketing.netlify.com/"
                    target="_blank"
                  >
                    <i class="fas fa-tv " />
                    <span>Visit Website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
