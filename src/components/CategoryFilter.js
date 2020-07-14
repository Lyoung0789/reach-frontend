import React, { Component } from 'react'
import {categoryFilter} from '../actions/categoryFilter'
import {connect} from 'react-redux'

class CategoryFilter extends Component {

    category = ['All', 'Budget', 'Travel', 'Health', 'Mental Health', 'Spiritual', "Cooking", "Other" ]

    state ={
        category : "All"
    }

    handleSubmit = event => {
        // debugger
        event.preventDefault()
        // console.log(this.props.state)
        this.props.categoryFilter(this.state)
        
        
    }
    
    handleChange = event => {
        // debugger
        this.setState({
            category: event.target.value
        })


    }

    render (){
        return(
            <form onSubmit = {event => this.handleSubmit(event)}> 
                <select name="category" onChange = {event => this.handleChange(event)}>
                    {this.category.map((cat, i) => <option key={i}value={this.state.categoy}>{`${cat}`}</option>)}
                </select>
                <input type="submit" />
            </form>
        )
    }
}

// const mapStatetoProps = ({goals})=> ({goals})

export default connect(null, {categoryFilter})(CategoryFilter)