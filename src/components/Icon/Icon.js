import React from "react";
import { string, func, oneOf } from "prop-types";
import cn from "classnames";

import icons from "./icons";
import styles from "./Icon.scss";

const Icon = props => {
  const { glyph, onClick, color } = props;
  const Svg = icons[glyph];
  const className = cn(styles.Icon, styles[color]);
  return <Svg className={className} focusable="false" onClick={onClick} />;
};

Icon.defaultProps = {
  onClick: () => {},
  color: "blue",
};

Icon.propTypes = {
  glyph: string.isRequired,
  onClick: func,
  color: oneOf(["white", "blue"]),
};

export default Icon;
