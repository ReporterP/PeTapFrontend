import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/App.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";


  ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

