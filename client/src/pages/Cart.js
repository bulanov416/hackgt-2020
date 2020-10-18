import React from "react";

import CartItem from "../components/CartItem";
import Container from "react-bootstrap/Container";
import loading from "../static/assets/loading_gif.gif";


function Cart(props) {

    const { items } = props;

    let wholeCart = JSON.parse(sessionStorage.getItem("cart"));
    let total = 0.0;
    const cartItems = [];

    if (wholeCart != null) {
        items.forEach((item) => {
            console.log(item.name);
            if (wholeCart[item.name] != null) {
                cartItems.push(<CartItem hasQuantity name={item.name} quantity={wholeCart[item.name]} price={item.price} key={item.uuid}/>);
                total += wholeCart[item.name] * item.price;
            }
        });
    }

    console.log(cartItems);

    return(
        <Container style={{'padding':'50px'}}>
            <h1 class="text-center">Cart</h1>
            <br></br>
            { (cartItems.length !== 0) ? <div>{cartItems}<CartItem name={"Total"} price = {`$${total}`}/></div> :
                <div style={{"textAlign":"center"}}>
                    <p>You have nothing in your cart!!!</p>
                </div>
            }
            {/*need to have total be something else --> not a cart item and need to add up total */}
        </Container>
    );
}

export default Cart;
