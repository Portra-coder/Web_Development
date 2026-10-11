import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increament = () => {
    console.log("incrementing ");
    this.setState({ count: this.state.count + 1 });
  };
  decreament = () => {
    console.log("incrementing ");
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    console.log("i am reset into 0");
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <>
        <h1>class based component</h1>
        <h2>counter task</h2>

        <h2>count is: {this.state.count}</h2>

        <button onClick={this.increament}>increment</button>
        <button onClick={this.decreament}>decrement</button>
        <button onClick={this.reset}>reset</button>
      </>
    );
  }
}
