import React, { Component } from 'react'
import Goals from '../components/Goals'
import { connect } from 'react-redux'
import { fetchGoals } from '../actions/fetchGoals'
import GoalInput from '../components/GoalInput'
import {Route} from 'react-router-dom'



class GoalsContainer extends Component{

    componentDidMount(){
        this.props.fetchGoals()
    }

    render(){
        // debugger
        return (
            <div>Goals Container
                <GoalInput /> <br/>
                <Goals goals={this.props.goals} />
            </div>
        )
    }

}



const mapStateToProps = ({goals}) => ({goals})

export default connect(mapStateToProps, {fetchGoals})(GoalsContainer)
