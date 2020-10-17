import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function RestaurantNavbar(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Jerry's Berrys</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Orders</Nav.Link>
                    <Nav.Link href="#">Add Menu Item</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default RestaurantNavbar;
