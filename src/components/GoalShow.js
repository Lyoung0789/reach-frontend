import React from 'react'
import TodosContainer from '../containers/TodosContainer'


const GoalShow = (props) => {
   
    let goal = props.goals.find(element => element.id === parseInt(props.match.params.id))
   
    

    if (goal){
        return (
        <div>
            {goal.title} - {goal.description}
            <p>
                <TodosContainer todos={goal.todos}/>
                
            </p>
        </div>
        )
    } else {
        return (
            null
        )
    }
    
}

export default GoalShow