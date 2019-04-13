import React from "react";
import { string, func } from "prop-types";

import icons from "./icons";
import styles from "./Icon.scss";

const Icon = props => {
  const { glyph, onClick } = props;
  const Svg = icons[glyph];

  return <Svg className={styles.Icon} onClick={onClick} focusable="false" />;
};

Icon.propTypes = {
  glyph: string.isRequired,
  onClick: func,
};

export default Icon;
