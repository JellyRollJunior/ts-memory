type BaseError = {
    message: string;
    name: string;
    status: number;
};

type ValidationError = BaseError & {
    validationError: Record<string, string>;
};

export type { BaseError, ValidationError };
