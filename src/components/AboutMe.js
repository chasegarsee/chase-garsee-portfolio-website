import React, { useState } from "react";
import { Image } from "cloudinary-react";
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
import firebase from "../img-video/social-icons/firebase.png";
import stripeLogo from "../img-video/social-icons/stripe.png";
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
    transition: "600ms ease",
  };

  let social = {
    color: change ? "rgb(0, 115, 255)" : "#545454",
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
          <Image
            cloudName="process.env.CLOUDINARY_KEY"
            publicId={
              props.darkMode
                ? "https://res.cloudinary.com/dpcbeqsys/image/upload/v1587915849/logo5Dark_yvnigj.png"
                : "https://res.cloudinary.com/dpcbeqsys/image/upload/v1587915849/logo5_colttz.png"
            }
            className={props.darkMode ? "dark-mode" : ""}
          />

          {!props.darkMode ? (
            <div className="video-container">
              <video
                preload="none"
                className="video-background"
                playsInline
                loop
                autoPlay
                muted
                style={{ width: "100%" }}
              >
                <source
                  style={{ zIndex: "1" }}
                  alt="header video"
                  src="https://res.cloudinary.com/dpcbeqsys/video/upload/v1587929554/Dot_Blast_07_-_Medium_-_HD_1080_yg0vqb.mp4"
                  type="video/mp4"
                  autoPlay
                  loop
                />
              </video>
            </div>
          ) : (
            <div className="video-container dark-video">
              <video
                className="video-background"
                playsInline
                loops
                autoPlay
                muted
                style={{ width: "100%" }}
              >
                <source
                  style={{ zIndex: "1" }}
                  src="https://res.cloudinary.com/dpcbeqsys/video/upload/v1587929554/Dot_Blast_07_-_Medium_-_HD_1080_yg0vqb.mp4"
                  type="video/mp4"
                  autoPlay
                  loop
                />
              </video>
            </div>
          )}
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
          I'm Chase Garsee. I am a{" "}
          <a href="https://github.com/chasegarsee">software engineer</a>,
          husband and father, fitness enthusiast, and a stock market investor. I
          have a degree in Audio Engineering and Production, and I graduated
          from Lambda School, coding academy. I am a student of life passionate
          for growth, helping others achieve their wildest dreams, learning new
          things, and networking with people from all walks of life. Let's{" "}
          <a href="mailto:chasegarsee@gmail.com">talk</a>!
        </p>

        <div className="main-portfolio-section">
          <div className="everything">
            <div
              className={
                props.darkMode
                  ? "project-one-wrapper social-family-dark"
                  : " project-one-wrapper project-one social-family"
              }
            >
              <div className="carousel-wrapper">
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916114/socialfamily/loggedOut_aiid2m.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916114/socialfamily/loggedIn_byb1v3.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916114/socialfamily/comments_dykycl.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916114/socialfamily/notifications_uetyqy.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916115/socialfamily/editDetails_fwrbvv.png"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="tech-stack">
                  <img alt="react" src={react} />
                  <img alt="redux" src={redux} />
                  <img alt="firebase" src={firebase} />
                </div>
              </div>

              <div className="project-description">
                <div className="description">
                  <h1>Social Family</h1>
                  <p className={props.darkMode ? "so-dark" : "not-so-dark"}>
                    An application to keep my family connected without having to
                    see the noise and marketing from the mainstream social media
                    applications. I asked myself, "Why consume when I can
                    create?". I Created this Twitter-like app in 3 weeks and
                    plan to continue adding more features and implementation,
                    including adding a Direct Messaging feature.
                  </p>
                  <div className="links">
                    <a
                      className="links-div"
                      href="https://github.com/chasegarsee/Social-Family-Frontend"
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
                      href="https://social-family.netlify.com/"
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
            <div
              className={
                props.darkMode
                  ? "project-one-wrapper tieme-ndo-dark project-two"
                  : "project-one-wrapper tieme-ndo project-two"
              }
            >
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
              <div className="carousel-wrapper-two">
                <div className="tech-stack">
                  <img alt="" src={react} />
                  <img alt="" src={redux} />
                  <img alt="" src={java} />
                  <img alt="" src={spring} />
                  <img alt="" src={postgres} />
                </div>
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916033/tiemendo/tieme_mpxmyj.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916030/tiemendo/search-farmers_oam3dz.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916030/tiemendo/search-users_iqwwyd.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916030/tiemendo/manage_vekh9x.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916032/tiemendo/inventory_plvauv.png"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <div className="main-portfolio-section">
          <div className="everything">
            <div
              className={
                props.darkMode
                  ? "project-one-wrapper project-one your-tour-dark"
                  : "project-one-wrapper project-one your-tour"
              }
            >
              <div className="carousel-wrapper-two">
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916015/yourtour/cities_w5v1vh.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916013/yourtour/stripe_uvkuhm.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916014/yourtour/packages_udki46.png"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="tech-stack">
                  <img alt="react" src={react} />
                  <img alt="hooks" src={hooks} />
                  <img alt="firebase" src={firebase} />
                  <img alt="stripe" src={stripeLogo} />
                </div>
              </div>
              <div className="project-description">
                <div className="description">
                  <h1>Your Tour</h1>
                  <p className={props.darkMode ? "so-dark" : "not-so-dark"}>
                    Often times it gets stressful picking where to go in a new
                    city. Your Tour aims to help with this. Professional locals
                    are sponsord to create only the best of the best packages,
                    that they believe are the MUST go to places in any given
                    city. Travelers can then purchase high quality, custom
                    tailored packages to meet every need.
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-portfolio-section">
          <div className="everything">
            <div
              className={
                props.darkMode
                  ? "project-one-wrapper project-two axis-care-dark"
                  : "project-one-wrapper project-two axis-care"
              }
            >
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
                    <a
                      className="links-div"
                      href="https://github.com/chasegarsee/system-preferences"
                    >
                      <i className="fab fa-git-square " />
                      <span
                        className={props.darkMode ? "so-dark" : "not-so-dark"}
                      >
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-wrapper-two">
                <div
                  className="tech-stack"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <img alt="react" src={react} />
                  <img alt="hooks" src={hooks} />
                </div>
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916087/axiscare/caregiver-setup_ysfbg7.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916087/axiscare/dark-mode_tr6kni.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916087/axiscare/side-bar-navigation_irzfus.png"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <div className="main-portfolio-section">
          <div className="everything">
            <div
              className={
                props.darkMode
                  ? "project-one-wrapper project-one team-builder-dark"
                  : "project-one-wrapper project-one team-builder"
              }
            >
              <div className="carousel-wrapper">
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916075/teambuilder/classes_hpbmok.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916075/teambuilder/roles_folsel.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916075/teambuilder/projects_g6urvh.png"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="tech-stack">
                  <img alt="react" src={react} />
                  <img alt="hooks" src={hooks} />
                  <img alt="node" src={node} />
                  <img alt="express" src={express} />
                </div>
              </div>
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
                        style={{ color: "white" }}
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
                        style={{ color: "white" }}
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
            <div
              className={
                props.darkMode
                  ? "project-one-wrapper project-two the-void-dark"
                  : "project-one-wrapper project-two the-void"
              }
            >
              <div className="project-description">
                <div className="description">
                  <h1 style={{ color: "white" }}>The Void </h1>
                  <p className={props.darkMode ? "so-dark" : "so-dark"}>
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
                        style={{ color: "white" }}
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
                        style={{ color: "white" }}
                        className={props.darkMode ? "so-dark" : "not-so-dark"}
                      >
                        Visit Website
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-wrapper">
                <div className="tech-stack">
                  <img alt="react" src={react} />
                  <img alt="hooks" src={hooks} />
                  <img alt="python" src={python} />
                  <img alt="django" src={django} />
                </div>
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916048/thevoid/the-void_mdcr7t.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916048/thevoid/void-login_pvvtvw.png"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="main-portfolio-section">
          <div className="everything">
            <div
              className={
                props.darkMode
                  ? "project-one-wrapper project-one air-fitness-dark"
                  : "project-one-wrapper project-one air-fitness"
              }
            >
              <div className="carousel-wrapper">
                <Carousel interval={8000}>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916102/airfitness/air-fitness_gv7ttb.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916104/airfitness/select-classes_chcvze.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916103/airfitness/manage-classes_yfuycx.png"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      cloudName="process.env.CLOUDINARY_KEY"
                      publicId="https://res.cloudinary.com/dpcbeqsys/image/upload/v1587916102/airfitness/create-classes_b1vruq.png"
                    />
                  </Carousel.Item>
                </Carousel>
                <div className="tech-stack">
                  <img alt="react" src={react} />
                  <img alt="redux" src={redux} />
                  <img alt="html" src={HTML} />
                  <img alt="css" src={CSS} />
                </div>
              </div>
              <div className="project-description">
                <div className="description">
                  <h1 style={{ color: "white" }}>Air Fitness</h1>
                  <p className={props.darkMode ? "so-dark" : "so-dark"}>
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
                        style={{ color: "white" }}
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
                        style={{ color: "white" }}
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
        <div>
          <p
            style={{ fontSize: 14 }}
            className={props.darkMode ? "so-dark" : "not-so-dark"}
          >
            COPYRIGHT © 2020 CHASE GARSEE
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
