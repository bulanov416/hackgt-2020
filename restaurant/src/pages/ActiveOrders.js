import React from 'react';

import '../static/css/ActiveOrders.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import OrderItem from "../components/OrderItem";

//page for viewing the active orders
function ActiveOrders() {

    return (
        <div className={"active-orders"}>
            <div className = "split left">
                <div className = "tables">

                </div>
            </div>
            <div className={"split right"}>
                <Row className={'justify-content-center'} style={{"marginTop":"56px"}}>
                    <Col>
                        <h1 style={{"width":"100%"}}>Table 1</h1>
                        <ListGroup>
                            <OrderItem name={"Strawberry"} quantity={1} notes={"Gluten Free"}/>
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        </div>
    );

}

export default ActiveOrders;
