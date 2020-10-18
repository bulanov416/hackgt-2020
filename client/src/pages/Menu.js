import React from "react";

import MenuItem from "../components/MenuItem";
import Container from "react-bootstrap/Container";
import loading from "../static/assets/loading_gif.gif";

function Menu(props) {

    const { items } = props;

    const appetizerItems = [];
    const entreeItems = [];
    const sideItems = [];
    const dessertItems = [];
    const beverageItems = [];
    const menuItems = [];

    if (items != null) {
        items.forEach((item) => { if (item.name.length != 0) {
<<<<<<< HEAD
            menuItems.push(<MenuItem name={item.name} description={item.description} price = {item.price} key={item.uuid}/>);
=======

            menuItems.push(<MenuItem name={item.name} description={item.description} key={item.uuid}/>);
>>>>>>> ef53d81f37069d00131aa77b8a48b3a483d0286b
        }});
    }

    return(
        <Container style={{'padding':'50px'}}>
            <h1 class="text-center">Menu</h1>
            <br></br>
            {
                (items != null) ? menuItems :
                <div style={{'width': '100%', 'textAlign': 'center'}}>
                    <img src={loading} style={{'width': '20px'}} alt='loading...'/>
                </div>
            }
        </Container>
    );
}

export default Menu;
