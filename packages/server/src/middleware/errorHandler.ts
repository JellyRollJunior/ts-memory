import type { Request, Response, NextFunction, Errback } from "express";
import { z, ZodError } from "zod";
import { ServerError } from "@/errors/ServerError.js";
import { mapBaseErrorToDto, mapValidationErrorToDto } from "@/errors/mapper.js";
import { ValidationError } from "@/errors/ValidationError.js";

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
        const validationError = new ValidationError(
            z.flattenError(error).fieldErrors
        );
        const mapped = mapValidationErrorToDto(validationError);
        res.status(400).json(mapped);
    } else if (error instanceof ServerError) {
        const mapped = mapBaseErrorToDto(error);
        res.status(500).json(mapped);
    } else {
        const mapped = mapBaseErrorToDto(
            new ServerError("Unable to process request")
        );
        res.status(500).json(mapped);
    }
};

export { errorHandler404, errorHandler };
