import React, { Component } from 'react'
import Goals from './Goals'
import { InputGroup } from 'react-bootstrap'

export default class GoalsReached extends Component{
    

    render(){
        
        return(
            <div>
                Reached Goals
                <Goals goals={this.props.goals.filter(goal => goal.completed === true)} />
            </div>

        )
    }

}



