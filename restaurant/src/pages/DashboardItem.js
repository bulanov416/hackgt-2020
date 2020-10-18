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
                            <Card.Text className="mb-2 text-muted"> {days} were the busiest days this week.</Card.Text>
                            <Card.Text className="mb-2 text-muted"> {times} was the busiest time this week.</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default DashboardItem;
