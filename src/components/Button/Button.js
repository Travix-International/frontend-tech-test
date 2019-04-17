/* eslint-disable react/button-has-type */
// 'type' is generic and comes from props
import React from "react";
import { string, func, bool } from "prop-types";

import Spinner from "../Spinner";
import styles from "./Button.scss";

const Button = props => {
  const { children, loading, onClick, type } = props;

  return (
    <button
      className={styles.Button}
      disabled={loading}
      onClick={onClick}
      type={type}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

Button.defaultProps = {
  loading: false,
  type: "submit",
  onClick: () => {},
};

Button.propTypes = {
  children: string.isRequired,
  onClick: func,
  loading: bool,
  type: string,
};

export default Button;
