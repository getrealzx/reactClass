import React from 'react';
import {Navbar, Nav} from 'react-boostrap'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Class Stuff</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>

            </Navbar>
            <br />
        </>
    )
}

export default Header
