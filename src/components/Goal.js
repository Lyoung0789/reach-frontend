import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export default class Goal extends Component {
    //This is where i can add my specfic url for pictures.
	render() {
		return (
            <Card style={{ width: '20rem' }}>
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