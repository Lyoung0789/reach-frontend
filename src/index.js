import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

import thunk from 'redux-thunk'
//compose allows you to add more than one middleware
import {createStore, compose, applyMiddleware} from 'redux'
//anything that we want to have access to the store we wrap with Provider
import {Provider} from 'react-redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


