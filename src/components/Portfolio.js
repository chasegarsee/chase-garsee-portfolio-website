import React from "react";
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

import "./PortfolioCSS.css";

import Carousel from "react-bootstrap/Carousel";

export class Portfolio extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const {} = this.state;

    // var element = document.getElementById("middle");
    // element.scrollIntoView({ behavior: "smooth" });
    return (
      <div className="main">
        <div className="parallax">
          <div className="parallax-wrapper1">
            <img src={overlay1} />
            <div className="project-one-wrapper">
              <h1>Tieme Ndo CRM</h1>
              <div className="project-description">
                <h3>FRONT-END: REACT + REDUX</h3>
                <h3>BACK-END: JAVA + POSTGRES SQL</h3>
              </div>
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
            </div>
          </div>
          <div className="parallax-wrapper2">
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
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
