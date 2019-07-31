import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/BurgerBuilder/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/BurgerBuilder/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;