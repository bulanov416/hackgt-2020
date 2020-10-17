import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MenuItem(props) {

    const { name, description } = props;

    return (
        <ListGroup.Item>
            <Row style={{'width':'100%'}}>
                <Col>
                    <p>{ name }</p>
                    <p> A delicious berry</p>
                </Col>
                <Col>
                    <Button variant={'outline-success'} className={"float-right"}>+</Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
}

export default MenuItem;
