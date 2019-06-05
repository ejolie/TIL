import React from "react";
import ReactDOM from "react-dom";

import useInput from "./useInput";

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr. ", maxLen);
  return (
    <div className="App">
      <h1>{name.value}</h1>
      <input
        placeholder="Name"
        value={name.value}
        onChange={name.onChange}
      />{" "}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
