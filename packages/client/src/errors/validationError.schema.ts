import { z } from 'zod';

const validationErrorSchema = z.object({
    name: z.literal('Validation Error'),
    message: z.string(),
    status: z.number(),
    validationErrors: z.record(z.string(), z.string().array()),
});

export { validationErrorSchema };
