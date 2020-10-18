import React from "react";

import OrderHistoryItem from "../pages/OrderHistoryItem";
import Container from "react-bootstrap/Container";

function OrderHistory() {
    return(
        <Container style={{'padding':'0px'}}>
            <OrderHistoryItem time={"4:55 PM"} table={"Table #2"} quantity = {"x2"} hasQuantity order={"Strawberry"}/>
            <OrderHistoryItem time={"5:10 PM"} table={"Table #4"} quantity = {"x1"} hasQuantity order={"Blueberry"} note={"Note: Extra Blue"}/>
            <OrderHistoryItem time={"5:15 PM"} table={"Table #4"} quantity = {"x1"} hasQuantity order={"Blackberry"}/>
        </Container>
    );
}

export default OrderHistory;