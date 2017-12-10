import React from 'react';
import { PropTypes as T } from 'prop-types';

const propsTypes = {
  canSubmit: T.bool.isRequired,
  isSubmitting: T.bool.isRequired,
  name: T.string.isRequired,
};

const SubmitInputComponent = (props) => {
  const { canSubmit, name, isSubmitting } = props;

  return (
    <div>
      <input
        className=""
        disabled={!canSubmit}
        name={name}
        type="submit"
        value={isSubmitting ? 'Creating...' : 'Create'}
      />
    </div>
  );
};

SubmitInputComponent.propTypes = propsTypes;

export default SubmitInputComponent;
