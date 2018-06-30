export class ErrorWrapper {
    message: string;
    description: string;
    validationResult: ValidationResult;

    constructor(message: string, description?: string) {
        this.message = message;
        this.description = description || '';
    }

    public static createFrom(obj: any): ErrorWrapper {
        const errorWrapper = new ErrorWrapper(obj.message, obj.description);
        errorWrapper.validationResult = obj.validationResult;
        return errorWrapper;
    }
}

export class ValidationResult {
    valid: boolean;
    validationFields: Array<ValidationFailure>;
}

export class ValidationFailure {
    name: string;
    message: string;
}

export default ErrorWrapper;