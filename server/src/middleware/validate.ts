import type { ZodType } from "zod";
import type { Request, Response, NextFunction, RequestHandler } from "express";

const validateBody = <Type>(validationSchema: ZodType<Type>): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = validationSchema.safeParse(req.body);

        if (!result.success) {
            // throw 400 error
            throw new Error("I am not validated properly!!!");
        }

        req.body = result.data;
        next();
    };
};

export { validateBody };
