import React from "react";
import { Route } from "react-router-dom";

import SuspenseLoader from "../loader/SuspenseLoader";

const SuspensedRoute = ({ component: Component, children, ...props }) => {
  
  if (Component) {
    return (
      <Route {...props}>
        <SuspenseLoader>
          <Component />
        </SuspenseLoader>
      </Route>
    );      
  }

  return (
    <Route {...props}>
      <SuspenseLoader>{children}</SuspenseLoader>
    </Route>
  );
}

export default SuspensedRoute;