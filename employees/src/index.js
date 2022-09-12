import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./red/Redux/Store";
// import { BrowserRouter } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  // </BrowserRouter>
);
