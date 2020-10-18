import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Checkout(props) {
    return(
        <Container style={{'padding':'200px'}}>
            <h1 class="text-center">Checkout</h1>
            <br></br>
              <Alert variant="primary">
                Your total is ${props.totalPrice}
              </Alert>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name on Card</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="cardNum">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" placeholder="Card Number" />
                </Form.Group>
                <Form.Group controlId="expire">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control type="text" placeholder="MM/YY" />
                </Form.Group>
                <Form.Group controlId="code">
                    <Form.Label>Security Code</Form.Label>
                    <Form.Control type="text" placeholder="CVV" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Complete Payment
                </Button>
            </Form>
        </Container>
    );
}

export default Checkout;

