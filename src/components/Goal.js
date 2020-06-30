import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export default class Goal extends Component {
	render() {
		return (
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="https://picsum.photos/100/100" />
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