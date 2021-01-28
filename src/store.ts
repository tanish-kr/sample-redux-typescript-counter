import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";

export default createStore(counterReducer);
