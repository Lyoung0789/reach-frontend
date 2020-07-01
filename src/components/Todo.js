import React from 'react'
import {ListGroup, Button} from 'react-bootstrap'


const Todo = (props)=>{

    // debugger
    return(
        <ListGroup.Item as="li">
            {props.todo.title}  <Button variant="primary" size ="sm" className="float-right">Reached!</Button>
        </ListGroup.Item>
    )
}

export default Todo 