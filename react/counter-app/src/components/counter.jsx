import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //     super(); // call parents class (Component)
  //     this.handleIncrement = this.handleIncrement.bind(this);

  //     console.log(this); // this -> Counter object
  // }

  // handleIncrement() {
  //     console.log('Increment Clicked', this.state.count);
  //     // obj.method(); -> this reference to an object
  //     // fucntion(); -> stand-alone function, refer to the window object / undefined
  // }

  // solution : use arrow function (bind this in constructor not required)
  // arrow function inherit this keyword

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  render() {
    console.log('Counter - Rendered');
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
