import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0
  };

  handleIncrease = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number + 1
      };
    });
  };

  handleDecrease = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number - 1
      };
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
