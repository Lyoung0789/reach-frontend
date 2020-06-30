import React from 'react'
import Goal from './Goal'

const Goals = (props) =>{

    // debugger
    return(
        
        <div>
            Goals
             {props.goals.map((goal)=> <Goal goal ={goal} key={goal.id} />)}
        </div>
    )

}

export default Goals 