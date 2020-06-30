import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addGoal } from '../actions/addGoal'


class GoalInput extends Component {

    category = ['Budget', 'Travel', 'Health', 'Mental Health', 'Spiritual']

    state={
        title: "",
        category: "",
        description: "",
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addGoal(this.state)
        this.setState({
            title: "",
            category: "",
            description: ""
        })
        
    }
    

    render(){
        // debugger
        return(
            <Form style={{ width: '50rem' }} onChange={event => this.handleChange(event)} onSubmit={event => this.handleSubmit(event)}>
                
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title of Your Goal</Form.Label>
                    <Form.Control type="text" name="title" placeholder="I want to be rich!" />
                </Form.Group>
                

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select" name="category">
                        {this.category.map(category => <option>{category}</option>)}
                    </Form.Control>
                </Form.Group>
  

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Describe Your Goal</Form.Label>
                    <Form.Control as="textarea" rows="3" name="description"  />
                </Form.Group>

                <input type="submit"/>
            </Form>
        )     
        
    }
}



export default connect(null, {addGoal})(GoalInput)