import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
// import './index.css';
// import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
import Product from './componants/product';
import App from './componants/app'
import reportWebVitals from './reportWebVitals';
import Shoppingcard from './componants/shoppingcard';


ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
