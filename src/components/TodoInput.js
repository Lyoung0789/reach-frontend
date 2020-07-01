import React, {Component} from 'react'
import { Form } from 'react-bootstrap'
import {connect} from 'react-redux'

class TodoInput extends Component {


    state ={
        title: "",
        description:"",
        goal_id: ""
    }

    

    render(){
        return(
            // <Form style={{ width: '50rem' }} onSubmit={event => this.handleSubmit(event)}>
                
            //     <Form.Group controlId="exampleForm.ControlInput1">
            //         <Form.Label>Title of Your Goal</Form.Label>
            //         <Form.Control type="text" name="title" value={this.state.title} onChange={event => this.handleChange(event)}/>
            //     </Form.Group>
                

            //     <Form.Group controlId="exampleForm.ControlSelect1">
            //         <Form.Label>Example select</Form.Label>
            //         <Form.Control as="select" name="category" onChange={event => this.handleChange(event)}>
            //             {this.category.map((category, i)=> <option key={i}>{category}</option>)}
            //         </Form.Control>
            //     </Form.Group>
  

            //     <Form.Group controlId="exampleForm.ControlTextarea1">
            //         <Form.Label>Describe Your Goal</Form.Label>
            //         <Form.Control as="textarea" rows="3" name="description" value={this.state.description} onChange={event => this.handleChange(event)} />
            //     </Form.Group>

            //     <input type="submit"/>
            // </Form>
            <div>something in the form</div>
        )     
    }
}


export default connect(null, {addTodo})(TodoInput)
