import React from 'react';

import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

function OrderItem(props) {

    const {name, quantity, notes} = props;

    return (
        <ListGroup.Item>
            <Row style={{"textAlign":"left"}}>
                <Col xs={1}><Badge pill variant="dark">{ quantity }</Badge></Col>
                <Col xs={11}><h5>{ name }</h5></Col>
            </Row>
            {
                notes &&
                <Row style={{"textAlign": "left"}}>
                    <Col xs={1}/>
                    <Col xs={11}><p> {notes} </p></Col>
                </Row>
            }
        </ListGroup.Item>
    );
}
export default OrderItem;
