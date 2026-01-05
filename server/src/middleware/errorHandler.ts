import type { Request, Response, NextFunction, Errback } from "express";
import { DatabaseError } from "@/errors/DatabaseError.js";
import { z, ZodError } from "zod";

const errorHandler = (
    error: Errback,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    if (error instanceof ZodError) {
        res.status(400).json({
            status: 400,
            name: "Validation Error",
            message: "Error validating input",
            validationErrors: z.flattenError(error),
        });
    } else if (error instanceof DatabaseError) {
        res.status(500).json({
            status: error.status,
            name: error.name,
            message: error.message,
        });
    } else {
        res.status(500).json({
            status: 500,
            name: "Server Error",
            message: "Unable to process request",
        });
    }
};

export { errorHandler };
