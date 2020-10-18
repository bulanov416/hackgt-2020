import React, { useState } from 'react';

import AddMenuItem from "./pages/AddMenuItem";
import RestaurantNavbar from "./components/RestaurantNavbar";
import OrderHistory from './pages/OrderHistory.js';
import ActiveOrders from "./pages/ActiveOrders";
import DashboardItem from './pages/DashboardItem';
import Dashboard from './pages/Dashboard';

function App(props) {
    const { database } = props;
    const [pageIndex, setPageIndex] = useState(0);

    return (
        <div className="App">
            <RestaurantNavbar updatePage={(i) => {
                setPageIndex(i);
            }}/>
            { pageIndex === 0 ? <ActiveOrders database = { database }/> : <></>}
            { pageIndex === 1 ? <AddMenuItem database = { database }/> : <></>}
                {/*<Dashboard/>*/}
        </div>
    );
}

export default App;
