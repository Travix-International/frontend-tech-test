import React from 'react';
import { PropTypes as T } from 'prop-types';
import Formsy from 'formsy-react';

const propsTypes = {
  className: T.string,
  children: T.node.isRequired,
  onValidSubmit: T.func.isRequired,
  onEnable: T.func.isRequired,
  onDisable: T.func.isRequired,
};

const Form = (props) => {
  const {
    className,
    children,
    onValidSubmit,
    onEnable,
    onDisable,
  } = props;

  return (
    <Formsy
      className={`${className}`}
      onInvalid={onDisable}
      onValid={onEnable}
      onValidSubmit={onValidSubmit}
    >
      {children}
    </Formsy>
  );
};

Form.propTypes = propsTypes;
export default Form;
