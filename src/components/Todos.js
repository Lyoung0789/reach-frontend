import React, {Component} from 'react'
import Todo from './Todo'
import {ListGroup} from 'react-bootstrap'

export default class Todos extends Component{

    
    render(){
        // debugger
        return(
            
            <ListGroup className="w-50 p-3" as='ul'>
                {console.log(this.props.todos)}
                we re in todos
                {this.props.todos.map((todo,i) => <Todo todo={todo} key={i}/>)}
            </ListGroup>
        )
    }
}