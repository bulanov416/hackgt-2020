import React, { useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";

function MenuItem(props) {

    const { name, description, price } = props;

    return (
        <>
            <Card>
                <Card.Body>
                    <Row style={{'width':'100%'}}>
                        <Col>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> { description } </Card.Subtitle>
                        </Col>
                        <Col>
                            <Card.Title>${price}</Card.Title>
                        </Col>
                        <Col style={{"paddingRight":"0px"}}>
                            <Button variant={'outline-success'} className={"float-right"} style={{'marginTop':'7px'}} onClick={() => {
                                const cart = JSON.parse(sessionStorage.getItem("cart"));
                                let total = parseFloat(sessionStorage.getItem("total"));
                                if (cart[name] != null) {
                                    cart[name] = cart[name] + 1;
                                    total += price;
                                } else {
                                    cart[name] = 1;
                                    total = price;
                                }
                                sessionStorage.setItem("cart", JSON.stringify(cart));
                                sessionStorage.setItem("total", JSON.stringify(total));
                            }}>+</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default MenuItem;
