import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function RestaurantNavbar(props) {

    const { updatePage } = props;

    return (
        <Navbar bg="light" expand="lg" style={{'zIndex': '2'}}>
            <Navbar.Brand href="#home">Olive Garden</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#" onClick={() => {updatePage(0);}}>Orders</Nav.Link>
                    <Nav.Link href="#" onClick={() => {updatePage(1);}}>Add Menu Item</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default RestaurantNavbar;
