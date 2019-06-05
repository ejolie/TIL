import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
  });
  return element;
};

const App = () => {
  const inputEl = useRef();
  setTimeout(() => inputEl.current.focus(), 5000);

  const title = useClick();
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      <input ref={inputEl} placeholder="la" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
