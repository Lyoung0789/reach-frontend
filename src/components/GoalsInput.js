import React, { Component } from 'react'
import {Form} from 'react-bootstrap'


export default class GoalsInput extends Component {

    category = ['Budget', 'Travel', 'Health', 'Mental Health', 'Spiritual']

    render(){
        // debugger
        return(
            <Form style={{ width: '50rem' }}>
                
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title of Your Goal</Form.Label>
                    <Form.Control type="text" placeholder="I want to be rich!" />
                </Form.Group>
                

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                        {this.category.map(category => <option>{category}</option>)}
                    </Form.Control>
                </Form.Group>
  

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Describe Your Goal</Form.Label>
                    <Form.Control as="textarea" rows="3"  />
                </Form.Group>
            </Form>
        )     
        
    }
}