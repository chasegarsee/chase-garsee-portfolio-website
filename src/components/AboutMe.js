import React, { useState } from "react";
import video from "./assets/background4.mp4";
import logo from "../img-video/logo5.png";
import logoDark from "../img-video/logo5Dark.png";
import caregiverSetup from "../img-video/axiscare/caregiver-setup.png";
import darkMode from "../img-video/axiscare/dark-mode.png";
import sideBarNavigation from "../img-video/axiscare/side-bar-navigation.png";
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
      <div
        onClick={props.toggleDarkMode}
        className={props.darkMode ? "toggle toggled" : "toggle"}
      >
        <div className={props.darkMode ? "click clicked" : "click"}>
          {props.darkMode ? (
            <i className="fas fa-power-off fa-2x" id="so-dark" />
          ) : (
            <i className="fas fa-power-off fa-2x" id="not-so-dark" />
          )}
        </div>
      </div>
      <div className="about-me-section">
        <div className="section">
          <img alt="" src={props.darkMode ? logoDark : logo} />
          <div className="video-container">
            <video
              className="video-background"
              playsInline
              loop
              autoPlay
              muted
              style={{ width: "100%" }}
            >
              <source src={video} type="video/mp4" autoPlay loop />
            </video>
          </div>
        </div>
        <nav style={style}>
          <ul>
            <li className="twitter">
              <a style={social} href="http://twitter.com/chasegarsee">
                {props.darkMode ? (
                  <i className="so-dark fab fa-twitter fa-2x" />
                ) : (
                  <i className="not-so-dark fab fa-twitter fa-2x" />
                )}
              </a>
            </li>
            <li className="github">
              <a style={social} href="http://github.com/chasegarsee">
                {props.darkMode ? (
                  <i className="so-dark fab fa-github fa-2x" />
                ) : (
                  <i className="not-so-dark fab fa-github fa-2x" />
                )}
              </a>
            </li>
            <li className="linkedin">
              <a
                style={social}
                href="https://www.linkedin.com/in/chase-garsee-7b11a4105/"
              >
                {props.darkMode ? (
                  <i className="so-dark fab fa-linkedin fa-2x" />
                ) : (
                  <i className="not-so-dark fab fa-linkedin fa-2x" />
                )}
              </a>
            </li>
            <li className="mail">
              <a style={social} href="mailto:chasegarsee@gmail.com">
                {props.darkMode ? (
                  <i className="so-dark fas fa-envelope fa-2x" />
                ) : (
                  <i className="not-so-dark fas fa-envelope fa-2x" />
                )}
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        <p className={props.darkMode ? "so-dark" : "not-so-dark"}>
          Passionate for proper development and design.
        </p>

        <div className="main-portfolio-section">
          <div className="everything">
            <div className="project-one-wrapper project-one">
              <div className="project-description">
                <div className="description">
                  <h1>AxisCare Home Care System Preferences</h1>
                  <p className={props.darkMode ? "so-dark" : "not-so-dark"}>
                    I created a brand new system preferences portion of
                    AxisCare's CRM from scratch using React. I implemented the
                    ability to toggle Dark Mode that persists throughout the
                    application's components. I was able to utilize the DOM to
                    handle outside component clicks to minimize unused sidebar
                    navigation.
                  </p>
                  <div className="links">
                    <p className={props.darkMode ? "so-dark" : "not-so-dark"}>
                      (Proprietary Content)
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-wrapper-two">
                <div className="tech-stack">
                  <img alt="" src={null} />
                </div>
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <img alt="" src={caregiverSetup} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="" src={darkMode} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="" src={sideBarNavigation} />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <div className="main-portfolio-section">
          <div className="everything">
            <div className="project-one-wrapper project-two">
              <div className="carousel-wrapper">
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <img alt="" src={tieme} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="" src={searchUsers} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="" src={manage} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="" src={searchFarmers} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="" src={inventory} />
                  </Carousel.Item>
                </Carousel>
                <div className="tech-stack">
                  <img alt="" src={react} />
                  <img alt="" src={redux} />
                  <img alt="" src={java} />
                  <img alt="" src={spring} />
                  <img alt="" src={postgres} />
                </div>
              </div>

              <div className="project-description">
                <div className="description">
                  <h1>TIEME NDO CRM </h1>
                  <p className={props.darkMode ? "so-dark" : "not-so-dark"}>
                    Beautifully simple tools made for Tieme Ndo to improve the
                    productivity of both their organization and clients. The
                    Tieme Ndo CRM was designed to make managing all parts of the
                    company & client relationship as easy as possible.
                    Minimalism, performance, and ease of use are carefully woven
                    into each feature of the product.
                  </p>
                  <div className="links">
                    <a
                      className="links-div"
                      href="https://github.com/labs13-agriculture"
                    >
                      <i className="fab fa-git-square " />
                      <span
                        className={props.darkMode ? "so-dark" : "not-so-dark"}
                      >
                        View Code
                      </span>
                    </a>

                    <a
                      className="links-div"
                      href="https://tiemendo-marketing.netlify.com/"
                    >
                      <i className="fas fa-tv " />
                      <span
                        className={props.darkMode ? "so-dark" : "not-so-dark"}
                      >
                        Visit Website
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-portfolio-section">
          <div className="everything">
            <div className="project-one-wrapper project-one">
              <div className="project-description">
                <div className="description">
                  <h1>Team Builder </h1>
                  <p className={props.darkMode ? "so-dark" : "not-so-dark"}>
                    Managing hundreds of student projects week in and week out
                    for Build weeks gets a bit daunting! Team Builder helps with
                    product ideation and project curation. As an administrator
                    you can log into the app and see a list of products in a
                    grid format so that you can visualize all products for a
                    build week. You can create a new product with the fields
                    Product Name & Product Description, so that you can create a
                    new project for students to join. You can add an enumerable
                    amount of roles to a product idea and let users sign up to a
                    role they want to handle.
                  </p>
                  <div className="links">
                    <a
                      className="links-div"
                      href="https://github.com/lambda-team-builder"
                    >
                      <i className="fab fa-git-square " />
                      <span
                        className={props.darkMode ? "so-dark" : "not-so-dark"}
                      >
                        View Code
                      </span>
                    </a>

                    <a
                      className="links-div"
                      href="https://lambda-team-builder.netlify.com/login"
                    >
                      <i className="fas fa-tv " />
                      <span
                        className={props.darkMode ? "so-dark" : "not-so-dark"}
                      >
                        Visit Website
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-wrapper-two">
                <div className="tech-stack">
                  <img alt="" src={react} />
                  <img alt="" src={hooks} />
                  <img alt="" src={node} />
                  <img alt="" src={express} />
                </div>
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <img alt="" src={classes} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="" src={projects} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="" src={roles} />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="main-portfolio-section">
          <div className="everything">
            <div className="project-one-wrapper project-two">
              <div className="carousel-wrapper">
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <img alt="" src={voidLogin} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="" src={VOID} />
                  </Carousel.Item>
                </Carousel>
                <div className="tech-stack">
                  <img alt="" src={react} />
                  <img alt="" src={hooks} />
                  <img alt="" src={python} />
                  <img alt="" src={django} />
                </div>
              </div>

              <div className="project-description">
                <div className="description">
                  <h1>The Void </h1>
                  <p className={props.darkMode ? "so-dark" : "not-so-dark"}>
                    Void dungeon is a multi-user dungeon that allows you to
                    explore and interact with other users in the game. With an
                    inherited back-end framed out with Python and Django, our
                    team of 5 developers had 4 days to complete to this project.
                    Our goal was to build algorithms to efficiently create and
                    render a dynamic world. We also had a stretch goal of
                    implementing a chat feature using the web sockets library
                    Pusher which we were able to achieve.
                  </p>
                  <div className="links">
                    <a
                      className="links-div"
                      href="https://github.com/cs-build-week1-good-dev"
                    >
                      <i className="fab fa-git-square " />
                      <span
                        className={props.darkMode ? "so-dark" : "not-so-dark"}
                      >
                        View Code
                      </span>
                    </a>

                    <a
                      className="links-div"
                      href="https://agitated-curran-1cd505.netlify.com/login"
                    >
                      <i className="fas fa-tv " />
                      <span
                        className={props.darkMode ? "so-dark" : "not-so-dark"}
                      >
                        Visit Website
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-portfolio-section">
          <div className="everything">
            <div className="project-one-wrapper project-one ">
              <div className="project-description">
                <div className="description">
                  <h1>Air Fitness</h1>
                  <p className={props.darkMode ? "so-dark" : "not-so-dark"}>
                    Today, fitness happens everywhere - a park, an unfinished
                    basement, a garage gym, etc.- not just gyms. Certified
                    fitness instructors need an app that takes the awkwardness
                    out of collecting payments from friends and taking
                    attendance. This is exactly what AirFitness accomplishes
                  </p>
                  <div className="links">
                    <a
                      className="links-div"
                      href="https://github.com/airfitness"
                    >
                      <i className="fab fa-git-square " />
                      <span
                        className={props.darkMode ? "so-dark" : "not-so-dark"}
                      >
                        View Code
                      </span>
                    </a>

                    <a
                      className="links-div"
                      href="https://airfitness.netlify.com"
                    >
                      <i className="fas fa-tv " />
                      <span
                        className={props.darkMode ? "so-dark" : "not-so-dark"}
                      >
                        Visit Website
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-wrapper-two">
                <div className="tech-stack">
                  <img alt="" src={react} />
                  <img alt="" src={redux} />
                  <img alt="" src={HTML} />
                  <img alt="" src={CSS} />
                </div>
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <img alt="" src={airFitness} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="" src={createClass} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="" src={selectClass} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img alt="" src={manageClass} />
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
