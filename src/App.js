import React from "react"
import {Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Cards from "./pages/Cards"

function App() {
  return (
    <div>
      <Header />
      <Routes>

        <Route exact path = "localhost:3000/">
          <Cards />
        </Route>

        <Route path = "localhost:3000/cart">
          <Cart />
        </Route>
        
      </Routes>

    </div>
  );
}

export default App;
