import { useState } from "react";

import classes from "./Layout.module.css";
import Toolbar from "components/Navigation/Toolbar/Toolbar";
import SideDrawer from "components/Navigation/SideDrawer/SideDrawer";

const Layout = ({ children }) => {
  const [showSideDrawer, setSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={classes.Content}>{children}</main>
    </>
  );
};

export default Layout;
