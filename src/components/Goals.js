import React from 'react'
import Goal from './Goal'
import {  CardColumns } from 'react-bootstrap'

const Goals = (props) =>{

    // debugger
    return(
        
        <div>
            <CardColumns >
                {props.goals.map((goal)=> <Goal goal ={goal} key={goal.id}  />)}
            </CardColumns>
        </div>
    )

}

export default Goals 

// style={{display: 'flex', flexDirection: 'row'}}