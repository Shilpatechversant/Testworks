import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  increment() {
    setTimeout(() => {
      this.setState((prev, props) => ({ counter: prev.counter + 1 }));
    }, 1000);
  }

  render() {
    this.increment();
    return <div>{this.state.counter}</div>;
  }
}

export default Counter;
