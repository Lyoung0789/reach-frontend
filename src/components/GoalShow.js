import React from 'react'


const GoalShow = (props) => {
    console.log(props)
    let goal = props.goals[props.match.params.id -1]
    // debugger
    

    if (goal){
        return (
            <div>{goal ? goal.title : null}</div>
        )
    } else {
        return (
            null
        )
    }
    
}

export default GoalShow