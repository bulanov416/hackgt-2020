import React, { useEffect } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Menu from './pages/Menu.js';
import Cart from './pages/Cart.js';
import MenuItemObject from './models/MenuItemObject';

import firebase from 'firebase';

import loading from './static/assets/loading_gif.gif';

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

    console.log(menuItems);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Jerry's Berrys</Navbar.Brand>
                <Button variant="outline-info">Cart</Button>
            </Navbar>
            <Cart />
            <div style={{'width': '100%', 'textAlign': 'center'}}>
                <img src={loading} style={{'width': '20px'}} alt='loading...'></img>
            </div>
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
