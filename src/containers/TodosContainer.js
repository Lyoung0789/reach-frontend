import React, {Component} from 'react'
import Todos from '../components/Todos'
import TodoInput from '../components/TodoInput'

class TodosContainer extends Component {



    render(){
        return(
            <div>
                We are in the ToDosContainer
                <TodoInput goal_id = {this.props.goal_id}/>
                <Todos todos={this.props.todos}/>
            </div>
        )
    }
}

export default TodosContainer