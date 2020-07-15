import React, { Component } from 'react'
import Goals from '../components/Goal/Goals'
import { connect } from 'react-redux'
import { fetchGoals } from '../actions/fetchGoals'
import GoalInput from '../components/Goal/GoalInput'
import {Route, Switch } from 'react-router-dom'
import GoalShow from '../components/Goal/GoalShow'
import GoalsReached from '../components/Goal/GoalsReached'
import FindGoals from '../components/Goal/FindGoals'
// import CategoryFilter from '../components/CategoryFilter'


class GoalsContainer extends Component{

   

    componentDidMount(){
        this.props.fetchGoals()
    }

    render(){
        // debugger
        return (
            <div style={{marginLeft :'70px', marginRight: '70px'}}>
                
                <Switch>
                    
                    
                    <Route path= '/goals/new' component={GoalInput} />
                    
                    <Route path= '/goals/goals_reached' render={() => <GoalsReached goals={this.props.goals.filter(goal => goal.completed === true)}/>} />

                    <Route path= '/goals/search/:title' render={(routerProps) => <FindGoals {...routerProps} /> } />

                    <Route path = '/goals/:id' render={(routerProps)=> <GoalShow {...routerProps} goals={this.props.goals} /> }/>
                    <Route path= '/goals' render={(routerProps)=> <Goals {...routerProps} goals={this.props.goals} /> } />
                    
                </Switch>
            </div>
        )
    }

}



// const mapStateToProps = ({goals}) => ({goals})
const mapStateToProps = (state) => {
    // debugger
    if(state.filterText !== "" && state.filterText !== "All"){
        return {
            goals: state.goals.filter(goal => goal.category.includes(state.filterText))
        }
    } else {
        return{
            goals: state.goals
        }
    } 
    
}

export default connect(mapStateToProps, {fetchGoals})(GoalsContainer)
