import React from 'react'
import TodosContainer from '../containers/TodosContainer'


const GoalShow = (props) => {
   
    let goal = props.goals.find(element => element.id === parseInt(props.match.params.id))
   
    

    if (goal){
        return (
        <div>
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
            
            <TodosContainer goal={goal} />
                
           
        </div>
        )
    } else {
        return (
            null
        )
    }
    
}

export default GoalShow