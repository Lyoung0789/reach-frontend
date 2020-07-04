import React, { Component } from 'react';
import GoalsContainer from './containers/GoalsContainer'
import NavBar from './components/NavBar'
import {Route} from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path='/' render ={(routerProps) => <NavBar {...routerProps}/>}/>
          
        <GoalsContainer />
        
      </div>
    );
  }
};



export default App
