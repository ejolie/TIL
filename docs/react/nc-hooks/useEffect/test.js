import React, { useState, useEffect } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  const sayHello = () => console.log("Hello");

  // componentDidMount, componentDidUpdate
  useEffect(() => {
    sayHello();
  }, [number]); // []: only when mounted

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
