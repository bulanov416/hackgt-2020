import React from 'react';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";

function MenuItem(props) {

    const { name, description, price } = props;
    let wholeCart = [];
    sessionStorage.setItem("cart", wholeCart);
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
                                let temp = [name, description, price];
                                wholeCart.push(temp);
                                console.log("Adding temp to whole cart: ", temp);
                            }}>+</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default MenuItem;
