import React from 'react';
import { PropTypes as T } from 'prop-types';
import Form from '../../components/Form/FormComponent';
import Input from '../../components/Input/InputComponent';
import SubmitInput from '../../components/SubmitInput/SubmitInputComponent';

const propTypes = {
  buttonTitle: T.string,
  canSubmit: T.bool,
  isSubmitting: T.bool,
  onValidSubmit: T.func,
  onEnable: T.func,
  onDisable: T.func,
  task: T.object,
};

const defaultProps = {
  task: {
    title: '',
    description: '',
  },
};

const TaskFormComponent = (props) => {
  const {
    buttonTitle,
    canSubmit,
    isSubmitting,
    onDisable,
    onEnable,
    onValidSubmit,
    task,
  } = props;

  return (
    <Form
      className="row flex-bottom form-group"
      onDisable={onDisable}
      onEnable={onEnable}
      onValidSubmit={onValidSubmit}
    >
      <div className="col sm-3">
        <Input
          inputClass="input-block"
          label="Title"
          name="title"
          required
          validationErrors={{
            isDefaultRequiredValue: 'Task title is required',
          }}
          value={task.title}
        />
      </div>
      <div className="col sm-6">
        <Input
          inputClass="input-block"
          label="Description"
          name="description"
          value={task.description}
        />
      </div>
      <div className="col sm-3">
        <SubmitInput
          buttonTitle={buttonTitle}
          canSubmit={canSubmit && !isSubmitting}
          name="submit"
        />
      </div>
    </Form>
  );
};

TaskFormComponent.propTypes = propTypes;
TaskFormComponent.defaultProps = defaultProps;
export default TaskFormComponent;
