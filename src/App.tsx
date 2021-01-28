import React, { Component } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "./actions/counterActions";
import "./styles.css";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

class App extends Component<CounterProps, {}> {
  render() {
    return (
      <div>
        Clicked: {this.props.count} times.
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state: number) => {
  return {
    count: state
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
