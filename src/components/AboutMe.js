import React from "react";
import { StyledDivWrapper } from "./Styles";
import video from "../img-video/background4.mp4";
import logo from "../img-video/logo5.png";
import "./CSS.css";

export class AboutMe extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const {} = this.state;

    return (
      <div>
        <div className="section">
          <img src={logo} />
          <div className="video-container">
            <video className="video-background" loop autoPlay>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="lower-section" />
        <nav>
          <ul>
            <li className="github">
              <a href="http://github.com/chasegarsee" target="_blank">
                <i class="fab fa-github fa-2x" />
              </a>
            </li>
            <li className="twitter">
              <a href="http://twitter.com/chasegarsee" target="_blank">
                <i class="fab fa-twitter fa-3x" />
              </a>
            </li>
            <li className="mail">
              <a href="mailto:chasegarsee@gmail.com.com" target="_blank">
                <i class="far fa-envelope fa-3x" />
              </a>
            </li>
            <li className="mail">
              <a href="mailto:chasegarsee@gmail.com.com" target="_blank">
                <i class="fab fa-linkedin fa-2x" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

{
}
