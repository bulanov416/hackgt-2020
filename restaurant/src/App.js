import React from 'react';

import AddMenuItem from "./pages/AddMenuItem";
import RestaurantNavbar from "./components/RestaurantNavbar";
import OrderHistory from '../../restaurant/src/pages/OrderHistory.js';

function App() {
  return (
    <div className="App">
      <RestaurantNavbar/>
        <OrderHistory/>
    </div>
  );
}

export default App;
