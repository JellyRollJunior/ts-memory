import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod/v3";

const createValidationMiddleware = (validationSchema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = validationSchema.safeParse(req.body);
        if (!result.success) {
            // throw 400 error
            throw new Error('I am not validated properly!!!')
        }
        req.body = result.data;
        next();
    };
};

export { createValidationMiddleware };
