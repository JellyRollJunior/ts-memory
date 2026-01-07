import type { ZodType } from "zod";
import type { Request, Response, NextFunction, RequestHandler } from "express";

const validateBody = <Type>(
    validationSchema: ZodType<Type>
): RequestHandler => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const result = validationSchema.parse(req.body);
        req.body = result;
        next();
    };
};

export { validateBody };
