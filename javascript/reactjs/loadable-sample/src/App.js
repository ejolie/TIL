import React, { Component } from 'react';

class App extends Component {
  state = {
    SplitMe: null
  };
  handleClick = () => {
    import('./SplitMe').then(({ default: SplitMe }) => {
      this.setState({
        SplitMe
      });
    });
  };
  render() {
    const { SplitMe } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        { SplitMe && <SplitMe /> }
      </div>
    )
  }
}

export default App;
