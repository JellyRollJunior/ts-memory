class BaseError extends Error {
    status: number;
    constructor(name: string, message: string, status = 500) {
        super(message);
        this.name = name;
        this.status = status;
    }
}

export { BaseError };
