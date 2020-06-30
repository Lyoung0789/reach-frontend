import React, { Component } from 'react'
import Goals from '../components/Goals'
import { connect } from 'react-redux'
import { fetchGoals } from '../actions/fetchGoals'
import GoalsInput from '../components/GoalsInput'



class GoalsContainer extends Component{

    componentDidMount(){
        this.props.fetchGoals()
    }

    render(){
        // debugger
        return (
            <div>Goals Container
                <GoalsInput /> <br/>
                <Goals goals={this.props.goals} />
            </div>
        )
    }

}



const mapStateToProps = ({goals}) => ({goals})

export default connect(mapStateToProps, {fetchGoals})(GoalsContainer)
