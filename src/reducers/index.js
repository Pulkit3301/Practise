import { combineReducers } from "redux";
import counterReducer from "./couter";
import loggedInReducer from "./loggedIn";

const finalReducer = combineReducers({
  counter: counterReducer,
  loggedIn: loggedInReducer,
});

export default finalReducer;
