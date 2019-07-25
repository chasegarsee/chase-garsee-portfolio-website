import React from "react";
import overlay1 from "../img-video/square6.png";
import overlay2 from "../img-video/square7.png";
import overlay3 from "../img-video/square6.png";
import search from "../img-video/tieme-ndo/search.gif";
import manage from "../img-video/tieme-ndo/manage.gif";
import track from "../img-video/tieme-ndo/track.png";
import tieme from "../img-video/tieme-ndo/tieme.png";
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
              <h1>PORTFOLIO</h1>
              <div className="project-description">
                <h2>TIEME NDO CRM</h2>
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
          <div className="parallax-wrapper1">
            <img src={overlay2} />
            <div className="project-one-wrapper">
              <h1>COOL THINGS</h1>
            </div>
          </div>
          <div className="parallax-wrapper1">
            <img src={overlay3} />
            <div id="middle" className="project-one-wrapper">
              <h1>AWESOME THINGS</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
