import "./styles.scss";
import React from "react";

const Fab = ({ className = "", primary, children, ...rest }) => {
  const classNames = `fab ${primary ? "fab_primary" : ""} ${className}`;

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};
export default Fab;
