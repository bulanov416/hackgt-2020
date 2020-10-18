import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";

function DashboardItem(props) {

    const { total, days, times } = props;

    return (
        <>
            <Card>
                <Card.Body>
                <Card.Title>Dashboard</Card.Title>
                    <Row style={{'width':'100%'}}>
                        <Col>
                            <Card.Text className="mb-2 text-muted">Successfully served { total } parties within the past week.</Card.Text>
                        </Col>
                        <Col style={{"paddingRight":"0px"}}>
                            <Card.Text className="mb-2 text-muted"> {days} and from {times} were the busiest times this week.</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default DashboardItem;
