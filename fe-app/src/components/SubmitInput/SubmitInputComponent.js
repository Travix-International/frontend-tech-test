import React from 'react';
import { PropTypes as T } from 'prop-types';

const propsTypes = {
  buttonTitle: T.string.isRequired,
  canSubmit: T.bool.isRequired,
  name: T.string.isRequired,
};

const SubmitInputComponent = (props) => {
  const { canSubmit, name, buttonTitle } = props;

  return (
    <div>
      <input
        className=""
        disabled={!canSubmit}
        name={name}
        type="submit"
        value={buttonTitle}
      />
    </div>
  );
};

SubmitInputComponent.propTypes = propsTypes;
export default SubmitInputComponent;
