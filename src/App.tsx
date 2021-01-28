import React, { Component } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "./actions/counterActions";
import { CounterState } from "./reducers/counterReducer";
import "./styles.css";

interface CounterProps {
  count?: number;
  increment?: () => void;
  decrement?: () => void;
}

class App extends Component<CounterProps, {}> {
  render() {
    const { count = 0, increment, decrement } = this.props;
    return (
      <div>
        Clicked: {count} times.
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state: CounterState): CounterProps => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch): CounterProps => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
