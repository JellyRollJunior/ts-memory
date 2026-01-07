import { z } from "zod";

const winnerDtoSchema = z.object({
    name: z.string().min(1),
    datetime: z.union([z.string().transform((str) => new Date(str)), z.date()]),
});

type WinnerDto = z.infer<typeof winnerDtoSchema>;

export type { WinnerDto };
export { winnerDtoSchema };
