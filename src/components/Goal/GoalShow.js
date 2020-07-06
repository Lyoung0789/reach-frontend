import React from 'react'
import TodosContainer from '../../containers/TodosContainer'
import {Card, Container, Col, Row} from 'react-bootstrap'


const GoalShow = (props) => {
   
    let goal = props.goals.find(element => element.id === parseInt(props.match.params.id))
   
    

    if (goal){
        return (
  
        <Container fluid>
            <Row>
                <Col>
                    <Card style={{ width: '40rem' }}>              
                    <Card.Img variant="top" src={goal.image_url} />
                        <Card.Body>
                            <Card.Title>{goal.title}</Card.Title>
                            <Card.Text>
                            {goal.description}
                            </Card.Text>
                                
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <TodosContainer goal={goal} />
                </Col>
                    
            </Row>
        </Container>
        )
    } else {
        return (
            null
        )
    }
    
}

export default GoalShow