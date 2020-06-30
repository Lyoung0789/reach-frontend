import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

import thunk from 'redux-thunk'
import {createstore, compose, applyMiddleware} from 'redux'
//anything that we want to have access to the store we wrap with Provider
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


