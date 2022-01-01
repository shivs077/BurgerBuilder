import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/BurgerBuilder">Burger Builder</NavigationItem>
    <NavigationItem link="/BurgerBuilder/orders">Orders</NavigationItem>
  </ul>
);

export default NavigationItems;
