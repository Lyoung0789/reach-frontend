import React from 'react'
import {connect} from 'react-redux'
import {editTodo} from '../actions/editTodo'
import {ListGroup, Button} from 'react-bootstrap'


const Todo = (props)=>{

    const handleClick = (todo, goal_id) => {
        // debugger
        todo.completed = true
        props.editTodo(todo, goal_id)


    }

    if(props.todo.completed === false){
        return(
            <ListGroup.Item as="li">
                {props.todo.title}<Button variant="info" size ="sm" className="float-right" onClick = {() => handleClick(props.todo, props.goal_id)}>Reached!</Button>
            </ListGroup.Item>
        )
            
    } else {
        return (
            <ListGroup.Item as="li" variant="success">
                <del>{props.todo.title}</del>
            </ListGroup.Item>
        )
    }
    
    
    
        
    
    
}

export default connect(null, {editTodo})(Todo)