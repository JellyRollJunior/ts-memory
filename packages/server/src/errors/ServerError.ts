class ServerError extends Error {
    status: number;
    constructor(msg: string, status = 500) {
        super(msg);
        this.name = "Internal Server Error";
        this.status = status;
    }
}

export { ServerError };
