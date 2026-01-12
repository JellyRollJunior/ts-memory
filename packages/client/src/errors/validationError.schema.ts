import { z } from 'zod';

const validationErrorSchema = z.object({
    name: z.literal('Validation Error'),
    message: z.string(),
    status: z.literal(400),
    validationErrors: z.record(z.string(), z.string().array()),
}).strict();

export { validationErrorSchema };
