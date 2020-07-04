import React, {Component } from 'react'
import {FormControl, Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import {searchGoals} from '../actions/searchGoals'
import { NavLink } from 'react-router-dom'
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
        // debugger
        event.preventDefault()
        console.log(this.props.goals)
        console.log(this.state.search)
        console.log(this.props.goals.filter(find => find.title.toLowerCase().includes(this.state.search.toLowerCase())))
        // debugger

        
        this.props.searchGoals(this.state.search)
       

        

    }


    render(){
        // debugger
        return(
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange = {event => this.handleChange(event)}/>

                <NavLink to={`/goals/search/${this.state.search}`}  >
                    <Button variant="outline-light" >Search</Button>
                </NavLink>

                
            </Form>
        )

    }
}

const mapStateToProps = ({goals}) => ({goals})

export default connect(mapStateToProps,{searchGoals})(SearchBar)