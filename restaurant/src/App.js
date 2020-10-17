import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Table from './components/Table.js';  

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Jerry's Berrys</Navbar.Brand>
            <Button variant="outline-info">Select Restaurant</Button>
            <Button variant="outline-info">View Active Orders</Button>
            <Button variant="outline-info">Edit Menu</Button>
        </Navbar>
        <Container>
            <Table name={"Table 1"} description={"Hamburger"}/>
            <Table name={"Table 2"} description={"Salad"}/>
            <Table name={"Table 3"} description={"Smoothie"}/>
        </Container>
    </div>
  );
}

export default App;