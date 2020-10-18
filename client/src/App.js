import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Menu from './pages/Menu.js';
import Cart from './pages/Cart.js';
import Checkout from './pages/Checkout.js';
import Dining from './pages/Dining.js';

function App(props) {

    const { database, menuItems } = props;
    const [ pageIndex, setPageIndex ] = useState(0);

    return (
        <div>
            <Navbar bg="light" expand="lg" style={{'zIndex': '2'}}>
                <Navbar.Brand href="#home">Welcome to Olive Garden!</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href={"#"} onClick={() => {setPageIndex(1)}}>View Cart</Nav.Link>
                        <Nav.Link href={'#'} onClick={() => {setPageIndex(0)}}>View Menu</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            { pageIndex === 0 ? <Menu items = {menuItems} /> : <></>}
            { pageIndex === 1 ? <Cart items = {menuItems} /> : <></>}
            { pageIndex === 2 ? <Checkout onSubmit = {
                () => {
                    setPageIndex(3);
                    const wholeCart = JSON.parse(sessionStorage.getItem("cart"));
                    let data = [];
                    menuItems.forEach((item) => {
                        if (wholeCart[item.name] != null) {
                            data.push(JSON.stringify({"name":item.name, "count":wholeCart[item.name], "comments": ""}));
                        }
                    });
                    let currentURL = window.location.search.substring(1);
                    database.collection('restaurants').doc('rFxSt5fTT3Kp4NphAomx').collection('tables').doc(currentURL).set({
                        orders: data,
                        status: 'Order Received'
                    })
                }
            } totalPrice = {sessionStorage.getItem("total")}/> : <></>}
            { pageIndex === 3 ? <Dining /> : <></>}
            <Navbar fixed="bottom" bg={"light"} expand={"lg"} style={{"padding":"0px", 'width':'100%'}}>
                <Row className={"justify-content-center"} style={{"width":"100%"}}>
                    <Col style={{"paddingRight":"0px"}}>
                        { (pageIndex < 2) ? <Button size={'lg'} variant={"success"} style={{"width":"105%"}} onClick={() => {
                            setPageIndex(pageIndex + 1);
                        }}> Checkout </Button> : <></>}
                    </Col>
                </Row>
            </Navbar>
        </div>
    );
}

export default App;
