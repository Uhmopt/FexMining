import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => Boolean(state?.auth?.isAuth));
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
