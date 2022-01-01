import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Burger from "components/Burger/Burger";
import BuildControls from "components/Burger/BuildControls/BuildControls";
import Modal from "components/UI/Modal/Modal";
import OrderSummary from "components/Burger/OrderSummary/OrderSummary";
import Spinner from "components/UI/Spinner/Spinner";
import withErrorHandler from "hoc/withErrorHandler/withErrorHandler";
import axios from "axios-orders";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const BurgerBuilder = ({}) => {
  const [ingredients, setIngredients] = useState({});
  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://burgerbuilder-4732b.firebaseio.com//ingredients.json")
      .then((response) => {
        setIngredients(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    setPurchasable(sum > 0);
  };

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;
    setTotalPrice(newPrice);
    setIngredients(updatedIngredients);
    updatePurchaseState(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceDeduction;
    setTotalPrice(newPrice);
    setIngredients(updatedIngredients);
    updatePurchaseState(updatedIngredients);
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    // alert('You continue!');

    const queryParams = [];
    for (let i in ingredients) {
      queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(ingredients[i]));
    }
    queryParams.push("price=" + totalPrice);
    const queryString = queryParams.join("&");
    navigate({
      pathname: "/BurgerBuilder/checkout",
      search: "?" + queryString,
    });
  };

  const disabledInfo = {
    ...ingredients,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let orderSummary = null;
  let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

  if (ingredients) {
    burger = (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={addIngredientHandler}
          ingredientRemoved={removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={purchasable}
          ordered={purchaseHandler}
          price={totalPrice}
        />
      </>
    );
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        price={totalPrice}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }
  if (loading) {
    burger = <Spinner />;
  }
  // {salad: true, meat: false, ...}
  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
