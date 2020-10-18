import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";

function Table(props) {

    const { name, description, price } = props;

    return (
        <>
            <Card>
                <Card.Body>
                    <Row style={{'width':'100%'}}>
                        <Col>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> { description } </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted"> { price } </Card.Subtitle>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default Table;
