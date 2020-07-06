import React, { Component } from 'react';
import GoalsContainer from './containers/GoalsContainer'
import NavBar from './components/NavBar/NavBar'
import {Route} from 'react-router-dom'
import Welcome from './components/Welcome'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path='/' render ={(routerProps) => <NavBar {...routerProps}/>}/>
        <Route exact path='/' component={Welcome} />
        <GoalsContainer />
        
      </div>
    );
  }
};



export default App
