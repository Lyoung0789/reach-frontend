import React from 'react'


const GoalShow = (props) => {
   
    let goal = props.goals.find(element => element.id === parseInt(props.match.params.id))
   
    

    if (goal){
        return (
        <div>
            {goal.title} - {goal.description}
            <p>
                {goal.todos.map(todo => <li>{todo.title}</li>)}
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