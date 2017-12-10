import React from 'react';
import { PropTypes as T } from 'prop-types';
import Form from '../../../components/Form/FormComponent';
import Input from '../../../components/Input/InputComponent';
import SubmitInput from '../../../components/SubmitInput/SubmitInputComponent';

const propTypes = {
  canSubmit: T.bool,
  isSubmitting: T.bool,
  onValidSubmit: T.func,
  onEnable: T.func,
  onDisable: T.func,
};

const AddTasksComponent = (props) => {
  const {
    canSubmit,
    isSubmitting,
    onDisable,
    onEnable,
    onValidSubmit,
  } = props;

  return (
    <Form
      className="row form-group"
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
          value=""
        />
      </div>
      <div className="col sm-6">
        <Input
          inputClass="input-block"
          label="Description"
          name="description"
          value=""
        />
      </div>
      <div className="col sm-3">
        <SubmitInput
          canSubmit={canSubmit && !isSubmitting}
          isSubmitting={isSubmitting}
          name="submit"
        />
      </div>
    </Form>
  );
};

AddTasksComponent.propTypes = propTypes;
export default AddTasksComponent;
