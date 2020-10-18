import React from 'react';

import AddMenuItem from "./pages/AddMenuItem";
import RestaurantNavbar from "./components/RestaurantNavbar";
import ActiveOrders from "./pages/ActiveOrders";

function App(props) {
  const { database } = props;

  return (
    <div className="App">
      <RestaurantNavbar/>
        <AddMenuItem database = { database }/>
    </div>
  );
}

export default App;
