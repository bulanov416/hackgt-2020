import React from 'react';

import AddMenuItem from "./pages/AddMenuItem";
import RestaurantNavbar from "./components/RestaurantNavbar";
import ActiveOrders from "./pages/ActiveOrders";

function App() {
  return (
    <div className="App">
      <RestaurantNavbar/>
        <ActiveOrders/>
    </div>
  );
}

export default App;
