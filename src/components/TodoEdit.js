import React , {PropTypes}  from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form, Row, Col } from "react-bootstrap";
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";
import * as types from '../sagas/actionTypes';
import * as todoActions from '../sagas/todos';

// Todo add/edit page component
export class TodoEdit extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  // render
  render() {
    const {todo, handleSubmit, error, invalid, submitting} = this.props;
    return (
      <div className="page-todo-edit">
        <PageHeader>{'Todo ' + (todo.id ? 'edit' : 'add')}</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
          <Field component={FormField} name="task" label="Task" doValidate={true}/>
            <Row>
              <Col xsOffset={1}>
                <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..." buttonSave="Save Todo"/>
              </Col>
            </Row>
        </Form>
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    this.props.actions.submitTask(values);
  }
}

TodoEdit.propTypes = {
  actions: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.func,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};


// decorate the form component
const TodoEditForm = reduxForm({
  form: 'todo_edit',
  validate: values => {
    const errors = {};
    if (!values.task) {
      errors.task = 'Task is required';
    }
    return errors;
  },
})(TodoEdit);

// export the connected class
function mapStateToProps(state, own_props) {
  const todo = state.todos.find(x => Number(x.id) === Number(own_props.params.id)) || {};
  return {
    todo: todo,
    initialValues: todo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoEditForm);
