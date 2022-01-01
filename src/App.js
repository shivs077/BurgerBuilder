import { Route, Routes } from "react-router-dom";

import Layout from "hoc/Layout/Layout";
import BurgerBuilder from "containers/BurgerBuilder/BurgerBuilder";
import Checkout from "containers/Checkout/Checkout";
import ContactData from "containers/Checkout/ContactData/ContactData";
import Orders from "containers/Orders/Orders";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/BurgerBuilder/checkout" element={<Checkout />}>
            <Route path="contact-data" element={<ContactData />} />
          </Route>
          <Route path="/BurgerBuilder/orders" element={<Orders />} />
          <Route path="/BurgerBuilder" element={<BurgerBuilder />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
