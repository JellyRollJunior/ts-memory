import { baseErrorSchema } from './baseError.schema';
import { unknownErrorSchema } from './unknownError.schema';
import { validationErrorSchema } from './validationError.schema';

const resolveError = (error: unknown) => {
    const validationResult = validationErrorSchema.safeParse(error);
    if (validationResult.success) {
        return validationResult;
    }

    const baseErrorResult = baseErrorSchema.safeParse(error);
    if (baseErrorResult.success) {
        return baseErrorResult;
    }
    
    return unknownErrorSchema.parse(error);
};

export { resolveError };
