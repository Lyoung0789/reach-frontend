import React, {Component} from 'react'
import Todos from '../components/Todos'

class TodosContainer extends Component {



    render(){
        return(
            <div>
                We are in the ToDosContainer
                <Todos todos={this.props.todos}/>
            </div>
        )
    }
}

export default TodosContainer