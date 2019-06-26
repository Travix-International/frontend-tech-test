import React, { useState, useEffect } from "react";
import "./App.scss";
import NewTask from "./containers/NewTask";
import TasksList from "./containers/TasksList";

const getWidth = width => {
  if (width >= 1920) {
    return "xl";
  }
  if (width >= 1280) {
    return "lg";
  }
  if (width >= 960) {
    return "md";
  }
  if (width >= 600) {
    return "sm";
  }
  return "xs";
};

function App() {
  const [width, setWidth] = useState(getWidth(window.innerWidth));
  useEffect(() => {
    const handleResize = () => setWidth(getWidth(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Travix todo tech test{" "}
          <a href="mailto:harmmeiier@gmail.com?subject=Travix tech test">
            Harm Meijer
          </a>
          .
        </p>
      </header>
      <NewTask />
      <TasksList width={width} />
    </div>
  );
}

export default App;
