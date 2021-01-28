import { Reducer } from "redux";
import { CounterAction, CounterActionType } from "../actions/counterActions";

export interface CounterState {
  count: number;
}

export const initState: CounterState = { count: 0 };

const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case CounterActionType.ADD:
      return {
        ...state,
        count: state.count + (action.payload?.amount || 0)
      };
    case CounterActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case CounterActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default: {
      return state;
    }
  }
};

export default counterReducer;
