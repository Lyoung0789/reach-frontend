import React, { Component } from 'react';
import GoalsContainer from './containers/GoalsContainer'
import NavBar from './components/NavBar'


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <GoalsContainer />
      </div>
    );
  }
};



export default App
