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
      <span>{children}</span>
      {onDismiss ? (
        <div className={styles.dismiss}>
          <Icon glyph="x" color="white" onClick={onDismiss} />
        </div>
      ) : null}
    </div>
  );
};

Notification.propTypes = {
  type: oneOf(["success", "error"]).isRequired,
  onDismiss: func,
  children: node,
};

export default Notification;
