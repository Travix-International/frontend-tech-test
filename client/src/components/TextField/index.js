import "./styles.scss";
import React from "react";

const TextField = ({
  label,
  className = "",
  component = "input",
  innerRef,
  ...rest
}) => {
  const Component = component;

  return (
    <div className={`text-field ${className}`}>
      <label>
        <div className="text-field__label">{label}</div>
        <Component ref={innerRef} className="text-field__input" {...rest} />
      </label>
    </div>
  );
};

export default TextField;
