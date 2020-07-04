import React, { Component } from 'react'

class CategoryFilter extends Component {

    category = ['Budget', 'Travel', 'Health', 'Mental Health', 'Spiritual']

    state ={
        category : ""
    }

    handleSubmit = event => {
        event.preventDefault()
        debugger
    }
    

    render (){
        return(
            <form> 
                <select value="category">
                {this.category.map(cat => <option value={`${cat}`}>{`${cat}`}</option>)}
                </select>
                <input type="submit" onSubmit={event => this.handleSubmit(event)}/>
            </form>
        )
    }
}

export default CategoryFilter