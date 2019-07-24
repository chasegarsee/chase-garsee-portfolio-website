import React from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
