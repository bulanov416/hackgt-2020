import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MenuItem from './components/MenuItem.js';

function App() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Jerry's Berrys</Navbar.Brand>
            <Button variant="outline-info">Cart</Button>
        </Navbar>
        <Container>
            <MenuItem name={"Strawberries"} description={"A delicious berry"}/>
            <MenuItem name={"Blueberries"} description={"A delicious berry"}/>
            <MenuItem name={"Blackberries"} description={"A delicious berry"}/>
        </Container>
        <Navbar fixed="bottom" bg={"light"} expand={"lg"} style={{"padding":"0px", 'width':'100%'}}>
            <Row className={"justify-content-center"} style={{"width":"100%"}}>
                <Col style={{"paddingRight":"0px"}}>
                    <Button size={'lg'} variant={"success"} style={{"width":"105%"}}>Checkout</Button>
                </Col>
            </Row>
        </Navbar>
    </div>
  );
}

export default App;
