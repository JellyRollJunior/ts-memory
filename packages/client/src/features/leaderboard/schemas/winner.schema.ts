import z from 'zod';

const winnerSchema = z.object({
    name: z.string(),
    datetime: z.iso.datetime(),
});

type Winner = z.infer<typeof winnerSchema>;

export { winnerSchema };
export type { Winner };
