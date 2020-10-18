import React, { useEffect } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Menu from './pages/Menu.js';

const firebaseConfig = {
    apiKey: "AIzaSyAUrlthvN7-mzjShK52AfthkX6yepCuwgk",
    authDomain: "hackgt2020-5847e.firebaseapp.com",
    databaseURL: "https://hackgt2020-5847e.firebaseio.com",
    projectId: "hackgt2020-5847e",
    storageBucket: "hackgt2020-5847e.appspot.com",
    messagingSenderId: "838591600721",
    appId: "1:838591600721:web:829023369df328b7a18070"
};

function App(props) {

    const { database, menuItems } = props;

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Olive Garden</Navbar.Brand>
            </Navbar>
            <h1 class="text-center">Menu</h1>
            <br></br>
            <Menu items = {menuItems} />
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
