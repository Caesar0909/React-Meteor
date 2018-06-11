import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const Authenticated = ({
  loggingIn,
  authenticated,
  component,
  path,
  exact,
  ...rest
}) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      authenticated ? (
        React.createElement(component, {
          ...props,
          ...rest,
          loggingIn,
          authenticated
        })
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

Authenticated.defaultProps = {
  path: "",
  exact: false,
  authenticated: false,
  loggingIn: false
};

Authenticated.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
  component: PropTypes.func.isRequired,
  path: PropTypes.string,
  exact: PropTypes.bool
};

export default Authenticated;
