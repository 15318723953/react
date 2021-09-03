import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BTN from './lib/button'
import ShoppingList from '../src/lib/shoppingList'
import Borar from './lib/Borar'
// import App from './App';
// import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  
  <React.StrictMode>
    <BTN />
    <ShoppingList name = 'zzx'/>
    <Borar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
