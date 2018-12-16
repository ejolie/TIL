import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log('Counters - Rendered');
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} // used by react component
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter} // counter all state to props
          />
        ))}
      </div>
    );
  }
}

export default Counters;
