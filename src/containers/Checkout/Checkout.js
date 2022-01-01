import { useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

import CheckoutSummary from "components/Order/CheckoutSummary/CheckoutSummary";
// import ContactData from "./ContactData/ContactData";

const Checkout = () => {
  const [ingredients, setIngredients] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      // ['salad', '1']
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    setIngredients(ingredients);
    setTotalPrice(price);
  }, [search]);

  const checkoutCancelledHandler = () => {
    navigate(-1);
  };

  const checkoutContinuedHandler = () => {
    navigate(`contact-data${search}`, { replace: true });
  };

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Outlet context={[ingredients, totalPrice]} />
    </div>
  );
};

export default Checkout;
