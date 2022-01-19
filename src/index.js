import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

const cartState = [
  {
    id: 0,
    name: "fancy cap",
    quan: 23,
    price: 52000,
  },
  {
    id: 1,
    name: "astonishing boots",
    quan: 7,
    price: 38000,
  },
];

function cartReducer(state = cartState, action) {
  if (action.type === "addToCart") {
    let copy = [...state];
    copy.push(action.payload);
    return copy;
  } else if (action.type === "increaseQuantity") {
    let copy = [...state];
    copy[0].quan++;
    return copy;
  } else if (action.type === "decreaseQuantity") {
    let copy = [...state];
    if (copy[0].quan > 0) copy[0].quan--;
    return copy;
  } else {
    return state;
  }
}

const alertState = true;

function alertReducer(state = alertState, action) {
  if (action.type === "closeAlert") {
    return false;
  } else {
    return state;
  }
}

const store = createStore(combineReducers({ cartReducer, alertReducer }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
