import React from "react";
import propTypes from "prop-types";

const isFunction = target => typeof target === "function";

const ApolloDisplay = ({
  hasError,
  isLoading,
  getLoadingComponent,
  getErrorComponent,
  getComponent
}) => {
  let body = null;

  if ( isLoading ) {
    body = getLoadingComponent();
  } else if ( hasError ) {
    body = getErrorComponent();
  } else {
    body = getComponent();
  }

  return body;
}

ApolloDisplay.propTypes = {
  hasError: propTypes.bool.isRequired,
  isLoading: propTypes.bool.isRequired,
  getLoadingComponent: propTypes.func.isRequired,
  getErrorComponent: propTypes.func.isRequired,
  getComponent: propTypes.func.isRequired
};

export default ApolloDisplay;
