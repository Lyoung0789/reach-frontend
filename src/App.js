import React, { Component } from 'react';
import { connect } from 'react-redux'

import GoalsContainer from './containers/GoalsContainer'


class App extends Component {

  render() {
    return (
      <div className="App">
        App
        <GoalsContainer />
      </div>
    );
  }
};



export default App
