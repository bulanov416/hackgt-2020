import React from 'react';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function CartItem(props) {

    const { name, quantity, price, canDelete, hasQuantity } = props;
    const element = <FontAwesomeIcon icon={faTrash} />

    return (
        <>
            <Card>
                <Card.Body>
                    <Row style={{'width':'100%'}}>
                        <Col sm={1} xs={2}>
                            <Card.Title className="mb-2 text-muted">
                                { hasQuantity &&
                                <Badge pill variant="dark"> { quantity } </Badge> 
                                }
                            </Card.Title>
                        </Col>
                        <Col sm = {8} xs={6}>
                            <Card.Title>{name}</Card.Title>
                        </Col>
                        <Col sm = {2} xs={3}>
                            <Card.Title className="mb-2 text-muted"> { price }</Card.Title>
                        </Col>
                        <Col sm= {1} style={{"paddingRight":"0px"}} xs={1}>
                            { canDelete && 
                            <Button variant={'outline-danger'} className={"float-right"}>{element}</Button> 
                            }
                            {/* <Button variant={'outline-success'} className={"float-right"} style={{'marginTop':'7px'}}>+</Button>  */}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default CartItem;
