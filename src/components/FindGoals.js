import React, {Component} from 'react'
import {connect} from 'react-redux'
import Goals from './Goals'

class FindGoals extends Component{

    render(){
        
        // debugger
        return(
            <div>Im in here
                <Goals  goals={this.props.goals.filter(find => find.title.toLowerCase().includes(this.props.match.params.title.toLowerCase()))} />
            </div>
        )
        
        
    }
}

const mapStateToProps = ({goals}) => ({goals})

export default connect(mapStateToProps)(FindGoals)