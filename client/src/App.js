import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar';
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
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Welcome to Olive Garden!</Navbar.Brand>
                <Button variant="outline-info">View Cart</Button>
            </Navbar>
            { pageIndex === 0 ? <Menu items = {menuItems} /> : <></>}
            { pageIndex === 1 ? <Cart /> : <></>}
            { pageIndex === 2 ? <Checkout onSubmit = {() => {setPageIndex(3);}
            } /> : <></>}
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
