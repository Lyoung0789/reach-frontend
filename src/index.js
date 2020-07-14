import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import thunk from 'redux-thunk'

import {createStore, compose, applyMiddleware} from 'redux'

import {Provider} from 'react-redux'
import manageGoal from './reducers/manageGoal'
import {BrowserRouter as Router} from 'react-router-dom'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(manageGoal, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


