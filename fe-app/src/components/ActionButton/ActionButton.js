import React from 'react';
import { PropTypes as T } from 'prop-types';

const propsTypes = {
  btnCss: T.string.isRequired,
  iconCSS: T.string.isRequired,
  onClick: T.func.isRequired,
};

const defaultProps = {
  btnCss: '',
};

const ActionButton = (props) => {
  const { btnCss, iconCSS, onClick } = props;

  return (
    <button className={`${btnCss} btn-small`} onClick={onClick}>
      <i className={`${iconCSS}`} />
    </button>
  );
};

ActionButton.propTypes = propsTypes;
ActionButton.defaultProps = defaultProps;
export default ActionButton;
