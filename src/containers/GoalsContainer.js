import React, { Component } from 'react'
import Goals from '../components/Goals'
import { connect } from 'react-redux'
import { fetchGoals } from '../actions/fetchGoals'
import GoalInput from '../components/GoalInput'
import {Route, Switch } from 'react-router-dom'
import GoalShow from '../components/GoalShow'
import GoalsReached from '../components/GoalsReached'


class GoalsContainer extends Component{

    componentDidMount(){
        this.props.fetchGoals()
    }

    render(){
        // debugger
        return (
            <div>
                
                <Switch>
                    
                    <Route path= '/goals/new' component={GoalInput} />
                    
                    <Route path= '/goals/goals_reached' render={() => <GoalsReached goals={this.props.goals}/>} />

                    <Route path = '/goals/:id' render={(routerProps)=> <GoalShow {...routerProps} goals={this.props.goals} /> }/>
                    <Route path= '/goals' render={(routerProps)=> <Goals {...routerProps} goals={this.props.goals} /> } />
                    
                </Switch>
            </div>
        )
    }

}



const mapStateToProps = ({goals}) => ({goals})

export default connect(mapStateToProps, {fetchGoals})(GoalsContainer)
