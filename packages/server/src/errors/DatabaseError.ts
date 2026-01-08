import { BaseError } from "./BaseError.js";

class DatabaseError extends BaseError {
    constructor(msg: string, status = 500) {
        super("Database Error", msg, status);
    }
}

export { DatabaseError };
