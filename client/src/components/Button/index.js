import "./styles.scss";
import React from "react";

const Button = ({ className, primary, children, ...rest }) => {
  const classNames = `button ${primary ? "button_primary" : ""} ${className}`;

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
