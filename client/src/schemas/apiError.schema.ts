import { z } from 'zod';

const apiErrorSchema = z.object({
    status: z.number().default(500).catch(500),
    name: z
        .string()
        .default('Internal Server Error')
        .catch('Internal Server Error'),
    message: z
        .string()
        .default('Please try again later')
        .catch('Please try again later'),
});

export { apiErrorSchema };
