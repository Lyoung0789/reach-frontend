import React, { Component } from 'react';
import GoalsContainer from './containers/GoalsContainer'


class App extends Component {

  render() {
    return (
      <div className="App">
          <h1>Reach App</h1>
        <GoalsContainer />
      </div>
    );
  }
};



export default App
