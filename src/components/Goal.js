import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'



export default class Goal extends Component {
    
	render() {
        // debugger
		return (
            
            <Card>              
                <Card.Img variant="top" src={this.props.goal.image_url} />
                    <Card.Body>
                        <Card.Title><Link to={`/goals/${this.props.goal.id}`}>{this.props.goal.title}</Link></Card.Title>
                        <Card.Text>
                        {this.props.goal.description}
                        </Card.Text>
                        <Button variant="primary">Goal Reached!</Button>
                    </Card.Body>
            </Card>
		)
	}
}