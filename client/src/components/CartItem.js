import React from 'react';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function CartItem(props) {

    const { name, quantity, price } = props;
    const element = <FontAwesomeIcon icon={faTrash} />

    return (
        <>
            <Card>
                <Card.Body>
                    <Row style={{'width':'100%'}}>
                        <Col>
                            <Card.Title className="mb-2 text-muted"> { quantity } </Card.Title>
                        </Col>
                        <Col>
                            <Card.Title>{name}</Card.Title>
                        </Col>
                        <Col>
                            <Card.Title className="mb-2 text-muted"> { price }</Card.Title>
                        </Col>
                        <Col style={{"paddingRight":"0px"}}>
                            <Button variant={'outline-danger'} className={"float-right"} style={{'marginTop':'7px'}}>{element}</Button>
                            <Button variant={'outline-success'} className={"float-right"} style={{'marginTop':'7px'}}>+</Button> 
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default CartItem;
