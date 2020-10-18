import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";

function DashboardItem(props) {

    const { total, days, times } = props;

    return (
        <>
            <Card bg='secondary'>
                <Card.Body>
                    <p class="font-weight-bold">{days}</p><Card.Text className="mb-2"> were the busiest days this week.</Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card bg = 'success'>
                <Card.Body>
                        <Card.Text className="mb-2">Successfully served <b>{ total }</b> parties within the past week.</Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card bg='secondary'>
                <Card.Body>
                <p class="font-weight-bold">{times}</p><Card.Text className="mb-2"> was the busiest time this week.</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default DashboardItem;
