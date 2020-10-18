//dashboard for restaurant to track analytics and see patterns/trends they can use 
//for example, know which days busier and needs more staff 
//"successfully served 34 parties within this week" 
//Thursday and Friday evenings && 6-8 PM were the busiest times this week 

import React from "react";

import DashboardItem from "../pages/DashboardItem";
import Container from "react-bootstrap/Container";

function Dashboard() {
    return(
        <Container style={{'padding':'0px'}}>
            <h1 class = "text-center">Dashboard</h1>
            <br></br>
            <DashboardItem total={"34"} days={"Thursday and Friday"}  times={"6-8 PM"}/>
        </Container>
    );
}

export default Dashboard;