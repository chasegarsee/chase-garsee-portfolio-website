import React from "react";
import { StyledDivWrapper } from "./Styles";
import video from "../img-video/background4.mp4";
import logo from "../img-video/logo7.png";
import java from "../img-video/social-icons/java.png";
import react from "../img-video/social-icons/react.png";
import git from "../img-video/social-icons/git.png";
import node from "../img-video/social-icons/node.png";
import express from "../img-video/social-icons/express.png";
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
            <li className="twitter">
              <a href="http://twitter.com/chasegarsee" target="_blank">
                <i class="fab fa-twitter fa-2x" />
              </a>
            </li>
            <li className="github">
              <a href="http://github.com/chasegarsee" target="_blank">
                <i class="fab fa-github fa-2x" />
              </a>
            </li>
            <li className="linkedin">
              <a
                href="https://www.linkedin.com/in/chase-garsee-7b11a4105/"
                target="_blank"
              >
                <i class="fab fa-linkedin fa-2x" />
              </a>
            </li>
            <li className="mail">
              <a href="mailto:chasegarsee@gmail.com.com" target="_blank">
                <i class="far fa-envelope fa-2x" />
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        <p>Full Stack Developer with a passion for proper design. </p>
        <p>
          Also, I <img className="git" src={git} /> gitty and over{" "}
          <img className="react" src={react} /> when folks talk about
          <img className="java-cup" src={java} />
        </p>
        <p>
          But <img className="node" src={node} /> need to worry, that's how I
          <img className="express" src={express} />
          myself
        </p>
      </div>
    );
  }
}

{
}
