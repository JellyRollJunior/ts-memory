import type { ResponseError } from '@/types/types.ts';

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

export { createResponseError, isResponseError };
