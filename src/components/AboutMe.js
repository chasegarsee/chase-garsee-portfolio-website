import React, { Component, useState, useRef, useEffect } from "react";
import video from "../img-video/background4.mp4";
import logo from "../img-video/logo5.png";
import searchUsers from "../img-video/tieme-ndo/search-users.png";
import searchFarmers from "../img-video/tieme-ndo/search-farmers.png";
import manage from "../img-video/tieme-ndo/manage.png";
import inventory from "../img-video/tieme-ndo/inventory.png";
import tieme from "../img-video/tieme-ndo/tieme.png";
import classes from "../img-video/team-builder/classes.png";
import projects from "../img-video/team-builder/projects.png";
import roles from "../img-video/team-builder/roles.png";
import VOID from "../img-video/the-void/the-void.png";
import voidLogin from "../img-video/the-void/void-login.png";
import airFitness from "../img-video/air-fitness/air-fitness.png";
import createClass from "../img-video/air-fitness/create-classes.png";
import selectClass from "../img-video/air-fitness/select-classes.png";
import manageClass from "../img-video/air-fitness/manage-classes.png";
import react from "../img-video/social-icons/react.png";
import redux from "../img-video/social-icons/redux.png";
import hooks from "../img-video/social-icons/react-hooks.png";
import java from "../img-video/social-icons/java.png";
import spring from "../img-video/social-icons/spring.png";
import node from "../img-video/social-icons/node.png";
import express from "../img-video/social-icons/express.png";
import postgres from "../img-video/social-icons/postgres.png";
import HTML from "../img-video/social-icons/HTML.png";
import CSS from "../img-video/social-icons/CSS.png";
import python from "../img-video/social-icons/python.png";
import django from "../img-video/social-icons/django.png";
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
              <source src={video} type="video/mp4" autoPlay loop mute />
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
        <p>Passionate for proper development and design.</p>

        <div className="main-portfolio-section">
          <div className="everything">
            <div className="project-one-wrapper project-one">
              <div className="carousel-wrapper">
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <img src={tieme} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={searchUsers} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={manage} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={searchFarmers} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={inventory} />
                  </Carousel.Item>
                </Carousel>
                <div className="tech-stack">
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
                      href="https://github.com/labs13-agriculture"
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
        <div className="main-portfolio-section">
          <div className="everything">
            <div className="project-one-wrapper project-two ">
              <div className="project-description">
                <div className="description">
                  <h1>Team Builder </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    ab voluptate ducimus molestias quam explicabo numquam
                    incidunt tenetur eius, quidem sint nulla consequuntur unde
                    fugiat iste possimus distinctio? Sequi, in!
                  </p>
                  <div className="links">
                    <a
                      className="links-div"
                      href="https://github.com/lambda-team-builder"
                      target="_blank"
                    >
                      <i class="fab fa-git-square " />
                      <span>View Code</span>
                    </a>

                    <a
                      className="links-div"
                      href="https://lambda-team-builder.netlify.com/login"
                      target="_blank"
                    >
                      <i class="fas fa-tv " />
                      <span>Visit Website</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-wrapper-two">
                <div className="tech-stack">
                  <img src={react} />
                  <img src={hooks} />
                  <img src={node} />
                  <img src={express} />
                </div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="main-portfolio-section">
          <div className="everything">
            <div className="project-one-wrapper project-one">
              <div className="carousel-wrapper">
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <img src={voidLogin} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={VOID} />
                  </Carousel.Item>
                </Carousel>
                <div className="tech-stack">
                  <img src={react} />
                  <img src={hooks} />
                  <img src={python} />
                  <img src={django} />
                </div>
              </div>

              <div className="project-description">
                <div className="description">
                  <h1>The Void </h1>
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
                      href="https://github.com/cs-build-week1-good-dev"
                      target="_blank"
                    >
                      <i class="fab fa-git-square " />
                      <span>View Code</span>
                    </a>

                    <a
                      className="links-div"
                      href="https://agitated-curran-1cd505.netlify.com/login"
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
        <div className="main-portfolio-section">
          <div className="everything">
            <div className="project-one-wrapper project-two ">
              <div className="project-description">
                <div className="description">
                  <h1>Air Fitness</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    ab voluptate ducimus molestias quam explicabo numquam
                    incidunt tenetur eius, quidem sint nulla consequuntur unde
                    fugiat iste possimus distinctio? Sequi, in!
                  </p>
                  <div className="links">
                    <a
                      className="links-div"
                      href="https://github.com/airfitness"
                      target="_blank"
                    >
                      <i class="fab fa-git-square " />
                      <span>View Code</span>
                    </a>

                    <a
                      className="links-div"
                      href="https://airfitness.netlify.com"
                      target="_blank"
                    >
                      <i class="fas fa-tv " />
                      <span>Visit Website</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-wrapper-two">
                <div className="tech-stack">
                  <img src={react} />
                  <img src={redux} />
                  <img src={HTML} />
                  <img src={CSS} />
                </div>
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <img src={airFitness} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={createClass} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={selectClass} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={manageClass} />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
