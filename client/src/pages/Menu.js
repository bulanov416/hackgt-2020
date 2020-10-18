import React from "react";

import MenuItem from "../components/MenuItem";
import Container from "react-bootstrap/Container";
import loading from "../static/assets/loading_gif.gif";

function Menu(props) {

    const { items } = props;

    const menuItems = [];
    if (items != null) {
        items.forEach((item) => {
            menuItems.push(<MenuItem name={item.name} description={item.description} key={item.uuid}/>);
        });
    }

    return(
        <Container style={{'padding':'0px'}}>
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
