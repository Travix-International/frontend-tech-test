import React from "react";
import { oneOf, func, node } from "prop-types";
import cn from "classnames";

import Icon from "../Icon";
import styles from "./Notification.scss";

const Notification = props => {
  const { type, onDismiss, children } = props;

  const className = cn(styles.Notification, styles[type]);

  return (
    <div className={className}>
      {children}
      {onDismiss ? (
        <div className={styles.dismiss}>
          <Icon color="white" glyph="x" onClick={onDismiss} />
        </div>
      ) : null}
    </div>
  );
};

Notification.defaultProps = {
  onDismiss: () => {},
  children: <span />,
};

Notification.propTypes = {
  type: oneOf(["success", "error"]).isRequired,
  onDismiss: func,
  children: node,
};

export default Notification;
