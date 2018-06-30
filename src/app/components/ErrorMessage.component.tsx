import * as React from 'react';
import ErrorWrapper from "../viewModels/ErrorWrapper";
import {Message} from "semantic-ui-react";

export interface ErrorMessageComponentProps {
    error?: ErrorWrapper | null;
}
class ErrorMessageComponent extends React.Component<ErrorMessageComponentProps> {
    render() {
        const error = this.props.error;
        return error ? (<Message error={true} header={error.message} content={error.description} />): null

    }
}

export default ErrorMessageComponent;