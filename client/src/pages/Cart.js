import React from "react";

import CartItem from "../components/CartItem";
import Container from "react-bootstrap/Container";
import loading from "../static/assets/loading_gif.gif";


function Cart() {
    let wholeCart = sessionStorage.get("cart");
    const cartItems = [];

    if (wholeCart != null) {
        wholeCart.forEach((item) => {
            cartItems.push(<CartItem name={item.name} quantity={"x1"} price={item.price}/>);
        });
    }



    return(
        <Container style={{'padding':'50px'}}>
            <h1 class="text-center">Cart</h1>
            <br></br>
            {
                (wholeCart != null) ? cartItems :
                <div style={{'width': '100%', 'textAlign': 'center'}}>
                    <img src={loading} style={{'width': '20px'}} alt='loading...'/>
                </div>
            }
            {/*need to have total be something else --> not a cart item and need to add up total */}
            <CartItem name={"Total"} price = {"$15.00"}/>
        </Container>
    );
}

export default Cart;