import React from "react";

import MenuItem from "../components/MenuItem";
import Container from "react-bootstrap/Container";

function Menu() {
    return(
        <Container style={{'padding':'0px'}}>
            <MenuItem name={"Strawberries"} description={"A delicious berry"}/>
            <MenuItem name={"Blueberries"} description={"A delicious berry"}/>
            <MenuItem name={"Blackberries"} description={"A delicious berry"}/>
        </Container>
    );
}

export default Menu;
