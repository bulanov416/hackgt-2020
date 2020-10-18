import React, { useState } from 'react';

import '../static/css/ActiveOrders.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import loading from "../static/assets/loading_gif.gif";

import OrderItem from "../components/OrderItem";


//page for viewing the active orders
function ActiveOrders(props) {

    const { database } = props


    const [ currentTable, setCurrentTable ] = useState(1);
    const [ orders, setOrders ] = useState([]);
    const [ status, setStatus ] = useState("orderPending");

    const tableHandler = (tableNum) => {
        setCurrentTable(tableNum);

        var docRef = database.collection('restaurants').doc("rFxSt5fTT3Kp4NphAomx").collection('tables').doc('table'+tableNum);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                setOrders(doc.data().orders);
                setStatus(doc.data().status);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        console.log('CurrentTable: ', currentTable);
        console.log('Orders: ', orders);
        console.log('Status: ', status);
    }

    const orderItems = [];
    if (orders != null) {
        orders.forEach((order) => {
            let orderJSON = JSON.parse(order);
            let dishName = orderJSON.name;
            let dishCount = orderJSON.count;
            let dishComments = orderJSON.comments;
            orderItems.push(<OrderItem name={dishName} quantity={dishCount} notes={dishComments}/>);
        })
    }

    return (
        <div className={"active-orders"}>
            <div className = "split left">
                <div className = "tables">
                    <Container style={{'height': '100%'}}>
                        <Col>
                            <Row style={{'height': '80%'}}>
                                <p><br></br></p>
                            </Row>
                        </Col>
                        <a onClick={() => {tableHandler(1)}}>
                            <Card style={{'height': '25%'}}>
                                <Card.Body>TABLE 1</Card.Body>
                            </Card>
                        </a>
                        <Col>
                            <Row style={{'height': '80%'}}>
                                <p><br></br></p>
                            </Row>
                        </Col>
                        <a onClick={() => {tableHandler(2)}}>
                            <Card style={{'height': '25%'}}>
                                <Card.Body>TABLE 2</Card.Body>
                            </Card>
                        </a>
                        <Col>
                            <Row style={{'height': '80%'}}>
                                <p><br></br></p>
                            </Row>
                        </Col>
                        <a onClick={() => {tableHandler(3)}}>
                            <Card style={{'height': '25%'}}>
                                <Card.Body>TABLE 3</Card.Body>
                            </Card>
                        </a>
                    </Container>
                </div>
            </div>
            <div className={"split right"}>
                <Row className={'justify-content-center'} style={{"marginTop":"56px"}}>
                    <Col>
                        <h1 style={{"width":"100%"}}>Table {currentTable}</h1>
                        <Container style={{'padding':'0px'}}>
                            {
                                (orders != null) ? orderItems :
                                <div style={{'width': '100%', 'textAlign': 'center'}}>
                                    <img src={loading} style={{'width': '20px'}} alt='loading...'/>
                                </div>
                            }
                        </Container>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ActiveOrders;
