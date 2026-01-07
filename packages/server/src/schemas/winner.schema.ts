import { z } from "zod";

const postWinnersInputSchema = z.object({
    name: z
        .string()
        .min(1).max(16)
        .regex(/^[^<>]*$/, {
            message: "Invalid characters detected",
        }),
});
type PostWinnersInput = z.infer<typeof postWinnersInputSchema>;

const winnerDataTransferObjectSchema = z.object({
    name: z.string().min(1),
    datetime: z.date(),
});
type winnerDataTransferObject = z.infer<typeof winnerDataTransferObjectSchema>;

export { postWinnersInputSchema, winnerDataTransferObjectSchema };
export type { PostWinnersInput, winnerDataTransferObject };
