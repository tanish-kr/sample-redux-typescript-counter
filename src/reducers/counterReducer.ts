import counterAction from "../actions/counterActions";
const initState = 0;

const counterReducer = (state: number = initState, action: counterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
