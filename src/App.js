import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path="/BurgerBuilder/checkout" element={<Checkout />} />
            <Route path="/BurgerBuilder/orders" element={<Orders />} />
            <Route path="/BurgerBuilder" element={<BurgerBuilder />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
