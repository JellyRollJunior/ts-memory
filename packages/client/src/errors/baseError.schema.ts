import { z } from 'zod';

const baseErrorSchema = z.object({
    status: z.number().default(500).catch(500),
    name: z
        .string()
        .default('Internal Server Error')
        .catch('Internal Server Error'),
    message: z
        .string()
        .default('Unable to process request. Please try again later')
        .catch('Unable to process request. Please try again later'),
});

export { baseErrorSchema };
