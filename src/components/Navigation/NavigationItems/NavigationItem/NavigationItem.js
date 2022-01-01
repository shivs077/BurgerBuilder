import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink end to={props.link} className={({ isActive }) => (isActive ? classes.active : "")}>
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;
