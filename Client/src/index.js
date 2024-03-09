<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportwebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom"
import { ContextProvider } from "./context/Context"
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportwebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

>>>>>>> 39a2e957d5d53e208d629de232b087aaa0ff1987
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportwebVitals();
