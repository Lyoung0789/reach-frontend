import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {editCompletedGoal} from '../actions/editCompletedGoal'



class Goal extends Component {


   

    handleClick = (goalId, goal) => {
        goal.completed = true
        this.props.editCompletedGoal(goalId, goal)
    }
    
	render() {
        
        if(this.props.goal.completed === false){
            return ( 
                <Card>              
                    <Card.Img variant="top" src={this.props.goal.image_url} />
                        <Card.Body>
                            <Card.Title><Link to={`/goals/${this.props.goal.id}`}>{this.props.goal.title}</Link></Card.Title>
                            <Card.Text>
                            {this.props.goal.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => this.handleClick(this.props.goal.id, this.props.goal)}>Goal Reached!</Button>
                        </Card.Body>
                </Card>
            )
        } else{
            return(
                <p></p>
            )
            
        }
        
            
		
	}
}

export default connect(null,{editCompletedGoal})(Goal)