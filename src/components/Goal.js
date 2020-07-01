import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export default class Goal extends Component {
	render() {
		return (
            
            <Card>              
                <Card.Img variant="top" src={this.props.goal.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.goal.title}</Card.Title>
                        <Card.Text>
                        {this.props.goal.description}
                        </Card.Text>
                    </Card.Body>
            </Card>
		)
	}
}