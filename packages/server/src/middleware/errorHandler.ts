import type { Request, Response, NextFunction, Errback } from "express";
import { z, ZodError } from "zod";
import { ServerError } from "@/errors/ServerError.js";

const errorHandler404 = (_req: Request, res: Response) => {
    res.status(404).json({
        status: 404,
        name: "404 Not Found Error",
        message:
            "Invalid route detected. Consult the README for a list of valid routes",
    });
};

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
    } else if (error instanceof ServerError) {
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

export { errorHandler404, errorHandler };
