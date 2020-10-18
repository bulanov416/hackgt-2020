import React from 'react';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function OrderHistoryItem(props) {

    const { time, table, quantity, order, hasQuantity, note } = props;

    return (
        <>
            <Card style={{ width: '100%' }} style={{marginBottom: "20px"}}>
                <Card.Header>
                    <Row style={{'width':'100%'}}>
                            <Col sm={4} xs={5}>
                                {time}
                                {table}
                            </Col>
                    </Row>
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Col sm={1} xs={2}>
                            { hasQuantity &&
                                <Badge pill variant="dark"> { quantity } </Badge> 
                            }
                        </Col>
                        <Col sm={6} xs={4}>
                            {order}
                            {note}
                        </Col>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Col sm={1} xs={2}>
                            { hasQuantity &&
                                <Badge pill variant="dark"> { quantity } </Badge> 
                            }
                        </Col>
                        <Col sm={6} xs={4}>
                            {order}
                            {note}
                        </Col>
                    </ListGroup.Item >
                </ListGroup>
            </Card>
        </>
    );
}

export default OrderHistoryItem;
