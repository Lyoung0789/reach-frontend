import React from 'react'
import Goal from './Goal'
import {  CardColumns } from 'react-bootstrap'
// import CategoryFilter from './CategoryFilter'



const Goals = (props) =>{

    // debugger

    
    return(
        
        <div>
            <h3>Goals to Reach!</h3>
            {/* <CategoryFilter /> */}
            
            <CardColumns >
                {props.goals.map((goal)=> <Goal goal ={goal} key={goal.id}  />)}
            </CardColumns>
        </div>
    )

}

export default Goals 

