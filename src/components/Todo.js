import React from 'react'
import {ListGroup} from 'react-bootstrap'


const Todo = (props)=>{

    // debugger
    return(
        <ListGroup.Item as="li">
            {props.todo.title}
        </ListGroup.Item>
    )
}

export default Todo 