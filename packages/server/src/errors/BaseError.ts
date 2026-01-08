class BaseError extends Error {
    status: number;
    constructor(name: string, msg: string, status = 500) {
        super(msg);
        this.name = name;
        this.status = status;
    }
}

export { BaseError };
