class DatabaseError extends Error {
    status: number;
    constructor(msg: string, status = 500) {
        super(msg);
        this.name = "Database Error";
        this.status = status;
    }
}

export { DatabaseError };
