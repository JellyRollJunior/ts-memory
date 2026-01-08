import { BaseError } from "./BaseError.js";

class ServerError extends BaseError {
    constructor(msg: string, status = 500) {
        super("Internal Server Error", msg, status);
    }
}

export { ServerError };
