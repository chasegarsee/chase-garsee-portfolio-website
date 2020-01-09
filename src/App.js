import React from "react";
import "./App.css";

import ReactGA from "react-ga";
import AboutMe from "./components/AboutMe";
import useDarkMode from "./hooks/useDarkMode";

function initializeAnalytics() {
  ReactGA.initialize("UA-155952389-1");
  ReactGA.pageview("/HomePage");
}

function App() {
  const [darkMode, setDarkMode, toggleDarkMode] = useDarkMode(false);
  initializeAnalytics();
  return (
    <div className={darkMode ? "App-dark-mode" : "App"}>
      <AboutMe
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        href="http://chasegarsee.com"
      />
    </div>
  );
}

export default App;
