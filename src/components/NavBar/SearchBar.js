import React, {Component } from 'react'
import {FormControl, Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'


// import Welcome  from './Welcome'

class SearchBar extends Component{

    state ={
        search: ""
    }

    handleChange = event => {
        this.setState({
            search: event.target.value
        })
    }


    handleSubmit = (event) => {
        
        event.preventDefault()
        this.setState({
            search:""
        })
        
        this.props.routerProps.history.push(`/goals/search/${this.state.search}`)
    }


    render(){
        
        return(
            <Form inline onSubmit= {event => this.handleSubmit(event)}>
                <FormControl value={this.state.search} type="text" placeholder="Search" className="mr-sm-2" onChange = {event => this.handleChange(event)}/>
                <Button variant="outline-light" onClick = {event => this.handleSubmit(event)} >Search</Button>
            </Form>
        )

    }
}

const mapStateToProps = ({goals}) => ({goals})

export default connect(mapStateToProps)(SearchBar)