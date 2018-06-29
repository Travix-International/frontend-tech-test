import * as React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Col, Form, FormGroup, Label} from "reactstrap";

export const taskFormName = 'task';
class TasksFormComponent extends React.Component<InjectedFormProps<any>> {
    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="taskTitle" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Field id="taskTitle" className="form-control" name="title" component="input" placeholder="Title"/>
                        {/*<Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />*/}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="taskDescription" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Field id="taskDescription" className="form-control" name="description" component="textarea" placeholder="Description"/>
                        {/*<Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />*/}
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default reduxForm({form: taskFormName})(TasksFormComponent);