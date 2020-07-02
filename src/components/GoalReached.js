import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const GoalReached = (props) =>{

    // debugger

    return(
        <Card border="secondary" bg="success">              
            <Card.Img variant="top" src={props.goal.image_url} />
                <Card.Body>
                    <Card.Title><Link to={`/goals/${props.goal.id}`}>{props.goal.title}</Link></Card.Title>
                    <Card.Text>
                    {props.goal.description}
                    </Card.Text>
                    ✔
                </Card.Body>
        </Card>
    )


}

export default GoalReached

