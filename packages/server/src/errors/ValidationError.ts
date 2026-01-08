import { BaseError } from "@/errors/BaseError.js";

class ValidationError extends BaseError {
    validationErrors: Record<string, string[]>;
    constructor(validationErrors: Record<string, string[]>) {
        super("Validation Error", "Error validating input", 400);
        this.validationErrors = validationErrors;
    }
}

export { ValidationError };
