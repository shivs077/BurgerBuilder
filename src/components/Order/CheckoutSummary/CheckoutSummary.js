import Burger from "components/Burger/Burger";
import Button from "components/UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = ({ ingredients, checkoutCancelled, checkoutContinued }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="Danger" clicked={checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
