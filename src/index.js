import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import finalReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./components/Counter";
const store = createStore(finalReducer);

ReactDOM.render(
  <React.StrictMode>
    {/*  <Provider store={store}>
      <App />
</Provider> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
