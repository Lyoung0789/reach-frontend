import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import SearchBar from './SearchBar'


const NavBar = (props) => {
    // debugger
    return (
        
        <Navbar bg="info" variant="dark" >
            <Navbar.Brand>Reach App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} exact to="/goals">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/goals/new" >New Goal</Nav.Link>
                <Nav.Link  as={NavLink} to="/goals/goals_reached">Reached Goals</Nav.Link>
            </Nav>
            
            <SearchBar routerProps={props}/>
        </Navbar>
    )
}

export default NavBar
