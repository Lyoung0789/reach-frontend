import React from 'react'
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const GoalReached = (props) =>{

    // debugger

    return(
        <Card  border="success" bg="light">              
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

