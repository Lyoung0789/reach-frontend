import React, {Component } from 'react'
import {FormControl, Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'

class SearchBar extends Component{

    state ={
        search: ""
    }

    handleChange = event => {
        this.setState({
            search: event.target.value
        })
    }


    handleClick = event => {
        // debugger
        console.log(this.props.goals)
        console.log(this.state.search)
        console.log(this.props.goals.filter(find => find.title.toLowerCase().includes(this.state.search.toLowerCase())))
        

    }


    render(){
        // debugger
        return(
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange = {event => this.handleChange(event)}/>
                <Button variant="outline-light" onClick = {event => this.handleClick(event)}>Search</Button>
            </Form>
        )

    }
}

const mapStateToProps = ({goals}) => ({goals})

export default connect(mapStateToProps)(SearchBar)