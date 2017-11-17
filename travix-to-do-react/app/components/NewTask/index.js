import React from 'react';

require('./style.less');

function NewTask({ handleDescriptionChange, handleSubmit, value }) {
  return (
    <div className="new-task">
      <input
        {...{
          type: 'text',
          onChange: handleDescriptionChange,
          onKeyPress: handleSubmit,
          placeholder: 'Write your next task here...',
          value,
        }}
      />
    </div>
  );
}

NewTask.propTypes = {
  handleDescriptionChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  value: React.PropTypes.string,
};

export default NewTask;
