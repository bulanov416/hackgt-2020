import React from 'react';

import '../static/css/ActiveOrders.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import OrderItem from "../components/OrderItem";


//page for viewing the active orders
function ActiveOrders() {

    return (
        <div className={"active-orders"}>
            <div className = "split left">
                <div className = "tables">
                    <Container>
                        <Card>
                            <Card.Body>TABLE 1</Card.Body>
                        </Card>
                    </Container>
                </div>
            </div>
            <div className={"split right"}>
                <Row className={'justify-content-center'} style={{"marginTop":"56px"}}>
                    <Col>
                        <h1 style={{"width":"100%"}}>Table 1</h1>
                        <ListGroup>
                            <OrderItem name={"Strawberry"} quantity={1} notes={""}/>
                            <OrderItem name={"Blueberry"} quantity={2} notes={"Extra Blue Please"}/>
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        </div>
    );

}

export default ActiveOrders;
