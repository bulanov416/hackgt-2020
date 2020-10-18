import React from 'react';

import AddMenuItem from "./pages/AddMenuItem";
import RestaurantNavbar from "./components/RestaurantNavbar";
import OrderHistory from './pages/OrderHistory.js';
import ActiveOrders from "./pages/ActiveOrders";
import DashboardItem from './pages/DashboardItem';
import Dashboard from './pages/Dashboard';

function App(props) {
  const { database } = props;

  return (
    <div className="App">
      <RestaurantNavbar/>
        {/* <AddMenuItem database = { database }/> */}
        {/* <ActiveOrders database = { database }/> */}
        <Dashboard/>
    </div>
  );
}

export default App;
