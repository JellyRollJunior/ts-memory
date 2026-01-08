import type { ZodType } from "zod";
import type { Request, Response, NextFunction, RequestHandler } from "express";
import { ServerError } from "@/errors/ServerError.js";

const validateBody = <T>(
    validationSchema: ZodType<T, unknown>
): RequestHandler => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const result = validationSchema.parse(req.body);
        req.body = result;
        next();
    };
};

const validateDto = <T>(
    validationSchema: ZodType<T, unknown>,
    input: unknown
) => {
    const result = validationSchema.safeParse(input);
    if (!result.success) {
        throw new ServerError("Internal Server Error");
    }
};

export { validateBody, validateDto };
