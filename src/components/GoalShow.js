import React from 'react'
import TodosContainer from '../containers/TodosContainer'
import {Card} from 'react-bootstrap'


const GoalShow = (props) => {
   
    let goal = props.goals.find(element => element.id === parseInt(props.match.params.id))
   
    

    if (goal){
        return (
  
        <div>

            <Card style={{ width: '30rem' }}>              
                <Card.Img variant="top" src={goal.image_url} />
                    <Card.Body>
                        <Card.Title>{goal.title}</Card.Title>
                        <Card.Text>
                        {goal.description}
                        </Card.Text>
                            
                    </Card.Body>
            </Card>

            
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