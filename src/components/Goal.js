import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export default class Goal extends Component {
    //This is where i can add my specfic url for pictures.
	render() {
		return (
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="https://images.freeimages.com/images/large-previews/4f7/blank-sign-bullet-holes-1447150.jpg" />
				<Card.ImgOverlay>
                <Card.Title>{this.props.goal.title}</Card.Title>
					<Card.Text>
						{this.props.goal.description}
    				</Card.Text>
				</Card.ImgOverlay>
			</Card>
		)
	}
}