import React, {useEffect} from "react";

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

    useEffect(() => {
        if (!sessionStorage.getItem("cart")) {
            sessionStorage.setItem("cart", "{}");
        }
        if (!sessionStorage.getItem("total")) {
            sessionStorage.setItem("total", "0.00");
        }
    }, []);

    if (items != null) {
        items.forEach((item) => {
            if (item.category === "Appetizer") {
                appetizerItems.push(<MenuItem name={item.name} description={item.description} price={item.price}
                                              key={item.uuid}/>);
            } else if (item.category === "Entree") {
                entreeItems.push(<MenuItem name={item.name} description={item.description} price = {item.price} key={item.uuid}/>);
            } else if (item.category === "Side") {
                sideItems.push(<MenuItem name={item.name} description={item.description} price = {item.price} key={item.uuid}/>);
            } else if (item.category === "Dessert") {
                dessertItems.push(<MenuItem name={item.name} description={item.description} price = {item.price} key={item.uuid}/>);
            } else if (item.category === "Beverage") {
                beverageItems.push(<MenuItem name={item.name} description={item.description} price = {item.price} key={item.uuid}/>);
            }
        });
    }

    return(
        <Container style={{'padding':'50px'}}>
            <h1 class="text-center">Menu</h1>
            <br></br>
            <h2>Appetizers</h2>
            {
                (items != null) ? appetizerItems :
                <div style={{'width': '100%', 'textAlign': 'center'}}>
                    <img src={loading} style={{'width': '20px'}} alt='loading...'/>
                </div>
            }
            <br></br>
            <h2>Entrees</h2>
            {
                (items != null) ? entreeItems :
                <div style={{'width': '100%', 'textAlign': 'center'}}>
                    <img src={loading} style={{'width': '20px'}} alt='loading...'/>
                </div>
            }
            <br></br>
            <h2>Sides</h2>
            {
                (items != null) ? sideItems :
                <div style={{'width': '100%', 'textAlign': 'center'}}>
                    <img src={loading} style={{'width': '20px'}} alt='loading...'/>
                </div>
            }
            <br></br>
            <h2>Desserts</h2>
            {
                (items != null) ? dessertItems :
                <div style={{'width': '100%', 'textAlign': 'center'}}>
                    <img src={loading} style={{'width': '20px'}} alt='loading...'/>
                </div>
            }
            <br></br>
            <h2>Beverages</h2>
            {
                (items != null) ? beverageItems :
                <div style={{'width': '100%', 'textAlign': 'center'}}>
                    <img src={loading} style={{'width': '20px'}} alt='loading...'/>
                </div>
            }
        </Container>
    );
}

export default Menu;
