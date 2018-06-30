import * as React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {Col, Form, FormGroup, Label} from "reactstrap";
import ErrorWrapper from "../../viewModels/ErrorWrapper";
import ErrorMessageComponent from "../../components/ErrorMessage.component";
import TaskCreateOrUpdateRequestViewModel from "./viewModels/TaskCreateOrUpdateRequestViewModel";
import SmartFormField from "../../components/SmartFormField.component";

export interface TaskFormComponentStateProps {
    errorWrapper?: ErrorWrapper | null;
}
export const taskFormName = 'task';
class TaskField extends SmartFormField<keyof TaskCreateOrUpdateRequestViewModel> {}
class TasksFormComponent extends React.Component<TaskFormComponentStateProps & InjectedFormProps<any>> {
    render() {
        return (
            <Form>
                <ErrorMessageComponent error={this.props.errorWrapper} />

                <FormGroup row={true}>
                    <Label for="title" sm={2}>Title</Label>
                    <Col sm={10}>
                        <TaskField id="title" className="form-control" name="title" type="text" placeholder="Title" errorWrapper={this.props.errorWrapper}/>
                    </Col>
                </FormGroup>
                <FormGroup row={true}>
                    <Label for="description" sm={2}>Description</Label>
                    <Col sm={10}>
                        <TaskField id="description" className="form-control" name="description" type="textarea" placeholder="Description" errorWrapper={this.props.errorWrapper}/>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default reduxForm({form: taskFormName})(TasksFormComponent);