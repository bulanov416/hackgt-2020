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
                        <Col sm = {7}>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> { description } </Card.Subtitle>
                        </Col>
                        <Col sm = {4}>
                            <Card.Title style={{"textAlign":"right", "marginTop":"15px"}}>${`${price}`}</Card.Title>
                        </Col>
                        <Col sm = {1} style={{"paddingRight":"0px"}}>
                            <Button variant={'outline-success'} className={"float-right"} style={{'marginTop':'7px'}} onClick={() => {
                                const cart = JSON.parse(sessionStorage.getItem("cart"));
                                let total = parseFloat(sessionStorage.getItem("total"));
                                console.log(total);
                                if (cart[name] != null) {
                                    cart[name] = cart[name] + 1;
                                } else {
                                    cart[name] = 1;
                                }
                                if (total != null) {
                                    total += parseFloat(price);
                                } else {
                                    total = parseFloat(price);
                                }
                                sessionStorage.setItem("cart", JSON.stringify(cart));
                                sessionStorage.setItem("total", `${total}`);
                            }}>+</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default MenuItem;
