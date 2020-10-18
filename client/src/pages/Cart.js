import React from "react";

import CartItem from "../components/CartItem";
import Container from "react-bootstrap/Container";

function Cart() {
    return(
        <Container style={{'padding':'0px'}}>
            <CartItem name={"Strawberries"} quantity={"x2"} price={"$2.50"} canDelete hasQuantity/>
            <CartItem name={"Blackberries"} quantity={"x2"} price={"$2.50"} canDelete hasQuantity/>
            <CartItem name={"Cherries"} quantity={"x2"} price={"$2.50"} canDelete hasQuantity/>
            {/*need to have total be something else --> not a cart item and need to add up total */}
            <CartItem name={"Total"} price = {"$15.00"}/>
        </Container>
    );
}

export default Cart;
