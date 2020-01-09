import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [darkMode, setDarkMode, toggleDarkMode] = useDarkMode(false);
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
