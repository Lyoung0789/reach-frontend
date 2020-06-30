import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchGoals } from './actions/fetchGoals'


class App extends Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/goals/')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
};



export default connect(null, {fetchGoals})(App)
