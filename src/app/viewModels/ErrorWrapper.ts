export class ErrorWrapper {
    title: string;
    description: string;
    formValidations: ValidationResult;
    type: ErrorType = ErrorType.GenericError;

    constructor(title: string, description?: string) {
        this.title = title;
        this.description = description || '';
    }
}

export enum ErrorType {
    GenericError = 0,
    ItemNotFound = 10,
    FailedResponseError = 20
}

export class ValidationResult {
    errors: Array<ValidationFailure>;
}

export class ValidationFailure {
    propertyName: string;
    errorMessage: string;
    errorCode: string;
}