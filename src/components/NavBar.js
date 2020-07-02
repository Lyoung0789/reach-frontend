import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={NavLink} to="/">Reach App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/goals">Home</Nav.Link>
                <Nav.Link as={NavLink}to="/goals/new" >New Goal</Nav.Link>
                <Nav.Link href="/goals/">Reached Goals</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavBar
