import React from "react";
import { number } from "prop-types";

import styles from "./Counter.scss";

const Counter = props => {
  const { valueLength, maxLength } = props;

  return (
    <span
      className={
        valueLength >= maxLength ? styles.counterWarning : styles.counter
      }
    >
      {valueLength}/{maxLength}
    </span>
  );
};

Counter.propTypes = {
  valueLength: number.isRequired,
  maxLength: number.isRequired,
};

export default Counter;
