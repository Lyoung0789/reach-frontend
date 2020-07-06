import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addGoal } from '../../actions/addGoal'



class GoalInput extends Component {

    category = ['Budget', 'Travel', 'Health', 'Mental Health', 'Spiritual', 'Cooking', 'Other']

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
        this.props.history.push('/goals')

    }
    

    render(){
        // debugger
        return(
            <Form style={{ width: '50rem', marginLeft :'auto', marginRight: 'auto' }} onSubmit={event => this.handleSubmit(event)}>
                
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title of Your Goal</Form.Label>
                    <Form.Control type="text" name="title" value={this.state.title} onChange={event => this.handleChange(event)}/>
                </Form.Group>
                

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Category</Form.Label>
                    <Form.Control as="select" name="category" onChange={event => this.handleChange(event)}>
                        {this.category.map((category, i)=> <option key={i}>{category}</option>)}
                    </Form.Control>
                </Form.Group>
  

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Describe Your Goal</Form.Label>
                    <Form.Control as="textarea" rows="3" name="description" value={this.state.description} onChange={event => this.handleChange(event)} />
                </Form.Group>

                <input type="submit"/>
            </Form>
        )     
        
    }
}



export default connect(null, {addGoal})(GoalInput)