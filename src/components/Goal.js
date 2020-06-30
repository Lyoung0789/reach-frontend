import React from 'react'

const Goal = (props) =>{

    debugger
    return(
        
        <div>
             {props.goal.title} - {props.goal.description}
             {props.goal.completed}
             
            
        </div>
    )

}

export default Goal 