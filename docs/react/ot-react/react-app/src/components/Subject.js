import React, { Component } from "react";

class Subject extends Component {
  render() {
    // ES6 클래스 함수 : function 생략
    return (
      <header>
        <h1>
          <a href="/">{this.props.title}</a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
