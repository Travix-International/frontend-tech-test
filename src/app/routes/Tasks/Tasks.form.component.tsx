import * as React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const taskFormName = 'task';
class TasksFormComponent extends React.Component<InjectedFormProps<any>> {
    render() {
        return (
            <div>
                <Field className="form-control" name="title" component="input" placeholder="Title"/>
                <Field className="form-control" name="description" component="textarea" placeholder="Description"/>
            </div>
        );
    }
}

export default reduxForm({form: taskFormName})(TasksFormComponent);