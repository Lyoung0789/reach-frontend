import React, { Component } from 'react'
import Goals from '../components/Goals'
import { connect } from 'react-redux'
import { fetchGoals } from '../actions/fetchGoals'
import GoalInput from '../components/GoalInput'
import {Route} from 'react-router-dom'
import GoalShow from '../components/GoalShow'



class GoalsContainer extends Component{

    componentDidMount(){
        this.props.fetchGoals()
    }

    render(){
        // debugger
        return (
            <div>Goals Container
                <Route exact path= '/goals/new' component={GoalInput} />
                <Route path = '/goals/:id' render={(routerProps)=> <GoalShow {...routerProps} goals={this.props.goals} /> }/>
                <Route exact path= '/goals' render={(routerProps)=> <Goals {...routerProps} goals={this.props.goals} /> } />
            </div>
        )
    }

}



const mapStateToProps = ({goals}) => ({goals})

export default connect(mapStateToProps, {fetchGoals})(GoalsContainer)
