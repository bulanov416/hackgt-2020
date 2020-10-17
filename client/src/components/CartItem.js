import React from 'react';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";

function CartItem(props) {

    const { name, quantity, price } = props;

    return (
        <>
            <Card>
                <Card.Body>
                    <Row style={{'width':'100%'}}>
                        <Col>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> { quantity } </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"> { price }</Card.Subtitle>
                        </Col>
                        <Col style={{"paddingRight":"0px"}}>
                            <Button variant={'outline-success'} className={"float-right"} style={{'marginTop':'7px'}}>+</Button>
                            <Button variant={'outline-success'} className={"float-right"} style={{'marginTop':'7px'}}>-</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default CartItem;
