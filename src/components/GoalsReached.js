import React, { Component } from 'react'
import GoalReached from './GoalReached'
import {  CardColumns } from 'react-bootstrap'

export default class GoalsReached extends Component{
    


    render(){
        // debugger
        return(
            <div>
                <h3>Reached Goals!</h3>
                <CardColumns>
                    {this.props.goals.map(goal => <GoalReached goal={goal}/>)}  
                </CardColumns>
            </div>

        )
    }

}



