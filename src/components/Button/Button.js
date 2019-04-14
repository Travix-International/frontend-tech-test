import React from "react";
import { string, func, bool } from "prop-types";

import Spinner from "../Spinner";

import styles from "./Button.scss";

const Button = props => {
  const { children, loading, onClick } = props;

  return (
    <button className={styles.Button} onClick={onClick} disabled={loading}>
      {loading ? <Spinner /> : children}
    </button>
  );
};

Button.propTypes = {
  children: string.isRequired,
  onClick: func,
  loading: bool,
};

export default Button;
