import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Dining() {
    return(
        <Container style={{'padding':'100px'}}>
            <h1 class="text-center">
                Dining in Progress...
            </h1>
            <br></br><br></br>
            <Button variant="primary" size="lg" block>
                Request Refill
            </Button>
            <Button variant="secondary" size="lg" block>
                Request Waiter
            </Button>
            <Button variant="primary" size="lg" block>
                Order More
            </Button>
            <Button variant="secondary" size="lg" block>
                Leave Restaurant
            </Button>
        </Container>
    );
}

export default Dining;

