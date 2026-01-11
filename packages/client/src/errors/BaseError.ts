import type { ResponseError } from '@/types/types.ts';

class BaseError extends Error {
    status: number;
    constructor(name: string, message: string, status = 500) {
        super(message);
        this.name = name;
        this.status = status;
    }
}

const createResponseError = (
    status: number,
    name: string,
    message: string
): ResponseError => {
    const error = new Error(message) as ResponseError;
    error.status = status;
    error.name = name;
    return error;
};

const isResponseError = (err: unknown): err is ResponseError => {
    return err instanceof Error && 'status' in err;
};

export { BaseError, createResponseError, isResponseError };
