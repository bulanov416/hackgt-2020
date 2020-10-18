import React, { useState } from 'react';

import AddMenuItem from "./pages/AddMenuItem";
import RestaurantNavbar from "./components/RestaurantNavbar";
import ActiveOrders from "./pages/ActiveOrders";
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
            { pageIndex === 2 ? <Dashboard /> : <></>}
        </div>
    );
}

export default App;