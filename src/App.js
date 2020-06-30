import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchGoals } from './actions/fetchGoals'
import GoalsContainer from './containers/GoalsContainer'


class App extends Component {


  componentDidMount(){
    this.props.fetchGoals()
  }

  render() {
    return (
      <div className="App">
        App
        <GoalsContainer />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {fetchGoals: () => dispatch(fetchGoals())}
}


export default connect(null, mapDispatchToProps)(App)
