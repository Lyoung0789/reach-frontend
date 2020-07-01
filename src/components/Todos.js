import React, {Component} from 'react'
import Todo from './Todo'

export default class Todos extends Component{

    
    render(){
        // debugger
        return(
            
            <div>
                {console.log(this.props.todos)}
                we re in todos
                {this.props.todos.map((todo,i) => <Todo todo={todo} key={i}/>)}
            </div>
        )
    }
}