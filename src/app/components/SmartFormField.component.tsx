import * as React from "react";
import {Field} from "redux-form";
import {FormText, Input} from "reactstrap";
import ErrorWrapper, {ValidationFailure} from "../viewModels/ErrorWrapper";
import './SmartFormField.component.css';

interface TemtFormFieldProps<T extends string> {
    name: T;
    id?: string;
    type?: 'text' | 'textarea';
    errorWrapper?: ErrorWrapper | null,
    className?: string;
    placeholder?: string;
}

function getValidationField(name: string, errorWrapper?: ErrorWrapper | null): ValidationFailure | undefined {
    if (!errorWrapper || !errorWrapper.validationResult || !errorWrapper.validationResult.validationFields)
        return undefined;
    return errorWrapper.validationResult.validationFields.find(field => field.name == name);
}

export default class SmartFormField<T extends string> extends React.Component<TemtFormFieldProps<T>> {

    field = props => {
        return (
            <Input
                id={this.props.id}
                className={this.props.className || 'form-control'}
                value={props.input.value || ''}
                onChange={(e: any) => {
                    e.preventDefault();
                    props.input.onChange(e.target.value || '');
                }}
                placeholder={this.props.placeholder}
                type={this.props.type}
            />
        )
    };

    render() {
        const { name, errorWrapper } = this.props;
        const validationField = getValidationField(name, errorWrapper);

        return (
            <div className={validationField ? "SmartFormField-component__error": ""}>
                <Field {...this.props} name={name} component={this.field} />
                {validationField ? <FormText>{validationField.message}</FormText> : null}
            </div>
        )
    }
}
