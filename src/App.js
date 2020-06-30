import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchGoals } from './actions/fetchGoals'


class App extends Component {


  componentDidMount(){
    this.props.fetchGoals()
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {fetchGoals: () => dispatch(fetchGoals())}
}


export default connect(null, mapDispatchToProps)(App)
