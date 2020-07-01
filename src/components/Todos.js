import React, {Component} from 'react'
import Todo from './Todo'

export default class Todos extends Component{

    
    render(){
        // debugger
        return(
            <div>
                we re in todos
                {this.props.todos.map(todo => <Todo todo={todo}/>)}
            </div>
        )
    }
}