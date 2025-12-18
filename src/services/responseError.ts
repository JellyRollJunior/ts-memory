import type { ResponseError } from "../types/types";

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

export { createResponseError };
