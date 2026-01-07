import { z } from "zod";

const postWinnersInputSchema = z.object({
    name: z
        .string()
        .min(1).max(16)
        .regex(/^[^<>]*$/, {
            message: "Invalid characters detected",
        }),
});
type PostWinnerInput = z.infer<typeof postWinnersInputSchema>;

const winnerResponseSchema = z.object({
    name: z.string().min(1),
    datetime: z.date(),
});
type WinnerResponse = z.infer<typeof winnerResponseSchema>;

export { postWinnersInputSchema, winnerResponseSchema };
export type { PostWinnerInput, WinnerResponse };
