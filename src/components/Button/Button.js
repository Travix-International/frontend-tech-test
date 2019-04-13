import React from "react";
import { string, func } from "prop-types";

import styles from "./Button.scss";

const Button = props => {
  const { children } = props;

  const onClick = () => {
    const { onClick } = props;
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: string.isRequired,
  onClick: func,
};

export default Button;
