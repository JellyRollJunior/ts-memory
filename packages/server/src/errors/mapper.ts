import type { BaseError } from "./BaseError.js";
import type { ServerError } from "./ServerError.js";
import type { ValidationError } from "./ValidationError.js";

const mapBaseErrorToDto = (error: BaseError | ServerError) => {
    return {
        status: error.status,
        name: error.name,
        message: error.message,
    };
};

const mapValidationErrorToDto = (error: ValidationError) => {
    return {
        ...mapBaseErrorToDto(error),
        validationError: error.validationErrors,
    };
};

export { mapBaseErrorToDto, mapValidationErrorToDto };
