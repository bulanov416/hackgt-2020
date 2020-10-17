import React from 'react';

import AddMenuItem from "./pages/AddMenuItem";
import RestaurantNavbar from "./components/RestaurantNavbar";

function App() {
  return (
    <div className="App">
      <RestaurantNavbar/>
        <AddMenuItem/>
    </div>
  );
}

export default App;
