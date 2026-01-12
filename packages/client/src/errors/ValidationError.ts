import { BaseError } from './BaseError';

class ValidationError extends BaseError {
    validationErrors: Record<string, string[]>;
    constructor(validationErrors: Record<string, string[]>) {
        super('Validation Error', 'Eror validating user input', 400);
        this.validationErrors = validationErrors;
    }
}

export { ValidationError };
