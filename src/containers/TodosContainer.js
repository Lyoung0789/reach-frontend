import React, {Component} from 'react'
import TodoInput from '../components/Todo/TodoInput'
import Todos from '../components/Todo/Todos'
import {Container} from 'react-bootstrap'

class TodosContainer extends Component {

    render(){
        return(
            <Container>
                {console.log("We are in the ToDosContainer")}
                <TodoInput goal = {this.props.goal}/>     
                <Todos todos={this.props.goal.todos} goal_id= {this.props.goal.id}/>
            </Container>
        )
    }

}

export default TodosContainer