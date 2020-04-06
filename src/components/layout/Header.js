
import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Class Stuff</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/todo">Todo</Nav.Link>
                <Nav.Link href="/projects">Project Management</Nav.Link>
                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>

        </Navbar>
    )
}

export default Header
