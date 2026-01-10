type BaseErrorDto = {
    message: string;
    name: string;
    status: number;
};

type ValidationErrorDto = BaseErrorDto & {
    validationError: Record<string, string>;
};

export type { BaseErrorDto, ValidationErrorDto };
