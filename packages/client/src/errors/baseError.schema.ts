import { z } from 'zod';

const baseErrorSchema = z.object({
    status: z.number(),
    name: z.string(),
    message: z.string(),
}).strict();

export { baseErrorSchema };
