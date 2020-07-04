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


    handleClick = (event) => {
        
        event.preventDefault()
        
        this.props.routerProps.history.push(`/goals/search/${this.state.search}`)
    }


    render(){
        // debugger
        return(
            <Form inline onSubmit = {event => this.handleClick(event)}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange = {event => this.handleChange(event)}/>
                    <Button variant="outline-light" >Search</Button>
            </Form>
        )

    }
}

const mapStateToProps = ({goals}) => ({goals})

export default connect(mapStateToProps)(SearchBar)