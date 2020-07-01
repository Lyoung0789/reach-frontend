import React, {Component} from 'react'
import { Form } from 'react-bootstrap'
import {connect} from 'react-redux'
import {addTodo} from '../actions/addTodo'

class TodoInput extends Component {


    state = {
        title: "",
        goal_id: ""
    }


    handleChange = (event) => {
        this.setState({
            title: event.target.value,
            goal_id: this.props.goal_id
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            title: "",
            goal_id: ""
  
        })

    }
   

    render(){
        return(
            <Form style={{ width: '50rem' }} onSubmit={event => this.handleSubmit(event)}>
                
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Add New Todo:</Form.Label>
                    <Form.Control type="text" name="title" value={this.state.title} onChange={event => this.handleChange(event)}/>
                </Form.Group>
                

                <input type="submit"/>
            </Form>
            
        )     
    }
}


export default connect(null, {addTodo})(TodoInput)
