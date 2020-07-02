import React, {Component} from 'react'
import Todos from '../components/Todos'
import TodoInput from '../components/TodoInput'

class TodosContainer extends Component {



    render(){
        return(
            <div>
                {console.log("We are in the ToDosContainer")}
                <TodoInput goal = {this.props.goal}/>
                <Todos todos={this.props.goal.todos} goal_id= {this.props.goal.id}/>
            </div>
        )
    }
}

export default TodosContainer