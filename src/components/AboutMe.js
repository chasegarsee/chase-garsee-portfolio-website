import React from "react";
import video from "../img-video/background4.mp4";
import logo from "../img-video/logo5.png";
import "./AboutMeCSS.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

export class AboutMe extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <div className="main-section">
        <div className="section">
          <img src={logo} />
          <div className="video-container">
            <video className="video-background" loop autoPlay mute>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          necessitatibus totam explicabo id incidunt voluptatum fugit similique
          repudiandae natus cumque optio quia molestiae, sapiente eligendi
          dolores, repellendus temporibus at numquam!
        </p>
      </div>
    );
  }
}
