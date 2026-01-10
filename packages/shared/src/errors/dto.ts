type BaseErrorDto = {
    message: string;
    name: string;
    status: number;
};

type ValidationErrorDto = {
    message: string;
    name: string;
    status: number;
    validationErrors: Record<string, string[]>;
};

export type { BaseErrorDto, ValidationErrorDto };
