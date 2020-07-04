import React, { Component } from 'react'
import {categoryFilter} from '../actions/categoryFilter'
import {connect} from 'react-redux'

class CategoryFilter extends Component {

    category = ['Budget', 'Travel', 'Health', 'Mental Health', 'Spiritual']

    state ={
        category : ""
    }

    handleSubmit = event => {
        debugger
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
                    {this.category.map(cat => <option value={this.state.categoy}>{`${cat}`}</option>)}
                </select>
                <input type="submit" />
            </form>
        )
    }
}

const mapStatetoProps = ({goals})=> ({goals})

export default connect(mapStatetoProps, {categoryFilter})(CategoryFilter)