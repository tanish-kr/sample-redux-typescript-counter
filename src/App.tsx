import React, { Component } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { increment, decrement, add } from "./actions/counterActions";
import { CounterState } from "./reducers/counterReducer";
import "./styles.css";

interface CounterProps {
  count?: number;
  add?: (amount: number) => void;
  increment?: () => void;
  decrement?: () => void;
}

class App extends Component<CounterProps, {}> {
  render() {
    const {
      count = 0,
      increment = () => {},
      decrement = () => {},
      add = () => {}
    } = this.props;
    return (
      <div>
        Clicked: {count} times.
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={() => add(10)}>10</button>
      </div>
    );
  }
}

const mapStateToProps = (state: CounterState): CounterProps => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch): CounterProps => ({
  add: (amount) => dispatch(add(amount)),
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
