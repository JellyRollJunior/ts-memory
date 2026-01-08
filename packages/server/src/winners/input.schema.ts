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

export type { PostWinnersInput }
export { postWinnersInputSchema }