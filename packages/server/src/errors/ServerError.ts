import { BaseError } from "@/errors/BaseError.js";

class ServerError extends BaseError {
    constructor(message: string, status = 500) {
        super("Internal Server Error", message, status);
    }
}

export { ServerError };
